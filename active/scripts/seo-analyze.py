#!/usr/bin/env python3
"""Analyze active/tmp/crawl.json into an SEO defect report.

Emits grouped findings + a JSON summary used to populate .seo/ artifacts.
Usage: python3 active/scripts/seo-analyze.py
"""
import json
import re
import sys
from collections import Counter, defaultdict

BASE = "https://www.marqly.com"
LOCALES = ("es", "pt", "de", "fr", "it", "ja", "ko", "nl", "pl", "tr", "zh")


def load():
    with open("active/tmp/crawl.json") as fh:
        return json.load(fh)


def template_of(path):
    parts = [p for p in path.split("/") if p]
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
        # collapse the localized commercial namespace (/es/usos/*, /de/vergleich/*)
        return f"locale:{parts[0]}/{rest[0]}/*"
    if len(parts) == 1:
        return "root-lander"
    if parts[0] == "blog":
        return "blog/*"
    return f"{parts[0]}/{'*' if len(parts) > 2 else parts[1]}"


def content_units(rec):
    """Whitespace words are meaningless for CJK (no spaces). Estimate comparable
    content volume: CJK chars ~= 1 unit per char, Latin ~= 1 unit per ~6 chars."""
    lang = (rec.get("html_lang") or "en").split("-")[0]
    chars = rec.get("text_chars", 0)
    if lang in ("ja", "zh", "ko"):
        return int(chars * 0.6)
    return rec.get("word_count", 0)


def main():
    recs = load()
    out = {"total_urls": len(recs)}
    P = lambda *a: print(*a)  # noqa: E731

    P(f"# CRAWL ANALYSIS — {len(recs)} URLs, all status "
      f"{dict(Counter(r['status'] for r in recs))}\n")

    # ---------- template census ----------
    tpl = defaultdict(list)
    for r in recs:
        tpl[template_of(r["path"])].append(r)
    P("## Template census (n, median content units, median title len)\n")
    P(f"{'template':<34}{'n':>6}{'medCU':>8}{'minCU':>8}{'medTitle':>10}{'schema%':>9}{'hreflang%':>11}")
    rows = []
    for t, rs in sorted(tpl.items(), key=lambda kv: -len(kv[1])):
        wcs = sorted(content_units(r) for r in rs)
        tls = sorted(r.get("title_len", 0) for r in rs)
        med = lambda a: a[len(a) // 2] if a else 0  # noqa: E731
        sch = 100 * sum(1 for r in rs if r.get("schema_types")) // len(rs)
        hl = 100 * sum(1 for r in rs if r.get("hreflang_count", 0) > 1) // len(rs)
        rows.append((t, len(rs), med(wcs), wcs[0], med(tls), sch, hl))
        P(f"{t:<34}{len(rs):>6}{med(wcs):>8}{wcs[0]:>8}{med(tls):>10}{sch:>8}%{hl:>10}%")
    out["template_census"] = [
        {"template": t, "n": n, "median_content_units": mw, "min_content_units": mnw,
         "median_title_len": mt, "schema_pct": s, "hreflang_pct": h}
        for t, n, mw, mnw, mt, s, h in rows
    ]

    # ---------- duplicate titles ----------
    P("\n## Duplicate <title> (grouped)\n")
    by_title = defaultdict(list)
    for r in recs:
        if r.get("title"):
            by_title[r["title"]].append(r["path"])
    dups = {k: v for k, v in by_title.items() if len(v) > 1}
    dup_url_count = sum(len(v) for v in dups.values())
    P(f"{len(dups)} distinct titles shared by {dup_url_count} URLs\n")
    for t, ps in sorted(dups.items(), key=lambda kv: -len(kv[1]))[:30]:
        P(f"  [{len(ps):>4}x] {t[:88]}")
        for p in ps[:4]:
            P(f"          {p}")
        if len(ps) > 4:
            P(f"          ... +{len(ps)-4} more")
    out["duplicate_title_groups"] = len(dups)
    out["duplicate_title_urls"] = dup_url_count
    out["duplicate_titles"] = {k: v for k, v in sorted(dups.items(), key=lambda kv: -len(kv[1]))}

    # ---------- duplicate descriptions ----------
    P("\n## Duplicate meta description\n")
    by_desc = defaultdict(list)
    for r in recs:
        if r.get("description"):
            by_desc[r["description"]].append(r["path"])
    ddups = {k: v for k, v in by_desc.items() if len(v) > 1}
    P(f"{len(ddups)} distinct descriptions shared by {sum(len(v) for v in ddups.values())} URLs\n")
    for t, ps in sorted(ddups.items(), key=lambda kv: -len(kv[1]))[:20]:
        P(f"  [{len(ps):>4}x] {t[:88]}")
        for p in ps[:3]:
            P(f"          {p}")
        if len(ps) > 3:
            P(f"          ... +{len(ps)-3} more")
    out["duplicate_desc_groups"] = len(ddups)
    out["duplicate_desc_urls"] = sum(len(v) for v in ddups.values())
    out["duplicate_descriptions"] = {k: v for k, v in sorted(ddups.items(), key=lambda kv: -len(kv[1]))}

    # ---------- missing meta ----------
    P("\n## Missing / malformed metadata\n")
    no_title = [r["path"] for r in recs if not r.get("title")]
    no_desc = [r["path"] for r in recs if not r.get("description")]
    short_title = [(r["path"], r["title"], r["title_len"]) for r in recs if 0 < r.get("title_len", 0) < 20]
    long_title = [(r["path"], r["title"], r["title_len"]) for r in recs if r.get("title_len", 0) > 65]
    short_desc = [(r["path"], r.get("description_len", 0)) for r in recs if 0 < r.get("description_len", 0) < 70]
    long_desc = [(r["path"], r.get("description_len", 0)) for r in recs if r.get("description_len", 0) > 175]
    no_og_img = [r["path"] for r in recs if not r.get("has_og_image")]
    P(f"  missing <title>:            {len(no_title)}")
    P(f"  missing meta description:   {len(no_desc)}")
    P(f"  title < 20 chars:           {len(short_title)}")
    P(f"  title > 65 chars:           {len(long_title)}")
    P(f"  description < 70 chars:     {len(short_desc)}")
    P(f"  description > 175 chars:    {len(long_desc)}")
    P(f"  missing og:image:           {len(no_og_img)}")
    for label, items in (("missing title", no_title), ("missing description", no_desc),
                         ("missing og:image", no_og_img)):
        if items:
            P(f"    {label}: {items[:12]}")
    out["missing"] = {"no_title": no_title, "no_desc": no_desc, "no_og_image": no_og_img,
                      "short_title": short_title[:200], "long_title_count": len(long_title),
                      "short_desc_count": len(short_desc), "long_desc_count": len(long_desc)}
    out["long_titles"] = long_title[:400]
    out["short_titles"] = short_title[:400]

    # ---------- H1 ----------
    P("\n## Heading structure\n")
    h1_zero = [r["path"] for r in recs if r.get("h1_count", 0) == 0]
    h1_multi = [(r["path"], r["h1_count"]) for r in recs if r.get("h1_count", 0) > 1]
    no_h2 = [r["path"] for r in recs if r.get("h2_count", 0) == 0]
    no_main = [r["path"] for r in recs if not r.get("has_main")]
    P(f"  pages with 0 H1:        {len(h1_zero)}")
    P(f"  pages with >1 H1:       {len(h1_multi)}")
    P(f"  pages with 0 H2:        {len(no_h2)}")
    P(f"  pages without <main>:   {len(no_main)}")
    if h1_zero:
        P(f"    0-H1 examples: {h1_zero[:15]}")
    if h1_multi:
        P(f"    multi-H1 examples: {h1_multi[:15]}")
    if no_main:
        P(f"    no-<main> by template: "
          f"{dict(Counter(template_of(p) for p in no_main).most_common(12))}")
    out["headings"] = {"zero_h1": h1_zero, "multi_h1": h1_multi, "no_h2_count": len(no_h2),
                       "no_main": no_main}

    # H1 == title mismatch (informational)
    h1_title_mismatch = [r["path"] for r in recs
                         if r.get("h1") and r.get("title")
                         and r["h1"].strip().lower() not in r["title"].lower()
                         and r["title"].split("—")[0].split("|")[0].strip().lower() != r["h1"].strip().lower()]
    out["h1_title_mismatch_count"] = len(h1_title_mismatch)
    P(f"  H1 not reflected in <title>: {len(h1_title_mismatch)}")

    # ---------- canonical ----------
    P("\n## Canonical / indexability\n")
    canon_missing = [r["path"] for r in recs if not r.get("canonical")]
    canon_mismatch = [(r["path"], r["canonical"]) for r in recs if r.get("canonical_mismatch")]
    canon_multi = [(r["path"], r["canonical_count"]) for r in recs if r.get("canonical_count", 0) > 1]
    noindex = [r["path"] for r in recs if r.get("noindex")]
    xrobots = [(r["path"], r["headers"].get("x-robots-tag")) for r in recs
               if r.get("headers", {}).get("x-robots-tag")]
    redirected = [(r["path"], r["final_url"]) for r in recs if r.get("redirected")]
    P(f"  missing canonical:                {len(canon_missing)}")
    P(f"  canonical != self (in sitemap!):  {len(canon_mismatch)}")
    P(f"  multiple canonical tags:          {len(canon_multi)}")
    P(f"  noindex in robots meta:           {len(noindex)}")
    P(f"  X-Robots-Tag header set:          {len(xrobots)}")
    P(f"  sitemap URL that redirected:      {len(redirected)}")
    for p, c in canon_mismatch[:20]:
        P(f"    {p}\n      -> canonical {c}")
    for p, f in redirected[:15]:
        P(f"    redirect: {p} -> {f}")
    if canon_multi:
        P(f"    multi-canonical examples: {canon_multi[:10]}")
    out["canonical"] = {"missing": canon_missing, "mismatch": canon_mismatch,
                        "multiple": canon_multi, "noindex": noindex,
                        "redirected_in_sitemap": redirected}

    # ---------- hreflang ----------
    P("\n## hreflang integrity\n")
    with_hl = [r for r in recs if r.get("hreflang_count", 0)]
    P(f"  pages emitting hreflang: {len(with_hl)} / {len(recs)}")
    P(f"  of those, missing x-default: {sum(1 for r in with_hl if not r.get('has_xdefault'))}")

    # build hreflang graph; check reciprocity + self-reference + broken targets
    pathset = {r["path"].rstrip("/") or "/" for r in recs}
    non_reciprocal, missing_self, broken_target, bad_lang = [], [], [], []
    valid_lang = re.compile(r"^[a-zA-Z\-]+$")
    hl_map = {r["path"].rstrip("/") or "/": {(a["hreflang"].lower(), a["href"].rstrip("/"))
                                             for a in r["hreflang"]} for r in with_hl}
    for r in with_hl:
        me = r["path"].rstrip("/") or "/"
        langs = {a["hreflang"].lower() for a in r["hreflang"]}
        hrefs = {a["href"] for a in r["hreflang"]}
        for a in r["hreflang"]:
            href, lang = a["href"], a["hreflang"].lower()
            if not valid_lang.match(lang):
                bad_lang.append((me, lang))
            tp = href.replace(BASE, "").rstrip("/") or "/"
            if tp not in pathset:
                broken_target.append((me, lang, href))
        if BASE + me not in hrefs and me not in {h.replace(BASE, "").rstrip("/") or "/" for h in hrefs}:
            missing_self.append(me)
        # reciprocity: each alternate should list me back
        for a in r["hreflang"]:
            tp = a["href"].replace(BASE, "").rstrip("/") or "/"
            if tp == me or tp not in hl_map:
                continue
            back = {h for _, h in hl_map[tp]}
            if (BASE + me) not in back and me not in {x.replace(BASE, "").rstrip("/") or "/" for x in back}:
                non_reciprocal.append((me, tp, a["hreflang"]))

    P(f"  broken hreflang targets (not in sitemap): {len(broken_target)}")
    P(f"  missing self-referencing hreflang:        {len(missing_self)}")
    P(f"  non-reciprocal hreflang pairs:            {len(non_reciprocal)}")
    P(f"  malformed hreflang values:                {len(bad_lang)}")
    for x in broken_target[:20]:
        P(f"    broken target: {x[0]}  [{x[1]}] -> {x[2]}")
    for x in missing_self[:15]:
        P(f"    no self hreflang: {x}")
    for x in non_reciprocal[:15]:
        P(f"    non-reciprocal: {x[0]} -> {x[1]} ({x[2]})")
    out["hreflang"] = {"pages_with": len(with_hl), "broken_targets": broken_target,
                       "missing_self": missing_self, "non_reciprocal": non_reciprocal,
                       "bad_lang": bad_lang}

    # html lang correctness
    P("\n## <html lang> correctness\n")
    wrong_lang = []
    for r in recs:
        parts = [p for p in r["path"].split("/") if p]
        expected = parts[0] if parts and parts[0] in LOCALES else "en"
        got = (r.get("html_lang") or "").split("-")[0]
        if expected == "en" and got not in ("en", ""):
            wrong_lang.append((r["path"], r.get("html_lang")))
        elif expected != "en" and got != expected:
            wrong_lang.append((r["path"], r.get("html_lang"), f"expected {expected}"))
    P(f"  html lang mismatches: {len(wrong_lang)}")
    for x in wrong_lang[:20]:
        P(f"    {x}")
    out["html_lang_mismatch"] = wrong_lang

    # ---------- structured data ----------
    P("\n## Structured data\n")
    no_schema = [r["path"] for r in recs if not r.get("schema_types")]
    ld_errs = [(r["path"], r["jsonld_parse_errors"]) for r in recs if r.get("jsonld_parse_errors")]
    stypes = Counter()
    for r in recs:
        stypes.update(r.get("schema_types", []))
    P(f"  pages with no JSON-LD:      {len(no_schema)}")
    P(f"  JSON-LD parse errors:       {len(ld_errs)}")
    P("  type frequency:")
    for k, v in stypes.most_common(25):
        P(f"    {v:>6}  {k}")
    if no_schema:
        P(f"    no-schema by template: {dict(Counter(template_of(p) for p in no_schema).most_common(15))}")
    if ld_errs:
        P(f"    parse error pages: {ld_errs[:15]}")

    rating_pages = [r["path"] for r in recs if "AggregateRating" in r.get("schema_types", [])]
    P(f"\n  *** FABRICATED AggregateRating emitted on {len(rating_pages)} URLs ***")
    for p in rating_pages[:25]:
        P(f"    {p}")
    if len(rating_pages) > 25:
        P(f"    ... +{len(rating_pages)-25} more")
    out["schema"] = {"no_schema": no_schema, "no_schema_count": len(no_schema),
                     "parse_errors": ld_errs, "type_freq": dict(stypes.most_common(40)),
                     "aggregate_rating_pages": rating_pages}
    if no_schema:
        out["schema"]["no_schema_by_template"] = dict(
            Counter(template_of(p) for p in no_schema).most_common(30))

    # ---------- thin content ----------
    P("\n## Content depth (content units: CJK-normalised)\n")
    thin = [(r["path"], content_units(r)) for r in recs if content_units(r) < 300]
    P(f"  pages < 300 content units: {len(thin)}")
    P(f"    by template: {dict(Counter(template_of(p) for p, _ in thin).most_common(15))}")
    verythin = [(p, w) for p, w in thin if w < 150]
    P(f"  pages < 150 content units: {len(verythin)}")
    P(f"    by template: {dict(Counter(template_of(p) for p, _ in verythin).most_common(15))}")
    for p, w in sorted(verythin, key=lambda x: x[1])[:25]:
        P(f"    {w:>5}cu  {p}")
    tth = sorted(r.get("text_to_html_ratio", 0) for r in recs)
    P(f"  text/html ratio median: {tth[len(tth)//2]:.3f}, p10: {tth[len(tth)//10]:.3f}")
    out["thin"] = {"under300": thin, "under150": verythin,
                   "under300_by_template": dict(Counter(template_of(p) for p, _ in thin).most_common(30))}

    # ---------- images ----------
    P("\n## Images\n")
    alt_missing = sum(r.get("img_missing_alt", 0) for r in recs)
    alt_empty = sum(r.get("img_alt_empty", 0) for r in recs)
    alt_text = sum(r.get("img_alt_text", 0) for r in recs)
    no_dim = sum(r.get("img_no_dimensions", 0) for r in recs)
    total_img = sum(r.get("img_count", 0) for r in recs)
    P(f"  total <img>: {total_img}")
    P(f"  with descriptive alt: {alt_text}")
    P(f"  intentionally decorative (alt=\"\"): {alt_empty}")
    P(f"  TRULY missing alt attribute: {alt_missing}")
    P(f"  missing width/height (CLS risk): {no_dim}")
    worst = sorted(recs, key=lambda r: -r.get("img_missing_alt", 0))[:10]
    for r in worst:
        if r.get("img_missing_alt"):
            P(f"    {r['img_missing_alt']:>3}/{r['img_count']:<3} no alt  {r['path']}")
    nodim = [(r["path"], r["img_no_dimensions"], r["img_count"]) for r in recs
             if r.get("img_no_dimensions")]
    for p, n, t in sorted(nodim, key=lambda x: -x[1])[:12]:
        P(f"    {n:>3}/{t:<3} no dims  {p}")
    out["images"] = {"total": total_img, "alt_text": alt_text, "alt_empty": alt_empty,
                     "missing_alt": alt_missing, "no_dimensions": no_dim,
                     "no_dimensions_pages": nodim[:60]}

    # ---------- internal link graph / orphans ----------
    P("\n## Internal linking & orphans\n")
    inbound = Counter()
    for r in recs:
        for t in r.get("internal_targets", []):
            inbound[t.rstrip("/") or "/"] += 1
    indexed = {r["path"].rstrip("/") or "/" for r in recs}
    orphans = sorted(p for p in indexed if inbound.get(p, 0) == 0 and p != "/")
    deep = [(r["path"], r["depth"]) for r in recs if r["depth"] > 3]
    P(f"  pages with ZERO internal inbound links (orphans): {len(orphans)}")
    P(f"    by template: {dict(Counter(template_of(p) for p in orphans).most_common(20))}")
    P(f"  pages deeper than 3 segments: {len(deep)}")
    links_from = sorted(((inbound.get(p, 0), p) for p in indexed))
    P("  least-linked strategic (non-locale, non-prompt-gallery) pages:")
    strat = [(n, p) for n, p in links_from
             if not p.startswith("/prompt-gallery") and template_of(p).startswith(("root", "compare", "alternatives", "tools", "migrate", "faq", "blog", "home"))]
    for n, p in strat[:30]:
        P(f"    {n:>4} inbound  {p}")
    out["links"] = {"orphans": orphans, "orphan_count": len(orphans),
                    "orphan_by_template": dict(Counter(template_of(p) for p in orphans).most_common(30)),
                    "least_linked_strategic": strat[:60], "deep_pages": deep[:200]}

    # ---------- malformed hrefs ----------
    P("\n## Malformed links\n")
    mal = [(r["path"], r["malformed_hrefs"]) for r in recs if r.get("malformed_hrefs")]
    P(f"  pages with malformed hrefs: {len(mal)}")
    allmal = Counter()
    for _, ms in mal:
        allmal.update(ms)
    for m, c in allmal.most_common(25):
        P(f"    {c:>5}x  {m[:110]}")
    out["malformed_links"] = {"pages": len(mal), "values": dict(allmal.most_common(60))}

    # ---------- JS dependency / rendering ----------
    P("\n## Rendering\n")
    no_main_tpl = dict(Counter(template_of(r["path"]) for r in recs if not r.get("has_main")).most_common(20))
    islands = sum(r.get("client_only_markers", 0) for r in recs)
    P(f"  templates lacking <main>: {no_main_tpl}")
    P(f"  total astro-island markers: {islands}")
    sizes = sorted(r.get("bytes", 0) for r in recs)
    P(f"  HTML size p50/p90/max: {sizes[len(sizes)//2]//1024}KB / "
      f"{sizes[int(len(sizes)*0.9)]//1024}KB / {sizes[-1]//1024}KB")
    big = sorted(recs, key=lambda r: -r.get("bytes", 0))[:10]
    for r in big:
        P(f"    {r['bytes']//1024:>5}KB  {r['path']}")
    out["rendering"] = {"no_main_templates": no_main_tpl, "html_size_p50": sizes[len(sizes)//2],
                        "html_size_max": sizes[-1], "biggest": [(r["path"], r["bytes"]) for r in big]}

    # ---------- performance ----------
    P("\n## Response time (edge, HTML only)\n")
    ms = sorted(r.get("ms", 0) for r in recs)
    P(f"  p50 {ms[len(ms)//2]}ms  p90 {ms[int(len(ms)*0.9)]}ms  p99 {ms[int(len(ms)*0.99)]}ms  max {ms[-1]}ms")
    slow = sorted(recs, key=lambda r: -r.get("ms", 0))[:10]
    for r in slow:
        P(f"    {r['ms']:>6}ms  {r['path']}")
    out["perf"] = {"p50_ms": ms[len(ms)//2], "p90_ms": ms[int(len(ms)*0.9)],
                   "p99_ms": ms[int(len(ms)*0.99)], "max_ms": ms[-1],
                   "slowest": [(r["path"], r["ms"]) for r in slow]}

    # ---------- sitemap hygiene ----------
    P("\n## Sitemap hygiene\n")
    P(f"  URLs in sitemap: {len(recs)}; non-200: {sum(1 for r in recs if r['status'] != 200)}; "
      f"redirecting: {len(redirected)}; noindex: {len(noindex)}; "
      f"canonical-mismatch: {len(canon_mismatch)}")
    out["sitemap_hygiene"] = {"total": len(recs), "non200": sum(1 for r in recs if r["status"] != 200),
                              "redirecting": len(redirected), "noindex": len(noindex),
                              "canonical_mismatch": len(canon_mismatch),
                              "lastmod_present": 0}

    with open("active/tmp/analysis.json", "w") as fh:
        json.dump(out, fh, indent=1, default=str)
    P("\nwrote active/tmp/analysis.json")


if __name__ == "__main__":
    main()
