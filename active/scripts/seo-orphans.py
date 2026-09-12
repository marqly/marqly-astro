#!/usr/bin/env python3
"""Internal-link orphan audit over built output (dist/client).

Counts inbound <a href> links per sitemap-equivalent HTML page and reports
pages with zero internal inbound links, grouped by template. This is the
local-build counterpart to the production crawl, so orphan regressions are
caught before deploy.

Usage: python3 active/scripts/seo-orphans.py [dist/client]
"""
import html as htmllib
import os
import re
import sys
from collections import Counter, defaultdict

BASE = "https://www.marqly.com"
LOCALES = ("es", "pt", "de", "fr", "it", "ja", "zh", "ko", "nl", "pl", "tr")
ROOT = sys.argv[1] if len(sys.argv) > 1 else "dist/client"


def walk(d):
    for dirpath, _, files in os.walk(d):
        for f in files:
            if f.endswith(".html"):
                yield os.path.join(dirpath, f)


def to_url(path):
    rel = os.path.relpath(path, ROOT).replace(os.sep, "/")
    if rel.endswith(".html"):
        rel = rel[: -len(".html")]
    if rel == "index":
        return "/"
    if rel.endswith("/index"):
        rel = rel[: -len("/index")]
    return "/" + rel if rel else "/"


def allowed_headings():
    """Parse LINKHUB_UI + BLOG_UI from src/i18n/ui.ts into {locale: {headings}}."""
    path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
        os.path.abspath(__file__)))), "src/i18n/ui.ts")
    out = {}
    try:
        src = open(path, encoding="utf-8").read()
    except OSError:
        return out
    for block_name in ("LINKHUB_UI", "BLOG_UI"):
        m = re.search(rf"export const {block_name}[^{{]*\{{(.*?)\n\}};", src, re.S)
        if not m:
            continue
        for lang, body in re.findall(r"\n\s{2}(\w+):\s*\{(.*?)\},", m.group(1), re.S):
            vals = re.findall(r"['’\"]([^'\"]+)['’\"]\s*[,}]", body)
            vals += re.findall(r":\s*'([^']*)'", body)
            out.setdefault(lang, set()).update(v.strip() for v in vals if v.strip())
    return out


def template_of(u):
    parts = [p for p in u.split("/") if p]
    if not parts:
        return "home"
    if parts[0] == "prompt-gallery":
        return "prompt-gallery/index" if len(parts) == 1 else "prompt-gallery/*"
    if parts[0] in LOCALES:
        rest = parts[1:]
        if not rest:
            return f"locale-root:{parts[0]}"
        if rest[0] == "blog":
            return f"locale:{parts[0]}/blog"
        if len(rest) == 1:
            return f"locale:{parts[0]}/<root-page>"
        return f"locale:{parts[0]}/{rest[0]}/*"
    if len(parts) == 1:
        return "root-lander"
    return f"{parts[0]}/{'*' if len(parts) > 2 else parts[1]}"


def main():
    pages = {}
    for p in walk(ROOT):
        u = to_url(p)
        if u == "/404":
            continue
        try:
            pages[u] = open(p, encoding="utf-8", errors="replace").read()
        except OSError:
            continue

    inbound = Counter()
    for u, html in pages.items():
        dom = re.sub(r"<script\b.*?</script>", " ", html, flags=re.S | re.I)
        dom = re.sub(r"<!--.*?-->", " ", dom, flags=re.S)
        seen = set()
        for href in re.findall(r'<a\b[^>]*href=["\']([^"\']+)["\']', dom, flags=re.I):
            if href.startswith(("http", "//")):
                if not href.startswith(BASE):
                    continue
                href = href[len(BASE):]
            if not href.startswith("/"):
                continue
            t = href.split("?")[0].split("#")[0]
            # Strip a trailing slash only — `t[:-1]` would eat the last real
            # character (/extension -> /extensio) and mark every page an orphan.
            t = t.rstrip("/") or "/"
            if t != u and t not in seen:
                seen.add(t)
                inbound[t] += 1

    orphans = sorted(u for u in pages if inbound.get(u, 0) == 0 and u != "/")
    print(f"pages analysed: {len(pages)}")
    print(f"orphans (0 inbound internal <a>): {len(orphans)}  "
          f"({100*len(orphans)//max(len(pages),1)}%)")
    by_t = Counter(template_of(u) for u in orphans)
    for t, n in by_t.most_common(30):
        print(f"  {n:>5}  {t}")
    if orphans:
        print("  examples:", orphans[:15])

    # Link-hub coverage: does every localized page carry a localized hub?
    hub_missing = [u for u, h in pages.items()
                   if any(u.startswith(f"/{l}/") for l in LOCALES)
                   and 'class="linkhub"' not in h]
    print(f"\nlocalized pages missing a link hub: {len(hub_missing)}")
    if hub_missing:
        print("  by template:", dict(Counter(template_of(u) for u in hub_missing).most_common(12)))
        print("  examples:", hub_missing[:15])

    # English leakage: a localized hub must emit that locale's own headings.
    # Compare against LINKHUB_UI/BLOG_UI parsed from src/i18n/ui.ts rather than a
    # hardcoded English list — "Alternatives" is correct French and Italian, so a
    # naive English blocklist reports false positives.
    allowed = allowed_headings()
    en_leak = []
    for u, h in pages.items():
        lang = next((l for l in LOCALES if u.startswith(f"/{l}/")), None)
        if not lang:
            continue
        m = re.search(r'<section class="linkhub".*?</section>', h, re.S)
        if not m:
            continue
        ok = allowed.get(lang, set())
        for head in re.findall(r"<h4[^>]*>(.*?)</h4>", m.group(0), re.S):
            txt = htmllib.unescape(re.sub(r"<[^>]+>", "", head)).strip()
            if txt and ok and txt not in ok:
                en_leak.append((u, txt))
    print(f"localized hubs with headings outside that locale's UI strings: {len(en_leak)}")
    if en_leak:
        print("  examples:", en_leak[:10])

    return {"pages": len(pages), "orphans": orphans, "hub_missing": hub_missing,
            "en_leak": en_leak}


if __name__ == "__main__":
    main()
