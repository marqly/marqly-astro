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
| 7 | 2026-09-26 | **Acquisition batch.** P0 truth close-out: help-center Teams/offline/Play docs fixed + deployed (found & fixed broken CI: missing `CLOUDFLARE_API_TOKEN` → week of silent no-op deploys; lockfile unblocked); 12 locale Android rows corrected vs verified Play listing; **`<DD>` note misattachment bug found (real Firefox/Pocket layouts), fix + 3 regression tests on `fix/import-dd-attachment` in prod repo, awaiting owner merge**. Lanes: measured fidelity matrices (single source `src/data/migration-fidelity.ts`) on all 6 migrate pages; new canonical `/migrate/browser-bookmarks`; interactive `/tools/research-table-builder` (local-only, CSV formula guard, DESCRIPTION-attr Marqly bridge — functionally tested headless); viewer pre-import fidelity counts; Pro-scoped switch sentences; restored 3 blog OG images that were 404 in prod. Gates 16/16 + e2e 184/184 + 0 broken links + no overflow (incl. new pages) | **live** — from `383e9d4`; verified www pages + og 200s |
| 7b | 2026-09-26 | **Real-corpus falsification.** Genuine public exports (412-item Raindrop, 261-item Pocket ril_export.html, 43-item Chrome-ext export) run through the DEPLOYED parser: **Pocket HTML = 0/261 (import fails safe)** — all “imports Pocket files directly” claims corrected to CSV-first across 26 files (10 localized Pocket posts, FAQ, converter, hub, compare content, llms); Raindrop note-drift quantified (306/412 records differ deployed-vs-fix); /migrate methodology note; help-center caveat + manual redeploy; REAL-CORPUS.json pins source+sha256. Diigo/mymind/Instapaper remain NOT-YET-VERIFIED (no genuine file found yet) | **live** — verified www: builder competitor preset, checker taxonomy strings, llms-full, both Teams escapes |
| 6 | 2026-09-26 | Offline truth resolved vs adjacent prod repos (D-017): EN FAQ/usecase/migrate sweep + 142 locale landers; CSV-export truth shipped (D-018); import expectations made factual; bidirectional seo-check guards; llms.txt corrected | **live** — deploy `bd4fff06` / version `56962648` at 2026-09-26T06:31:50Z from `5c68d4e`; verified www: offline FAQ "Yes — with a Pro plan", compare matrix Offline=✓, de "ja (Pro)", it "Sì (Pro)", llms Offline/Export rows. Rollback = `git revert 5c68d4e..f3797ee` push (CI rebuilds) |
| 5 | 2026-09-26 | Kit token fix (bordered cards, verified desktop+mobile headless), kit added to nav Resources, journey QA (templates 200 + content-types, CTA stamp logic) | live |
| 4 | 2026-09-26 | Primary-source kit (/primary-source-kit, 13 link-verified sources, honest exclusions) + contextual links from /for-journalists & /research-organizer | live |
| 3 | 2026-09-26 | Locale truth sweep: 154 lander files — Android affirmations (API/offline/self-host denials kept), Teams approved-split rewrites, 24 header-verified table rows | live |
| 2 | 2026-09-26 | Team-tail alignment ×8 EN pages; quote-bank template wired into /for-writers; gallery hub 637KB→134KB + stale description fixed; `template_download` analytics event; locale truth-bug inventory (199 lines) + outreach drafts (not sent) | live |
| 1 | 2026-09-26 | Truth fixes (student discount, free-tier AI claims, auto-tag tier ×3 pages, Teams-copy alignment ×5 pages, Teams spec wording, 10 GB claim banned, offline conflict logged); source-log + reading-matrix templates wired into 5 persona pages; growth ledgers created | see git log |

Rules of engagement (unchanged from the mission): no billing/pricing changes as
an SEO side effect; no fabricated evidence, interviews, or keyword volumes;
no new persona URLs or duplicate tools without inspecting what exists;
reversible commits; gates (16 SEO + e2e) must pass before deploy; deploy =
push to `marqly-astro main` only with owner approval per standing instruction.
