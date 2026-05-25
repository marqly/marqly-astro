# Marqly: Framer → Astro / Cloudflare Pages Migration

**Date:** 2026-05-25
**Status:** Approved (design)
**Source site:** https://marqly.com (Framer-hosted, `www` canonical)
**Target:** Astro v5 static site on Cloudflare Pages

## Goal

Migrate the Marqly marketing site off Framer to a self-owned Astro codebase
deployed on Cloudflare Pages. The rebuild is a **pixel-perfect clone** of the
current design, verified with automated screenshot diffing, with **SEO parity
or better** so existing rankings are preserved.

Framer has no usable full-site code export, so this is a clean rebuild using the
live published site as the reference — not a port of Framer's generated markup.

## Scope

**In scope (everything off Framer):**

Marketing pages:
- `/` — Home
- `/Extension`
- `/Pricing`
- `/T&C` — Terms of Use
- `/privacypolicy` — Privacy Policy
- `/vs/raindrop` — comparison SEO landing page

Blog:
- `/blog` — index
- 17 posts (post-dedupe — see "Content cleanup")

Help:
- Nav link, not in sitemap — destination resolved during capture (likely
  external help desk). Re-wired or migrated accordingly.

**Out of scope:** the product app (app.marqly.com) and auth — unaffected.

## Decisions (locked)

| Decision | Choice |
|---|---|
| Fidelity | Pixel-perfect clone |
| Build method | Hybrid: automated capture → hand-built Astro → screenshot-diff verification |
| Styling | Scoped CSS + design tokens (CSS custom properties) |
| Output mode | Astro static (`output: 'static'`) — no SSR |
| Host | Cloudflare Pages (GitHub-connected, build on push) |
| Blog | Astro Content Collections, MDX posts, one cloned post template |
| Fonts | Self-hosted woff2 (extracted from Framer CDN), preload + `font-display: swap` |
| URLs | Preserve live URLs exactly (zero redirects = zero ranking risk); 301 only the junk/duplicate blog slugs → canonical |
| Contact form | Launch with existing external/`mailto:` link; proper form is a fast-follow (not a launch blocker) |

## Architecture

### Stack
- Astro v5, static output. No server logic needed (auth/app live elsewhere).
- Cloudflare Pages: build `astro build` → `dist/`. No adapter required for static.
  Add `@astrojs/cloudflare` only if a future server endpoint (e.g. contact form
  handler) is needed.
- `@astrojs/sitemap` for sitemap generation; `@astrojs/mdx` for blog content.
- Scoped CSS + `tokens.css` (colors, type scale, font families, spacing scale,
  radii, shadows, breakpoints) extracted from the live site.

### Repo structure
```
src/
  pages/
    index.astro            # Home
    pricing.astro          # served at /Pricing (exact live path preserved)
    extension.astro        # /Extension
    terms.astro            # /T&C
    privacy.astro          # /privacypolicy
    vs/raindrop.astro      # /vs/raindrop
    blog/
      index.astro          # blog listing (generated from collection)
      [slug].astro         # renders MDX post via cloned template
  content/
    config.ts              # zod collection schema
    blog/*.mdx             # 17 posts (deduped)
  components/              # Header, Footer, Hero, PricingCard, Testimonials, ...
  layouts/
    BaseLayout.astro       # <head>, SEO tags, global CSS/fonts
    BlogPostLayout.astro   # cloned post template
  styles/
    tokens.css
    global.css
  assets/                  # images, svgs, fonts (originals from Framer CDN)
public/
  _redirects               # Cloudflare Pages redirects (junk slugs → canonical)
  robots.txt
  og/                      # default OG images
astro.config.mjs
```
Note: exact route paths (capitalization, `&`, dotted slugs) are preserved via
Astro page filenames / route config so live URLs don't change.

## Components / units

Each is independently understandable and testable:

- **BaseLayout** — owns `<head>`: per-page title, meta description, canonical,
  OG/Twitter, JSON-LD; loads tokens, global CSS, fonts. Input: SEO frontmatter.
- **Header / Footer** — nav + links, cloned 1:1. Input: none (static) / current path.
- **Page sections** (Hero, FeatureGrid, PricingCards, Testimonials, CTA, FAQ) —
  presentational, props-driven, scoped CSS. Reused across pages where the live
  site reuses them.
- **BlogPostLayout** — renders MDX body inside the cloned post chrome. Input:
  post frontmatter + content.
- **Blog index** — maps the content collection to cloned list items.

## Data flow

1. **Capture (one-off):** Playwright script (in `active/`) walks every sitemap
   URL at desktop 1440 + mobile 390. Per page it saves: full-page reference
   screenshots, computed styles for key elements, all asset/font URLs (then
   downloads originals), full copy, and `<head>` SEO (title, description,
   canonical, OG/Twitter, JSON-LD). Outputs to `active/logs/capture/<page>/`.
   Design tokens collated into a `tokens.css` draft.
   - Tier-2 (headless browser) is justified: Framer is JS-rendered; we need
     computed styles and a pixel reference, which Tier-1 HTTP can't provide.
2. **Build:** shared shell first (BaseLayout, Header, Footer, tokens, fonts),
   verified on one page; then each page hand-built to match its reference.
3. **Blog:** each captured post → MDX (frontmatter + body) in `content/blog/`,
   rendered through the cloned `BlogPostLayout`.

## Verification (the diff loop)

- Playwright screenshots the local Astro build per page/breakpoint and diffs
  against the captured live reference (pixelmatch).
- **Metric:** % pixels differing. Iterate component CSS until under threshold
  (~1–2%), masking animated/dynamic regions (testimonials, carousels) and
  tolerating font anti-aliasing.
- Per-page diff scores logged to `active/logs/visual-diff-<page>.md`.
- Lighthouse run per page (performance/SEO/a11y/best-practices). Static output +
  optimized images + self-hosted fonts should beat Framer's runtime on CWV.

## SEO & redirects

- Replicate per-page title / meta description / canonical / OG / Twitter /
  JSON-LD 1:1 (captured during step 1).
- Generate `sitemap.xml` (`@astrojs/sitemap`) and `robots.txt`.
- **URL preservation:** keep every live URL exactly as-is (including `/Pricing`,
  `/T&C`, dotted slugs) — no redirects, no link-equity loss.
- `public/_redirects`: 301 only the junk/duplicate blog slugs → canonical post.
- Optional later: normalize ugly URLs with proper 301s (deferred — avoids risk
  during cutover).

## Content cleanup (blog)

Three near-duplicate/junk posts exist in the sitemap and must be consolidated to
one canonical each (the rest 301 to it):
- `7-best-chrome-bookmark-extensions-in-2026-(tested-ranked)-copy`
- `7-best-chrome-bookmark-extensions-in-2026-(tested-ranked)`
- `7-best-chrome-bookmark-extensions-2026-tested-ranked`

Canonical confirmed with user during the blog phase.

## Deploy & cutover

1. Build on Cloudflare Pages preview (`*.pages.dev`).
2. Verify: all pages render, diffs under threshold, Lighthouse green, SEO tags
   present, redirects work.
3. Cut DNS: point marqly.com to Cloudflare Pages. `www` is canonical (per
   sitemap); set apex↔www redirect consistently.
4. Keep Framer live until cutover is verified; decommission after.

## Open items (resolved during capture, not blockers)

- Where **Help** and **Contact us** point (external desk? mailto? form?).
- Whether a working **Framer contact form** exists needing replacement (Framer
  forms don't port → mailto / Formspree / Cloudflare Worker as fast-follow).
- Canonical choice among the 3 duplicate blog posts.

## Phasing

1. Bootstrap repo (CLAUDE.md, `active/`, `.gitignore`) + scaffold Astro +
   Cloudflare Pages config. *(Confirm before running.)*
2. Capture pipeline → reference screenshots + assets + fonts + tokens + SEO.
3. Shared shell (BaseLayout, Header, Footer, tokens, fonts); verify on one page.
4. Clone marketing pages (Home, Pricing, Extension, Terms, Privacy, vs/raindrop)
   with diff loop.
5. Blog: content collection + post template + index; migrate 17 posts to MDX
   (dedupe); diff loop.
6. SEO: sitemap, robots, redirects, meta parity audit.
7. Deploy to Cloudflare Pages preview; full verification (diffs + Lighthouse +
   SEO).
8. DNS cutover.

## Risks

- **Ranking loss** if SEO tags/URLs drift → mitigated by 1:1 capture + URL
  preservation + preview verification before cutover.
- **Pixel drift** on dynamic/animated regions → masked in diff; verified at two
  breakpoints.
- **Framer-only features** (forms, embeds, interactions) → inventoried during
  capture; replacements planned, none block launch.
