# Truth ledger — reconciliation and guard rules

The authoritative product facts live in
`docs/superpowers/specs/2026-08-02-marqly-product-facts.md`. This file records
**where sources disagreed, how each conflict was resolved, and what now prevents
recurrence.** Never edit copy from memory; edit from the facts sheet, and if the
facts sheet disagrees with production, production wins and the sheet gets fixed.

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
exists"*. Production contradicts both: `/pricing` sells **"Save 46% · FIRST
YEAR — $39 /first year then $72/year"**, the CTA reads "Get Pro — $39 for year
one", and the FAQ names code **STANDING39**. The $48 student discount is also
still live ("Verified students pay $48 for their first year").

**Resolution:** ledger updated to record the standing $39 first-year offer
(STANDING39) alongside the $48 student year.

> Detection note: `STANDING39` and "Verified students" are **not** in the
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
| No "3-day trial" (it is 7 days) | `seo-check.mjs` gate 2 |
| No affirmative claim of an Android app, offline mode, public API or self-hosting | `seo-check.mjs` gate 2 |
| No lifetime-deal offer | `seo-check.mjs` gate 2 |
| Pricing/feature copy matches `src/data/competitors/marqly.json` | manual — that file is the render source for compare/alternatives |

Gate 2 is deliberately **attribution-aware**. A bare substring ban would flag
378 pages of *correct* copy: comparison tables must show "Android app: —",
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
- Whether the $39 first year is applied automatically at checkout or requires
  entering STANDING39. The pricing table presents it as automatic; the FAQ names
  the code. Copy should say "a standing $39 first-year offer" unless the code
  itself is the point.
- AI summary / AI Organizer usage limits — deliberately unpublished. Do not
  invent a number.
