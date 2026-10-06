# CODEX HANDOFF — Marqly SEO program, remaining work (2026-10-06)

You are continuing a 30-day SEO program on the Marqly marketing site (Astro static, Cloudflare Worker).
Phases 0–1 are built, committed, and gated. Your job: finish everything that stayed blocked behind
human-only access. You have this machine's credentials/sessions available and the owner has authorized
using their local accounts and personal Chrome. Work through the phases IN ORDER; commit after each.

## Repo ground truth (verify, then trust)
- Workdir: this repo (`marqly/marketing_site`, origin) — branch `feat/seo-program-phase1`, 8 commits,
  tree clean. The DEPLOY remote is `marqly-astro` (`marqly/marqly-astro`), branch `main` = PRODUCTION
  auto-build. Pushing `main` there goes live on www.marqly.com. Never force-push.
- Gates: `npm run seo:check` → 25 gates, all green on the committed tree. Build: `npm run build`
  (use the default `node` on PATH — Homebrew arm64; if you see `@rolldown/binding-wasm32-wasi`
  run `npm install @rolldown/binding-darwin-arm64@1.2.4 --no-save`). `timeout` does not exist on
  this macOS. Judge builds by exit code + dist page count (currently 1,933), NEVER by grepping logs.
- Read first: `CLAUDE.md` (Lab Notes = traps already paid for), `seo/SEO-PROGRESS.md` (board+KPIs),
  `seo/reports/01-gate-1.md` (state), `seo/adr/001…006`, `seo/outreach/00-README.md`,
  `seo/data/gsc/MANIFEST.json` (current GSC data is an owner-snapshot SUBSET, not a real pull).
- Data scripts ready: `npm run seo:pull` (16-mo, 9 pulls), `seo:ingest` (UI-CSV fallback),
  `seo:cannibal`, `seo:score`, `seo:redirects` (live checks), `seo/scripts/weekly-report.mjs`,
  `seo/scripts/indexnow.mjs`, `active/scripts/check-links.mjs`, `gen-og-cards.mjs`.
- Auth on this machine: `gh` currently active account `marqly` (dual-account keyring exists —
  403 on push ⇒ `gh auth switch -u marqly`, push, then restore previous active account).
  `gcloud` = `amroshahbari@gmail.com` / project `concise-orb-346113`; Search Console API enabled;
  service account `marqly-seo@concise-orb-346113.iam.gserviceaccount.com` exists, key at
  `~/.config/marqly-seo/marqly-seo-key.json` (never move it into the repo). Playwright + chromium
  installed. `.mcp.json` has Cloudflare MCP. Chrome profile: ~/Library/Application Support/Google/Chrome.
- KNOWN DISCLOSURE: commits were made by a prior agent session; two files in commit 9e86758 predate it
  (teams.astro schema + legacy redirects) and are correct — leave them.

## HARD RULES (non-negotiable, enforced by gates)
1. NO fabrication: no invented stats, reviews, ratings, "we tested" without visible evidence, dates.
   NEVER cite star ratings (product-facts sheet is authoritative). Competitor prices/features: only
   from `src/data/competitors/*.json` (dated `lastVerified`) or a fetched official page cited
   "as of <date>, per <URL>".
2. NO "free trial" — Marqly sells none. CTAs say "get started free" in each language. Gate 2 blocks it.
   Truth: import = browser HTML / Pocket `list.csv` / Raindrop HTML (NOT Pocket .html, NOT Raindrop
   JSON); import does NOT preserve save dates; auto-tag-on-import + semantic search + summaries = Pro;
   free plan = up to 100 saves, whole library keyword-searchable; $72/yr ($9/mo, standing $49
   first-year offer — real, don't delete it).
3. Slug changes need 301 + a row in `seo/data/redirects.csv`; the trailing-slash catch-all in
   `public/_redirects` MUST stay the last rule; never set `run_worker_first`.
4. `npm run seo:check` (25 gates) green before ANY commit that touches src/, and before any push.
5. Secrets: never paste tokens/keys into chat, commits, or logs; env vars + file paths only.
   (Exception by design: the IndexNow key file must be publicly served — see Phase B3.)
6. You may submit outreach/directory forms and run deploys on the owner's behalf, but LOG everything
   (URL, account used, timestamp) to `seo/outreach/sent-log.md` / SESSION_LOG, and STOP + ask if a
   step is irreversible and unclear.
7. Do not touch `app.marqly.com` repos, analytics configs, or Cloudflare zone settings beyond what's
   written here. ADR-004 stays a handoff spec.
8. End every session by updating `seo/SESSION_LOG.md` + `seo/SEO-PROGRESS.md` and committing.

## PHASE A — Access discovery (15 min)
A1. Open GSC with the owner's real Chrome (all Google sessions live there). Playwright persistent
    context on a COPY of the profile (Chrome must be closed for the live one, or use a new profile
    and let the owner sign in once): `chromium.launchPersistentContext(userDataDirCopy, {channel:'chrome'})`.
    Navigate `https://search.google.com/search-console?resource_id=sc-domain:marqly.com`.
    Which account sees the property = the owner account (likely `trymarqly@gmail.com` family, NOT the
    gcloud one).
A2. If a non-owner account shows "no access": switch accounts in the browser until the property opens.
    Do not add users from an account lacking ownership.

## PHASE B — Unblock the data (the critical path)
B1. GSC grant: property Settings → Users and permissions → Add → `marqly-seo@concise-orb-346113.iam.gserviceaccount.com`
    → **Full**. Verify: `npm run seo:pull` must return rows, not 403. If UI refuses/unknown email,
    FALLBACK: in the same Chrome, Performance report → date range "Last 6 months" (then 3mo for
    cohort baseline) → EXPORT CSV (query; page; query+page; country) →
    `node seo/scripts/gsc_ingest_ui.mjs <file> --out=seo/data/gsc --start=... --end=...` (repeat per file).
    Then still try B1 grant — the API pull is preferred for 16 months + query×page depth.
B2. Full pull + analysis: `npm run seo:pull` then `npm run seo:cannibal && npm run seo:score`.
    Outputs: `seo/data/gsc/opportunities_{queries,pages}.csv`, `cannibalization.csv`,
    `top3_nonbrand.txt`, `position-curve.json`. Record KPI baselines into SEO-PROGRESS (top-50 CTR,
    US CTR, non-brand top-3 count). Update MANIFEST.json status to "live pull <date>".
B3. Bing: bing.com/webmasters → "Sign in with Google" using the A1 owner account → **Import from GSC**
    → confirm both marqly properties. Grab the IndexNow key shown under Settings:
    - put it ONLY in `.env` as `INDEXNOW_KEY=...` (.env is gitignored) and
    - create `public/<KEY>.txt` containing just the key (this file is meant to be public — it is the
      IndexNow domain-auth mechanism, not a secret) and commit it.
    Submit `https://www.marqly.com/sitemap-index.xml` in Bing. Then
    `INDEXNOW_KEY=... node seo/scripts/indexnow.mjs --dry` now (test) and for real after Phase C2.

## PHASE C — Deploy the existing program (owner's standing order)
C1. Safety: `git fetch marqly-astro && git log --oneline HEAD..marqly-astro/main` — if the remote has
    commits, merge, `rm -rf dist node_modules/.astro node_modules/.vite && npm run build`,
    re-run `npm run seo:check`, fix fallout, only then proceed (never clobber remote-only work).
C2. Visual spot-check of new/changed surfaces before push: serve `dist/client` (python3 http.server
    lacks extensionless rewrites — open `/bookmark-manager.html`, `/research/bookmark-import-fidelity.html`,
    `/about.html`, `/de/blog/…` directly, and one pruned page e.g. `/fr/curation-de-contenu.html`
    to confirm noindex renders). Screenshot any layout regression → fix → re-gate.
C3. Deploy: `git push marqly-astro feat/seo-program-phase1:main` (gh active must be `marqly`;
    restore prior active account afterwards). Watch the repo's build; verify live:
    `curl -sI https://www.marqly.com/bookmark-manager` (200 + no redirect), sitemap count via
    `curl -s https://www.marqly.com/sitemap-0.xml | grep -c "<loc>"` (~1,343), a PRUNED page returns
    200 with `noindex` (curl + grep robots), `npm run seo:redirects`.
C4. Post-deploy paperwork: fill `deploy_date` column in `seo/data/changes-log.csv` (replace
    PENDING-not-deployed) + commit; run the real IndexNow ping; in GSC do a manual sitemaps resubmit;
    snapshot `node seo/scripts/weekly-report.mjs`.

## PHASE D — The lanes the snapshot couldn't reach (needs B2)
D1. Prompt-gallery pruning (ADR-002): from query/page pulls, build
    `seo/data/gsc/prompt-keep.csv` = every `/prompt-gallery/*` with ≥1 click OR ≥20 imp over 90d
    PLUS all 10 category hubs. Implement the keep-list hook in `src/lib/content-quality.mjs`
    (prompt pages not in keep-list ⇒ indexable=false, same machinery as locales, gate 11 covers it).
    Strengthen kept prompts ONLY where truthful (link to AI-chats/extension pages). Build, gate, commit.
D2. Cannibalization final pass using `cannibalization.csv`: for each contested cluster verify the
    owner page per ADR (Pocket=blog listicle; Raindrop split review/alternatives/compare). Re-point
    anchors; 301 ONLY true duplicates whose losing URL has ~0 clicks; log each in redirects.csv.
D3. Striking-distance refresh, top-40 by `opportunities_pages.csv`: per master Phase 2.2 —
    answer-first 40-60-word intros, decision tables where missing, 3–8 official citations
    (webfetch, "as of <date>"), PAA FAQs where real questions exist, 5+ contextual internal links,
    bump updatedDate ONLY with substantive edits (already surfaced on-page now). Log before/after in
    changes-log.csv. Target the ones the snapshot already flagged (e.g. /tools/reading-time,
    /blog/how-to-highlight-text-on-any-website, /blog/summarize-youtube-videos-with-ai,
    /alternatives/* pos 8–12).
D4. Top-100 title hand-tune by impressions (the clamp fixed length, not persuasion): 3 candidates per
    page, pick one, edit `seoTitle`, gate 12 stays green.
D5. FAQ merges: only where D2 data shows a FAQ page cannibalizing or with ~0 impressions — 301 into
    parent + on-page FAQ block; otherwise leave (concise QAPages are valid; do NOT pad).

## PHASE E — Screenshots (info-gain completion), free tiers only
E1. With the owner's Chrome (logged-out where possible; sign into free tiers only where unavoidable
    and NEVER store credentials — leave the browser doing the login, you drive after): capture
    product UI for the top striking-distance reviews/comparisons (Raindrop free, Linkwarden cloud,
    Karakeep demo, Instapaper free, mymind trial-as-competitor-if-offered, Evernote/Notion clippers).
E2. Save to `active/assets/shots/<tool>/*.png` → optimize → embed into the relevant pages with dated
    captions ("Screenshot: Raindrop free plan, Oct 2026"), one screenshot minimum per product
    discussed on refreshed pages. Add heroImage ONLY where you can verify the asset pipeline accepts
    it (blog hero via `assets/blog/`); gate 14 for og must stay green.

## PHASE F — Authority execution (you may send; owner identity; disclose)
F1. Directories (from `directory-copy-pack.md`): G2, Capterra, AlternativeTo ×3 (vs Pocket, vs
    Raindrop, vs mymind), SaaSHub, Slant, There's An AI For That, Futurepedia, BetaList, Product Hunt
    (refresh existing listing + link the study). Each: submit with owner account, note approval/queue
    status in `seo/outreach/sent-log.md`. No fake review counts, no ratings claimed.
F2. Listicle campaign: refresh `listicle-targets.csv` — for queries {best bookmark manager, best AI
    bookmark manager, pocket alternatives, raindrop alternatives, read-it-later apps, second brain
    apps, web highlighter} × {en, ja, de, es}, scrape top-30 SERPs via Playwright (Tier 2), verify
    each article's content + last-updated + contact route + whether Marqly is already listed. Then
    personalized pitches (pitch-templates.md B/A) from `amro@megamoon.com`, ≤150 words, offer the
    study + screenshots + Pro access. Cap ~15/day to stay spam-free. Log everything.
F3. Study PR: send the one-pager to journalists/writers who covered Pocket's shutdown or link rot
    (find them via the SERP scrape); post HN + Reddit angles from owner accounts WITH disclosure,
    only after Phase C confirms the study is live; watch for backlinks → log.
F4. Unlinked brand mentions: search "Marqly" (and the markly.me confusables) via Bing/Google in the
    owner Chrome; where a mention lacks a link, send the short ask (template C). Note: markly.me
    collision copy lives on /about — reference it when pitching citation fixes.

## PHASE G — Remaining owner-only bits (ASK, don't fake)
G1. Author photo: ask the owner for a headshot or a file path on this machine; if a file is confirmed,
    set `AUTHOR.image` + Person schema + it must exist in src/assets. Do NOT pick a photo yourself.
G2. Anything requiring a password you do not have: stop at the login screen and hand the browser to
    the owner (or ask for a passkey/2FA code interaction), never work around auth.

## PHASE H — Close-out discipline (repeat per phase)
- `npm run build && npm run seo:check` (25/25) → commit (conventional style, branch continues from
  `feat/seo-program-phase1`; after C3, also keep origin pushed: `git push -u origin feat/seo-program-phase1`
  and optionally PR to main for review history).
- Update `seo/SESSION_LOG.md` (what/evidence/next), `seo/SEO-PROGRESS.md` (board + KPI numbers with
  dates + source), `seo/data/changes-log.csv` (every edited URL, deploy date), `redirects.csv`
  (every new 301), `sent-log.md` (every outreach send).
- Re-run `node seo/scripts/weekly-report.mjs` weekly; append `seo/data/ai-citations.csv` with the
  30-prompt AI-citation panel (run the prompts in ChatGPT/Perplexity/Copilot/AI-Mode via the owner
  Chrome; record citations; never simulate answers).

## Definition of done for this handoff
B2 produced a real GSC pull (or the 4 CSVs are ingested + MANIFEST updated); C3 is LIVE and
post-deploy paperwork committed; D1–D4 executed with attribution rows; E1 screenshots embedded with
dates; F1–F4 with ≥30 logged contacts and any acquired links recorded; G asked, not guessed; every
commit gate-green; the program's Day-30 KPI table in SEO-PROGRESS has measured, dated entries.
