# Marqly Product Facts — single source of truth for content writers

Every claim in marketing/SEO content MUST come from this sheet. If a fact isn't
here, don't invent it — write around it. Last updated: 2026-09-15.

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
- Android app: https://play.google.com/store/apps/details?id=com.marqly.android
- Public boards directory: https://app.marqly.com/discover
- Support: support@marqly.com
- Company line: "© Marqly Labs"

## Pricing (updated 2026-09-12, verified against the live /pricing page)

- **Free tier**: exists; no card required to sign up. Stores up to **100
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
- **Standing first-year offer: $49 for year one** ("Save 32%"), then $72/year.
  Applied with coupon code **STANDING49**. The visible pricing table presents
  it as an automatic first-year price while the FAQ names the code — both are
  correct; prefer "a standing $49 first-year offer" in copy unless the code
  itself is the point.
  > **2026-09-23 move.** Changed from $39/STANDING39 ("Save 46%") today in
  > `565e8ae`/`b005a26`. This sheet had not been updated by that pass — corrected
  > here. Production `/pricing` rendered $39 until the deploy lands and requires
  > the STANDING49 promotion in Stripe (+ `STANDING_OFFER_CODE/…_CENTS` in app
  > config) before $49 claims are true live. Verify against live checkout before
  > quoting any number.
- **NO free trial — of any length.** (Retired 2026-09-18: Pro is a hard paywall,
  billed the moment someone upgrades; cancel anytime, the account then continues
  on the free plan with every bookmark. Before that this sheet said 7-day, and
  before 2026-09-03 it said 3-day — both are now wrong on every page that still
  carries them. The free plan is the evaluation path; say "get started free" or
  "billed when you upgrade", never "trial".)
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

Chrome, Edge, Firefox, Safari (extensions) · web app · iOS app · Android app.
No public API. Not self-hostable.

> **2026-09-26 correction (offline).** The "no offline reading mode" rule was
> stale. Offline reading **ships** as a Pro feature in the web app and the iOS
> app, verified first-hand against the production code
> (`marqly_2026_prod`: `apps/web/public/sw.js`, `lib/storage/offlineCache.ts`,
> `components/bookmarks/CacheButton.tsx`; `marqly-mobile`:
> `OfflineCoordinator.swift`, `OfflineContentManager.swift`) and the live help
> center (`help.marqly.com/account/offline-mode`, HTTP 200 on 2026-09-26).
> Approved wording + hard limits in the Offline section below.

### Offline reading — approved wording (verified 2026-09-26)

- Claimable: "Offline reading is on Pro: Marqly caches supported pages you
  mark for offline in the **web app** or the **iOS app**, so you can read them
  with no connection."
- Mandatory qualifiers when the page goes into detail (FAQ, persona pages,
  the offline FAQ itself): it is **per-device** — each device keeps its own
  cached copies; there is **no server-stored offline copy and no cross-device
  sync** of offline selections; **videos are not cached**, images > 2 MB and
  pages > 5 MB may be skipped; **the Android app and the browser extensions do
  not have offline reading** today; saving, search, and AI stay online.
- Never claim: "synced offline library", "offline on all your devices",
  "offline anywhere you sign in", Android/extension offline.
- Free-plan answer to "does it work offline": no — offline reading is Pro.
- Old "save-as-PDF is the only offline keepsake" framing stays true but must
  no longer be justified by a nonexistent "no offline mode at all".

### Export — approved wording (verified 2026-09-26)

- The app has a real **CSV export button** (sidebar/profile menu → Export).
  Free plan exports the **100 most recent bookmarks**; Pro exports the whole
  library and can export only what's **new since the last export**.
- The CSV carries **URL, Title, Description, Tags** — nothing else. Never
  promise dates, boards, highlights or notes in the CSV.
- For a **full account copy** (highlights, notes, boards, etc.) the path is
  still email to support@marqly.com — say "complete copy of your account",
  not a self-serve button.
- The previous "export is manual only" rule was stale; `export.route.ts` +
  `ExportModal.tsx` in the prod repo shipped it, and
  `help.marqly.com/account/export-data` is live. Do **not** reintroduce
  "email support to get your bookmarks out" as the primary route.

### Import — what actually transfers (verified 2026-09-26)

- Formats: browser bookmark **HTML** (Chrome/Edge/Firefox/Safari), **Raindrop
  HTML** (its JSON export is NOT accepted), **Pocket** export HTML/CSV, generic
  CSV, `.txt` (not exposed in UI). Limits: 10 MB free / 30 MB Pro, 10,000
  bookmarks per file, `.html/.htm/.csv`.
- Preserved: title, URL, description/note, tags, folder → board structure —
  **flattened to at most 2 board levels**.
- NOT preserved: original save dates (imported items take the import date —
  the parser reads ADD_DATE but the insert discards it), highlights, article
  text, read/archive status. No dedup runs at import (duplicates come through;
  the `/tools` duplicate finder is the cleanup step).
- Auto-tagging the import is **Pro** (it has been gated server-side since
  2026-09-04). Free imports keep their own tags; the claim "Marqly's AI
  auto-tags every imported bookmark" must be plan-scoped everywhere it appears.

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
- **Ask — the AI assistant** (Pro): a right-hand
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

## Marqly Teams — approved wording (went public 2026-09-25, owner flip)

- $9 per seat per month, or $72 per seat per year (≈$6/seat/month). USD only.
  Minimum 3 seats — from $27/month or $216/year. One bill, paid by the Owner.
  No trial — billed when the Owner upgrades.
- **Every seat includes all Pro features**, plus a shared team workspace:
  shared boards and bookmarks; the team saves, organises, and searches
  together. Members' personal libraries and personal plans are separate and
  unchanged; Pro users can join or start a team.
- Pooled AI: each purchased seat adds 2× an individual Pro's monthly AI
  allowance to one shared team pool; resets monthly; no rollover.
- Roles (every role occupies a seat): Owner — billing, ownership transfer,
  deletion; Admin — members, invitations, publishing, settings, no billing;
  Member — save, edit, organise, and invite only if the team allows it.
- Email invitations hold a seat until accepted, revoked, or expired (7 days).
  Activity log for Owners/Admins.
- Cancel any time: the team works to the end of the paid period, then turns
  read-only; nothing is deleted; resume or restart with the same members and
  content.
- **Web only** (app.marqly.com). Personal public board links stay view-only;
  team collaboration lives in the Teams workspace.
- Surfaces: `/teams`, Teams pricing card (home + /pricing), nav link. Kill
  switch: `TEAMS_PUBLIC` in `src/components/landing/data.ts`.

## Never claim

- Public API, self-hosting, browser support beyond the four above,
  SOC2 or other certifications, employee counts, funding, AI-powered duplicate
  detection (dedup is exact-URL matching only), **file uploads or any storage
  allowance** (the Files plane is fully built in the prod repo but **dark** —
  `ENABLE_FILES` off, prod changelog 2026-09-26 — so "10 GB" remains
  unclaimable today; the Raindrop-sourced number must still never appear).
- **Offline overclaims** (the capability itself became claimable 2026-09-26 —
  see the Offline approved wording above): never claim server-stored offline
  copies, cross-device offline sync, Android or extension offline reading, or
  offline on the free plan. "Offline mode is synced to every device" is the
  new version of the old ban — the truth is narrower than a one-liner.
- RESOLVED (2026-09-26, was the offline verification queue): offline was
  verified against prod code + live help center, not a third-party rumor.
  Spec, FAQ, marqly.json, comparison tables, EN lander tails and the locale
  tails were flipped together; `seo-check.mjs` gate 2 now bans BOTH the stale
  site-wide denial ("Marqly has no offline mode") and the overclaims above.
- Team/collaboration claims beyond the Teams approved wording below (no
  per-board permissions, no Viewer/Guest roles, no SSO/SCIM, no team MCP/
  assistant access, no extension save-to-team, no mobile Teams, no custom
  sharing domains, no invoices/bank transfer, no non-USD pricing, no trial).
- Do NOT publish Ask credit numbers or limits; do NOT say Ask "remembers
  everything" or "has memory of your whole library" (memory = a few clearable
  preferences); do NOT call the Ask icon "sparkles". (The old "single-shot, do
  not call it chat" rule is retired — Ask IS a multi-turn chat.)
- The free-tier bookmark quota (**100 stored, whole library searchable**,
  above) is the one quota that IS published and SHOULD be stated — this list
  used to tell writers to never state a free-tier quota at all, which is why
  the site went a long time without disclosing it. Don't extend that silence
  to other, still-unpublished numbers (e.g. AI summary/organizer usage
  limits).
- Do NOT publish any numeric rating or review count for Marqly, in copy **or
  in structured data**. See "Social proof" above; a fabricated
  `AggregateRating` (4.8 / 150) shipped in JSON-LD on 801 URLs until
  2026-09-12 and is now removed — do not reintroduce it.
