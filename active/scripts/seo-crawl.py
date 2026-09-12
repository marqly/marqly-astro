#!/usr/bin/env python3
"""Production SEO crawler for marqly.com.

Fetches every sitemap URL and records the on-page SEO signals that matter:
status, redirects, title, meta description, robots meta, canonical, hreflang
cluster, JSON-LD types, H1/H2 structure, word count, image alt coverage,
internal/outbound link counts, crawl depth, and HTML size.

Output: active/tmp/crawl.json  (list of per-URL records)
Usage:  python3 active/scripts/seo-crawl.py [--limit N] [--workers N]
"""
import json
import os
import re
import ssl
import sys
import time
import hashlib
import html as htmllib
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed
from collections import Counter

import certifi

BASE = "https://www.marqly.com"
SITEMAP = f"{BASE}/sitemap-0.xml"
OUT = "active/tmp/crawl.json"
CACHE = "active/tmp/html"
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/128.0 Safari/537.36 seo-crawl/1.0")

# python.org macOS builds ship without a wired system trust store.
SSL_CTX = ssl.create_default_context(cafile=certifi.where())


def cache_path(url):
    return os.path.join(CACHE, hashlib.sha1(url.encode()).hexdigest() + ".json")


def get_sitemap_urls():
    with urllib.request.urlopen(urllib.request.Request(SITEMAP, headers={"User-Agent": UA}),
                                timeout=30, context=SSL_CTX) as r:
        d = r.read().decode("utf-8", "replace")
    return re.findall(r"<loc>(.*?)</loc>", d)


def strip_tags(s):
    s = re.sub(r"<script\b.*?</script>", " ", s, flags=re.S | re.I)
    s = re.sub(r"<style\b.*?</style>", " ", s, flags=re.S | re.I)
    s = re.sub(r"<!--.*?-->", " ", s, flags=re.S)
    s = re.sub(r"<[^>]+>", " ", s)
    return htmllib.unescape(re.sub(r"\s+", " ", s)).strip()


def find_all_meta(head, name_attr, attr):
    """Return content of meta tags matching name= or property= (case-insensitive).

    Quote-aware: the closing delimiter must match the opening one, otherwise a
    description containing an apostrophe (L'…, YouTube's, 2026'de) truncates and
    reports a false "duplicate description" defect.
    """
    out = []
    for tag in re.findall(r"<meta\b[^>]*>", head, flags=re.I):
        m = re.search(rf'{attr}\s*=\s*["\']([^"\']+)["\']', tag, flags=re.I)
        if m and m.group(1).strip().lower() == name_attr.lower():
            c = re.search(r'content\s*=\s*("([^"]*)"|\'([^\']*)\')', tag, flags=re.I)
            if c:
                out.append(htmllib.unescape(c.group(2) if c.group(2) is not None else c.group(3)))
    return out


def crawl(url, use_cache=True):
    rec = {"url": url, "path": url.replace(BASE, "") or "/"}
    cp = cache_path(url)
    if use_cache and os.path.exists(cp):
        with open(cp) as fh:
            cached = json.load(fh)
        rec.update(cached)
        rec["from_cache"] = True
        return rec

    t0 = time.time()
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en"})
    try:
        with urllib.request.urlopen(req, timeout=30, context=SSL_CTX) as r:
            body = r.read().decode("utf-8", "replace")
            rec["status"] = r.status
            rec["final_url"] = r.geturl()
            rec["headers"] = {k.lower(): v for k, v in r.headers.items()
                              if k.lower() in ("content-type", "x-robots-tag", "cache-control",
                                               "content-encoding", "cf-cache-status")}
    except urllib.error.HTTPError as e:
        rec["status"] = e.code
        rec["final_url"] = url
        rec["error"] = str(e.reason)
        rec["ms"] = int((time.time() - t0) * 1000)
        return rec
    except Exception as e:  # noqa: BLE001
        rec["status"] = 0
        rec["final_url"] = url
        rec["error"] = f"{type(e).__name__}: {e}"
        rec["ms"] = int((time.time() - t0) * 1000)
        return rec

    rec["ms"] = int((time.time() - t0) * 1000)
    rec["bytes"] = len(body.encode("utf-8"))
    rec["redirected"] = rec["final_url"].rstrip("/") != url.rstrip("/")

    # Structural signals must be read from the DOM, NOT from raw source: inline
    # <script> bodies contain HTML string literals (e.g. a Netscape bookmark
    # export template with "<H1>Bookmarks</H1>") that are never rendered.
    # Counting them produces phantom extra H1s / images / links.
    dom = re.sub(r"<script\b.*?</script>", " ", body, flags=re.S | re.I)
    dom = re.sub(r"<style\b.*?</style>", " ", dom, flags=re.S | re.I)
    dom = re.sub(r"<!--.*?-->", " ", dom, flags=re.S)

    # --- head / metadata ---
    head_m = re.search(r"<head\b[^>]*>(.*?)</head>", body, flags=re.S | re.I)
    head = head_m.group(1) if head_m else body[:20000]

    titles = re.findall(r"<title\b[^>]*>(.*?)</title>", body, flags=re.S | re.I)
    rec["title"] = htmllib.unescape(re.sub(r"\s+", " ", titles[0])).strip() if titles else ""
    rec["title_count"] = len(titles)
    rec["title_len"] = len(rec["title"])

    descs = find_all_meta(head, "description", "name")
    rec["description"] = descs[0] if descs else ""
    rec["description_count"] = len(descs)
    rec["description_len"] = len(rec["description"])

    robots = find_all_meta(head, "robots", "name")
    rec["robots_meta"] = robots[0] if robots else ""
    rec["noindex"] = "noindex" in rec["robots_meta"].lower()

    canons = re.findall(r'<link\b[^>]*rel=["\']canonical["\'][^>]*>', head, flags=re.I)
    canon_urls = []
    for c in canons:
        m = re.search(r'href=["\']([^"\']+)["\']', c, flags=re.I)
        if m:
            canon_urls.append(m.group(1))
    rec["canonical"] = canon_urls[0] if canon_urls else ""
    rec["canonical_count"] = len(canon_urls)
    rec["canonical_self"] = bool(canon_urls) and canon_urls[0].rstrip("/") == url.rstrip("/")
    rec["canonical_mismatch"] = bool(canon_urls) and canon_urls[0].rstrip("/") != url.rstrip("/")

    # hreflang alternates
    alts = []
    for tag in re.findall(r"<link\b[^>]*>", head, flags=re.I):
        if re.search(r'rel=["\']alternate["\']', tag, flags=re.I):
            hm = re.search(r'hreflang=["\']([^"\']+)["\']', tag, flags=re.I)
            um = re.search(r'href=["\']([^"\']+)["\']', tag, flags=re.I)
            if hm and um:
                alts.append({"hreflang": hm.group(1), "href": um.group(1)})
    rec["hreflang"] = alts
    rec["hreflang_count"] = len(alts)
    rec["has_xdefault"] = any(a["hreflang"].lower() == "x-default" for a in alts)

    # html lang attr
    lm = re.search(r"<html\b[^>]*\blang=[\"']([^\"']+)[\"']", body[:3000], flags=re.I)
    rec["html_lang"] = lm.group(1) if lm else ""

    og = {}
    for prop in ("og:title", "og:description", "og:image", "og:type", "og:url", "twitter:card"):
        v = find_all_meta(head, prop, "property") or find_all_meta(head, prop, "name")
        og[prop] = v[0] if v else ""
    rec["og"] = og
    rec["has_og_image"] = bool(og["og:image"])

    # --- structured data ---
    ld_types = []
    for block in re.findall(r'<script\b[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
                            body, flags=re.S | re.I):
        try:
            data = json.loads(block.strip())
        except Exception:  # noqa: BLE001
            rec.setdefault("jsonld_parse_errors", 0)
            rec["jsonld_parse_errors"] = rec.get("jsonld_parse_errors", 0) + 1
            continue
        stack = [data]
        while stack:
            node = stack.pop()
            if isinstance(node, dict):
                t = node.get("@type")
                if isinstance(t, str):
                    ld_types.append(t)
                elif isinstance(t, list):
                    ld_types.extend(t)
                for v in node.values():
                    if isinstance(v, (dict, list)):
                        stack.append(v)
            elif isinstance(node, list):
                stack.extend(node)
    rec["schema_types"] = sorted(set(ld_types))
    rec["schema_count"] = len(ld_types)

    # --- headings (DOM only) ---
    h1s = [strip_tags(x).strip() for x in re.findall(r"<h1\b[^>]*>(.*?)</h1>", dom, flags=re.S | re.I)]
    h1s = [h for h in h1s if h]
    rec["h1"] = h1s[0] if h1s else ""
    rec["h1_count"] = len(h1s)
    rec["h2_count"] = len(re.findall(r"<h2\b", dom, flags=re.I))
    rec["h3_count"] = len(re.findall(r"<h3\b", dom, flags=re.I))
    rec["headings"] = {f"h{i}": len(re.findall(rf"<h{i}\b", dom, flags=re.I)) for i in range(1, 7)}

    # --- semantic landmarks ---
    rec["landmarks"] = {t: len(re.findall(rf"<{t}\b", dom, flags=re.I))
                        for t in ("main", "nav", "article", "section", "header", "footer", "aside")}

    # --- content depth ---
    main_m = re.search(r"<main\b[^>]*>(.*?)</main>", dom, flags=re.S | re.I)
    content_scope = main_m.group(1) if main_m else dom
    rec["word_count"] = len(strip_tags(content_scope).split())
    rec["text_chars"] = len(strip_tags(content_scope))
    rec["text_to_html_ratio"] = round(rec["text_chars"] / max(rec["bytes"], 1), 4)

    # --- images ---
    # HTML5 parses a valueless attribute as the empty string, so `<img alt>` IS
    # `alt=""` (valid decorative marking) — it is not a missing-alt defect.
    imgs = re.findall(r"<img\b[^>]*>", dom, flags=re.I)

    def alt_state(tag):
        m = re.search(r'\balt\s*=\s*("([^"]*)"|\'([^\']*)\')', tag, flags=re.I)
        if m:
            val = m.group(2) if m.group(2) is not None else m.group(3)
            return "text" if val.strip() else "empty"
        if re.search(r"\balt(?![\w-])", tag, flags=re.I):
            return "empty"  # bare alt == alt=""
        return "missing"

    states = Counter(alt_state(i) for i in imgs)
    rec["img_count"] = len(imgs)
    rec["img_alt_text"] = states["text"]
    rec["img_alt_empty"] = states["empty"]
    rec["img_missing_alt"] = states["missing"]
    # An absolutely positioned image inside an aspect-ratio/sized parent cannot
    # shift layout — the parent already reserves the box. Counting those as a CLS
    # risk produces a permanent false positive (marqly's landing cover cards are
    # `relative aspect-video w-full` + `absolute inset-0 h-full w-full`).
    def reserves_space(tag):
        cls = (re.search(r'class\s*=\s*"([^"]*)"', tag, flags=re.I) or [None, ""])[1]
        return "absolute" in cls.split() or "fixed" in cls.split()

    rec["img_no_dimensions"] = sum(1 for i in imgs
                                   if not (re.search(r"\bwidth\s*=", i, flags=re.I)
                                           and re.search(r"\bheight\s*=", i, flags=re.I))
                                   and not reserves_space(i))
    rec["img_eager"] = sum(1 for i in imgs if re.search(r'loading\s*=\s*["\']eager["\']', i, flags=re.I))

    # --- links (DOM only) ---
    hrefs = re.findall(r'<a\b[^>]*href=["\']([^"\']*)["\']', dom, flags=re.I)
    internal, external, empty_anchors = [], [], 0
    for h in hrefs:
        if not h or h.startswith(("#", "javascript:", "mailto:", "tel:")):
            empty_anchors += 1
            continue
        if h.startswith(BASE) or h.startswith("/"):
            internal.append(h)
        elif h.startswith("http"):
            external.append(h)
        elif h.startswith("marqly"):
            internal.append(h)
    rec["internal_links"] = len(internal)
    rec["external_links"] = len(external)
    rec["anchor_href_issues"] = empty_anchors
    rec["internal_targets"] = sorted({h.split(BASE)[-1].split("?")[0].split("#")[0] for h in internal})
    rec["malformed_hrefs"] = sorted({h for h in hrefs
                                     if h.startswith((" ", "//", "https://https://", "http://http://"))
                                     or " " in h or h.endswith(".md")})
    rec["depth"] = len([p for p in rec["path"].split("/") if p])

    # --- JS dependency: is the main copy present in raw HTML? ---
    rec["has_main"] = bool(main_m)
    rec["client_only_markers"] = len(re.findall(r'astro-island|data-astro-render-fallback', body))

    os.makedirs(CACHE, exist_ok=True)
    with open(cp, "w") as fh:
        json.dump(rec, fh)
    return rec


def main():
    limit, workers, use_cache = None, 24, True
    args = sys.argv[1:]
    if "--limit" in args:
        limit = int(args[args.index("--limit") + 1])
    if "--workers" in args:
        workers = int(args[args.index("--workers") + 1])
    if "--no-cache" in args:
        use_cache = False

    urls = get_sitemap_urls()
    print(f"sitemap URLs: {len(urls)}", file=sys.stderr)
    if limit:
        urls = urls[:limit]

    recs = []
    t0 = time.time()
    with ThreadPoolExecutor(max_workers=workers) as ex:
        futs = {ex.submit(crawl, u, use_cache): u for u in urls}
        for i, f in enumerate(as_completed(futs), 1):
            recs.append(f.result())
            if i % 250 == 0:
                print(f"  {i}/{len(urls)} ({time.time()-t0:.0f}s)", file=sys.stderr)

    recs.sort(key=lambda r: r["path"])
    with open(OUT, "w") as fh:
        json.dump(recs, fh, indent=1)

    st = Counter(r["status"] for r in recs)
    print(f"\ncrawled {len(recs)} in {time.time()-t0:.0f}s -> {OUT}", file=sys.stderr)
    print("status:", dict(st), file=sys.stderr)


if __name__ == "__main__":
    main()
