# SEO-PROGRESS — Marqly 30-day program

Mission: page-1 (pos 6–12) → top 3. Constraints in leverage order: authority → CTR → thin-content liability → E-E-A-T → money pages. Program spec: repo root master prompt (this file is the live board).

## Status

| Phase | Days | State | Gate |
|---|---|---|---|
| 0 Instrumentation + baseline | 1–2 | done: real 16-month API history + 90-day decision dataset, analysis and dated KPIs. See `reports/03-live-api-2026-10-06.md` | Gate 0 reported |
| 1 Stop the bleeding | 3–7 | **largely DONE (live, gated).** Parity gate, E-E-A-T, titles/metas, hreflang cleanup, tools, ADRs, truth-fixes. GSC-dependent bits (FAQ merge-by-demand, top-100 title hand-tune) queued; prompt pruning validated for deployment. | **Gate 1 report → `reports/01-gate-1.md`** |
| 2 CTR blitz + striking-distance | 8–14 | partial (titles done; 6 tools expanded; 48 tier-1 localized upgraded). Per-page GSC strikes pending. | — |
| 3 Money terms + clusters | 15–23 | started: `/bookmark-manager` pillar + `/research` study + homepage AEO + 11 export posts. | — |
| 4 Authority engine | 3–28 (parallel) | **kit PREPARED** (`seo/outreach/`), owner-authorized sends. Study asset live; production verified 2026-10-06. | — |
| 5 AEO + measurement | 26–30 | scripts ready (`weekly-report.mjs`, `indexnow.mjs`); AI-citation tracking pending owner. | — |

**LIVE as of 2026-10-06 11:34 UTC.** Production `132def5`; Cloudflare build succeeded, required pages/canonicals/noindex/redirects and 1,343-URL sitemap verified live. Search Console confirmed manual marketing sitemap resubmission; Bing IndexNow accepted 1,343 URLs (HTTP 200). Deploy dates filled; indexing and Day-30 outcomes remain unmeasured. No outreach send completed yet. See `reports/05-live-deployment-2026-10-06.md`.

## KPI deltas (owner snapshot baseline → local after 2026-10-05)

| KPI | Baseline | Now (local build) | Target |
|---|---|---|---|
| Sitemap URLs | 1,914 | **1,343** (current verified local sitemap) | quality↑ |
| Indexable localized stubs (<50% parity) | **798** | **0** (tier-2/3 pruned; 168 tier-1 pages transcreated to full parity, rounds 1-7) | 0 |
| Titles >60 (indexable) | **550** | **0** (≤60, entity-correct) | 0 |
| Metas >160 | **194** | **0** | 0 |
| EN editorial w/ named author + methodology | 0% | **100%** (blog + all 163 alt/compare via SourceNote) | 100% |
| E-E-A-T pages (/about /how-we-test /authors /research) | absent | **live** | — |
| New EN pages (info-gain gated) | 0 | **20** (11 export + pillar + study + 4 trust + /authors index) | 20–25 |
| On-strategy tools expanded (≥400w, WebApp schema) | — | **6** (1.1–2K words) | 9 |
| Truth-bugs fixed (Pocket-HTML; pl dates) | live | **fixed + gate 13 added** | — |
| Cannibalization consolidation (X-vs-Marqly→/compare) | — | verified already done (prior) | — |
| Bing WMT + IndexNow | no | Existing GSC connection/site verified; sitemap resubmitted; public key verified live; Bing receipt HTTP 200 | yes |

## Task board

### Phase 0 — final
- [x] repo map · data layer (6 scripts incl `gsc_ingest_ui.mjs` UI-export fallback) · fresh 1,914-URL crawl → `seo/data/crawl/` · redirect verification (all PASS) · ghost-query triage (no on-page source; needs query×page)
- [x] Genuine UI fallback: six-month raw bundle preserved; exact 90-day query/page/country/device/date CSVs ingested with provenance and immutable snapshots. Query/page each reach 1,000 rows.
- [x] Owner granted Full access; both real API datasets collected (nine pulls each), query×page analysis and opportunity scoring generated. Canonical manifest is live API / complete. UI fallback remains archived. Bing’s existing read-only connection and apex/www registration verified; sitemap resubmitted and IndexNow key prepared.

### Phase 1 — remaining (GSC/data-dependent)
- [ ] 1.2 prompt-gallery prune — ADR-002 ready; needs per-URL clicks. Do not treat URLs missing from the capped UI export as zero-demand.
- [ ] 1.3 FAQ merge-by-demand — 51 faq under 500 units are mostly legit QAPages; the 2 thin ones expanded. Merge only once GSC shows which cannibalise. (Not padded.)
- [ ] 1.7 hand-tune top-100 titles beyond the ≤60 clamp — needs GSC impression ranking.
- [x] Tier-1 parity work completed in the prior session: 0 indexable localized stubs; the earlier 222-stub task is superseded by rounds 5–7.

### Phase 3 — money + clusters (done this session)
- [x] `/bookmark-manager` pillar (head term, ADR-006, info-gain = 4-kind decision table)
- [x] `/research/bookmark-import-fidelity` study (linkable asset #1, REAL measured data + CSV)
- [x] homepage AEO: added "What is an AI bookmark manager?" FAQ + fixed the import auto-tag overclaim (plan-scope) + free-plan wording
- [x] 11 export/rescue posts (validated cluster; verified official-doc citations; VERIFY markers stripped)
_done 2026-10-05 (7 rounds)_; 3.2 remaining money-lander upgrades (read-it-later/web-highlighter are already strong — verify by GSC before editing)

### Phase 4 — authority (owner-authorized execution)
- [x] kit PREPARED: `seo/outreach/` (study one-pager, listicle worksheet, pitch templates, directory copy pack, community angles, SERP-check list)
- [ ] Execute and log owner-authorized outreach; link-rot public-data asset (owner picked **public data only**) → next asset
- [ ] unlinked brand mentions (markly.me collision) — needs owner web search

### Phase 5 — measurement
- [x] `weekly-report.mjs` (dated exposure cohorts; comparable-window deltas only) · `indexnow.mjs` (Bing/ChatGPT index ping, key via env)
- [ ] AI-citation tracking (owner runs the fixed prompt set; log to `seo/data/ai-citations.csv`)
- [x] GSC API access for position tracking, 16-month history and exact 90-day baseline (2026-10-06).

## Gates & deploy
- `npm run seo:check` → **25 gates** (added: gate 11 ADR-001 parity 3-surface consistency; gate 12 SERP length ≤60/≤160; gate 13 Pocket-HTML truth). All negative-tested.
- Deploy authorized by the 2026-10-06 handoff: fresh build/gates + visual spot-check, then `git push marqly-astro <branch>:main` (PROD). After push: fill deploy_date in `changes-log.csv`, run `indexnow.mjs`, run OG generators for new pages, submit Bing import.

## KPI tracking mechanics
- Weekly `seo/reports/weekly-YYYY-MM-DD.md` from scripts (Phase 5 spec, start as soon as GSC flows).
- Every URL edit → `seo/data/changes-log.csv` (before/after title, meta, H1, word count, deploy date).
- Every redirect → `seo/data/redirects.csv` + `public/_redirects` (slash catch-all stays LAST).
- Safety rails: never slug-change a URL with clicks without 301; never touch top-3 pages except links/fixes; no date-bumps without substantive edits; claims VERIFIED/ASSUMED/UNKNOWN labeled.

## Open questions — ANSWERED 2026-10-05 (owner)

1. **Keyword tool:** none → **GSC impressions = volume proxy** (volumes labeled UNKNOWN). No Ahrefs/Semrush/DataForSEO pulls; competitor-gap work uses the verified `src/data/competitors/*.json` + SERP checks only.
2. **Author:** "we already have names, use them" → author = **Amro (founder)**; VERIFIED source: `src/content/faq/is-there-a-lifetime-deal.md:29` (`amro@megamoon.com`). **Prior-session update:** the owner-supplied name/bio are already implemented with Person schema. Only a confirmed headshot file path remains; requested on 2026-10-06. No photo selected or invented.
3. **Screenshots:** **free tiers suffice** — capture Raindrop/Linkwarden(self-host)/mymind/Instapaper/Readwise free-plan views via Playwright (playwright already a devDependency). Paid-plan UIs are OUT unless owner provides access per product.
4. **Link-rot study asset:** **public data only** — no aggregate Marqly user data. Method must cite dated public sources; anything unverifiable gets cut, not hedged. (Human-decision flag retired.)

## Session protocol
1. Read this file + last 3 `SESSION_LOG.md` entries. 2. Pick next unblocked task. 3. Execute. 4. Update both files. 5. 5-line summary.

## Continuation evidence — 2026-10-06, Phase A

- Clean branch at `dc89683`, 9 commits ahead of fetched `marqly-astro/main`; no remote-only production commits. GitHub active account verified as `marqly`.
- Search Console `sc-domain:marqly.com` opens in personal Chrome under `amroshahbari@gmail.com`; Settings identifies a delegated owner. Users lists this account as Owner and `trymarqly@gmail.com` as verified Owner.
- `npm run seo:pull` still exits 3 / HTTP 403; the service account has not yet been granted property access. Exact Full-access form prepared, awaiting the browser policy's action-time confirmation. Genuine CSV fallback ingested in Phase B below.
- Fresh `npm run build` exited 0 (1,936 raw HTML files); prebuild gate run passed all 25 assertions on 1,935 analysed pages and 1,343 sitemap URLs. Postbuild gates passed 25/25 on 1,935 analysed pages / 1,343 sitemap URLs.
- Script audit found 16-month/90-day window mismatch, silent rate-limit skip, absent live manifest, and predeployment cohort misclassification; corrections completed and validated in Phase B below.
- Author headshot path requested; no image set. Day-30 outcomes remain unmeasured: no elapsed postdeployment observation window exists.

## Earlier continuation evidence — 2026-10-06, Phase B partial (superseded by API access below)

- Real owner exports preserved under `seo/data/gsc/exports/2026-10-06/{6mo,90d}` with account, property, dates and SHA-256 records. Six-month window: 2026-04-04..2026-10-03. Current decision window: exactly 2026-07-06..2026-10-03 (90 days), not the UI's calendar three-month preset.
- Canonical `MANIFEST.json` identifies genuine UI exports, partial completion, per-file windows and 1,000-row caps. Current rows: query 1,000; page 1,000; country 222; device 3; date 90. Earlier owner-snapshot evidence remains archived under `snapshots/`.
- Exploratory scoring written with explicit partial-data provenance. Cannibalization exits 2 because query×page is missing; no pruning, redirect, title, or content decision was made from this sample.
- Pull scripts now paginate available rows, retry the same failed page, publish atomically, preserve snapshots and separate history from current decision windows. Reporting excludes PENDING deployments and marks any in-window deployment as mixed exposure. Multiline CSV records are parsed correctly.
- Bing sign-in via `amroshahbari@gmail.com` succeeded. Import panel requests persistent read-only GSC access; confirmation requested before the connection. No Marqly properties, sitemap, or IndexNow key imported yet.
- Validation: 12/12 regression tests pass; fresh build exits 0; SEO checks 25/25 PASS, 1,935 analysed pages / 1,343 sitemap URLs.
- Handoff order preserved: Phase C deployment awaits completion of Phase B. No production push or outreach send completed. Headshot request remains pending.

## Dated baseline and Day-30 measurements

| Metric | API baseline, 2026-07-06..2026-10-03 | Day 30 | Source / limitation |
|---|---|---|---|
| Property clicks | 3,338 | Unmeasured | GSC UI daily chart; 90 rows |
| Property impressions | 235,062 | Unmeasured | GSC UI daily chart; 90 rows |
| US CTR | 0.68% (502 / 73,711) | Unmeasured | GSC UI country aggregate |
| Top-50 API-visible nonbrand query CTR | 0.32% (64 / 20,255) | Unmeasured | Real paginated API dataset; ranked by impressions, brand/ghost noise excluded |
| API-visible nonbrand top-3 count | 11 | Unmeasured | ≥10 impressions; brand/ghost noise excluded; Google may omit queries |
| Top-50 **exported** nonbrand query CTR | 0.32% (partial sample) | Unmeasured | Exploratory sample metric, not the full KPI |

Day 30 is not an elapsed postdeployment period. Future outcomes remain unmeasured; the weekly report at `reports/weekly-2026-10-06.md` records the current evidence.

## Current continuation evidence — 2026-10-06, Phase B complete

- Owner message confirms Full access. Real API history (2025-06-06..2026-10-03) published under `seo/data/gsc/history-16mo`; 90-day decision dataset (2026-07-06..2026-10-03) published under `seo/data/gsc`. All nine dimensions complete with available-row pagination; privacy/source omissions remain documented.
- Current API rows: query 7,487; page 2,010; query×page 9,320; country 222; device 3; date 90; country×page 7,375; country×query 19,271; legacy-named page_country_date 7,375 (actual dimensions page/country recorded). Property and US totals match the genuine UI exports.
- Complete analysis: 578 opportunity page rows, 412 query rows; 168 co-owner rows across 72 queries. Of these, 28 clusters are ghost noise and 44 are candidates for intent review. Co-ownership is not by itself proof that a redirect is warranted. Pocket’s listicle remains the intended owner; mixed-locale rows and distinct review/alternative/compare intents require care.
- Bing existing connection `amroshahbari@gmail.com` verified; Google explicitly shows existing Search Console read-only access. Refreshed that same connection without adding scopes. GSC import found no new sites; manual www check returns **Site already added**. Bing already tracks www URLs in the apex-domain site. Marketing sitemap resubmitted at about 11:04Z and shown Submitted/Processing. App sitemap left untouched.
- Generated a protocol-compatible public IndexNow key locally (not a private Bing Webmaster API credential), stored in ignored `.env`, and added its public text file. This corrects the handoff’s assumption that Settings exposes an IndexNow key; Settings’ API access is a different credential. Dry run exits 0 for 1,343 sitemap URLs. Real submission follows deployment and live key verification.
- 12/12 tests, fresh build exit 0 and 25/25 SEO gates pass. Concurrent `src/data/competitors/mymind.json` edit appeared during this phase; preserved and excluded from this phase’s staging. Phase C next; deployment dates and Day-30 outcomes remain pending.

## Integration note — concurrent writes, 2026-10-06

A concurrent process added `2ce9f22` and replaced canonical inputs with historical pulls during the Phase B commit. Fixed deployment candidate is isolated in the attached `seo-deploy-candidate` worktree on `codex/seo-deploy-candidate`; its canonical inputs are restored from the successful nine-dimension 90-day API snapshot and analysis regenerated. All concurrent commits/pulls remain preserved. Candidate truth audit, build and visual validation precede production push.

## Phase C candidate review — 2026-10-06

- Numerical review ratings removed; substantive plan/import/closure corrections completed across affected language versions. Official-source evidence recorded in `reports/04-predeployment-truth-2026-10-06.md`.
- Data tests pass 13/13. Final candidate build and all 25 gates pass; five required surfaces visually inspected at desktop/mobile widths after fixing the study button overflow. 148 URLs logged. Production push complete; live checks and indexing receipts recorded in `reports/05-live-deployment-2026-10-06.md`.

## Phase D1 candidate — 2026-10-06

149/400 prompt details meet the exact 90-day demand bar; 251 receive noindex and leave sitemap/hreflang, while all ten category hubs plus their index remain. Shared decision and deleting-CSV rollback verified. Local sitemap: 1,092. All 25 gates pass; desktop/mobile kept and pruned visuals pass. 400 URLs logged pending live deployment. See `reports/06-prompt-pruning-2026-10-06.md`.
