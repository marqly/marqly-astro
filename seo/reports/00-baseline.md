# Gate 0 — baseline (draft; finalizing requires the GSC grant in 00-setup-steps.md)

All crawl numbers: **VERIFIED** 2026-10-05, live `https://www.marqly.com/sitemap-0.xml` (1,914 URLs, 100% HTTP 200), enriched in `seo/data/crawl/` (`audit.jsonl` per-URL, `pages.csv`, `meta.json` rollups). GSC numbers re-pull is the only open dependency; the 2026-10-05 reference snapshot in the master prompt is otherwise **fully corroborated** by this fresh crawl.

## 1. Method notes (so numbers reconcile)

- "Units" = whitespace words for Latin; `text_chars × 0.6` for ja/zh/ko (same rule as the existing `active/scripts/seo-analyze.py:44-51`) — whitespace word counts are meaningless for CJK. Both bases reported where they differ.
- Parity = locale units ÷ its **hreflang-declared EN source** units (1,135 of 1,145 locale pages have an EN pair; 10 do not — list below).
- Stub bar (two variants, sensitivity in §3): strict `parity < 0.5`; section-aware `parity < 0.5 OR (parity < 0.75 AND h2_count < 0.6 × EN h2_count)` — the latter is what catches `/ja/for-teachers` (0.72 parity but half the sections of EN).

## 2. KPI baseline table

| KPI | Fresh crawl (VERIFIED) | Master-prompt 2026-10-05 ref | Delta |
|---|---|---|---|
| Sitemap URLs / status | 1,914 / all 200 | 1,914 / all 200 | — same |
| Titles >60 chars | **550** | 550 | exact match |
| Metas >160 / <70 | **194 / 109** | 194 / 109 | exact match |
| Canonical missing/mismatch | **0 / 0** | 0 | same |
| ≠1 H1 / no `<main>` / img w/o alt | **0 / 0 / 0** | 0 | same |
| Indexable thin <300 words | **530** (raw) · **284** (units) | 561 | −31 raw; basis differs |
| Localized stubs | **798** strict · **852** section-aware | 1,145 locale pages exist | target 0 |
| Locale pages w/o EN hreflang pair | **10** | — | new finding |
| Pages noindexed today | **0** | — | noindex plumbing missing (REPO-MAP §8) |
| Named-author (Person) editorial | **0 / 536** | 0 | target 100% |
| Zero-inbound orphans | **0** | — | internal linking structurally healthy |
| Apex→www | 301 + **preserves query** | — | VERIFIED (`check-redirects.mjs`) |
| Trailing slash | **301** (not 307) incl. uppercase aliases, chains ≤2 | — | VERIFIED |
| `/about` | 301 → `/` (page doesn't exist) | "no About page" | must build + repoint (Phase 1.6) |

By-template volume (units avg / thin / stub@strict): `blog` 1,733/0/0 · `blog-locale` 673/61/355 · `locale-lander` 534/213/432 · `prompt` 592/0/0 (400 URLs) · `compare` 1,581/0/0 · `alternatives` 1,911/0/0 · `faq` 442/2/0 · `tool` 491/6/0 · `root-lander` 1,147/1/0 · `migrate` 1,391/0/0 · `home` 3,353/0/0.

**Stub concentration by locale** (strict): tr 97 · pl 96 · nl 94 · de 72 · zh 72 · it 68 · fr 65 · pt 65 · **ja 60 · es 59 · ko 50**. Tier-3 (zh/pl/tr/nl) carries ~67% of the liability — supports the Phase-1 tier policy in principle (final call after GSC confirms their click share).

## 3. Thin/stub inventory (pruning worklists)

- `seo/data/crawl/pages.csv` columns `thin`, `stub`, `unpaired_locale`, `parity` filter directly.
- Prune-first candidates: 852 (section-aware) locale pages; 400 prompt pages await the clicks/impressions keep-rule (needs GSC); 63 FAQ + 20 tools have targeted upgrades instead (Phase 2.4).
- Unpaired-locale list (ships with **zero hreflang**, 10 items — add rows to `TRANSLATIONS` or noindex): `/de/blog/warum-du-artikel-speicherst-die-du-nie-liest`, `/de/datenschutz-fragen`, `/es/blog/por-que-guardas-articulos-que-nunca-lees`, `/es/usos/guardar-links-redes`, `/fr/blog/pourquoi-vous-enregistrez-des-articles`, `/fr/veille-informationnelle`, `/it/blog/perche-salvi-articoli-che-non-leggi`, `/it/importa-preferiti`, `/pt/blog/por-que-voce-salva-artigos-que-nunca-le`, `/pt/para-concurseiros`.

## 4. Ghost-query investigation — RESOLVED 2026-10-06 (live 90-day API pull)

No `youtube\d{2,}`-style tokens exist in `src/`, `public/`, or built `dist/` page text (`/tools/reading-time`, `/es/blog/chatear-con-videos-de-youtube-2026` checked) — so the 143 `^youtube\d+$` queries are **not** on-page text. Hypotheses: (a) Google **image/video search** query attribution (ytimg-style filenames), (b) Discover/AI-surface normalization. Resolution = `query_page.csv` filter `^youtube\d+$` (one line once the pull lands). Off-topic ("physics tuition singapore") follows the same path. Both excluded from KPI math regardless.

## 5. Cannibalization (mechanism ready, data pending)

`seo/scripts/cannibalization.mjs` built: per non-brand query, every page with ≥10% impression share = co-owner → `seo/data/gsc/cannibalization.csv`. Pocket (6 candidate pages) and Raindrop (4) clusters are the known suspects; owner picks need the GSC impression split.

## 6. Opportunity top-200 (mechanism ready, data pending)

`seo/scripts/opportunity-score.mjs` built: `score = impressions × (ctr(pos−3) − ctr(pos))` on a published prior curve (**ASSUMED**) that self-calibrates from our own bucketed CTR (≥5k impressions/bucket) and writes `position-curve.json` for auditability. Output: `opportunities_{queries,pages}.csv` + `top3_nonbrand.txt` (the "+50% top-3 queries" KPI baseline).

## 7. Proposed scope adjustments (your call at gate)

1. **Add `country×page` + `country×query` pulls** (built into `gsc-pull.mjs` already) — the US gap (⅓ of impressions at 0.7% CTR) is constraint #2; we can't fix what we can't segment.
2. **Re-baseline "thin <300 words" on CJK-adjusted units** — raw word counts mis-rank ja/zh/ko pages as thin when they're structurally fine, and mask genuinely thin Latin pages. Targets stated in §2 both bases; recommend the unit basis for the <50 KPI.
3. **Prune policy gets two bars** — report both numbers; recommend the section-aware bar for Phase 1 decisions (word parity alone under-catches chrome-only pages).
4. **Indexing-velocity via Bing/IndexNow** stays Phase 1.8 (needs your Bing import; not a Phase-0 blocker).
5. **No keyword tool yet**: volumes UNKNOWN, GSC impressions = proxy (per master prompt). If you have Ahrefs/Semrush/DataForSEO access, say which and I add gap pulls; otherwise we proceed as-is.

## 8. Gate-0 exit checklist

- [x] repo map · [x] **6 scripts** built + pipeline **proven on synthetic fixtures** (ingest→cannibalize→score; 3 defects found & fixed: default output dir, curve poisoning by brand/ghost queries, header-order assumption) · [x] fresh 1,914-URL crawl + enriched inventory · [x] redirect verification · [x] thin/stub inventory · [x] baseline table reconciled to master prompt · [x] **owner answered all 4 blocking questions** (recorded in `seo/SEO-PROGRESS.md` §Open questions: GSC-proxy volumes · author=Amro, bio/photo still owed before Phase 1.6 · free-tier screenshots · public-data-only link-rot study)
- [x] **UI-export fallback shipped** (`npm run seo:ingest`) — if the SA grant lags, you download 4 CSVs (query / page / query×page / country, 16-mo window) and I ingest them into the same schema; program proceeds at full speed.
- [ ] **BLOCKER (only one):** GSC property grant OR the 4 CSV exports → then top-200 list, cannibalization map, top-3 non-brand baseline, ghost-query landing pages. `node seo/scripts/gsc-pull.mjs` returns the 403 verbatim until `marqly-seo@concise-orb-346113.iam.gserviceaccount.com` is added as a user on `sc-domain:marqly.com` (steps: `00-setup-steps.md` §A).

### After Gate 0 approval, Phase 1 starts with (GSC-independent, repo-side)
1. **1.1 plumbing prerequisite:** add a real `noindex` path to `LandingLayout.astro:80` + wire it to the sitemap filter (`astro.config.mjs:145`) + hreflang-cluster exclusion — without this the whole Tier policy is unenforceable (today 0 pages can be noindexed; verified `seo-check.mjs` gate 5 asserts sitemap ⊥ noindex).
2. **Parity gate in build** (the 852 stub list is ready in `seo/data/crawl/pages.csv`).
3. **1.6 E-E-A-T**: `/about` (also repoint `_redirects` `/about→/`), author pages once you hand over bio facts + photo path, `BlogPostLayout.astro:52` Organization→Person.
4. **1.7 title/meta templates** for the 550/194/109 — mechanical, can start immediately on approval.

## 9. Extra crawl-only verified facts

- **Duplicate titles / descriptions: 0** (1,914 indexable) · missing title/desc: 0 ✓ corroborates §2.1 of the master snapshot.
- **hreflang emission census:** 1,236 pages carry **21 `<link>` tags each** (the redundant region codes from `routes.ts:19-32` confirmed at production scale — ~26k tags site-wide to clean in Phase 1.1), 675 English-only pages correctly emit 0, and 3 pages form a legit 4-tag partial cluster (`/migrate/raindrop` en/de/fr).
- **JSON-LD census:** `Organization`+`ContactPoint` on 1,898 pages, `FAQPage` (+Question/Answer) on **1,884** — FAQ schema is sitewide boilerplate-ish; Phase 1.3/§5 rule "no FAQ schema for content not on page" needs a per-page audit, not a bulk ban.
- **1,366 pages carry no JSON-LD date at all** (everything non-blog) — the visible "Last updated" work (Phase 1.6) must add per-template dates, not just re-render `updatedDate`.
- og:image missing: 0 · sitemap `lastmod` per-URL: present by construction (`astro.config.mjs:47-100`), values UNKNOWN in crawl (rec doesn't parse XML) — pull `sitemap-0.xml` lastmods when finalizing §2 KPIs if needed.
- `/blog/best-pocket-alternatives-2026` re-verified live: **1 image, 0 external links** in `audit.jsonl` — matches the master snapshot's thin-proof claim; it's the #1 Phase 2 refresh candidate independent of GSC rank data.
