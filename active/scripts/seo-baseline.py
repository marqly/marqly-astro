#!/usr/bin/env python3
"""Refresh the persistent .seo/ baseline from the latest crawl + analysis.

Reads active/tmp/crawl.json (production crawl) and active/tmp/analysis.json
(defect analysis), and writes:
  .seo/baseline.json        — headline metrics for trend comparison
  .seo/site-inventory.json  — per-template census + the URL list

Run order for an SEO session:
  python3 active/scripts/seo-crawl.py     --workers 24 --no-cache
  python3 active/scripts/seo-analyze.py   > active/logs/seo-analysis-$(date +%F).txt
  python3 active/scripts/seo-baseline.py
"""
import json
import os
import sys
from collections import Counter
from datetime import date

SEO = ".seo"
LOCALES = ("es", "pt", "de", "fr", "it", "ja", "zh", "ko", "nl", "pl", "tr")


def main():
    crawl = json.load(open("active/tmp/crawl.json"))
    try:
        analysis = json.load(open("active/tmp/analysis.json"))
    except OSError:
        print("active/tmp/analysis.json missing — run seo-analyze.py first", file=sys.stderr)
        analysis = {}

    os.makedirs(SEO, exist_ok=True)
    today = date.today().isoformat()

    def tpl(path):
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
            return f"locale:{parts[0]}/{rest[0]}/*"
        if len(parts) == 1:
            return "root-lander"
        return f"{parts[0]}/{'*' if len(parts) > 2 else parts[1]}"

    # ---------- baseline ----------
    ms = sorted(r.get("ms", 0) for r in crawl)
    sizes = sorted(r.get("bytes", 0) for r in crawl)
    pct = lambda a, q: a[min(int(len(a) * q), len(a) - 1)] if a else 0  # noqa: E731

    baseline = {
        "captured": today,
        "source": "production crawl of https://www.marqly.com/sitemap-0.xml",
        "urls": len(crawl),
        "http": dict(Counter(r["status"] for r in crawl)),
        "indexability": {
            "missing_title": analysis.get("missing", {}).get("no_title", []).__len__(),
            "missing_description": analysis.get("missing", {}).get("no_desc", []).__len__(),
            "missing_canonical": len(analysis.get("canonical", {}).get("missing", [])),
            "canonical_not_self": len(analysis.get("canonical", {}).get("mismatch", [])),
            "multiple_canonical": len(analysis.get("canonical", {}).get("multiple", [])),
            "noindex_in_sitemap": len(analysis.get("canonical", {}).get("noindex", [])),
            "redirecting_in_sitemap": len(analysis.get("canonical", {}).get("redirected_in_sitemap", [])),
            "duplicate_title_groups": analysis.get("duplicate_title_groups"),
            "duplicate_description_groups": analysis.get("duplicate_desc_groups"),
            "zero_h1": len(analysis.get("headings", {}).get("zero_h1", [])),
            "multiple_h1": len(analysis.get("headings", {}).get("multi_h1", [])),
            "missing_main": len(analysis.get("headings", {}).get("no_main", [])),
        },
        "international": {
            "locales_live": sorted({p.split("/")[1] for p in
                                    (r["path"] for r in crawl)
                                    if len(p.split("/")) > 1 and p.split("/")[1] in LOCALES}),
            "pages_with_hreflang": sum(1 for r in crawl if r.get("hreflang_count")),
            "hreflang_broken_targets": len(analysis.get("hreflang", {}).get("broken_targets", [])),
            "hreflang_non_reciprocal": len(analysis.get("hreflang", {}).get("non_reciprocal", [])),
            "hreflang_missing_xdefault": analysis.get("hreflang", {}).get("missing_xdefault"),
            "html_lang_mismatches": len(analysis.get("html_lang_mismatch", [])),
        },
        "structured_data": {
            "pages_without_jsonld": analysis.get("schema", {}).get("no_schema_count"),
            "jsonld_parse_errors": len(analysis.get("schema", {}).get("parse_errors", [])),
            "type_frequency": analysis.get("schema", {}).get("type_freq", {}),
            # Guard: a fabricated 4.8/150 AggregateRating shipped on 801 URLs until
            # 2026-09-12. This must stay 0 — see .seo/truth-ledger.md.
            "pages_with_aggregate_rating": len(
                analysis.get("schema", {}).get("aggregate_rating_pages", [])),
        },
        "content": {
            "under_300_content_units": len(analysis.get("thin", {}).get("under300", [])),
            "under_150_content_units": len(analysis.get("thin", {}).get("under150", [])),
            "titles_over_65_chars": analysis.get("missing", {}).get("long_title_count"),
            "descriptions_under_70_chars": analysis.get("missing", {}).get("short_desc_count"),
            "descriptions_over_175_chars": analysis.get("missing", {}).get("long_desc_count"),
        },
        "images": analysis.get("images", {}),
        "performance_html_only": {
            "p50_ms": pct(ms, 0.5), "p90_ms": pct(ms, 0.9), "p99_ms": pct(ms, 0.99),
            "max_ms": ms[-1] if ms else None,
            "html_p50_bytes": pct(sizes, 0.5), "html_p90_bytes": pct(sizes, 0.9),
            "html_max_bytes": sizes[-1] if sizes else None,
        },
        "links": {
            "malformed_link_pages": analysis.get("malformed_links", {}).get("pages"),
        },
        "unavailable_data": [
            "Google Search Console (no API access / no export in repo)",
            "Bing Webmaster Tools",
            "GA4 / Mixpanel conversion data",
            "Server / CDN logs",
            "Semrush or Ahrefs export (only a Feb-2026 summary in prose)",
            "Core Web Vitals field data (CrUX)",
        ],
    }

    # ---------- inventory ----------
    census = Counter(tpl(r["path"]) for r in crawl)
    inventory = {
        "captured": today,
        "url_count": len(crawl),
        "templates": [
            {
                "template": t,
                "urls": n,
                "median_content_units": sorted(
                    (r.get("word_count", 0) for r in crawl if tpl(r["path"]) == t)
                )[n // 2],
                "with_hreflang": sum(1 for r in crawl
                                     if tpl(r["path"]) == t and r.get("hreflang_count")),
                "with_jsonld": sum(1 for r in crawl
                                   if tpl(r["path"]) == t and r.get("schema_types")),
            }
            for t, n in census.most_common()
        ],
        "urls": sorted(r["path"] for r in crawl),
    }

    with open(f"{SEO}/baseline.json", "w") as fh:
        json.dump(baseline, fh, indent=2)
    with open(f"{SEO}/site-inventory.json", "w") as fh:
        json.dump(inventory, fh, indent=1)
    print(f"wrote {SEO}/baseline.json and {SEO}/site-inventory.json ({len(crawl)} URLs)")


if __name__ == "__main__":
    main()
