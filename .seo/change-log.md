# Change log

Every SEO action, why it won its slot, and how it was verified. Newest first.

---

## 2026-09-12 — Run 1: truth repair, structured-data policy violation, internal link equity

**Measured first.** Full production crawl of all 1,868 sitemap URLs
(`active/scripts/seo-crawl.py`), then defect analysis
(`active/scripts/seo-analyze.py`), then a local-build link/schema audit
(`active/scripts/seo-orphans.py`). Baseline written to `.seo/baseline.json`.

### Pre-work: four of my own measurement tools were wrong

Recorded because it changed what got fixed. Each was caught by verifying against
source or live HTML rather than trusting the number:

| False positive | Cause | Real answer |
| --- | --- | --- |
| "30 URLs with truncated/duplicate descriptions" | meta regex excluded both quote chars, so any description containing an apostrophe (`L'enregistrement…`, `YouTube's`, `2026'de`) truncated at it | 0 duplicate descriptions |
| "9,340 images missing alt" | required `alt=`; HTML5 parses a valueless `<img alt>` as `alt=""` | 0 missing alt (2,563 descriptive, 15,012 intentionally decorative) |
| "2 pages with duplicate H1" | heading regex ran over raw source incl. `<script>`; the tools pages build a Netscape bookmark Blob whose template contains `<H1>Bookmarks</H1>` | 0 pages with >1 H1 |
| "ja/zh/ko locales are thin (30-80 words)" | whitespace word counting is meaningless for CJK | 914 / 752 / 987 content units — at or above de/fr/pt |

**Consequence:** the Feb-2026 Semrush leads (duplicate titles, duplicate
descriptions, missing H1, multiple H1, malformed links) were all re-tested and
are **already fixed**. Verified zeros: duplicate titles, duplicate descriptions,
missing title/description/canonical, canonical-not-self, multiple canonicals,
noindex-in-sitemap, redirects-in-sitemap, broken hreflang targets,
non-reciprocal hreflang, missing x-default, `<html lang>` mismatches, malformed
hrefs, missing `<main>`, pages with 0 or >1 H1.

### Actions implemented

**1. Removed fabricated review markup from 801 URLs (43% of the site).**
`src/lib/schema.ts` `softwareApplication()`, `src/pages/index.astro`,
`src/pages/pricing.astro`. `AggregateRating{4.8/150}` was live in JSON-LD while
the facts sheet records those numbers as false (CWS is ★3.6 / 40 ratings) and
visible copy had already been swept on 2026-08-16 — the schema was missed.
Also independently ineligible: Google does not award stars for self-serving
ratings. *Lane: STRUCTURED-DATA. Priority 12.2 — highest scored action.*
Verified: `0 / 1,891` built pages contain `AggregateRating` or `ratingValue`.

**2. Repaired the stale source-of-truth ledger.**
`docs/superpowers/specs/2026-08-02-marqly-product-facts.md` asserted the free
tier only exposes the 100 most recent bookmarks and that no coupons exist.
Production contradicts both. Corrected pricing section, added the standing $39
first-year (STANDING39) offer, documented `ChatVault` as the marketing name for
AI conversation capture, added a dated correction note, and added an explicit
"no rating in copy **or** schema" rule.
*Lane: MEASUREMENT/truth. Priority 11.7.* Rationale: this file is what every
future writer reads, so an error here re-infects the whole content estate — the
sheet itself documents that happening before (~50 pages carried a stale 3-day
trial).

**3. Built a localized pre-footer link hub — orphans 1,890 → 1.**
New `src/components/seo/LocaleLinkHub.astro`, wired via a new `localeLinkHub`
prop on `LandingLayout.astro`, consumed by `LocaleLander.astro`,
`LocaleBlogIndex.astro`, `BlogPostLayout.astro` and 22 hand-written localized
tool pages. `src/i18n/ui.ts` gained `LINKHUB_UI` (12 locales) plus verified
`COMPARE_SEGMENTS` / `ALTERNATIVES_SEGMENTS` / `TOOLS_SEGMENTS`.

Root cause was an explicit deferral in the code: *"LinkHub is English-only today
— localized pages hide it until it speaks their language."* 457 localized URLs
(24% of the site) were reachable only through hreflang, with no inbound `<a>` —
so no internal PageRank and no crawl path from their locale root, despite the
locale roots being linked sitewide from the footer language switcher.

Every target and every anchor label comes from the locale's own collection
frontmatter, so the hub cannot emit a dead link or leak English; only column
headings come from `LINKHUB_UI`. Unknown namespaces (e.g. Spanish/Portuguese
put landers under `/es/usos/`) fold into the features column rather than being
labelled with an arbitrary page's eyebrow. Self-links are suppressed.
*Lane: INTERNAL-LINK. Priority 6.8.*
Verified: 0 localized pages missing a hub, 0 English headings in localized hubs,
0 broken hreflang targets, 0 broken internal links across 1,890 pages.

**4. Added honest sitemap `lastmod` — 0 → 93% coverage.**
`astro.config.mjs` now scans content frontmatter (`updatedDate` / `pubDate`)
and attaches it via the sitemap `serialize` hook. **Deliberately not the build
timestamp:** a static site rebuilt on every deploy would otherwise claim all
1,890 URLs changed on every push, which is fake freshness and makes Google stop
trusting lastmod. 1,764 URLs dated across 20 distinct dates (2026-02-26 →
2026-09-07); the 126 undated are generated index/hub pages with no real content
date, correctly omitted rather than invented.
*Lane: TECHNICAL. Priority 6.0.*

**5. Added a 16-gate regression suite** — `active/scripts/seo-check.mjs`.
Covers: fabricated rating schema, retired/false commercial claims, required
metadata, single H1, `<main>`, duplicate titles, JSON-LD parse validity, sitemap
↔ build agreement, noindex-in-sitemap, lastmod realism, hreflang targets,
internal link resolution, localized hub coverage, English leakage.
**Negative-tested:** a throwaway dist with injected violations correctly fails
all 5 claim rules, the rating gate and the sitemap gate. *Lane: MEASUREMENT.
Priority 7.3.*

**6. Aligned `astro.config.mjs` `i18n.locales` with the 12 locales in
`src/i18n/routes.ts`** (was 6). Inert today — routing and hreflang are manual
and nothing reads `Astro.currentLocale` — but a short list would silently
resolve `/ja/…` to `en` the moment someone used it. *Lane: TECHNICAL.*

### Verification

`npm run build` clean (1,890 pages, 47s). `node active/scripts/seo-check.mjs` →
**ALL 16 SEO GATES PASSED**. `python3 active/scripts/seo-orphans.py dist/client`
→ 1 orphan (`/prompt-gallery/category`, pre-existing). Localized hubs
spot-checked rendered in ja / de / zh / tr with correct headings and localized
anchors.

### Not deployed

Changes are committed to `main` locally. Production still serves the previous
build. Deploy is `git push marqly-astro <branch>:main`, which per CLAUDE.md is
**production** (DNS cut over 2026-06-10) and needs `gh auth switch -u marqly`.
Left for explicit approval — see `.seo/experiments.md` for what to watch.

### Post-commit visual fix (same run)

Rendered screenshots of the new hub (ja / es / de, desktop + mobile) exposed a
layout defect the numeric checks could not see: the ~40-link features column
rendered as a single ~2,400px-tall list, pushing the blog column far below and
leaving the hub badly ragged. Cause: `.lh-2col { columns: 2 }` was applied to a
`<ul>` that `.lh-col ul` styles as `display: flex` (higher specificity), and CSS
multi-column does not apply to flex containers. Fixed by resetting
`display: block` on `.lh-col ul.lh-2col` (and matching the mobile
single-column override to the same specificity). Re-rendered: two balanced
columns, compact hub, no horizontal overflow at 1440px or 390px.

`active/scripts/shot-hub.mjs` is kept so this stays visually verifiable.
