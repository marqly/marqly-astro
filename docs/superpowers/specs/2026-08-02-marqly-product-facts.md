# Marqly Product Facts — single source of truth for content writers

Every claim in marketing/SEO content MUST come from this sheet. If a fact isn't
here, don't invent it — write around it. Last updated: 2026-09-12.

## What Marqly is

AI bookmark manager: save articles, videos, and links from any browser, let AI
tag and summarize them automatically, then find any save by describing what you
remember — **semantic search by meaning, not keywords**.

- Web app: https://app.marqly.com (free signup, no card required)
- Marketing site: https://www.marqly.com
- Help center: https://help.marqly.com
- Chrome extension: https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc
- Edge add-on: https://microsoftedge.microsoft.com/addons/detail/marqly-%E2%80%93-the-ultimate-boo/gojjglmdginjjpgajdnobmnkmcogngok
- Firefox add-on: https://addons.mozilla.org/en-US/firefox/addon/marqly/
- iOS app: https://apps.apple.com/us/app/marqly-ai-bookmark-manager/id6758905385
- Public boards directory: https://app.marqly.com/discover
- Support: support@marqly.com
- Company line: "© Marqly Labs"

## Pricing (updated 2026-09-12, verified against the live /pricing page)

- **Free tier**: exists; no card required to sign up. Stores up to **2,000
  bookmarks** with **search across the whole library** — every saved bookmark
  is readable and searchable on Free. The old "only the 100 most recent are
  accessible" read-wall was **removed**; do not describe it, and do not
  resurrect it from an older article. Free also includes one-click saving,
  bookmark preview, highlights, boards and collections, read mode, mobile and
  tablet access, and unlimited devices. Highlight **notes are capped at 10**
  on Free.
- **Pro**: **$72/year** (≈ $6/month billed annually) or **$9/month** billed
  monthly. Unlimited bookmarks, AI summaries on every save, semantic +
  full-text search, AI Organizer, Ask (the AI assistant, see below) with MCP
  connected apps, YouTube AI summaries and chat, ChatVault, clipboard cloud sync, broken-link checking,
  unlimited notes, smart sorting, and priority email support.
- **Standing first-year offer: $39 for year one** ("Save 46%"), then $72/year.
  Applied with coupon code **STANDING39**. The visible pricing table presents
  it as an automatic first-year price while the FAQ names the code — both are
  correct; prefer "a standing $39 first-year offer" in copy unless the code
  itself is the point.
- **7-day free trial** of Pro. (Corrected 2026-09-03 — this sheet previously
  said 3-day, which was stale and had propagated across ~50 site pages.)
- **Student discount**: $48 for the first year, for verified students
  (verify a university email at checkout).
- NO lifetime deal.

> **2026-09-12 correction.** This sheet previously stated that the free tier
> exposed only the 100 most recent bookmarks and that *no* coupons existed
> (all deleted 2026-06-20). Both statements were stale and contradicted
> production, where the whole library is searchable on Free and STANDING39 is
> live. Because this sheet is the declared source of truth for every content
> writer, the error had already propagated into `llms.txt` and the pricing
> surface in the opposite direction — see `.seo/truth-ledger.md` for the
> reconciliation and the automated check that now guards it.

> **2026-09-12 correction (Ask).** The "Ask AI about your saves is single-shot"
> paragraph and its never-claim bullet described the pre-Ask feature. Rewritten
> above; the homepage hero, the AI Assistant section, the pricing perk and the
> JSON-LD featureList were updated in the same change.


## Platforms

Chrome, Edge, Firefox, Safari (extensions) · web app · iOS app. **No Android
app** (web app works on Android browsers). No public API. Not self-hostable.
No offline reading mode — don't claim offline support.

## Features (the extension is the core of the product)

- **One-click save** from the toolbar; save with tags; **tab saver** (save all
  open tabs at once); side-panel library (browse/search saves without leaving
  the page).
- **Side panel workspaces (Chrome/Edge)**: Bookmarks, Clipboard, Highlights,
  and AI Chats beside the page currently open. Firefox uses the extension
  popup; Safari does not have the Chrome-style side panel.
- **Clipboard History (Chrome/Edge)**: automatically keeps text copied from
  webpages; search, filters, favorites, pinning, and tags. Pro adds account
  sync for clipboard items. Not available in Firefox or Safari.
- **Marqly Home / New Tab (Chrome/Edge/Firefox)**: library search, draggable
  quick links and folders, backgrounds, weather, notes, to-dos, draggable and
  resizable desktop-style windows, stickies, a dock, and saved sessions. Not
  available in Safari.
- **AI conversation capture (Chrome/Edge/Firefox)**: save conversations from
  ChatGPT, Claude, and Gemini to the dedicated AI Chats workspace. Not
  available in Safari. **Marketing name: "ChatVault"** — the pricing page and
  homepage both use it for this Pro feature, so treat ChatVault / AI Chats /
  AI conversation capture as the same thing and don't describe them as three
  separate features.
- **Tab sessions**: save and close the current set of tabs, reopen saved
  sessions, and undo a session close.
- **AI auto-tagging**: every save is tagged automatically — no manual filing.
- **AI summaries** of saved articles; triage a backlog fast.
- **Semantic search**: "that video about sourdough starters" finds the right
  save without the title. Works across titles, content, highlights, transcripts.
- **Ask — the AI assistant** (Pro; the 7-day free trial applies): a right-hand
  panel in the web app (⌘J / Ctrl+J, the chat-bubble button in the header,
  "Ask about this board" from a board's menu, "Ask about this" on a bookmark).
  It is a real multi-turn chat with threads. Marketing name: "Ask" / "the AI
  assistant". The old "Ask AI about your saves is single-shot" description is
  obsolete as of 2026-09-12.
  - Answers from the user's OWN library — bookmarks, highlights, notes, YouTube
    transcripts — streaming, with numbered citations that open the source and
    a folded "Sources" row. While working it shows tool lines ("Searched your
    library · 7 results", "Read a page").
  - Proactive findings on the empty state: dead links, duplicate URLs
    (exact-URL, see Duplicate handling), forgotten topics, overlapping boards.
  - Can CHANGE the library (tags, boards, rename, trash, merge). Every change
    is a proposal card applied after approval — instant in the library,
    undoable for 30 days. Write modes: Off (read-only) · Ask me first
    (default) · Small changes automatically (small reversible edits;
    deletions still ask).
  - Memory = a few small remembered preferences ("What Ask remembers"),
    visible and clearable. It does NOT remember everything.
  - Connected apps (MCP): the same tools from Claude, ChatGPT, Cursor, VS Code
    via Settings → Connected apps, server https://mcp.marqly.com/ai/mcp; each
    app is read-only by default with an "Allow this app to change my library"
    toggle and Revoke access.
  - Runs on monthly credits — never publish credit numbers or limits.
  - The Ask mark is a chat bubble. Never "sparkles" / a sparkle icon.
- **AI Organizer** (Pro): AI-driven bulk organization of an existing library.
- **Broken-link checking** (Pro); Ask surfaces the same dead links as a finding.
- **YouTube AI card** on every YouTube watch page:
  - AI Summary tab — streaming TL;DR + key sections + books mentioned in the video
  - Chat tab (Pro) — a multi-turn conversation grounded in that video's
    transcript (Ask, above, covers the whole library)
  - Transcript tab — playback-synced, one-click copy
  - Bookmark button in YouTube's action row saves the video **with its transcript attached**
- **Highlighter**: select text on any website, highlight in **6 colors** — free
  on every plan, no gate. Add notes on highlights: **free tier is capped at 10
  notes; Pro is unlimited**.
- **Boards**: group links + highlights; **share a board as a public page** (no
  signup needed to view). Free on every plan, no gate.
- **Read mode**: the reader/clean-view endpoint is free on every plan, no gate.
- **Duplicate handling**: exact-URL matching only (host lowercased, trailing
  slash stripped, tracking params removed, #fragments ignored), free on every
  plan. There is NO AI-powered duplicate detection — never claim one. Ask can
  list exact-URL duplicates as a finding ("116 URLs are saved more than once");
  that is still exact matching, not fuzzy/AI dedup.
- **Save as PDF**: capture any page as a clean PDF matching the on-screen layout
  (lazy-loaded images included), processed locally in Chrome and Edge. Firefox
  and Safari use the browser print-to-PDF flow as a fallback.
- **Detected page media tools (Chrome/Edge)**: when a page exposes downloadable
  video or audio, Marqly can offer it alongside the PDF action. Availability
  depends on the site and media source.
- **Power-user access**: the `my` address-bar keyword, shortcuts for common
  actions, side-panel search/board/tag navigation, and browser bookmark import.
- **X/Twitter bookmark capture** is available from the extension.
- **Imports**: Pocket exports, Raindrop.io collections, standard browser
  bookmark HTML exports (Chrome/Firefox/Edge/Safari all export this format).

## Social proof (verified 2026-08-16 — DO NOT cite star ratings in content)

- ⚠ Live reality: Chrome Web Store ★3.6 (40 ratings, 924 users) · Product Hunt ★1.0
  (1 review) · Firefox AMO ★1 (1 review). The old "★4.8 CWS / ★4.7 PH" numbers are
  FALSE today and were swept out of all site copy on 2026-08-16. Never reintroduce a
  numeric rating claim; if ratings recover, update THIS file first with a dated check.
- Safe verified claims: Product Hunt **#1 Product of the Day** (Marqly 1.0, Sep 3, 2022);
  Marqly 5.0 was #5 of the day (May 31, 2026).
- X/Twitter: @getmarqly · LinkedIn: /company/marqly · Product Hunt: /products/marqly

## Voice & style

- Direct, concrete, benefit-first. No hype words ("revolutionary", "game-changing").
- We are honest about competitors: they win some rows. Credibility ranks.
- Sentence case headings. American English. Present tense.
- Always CTA to https://app.marqly.com (or the Chrome listing when the context
  is "install the extension"). Default CTA label: "Try Marqly free".

## Never claim

- Android app, offline mode (or "offline reading"/"offline copies" in any
  form), public API, self-hosting, team/collab features, browser support
  beyond the four above, SOC2 or other certifications, employee counts,
  funding, AI-powered duplicate detection (dedup is exact-URL matching only).
- Do NOT publish Ask credit numbers or limits; do NOT say Ask "remembers
  everything" or "has memory of your whole library" (memory = a few clearable
  preferences); do NOT call the Ask icon "sparkles". (The old "single-shot, do
  not call it chat" rule is retired — Ask IS a multi-turn chat.)
- The free-tier bookmark quota (**2,000 stored, whole library searchable**,
  above) is the one quota that IS published and SHOULD be stated — this list
  used to tell writers to never state a free-tier quota at all, which is why
  the site went a long time without disclosing it. Don't extend that silence
  to other, still-unpublished numbers (e.g. AI summary/organizer usage
  limits).
- Do NOT publish any numeric rating or review count for Marqly, in copy **or
  in structured data**. See "Social proof" above; a fabricated
  `AggregateRating` (4.8 / 150) shipped in JSON-LD on 801 URLs until
  2026-09-12 and is now removed — do not reintroduce it.
