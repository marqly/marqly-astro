# Decisions, opportunities, backlog (2026-09-26)

## Decision ledger (dated, with rejected alternatives)

- **D-001 (09-26) Offline stays "no" on-site.** Brief assumed some pages
  wrongly deny an existing Pro offline benefit; audit found the site is
  uniformly "no offline" and the *spec bans* claiming it. The outlier is
  help.marqly.com (out of repo). Rejected: flipping site copy to claim offline
  on the strength of an unverified third-party page. → owner verification task.
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
| 10 | Import-fidelity test as original evidence (documented public corpus, honest failures) | research | batch 3; needs benchmark run dir first |
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

## Task state (resumable) — end of 2026-09-26 session

Deployed through `main` at marqly-astro (see git log; batches 1-5 + fixes all
live, 16/16 gates, e2e 184/184). Everything executable without new access is
DONE. Remaining items are each gated on something only the owner can supply:

| Item | Blocked on |
|---|---|
| #4 Offline copy decision | owner: verify help.marqly.com "Offline Mode" vs app reality |
| #7 Prompt-gallery content pass | GSC export (which prompts get impressions?) |
| #10 Import-fidelity benchmark | app/API access + run dir protocol |
| #11 Outreach | human decision to send (drafts ready, personalized, no spam) |
| Locale trustLine Android omissions | owner marketing call (understatements, not lies) |
| Post-release monitoring | no scheduler authorized; review cadence = owner-triggered |

Next session: re-run gates on current main, read this file top-to-bottom, and
start with whatever row of the table above has gained its access.

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
