# Truth ledger — reconciliation and guard rules

The authoritative product facts live in
`docs/superpowers/specs/2026-08-02-marqly-product-facts.md`. This file records
**where sources disagreed, how each conflict was resolved, and what now prevents
recurrence.** Never edit copy from memory; edit from the facts sheet, and if the facts sheet disagrees with production, production wins and the sheet gets fixed.

## 2026-09-23 — benchmark de-fabrication + first-year price moves

1. **Retracted: the `/blog/ai-bookmark-retrieval-benchmark-2026` "results".** The article
   published 2026-09-12 (workstream batch `03ab13f`) presented a 1,000-item lab run with
   per-tool percentages (94/78/82…) and timings. No fixture, query set, recording, or
   scoring evidence exists anywhere in the repo or `active/`; the numbers were generated,
   not measured. The page was rewritten the same day as a **runnable protocol + a
   capability matrix explicitly labeled documentation-based**, and every one of the 8
   pages that cited its "empirical results" was fixed. **Rule going forward:** a
   quantitative test claim may ship only with dated evidence in
   `active/logs/benchmark/<run>/` (fixture, queries, recordings); otherwise the claim
   does not exist. Machine-checkable future gate candidate, not yet built.
2. **First-year offer moved $39 → $49 mid-day 2026-09-23** (commits `565e8ae`/`b005a26`,
   coupon **STANDING49**, "Save 32%"). §2 below already records $49 as the canonical
   figure; production `/pricing` still rendered **$39/STANDING39** at 11:12 local because
   the move has not deployed and requires the STANDING49 promotion in Stripe +
   `STANDING_OFFER_CODE/…_CENTS` in the app config. **Reconciled gaps:** the facts sheet
   and three pages written concurrently (Diigo migration guide, benchmark table row,
   ledger notes below) still carried $39 as of this morning — fixed same day. Rule: price
   moves are a **two-sided change** (repo + Stripe/app); until the app side confirms,
   copy that must ship before deploy should phrase offers without the number ("a standing
   first-year offer") rather than pick a side.


## Conflicts found and resolved (2026-09-12)

### 1. Free-tier bookmark access — RESOLVED, ledger was stale

| Source | Claim |
| --- | --- |
| Facts sheet (said "updated 2026-09-03") | 2,000 stored but **only the 100 most recent accessible** |
| War-plan backlog PR 1 (2026-09-06) | Read-wall **removed**; whole library searchable |
| Live `/pricing` | "Your whole library — search all of it. Up to 2,000 bookmarks" |
| `src/data/competitors/marqly.json` | "stores up to 2,000 bookmarks with search across your whole library" |
| `public/llms.txt` | same as above |

**Resolution:** the read-wall is gone. The facts sheet was the only source still
asserting it, and it is the declared source of truth for every writer — so it was
the most dangerous place for the error to live. Corrected, with a dated
correction note so the old wording is not silently reintroduced from an archive.

### 2. First-year discount — RESOLVED, ledger was stale

The facts sheet said *"all coupons/promo codes were deleted 2026-06-20 and none
are offered"* and that the $48 student discount was *"the only discount that
exists"*. Production contradicts both: `/pricing` sells **"Save 32% · FIRST
YEAR — $49 /first year then $72/year"**, the CTA reads "Get Pro — $49 for year
one", and the FAQ names code **STANDING49**. The $48 student discount is also
still live ("Verified students pay $48 for their first year").

**Resolution:** ledger updated to record the standing $49 first-year offer
(STANDING49) alongside the $48 student year.

> Detection note: `STANDING49` and "Verified students" are **not** in the
> text-extracted pricing page, because that FAQ copy ships inside a React
> island's serialised props in a `<script>` tag. Any audit that strips scripts
> before searching will wrongly conclude the coupon does not exist. Search the
> raw HTML for pricing claims.

### 3. `ChatVault` was undocumented — RESOLVED

The site sells a Pro feature called **ChatVault** (its own landing section and
demo component, listed on `/pricing`), but the facts sheet only ever called it
"AI conversation capture" / "AI Chats workspace". A writer following the sheet
would never use the marketing name, and an auditor would flag it as an
unverifiable claim. Ledger now records all three names as the same feature.

### 4. Fabricated review markup — FIXED, was live on 801 URLs

`AggregateRating { ratingValue: 4.8, reviewCount: 150 }` shipped in JSON-LD on
**801 of 1,868 production URLs (43%)** via `softwareApplication()` in
`src/lib/schema.ts`, plus inline copies in `src/pages/index.astro` and
`src/pages/pricing.astro`.

The facts sheet had already established that the *"★4.8 CWS / ★4.7 PH"* numbers
are **false** (live: Chrome Web Store ★3.6 with 40 ratings; Product Hunt ★1.0;
Firefox AMO ★1) and that they were swept out of all *visible* copy on
2026-08-16. The structured data was simply missed by that sweep — so the site
was telling Google, in machine-readable form, a claim it had already retracted
from its own pages.

Two independent reasons removal is correct, not a judgement call:

1. The value is fabricated and contradicts visible content — Google requires
   structured data to reflect what is on the page.
2. Even an *accurate* rating here would be **self-serving**: Google does not
   award review stars for a rating a site assigns to its own product.

Removed from all three sources. Verified `0 / 1,891` built pages contain
`AggregateRating` or `ratingValue`, and gated so it cannot return.

## Guard rules

| Rule | Enforced by |
| --- | --- |
| No `AggregateRating` / `ratingValue` anywhere in the build | `seo-check.mjs` gate 1 |
| No numeric rating or review count attributed to Marqly in copy | `seo-check.mjs` gate 2 |
| No "100 most recent" read-wall claim | `seo-check.mjs` gate 2 |
| No trial claim of any length (there is no trial, since 2026-09-18) | `seo-check.mjs` gate 2 |
| No affirmative claim of a public API or self-hosting | `seo-check.mjs` gate 2 |
| No offline OVERCLAIM (server copy, cross-device offline sync, Android/extension offline) attributed to Marqly | `seo-check.mjs` gate 2 (added 2026-09-26) |
| No stale "Marqly has no offline mode" denial on EN pages (offline ships on Pro, web+iOS — verified vs prod code + live help center 2026-09-26) | `seo-check.mjs` gate 2 |
| No "email support to export bookmarks" primary route (in-app CSV export shipped; support path is for the full account copy) | manual review of `/faq/can-i-export-my-data` (2026-09-26) |
| No lifetime-deal offer | `seo-check.mjs` gate 2 |
| Pricing/feature copy matches `src/data/competitors/marqly.json` | manual — that file is the render source for compare/alternatives |

Gate 2 is deliberately **attribution-aware**. A bare substring ban would flag
378 pages of *correct* copy: comparison tables must show "offline reading: —",
`/for-developers` must say "there's no public API and no self-hosted
deployment", the FAQ must answer "Is there a Marqly lifetime deal?", and
competitor rows legitimately cite e.g. "Anybox — 4.7 stars on the App Store".
The gate fires only on an affirmative claim about Marqly that is not negated,
not interrogative, not a "Marqly Team" byline, and not inside a competitor's
window (competitor names are read from `src/data/competitors/*.json`).

## Still unverified — do not publish without checking

- Current Chrome Web Store / App Store / AMO ratings and install counts. The
  figures in the facts sheet were verified 2026-08-16; re-check before citing
  any number, and never cite a rating in copy or schema.
- Whether the $49 first year is applied automatically at checkout or requires
  entering STANDING49. The pricing table presents it as automatic; the FAQ names
  the code. Copy should say "a standing $49 first-year offer" unless the code
  itself is the point. **RESOLVED 2026-09-25 (owner-confirmed):** the product
  truth is $9/mo, $72/yr, and STANDING49 = $49 first year then $72/yr, offer
  codes yearly-only. $39/STANDING39 is dead; the site now says $49 throughout
  and the coupons FAQ names STANDING49 as the one real code.
- **Discount percentage rule (2026-09-25, mirrors apps/web/lib/billing/discount.ts
  in the monorepo):** always ROUND DOWN and always name the baseline. $49 vs $72
  = "31% off your first year" (never 32%); $72 vs $108 = "about 33% vs monthly";
  $49 vs $108 = "54% less than paying monthly (first year)". Never print a bare
  %. Enforced by tests/e2e/tier1-features/f18-pricing-truth-guard.test.mjs.
- AI summary / AI Organizer usage limits — deliberately unpublished. Do not
  invent a number.

## 2026-09-25 — "Marqly users work at teams like" logo wall (owner-confirmed)
- Homepage hero strip shows Google, Apple, Stripe, Cloudflare, Shopify, Tesla,
  BBC, Reuters (monochrome, Simple Icons CC0 / Wikimedia SVGs, stored under
  public/landing/logos). **Claim basis: owner states there are actual users
  employed at these companies (2026-09-25).** The copy says where users work —
  never "trusted by" / "used by [company]" — so no endorsement or partnership
  is implied. If a user count from any named company ever drops to zero, the
  logo comes out. Keep attribution language exactly this shape.
- Reviews section: 4 testimonials remain the carried-over real ones, avatars
  removed 2026-09-25. Two additional slots require REAL quotes (Play Store /
  email from named users) — App Store RSS and CWS review endpoints returned 0
  fetchable reviews on 2026-09-25; do not invent.
- 2026-09-25 (owner-confirmed): **Every Teams seat includes all Pro features.**
  Highlighted on the Teams pricing card ("All Pro features — INCLUDED") and as
  the first workspace card on /teams. Basis: owner directive this session.

## 2026-09-25 — Free-tier cap: 2,000 → 100 (site-wide sweep, DONE)
- Owner-confirmed: the free plan now stores **100 bookmarks** (whole library
  still readable/searchable; the 2026-09-05 read-wall removal is unchanged).
- Swept 403 files / 535 lines across EN + 11 languages (landers, FAQ, use
  cases, blogs, verdicts tables, migrate/tool pages, llms*.txt, product-facts
  spec). Three numbers deliberately KEPT: the 2026-09-06 plan-doc backlog
  line (history), "2.000 millones de artículos" (Pocket's own stat), and the
  rhetorical "2,000 saves in four places". Regression guard: T1.F18.06 fails
  if 2,000 reappears in any Marqly-owned namespace.
