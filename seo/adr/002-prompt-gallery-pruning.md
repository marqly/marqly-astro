# ADR-002: Prompt-gallery pruning

- **Status:** ACCEPTED + executed 2026-10-06 (live 90-day API data)
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

## Historical access dependency (resolved 2026-10-06)
The keep rule is per-URL **clicks/impressions**, which live in `seo/data/gsc/query_page.csv` —
Previously blocked on the service-account grant (HTTP 403); Full access now verified. Applying it blind risks
de-indexing pages that earn clicks. **Mechanism is ready** (`content-quality.mjs` + a `seo/data/gsc/prompt-keep.csv`);
runs the moment GSC lands. Fallback if the grant never arrives: prune only prompts with 0 inbound internal
links AND <400 units (safe, measurable from the crawl) — decided at Gate 1.

## Rollback
Delete `prompt-keep.csv` → all prompts indexable again.

## Execution record (2026-10-06)
- Data: exact 90-day live API pull (page dimension, 2,010 rows). Keep rule applied: ≥1 click OR ≥20
  impressions ⇒ 149 detail pages kept + 11 category hubs force-kept = keep-list of 160
  (`seo/data/gsc/prompt-keep.csv`, with imp/click columns for audit).
- Mechanism: `content-quality.mjs` prompt branch (delete the file ⇒ fail-open rollback, one line).
- Effect: 251 of 400 detail prompts noindexed+off-sitemap; indexable sitemap 1,343 → 1,092.
  All pages stay live (follow) so they re-enable automatically when the keep-list refreshes with data.
- Gate: 11 generalized to police ADR-001 AND ADR-002 prunings across all three surfaces; negative
  coverage already demonstrated. 25/25 green.

- Candidate integration verified the same decision in HTML robots, sitemap and hreflang. Category exemptions use the exact hub namespace; deleting the CSV was tested in an isolated module process and restores indexability. Kept pages link to the existing AI-conversation FAQ and extension page; Pro semantic-search eligibility is explicit.
