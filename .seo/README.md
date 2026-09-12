# `.seo/` — Marqly organic growth operating state

Persistent intelligence for SEO/AEO/GEO runs. **Read this directory before doing
anything else** so a new run does not rediscover the site from scratch.

This directory holds *state and decisions*. Research artifacts (crawls, logs,
diffs) live in `active/tmp/` and `active/logs/`; the tooling lives in
`active/scripts/`.

## Files

| File | Purpose |
| --- | --- |
| `config.json` | Data-source availability (AVAILABLE / PARTIAL / UNAVAILABLE) so nobody invents metrics |
| `baseline.json` | Headline technical + content metrics per run, for trend comparison |
| `site-inventory.json` | Per-template census and the full URL list |
| `truth-ledger.md` | Product-truth reconciliation and the guard rules that stop false claims |
| `change-log.md` | What changed, why, expected result, and how it was verified |
| `experiments.md` | Hypotheses awaiting measurement |
| `search-opportunities.md` | Scored cross-lane backlog for the next runs |

## Running an SEO session

```bash
# 1. Crawl production (writes active/tmp/crawl.json, caches HTML in active/tmp/html/)
python3 active/scripts/seo-crawl.py --workers 24 --no-cache

# 2. Defect analysis (writes active/tmp/analysis.json)
python3 active/scripts/seo-analyze.py > active/logs/seo-analysis-$(date +%F).txt

# 3. Internal-link / orphan / localization audit over the built site
npm run build
python3 active/scripts/seo-orphans.py dist/client

# 4. Quality gates — must pass before deploy
node active/scripts/seo-check.mjs

# 5. Refresh persistent state
python3 active/scripts/seo-baseline.py
```

Then append to `change-log.md` and re-score `search-opportunities.md`.

## Hard rules carried by this directory

1. **Never publish a numeric rating or review count for Marqly** — in copy or in
   structured data. See `truth-ledger.md`.
2. **Never use the build timestamp as sitemap `lastmod`.** It must come from a
   real frontmatter date or be omitted.
3. **Pricing and free-tier claims must match `docs/superpowers/specs/2026-08-02-
   marqly-product-facts.md`**, which must itself match production.
4. **Localized pages must not emit English chrome.** Column headings come from
   `LINKHUB_UI`; link text comes from the entry's own frontmatter.
5. Do not create a page without answering the quality bar in the master
   brief (§96). Creation is one lane among many.
