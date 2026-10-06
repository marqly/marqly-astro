# Localization transcreation brief (Phase 3.4 — Tier-1 parity)

These localized pages are **machine-dump stubs** (30–55% of the English word/section
volume). Fixing them is the #3 constraint (scaled thin content) but the owner has Tier-1
(ja/ko/de/es) marked "keep indexable, upgrade to parity" — so UPGRADE, never prune.

For each assigned page:
1. Open the localized file AND its English source (path given). The EN file is the vetted
   source of truth for facts — do not contradict it.
2. **Transcreate** (native, idiomatic) the FULL English substance into the localized page:
   every section, the comparison/decision tables, the FAQ answers. This is not literal
   translation — write it the way a native SEO editor would, using the local keyword the
   local audience actually searches (natural phrasing, not a calque).
3. Reach **≥90% of the English body length and every `##` section** the EN has (the build
   parity gate needs ≥80% units and ≥80% H2 count).
4. Localize `title`, `seoTitle` (≤60 chars), `description` (140–155), keep `targetKeyword`
   native. Preserve the existing localized slug and `lang`. Do NOT change `pubDate`; set
   `updatedDate: 2026-10-05` (a substantive edit legitimately re-stamps the date).
5. TRUTH (respect `seo/drafts/_FACTS.md`): no "free trial"; Marqly imports list.csv/browser
   HTML/Raindrop HTML — NOT Pocket's `.html`; import does not preserve original dates;
   auto-tag on import is Pro. Keep competitor facts exactly as the EN source states them
   (already date-verified). Do not invent stats, prices, or "tested" claims.
6. Keep internal links pointing to the localized equivalents where they exist, else to the
   English page. Keep any `heroImage`/`ogImage` values from the EN source only if the EN
   actually has them; never invent image paths.

Edit ONLY your assigned localized files. Do NOT touch English files, other locales, or any
layout. Do NOT run the build. Report per file: old→new unit ratio vs EN, and confirm every EN
`##` section is now present.
