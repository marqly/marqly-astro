# SEO-PROGRESS — Marqly 30-day program

Mission: page-1 (pos 6–12) → top 3. Constraints in leverage order: authority → CTR → thin-content liability → E-E-A-T → money pages. Program spec: repo root master prompt (this file is the live board).

## Status

| Phase | Days | State | Gate |
|---|---|---|---|
| 0 Instrumentation + baseline | 1–2 | done except GSC-API pulls (owner grant pending); owner §2 snapshot used as VERIFIED reference. See `reports/00-baseline.md` | Gate 0 reported |
| 1 Stop the bleeding | 3–7 | **largely DONE (local, gated).** Parity gate, E-E-A-T, titles/metas, hreflang cleanup, tools, ADRs, truth-fixes. GSC-dependent bits (prompt prune, FAQ merge-by-demand, top-100 title hand-tune) queued. | **Gate 1 report → `reports/01-gate-1.md`** |
| 2 CTR blitz + striking-distance | 8–14 | partial (titles done; 6 tools expanded; 48 tier-1 localized upgraded). Per-page GSC strikes pending. | — |
| 3 Money terms + clusters | 15–23 | started: `/bookmark-manager` pillar + `/research` study + homepage AEO + 11 export posts. | — |
| 4 Authority engine | 3–28 (parallel) | **kit PREPARED** (`seo/outreach/`), owner-authorized sends. Study asset built locally; production verification pending. | — |
| 5 AEO + measurement | 26–30 | scripts ready (`weekly-report.mjs`, `indexnow.mjs`); AI-citation tracking pending owner. | — |

**NOT DEPLOYED.** All changes are local + pass 25 build gates. The 2026-10-06 handoff authorizes deployment via `git push marqly-astro feat/seo-program-phase1:main` after fresh build, gates, and visual checks. No deployment, outreach send, or GSC permission change has been completed in this continuation yet.

## KPI deltas (owner snapshot baseline → local after 2026-10-05)

| KPI | Baseline | Now (local build) | Target |
|---|---|---|---|
| Sitemap URLs | 1,914 | **1,343** (current verified local sitemap) | quality↑ |
| Indexable localized stubs (<50% parity) | **798** | **0** (tier-2/3 pruned; 168 tier-1 pages transcreated to full parity, rounds 1-7) | 0 |
| Titles >60 (indexable) | **550** | **0** (≤60, entity-correct) | 0 |
| Metas >160 | **194** | **0** | 0 |
| EN editorial w/ named author + methodology | 0% | **100%** (blog + all 163 alt/compare via SourceNote) | 100% |
| E-E-A-T pages (/about /how-we-test /authors /research) | absent | **built locally** | — |
| New EN pages (info-gain gated) | 0 | **20** (11 export + pillar + study + 4 trust + /authors index) | 20–25 |
| On-strategy tools expanded (≥400w, WebApp schema) | — | **6** (1.1–2K words) | 9 |
| Truth-bugs fixed (Pocket-HTML; pl dates) | live | **fixed + gate 13 added** | — |
| Cannibalization consolidation (X-vs-Marqly→/compare) | — | verified already done (prior) | — |
| Bing WMT + IndexNow | no | script ready (`indexnow.mjs`), key = owner | yes |

## Task board

### Phase 0 — final
- [x] repo map · data layer (6 scripts incl `gsc_ingest_ui.mjs` UI-export fallback) · fresh 1,914-URL crawl → `seo/data/crawl/` · redirect verification (all PASS) · ghost-query triage (no on-page source; needs query×page)
- [ ] **BLOCKER (owner):** add SA `marqly-seo@concise-orb-346113.iam.gserviceaccount.com` as **Full** user on `sc-domain:marqly.com`, **or** export 4 GSC CSVs → `npm run seo:ingest`. Then: top-200 list, cannibalization map, top-3 baseline.

### Phase 1 — remaining (GSC/data-dependent)
- [ ] 1.2 prompt-gallery prune — ADR-002 ready; needs per-URL clicks. **Fallback if no GSC:** prune 0-inbound-internal + <400w prompts (owner pick).
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
- [x] `weekly-report.mjs` (edited-vs-control cohort + KPI deltas) · `indexnow.mjs` (Bing/ChatGPT index ping, key via env)
- [ ] AI-citation tracking (owner runs the fixed prompt set; log to `seo/data/ai-citations.csv`)
- [ ] GSC API access for position tracking (BLOCKER above)

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
- `npm run seo:pull` still exits 3 / HTTP 403; the service account has not yet been granted property access. Exact Full-access form prepared, awaiting the browser policy's action-time confirmation. CSV fallback remains available.
- Fresh `npm run build` exited 0 (1,936 raw HTML files); prebuild gate run passed all 25 assertions on 1,935 analysed pages and 1,343 sitemap URLs. Postbuild gates passed 25/25 on 1,935 analysed pages / 1,343 sitemap URLs.
- Script audit found 16-month/90-day window mismatch, silent rate-limit skip, absent live manifest, and predeployment cohort misclassification; corrections underway before accepting real GSC measurements.
- Author headshot path requested; no image set. Day-30 outcomes remain unmeasured: no elapsed postdeployment observation window exists.
