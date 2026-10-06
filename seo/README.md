# seo/ — 30-day program workspace

Conventions (from the master prompt §1, enforced here):

- **Evidence labels:** VERIFIED (file:line / URL+fetch / API row) · ASSUMED · UNKNOWN. Never present ASSUMED as VERIFIED.
- **Session protocol:** read `SEO-PROGRESS.md` + last 3 `SESSION_LOG.md` entries → pick next unblocked task → execute → update both → 5-line summary.
- **Safety:** no slug change without 301 (log in `data/redirects.csv`); never touch top-3 URLs except links/fixes; every edited URL gets a before/after row in `data/changes-log.csv` keyed by deploy date; no date-bumps without substantive edits; no fabricated claims/test-results/ratings (precedent: fabricated aggregateRating removed, `src/lib/schema.ts:74-79`); every new/refreshed page names its info-gain element in its brief before writing.
- **Human-in-the-loop:** outreach sending, account creation, analytics/GSC/app settings = prepare fully, hand over with exact steps (`reports/00-setup-steps.md` pattern).

## Layout

| Path | What |
|---|---|
| `SEO-PROGRESS.md` | live task board + KPI table |
| `SESSION_LOG.md` | one entry per session, newest on top |
| `REPO-MAP.md` | where everything lives in the Astro repo (path:line) |
| `adr/` | decision records (`_template.md`; ADRs gate policy changes) |
| `scripts/` | data layer (see heads of each file for usage) |
| `data/gsc/` | Search Console pulls + derived lists (CSV) |
| `data/crawl/` | live-crawl inventory: `audit.jsonl`, `pages.csv`, `meta.json` |
| `data/changes-log.csv` | before/after metadata per edited URL, per deploy |
| `data/redirects.csv` | every 301 we introduce |
| `briefs/` | per-page briefs (query, SERP, info-gain, outline, links, schema) |
| `reports/` | gate reports + weeklies (approval checkpoints) |
| `outreach/` | link-acquisition kit (user sends; we never do) |

## Scripts

```
npm run seo:pull        # = node seo/scripts/gsc-pull.mjs — 9 dimension sets, 16mo window -> data/gsc/*.csv
npm run seo:audit       # = crawl-audit.mjs [--force-fetch] — live crawl -> data/crawl/ (reuses active/scripts/seo-crawl.py)
npm run seo:cannibal    # = cannibalization.mjs — query×page >=10% co-owners -> data/gsc/cannibalization.csv
npm run seo:score       # = opportunity-score.mjs — impressions x CTR-uplift -> opportunities_*.csv + position-curve.json
npm run seo:redirects   # = check-redirects.mjs — live redirect assertions (exit!=0 on regression)
```

Auth: service-account JWT minted in pure Node (`scripts/lib/gsc-auth.mjs`), key at `~/.config/marqly-seo/marqly-seo-key.json` — outside the repo, scope `webmasters.readonly`. Never paste secrets into chat; reference file paths only.

## Raw vs curated data

Bulk fetch artifacts (HTML cache, raw crawl json, run logs) stay in `active/tmp/` per the project sandbox rule; `seo/data/` holds only the curated CSV/JSONL the program reads and cites.
