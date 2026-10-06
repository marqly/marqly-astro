# ADR-001: Localization tier policy & automatic parity gate

- **Status:** accepted
- **Date:** 2026-10-05
- **Deciders:** owner (mission directive "stop the bleeding"; executed within Phase 1 gate)
- **Program phase:** 1.1

## Context
The site ships 1,145 localized pages across 11 non-EN locales. A fresh production crawl
(`seo/data/crawl/`, 1,914 URLs, all 200) shows **798 locale pages are below 50% word-count
parity** with their English source and **852** fail a section-aware bar (these are partial
machine translations shipped as full, indexable pages — e.g. `/de/blog/linkwarden-testbericht-2026`
= 148 units vs 1,645 EN; `/ja/for-teachers` = 0.72 parity but half the H2 sections). GSC
(`.seo/` + master-prompt §2.3, owner-verified 2026-10-05) confirms they dominate
"crawled-not-indexed". They are a scaled-content quality liability on the whole domain.

Clicks are concentrated in **ja, ko, de, es** (master §2.2/§2.3: ja 266, ko 187, de 102,
es 112 three-month clicks; fr/it/pt/nl/pl/tr/zh far lower). Enforcing parity on a Tier-1
locale would de-index pages that already earn clicks — wrong. So tiers.

**Mechanism gap (VERIFIED):** `LandingLayout.astro:81` hardcodes `robots: max-image-preview:large`
— NO page can be noindexed today except via LandingV2's `noindex` prop (homepage set, 4 pages).
@astrojs/sitemap does **not** read robots meta (its only auto-exclusions are 404/500), so a
`noindex` with no sitemap-filter change would leave the URL advertised in the sitemap — a
direct contradiction Google penalizes.

## Decision
One build-time source of truth — `src/lib/content-quality.mjs::isIndexable(path)` — drives all
three surfaces (layout robots, sitemap filter, hreflang cluster). Policy:

| Tier | Locales | Rule |
|---|---|---|
| 1 | ja, ko, de, es | **Always indexable.** Upgraded to real parity in Phase 3.5 (transcreation). Never pruned. |
| 2 | fr, pt, it | Indexable only if units ≥ **0.8×** EN source **and** H2 sections ≥ 0.8× EN. |
| 3 | zh, pl, tr, nl | Same bar as Tier 2. |

A locale page below its bar gets: `noindex, follow` + removed from `sitemap-0.xml` + removed from
the hreflang cluster **on every sibling** (so no English or Tier-1 page advertises it). It is
**automatically re-enabled the moment its content meets the bar** — the check is a function of the
source `.md`, so Phase-3 translations flip it back without touching this ADR.

EN pages are never pruned by this rule. Pages with no EN counterpart in `TRANSLATIONS` (the 10
unpaired) are kept indexable but flagged — we can't judge parity against a source that doesn't exist.

## Consequences
- Pruned pages still resolve 200 (not deleted, not 410) and stay in `_redirects`-free internal
  link hubs — `follow` keeps crawl paths alive so re-translation is picked up. This is intentional.
- `seo-check.mjs` gate 5 already asserts "sitemap has no noindex pages" — now that invariant is
  actually enforced by a filter instead of luck. New **gate 11** asserts layout-noindex == sitemap
  exclusion == hreflang exclusion for every pruned path (no drift between the three).
- Sitemap drops from ~1,914 to ~1,320 URLs; crawled-not-indexed should fall sharply at the next
  GSC pull (measurable in Gate-1 report).
- Rollback: set `PARITY_BAR = 0` in content-quality.mjs + rebuild. One line.

## Threshold sensitivity (VERIFIED against live crawl)
At bar 0.8: 593 pruned. At 0.5: ~250. The 0.8 choice is aggressive on purpose (master constraint
#3); Phase 3.5 re-translation is the intended re-enable path, not lowering the bar.

## Follow-up (2026-10-05, same day): Tier-1 stubs driven to zero
The ADR kept tier-1 (de/es/ja/ko) indexable by policy and Phase 3.4 promised transcreation. 7 batches
transcreated **168 tier-1 pages to full native parity** (≥85%/1.4× rules per _BRIEF), so the "indexable
localized stubs" KPI went **798 → 0** (tier-2/3 pruned by the bar; tier-1 upgraded). No ADR change needed —
this is the promised re-enable path executing. Avg locale parity 0.34 → 0.69. STANDING49 kept (real offer).
Each batch's agent-introduced broken links were caught by gate 7 (compare-path variants / non-existent
localized hrefs / heroImage to a non-existent `src/assets/<lang>/`) and fixed before commit.
