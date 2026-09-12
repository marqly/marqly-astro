# Changelog — 2026-09-12

## Homepage: Ask, the AI assistant — hero story, new section, nav link (branch `feat/ask-assistant-home`, DEPLOYED to the Worker as `8adaee4` then `c8e9343`)

The app shipped **Ask** (a chat panel beside the library that answers from the user's own
saves with citations, finds problems, and changes the library only through approved
proposals; the same tools reach Claude / ChatGPT / Cursor over MCP). The homepage still
told the old "save dialog" story and the product-facts spec still called Ask single-shot.
This change puts Ask at the top of the page, in the site's own visual system. Deploy
(`git push marqly-astro feat/ask-assistant-home:main`) is a separate, founder-approved step.

---

### 1. Hero — the Ask story replaces the save-dialog loop

**File(s)**: `src/components/landing/Hero.tsx` (rewrite), `HeroSection.astro` (subhead + caption),
`data.ts` (`japanBookmarks`, `askHero`, `askEmptyBoxes`, four favicons)

**Problem**: The hero's looping demo showed the save modal filing a recipe. The flagship
feature had no presence above the fold.

**Fix**: Same `BrowserFrame`, same fixed 430/460 px stage, same loop/IntersectionObserver/
reduced-motion scaffolding. Left: the library in list view (six rows, real pages). Right: the
Ask dock. Beats: empty state with the proactive findings → the question types →
"Searched “Japan” · 7 results" → the answer streams word by word with citation pills → a
Sources row → "Add tags to 3 bookmarks" proposal (Approve pulses) → applied, and the three
library rows receive their tags with the product's `badge-enter` / `just-added` motion.
Jump-free: every element is mounted from frame one and only changes opacity/transform.
SSR frame = the proposal with the full answer; reduced motion holds that frame. Three
REAL bookmarks (japan-guide.com Kyoto guide and JR Pass page, Time Out Tokyo restaurants;
titles are the pages' own `<title>`), favicons fetched the way the existing 19 were.
H1 unchanged; subhead and caption now describe Ask.

### 2. New section "AI assistant" at position 2 (`#ai-assistant`)

**File(s)**: `src/components/landing/AiAssistantSection.astro` (new), `AskShowcase.tsx` (new),
`AskDock.tsx` (new: dock chrome + Ask primitives), `ConnectedAppsDemo.tsx` (new), `icons.tsx`
(six glyphs), `landing.css` (six `--ask-*` tints ported from the app, `.ask-dots` keyframe,
reduced-motion entry), `src/pages/index.astro` (mount + JSON-LD featureList)

**Fix**: Header block in the SaveAnywhere pattern ("You saved it. Now ask it."), then a
full-width showcase modeled on `YouTubeShowcase`: pill tabs (Ask · Find problems · Tidy up ·
From Claude & ChatGPT) auto-cycling every 6.2 s while in view, click pins, ← → move between
tabs, fixed-height stage, fade-slide between panes. Each pane is a short timeline that rests
on a final frame (reduced motion renders the final frame directly): a cited answer from a
YouTube transcript; the dead-links finding → "Move 288 dead links to Trash" with the
product's Trash warning; "tag whatever I saved this week" → tag rows that flip to added →
"Tagged 3 bookmarks"; and the Settings → Connected apps card with the real MCP address and
the per-app read-only / Can edit switch. Under it, four option cards (entry points,
approval + 30-day undo + write modes, citations + memory, connected apps). No sparkle
glyph anywhere: the Ask mark is the chat bubble.

### 3. Nav

**File(s)**: `src/components/landing/Nav.astro`

"AI Assistant" primary link (`/#ai-assistant`) between Extension and Features, desktop and
mobile menus, with a "New" pill in the marker yellow (dated TODO to remove ~2026-10-15).

### 4. Copy reconciliation

**File(s)**: `docs/superpowers/specs/2026-08-02-marqly-product-facts.md`,
`src/components/landing/PricingSection.astro`, `src/content/blog/how-to-chat-with-your-saved-articles.md`

The spec's "Ask AI is single-shot, do not call it chat" paragraph and never-claim bullet
described the pre-Ask feature; rewritten with the real feature (multi-turn threads, sources,
findings, proposals, write modes, small clearable memory, MCP, credits never published,
never sparkles) plus a dated correction block. Pricing perk → "Ask, the AI assistant for
your library". One blog FAQ answer that stated "single-shot, no memory" on a live page
rewritten.

### 5. Founder passes during review

- Tag chips in the demos use the product's per-tag soft colours (`ColorTagChip` / `AskChip`,
  same hash as the favicon letter-tiles, identical in the panel and in the library rows).
- The composer is the app's quiet grey field (no shadow); citation pills are smaller, sit
  on the text midline, and never wrap away from their word (`AskAnswer` groups word +
  citation + trailing punctuation in a nowrap span).
- The four option cards share one 180 px visual, one row rhythm (fixed leading slot, 12 px
  labels, one highlighted row) and shorter copy; card 4 is the Connected-apps rows.
- The nav "New" pill is the founder's violet (`--brand-new: #9534eb`, 12% wash).
- The hero demo grows with the viewport: 1040 px wide and a 540 px stage at `lg`, a
  400 px dock, a seventh library row.
- The Find-problems and Tidy-up panes were trimmed so their cards clear the composer at
  the fixed stage height.

### 6. The save-dialog loop is back (Capture section)

**File(s)**: `src/components/landing/SaveDemo.tsx` (new), `SaveAnywhereSection.astro`, `data.ts`
(`designNeighbor`), `public/landing/covers/lawsofux.jpg`, `public/landing/favicons/lawsofux.com.png`

The founder asked for the former hero animation back. It now plays as the first card of
"Saving is a reflex" (replacing the static dialog), retold as a design story: Halli's real
personal site → the save dialog finds the board and suggests tags → saved into Design
systems next to Laws of UX (real page, real cover, favicon fetched like the others). Same
loop, IntersectionObserver and reduced-motion behaviour as before.

### 7. Deploy

`git push marqly-astro feat/ask-assistant-home:main` twice on the founder's go: `8adaee4`
(Ask homepage + the parallel workstream's 12 uncommitted files, committed as `chore:` so they
are distinguishable) and `c8e9343` (save loop). Live on www.marqly.com.

### 8. Pricing copy — Ask + MCP under Pro

`PricingSection.astro` perks (homepage + /pricing): "Ask, the AI assistant: answers with sources, fixes and
tidies with your approval" and "Connected apps: your library in Claude, ChatGPT, Cursor and VS Code (MCP)";
the /pricing JSON-LD offer description; the Free-vs-Pro FAQ (`src/content/faq/whats-in-marqly-free-vs-pro.md`,
Pro list rewritten around Ask, MCP and the AI Organizer); the product-facts Pro sentence.

---

### Verification

- `npm run build` green; `dist/client/index.html` contains `id="ai-assistant"`, the new
  featureList strings, the nav anchor, and no "Ask AI over your library".
- `node active/scripts/check-links.mjs`: 1905 pages, 0 broken targets.
- `tsc --noEmit`: no errors in the new/changed components.
- Built site served from `dist/client` and checked in Chrome at 1280 px: hero loop plays
  and holds, section tabs cycle/pin, cards render; no console errors.
- `astro check` is not runnable here (`@astrojs/check` not installed); `astro dev` cannot
  start with the wrangler `ai` binding (Lab Note 2026-08-08) — verification used the build.

### Files Modified

| File | Change |
|---|---|
| `src/components/landing/Hero.tsx` | Ask story loop |
| `src/components/landing/HeroSection.astro` | subhead + caption |
| `src/components/landing/AskDock.tsx` | new — dock + Ask primitives |
| `src/components/landing/AskShowcase.tsx` | new — tabbed showcase + panes |
| `src/components/landing/ConnectedAppsDemo.tsx` | new — Connected apps card |
| `src/components/landing/AiAssistantSection.astro` | new — section |
| `src/components/landing/data.ts` | Ask data, favicons |
| `src/components/landing/icons.tsx` | ArrowUp, Undo, CheckCircle, Unlink, Copy, History |
| `src/components/landing/Nav.astro` | AI Assistant link + New pill |
| `src/components/landing/PricingSection.astro` | perk line |
| `src/pages/index.astro` | section mount, featureList |
| `src/styles/landing.css` | ask tints, dots, reduced motion |
| `docs/superpowers/specs/2026-08-02-marqly-product-facts.md` | Ask facts |
| `src/content/blog/how-to-chat-with-your-saved-articles.md` | FAQ answer |
| `public/landing/favicons/*.png` | japan-guide.com, timeout.com, cursor.com, code.visualstudio.com |
