# Decisions, opportunities, backlog (2026-09-26)

## Decision ledger (dated, with rejected alternatives)

- **D-001 (09-26) Offline stays "no" on-site.** Brief assumed some pages
  wrongly deny an existing Pro offline benefit; audit found the site is
  uniformly "no offline" and the *spec bans* claiming it. The outlier is
  help.marqly.com (out of repo). Rejected: flipping site copy to claim offline
  on the strength of an unverified third-party page. → owner verification task.
  **SUPERSEDED same day by D-017** — verification happened against first-party
  production code, not the third-party page; the flip shipped with narrower
  wording than even the help center uses.
- **D-002 (09-26) "10 GB Pro file uploads" is unclaimable.** Zero product
  evidence; the number traces to Raindrop competitor reviews. Added to spec's
  never-claim list. Rejected: any page/tool built around upload/storage.
- **D-003 (09-26) Tier-copy fixes shipped** (truth bugs, not strategy):
  for-students student-discount denial ($48 is live), reading-list free-tier
  AI claim, auto-tag tier claims on for-journalists/for-researchers/
  for-ux-researchers ("whole loop free"), viewinsta SEO-ish outbound removed.
- **D-004 (09-26) Teams-copy alignment.** Teams went public 09-25; five
  persona pages still said "no team features / no collaborative editing".
  Rewritten to the approved split: personal board links = view-only; shared
  multi-editor workspace = /teams. Facts spec gained a Teams approved-wording
  section; stale "team/collab = never claim" line removed; teams.astro header
  comment corrected (was "DARK LAUNCH").
- **D-005 (09-26) No new persona URLs, no new tools.** Audit:
  /for-journalists|writers|researchers|students|phd-students|ux-researchers +
  19 tools already exist. The gap is **artifacts and bridges**, not pages.
  Rejected: a source-log *builder* app (mission rule: template first; the
  CSV/MD template ships the job at zero serving cost).
- **D-006 (09-26) Cluster 1 = research-to-draft / evidence-to-decision.**
  Ships: source log (CSV+MD guide, worked example from a real live source) +
  reading matrix (CSV+MD, Zotero-complement positioning) wired into 5 pages.
  Success metric (once GSC access exists): nonbrand qualified clicks on the 5
  pages, template downloads, app-CTA clicks from those pages, downstream
  signup→board-with-5-sources activation. Interim: qualitative only.
- **D-007 (09-26) Prompt gallery deferred, not ignored.** 400 generated pages
  with no worked examples; index unpaginated (~637KB). Plan already says
  pause new prompts + fix size. Batch 2 candidate (pagination = technical,
  reversible; content-quality pass = editorial budget).
- **D-008 (09-26) Benchmarks: audit-before-add.** The 09-23 fake-benchmark
  removal stands; any new original research needs a dated evidence run under
  `active/logs/benchmark/<run>/` first (truth-ledger rule).

## Job clusters (evidence-ranked; volumes unknown until GSC)

1. **Evidence-to-decision (journalists, consultants, analysts)** — strongest
   switching/imports intent per revenue plan; artifact shipped (source log).
2. **Research-to-draft (students→PhD, researchers, writers)** — recurring,
   retention-shaped; artifact shipped (reading matrix); Zotero = complement.
3. **Switch & cleanup (Pocket/Raindrop/Diigo defectors)** — proven payer
   attribution pages already exist (alternatives/duplicate-finder); keep
   improving, do not clone.
Watch list: UX desk-research (Teams tension now resolved), creative-resource
hub direction (owner interest; no evidence yet — pilot one curated kit in
batch 2 only if capacity), localized cohorts (preserve; concentrate NEW
editorial in English per revenue plan §:28).

## Execution backlog

| # | Item | Type | Status |
|---|---|---|---|
| 1 | Truth fixes D-003/D-004 + spec + Teams comment | fix | **shipped batch 1** |
| 2 | Templates + wiring (cluster 1) | asset | **shipped batch 1** |
| 3 | Growth ledgers | docs | **shipped batch 1** |
| 4 | Offline verification (help page vs spec) | owner task | queued — blocks any offline copy |
| 5 | Locale truth-bug sweep (Android denials + team lines, 12 locales) | fix | **shipped batch 3** — 154 files: 24 comparison-table rows (header-verified Marqly column) + ~130 prose lines (Android affirmations keeping API/offline/self-host denials; team lines → approved personal-vs-Teams split). Skips documented: competitor-truth rows, personal-link view-only phrasings (still true), trustLine understatements (marketing call) |
| 6 | Gallery hub weight + stale description | tech | **shipped batch 2** (637KB→134KB; search removed, category hubs carry the full set) |
| 7 | Prompt-gallery worked-example pass (top-traffic prompts only) | content | batch 2, gated on GSC |
| 8 | Template-download event (Mixpanel + GA4 `template_download`, content-free payload) | analytics | **shipped batch 2** |
| 9 | Curated primary-source kit | content | **shipped batch 4** — /primary-source-kit: 13 sources, every URL HTTP-200 verified 2026-09-26; DocumentCloud+Perma.cc EXCLUDED (Cloudflare challenge unverifiable — re-add only after human check) |
| 10 | Import-fidelity test as original evidence (documented public corpus, honest failures) | research | preliminary run 2026-09-26 (see task-state table); publishable only with real export files |
| 11 | Outreach drafts for templates (personalized, no spam) | distribution | **drafted batch 2** (`outreach-drafts.md`) — NOT SENT, needs human authorization |

## Batch-5 note (2026-09-26)
- **D-015 Kit CSS-token fix**: `--line/--fs-md/--fs-xl/--tracking-wide` don't
  exist in tokens.css (silent-drop trap, lab note added); canonical
  `--border-1/2`, `--radius-card`, `--fs-h3/--fs-base` now used; desktop+
  mobile headless QA passed (13 bordered cards).
- **D-016 Kit in nav Resources** (discoverability beyond persona-page links).
- **Journey QA passed**: all 4 template files 200 with correct content-types;
  app CTA src-stamp confirmed host-gated (design, not defect); mobile layout
  clean.

## Task state (resumable) — end of batch-6, 2026-09-26 (second session)

| Item | Blocked on |
|---|---|
| ~~#4 Offline copy decision~~ | **RESOLVED D-017** — verified vs adjacent prod repos, not help-center hearsay |
| #7 Prompt-gallery content pass | GSC export (still no credentials in this environment) |
| #10 Import-fidelity benchmark | parser runs VERBATIM today (jsdom, Node 22) — preliminary measured facts + protocol in `active/logs/benchmark/2026-09-26-import-fidelity/`; publication blocked on a REAL exported-file corpus (needs human account files: Chrome export, Raindrop export, Pocket ril_export.html) — synthetic fixtures rejected as not a public corpus |
| #11 Outreach | human decision to send |
| New: Android-app claim in locale compare tables | de/it/es…/marqly-vs-* still list Marqly "Android-App: nein" while EN FAQ says Google Play; confirm the store listing (Play URL) before flipping — agent B could not verify a live listing |
| New: help-center ↔ site Teams contradiction | help.marqly.com `workspaces-and-members.md` says "up to 10 members, 100 GB pooled"; approved site split is $9/seat, min 3, storage NOT claimed (Files dark). Product-doc issue in marqly_2026_prod — owner/PM call |
| New: locale "AI on Free" audit | pt/para-estudantes fixed; a systematic es/pt/fr/de/it sweep for auto-tagging-as-free wording is queued |
| New: url-guard IPv6 test 1/40 | `test-url-guard.mjs` fails on clean HEAD (`[2600:1901::1]` blocked, expects ALLOWED) — pre-existing, untouched this batch |
| Post-release monitoring | no scheduler authorized; owner-triggered |

## Batch-6 decisions (2026-09-26, offline/export truth resolution)

- **D-017 Offline is a shipped Pro capability — the site's denial was as false
  as the old overclaim would be.** Verified first-hand against adjacent repos
  on this machine (the "owner task" was resolvable locally): web SW + IndexedDB
  cache + `CacheButton.tsx` Pro gate; iOS `OfflineCoordinator` shipped since
  2026-06-09; help center `account/offline-mode.md` live (200, quotes checked).
  Claimable split: Pro · web app + iOS app · per-device · no server copy ·
  videos/big pages skipped · NOT Android app/extensions/Free. Cross-device
  offline sync does NOT exist (prod API has no `savedOffline` field — the iOS
  call 404s and self-heals) — banned as overclaim. Rejected: claiming the
  help-center's loose "Offline Mode" at face value (original D-001 caution was
  right; the evidence just arrived from elsewhere).
- **D-018 Export/import copy truth.** In-app CSV export shipped (Free=100
  latest, Pro=all+new-only; URL/Title/Description/Tags only) — rewrote
  can-i-export FAQ + registry; import expectations fixed across 4 import FAQs +
  2 migrate pages (save dates DON'T carry, folders flatten to 2 board levels,
  Raindrop JSON rejected, no dedup at import); the "AI auto-tags every import"
  promise made on Free-facing switch pages is now plan-scoped (server-side
  auto-tagging has been Pro-gated since prod's 2026-09-04 fix). Cancel-FAQ
  AI-on-free contradiction (old lab note) resolved.
- **D-019 Files plane: built, DARK, still banned.** `ENABLE_FILES` default off
  (founder decision label in code; prod changelog 09-26 confirms dark +
  storage claims hidden on /teams). Quotas (10 GiB Pro / 2 GiB LT / 0 Free /
  500 MB per-file) recorded in registry for launch day — zero public claims.
- **D-020 Guards made bidirectional.** seo-check gate 2: MARQLY_CLAIM lost the
  offline term (now a legit capability); added OFFLINE_OVERCLAIM (prose-verb
  attribution + competitor-proximity exclusion so flattened table cells can't
  trip it) and STALE_NO_OFFLINE denial detector; the 2026-09-12
  "100 most recent" ban was hitting the TRUE export-cap sentence → scoped to
  read-wall context. Locale sweep: 142 files via 3 parallel editors (de/nl/it,
  es/pt/fr, ja/ko/zh/pl/tr), integrator-verified: 174-file YAML parse clean,
  table flips header-verified (de first-col, es last-col sampled), residual
  multilingual grep clean, build 16/16 + e2e 184/184 + 0 broken links +
  no-table-overflow @6 pages×8 widths.
- **Harness traps logged:** a stale `python http.server` on 4321 from an old
  session made check-table-overflow.mjs "fail" 48/48 with HTTP 404s (it needs
  a clean-URL server on the CURRENT dist — see `active/tmp/clean-server.py`
  pattern); `rg` is not on this shell's PATH (use the grep tool).
- **llms.txt**: gained Export + Offline + corrected Import/Search rows
  (AI-search engines were being fed the stale "no offline" fact-set).

## Batch-2 decisions appended (2026-09-26)

- **D-009 EN team-tails aligned (8 more pages)**: for-product-managers,
  for-lawyers, job-search-organizer, for-founders, for-consultants,
  second-brain, content-curation, for-recruiters now use the approved split
  (personal = view-only links; shared workspace = /teams).
- **D-010 Quote bank shipped** (mission option C): template + guide wired
  into /for-writers; same verification discipline as the source log.
- **D-011 Gallery hub = navigation, not the library.** Index now renders 48
  featured + category hubs (which carry all 400); client-side search removed
  (it only ever saw the rendered set anyway); stale "reference image"
  description claim fixed; ItemList schema trimmed to what's on the page.
- **D-012 Locale rot quantified, not guessed**: 199 stale lines (Android
  denials across it/pl/ja/pt/… + team lines + comparison-table rows needing
  per-file column verification) inventoried in `locale-truth-inventory.md`
  for batch 3. Bulk regex-editing table rows was rejected as unsafe.

## Batch-3 note (2026-09-26)
- **D-013 Locale sweep executed via delegated edits + integrator verification**:
  scope proven (0 files outside locale-pages), spot-checks grammatical, table
  edits restricted to header-identified Marqly columns, competitor claims left
  alone, build + 16 gates + e2e green. Remaining judgment calls (trustLine
  Android omissions, appending Teams pointer to personal-link-only lines) are
  listed in `locale-truth-inventory.md` and left as owner-visible options.

## Batch-4 note (2026-09-26)
- **D-014 Primary-source kit shipped** (/primary-source-kit): authority/
  link-earning asset per mission option G. Selection criteria published on
  page; annotations original; check-date printed; links into source-log
  template and /for-journalists (contextual, not footer-stuffed). Excluded
  unverifiable entries rather than vouching blind — the exclusion itself is
  disclosed on the FAQ, which is the credibility move.
- Site is now 1,912 pages; 16/16 gates + e2e green.
