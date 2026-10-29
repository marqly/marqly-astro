# BRIEF — 2027 SEO program (owner-authorized 2026-10-29)

**This is the single authoritative brief for every writer agent in the 2027 program.**
Read all of it before writing one word. Precedent for why this file must be exact:
`.seo/truth-ledger.md` (2026-10-05) — a fact sheet written for content agents listed
"Pocket export HTML" as Marqly-importable; the error propagated into 14 drafts at once
before gate 13 caught it. **Every number below is diffed against
`docs/superpowers/specs/2026-08-02-marqly-product-facts.md` and `.seo/truth-ledger.md`.**
If this brief ever disagrees with those two files, they win and this file gets fixed.

---

## 1. The demand evidence (why this program exists)

All figures from the real GSC API dataset at `seo/data/gsc/` (window 2026-07-06..2026-10-03,
90 days, service-account pull — VERIFIED, not estimated).

**The "best bookmark" family = 47 distinct queries, 1,054 impressions, ZERO clicks.**
We already rank page 1–3 for them and convert nothing. Highest-value rows:

| Query | Imp | Pos | Currently owned by | Why 0 clicks |
|---|---|---|---|---|
| best bookmark organizer for teachers | 117 | 10.5 | `/for-teachers` | single-vendor persona page, query wants a listicle |
| best bookmark manager for teachers | 116 | 13.2 | `/for-teachers` | same |
| best bookmark manager for educators | 107 | 13.8 | `/for-teachers` | same |
| best bookmark organizer for educators | 104 | 12.3 | `/for-teachers` | same |
| best bookmarking tool | 96 | 26.5 | `/alternatives` + `/compare` | hub pages, no dedicated answer |
| best bookmark organizer for schools | 85 | 19.7 | `/for-teachers` | same |
| best free bookmarks apps | 77 | 17.9 | `/blog/best-free-bookmark-managers-2026` | year-stamped 2026 |
| best bookmark organizer for students | 53 | 24.2 | `/for-teachers` | wrong audience on the page |
| best free bookmark manager | 48 | 23.5 | `/blog/best-free-bookmark-managers-2026` | year-stamped 2026 |
| best online bookmark manager | 37 | 25.9 | `/compare` | hub page |

**Teachers + educators + schools + students sub-cluster ≈ 612 impressions, 0 clicks** —
the largest single untapped block in the dataset. This is Wave 1 (owner-chosen priority).

**Year-stamp liability.** 494 files carry `2026` in the filename; **zero** carry `2027`.
2026-stamped queries already produce 723 impressions. Our single biggest page is
`/blog/best-pocket-alternatives-2026` at **10,521 impressions** — a URL that reads as
stale through all of 2027.

**Locale split of impressions (VERIFIED, page-prefix aggregation):**
`en 78.7% · es 5.4% · ja 3.2% · de 2.4% · it 2.3% · ko 2.0% · pt 1.6% · fr 1.2% · pl 1.0% · tr 0.9% · nl 0.7% · zh 0.6%`
Click-efficiency is inverted: `zh 5.0% · ko 3.8% · ja 3.3%` CTR vs `en 1.2%`.

## 2. Architecture decisions (owner-confirmed 2026-10-29)

1. **Year rollover = new `-2027` slug + 301 from the `-2026` slug.** This is the site's
   own established precedent — `public/_redirects:105-106` already rolled
   `/blog/top-5-bookmark-managers-in-2025` → `/blog/best-read-it-later-apps-2026` and
   `/blog/why-marqly-is-the-best-bookmark-manager-for-2025` → `/blog/marqly-review-2026`.
   Rationale: the traffic sits on the *generic* query ("pocket alternatives", 2,161 imp),
   not the year, so a 301 preserves it while the new slug becomes eligible for the
   `... 2027` query family. URL year and content year must agree.
2. **Evergreen-URL pages are updated in place** — no 301. `/best-bookmark-manager` and
   `/bookmark-manager` have no year in the path; only their `<title>`/H1/body carry one.
   Rewriting those in place preserves all accumulated authority.
3. **All 11 locales get equal depth.** Every new EN post gets all 11 siblings written to
   the full parity bar, not a stub. Owner-chosen over tiered depth.
4. **Wave order:** 1 = teacher/educator/school/student cluster. 2 = money-listicle
   rollover. 3 = head-term pages in place. 4 = net-new gap pages.

## 3. FACT SHEET — Marqly (VERIFIED; never deviate)

Authority: `docs/superpowers/specs/2026-08-02-marqly-product-facts.md` +
`src/data/competitors/marqly.json` (`lastVerified: 2026-09-26`).

### Plans and pricing
- **Free**: no card required. Stores **up to 100 bookmarks**. **Whole library is
  searchable** (keyword) — the old "only the 100 most recent are accessible" read-wall
  was REMOVED; never describe it. Includes one-click save, bookmark preview, highlights
  (6 colors), boards/collections, **public board sharing**, read mode, mobile + tablet
  access, unlimited devices. **Highlight notes capped at 10** on Free.
- **Pro**: **$72/year (≈ $6/month billed annually)** or **$9/month** billed monthly.
  Unlimited bookmarks, AI summaries on every save, semantic + full-text search,
  AI Organizer, Ask (AI assistant) with MCP connected apps, YouTube AI summaries + chat,
  ChatVault, clipboard cloud sync, broken-link checking, unlimited notes, smart sorting,
  priority email support.
- **Standing first-year offer: $49 for year one**, then $72/year. Code **STANDING49**.
  Prefer "a standing $49 first-year offer" unless the code is the point.
- **Student**: **$48 first year** for verified students (university email at checkout).
- **Teams**: $9/seat/month or $72/seat/year (≈$6/seat/month). **Minimum 3 seats** — from
  $27/month or $216/year. One bill paid by the Owner. **Every seat includes all Pro
  features.** Pooled AI: each seat adds 2× an individual Pro's monthly allowance to one
  shared pool, resets monthly, no rollover. Roles Owner/Admin/Member. Web only.
  Invitations hold a seat 7 days. Cancel → read-only to end of paid period, nothing deleted.
- **Discount wording rule (hard):** always ROUND DOWN and always name the baseline.
  $49 vs $72 = **"31% off your first year"** (never 32%). $72 vs $108 = "about 33% vs
  monthly". $49 vs $108 = "54% less than paying monthly (first year)". **Never print a
  bare %.**

### THE NEVER-LIST (each is gate-enforced — violating one fails the build)
- ❌ **Any trial, of any length, in any language.** Retired 2026-09-18. No "3-day trial",
  no "7-day free trial", no `Testphase`/`prueba gratuita`/`essai gratuit`/`prova gratuita`/
  `teste grátis`/`무료 체험`/`無料トライアル`/`免费试用`. Say **"get started free"** or
  "billed when you upgrade".
- ❌ **"Try Marqly free"** and every localized "try for free" CTA form
  (`Marqly kostenlos testen`, `無料で試す`, `免费体验`, `免费试用 Marqly`,
  `Prueba Marqly gratis`, `Prova Marqly gratis`, `Essayer Marqly gratuitement`,
  `Wypróbuj Marqly za darmo`, `Probeer Marqly gratis`, `ücretsiz deneyin`).
  The only approved CTA label is **"Get started free"** (+ its locale equivalents).
  NOTE: `seo/drafts/_BRIEF-export-cluster.md` still says `ctaLabel: "Try Marqly free"` —
  **that brief is stale and would fail gate 2 today. Ignore it.**
- ❌ **2,000 free bookmarks.** The cap is **100**. (The 2,000 figure was retired
  2026-09-25 in a 403-file sweep.)
- ❌ **$39 / STANDING39.** Dead since 2026-09-23. It is **$49 / STANDING49**.
- ❌ **Semantic search, AI auto-tagging, or AI summaries on the Free plan.** All Pro.
  Free = keyword search + highlights. YouTube summaries have a 3-per-month free allowance.
- ❌ **Public API.** ❌ **Self-hosting.** Neither exists.
- ❌ **`AggregateRating` / `ratingValue`** anywhere — copy OR JSON-LD. A fabricated
  4.8/150 shipped on 801 live URLs until 2026-09-12.
- ❌ **Any numeric rating or review count for Marqly.** Live reality is CWS ★3.6 (40
  ratings), Product Hunt ★1.0, AMO ★1 — so cite none. Safe social proof instead:
  **Product Hunt #1 Product of the Day** (Marqly 1.0, Sep 3 2022); Marqly 5.0 was
  #5 of the day (May 31 2026).
- ❌ **Offline overclaims.** Offline reading IS shipped (Pro, **web app + iOS app only**)
  but it is **per-device**, with **no server copy and no cross-device sync**. Videos are
  not cached; images >2 MB and pages >5 MB may be skipped; **Android and the browser
  extensions have no offline reading**; saving/search/AI stay online; **not on Free**.
  Never "synced offline library" / "offline on all your devices" / "offline anywhere
  you sign in".
- ❌ **The stale denial "Marqly has no offline mode."** Now as false as the old ban.
- ❌ **"Marqly imports Pocket HTML" / `ril_export.html`.** Measured **0/261** parse — the
  Pocket HTML preview is `<ul><li>`, not Netscape DL. Marqly imports **`list.csv` from
  inside the Pocket export ZIP**. Gate 13 fires on this in all 12 languages.
- ❌ **AI-powered duplicate detection.** Dedup is **exact-URL matching only** (host
  lowercased, trailing slash stripped, tracking params removed, #fragments ignored), free
  on every plan.
- ❌ **File uploads or any storage allowance.** The Files plane is built but DARK
  (`ENABLE_FILES` off). Never mention "10 GB".
- ❌ **Ask credit numbers or limits.** Deliberately unpublished — invent nothing.
- ❌ **"Ask remembers everything."** Memory = a few small clearable preferences.
- ❌ **Calling the Ask icon "sparkles."** It is a chat bubble.
- ❌ **Bare fabricated test results.** A quantitative test claim ships only with dated
  evidence under `active/logs/benchmark/<run>/`. The 2026-09-12 "1,000-item lab run"
  was generated, not measured, and was retracted. **Do not invent benchmark numbers,
  import-success percentages, or timings.** Cite the real study at
  `/research/bookmark-import-fidelity` instead.

### Import — exactly what transfers (VERIFIED 2026-09-26)
- Formats: browser bookmark **HTML** (Chrome/Edge/Firefox/Safari), **Raindrop HTML**
  (its **JSON** export is NOT accepted), **Pocket `list.csv`** (not the HTML preview),
  generic CSV, `.txt` (not exposed in UI).
- Limits: **10 MB Free / 30 MB Pro**, **10,000 bookmarks per file**, `.html/.htm/.csv`.
- **Preserved:** title, URL, description/note, tags, folder → board structure
  (**flattened to at most 2 board levels**).
- **NOT preserved:** original save dates (imported items take the import date),
  highlights, article text, read/archive status. No dedup runs at import.
- **Auto-tagging the import is Pro** (server-gated since 2026-09-04). Any "Marqly's AI
  auto-tags every imported bookmark" claim must be plan-scoped.

### Export — approved wording (VERIFIED 2026-09-26)
- Real **CSV export button** (sidebar/profile menu → Export). **Free exports the 100 most
  recent**; Pro exports the whole library and can export only what's new since last export.
- CSV carries **URL, Title, Description, Tags — nothing else.** Never promise dates,
  boards, highlights or notes in the CSV.
- For a **complete account copy** (highlights, notes, boards): email
  support@marqly.com. Say "complete copy of your account", not a self-serve button.
- Do NOT reintroduce "email support to get your bookmarks out" as the primary route.

### Feature truth (platform-scoped — get these right)
- **Chrome/Edge/Firefox/Safari** extensions + web app + **iOS** + **Android** app.
- **Side panel workspaces** (Bookmarks, Clipboard, Highlights, AI Chats): **Chrome/Edge
  only.** Firefox uses the extension popup. Safari has no Chrome-style side panel.
- **Clipboard History**: **Chrome/Edge only.** Pro adds account sync for clipboard items.
  Not in Firefox or Safari.
- **Marqly Home / New Tab**: Chrome/Edge/Firefox. **Not Safari.**
- **ChatVault** (= AI Chats = AI conversation capture — ONE feature, three names; never
  describe them as separate): saves conversations from ChatGPT, Claude, Gemini.
  Chrome/Edge/Firefox. **Not Safari.** Pro.
- **Highlighter**: 6 colors, **free on every plan, no gate.** Notes on highlights:
  **10 on Free, unlimited on Pro.**
- **Boards + public board sharing**: **free on every plan, no gate.** A shared board is a
  public web page needing no signup to view. View-only — visitors can't edit. ← *This is
  the single most important teacher-facing fact in the product.*
- **Read mode**: free on every plan, no gate.
- **Save as PDF**: screen-faithful, lazy-loaded images included, processed **locally in
  Chrome and Edge**. Firefox and Safari fall back to browser print-to-PDF.
- **YouTube AI card** on every watch page: Summary tab (streaming TL;DR + key sections +
  books mentioned), **Chat tab (Pro)**, Transcript tab (playback-synced, one-click copy),
  and a bookmark button that saves the video **with its transcript attached**.
- **X/Twitter bookmark capture** from the extension.
- **Ask** (Pro): multi-turn chat, right-hand panel in the web app (⌘J / Ctrl+J). Answers
  from the user's OWN library — bookmarks, highlights, notes, YouTube transcripts —
  streaming, with numbered citations that open the source. Proactive findings on the empty
  state: dead links, exact-URL duplicates, forgotten topics, overlapping boards. Can
  CHANGE the library (tags, boards, rename, trash, merge) via proposal cards applied after
  approval, undoable 30 days. Write modes: Off / Ask me first (default) / Small changes
  automatically. MCP connected apps via Settings → Connected apps
  (`https://mcp.marqly.com/ai/mcp`), read-only by default with a per-app change toggle.
- **AI Organizer** (Pro): AI-driven bulk organization of an existing library.
- **Broken-link checking** (Pro).
- **Tab saver** (save all open tabs at once) + **tab sessions** (save/close/reopen/undo).

### Voice
Direct, concrete, benefit-first. **No hype words** ("revolutionary", "game-changing").
We are honest about competitors — **they win some rows; say so.** Credibility ranks.
Sentence case headings. American English. Present tense. Default CTA → `https://app.marqly.com`.

### The logo wall rule
Homepage shows Google, Apple, Stripe, Cloudflare, Shopify, Tesla, BBC, Reuters.
Basis: owner states there are actual users employed there. Copy says **where users work** —
**NEVER "trusted by" or "used by [company]"** (that implies endorsement/partnership).

---

## 4. FACT SHEET — competitors

**Single source: `src/data/competitors/*.json`.** Never write a competitor price from
memory. Read the JSON. If a number you need is absent, write around it or label it UNKNOWN.

Snapshot as of this brief (`lastVerified` per file — mostly `2026-08-02`, Marqly
`2026-09-26`, Raindrop `2026-09-12`, mymind `2026-10-05`, Pocket `2026-10-06`):

| Tool | Free | Paid | AI features | Self-host | Offline |
|---|---|---|---|---|---|
| **Marqly** | ✅ 100 bookmarks | $72/yr (≈$6/mo) or $9/mo | autoTag+semantic+summaries+yt+chat | ❌ | ✅ Pro, web+iOS |
| Raindrop.io | ✅ generous | $28/yr or $3.25/mo Pro | ❌ none | ❌ | ❌ |
| Readwise Reader | ❌ | $9.99/mo billed annually ($119.88/yr) | summaries+yt+chat | ❌ | ✅ |
| Instapaper | ✅ | $5.99/mo or $59.99/yr Premium | ❌ none | ❌ | ✅ |
| Karakeep | ✅ self-host free | Cloud paid | autoTag+semantic+summaries | ✅ | ✅ |
| Linkwarden | ✅ | Cloud $3/mo per user billed yearly | autoTag | ✅ | ✅ |
| mymind | ✅ | Bookmarker $4.99/mo; Student option | autoTag+semantic+summaries | ❌ | ❌ |
| Matter | ✅ | $8/mo or $60/yr (web) | yt | ❌ | ✅ |
| Wallabag | ✅ | €11/yr on wallabag.it | ❌ | ✅ | ✅ |
| Notion Web Clipper | ✅ clipper free | Notion Plus $10/member/mo | semantic+summaries+chat | ❌ | ✅ |
| Evernote Web Clipper | ✅ | Starter $14.99/mo or $99/yr | semantic+summaries+chat | ❌ | ✅ |
| Diigo | ✅ | Standard $40/yr | ❌ | ❌ | ❌ |
| Pinboard | ❌ | $22/yr, or $39/yr with archiving | ❌ | ❌ | ❌ |
| Obsidian Web Clipper | ✅ | — | summaries | ✅ | ✅ |
| Glasp | ✅ | Pro $15/mo or $150/yr | autoTag+summaries+yt+chat | ❌ | ❌ |
| LINER | ✅ | Pro $17.99/mo or $14.99/mo annual | summaries+yt | ❌ | ❌ |
| Weava | ✅ | $3.99/mo annual or $7/mo | ❌ | ❌ | ❌ |
| Toby | ✅ | Productivity $4.50/member/mo | autoTag | ❌ | ❌ |
| Workona | ✅ | Pro from $7/mo annual | ❌ | ❌ | ❌ |
| OneTab | ✅ | — | ❌ | ❌ | ❌ |
| Session Buddy | ✅ | — | ❌ | ❌ | ❌ |
| GoodLinks | ❌ | $9.99 one-time (+ optional $4.9/yr) | summaries | ❌ | ✅ |
| Anybox | ✅ | $14.99/yr, $1.99/mo, or $39.99 lifetime | ❌ | ❌ | ✅ |
| Pinterest | ✅ | — | ❌ | ❌ | ❌ |
| **Pocket** | — | **SHUT DOWN** | — | — | — |
| **Omnivore** | — | **SHUT DOWN** | — | — | — |

**Pocket shutdown (VERIFIED, cite it):** Mozilla shut Pocket down **July 8, 2025**; the
official export window closed **November 12, 2025**. Source:
`https://support.mozilla.org/en-US/kb/future-of-pocket`. Mozilla says remaining data was
queued for permanent deletion from that date. **A "Pocket alternative" article in 2027 is
about rescuing an old export, not switching away from a live service.**

**A live price-verification pass is running as of 2026-10-29.** If a writer is told a
price changed, the change lands in `src/data/competitors/*.json` (with a fresh
`lastVerified`) FIRST, then in copy. Never hand-edit a price in an article only.

---

## 5. Authoring recipe — EN blog post (follow exactly)

Corpus is **543 posts, all plain `.md`. There is not one `.mdx` file. Use Markdown only,
no MDX components, no `import` statements.**

### 5.1 Path and frontmatter
File: `src/content/blog/<slug>.md` (EN sits **flat**; never in a subdirectory).

```yaml
---
title: "The N Best <Thing>s in 2027 (<Differentiator>)"   # becomes the H1; no length limit
seoTitle: "<Query-first title> — Marqly"                   # REQUIRED. Must be <= 60 chars.
description: "<140-155 chars, answer-first>"               # meta desc + visible standfirst
pubDate: 2026-10-29                                        # bare ISO, UNQUOTED — the REAL date
updatedDate: 2026-10-29                                    # optional; drives dateModified + sitemap lastmod
category: "Comparisons"                                    # free string: Guides|Comparisons|Reviews
targetKeyword: "<primary query>"
tags:
  - "<tag 1>"                                              # 4-5 lowercase phrases
  - "<tag 2>"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Get started free"                               # NEVER "Try Marqly free"
faqs:
  - q: "<PAA question>"
    a: "<2-4 sentence answer-first reply>"                 # 4-7 pairs; markdown links OK
heroImage: ../../assets/blog/<slug>.png                    # OPTIONAL — only if the file exists
heroAlt: "<title> — illustration"
ogImage: "https://www.marqly.com/og/<slug>.png"            # OPTIONAL — gate 14 requires the PNG to exist
---
```

### 5.1.1 THE DATE RULE (hard — this was nearly shipped wrong)

**`pubDate` and `updatedDate` are the REAL publication date. Never a future date.**

"Best X **2027**" published in **October 2026** is the correct and standard play: the year
lives in the `title`/`seoTitle`/H1/slug, and the page is indexed and aged *before* the year
turns, which is exactly why it wins the `… 2027` queries in January. Writing
`pubDate: 2027-01-14` in October 2026 is a **fabricated date** — it would put a future
`dateModified` into the JSON-LD and a future `<lastmod>` into the sitemap, which is the
same class of invention as the retracted benchmark numbers and the fabricated
`AggregateRating`. Google also treats future-dated content oddly.

So: **today's real date in `pubDate`; 2027 in the title, slug and body framing.** Body
verification stamps use the real month ("verified against official sources in October 2026"),
never a 2027 stamp.

### 5.1.2 No date-bump without a substantive edit

A year rollover is **not** a find-and-replace of `2026` → `2027`. The safety rail in
`seo/README.md` forbids date-bumps without substantive edits, and a digit swap is exactly
that. A legitimate 2027 rollover must actually change something a reader would notice:
re-verify prices against `src/data/competitors/*.json`, drop tools that shut down, add the
ones that matter now, re-rank on current evidence, and re-frame the year's context. If you
cannot name the substantive change, do not roll the page.


- There is **no** `author`, `noindex`, `robots`, or `slug` field. Authorship is emitted by
  `BlogPostLayout.astro:141-153` automatically (Amro Shahbari + a `/how-we-test` link).
- `seoTitle` **must be set explicitly** or `title` gets silently clamped to 60 chars.
- YAML trap that has broken a build before (`CLAUDE.md` 2026-08-17): an ASCII `"` inside a
  double-quoted value terminates the string early. German closing quotes are `“` (U+201C).
  A frontmatter parse error makes `astro build` **silently skip the whole content sync** —
  it does not print the word "error".

### 5.2 Body skeleton (invariant across the corpus)
1. **Answer-first bold lead paragraph**, no H2 above it. First sentence is the direct
   answer with the winner bolded. `**The best bookmark manager for teachers in 2027 is …**`
2. **2–4 context paragraphs**, with an internal link in the first or second.
3. **Methodology / disclosure blockquote** — required for every comparison post:
   ```
   > **How this list was compiled.** We compare <criteria> using dated competitor fact
   > sheets and linked official sources. Marqly publishes this article and is one of the
   > products discussed. <Link to /how-we-test and, where relevant,
   > /research/bookmark-import-fidelity>.
   ```
4. **Comparison table** (GitHub pipe table) before the numbered entries. Marqly row
   **first and bolded**. Cell vocabulary: ✅ / ❌ / ⚠️ / `—`. A prose caveat paragraph
   follows naming the verification date.
5. **One H2 per product, in rank order:** `## N. <Product> — best for <job>`. Each gets
   1–2 prose paragraphs → a **"Who it's best for:"** paragraph that names who should
   *skip* it → `- **Pros:** / - **Cons:** / - **Price:**` bullets.
6. **Decision section** — `## Which <X> should you choose?` — answer-first paragraph then
   a bolded list mapping pain → product.
7. **Migration / how-to section** with numbered steps where relevant.
8. **Closing "why it matters" section** ending in the CTA.

- **Never write `# Heading`** in the body — the layout emits the H1 (gate 3 counts H1s).
- **Never write `## FAQ`** — the layout emits it from `faqs:` frontmatter.
- Do NOT author the CTA card; `BlogPostLayout.astro:180-184` renders it from
  `ctaUrl`/`ctaLabel`. Inline body CTAs are yours: `[Get started free →](https://app.marqly.com)`.

### 5.3 Size targets (the parity metric is measured on these)
**1,500–2,700 `units()` and 7–13 `##` H2s.** Calibration:
`best-pocket-alternatives-2026` = 2,621 units / 13 H2s; `best-free-bookmark-managers-2026`
= 1,553 units / 7 H2s. `units()` counts body tokens after stripping frontmatter, code,
comments, images and tags (links reduce to anchor text) — so **`faqs:` answers do NOT count
toward parity.** A locale sibling must reach **0.8× the EN units AND 0.8× the EN H2 count**.

## 6. Localization recipe

- File: `src/content/blog/<lang>/<localized-slug>.md` with **`lang: "<lang>"` set
  explicitly**. The directory and the `lang` value MUST agree, or the URL/canonical drifts.
- `heroImage` from a locale subdir needs **three** `../`: `../../../assets/blog/<file>.png`.
- **OMIT `ogImage` on locale posts.** `LandingLayout.astro:54` falls back to
  `https://www.marqly.com/og/marqly-bookmark-manager-2026-09.png`, which exists, so gate 14
  passes. Inventing a localized `/og/<slug>.png` is a **known repeated failure** —
  `.seo/truth-ledger.md` records 104 broken localized OG refs being stripped.
- Slugs are **localized natively**, ASCII-only, no diacritics, hyphen-separated:
  `es: alternativas-a-pocket-2027`, `de: pocket-alternativen-2027`,
  `pl: alternatywy-pocket-2027`. `ja`/`zh`/`ko` may reuse the EN slug verbatim or a
  romanization (`pocket-daitai-2027` / `pocket-tidai-2027` / `pocket-daeche-2027`).
- **Filename must equal the last slug segment.**
- Localize `category`, `tags`, `ctaLabel`, and every `faqs` entry. Preserve the EN `pubDate`.
- **Transcreate, do not translate literally.** A stub is pruned; a machine-literal rendering
  of an idiom is worse than a native rewrite. Match EN's argument structure and H2 count.
- Add **exactly one row** to `TRANSLATIONS` in `src/i18n/translations.mjs`, keyed by the
  **EN path**, value = the 11 localized full paths. Lookup is bidirectional, so one row
  wires all 12 pages. **Do not touch `routes.ts`.**
- After pairing, **re-check indexability of every cluster member** — pairing a Tier-2/3
  locale that was previously unpairable immediately subjects it to the 0.8 bar
  (`.seo/truth-ledger.md`, 2026-10-05).

**Tiers** (`src/lib/content-quality.mjs:23-26`): Tier 1 `ja ko de es` = always indexable.
Tier 2 `fr pt it` and Tier 3 `zh pl tr nl` = indexable **iff** units ≥ 0.8×EN **and**
h2 ≥ 0.8×EN. Below bar → auto-noindex + stripped from the sitemap + stripped from all 11
siblings' hreflang clusters.

## 7. Gate checklist — what will fail your page

`npm run seo:check` = 25 assertions over every built page. Ranked by how likely a new
listicle is to trip each:

1. **Gate 7 — internal links must resolve.** Every `/blog/…`, `/compare/…`, `/migrate/…`,
   `/tools/…`, `/for-…`, `/alternatives/…`, `/research/…` you write must already exist in
   `dist/client/`. **The #1 cause of a red batch.** Verify before linking.
2. **Gate 3 — no duplicate `<title>` across pages.** `<title>` = `seoTitle ?? title`. Two
   posts sharing a `seoTitle` fail the whole build. A 20-post year-stamped batch collides
   easily ("Best X 2027: N Real Options" twice = FAIL). Make each unique.
3. **Gate 2 — truth.** See the NEVER-LIST in §3. Fires in all 12 languages.
4. **Gate 13 — Pocket HTML import claim.** Fires in all 12 languages.
5. **Gate 6 — every hreflang target must exist in the build.** One mistyped slug fails all
   12 cluster members.
6. **Gate 14 — every referenced `/og/*.png` must exist in `public/`.**
7. **Gate 11 — parity consistency.** You cannot "make it pass" by editing content; you pass
   by hitting the 0.8 bar or by leaving the row out of `TRANSLATIONS`.
8. **Gate 1 — no `AggregateRating`/`ratingValue`.** Includes an "our rating" table column.
9. **Gate 12 — `seoTitle` ≤ 60, `description` ≤ 160** on indexable pages. The layout clamps
   so you get silent truncation rather than a red gate — author within limits yourself.
10. **Gate 3 — exactly one H1, one `<main>`, a canonical, a title, a meta description.**

Also required after content lands: `node active/scripts/gen-og-cards.mjs` (EN blog cards →
`public/og/<slug>.png`; **EN-only, non-recursive**), then `node active/scripts/check-links.mjs`.

## 8. Safety rails (program-wide, non-negotiable)

- **No slug change without a 301** logged in `seo/data/redirects.csv` AND `public/_redirects`.
  The `/*/  /:splat  301` catch-all **MUST STAY LAST** in `_redirects` (first-match-wins).
- **Never touch a top-3 ranking URL except for links/fixes.**
- **No date-bumps without substantive edits.** `updatedDate` must reflect a real change —
  the sitemap `lastmod` is derived from it and Google stops trusting fake freshness.
- **Every edited URL gets a before/after row** in `seo/data/changes-log.csv`.
- **Every new page names its info-gain element in its brief before writing.**
- Claims are labelled **VERIFIED / ASSUMED / UNKNOWN**. Never present ASSUMED as VERIFIED.
  `<!-- VERIFY: -->` reviewer markers must be stripped before promotion (they leaked to dist once).
- Sandbox: ephemeral work in `active/tmp/`, research outputs in `active/logs/`.
  **Never dump generated files into the project root.**

## 9. Wave 1 page briefs — teacher / educator / school / student

Each names its info-gain element, as required.

### 9.1 `/blog/best-bookmark-managers-for-teachers-2027`
- **Primary query:** best bookmark manager for teachers (116 imp, pos 13.2, **0 clicks**)
- **Also targets:** best bookmark organizer for teachers (117, pos 10.5), best bookmark
  manager for educators (107, pos 13.8), best bookmark organizer for educators (104, pos 12.3)
  — **444 combined impressions, 0 clicks.**
- **Current owner:** `/for-teachers`, a single-vendor persona page. **That is the whole
  problem:** a "best X for Y" query is a comparison intent, and a product pitch earns
  page-2 positions with zero clicks.
- **Info-gain element:** a genuine multi-tool comparison scored on the four things teachers
  actually constrain on — (a) **can students open the collection with no account?**
  (public board sharing), (b) **video/YouTube handling** for flipped lessons,
  (c) **filing overhead** during a planning binge (auto-tagging vs manual folders),
  (d) **whether it survives a school year** — i.e. retrieval in August for a unit you
  taught in November. No page we own answers these comparatively today.
- **Honest placement:** Marqly wins (a), (b), (c). It **loses** on district-wide
  admin/SSO (it has none — see the Teams limits: no SSO/SCIM, no per-board permissions,
  web-only) and on free-for-education pricing (there is **no published educator discount**;
  the only discount is the $48 verified-**student** year). Say both plainly. Tools that
  beat it for a classroom: **Notion Web Clipper** if the school already runs Notion,
  **Pinterest** for visual/display subjects, **Diigo** for annotation-based classes.
- **Required FAQ coverage:** "Do students need accounts to view a shared board?" (No —
  public boards are view-only pages) · "Is Marqly free for teachers?" (free tier, no card;
  **no educator discount**; $48 first year is for verified *students*) · "How does it
  handle YouTube for lessons?" · "Can a school deploy it for a whole district?" (No SSO/
  SCIM; Teams is min 3 seats, web only, one Owner-paid bill).
- **Internal links (verify each exists):** `/for-teachers`, `/for-students`,
  `/bookmark-organizer`, `/compare/marqly-vs-notion-web-clipper`,
  `/compare/marqly-vs-evernote-web-clipper`, `/alternatives/pinterest`, `/teams`,
  `/how-we-test`, `/bookmark-manager`.
- **Do NOT cannibalize:** `/for-teachers` stays as the persona lander and links *to* this
  post. Different intent (product fit vs tool comparison).

### 9.2 `/blog/best-bookmark-organizers-for-schools-2027`
- **Primary query:** best bookmark organizer for schools (85 imp, pos 19.7, 0 clicks);
  secondary best bookmark manager for schools (3 imp, pos 27).
- **Distinct audience from 9.1:** the **department / IT / librarian** buying for a group,
  not one teacher planning a unit. Must address shared curation, staff turnover, and
  what happens when a licence lapses.
- **Info-gain element:** a **deployment-reality table** — seats minimum, billing model,
  admin roles, SSO/SCIM, what survives cancellation, and web-vs-native reach. This is the
  question schools actually ask and no page of ours answers it.
- **Honest placement:** Marqly Teams is **$9/seat/mo or $72/seat/yr, minimum 3 seats,
  one Owner-paid bill, every seat includes all Pro features, web only, roles
  Owner/Admin/Member, no SSO/SCIM, no per-board permissions, no invoices/bank transfer,
  USD only, no trial.** On cancel the team goes **read-only** to the end of the paid
  period and **nothing is deleted** — a genuinely strong answer for a school worried about
  a lapsed licence. Marqly **loses** to Google Workspace-adjacent tooling and to Notion for
  schools already on an education plan.
- **Internal links:** `/teams`, `/for-teachers`, `/compare/marqly-vs-notion-web-clipper`,
  `/pricing`, `/how-we-test`.

### 9.3 `/blog/best-bookmark-managers-for-students-2027`
- **Primary query:** best bookmark organizer for students (53 imp, pos 24.2, 0 clicks).
- **Distinct audience:** the student, not the institution. Price sensitivity dominates.
- **Info-gain element:** a **cost-of-a-degree-lens** comparison — what each tool costs over
  a 4-year degree, what the student discount actually is, and which free tiers survive
  a real citation workload. Plus: **citation-time retrieval** (finding a source weeks
  later by describing it) as the decisive criterion.
- **Honest placement:** Marqly's **$48 verified-student first year** (university email at
  checkout) is a real advantage — but the Free tier is **100 bookmarks with keyword search
  only, and ALL AI is Pro**, so a student who needs semantic search must pay. Say that
  plainly. **Raindrop.io** wins the free tier outright (unlimited bookmarks and collections,
  no time limit). **Zotero** is not in our data layer — do **not** invent facts about it;
  either omit it or label any mention UNKNOWN. **Notion** wins if the student already has a
  free education Plus plan.
- **Internal links:** `/for-students`, `/for-phd-students`, `/for-academics`,
  `/for-researchers`, `/web-highlighter`, `/compare/marqly-vs-glasp`, `/how-we-test`.

### Wave 1 cross-cutting rules
- All three must **cross-link each other** and link back to `/for-teachers`,
  `/for-students`, `/bookmark-manager`, and `/best-bookmark-manager`.
- All three carry the methodology blockquote (§5.2 step 3) and a dated verification stamp
  in the closing italic line, e.g.
  `*Prices and plan limits verified against official sources in October 2026. We'll update this guide as plans change.*`
- All three get **distinct `seoTitle` values ≤ 60 chars** (gate 3).
- **No fabricated classroom statistics.** No "87% of teachers…" — we have no such study.
  The only measured asset we own is `/research/bookmark-import-fidelity`.
