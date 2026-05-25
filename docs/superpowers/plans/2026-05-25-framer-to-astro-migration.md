# Marqly Framer → Astro/Cloudflare Migration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Framer-hosted marqly.com with a pixel-perfect Astro static site on Cloudflare Pages, verified by automated screenshot diffing, preserving SEO.

**Architecture:** Capture the live site with a headless browser (reference screenshots + assets + SEO metadata), hand-build clean Astro components with scoped CSS + design tokens, and verify each page against its captured reference with a pixelmatch diff loop until under threshold. Blog posts become editable MDX behind a cloned template. Deploy static output to Cloudflare Pages; preserve URLs 1:1.

**Tech Stack:** Astro v5 (static), `@astrojs/mdx`, `@astrojs/sitemap`, Playwright (capture + diff), pixelmatch + pngjs, Cloudflare Pages.

**Verification model:** This is a visual clone, not algorithmic logic — the "test" for a page is (a) `astro build` succeeds and (b) the screenshot diff vs the live reference is under the pixel threshold at both breakpoints. Commands and expected output are given per task.

---

## File / Directory Map

```
CLAUDE.md                         # project system prompt (bootstrap)
active/
  scripts/capture.mjs             # Playwright capture of live site
  scripts/diff.mjs                # local-vs-reference pixel diff
  scripts/urls.json               # list of pages to capture
  logs/capture/<slug>/            # desktop.png, mobile.png, page.html, meta.json, assets/
  logs/visual-diff-<slug>.md      # per-page diff scores
src/
  pages/{index,pricing,extension,terms,privacy}.astro, vs/raindrop.astro
  pages/blog/{index.astro,[slug].astro}
  content/{config.ts, blog/*.mdx}
  components/{Header,Footer,Hero,FeatureGrid,PricingCard,Testimonials,Cta,Faq}.astro
  layouts/{BaseLayout,BlogPostLayout}.astro
  styles/{tokens.css,global.css}
  assets/{images,fonts,icons}/
public/{_redirects,robots.txt,og/}
astro.config.mjs
package.json
wrangler / Cloudflare Pages settings (build: `astro build`, output: `dist`)
```

---

## Phase 1 — Bootstrap & Scaffold

### Task 1: Bootstrap the project

**Files:** Create `CLAUDE.md`, `active/`, `.gitignore`

- [ ] **Step 1:** Run `/bootstrap-project` (creates `CLAUDE.md`, `active/{tmp,logs}`, `.gitignore`).
- [ ] **Step 2:** Add to `.gitignore`: `node_modules/`, `dist/`, `.astro/`, `.env`, `active/tmp/`, `active/logs/capture/` (large binaries — keep diff logs, ignore captures).
- [ ] **Step 3:** Commit. `git add CLAUDE.md .gitignore && git commit -m "chore: bootstrap project"`

### Task 2: Scaffold Astro + integrations

**Files:** `package.json`, `astro.config.mjs`, `src/`, `public/`

- [ ] **Step 1:** `npm create astro@latest . -- --template minimal --no-install --no-git --skip-houston` (scaffold into existing dir).
- [ ] **Step 2:** Verify each dep on npm before install (per hallucinated-package rule), then add: `npx astro add mdx sitemap` (accepts config edits), and `npm i -D playwright pixelmatch pngjs`. Then `npx playwright install chromium`.
- [ ] **Step 3:** Set `astro.config.mjs`: `site: 'https://www.marqly.com'`, `output: 'static'`, integrations `[mdx(), sitemap()]`.
- [ ] **Step 4:** Verify build: `npm run build` → Expected: `dist/` created, exit 0.
- [ ] **Step 5:** Commit. `git add -A && git commit -m "chore: scaffold Astro with mdx + sitemap"`

---

## Phase 2 — Capture the live site (keystone)

### Task 3: URL inventory

**Files:** Create `active/scripts/urls.json`

- [ ] **Step 1:** Populate from the sitemap (24 URLs): `/`, `/Extension`, `/Pricing`, `/T&C`, `/privacypolicy`, `/blog`, `/vs/raindrop`, and the 17 `/blog/*` posts. Add the Help/Contact destinations once resolved.

### Task 4: Capture script

**Files:** Create `active/scripts/capture.mjs`

- [ ] **Step 1:** Write a Playwright script that, for each URL: launches chromium, sets viewport `1440x900`, `goto(url, {waitUntil:'networkidle'})`, scrolls to bottom to trigger lazy assets, takes `fullPage` screenshot → `active/logs/capture/<slug>/desktop.png`; repeats at `390x844` → `mobile.png`. Saves `document.documentElement.outerHTML` → `page.html`. Extracts `<head>` (title, meta description, canonical, all `og:`/`twitter:` tags, JSON-LD) → `meta.json`. Listens to `page.on('response')` and saves any `image/*`, `font/*`, `text/css` responses → `assets/`.
- [ ] **Step 2:** Run: `node active/scripts/capture.mjs`. Expected: one folder per URL under `active/logs/capture/` with the 4+ artifacts.
- [ ] **Step 3:** Manually review Home + Pricing captures to confirm fidelity (full page, fonts loaded, no cookie banner clipping).

### Task 5: Extract design tokens + font inventory

**Files:** Create `src/styles/tokens.css`, `src/assets/fonts/`

- [ ] **Step 1:** From captured CSS/computed styles, collate the palette, type scale, font families, spacing, radii, shadows, breakpoints into `tokens.css` as CSS custom properties.
- [ ] **Step 2:** Copy the woff2 font files from captures into `src/assets/fonts/`; write `@font-face` rules with `font-display: swap`.
- [ ] **Step 3:** Commit. `git add src/styles src/assets/fonts && git commit -m "feat: design tokens + self-hosted fonts"`

---

## Phase 3 — Verification harness

### Task 6: Diff script

**Files:** Create `active/scripts/diff.mjs`

- [ ] **Step 1:** Write a Playwright + pixelmatch script: given a route + reference folder, screenshot the local dev/preview URL at 1440 and 390 `fullPage`, compare to `desktop.png`/`mobile.png` with pixelmatch (allow `{threshold:0.1}`), write a diff PNG and the mismatched-pixel ratio to `active/logs/visual-diff-<slug>.md`. Support a `--mask` arg for dynamic regions.
- [ ] **Step 2:** Smoke-test against the unbuilt site (expect ~100% diff) to confirm the harness runs end-to-end.
- [ ] **Step 3:** Commit. `git add active/scripts && git commit -m "test: screenshot-diff harness"`

---

## Phase 4 — Shared shell

### Task 7: BaseLayout + Header + Footer

**Files:** Create `src/layouts/BaseLayout.astro`, `src/components/Header.astro`, `src/components/Footer.astro`

- [ ] **Step 1:** `BaseLayout` renders `<head>` from props (title, description, canonical, ogImage, jsonLd) using captured `meta.json` shapes; imports `tokens.css` + `global.css` + fonts; slots body; includes Header/Footer.
- [ ] **Step 2:** Build Header (nav: Home, Pricing, Extension, Help, Blog, Install Extension, Sign in) and Footer (Features, Pricing, Contact us, Terms, Privacy) to match captured markup. Contact us → external/`mailto:` per spec.
- [ ] **Step 3:** Build verify: `npm run build`. Expected: exit 0.

---

## Phase 5 — Per-page clone (repeatable procedure)

> Apply this exact procedure to each page below, one task per page. The component code is derived from that page's capture (`page.html` + screenshots + computed styles); it cannot be pre-written. Each page is its own commit.

**Pages (one task each):** `index` (Home), `pricing` (`/Pricing`), `extension` (`/Extension`), `terms` (`/T&C`), `privacy` (`/privacypolicy`), `vs/raindrop`.

**Per-page procedure:**
- [ ] **Step 1:** Open `active/logs/capture/<slug>/{desktop.png,mobile.png,page.html,meta.json}` as the reference.
- [ ] **Step 2:** Create `src/pages/<route>.astro` using `BaseLayout` + shared/section components; copy text verbatim from `page.html`; reference downloaded assets from `src/assets/`; write scoped CSS using `tokens.css` variables to match computed styles. Extract any repeated section into a `src/components/` unit.
- [ ] **Step 3:** Wire SEO from `meta.json` into `BaseLayout` props (title, description, canonical, OG, JSON-LD).
- [ ] **Step 4:** `npm run build && npm run preview` (or dev server).
- [ ] **Step 5:** Run `node active/scripts/diff.mjs <route> <slug>`. Expected: diff ratio < ~0.02 at both breakpoints (mask animated regions). Iterate Step 2 CSS until under threshold.
- [ ] **Step 6:** Commit. `git commit -m "feat: clone <route> page"`

---

## Phase 6 — Blog

### Task: Content collection + post template

**Files:** Create `src/content/config.ts`, `src/layouts/BlogPostLayout.astro`, `src/pages/blog/[slug].astro`, `src/pages/blog/index.astro`

- [ ] **Step 1:** `config.ts`: define `blog` collection with zod schema `{ title, description, pubDate, updatedDate?, category, tags?, ogImage?, canonical? }`.
- [ ] **Step 2:** `BlogPostLayout.astro`: clone the captured post chrome (title, date, category, body typography) using tokens; render MDX `<slot/>`.
- [ ] **Step 3:** `blog/[slug].astro`: `getStaticPaths` over the collection, render through `BlogPostLayout`; preserve exact slugs.
- [ ] **Step 4:** `blog/index.astro`: clone the index list (date, title, category) generated from the collection, sorted by `pubDate` desc.

### Task: Migrate posts to MDX (dedupe)

**Files:** Create `src/content/blog/*.mdx`

- [ ] **Step 1:** Convert each captured post's body to MDX with frontmatter from `meta.json`. Preserve in-post images into `src/assets/`.
- [ ] **Step 2:** Consolidate the 3 duplicate "7 best chrome extensions" posts to one canonical (confirm with user); the other two get 301s in `_redirects`.
- [ ] **Step 3:** Diff blog index + 2–3 representative posts via `diff.mjs`. Iterate to threshold.
- [ ] **Step 4:** Commit. `git commit -m "feat: blog collection + posts"`

---

## Phase 7 — SEO, redirects, sitemap

### Task: SEO parity + redirects

**Files:** Create `public/robots.txt`, `public/_redirects`; verify `@astrojs/sitemap` output

- [ ] **Step 1:** `robots.txt` allowing crawl + sitemap reference; confirm `sitemap-index.xml` generated on build and matches live URL set.
- [ ] **Step 2:** `_redirects`: 301 the 2–3 junk/duplicate blog slugs → canonical. (No other redirects — URLs preserved 1:1.)
- [ ] **Step 3:** Audit: script-diff every page's `meta.json` (live) against the built page's `<head>`. Expected: title/description/canonical/OG match.
- [ ] **Step 4:** Lighthouse each key page: `npx lighthouse <preview-url> --only-categories=performance,seo,best-practices,accessibility --output=json`. Expected: SEO ≥ live, performance ≥ live. Log to `active/logs/`.
- [ ] **Step 5:** Commit. `git commit -m "feat: SEO, sitemap, redirects"`

---

## Phase 8 — Deploy & cutover

### Task: Cloudflare Pages preview

- [ ] **Step 1:** Push branch to GitHub. (Requires user's GitHub remote + Cloudflare account connection — user action.)
- [ ] **Step 2:** In Cloudflare Pages: connect repo, framework preset Astro, build `npm run build`, output `dist`. Deploy to `*.pages.dev`.
- [ ] **Step 3:** Run full diff + Lighthouse + SEO audit against the `*.pages.dev` preview. Fix regressions.

### Task: DNS cutover (user-gated, irreversible)

- [ ] **Step 1:** Resolve www-vs-apex canonical (www per sitemap); configure redirect.
- [ ] **Step 2:** **User confirms**, then point marqly.com DNS to Cloudflare Pages. Keep Framer live until verified.
- [ ] **Step 3:** Post-cutover: verify all URLs 200, sitemap submitted in Search Console, redirects resolve. Decommission Framer.

---

## Self-review notes

- **Spec coverage:** capture (P2), tokens/fonts (T5), diff loop (P3/P5), all pages incl. vs/raindrop (P5), blog as MDX + dedupe (P6), URL preservation + redirects + SEO + sitemap (P7), Cloudflare deploy + DNS (P8), Help/Contact resolved in T3/T7. ✓
- **Discovery-driven caveat:** Phase-5 component code is intentionally derived from captures at execution time, not pre-written — this is correct for a pixel clone, not a placeholder.
- **User-gated steps:** GitHub remote/Cloudflare connection (P8 T1–2) and DNS cutover (P8) require the user's accounts/credentials and explicit go-ahead.
