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


## Follow-up — Prompt Gallery expansion & fixes

### Problems addressed
- Category filter chips on `/prompt-gallery` did not filter anything because the selector matched both chips and cards.
- Prompt count felt small (70) compared to search demand.
- Pages were text-heavy and lacked visual interest.
- Detail pages had no spacing above the "Frequently asked questions" heading.
- SEO schema ItemList lacked item URLs; detail pages used `og:type=website`.
- Tool registry did not include top Chinese LLMs.

### Fixes & improvements

**1. Filtering & UX**
- Fixed chip selector to target `.chip[data-category]` only.
- Added `aria-pressed` states and proper active class toggling.
- Added margin-top to `.faq-block` on detail pages.
- Added `rel="noopener noreferrer"` to external tool links.

**2. Prompt volume**
- Added 150 new prompts (220 total) across all ten categories, targeting high-intent queries:
  - Image & Photo, Writing & Content, SEO & Marketing, Research & Learning
  - Work & Productivity, Coding & Development, Social Media, Personal & Creative
  - Analysis & Data, Prompt Engineering
- Each new prompt includes target keyword, tags, tool links, category-specific prompt template, description, and FAQs.

**3. Chinese & global AI tools**
- Expanded `src/lib/ai-tools.ts` with DeepSeek, Kimi (Moonshot), Qwen, GLM (Zhipu), Doubao, Hunyuan, Wenxin Yiyan, Tongyi Qianwen, Stepfun, Copy.ai, Jasper, Runway, Sora, ElevenLabs, and Suno.

**4. Visuals & images**
- Created 10 colorful SVG category icons in `public/prompts/icons/`.
- Assigned a category icon to every prompt as a `referenceImage` so every card has a visual.
- Existing image-generation prompts keep their example SVGs; new image prompts use category icons.
- Added an "Image credit" note to prompt bodies: original SVG illustration for Marqly Prompt Gallery, free to use with attribution.

**5. Category landing pages & internal linking**
- Added `/prompt-gallery/category/` index and `/prompt-gallery/category/<slug>/` pages for each category.
- Hub now shows a visual category browse grid above the filter bar.
- Detail-page category badge links to its category page.
- `llms.txt` updated with category links and representative DeepSeek/Kimi prompts.

**6. SEO schema**
- `itemList` builder now supports per-item URLs.
- Hub and category pages emit `ItemList` schema with prompt URLs.
- Detail pages use `og:type=article`.

**7. OG cards**
- Regenerated all 510 SEO OG cards (220 prompt cards + 11 category cards + existing surfaces).

### Verification
- `npm run build` completed successfully
- `node active/scripts/check-links.mjs` reported 557 pages, 114,412 internal hrefs, 0 broken targets
