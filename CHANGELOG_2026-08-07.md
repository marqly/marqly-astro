# Changelog — 2026-08-07

## Prompt Gallery scaled to 400 SEO-intent, model-specific prompts

Commit `0701694`, deployed to production (`marqly-astro.trymarqly.workers.dev`).

### 1. Added 180 high-intent prompts (400 total)

**File(s)**: `active/data/prompts-seo-batch.mjs`, `src/content/prompts/*.mdx`

- Added 18 prompts per category (10 categories) to reach exactly 400 prompts.
- Titles target the highest-traffic query pattern: `{model} prompts for {task}`.
- Covered models: ChatGPT, Claude, Gemini, Perplexity, Microsoft Copilot, DeepSeek, Kimi, Copy.ai, Jasper, Midjourney, DALL-E, Stable Diffusion, Ideogram.
- Examples of targeted queries:
  - "ChatGPT prompts for blog post outlines"
  - "Midjourney prompts for logo design"
  - "DeepSeek prompts for debugging code"
  - "Kimi prompts for research proposals"
  - "Perplexity prompts for literature review"
  - "Copilot prompts for unit tests"
- Each entry sets `tools` so detail pages show the correct tool chips and links.

### 2. SEO & traffic analysis report

**File(s)**: `docs/aso/prompt-gallery-seo-analysis.md`

- Documents keyword clusters by category and model.
- Explains model-first selection methodology and expected organic-traffic impact.
- Lists next-iteration opportunities (Grok/Qwen/GLM pages, comparison pages, seasonal prompts).

### 3. OG cards and surface copy

**File(s)**: `public/og/seo/*.png`, `public/llms.txt`

- Regenerated 690 SEO OG cards (prompts, categories, hubs, existing surfaces).
- Updated `public/llms.txt` to advertise "400+ copy-pasteable prompts".

### 4. Build verification

- `npm run build` succeeded.
- `node active/scripts/check-links.mjs`: 737 pages, 150,052 internal hrefs, 0 broken targets.
- Deployed to `https://marqly-astro.trymarqly.workers.dev`.


## Removed all fake/AI-slop images and captions from Prompt Gallery

Commit `3bce7e5`, deployed to production (`marqly-astro.trymarqly.workers.dev`).

**File(s)**: `src/pages/prompt-gallery/*.astro`, `src/pages/prompt-gallery/category/*.astro`, `src/content/prompts/*.mdx`, `active/scripts/generate-prompts.mjs`, `active/scripts/strip-prompt-images.mjs`, `public/prompts/`

- Removed card thumbnails from the hub, category, and category-index pages.
- Removed the reference-image aside and "Illustration for ..." captions from prompt detail pages.
- Stripped `referenceImage`, `imageAlt`, and `imageCredit` frontmatter fields and removed `## Image credit` body sections from all 400 prompt MDX files.
- Updated `generate-prompts.mjs` so future batches never emit image fields or image-credit sections.
- Deleted `public/prompts/icons/` and `public/prompts/examples/` asset directories.
- `npm run build` succeeded; `check-links.mjs`: 737 pages, 150,052 internal hrefs, 0 broken targets.


## Show full prompt by default on prompt detail pages

Commit `78c8fb9`, deployed to production (`marqly-astro.trymarqly.workers.dev`).

**File(s)**: `src/pages/prompt-gallery/[slug].astro`

- Removed the "Reveal full prompt" preview/hide flow.
- The full prompt now renders immediately on page load, with the Copy button kept in place.
- Updated the copy-button selector to target the visible `<pre>` element.
- Removed now-unused preview/reveal CSS.
- `npm run build` succeeded; `check-links.mjs`: 737 pages, 150,052 internal hrefs, 0 broken targets.
