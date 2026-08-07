# Changelog — 2026-08-07

## SEO — New AI Prompt Gallery

Added a categorized prompt gallery to capture long-tail search traffic for copy-paste AI prompts (ChatGPT, Gemini, Midjourney, etc.). The surface follows the existing content-collection → standalone-page SEO engine pattern used by `/faq`, `/compare`, and `/tools`.

---

### 1. Content — Prompt collection

**File(s)**: `src/content.config.ts`, `src/content/prompts/*.mdx` (70 entries), `src/lib/ai-tools.ts`

**Problem**: There was no dedicated, indexable destination for high-intent prompt queries (e.g., "LinkedIn headshot prompt", "SEO blog outline prompt").

**Fix**: Introduced a new `prompts` Astro content collection with schema fields for category, tags, target keyword, full prompt text, preview length, reference image, FAQs, and tool slugs. Created 70 Markdown entries across ten categories:

- Image & Photo
- Writing & Content
- SEO & Marketing
- Research & Learning
- Work & Productivity
- Coding & Development
- Social Media
- Personal & Creative
- Analysis & Data
- Prompt Engineering

Added `src/lib/ai-tools.ts` as the single source of truth for tool names/URLs referenced by prompt entries.

---

### 2. Pages — Hub and detail routes

**File(s)**: `src/pages/prompt-gallery/index.astro`, `src/pages/prompt-gallery/[slug].astro`

**Problem**: Prompts need both a browseable hub and individual long-tail pages.

**Fix**: Built `/prompt-gallery` with category-filter chips, live search, and a responsive card grid. Each prompt gets its own `/prompt-gallery/<slug>` page with:

- Reveal/hide full prompt button
- One-click copy button
- Tool chips linking to ChatGPT, Claude, Gemini, Midjourney, etc.
- Reference image for image-generation prompts
- Related prompts from the same category
- FAQ accordion with matching `FAQPage` JSON-LD
- Per-page OG card

---

### 3. Navigation — Header and LinkHub

**File(s)**: `src/components/Header.astro`, `src/components/seo/LinkHub.astro`

**Fix**: Added "Prompt Gallery" to the header Resources dropdown and mobile menu. Added a Prompt Gallery subsection to the sitewide LinkHub, plus kept the existing blog picks so internal link equity is preserved.

---

### 4. Visual assets — Reference images and OG cards

**File(s)**: `public/prompts/examples/*.svg`, `public/og/seo/prompt-*.png`, `public/og/seo/hub-prompt-gallery.png`, `active/scripts/gen-og-seo.mjs`

**Fix**: Generated stylized SVG reference cards for the 7 image prompts. Extended `gen-og-seo.mjs` to generate OG cards for all 70 prompt detail pages and the hub, and added an ImageMagick fallback so the script still works when the platform-specific `resvg` binary is missing.

---

### 5. LLMs discovery

**File(s)**: `public/llms.txt`

**Fix**: Added an "AI Prompt Gallery" section to `llms.txt` with the hub and representative prompts so LLM crawlers can surface the new content.

---

### Files Modified

| File | Change |
|---|---|
| `src/content.config.ts` | Added `prompts` collection schema |
| `src/content/prompts/*.mdx` | 70 new prompt entries |
| `src/lib/ai-tools.ts` | New AI tool registry |
| `src/pages/prompt-gallery/index.astro` | New hub page with search/filter |
| `src/pages/prompt-gallery/[slug].astro` | New detail page with reveal/copy |
| `src/components/Header.astro` | Added Prompt Gallery to resources |
| `src/components/seo/LinkHub.astro` | Added Prompt Gallery links |
| `public/llms.txt` | Added prompt gallery section |
| `public/prompts/examples/*.svg` | 7 reference image cards |
| `public/og/seo/prompt-*.png` | 70 prompt OG cards |
| `public/og/seo/hub-prompt-gallery.png` | Hub OG card |
| `active/scripts/gen-og-seo.mjs` | Prompt OG generation + ImageMagick fallback |

---

### Verification

- `npm run build` completed successfully
- `node active/scripts/check-links.mjs` reported 0 broken internal links
- Sitemap includes 71 new `/prompt-gallery*` URLs
