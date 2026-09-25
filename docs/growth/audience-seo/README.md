# Audience-led growth — status & decision ledger

Mission: grow qualified organic traffic from people who repeatedly collect,
organize, retrieve, and reuse information — into retained Marqly workflows.
One evidence ledger, one plan, one accountable integrator (this repo's rule:
claims trace to `docs/superpowers/specs/2026-08-02-marqly-product-facts.md`
or `.seo/truth-ledger.md`; nothing ships on vibes).

**Status: Batch 1 shipped 2026-09-26.** See `decisions-opportunities-backlog.md`
for the ledger and next batch. Files here are the source of truth; the public
site must never contradict them.

- `capability-registry.md` — what Marqly can actually claim (verified status per
  capability + the verification queue).
- `baseline-limitations.md` — what we can measure vs. what is blocked; no
  metric may be quoted that isn't listed as available.
- `decisions-opportunities-backlog.md` — dated decisions, job clusters,
  opportunity scoring, execution backlog, resumable task state.

## Batch log

| Batch | Date | Shipped | Deploy |
|---|---|---|---|
| 0 (context) | 2026-09-25 | Pricing-truth sweep + Teams dark launch (separate mission) | live |
| 2 | 2026-09-26 | Team-tail alignment ×8 EN pages; quote-bank template wired into /for-writers; gallery hub 637KB→134KB + stale description fixed; `template_download` analytics event; locale truth-bug inventory (199 lines) + outreach drafts (not sent) | live |
| 1 | 2026-09-26 | Truth fixes (student discount, free-tier AI claims, auto-tag tier ×3 pages, Teams-copy alignment ×5 pages, Teams spec wording, 10 GB claim banned, offline conflict logged); source-log + reading-matrix templates wired into 5 persona pages; growth ledgers created | see git log |

Rules of engagement (unchanged from the mission): no billing/pricing changes as
an SEO side effect; no fabricated evidence, interviews, or keyword volumes;
no new persona URLs or duplicate tools without inspecting what exists;
reversible commits; gates (16 SEO + e2e) must pass before deploy; deploy =
push to `marqly-astro main` only with owner approval per standing instruction.
