# Changelog — 2026-08-08

## Homepage redesign (branch `landing-redesign`, NOT deployed)

Full rebuild of `/` around DOM reconstructions of real Marqly UI, on the
product's own design tokens. Local review pending founder approval before any
push to the `marqly-astro` deploy remote.

### Design system (`src/styles/landing.css`, `src/layouts/LandingV2.astro`)

- Tokens ported 1:1 from the product (`marqly_2026_prod/apps/web/app/globals.css`):
  monochrome black accent, borderless elevation-separated surfaces, 8px-radius
  scale, AI shimmer, 22ms card-entry stagger, avatar identity tints.
- **Google Sans** (now on Google Fonts, v70 variable 400–700 + italic),
  self-hosted, the ONLY font on the page — no serif, no mono (founder direction).
- Tailwind v4 via `@tailwindcss/vite`, scoped with `source(none)` + explicit
  `@source` globs so the legacy Framer-clone pages are untouched.
- New `LandingV2` layout: head/SEO parity with `LandingLayout` (canonical, OG,
  GA4, JSON-LD), LinkHub kept inside a token-compat wrapper aligned to the
  1120px footer grid.
- Muted token darkened (oklch 0.5517 → 0.48) so 11–13px copy passes WCAG AA.

### Page structure (`src/components/landing/`, one file per section)

1. **Hero** — real cloudscape backdrop (Unsplash, washed to Paper; 5KB
   soft-focus so it stays out of LCP), marker-stroke headline "You'll actually
   find it again.", and a **looping** save sequence: Bon Appétit's real Cacio e
   Pepe recipe → extension save modal → AI shimmer → board + lavender AI tag
   chips → card lands in the Cooking board (React island, pauses off-screen).
2. **Library** — full app-window reconstruction: sidebar with the app's real
   filter SVGs + real marqly2d board icons, tag carousel, grid of real
   bookmarks with real og:image covers (BA, arXiv, GitHub, overreacted.io,
   3Blue1Brown thumbnail, ChatGPT conversation).
3. **Search** — the through-line payoff: types "that pasta article about
   emulsions", AI shimmer, the hero's bookmark ranks #1 with the yellow
   Context chip; all three results are real BA articles (React island).
4. **Capture** — save modal on a highlighter-blue canvas; highlighter demo
   with a verbatim fs.blog quote under the real 6-swatch toolbar; YouTube AI
   card with 3Blue1Brown's real chapters (3:35 / 8:38 / 11:34, 18:40).
5. **AI Organizer** — animated island: scan sweep → staggered proposal rows
   with real colored board icons and tinted sub-board chips right-aligned on
   one axis before the counts.
6. **AI Chats** — transcript strip + three conversation cards with the real
   ChatGPT/Claude/Gemini icons and per-card top-aligned bubble covers.
7. **Everywhere** — equal-ratio cards: Marqly Home over a real Unsplash night
   sky (glass treatment, credit line) and the real iOS app capture (cropped
   from the repo's `mobile_app.png`).
8. **Pricing** — real prices ($0 / $4 mo annually / $8 monthly, 7-day trial),
   container-width cards, "Cancel anytime." above the CTA.
9. **FAQ** — the 17 SEO-locked questions, verbatim, matching FAQPage JSON-LD.
10. **Close** — dark ink panel (yellow wash removed per feedback) + FooterV2.

### Assets (`public/landing/`)

- `logo.svg` (canonical mark), Google Sans woff2 ×2, hero sky + newtab night
  photos (Unsplash), real og:image covers ×8 (via `active/tmp/og_harvest.mjs`,
  gitignored), real favicons ×13, real marqly2d board icons ×7, iOS capture.

### Verification

- `npm run build` green; desktop 1440 + mobile 390 visual passes; hero loop,
  search demo, and organizer animation verified interactively.
- Lighthouse (local, UNCOMPRESSED python server): perf 80 / a11y 96 / bp 100 /
  seo 100; TBT 0ms, CLS 0. The two caveats are measurement artifacts: HTML is
  136KB raw locally vs ~22KB brotli in prod (re-run against the Worker before
  sign-off), and the remaining axe "contrast" flags are oklch() colors axe
  cannot parse — computed contrast is ≥6.5:1.
- Reduced motion: every sequence SSRs its finished frame; all animation killed
  by media query.
