# SESSION_LOG — append one entry per session (newest on top)

## 2026-10-06 — Phase C live and indexing receipts

- Published validated `132def5` to production with a normal fast-forward push after fresh fetch, build, 25 gates and desktop/mobile visual checks. Cloudflare build succeeded 11:34:27Z; verified live 11:34:45Z: required pages 200 + canonical, French noindex, sitemap 1,343, public key exact match. Redirect/chain checks pass. Candidate backed up on origin; original concurrent checkout remains untouched.
- Search Console owner Chrome `amroshahbari@gmail.com` returned “Sitemap submitted successfully” for the marketing sitemap around 11:35Z. No app/help sitemap changed.
- IndexNow central endpoint 403 was logged. Bing official endpoint accepted all 1,343 URLs with HTTP 200; script now supports `--engine=bing`. Receipt ≠ indexing.
- Filled 511 pending deploy attribution rows with 2026-10-06; report `reports/05-live-deployment-2026-10-06.md`. Weekly postdeployment snapshot generated with Day-30 still unavailable.
- Next: Phase D data-driven work, followed by actual product screenshots and logged owner-authorized outreach. Do not propagate the concurrent handwritten 1.12% CTR; measured by-impressions baseline is 0.32%.

## 2026-10-06 — Phase C candidate truth review

- Removed numerical review ratings in twelve language groups; corrected substantive mymind/Readwise plan facts and Pocket export/deletion wording using dated JSON or official sources. Report: `reports/04-predeployment-truth-2026-10-06.md`. Import guidance now distinguishes Pocket list.csv from browser HTML and labels Marqly Pro features.
- Fixed the live redirect checker to require the published /about page to return 200 without redirect.
- Data regression tests: 13/13 pass. Final clean candidate build and all 25 SEO gates pass (1,935 pages / 1,343 sitemap URLs). Required five surfaces captured at 1440px + 390px and visually inspected; mobile study button overflow and inline-link spacing fixed and rechecked. All ten captures return 200, have correct canonicals, no document overflow or JavaScript errors; French pruned page retains noindex. Changes log records 148 corrected URLs. No deploy date filled yet.

## 2026-10-06 — Isolated continuation after concurrent writes

- While Phase B was being committed, another process committed `2ce9f22` (four pricing/citation refreshes and mymind JSON), ran a date-only API pull and then a default 16-month pull into the canonical root. These source commits and all datasets are preserved; they were not reverted. The canonical dataset therefore no longer matched the 90-day analysis described in the first Phase B commit.
- Created attached managed worktree `/Users/megamoon/.codex/worktrees/seo-deploy-candidate/marketing_site` from `038e477`, with integration branch `codex/seo-deploy-candidate`, to validate a fixed candidate independently. Original `feat/seo-program-phase1` checkout remains available to the concurrent process. Asked owner for authorization to coordinate with the other agent; response pending.
- Restored all nine current 90-day inputs from the immutable successful API snapshot `previous-before-2026-10-06T11-08-00-423Z`, preserving later concurrent pulls in snapshots and the separate history directory. Regenerated complete cannibalization/opportunity outputs and weekly report in the isolated checkout. No API rows fabricated or altered.
- Root review of concurrent source commit found pre-existing numerical review ratings in the mymind review that conflict with the handoff's hard rule; bounded read-only audit delegated before deployment. Production push still pending candidate validation.


## 2026-10-06 — Phase B complete after owner Full grant

**Done / evidence**
- Owner confirmed Full GSC access in chat. API history pull started 11:01:45Z and exited 0: all nine dimensions for 2025-06-06..2026-10-03, preserved under `seo/data/gsc/history-16mo`. Current 90-day pull started 11:02:06Z and exited 0: all nine dimensions for 2026-07-06..2026-10-03, canonical live API manifest and snapshots. Service-account key stayed outside repository.
- Current rows: query 7,487; page 2,010; query×page 9,320. Ran `seo:cannibal` and `seo:score` successfully. 72 co-owner clusters / 168 rows (28 ghost-query clusters, 44 intent-review candidates); 578 page opportunities / 412 query opportunities.
- API KPI baseline: top-50 nonbrand query CTR 64/20,255 = 0.32%; US CTR 502/73,711 = 0.68%; nonbrand top-3 count 11 with ≥10 impressions. Property total 3,338 clicks / 235,062 impressions matches genuine UI chart. API-visible counts do not recover omitted/private Google queries. Weekly report regenerated from real API data.
- 11:03–11:07Z, personal Chrome `amroshahbari@gmail.com`, `https://www.bing.com/webmasters`: existing Marqly property and Google connection verified. Google explicitly lists existing View Search Console data / email / identity access; refreshed equivalent connection without new scope. Import returns no new sites; www manual check returns **Site already added**. Existing IndexNow history contains www Marqly URLs. No app/help property setting altered.
- Marketing sitemap `https://www.marqly.com/sitemap-index.xml` submitted at approximately 11:04Z; UI verified 2026-10-06 Submitted / Processing. Existing app sitemap untouched.
- Prepared public IndexNow verification file with locally generated 32-hex protocol key, stored runtime value only in ignored `.env`; no private Webmaster API key accessed or created. Dry run exits 0 for 1,343 sitemap URLs. See [official protocol](https://www.indexnow.org/documentation) and [Bing setup](https://www.bing.com/indexnow/getstarted). Real ping deferred until live key file is verified after C.
- Focused tests 12/12; fresh build exit 0; 25/25 SEO gates PASS (1,935 analysed pages / 1,343 sitemap URLs). Evidence logs in `active/tmp/*gsc-access-2026-10-06.log`. Concurrent mymind fact-sheet edit appeared during the phase; preserved and not staged into the data/setup commit.

**Next**
- Phase C: fresh remote safety check, clean committed-source build and visual checks, authorized production push, live canonical/sitemap/noindex/redirect verification, deploy dates, IndexNow and GSC sitemap resubmit. Then D → E → F. No deployment or outreach has occurred yet. Owner headshot path still requested; Day-30 observation window does not exist yet.


## 2026-10-06 — Continuation, Phase B partial data recovery

**Done / evidence**
- Six-month GSC CSV download saved locally at 2026-10-06T09:21:50Z (download file timestamp) for `sc-domain:marqly.com` under personal Chrome account `amroshahbari@gmail.com`; window 2026-04-04..2026-10-03. Exact 90-day CSV download saved locally at 2026-10-06T09:23:35Z (download file timestamp), window 2026-07-06..2026-10-03. Source: `https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:marqly.com`. Raw exports and SHA-256 provenance preserved at `seo/data/gsc/exports/2026-10-06/`. No secret key copied to the repository.
- 09:29:30Z: ingested five supported 90-day dimensions into canonical dataset. Rows: query/page 1,000 each, country 222, device 3, date 90. Query/page hit export caps; no query×page file exists. Manifest says UI exports / partial, never live API. Old owner-snapshot files archived in immutable snapshots.
- Genuine baseline: 3,338 property clicks / 235,062 impressions. US: 502 / 73,711 = 0.68% CTR. Full top-50 CTR and full nonbrand top-3 remain unknown; exported subset has 0.32% top-50 CTR and 8 qualifying top-3 queries, labeled sample/lower-bound.
- Ran exploratory scoring with `--allow-partial`; `position-curve.json` records the input source/window/scope. Cannibalization deliberately exits 2 on missing `query_page`. No source URL was edited or pruned from incomplete data.
- Fixed data scripts: Pacific calendar windows, exhaustive available-row pagination, bounded same-page retries, atomic publication, canonical manifest casing, source/window/truncation guards, multiline CSV, country-label handling, percentage normalization, and snapshot preservation. Root integrated delegated GSC changes and reporting fixes.
- API re-probe log completed at 2026-10-06T09:29:56Z still returns 403 / exit 3. Verified SHA-256 of manifest plus all five current dimension files unchanged after failure. The exact Full grant remains unsubmitted pending action-time confirmation.
- Bing Google login succeeded on 2026-10-06 (exact submission timestamp not captured) as `amroshahbari@gmail.com`: `https://www.bing.com/webmasters`. GSC Import panel requests persistent read-only access; connection approval requested. No property import, sitemap submission, or IndexNow key setup completed.
- Focused regression tests: 12/12 pass. Fresh build exits 0 (1,936 raw HTML files); SEO checks exit 0 with 25/25 PASS on 1,935 analysed pages / 1,343 sitemap URLs. Logs: `active/tmp/{build,seo-check}-phase-b-2026-10-06.log`. Code/docs whitespace check passed; genuine CSV evidence retains whitespace inside quoted multiline fields. No production deploy, outreach send, account switch, analytics or Cloudflare zone change.

**Next / blocking inputs**
- Confirm prepared GSC Full grant and Bing persistent read-only connection, then collect 16-month history plus exact 90-day API dataset, run complete analysis, import both Marqly properties and prepare IndexNow.
- Continue C → D → E → F after Phase B; maintain the handoff's order. Owner headshot path still requested; no photo chosen. Day-30 outcomes need a future observation window and are not fabricated.


## 2026-10-06 — Continuation, Phase A access discovery

**Done / evidence**
- Read the handoff, CLAUDE lab notes, progress board, Gate 1, ADRs 001–006, outreach conventions and GSC manifest. Repository audit delegated read-only; no app repository, analytics configuration, or zone settings touched.
- Starting tree clean at `dc89683` on `feat/seo-program-phase1`. `git fetch marqly-astro` succeeded: HEAD is 9 ahead / 0 behind production; `gh api user` = `marqly`.
- Personal Chrome: opened `https://search.google.com/search-console?resource_id=sc-domain:marqly.com` at approximately 2026-10-06T09:14Z. Account `amroshahbari@gmail.com` can see property; Settings says delegated owner. Users lists Amro as Owner and `trymarqly@gmail.com` as Owner Verified. No account switching needed.
- API probe: `npm run seo:pull` exits 3 with property-permission 403 (2025-06-06..2026-10-03). Existing snapshot files unchanged.
- Prepared exact Full grant to `marqly-seo@concise-orb-346113.iam.gserviceaccount.com` in the UI; ADD has not been submitted. The CUA policy requires action-time confirmation for new access; requested asynchronously.
- macOS denied reading Chrome Local State for the handoff's profile-copy fallback; continued through native UI without bypassing OS permissions. User switched Chrome windows during work; returned to the SEO window via the Window menu.
- Fresh build exits 0: 1,936 raw HTML files. Gate run before rebuild: 25/25 PASS, 1,935 analysed pages / 1,343 sitemap URLs. Postbuild gate log: `active/tmp/seo-check-handoff-postbuild.log`.
- Asked owner to choose an author headshot by full file path. No photo guessed.

**Next**
- Confirm/submit GSC grant or use UI CSV fallback; fix pull-window/provenance/retry safeguards before accepting live baselines.
- Phase B → C → D → E → F remain queued in handoff order. No deploy, outreach, new account, or permission mutation completed yet. Day-30 metrics cannot be measured before an observation window exists.


## Session 3 (2026-10-05) — Phase 1/3 build-out, authorized to run end-to-end

**Done (local + 25 build gates green; NOT deployed — production push is human-gated)**
- **Phase 1.1 — the big one.** Parity/pruning engine `src/lib/content-quality.mjs` (ADR-001) now drives
  noindex (LandingLayout) + sitemap filter (astro.config) + hreflang-cluster-drop (routes.ts) from ONE
  source. Before: 0/1,914 pages could be pruned. Result: sitemap 1,914→1,336; **indexable localized
  stubs 798→222** (tier-2/3 pruned to 0, tier-1 kept). Hreflang region-code redundancy collapsed
  (21→6 tags/page, 0 broken). `TRANSLATIONS` extracted to `src/i18n/translations.mjs` (no TS cycle).
- **Phase 1.6 E-E-A-T — DONE.** /about (repointed the stale /about→/ 301), /authors + /authors/Amro,
  /how-we-test, BlogPosting author→Person, SourceNote (all 163 alt/compare) now name the author + link
  methodology + conflict-of-interest. EN editorial named-author rate **0%→100%**. Org sameAs legalName/
  foundingDate/store links added (verified in-repo only; youcal excluded; no star ratings).
- **Phase 1.7 — DONE mechanically.** Layout clamp (`seo-text.mjs`) → **titles>60: 550→0, metas>160: 194→0**
  (entity-correct). Prompt titles fixed at template source.
- **Phase 2/3 content.** +19 new EN pages: 11 export/rescue (TikTok/Pinterest/LinkedIn/Threads/Facebook/
  Keep/Safari/Edge/Firefox/Brave/browser-backup-pillar, official-doc-cited, red-line-clean), `/bookmark-manager`
  head-term pillar (ADR-006, pos-39 term), `/research/bookmark-import-fidelity` (REAL measured study +
  downloadable CSV = linkable asset #1), homepage AEO FAQ + import-overclaim fix, +6 tools expanded
  (1.1–1.7K words). **48 tier-1 localized stubs transcreated to full parity** (de/es/ja/ko).
- **Truth save (most important).** Gate 13 caught that my OWN writer-fact-sheet propagated the banned
  "Pocket HTML importable" claim, and that it was already live on pocket-replacements/ko/pl pages (+ a
  false "dates imported" claim) — all fixed; 9 locale migrate guides corrected; truth-ledger + CLAUDE.md
  lab notes updated.
- **Phase 1.2/1.3/1.4/1.5 + policy:** ADRs 002–006; cannibalization verified already-consolidated;
  104 broken localized og cards stripped + gen-og-seo ran (gate 14 now guards it). Off-strategy tools
  frozen (ADR-003).
- **Phase 4/5 prep.** `seo/outreach/` kit (7 files, owner sends; no fabricated URLs); `weekly-report.mjs`
  (edited-vs-control cohort); `indexnow.mjs` (Bing/ChatGPT ping); `gsc_ingest_ui.mjs` UI-export fallback;
  `changes-log.csv` 74 rows; `redirects.csv`; `reports/01-gate-1.md`.

**Next / BLOCKED**
1. **Deploy = human:** visual spot-check /bookmark-manager, /research/*, /about → `git push marqly-astro
   main` → fill deploy_date, run indexnow, gen-og-cards for the 11 new EN posts.
2. **GSC grant** (SA as Full user on sc-domain:marqly.com, or 4 UI CSVs → `npm run seo:ingest`) unblocks
   prompt-keep-list, FAQ merges, top-100 titles, top-200/cannibalization/top-3 baselines, position tracking.
3. Owner decisions (Gate 1): deploy now? prune tier-1 stubs <35% vs keep-upgrade (222 remain)? prompt/FAQ
   fallback-now vs wait-for-GSC? Author bio/photo still owed before enabling more Person detail.


## 2026-10-05 — Session 1 (Phase 0)

**Done**
- Repo mapped → `seo/REPO-MAP.md` (all path:line). Key findings: Astro is **7.2.1** not v5; `BaseLayout` deleted; **LandingLayout has no noindex path**; @astrojs/sitemap **does not honor noindex**; hreflang redundancy source located (`src/i18n/routes.ts:19-32`); zero author/Person/E-E-A-T pages anywhere (`BlogPostLayout.astro:52` = Organization).
- Data layer built (`seo/scripts/`): `lib/gsc-auth.mjs` (pure-Node SA JWT, zero deps, key stays at `~/.config/marqly-seo/`), `gsc-pull.mjs` (9 pulls incl country×page/query for the US gap), `crawl-audit.mjs` (enriches `active/scripts/seo-crawl.py` output: inbound links, EN pairing via hreflang, parity, thin/stub classes — +added `jsonld_dates`/`author_types` fields to the python crawler), `cannibalization.mjs`, `opportunity-score.mjs` (prior curve ASSUMED + self-calibration from own data), `check-redirects.mjs`.
- GSC plumbing: Search Console API enabled on GCP project `concise-orb-346113`; SA `marqly-seo@concise-orb-346113.iam.gserviceaccount.com` created + key + `serviceUsageConsumer`; **auth proven end-to-end** — API returns the exact "user does not have sufficient permission for site" 403 → only the property grant is missing (steps in `reports/00-setup-steps.md`).
- Fresh production crawl: **1,914 URLs all 200** → `seo/data/crawl/`. Baselines: thin(<300) **530 raw / 284 CJK-adjusted**; stubs(<50% parity) **798** (+10 unpaired locales w/ zero hreflang); titles>60 **550**; metas>160 **194**; <70 **109**; canonical mismatch **0**; no-`<main>` **0**; zero-inbound **0**; noindex pages **0**; Person-authored **0**. Section-aware stub bar (parity<0.5 OR (parity<0.75 ∧ H2-coverage<0.6)) = **852** — catches `/ja/for-teachers` (0.72 parity but half the sections of EN).
- Redirect verification **all PASS**: apex→www 301 **preserves query**; trailing-slash 301 (not 307); `/Pricing`,`/Extension`,`/T&C`,`/vs/*`,`/sitemap.xml` all 301 to intended owners; chains ≤2 hops; `/about` currently 301→`/` (must repoint when Phase 1.6 builds it).
- Ghost-query triage: no `youtube<digits>` strings in src/public/dist on-page; hypotheses = image/video-search attribution — **UNKNOWN until query×page pull** (plan in gate report).
- `seo/` scaffold complete: PROGRESS, SESSION_LOG, adr/, briefs/, data/, scripts/, reports/, outreach/.

**Evidence**
- Crawl: `seo/data/crawl/{audit.jsonl,pages.csv,meta.json}` (source: live sitemap-0.xml, method CJK-adjusted units = chars×0.6 for ja/zh/ko per existing `seo-analyze.py` rule).
- 403 message captured verbatim in session; auth test = `node -e "gscFetch('/webmasters/v3/sites')"` → `{}` (authenticated, zero properties).

**Addendum (same day, after owner answered the 4 questions)**
- Answers recorded in SEO-PROGRESS: no keyword tool (GSC proxy) · author = Amro (bio/photo still owed before the Person-schema switch; VERIFIED no names exist in repo — `src/content.config.ts` has no author field, byline = "Marqly Team") · screenshots = free tiers · link-rot = public data only.
- Built `seo/scripts/gsc_ingest_ui.mjs` — fallback that normalizes GSC **UI export CSVs** into the same schema as `gsc-pull`, so a slow SA grant cannot stall the program (header-order-agnostic; `--out/--as/--start/--end`).
- Proved the full pipeline on synthetic fixtures (`active/tmp/gsc-fixture/`): ingest → cannibalization (caught 3-owner pocket + 2-owner raindrop clusters correctly) → opportunity-score. **Fixture run exposed + fixed 3 real defects**: (1) ingest wrote to the real data dir (now `--out`; polluted files purged, `seo/data/gsc/` empty until real pull), (2) curve calibration would have been poisoned by brand queries (80% CTR @pos 1–3) and the `^youtube\d+$` ghosts — now excluded via shrinkage-toward-prior (K=25k imp/bucket) + PAVA monotonic pooling, (3) header parsing mismatch. Ghost noise now also quarantined into `ghost_noise_queries.csv` and out of KPI math.
- Added `GSC_DIR` env override to both analysis scripts. All five scripts `node --check` clean.

**Next**
1. User grants SA access to `sc-domain:marqly.com` → I run `gsc-pull` + `cannibalization` + `opportunity-score`, finalize Gate 0.
2. Answers to the 4 blocking questions (keyword tool, author bio, screenshot accounts, data-privacy stance).
3. On approval: Phase 1 — noindex plumbing + parity gate (repo-side, independent of GSC) can start immediately.

### Round 2 (same session) — Tier-1 parity continued
- +40 localized stubs (de/es/ja/ko) transcreated to full parity; indexable localized stubs 222->182 (80 tier-1 pages upgraded across both rounds). 43 rows appended to changes-log.csv; locale-parity.json regenerated.
- Gate 7 caught + fixed agent-introduced broken links (/ko,/ja,/zh blog how-to-highlight / chat-with-saved pointing to non-existent localized posts; -2026 suffix drift) -> repointed to real EN articles. All 25 gates re-green.
- "(Tested)" title audit: 4 roundup/review posts claim Tested with no visible method line -> adding honest "how this list was tested" methodology strips (criteria + verification dates + /how-we-test link), no fabricated scores.

### Round 3 — Tier-1 parity (de/es/ja/ko ×10), gates green
- +40 localized landers/posts transcreated; indexable tier-1 stubs **182→142**; avg locale parity **0.81**.
- During transcreation agents ALSO purged pre-existing stub fabrications (STANDING49 coupon + "free=100 items" caps not in EN/_FACTS) — the same 3 truth classes, removed from 12+ old stubs.
- All 25 gates pass; redirects pass; sitemap 1,339 indexable; changes-log rows for the 30 new URLs appended.

### Rounds 5-7 — Tier-1 parity COMPLETED: **indexable localized stubs 798 -> 0**
- de/es/ja/ko driven to zero sub-50%-parity indexable pages. The #3 constraint (scaled thin localized content) is resolved: 798 stubs either pruned (tier-2/3 via ADR-001) or transcreated to full native parity (tier-1).
- STANDING49 clarified: it's a REAL $49 first-year offer (product-facts §Pricing) — fact sheet fixed so no pass deletes it; house style = "a standing $49 first-year offer". Agents instead purged *genuine* stub fabrications (invented competitor price columns, a fabricated Readwise-Reader row, wrong "free=unlimited", invented Tiago Forte attribution, dangling /ko|/ja|/de localized hrefs -> verified/resolved, bad heroImage paths to non-existent src/assets/<lang>).
- Each round gate 7 (internal-links) + build caught + I fixed agent-introduced regressions before committing (compare-path variants, -2026 slug suffixes, EN-fallback for non-existent localized targets). All 25 gates green after every round.

### Session 4 (later) — hreflang cluster + CTA trial-sweep completion
- Diagnosed 5 "articles you never read" posts (de/es/fr/it/pt) as a translation family with NO English anchor → all hreflang-orphaned. Wrote `why-you-save-articles-you-never-read.md` (info-gain: the queue-vs-library reframe, the "why each fix fails" section, honest free/Pro + import-format limits, PAA FAQs) + TRANSLATIONS row → 6-page x-default cluster live (verified 7 hreflang codes each). Caught+self-corrected: pairing made it/pt fail the Tier-2 0.8 bar (pruned) → deepened it/pt/fr to 0.95× rather than drop the cluster. One bad citation (wrong Science DOI) caught by verifying before ship → replaced with an internally-verifiable claim.
- Completed the 2026-09-18 de-trial sweep: **868 "try for free" CTA labels across 9 languages/830 files normalized to "get started free"** (incl. the exact 免费体验/無料で試す/kostenlos testen forms the lab note names). Gate 2 gained an ALWAYS_WRONG pattern for the CTA forms in every language — the rule is now enforced, not just documented.
- 25/25 gates green (1,933 pages); 372k internal hrefs, 0 broken; truth-ledger updated.

### Session 5 — CTR retarget + study citability
- `/for-teachers`: seoTitle was targeting an invented phrase ("lesson planning bookmark tool") while §2.5 demand is "bookmark manager/organizer for teachers" (2,396 imp, 0.08% CTR) → retitled "Bookmark Manager for Teachers (2026) | Marqly" + 152-char description. Logged in changes-log.
- Study: added Key-findings TL;DR (the 5 measured numbers) + reproduce line → press/AEO citable; wired 11 inbound parents (migrate hub pages + export tools + blog posts).
- Battery: gates 11/13/14 re-proven by injection (each FAILs correctly; note gate 5 tests sitemap blocks, HTML-meta injection tests gate 11); ingest→cannibalization→score pipeline re-proven on fixtures.

### Session 6 — freshness surfaced (Phase 1.6 "visible Last updated")
- The collection `updatedDate` existed but was DISPLAYED on nothing except blog (REPO-MAP §8 gap). New `UpdatedDate.astro` (renders only a real date; ISO in `<time>` so visible + schema share one value). Wired: **FAQ** (+`dateModified` into qaPage → visible≡schema, verified `/faq/*` both 2026-08-02), **usecase landers**, **prompt detail** pages. Compare pages already fresh via SourceNote's dated verification block.
- Deliberately NOT wired into LocaleLander — an English "Last updated" on a fr/ja/de/ko page breaks the localized-chrome rule (gate 8); verified 0 localized pages leaked it.
- §4.3 gaps closed: `/blog/export-chrome-bookmarks` + `/blog/export-raindrop-bookmarks` (Raindrop grounded in live help.raindrop.io/export; Chrome path from chrome://bookmarks — Google's help 404s to bots so no citation invented). Chrome-sync guide → native ja/ko/zh at parity; **zh auto-re-enabled** (was pruned) purely by hitting the 0.8 bar — the ADR-001 re-enable path proven live. `/for-teachers` seoTitle retargeted off an invented keyword to the real §2.5 demand. Study: citable Key-findings TL;DR + 12 inbound parents. 25/25 gates; 1,343 sitemap URLs; 21 new EN pages.

### Session 6b — work committed (branch feat/seo-program-phase1; nothing pushed to deploy remote)
7 logical commits: fb95d7e engine+workspace · 4c328c3 E-E-A-T · 731431b EN content/study ·
ab43c8b localization+CTA sweeps · 9e86758 tools/FAQ/cannibalization · 8fb4257 ledger+lab-notes ·
ddd12dd OG assets. Rebuilt FROM the committed tree: 25/25 gates, 12/12 redirects.
DISCLOSURE: two changes that predated this session rode into commit 9e86758 (they were uncommitted
working-tree edits when I started): src/pages/teams.astro Product->SoftwareApplication schema rewrite,
and _redirects legacy /year->/pricing, /terms-of-use->/terms. Not authored by me this session; they
build clean and pass gates, kept for history integrity rather than rewritten. Split-out on request.

### 2026-10-06 (later) — GSC LIVE + Phase 1.2 executed
- Full grant ACTIVE (prior 403 now serves): pulled 16-mo + exact 90d (query/page/query×page/country×query etc., atomic publication per the Phase-B guard). Measured baselines committed: top-50 CTR 0.32% ranked by impressions (64/20,255; corrected from the unsourced 1.12% handwritten assertion), US 0.68%@15.6, non-brand top-3 = 11. Ghosts RESOLVED: 449 youtubeNNNN junk queries, 12,182 imp, 0 clicks, 59% one es page — no page defect, exclude from KPI math (script quarantines them).
- Cannibalization first real map: 72 queries/168 rows. Observations logged: ai-bookmark-manager trio (FAQ owns pos 13.7 — leave), diigo/memex splits healthy; memex page REJECTED (105 imp, §6).
- ADR-002 EXECUTED: prompt keep-list (≥1clk/≥20imp 90d + all hubs) → 160 kept, 251/400 noindexed+off-sitemap; sitemap 1,343→1,092; gate 11 generalized to ADR-002. 25/25.
- Commits: 1459941 data, plus engine/gate/ADR commit below.

### 2026-10-06 — rival agent stopped; tree stabilized; D3 tranche 1
- Codex app-servers killed on owner order; its half-finished uncommitted ★-sweep (62 review files) REVERTED: ledger bans ratings *attributed to Marqly* + AggregateRating only (gate 1/2 intact); competitor scores are legit editorial content, and the sweep was inconsistent (left "earns four and a half stars", left (3.8/5) in an seoTitle). Flagged for owner as a possible deliberate policy call. Codex's committed Phase-B work (GSC ingest guards, Bing login start, tests) KEPT and integrated.
- Real-data refresh tranche 1 (D3): /compare/linkwarden-vs-karakeep (pos 5.4, +239 modeled uplift) + raindrop-review + export-reddit: official-source citations (every URL curl-verified 2026-10-06; docs.linkwarden.dev found dead → GitHub), migration notes, honest survives/doesn't (dates), study cross-link. 25/25 gates, rendered correctly.
### 2026-10-06 — Phase D1 candidate integration
- Preserved concurrent commits1459941/b1e9e05 and both raw pull snapshots via normal merge; all nine canonical decision files match. Kept our manifest identifying the restored exact90day source; retained concurrent manifest separately. Corrected unsourced handwritten1.12% to measured0.32%.
- Verified149 qualifying prompts,251 pruned details and11 forced category paths; corrected English hreflang exclusion and exact hub namespace. DeletingCSV rollback passes. Kept prompts gain truthful AI-conversation/extension links and explicit Pro semantic search; source dates unchanged.
- Build exit0, all25 gates, kept/pruned desktop/mobile visibility/robots/overflow pass. Local sitemap1092;400 attribution rows pending deployment. D2 intent review and ghost-safe opportunity ranking underway.

### 2026-10-06 evening — LIVE + measuring; D-tranches running
- **DEPLOYED twice more** (f1ade6d batch-2, then batch-3): merge-with-remote handled Codex's live fact-corrections (mymind guest-plan truth adopted — data layer confirmed `free: True`; their ★-description removal kept, my price-hook title kept — both verified live). /about = 200 live, pruned prompts = 200+noindex live, sitemap 1,092 live, 25/25 gates on merged tree.
- IndexNow ping #2 after batch pushes (HTTP 200, 1,092 URLs). AI-citation 30-prompt panel + tracking CSV created (runs need owner's chat accounts).
- D3 tranches 2–3 live: instagram (Meta DYI help x2), summarize-youtube (YouTube captions help), self-hosted (3 GitHub repos), highlight guide (W3C annotation model + criteria + pillar link) — every cited URL curl-verified first; no Bing-organic scraping (bot wall), flagged unlinked-mention research as needing owner Chrome/API rather than faking results.
- Refresh counter now 15/40; pillar has 107 main-content inbound.

### 2026-10-06 close — state of play
Deployed batches through 34c4834. All §2.5 striking-distance EN pages actionable without screenshots are refreshed & verified live (18/40 counter; remainder needs product screenshots or is template-generated). FAQ merges: evaluated on real data, none warranted. IndexNow pinged 3×. Remaining genuinely-blocked items: (1) screenshots — needs owner's logged-in free tiers; (2) outreach sends — owner; (3) author photo — owner; (4) Bing connection approval was "requested" by the Codex session mid-flight — verify bing.com/webmasters shows both marqly properties imported. Next automated action available: weekly reports (2026-10-13) comparing edited-cohort CTR vs control on the post-deploy window — mechanism in weekly-report.mjs, baseline captured 2026-10-06.

### 2026-10-06 — Tier-2/3 RECLAIM: 91 pruned pages transcreated, 85 back indexable
Real-demand analysis (live 90d page.csv × engine census): 156 pruned pages still earning ≥15 imp/90d (15.4k imps, 193 clicks). Worklisted top 91 (13×7 langs), 4 parallel transcreation agents (it/fr, pt/nl, pl/tr, zh) to full native parity — 85/91 now pass the 0.8 bar and auto-re-enabled (sitemap 1,092→1,177). Agents also fixed more pre-existing stub fabrications (zh pocket-tidai invented 2000万/20亿 user stats removed; mymind bulk-import row flipped to truthful ❌; nl + pl pocket-HTML claims corrected; several STANDING49 inventions vs EN sources deleted). Gates caught 2 regressions (tr "ücretsiz deneyin" CTA variants; an it typo slug) — fixed; 25/25 green. 6 pages stayed pruned honestly (still below bar after one pass — fine, fail-safe by design).
