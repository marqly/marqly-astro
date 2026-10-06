# Content draft brief — export/rescue cluster (Marqly marketing site)

You are drafting SEO guides for **Marqly** (an AI bookmark manager). Drafts go in
`seo/drafts/` ONLY (a human reviews and moves them into `src/content/blog/`). Never
edit `src/content`, `src/pages`, or anything outside `seo/drafts/`.

## Absolute rules (violating any = reject)
1. **No fabrication.** No invented statistics, user counts, "we tested X tools and got Y%",
   testimonials, or fake screenshots. This is a legal/brand risk and the #1 site rule.
2. **No "free trial" language — anywhere.** Marqly sells NO free trial (retired 2026-09-18).
   Use "the free plan", "get started free", "create a free account". Never the word "trial".
   A question ("Is there a trial?") or a negation ("Marqly does not offer a trial") is the only
   allowed use of the word.
3. **Marqly product claims must match this verified fact sheet exactly (verified 2026-09-26):**
   - Import accepts: browser bookmark **HTML** (Chrome/Edge/Firefox/Safari), **Raindrop HTML**
     (its JSON export is NOT accepted), **Pocket’s list.csv (not its HTML)**, and **generic CSV**.
   - Limits: 10 MB free / 30 MB Pro; 10,000 bookmarks per file; `.html/.htm/.csv`.
   - Import does **NOT preserve original save dates** — imported items take the import date.
   - Auto-tagging of imports is a **Pro** feature; free-plan imports keep their own tags.
   - Marqly is: web app + Chrome/Edge/Firefox/Safari extension + iOS + Android. Free plan exists.
   - Do NOT claim features not listed here (no offline reading, no PDF OCR, etc.).
4. **Competitor/platform facts**: if you state how a platform works (its export path, file names,
   limits), it must be true and current. Prefer the platform's official help page. If you cannot
   verify a specific click-path, describe it conservatively ("under Settings → … the official
   data-download / export tool; confirm the current labels in the app") and add a line:
   `<!-- VERIFY: <what you could not confirm> -->` so the reviewer checks it. Do not invent menu
   names and present them as certain.
5. **Dates**: `pubDate: 2026-10-05`, no `updatedDate` (it's new). Do not backdate.

## Required structure (this is the info-gain that justifies the page existing)
- Answer-first intro: 40–60 words that directly answer "how do I export ___".
- A **"export routes" decision table** (route → what you get → file format → limits → gotcha).
  Clean HTML (`<table>`), not just prose.
- **First-hand numbered steps** for the primary route.
- **"What the file actually contains"** — name the real fields/files (e.g. `favorites.json`,
  the links-only caveat for other people's content, deleted/private post rot).
- **"What to do with the export" bridge** into Marqly import — and be HONEST about the limits
  from the fact sheet (dates not preserved; JSON→CSV conversion may be needed; auto-tag is Pro).
- A **"best for / when NOT to use Marqly"** note (trust-building; Marqly is not always #1).
- PAA-style **FAQ** (in `faqs:` frontmatter AND on the page) — 4–6 Q&A.
- **5+ contextual internal links** to money pages / cluster: `/bookmark-manager-for-chrome`,
  `/read-it-later`, `/web-highlighter`, `/for-students`, `/for-researchers`, `/for-teachers`,
  `/alternatives/pocket`, `/alternatives/raindrop`, `/migrate/pocket`, `/how-to-organize-bookmarks`,
  and sibling export posts. Varied natural anchors — no exact-match spam.
- **3–8 external citations** to official platform pages (the help/support docs for that platform),
  each "as of Oct 5, 2026".
- 1,300–1,800 words. Voice: direct, practical, no marketing fluff, second person.

## Frontmatter schema (EXACT — copy this shape, valid YAML, double-quote values, no ASCII " inside a double-quoted value)
```
---
title: "How to Export Your <Platform> <Saves> in 2026 (<method>, Step by Step)"
seoTitle: "Export <Platform> <Saves> in 2026 — Marqly"   # keep <= 60 chars
description: "<140-155 chars: the no-native-export gotcha, the route, and what you get>"
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "<primary query, e.g. export tiktok favorites>"
tags:
  - "<tag 1>"
  - "<tag 2>"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Try Marqly free"
lang: "en"
faqs:
  - q: "<question>"
    a: "<answer, factual, 2-4 sentences>"
---
```
Do NOT add `ogImage`, `heroImage`, or `author` (handled by the template). German/other locales are
OUT OF SCOPE here — English only.

## Deliverable
Write each post as `seo/drafts/<slug>.md`. Slug = imperative, keyword-first, e.g.
`export-tiktok-favorites`, `export-linkedin-saved-items`. Return a short list of the slugs +
any `<!-- VERIFY: -->` items you left for the reviewer.
