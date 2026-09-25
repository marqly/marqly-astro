# Measurement baseline & limitations (2026-09-26)

## What we can measure today (in-repo, verified)

- **Crawl/index baseline** — `.seo/baseline.json` (captured 2026-09-12,
  production crawl): 1,868 sitemap URLs all 200; 0 indexability defects;
  1,207 pages with hreflang, 0 broken targets; schema census; thin-content and
  title-length flags; p50 HTML 583ms, max page 652KB. Gates re-run per deploy
  (`npm run seo:check`, currently 16/16 on 1,911 pages).
- **URL inventory** — `docs/seo/url-inventory.csv`: 1,910 rows with pageType,
  cluster, language, indexability, canonical, internal links in/out, action.
- **Revenue/plan facts** — `docs/seo/2026-09-23-revenue-focused-seo-plan.md` +
  `execution-log.md` carry the paying-users findings (27 payers, 15 new of
  ~450 signups — internally inconsistent with the report's own 247-row table;
  treated as directional only).
- **Event plumbing exists** — CTA `data-cta` attributes, `AttributionCapture`
  → `/api/touch`, Mixpanel token on marqly.com only. Delivery is live; the
  *data* is not readable from this repo.

## Blocked / unavailable (access ledger — a block here stops that service, not the mission)

| Source | State | Consequence |
|---|---|---|
| Google Search Console | no credentials in this environment | all `organicClicks/impressions/ctr/avgPosition` columns stay `pending-export`; no keyword volumes may be quoted — mark **unknown** |
| Bing Webmaster | unavailable | same |
| GA4 / Mixpanel | no read access | funnel rates (visit→signup→activation→pay) cannot be computed; the revenue plan's small-sample numbers are the only prior |
| Stripe / app DB | unavailable | payer counts unverifiable first-hand; never re-quote without the plan doc as source |
| Scheduler for monitoring | none authorized | no recurring checks may be claimed as configured |

## Standing rules

- Report every rate with numerator, denominator, window, attribution method,
  coverage, and uncertainty. Zero events in small samples = unknown, not zero.
- Activation candidate events (to define with real access): successful import,
  saves on ≥2 distinct days, first board with ≥5 sources, retrieval event,
  cross-device continuation. NOT: bookmark counts, pricing views, downloads.
- AI-referral traffic: report as a distinct, imperfectly attributed channel;
  never claim GSC separates AI Overview journeys precisely.
- No professional-audience inference from private libraries; self-declared or
  campaign-tagged only.
- When GSC export becomes available: regenerate inventory via
  `node active/scripts/gen-inventory.mjs`, then the opportunity map gets real
  volumes and the backlog re-scores. Until then, decisions are labeled
  qualitative.
