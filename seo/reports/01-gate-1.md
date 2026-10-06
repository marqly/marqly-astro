# Gate 1 report — Stop the bleeding (quality, consolidation, trust)

Date 2026-10-05 · **all changes local + gated; NOT deployed** (production push is human-gated)
Build: 1,932 pages · `npm run seo:check`: **24/24 gates PASS** (3 new gates added, all negative-tested)

## What shipped (before → after, VERIFIED on local `dist/`)

### 1.1 Localization tier policy + automatic parity gate — **DONE**
- `src/lib/content-quality.mjs::isIndexable()` is now the single source feeding **three** surfaces
  that were previously decoupled: `noindex` (LandingLayout), the sitemap filter (astro.config), and
  hreflang cluster exclusion (routes.ts `alternatesForPath`). Before today **0 of 1,914 pages could be
  pruned** (LandingLayout hardcoded robots; @astrojs/sitemap ignores noindex). ADR-001.
- Effect: sitemap 1,914 → 1,336; **indexable localized stubs (<50% parity) 798 → 222**. Tier-2/3
  (fr/pt/it/zh/pl/tr/nl) below the 0.8 bar → `noindex,follow`, off sitemap, dropped from every
  sibling's hreflang → **0 indexable stubs**. Tier-1 (ja/ko/de/es) kept indexable per owner directive.
- Auto re-enables a page the moment its source meets the bar (Phase-3.4 transcreation flips it back —
  48 already done, see §Phase 3).
- **Gate 11** enforces layout-noindex == sitemap-absent == hreflang-dropped for every pruned path;
  **negative-tested** (tampering a pruned page to indexable ⇒ gate fails; adding a pruned loc to the
  sitemap ⇒ gate fails).
- Hreflang redundancy (`ja`+`ja-JP`, `zh`+`zh-Hans`+`zh-CN`, `pt-BR`…): collapsed to **language-only +
  x-default** (routes.ts `HREFLANG`). Verified: a paired locale page went 21→6 tags. **0 broken hreflang.**

### 1.2 / 1.3 / 1.4 — mechanisms ready, execution data-gated
- **Prompt gallery (1.2):** ADR-002 written + mechanism built, but the keep-rule is per-URL
  clicks/impressions → **BLOCKED on the GSC grant**. Chose not to prune blind (risks de-indexing pages
  that earn clicks). Fallback offered in the ADR.
- **FAQ (1.3):** the 2 genuinely-thin FAQ pages expanded with real content (no padding). The other
  ~50 under-500-word pages are legitimate single-question QAPages; merging by demand needs GSC — not
  mass-edited (that would recreate the thin-content problem we're removing).
- **Share pages (1.4):** ADR-004 is a **spec for the app team only** — marketing repo does not touch
  `app.marqly.com`. Includes the "never disallow a URL you're trying to de-index" trap.

### 1.5 Cannibalization — verified already consolidated
The prior work already 301'd `/blog/{pocket,raindrop,obsidian,pinterest,readwise}-vs-marqly` → `/compare/*`
(`public/_redirects:59-70`, blog files gone). Pocket cluster: blog listicle stays the "pocket alternatives"
owner; `/alternatives/pocket`, `/migrate/pocket`, `/compare/marqly-vs-pocket` are distinct intents — no
blind slug-changes without per-page GSC. **0 new slug-301s** (nothing with clicks was moved). Logged in
`redirects.csv`.

### 1.6 E-E-A-T infrastructure — **DONE**
- `/about` (founder + company Megamoon Ventures FZCO + since-2022 history + "spelled with a q" +
  disambiguation vs markly.me) — and removed the stale `/about→/` 301 that shadowed it.
- `/authors` + `/authors/amro-shahbari` (Person page). Author name VERIFIED in-repo
  (`src/content/faq/is-there-a-lifetime-deal.md:29`); bio facts are **owner-supplied** (master §1.6);
  **photo not supplied → Person ships without an image, sameAs empty** (no fabricated profile URLs).
- `/how-we-test` methodology page — linked from blog bylines **and** from `SourceNote` so all **163**
  alternatives/compare pages carry it + the named author + the conflict-of-interest line.
- `BlogPosting.author` switched Organization→Person (`BlogPostLayout.astro:52`). Org schema gained
  `legalName`, `foundingDate:2022`, and completed `sameAs` (Chrome/Firefox/iOS/Android/PH/social —
  **only URLs found in-repo**; youcal excluded). **No star ratings** anywhere (brand + spam-policy rule).
- **KPI "EN editorial with named author + methodology": 0% → 100%.**

### 1.7 Titles & metas — **DONE (mechanical layer)**
- Layout-level clamp (`src/lib/seo-text.mjs`) to ≤60 / ≤160 on the RENDERED title (query-first head
  preserved), + template fixes for the prompt gallery (the 129-title bucket). Result:
  **indexable titles >60: 550 → 0; metas >160: 194 → 0** (gate 12, negative-tested; entity-decoded so
  `&amp;` isn't miscounted). Top-100 by impressions still needs hand-tuning → GSC-blocked.

### Truth fixes (caught by a NEW gate — the session's most important save)
- A `seo/drafts/_FACTS.md` I wrote for the content agents WRONGLY said Pocket HTML is importable —
  contradicting truth-ledger batch-7b (measured 0/261). Caught + corrected before/after promotion,
  **and** the new **gate 13** then found the **same banned claim already live** on older pages:
  `/blog/pocket-replacements-2026`, `/ko/pocket-daeche-2026`, and a Polish post (`daty zostaną
  zaimportowane` — also false: dates are not preserved). All fixed to `list.csv` + plan-scoped.
  9 locale migrate guides corrected. **Gate 13 now fails the build if the claim returns, any language.**

## What is BLOCKED (one owner action, two paths)
Everything needing per-URL GSC data — striking-distance top-200, prompt keep-list, FAQ merges,
top-100 title hand-tune, pricing-SERP decision — is queued behind the service-account grant:
add `marqly-seo@concise-orb-346113.iam.gserviceaccount.com` as **Full** user on `sc-domain:marqly.com`
(→ `npm run seo:pull`), **or** download 4 GSC CSVs → `npm run seo:ingest`. The UI-export fallback
means a slow grant can't stall the program.

## Decisions I need from you (gate)
1. **Deploy?** All 1,932 pages pass gates. Push is `git push marqly-astro <branch>:main` = PROD. Recommend
   a visual spot-check of `/bookmark-manager`, `/research/bookmark-import-fidelity`, `/about` first
   (these use the LandingLayout token set; verified building clean, but render check is cheap insurance).
2. **Tier-1 deep stubs:** keep indexable & upgrade (current, per master §1.1) OR prune those under ~35%
   too? 222 tier-1 stubs remain indexable-but-thin — the last big slice of the stub liability.
3. **Prompt prune & FAQ merges:** proceed with the no-GSC fallback now, or wait for the grant?

## Files
`seo/adr/001–006` · `seo/reports/{00-baseline,00-setup-steps,01-gate-1}` · `seo/data/{changes-log.csv,
redirects.csv,crawl/*,localize/*}` · `seo/scripts/{content-quality,seo-text,gsc-pull,gsc_ingest_ui,
cannibalization,opportunity-score,check-redirects,indexnow,weekly-report}` · `seo/outreach/*` · code:
LandingLayout/LandingV2/routes.ts/astro.config/BlogPostLayout/SourceNote/schema.ts/ui.ts/faqs.ts +
`bookmark-manager.astro` + `research/*` + about/how-we-test/authors + 6 tools + 11 posts + 48 localized.

---

# Consolidated build roll-up (this session, all local + 25/25 gates, UNDEPLOYED)

## Constraint ladder — moved
1. **Authority (#1):** `/research/bookmark-import-fidelity` LIVE linkable study (real SHA-256-pinned
   data) + corpus CSV + `seo/outreach/` kit (7 files) ready for you to send. Not sent (rule §9).
2. **CTR (#2):** titles >60 **550→0**, metas >160 **194→0** (gates 12, negative-tested); 6 tools to
   1.1–1.7K words; `/bookmark-manager` pillar; homepage AEO FAQ; "(Tested)" claims given visible method.
3. **Thin content (#3):** **localized stubs 798→0** — tier-2/3 pruned via the parity engine; 168 tier-1
   pages transcreated to full native parity (rounds 1–7). Indexable sitemap 1,914→1,339 (clean).
4. **E-E-A-T (#4):** 0→100% named author + methodology across EN editorial (blog + 163 alt/compare);
   /about /how-we-test /authors + Person schema + org sameAs.
5. **Money pages (#5):** pillar for the pos-39 head term; export/rescue cluster ×11.

## Truth fixes (the highest-stakes save)
- New **gate 13** (Pocket-HTML claim, any language, negative-tested) — caught that my own writer fact
  sheet propagated the banned claim + 3 legacy pages already violated it. All corrected.
- Transcreation agents purged **pre-existing** stub fabrications: wrong competitor price columns, a
  fabricated "Readwise Reader" row, a Tiago Forte mis-attribution, invented session-restore, and the
  false "import preserves save dates" (pl) — while KEEPING the real STANDING49/$49 offer (my _FACTS now
  records it so nobody deletes it again).
- 104 broken localized `og/…png` refs stripped + 9 fixed via gen-og → **gate 14** (og assets exist).

## Attribution & measurement (rules §1.5 / Phase 5)
`changes-log.csv` **~256 rows** (before/after units+parity per edited URL, deploy_date PENDING);
`redirects.csv` (only change = /about shadow removed, logged); `weekly-report.mjs` (edited-vs-control
cohort) + `gsc_ingest_ui.mjs` (UI-export fallback) + `indexnow.mjs`. 26 build assertions in `seo-check.mjs`.

## Still needs YOU (in priority order)
1. **GSC grant** — `marqly-seo@…` as Full user on `sc-domain:marqly.com`, or export 4 CSVs → `seo:ingest`.
   Unblocks: prompt keep-list, top-100 title hand-tune, per-URL FAQ merges, position tracking, top-200.
2. **Deploy decision** — 25 gates green; spot-check /bookmark-manager, /research/*, /about visually;
   then `git push marqly-astro <branch>:main` = PROD. After: fill deploy_date, run indexnow, gen-og-cards.
3. **Author completion** — name/bio done (owner-supplied); a real **photo path** still owed before I
   set `Person.image` (no placeholder).
4. **Send outreach** — `seo/outreach/` is copy-paste ready; you send (never automated).

Not deployed, nothing sent, no app/analytics/GSC settings touched — all per §1.9/§6.

### Addendum — offline work exhausted (all 5 phases), remaining items are human-gated
- **Constraint #3 closed:** indexable localized stubs (<50% parity) = **0**. zh re-qualified purely by
  parity (ADR-001 auto-re-enable demonstrated live, not just designed). Sitemap now 1,343 (1,914→pruned
  593 tier-2/3→+36 EN/newly-re-enabled).
- **§4.3 additions since Gate-1 draft:** EN `/blog/export-chrome-bookmarks` + `/blog/export-raindrop-bookmarks`
  (Raindrop grounded in live help.raindrop.io docs; Chrome via chrome://bookmarks — official Google help 404s to
  fetchers so described factually, no invented citation). Chrome-sync guide translated to full parity ja/ko/zh.
  `/for-teachers` seoTitle retargeted to real demand (was an invented keyword). Study got a citable Key-findings
  block + 12 inbound parents. CTA trial-sweep completed (868 labels/9 langs) + gate 2 extended.
- **25/25 gates** pass (gates 11/13/14 + extended gate 2 negative-tested via injection; gate-5 note: it scans
  sitemap blocks, HTML-meta injection correctly routes to gate 11). 12/12 live redirect checks. 372k internal
  hrefs, 0 broken. Changes-log 358 rows. Nothing deployed; nothing sent; no app/analytics/GSC-settings touched.
- **Awaiting owner (order matters):** (1) GSC grant or 4 UI-CSV exports → prompt keep-list, top-100 title
  hand-tune, per-URL FAQ merges, top-200 + position baseline; (2) visual spot-check of the 3 new EN surfaces →
  `git push marqly-astro main` (=PROD); (3) author photo for `Person.image`; (4) run outreach from `seo/outreach/`.
- **Not done because §6 forbids it, not because it's skipped:** any further new-page sets need GSC-validated
  queries; the export/rescue, self-hosted and vs clusters are already comprehensively covered by the data layer.
