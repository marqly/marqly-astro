# ADR-005: Competitor pricing intent — in-review sections, not new pages (for now)

- **Status:** ACCEPTED — SERP check done 2026-10-06, evidence below
- **Date:** 2026-10-05
- **Phase:** 2.3

## Decision
For readwise / readwise-reader / mymind / raindrop / instapaper, the verified price is already in
`src/data/competitors/<slug>.json` (`pricing.*`, `lastVerified`). Add a dated **"Pricing (verified <date>)"**
section to the existing review + a `SourceNote`-style official-source link, rather than minting new
`/pricing-guides/*` pages. The owner snapshot shows those reviews at pos 8–10 already — an on-page
pricing block lifts CTR on a page that already ranks without adding a thin URL.
Master §2.3 says: "if the top 5 are dedicated pricing pages, build dedicated pages" — that SERP check is
the one thing the marketing repo can't do offline (needs a human/Tier-2 SERP look). Flagged in
`seo/outreach/serp-checks-needed.md`. Default = in-review section.

## Consequence
No new pricing pages this phase; reviews gain a verified price table + date. Re-evaluate dedicated pages
once GSC/SERP confirms demand shape.

## SERP evidence (2026-10-06, DDG organic harvest, seo/outreach/serp-targets-verified-2026-10-06.csv)
Top-5 organic for "readwise pricing 2026" / "mymind pricing" / "raindrop pricing 2026": **0/5 pricing-dedicated
pages** in each set → the ADR's trigger ("build dedicated pages only if top-5 ARE pricing pages") does NOT fire.
Decision holds: in-review dated pricing sections (already live on readwise-reader/mymind reviews with official
citations). No new /pricing-guides/* pages.

## Bonus verified finding
https://www.marqly.com/best-bookmark-manager ranks **#6 organic** for "best bookmark manager 2026" (head term;
the pillar's sibling listicle page) — outside top-3, so CTR rewrites are permitted there under §1.5.
