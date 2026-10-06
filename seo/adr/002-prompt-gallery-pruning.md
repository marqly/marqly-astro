# ADR-002: Prompt-gallery pruning

- **Status:** proposed (execution gated on GSC per-URL data)
- **Date:** 2026-10-05
- **Phase:** 1.2

## Context
400 prompt pages (`src/content/prompts`), avg 592 units, structurally fine but a programmatic
set the master names as a dilution liability. 171 of them are in the GSC section view
(prompt-gallery 184 clicks / 6.8K impressions across 171 URLs — owner snapshot §2.3).

## Decision
Keep every **category hub** + any prompt page with **≥1 click OR ≥20 impressions in 90 days**;
`noindex,follow` the rest and drop them from the sitemap (same plumbing as ADR-001, via a
keep-list). Strengthen kept pages to tie into Marqly's AI features only where TRUE (the saved-AI-chats
feature; NOT an invented "prompt library" product feature).

## Why proposed, not accepted
The keep rule is per-URL **clicks/impressions**, which live in `seo/data/gsc/query_page.csv` —
BLOCKED on the service-account grant (`gsc-pull` returns 403 today). Applying it blind risks
de-indexing pages that earn clicks. **Mechanism is ready** (`content-quality.mjs` + a `seo/data/gsc/prompt-keep.csv`);
runs the moment GSC lands. Fallback if the grant never arrives: prune only prompts with 0 inbound internal
links AND <400 units (safe, measurable from the crawl) — decided at Gate 1.

## Rollback
Delete `prompt-keep.csv` → all prompts indexable again.
