# SESSION_LOG — append one entry per session (newest on top)

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
