# Experiments — hypotheses awaiting measurement

Format per the master brief: hypothesis, why now, evidence, KPIs, expected
direction, observation window, risk, rollback. Nothing here can be scored as a
*result* until Search Console access exists — see `.seo/config.json`.

---

## E1 — Remove fabricated AggregateRating from 801 URLs

- **Hypothesis:** publishing a false 4.8/150 rating in JSON-LD on 43% of the
  site creates manual-action exposure ("spammy structured markup") and, if a
  star snippet ever rendered, a trust penalty when users compare it to the real
  ★3.6 Chrome Web Store rating. Removing it eliminates that exposure at zero
  content cost.
- **Why now:** the value was already retracted from visible copy on 2026-08-16;
  the schema was simply missed, so the site was contradicting itself to Google.
- **Evidence:** facts sheet "Social proof" section; live HTML on `/`,
  `/pricing`, `/alternatives/*`; 801 URLs enumerated by crawl.
- **Primary KPI:** Search Console → Manual actions / Security issues = none;
  Enhanced Reports → "Merchant listings / Software app" valid-item count and any
  rating-related warnings.
- **Secondary KPI:** non-brand clicks to `/`, `/pricing`, `/alternatives/*`.
- **Expected direction:** no traffic change. Loss of a star rich result the site
  was never eligible for. Reduced risk of a sitewide structured-data action.
- **Observation window:** 4–8 weeks after deploy.
- **Risk:** low. `SoftwareApplication` remains valid without a rating; Google
  treats review data as recommended, not required, for that type.
- **Rollback:** revert the three source blocks (one commit).

## E2 — Localized pre-footer link hub (457 orphans → ~0)

- **Hypothesis:** giving 457 localized URLs (24% of the site) real inbound
  `<a>` links from every other page in their locale tree raises their crawl
  priority and internal PageRank, moving them from "discovered via hreflang
  only" toward indexable/rankable in their market.
- **Why now:** the six newest locale trees (ja/zh/ko/nl/pl/tr, ~59 URLs each)
  were shipped in the days before this run with no internal links at all — the
  deferral was explicit in a code comment.
- **Evidence:** `seo-orphans.py` on the pre-change build: 457 production
  orphans, 38 per new locale at root-lander level plus their compare and
  alternatives pages. Post-change: 1 orphan.
- **Primary KPI:** GSC → Indexing → Pages: "Discovered – currently not indexed"
  and "Crawled – currently not indexed" counts for `/ja/*`, `/zh/*`, `/ko/*`,
  `/nl/*`, `/pl/*`, `/tr/*`.
- **Secondary KPI:** impressions and clicks by country/language for those trees;
  indexed-URL count per locale.
- **Expected direction:** fewer discovered-not-indexed, more indexed, first
  non-zero impressions in JP/CN/KR/NL/PL/TR.
- **Observation window:** 6–12 weeks (indexation lag is the slow part).
- **Risk:** moderate and worth naming — this increases crawl surface for locales
  whose demand is **unvalidated**. If GSC later shows no demand for a tree, the
  correct response is to prune that tree, not to keep feeding it links. Added
  page weight (~9KB HTML per localized page) is negligible.
- **Rollback:** stop passing `localeLinkHub` in the four consumers; the component
  is inert without the prop.

## E3 — Honest sitemap `lastmod` (0 → 93%)

- **Hypothesis:** accurate per-URL lastmod lets Google prioritize recrawling of
  genuinely-updated pages instead of treating the whole 1,890-URL sitemap as
  uniformly undated, which should shorten the lag between a content refresh and
  its re-crawl.
- **Why now:** zero URLs had lastmod; the site refreshes content continuously
  across 12 locales.
- **Evidence:** production `sitemap-0.xml` had 0 `<lastmod>` elements; post-change
  1,764 dated across 20 distinct dates.
- **Primary KPI:** GSC → Indexing → Pages: crawl/recrawl cadence for refreshed
  URLs; time from deploy to re-index for a known-edited page.
- **Expected direction:** faster pickup of edited pages. No ranking change by
  itself — lastmod is a crawl hint, not a ranking signal.
- **Observation window:** 4–6 weeks.
- **Risk:** low, **conditional on the dates staying honest.** If a future change
  starts stamping build time, lastmod becomes noise and Google will discount it.
  Gate 12 asserts coverage ≥50% *and* ≥2 distinct dates specifically to catch
  that regression.
- **Rollback:** remove the `serialize` hook from `astro.config.mjs`.

## E4 — Stale source-of-truth ledger corrected

- **Hypothesis:** not a traffic experiment — a defect-prevention control. The
  facts sheet is the declared source for all content; when it contradicted
  production on pricing and the free tier, every future page written from it
  would have re-published a false limit ("only the 100 most recent bookmarks
  are accessible") on a commercial page.
- **Evidence:** the sheet itself documents a prior instance of exactly this
  failure mode — a stale 3-day trial propagated across ~50 pages before being
  corrected on 2026-09-03.
- **Primary KPI:** zero new pages containing a retired claim; `seo-check.mjs`
  gate 2 stays green.
- **Risk:** none. **Rollback:** n/a (documentation).
