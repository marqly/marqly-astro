# Directory / review-platform copy pack

Ready-to-paste text for listing forms. **Every claim here is sourced from
`docs/superpowers/specs/2026-08-02-marqly-product-facts.md`** (single source of truth), the
import-fidelity study, and `src/lib/schema.ts`. Nothing is invented, and nothing here is a rating.

## Hard rules for these forms

- **No star ratings, no review counts** — not in descriptions, not in "social proof" fields, not in
  schema. Live store ratings are currently poor and citing them is off-brand and self-defeating
  (fact sheet §Social proof; the fabricated `AggregateRating` that shipped on 801 URLs was removed
  2026-09-12 — do not reintroduce it in any form).
- **Never write "free trial".** There is no trial of any length (retired 2026-09-18). Use "get started
  free" or "billed when you upgrade".
- **Never claim we import Pocket's HTML file.** Approved: browser Netscape HTML + Pocket's `list.csv`
  from inside the export ZIP. ⚠ The fact sheet's §Import line ("Pocket export HTML/CSV") is stale
  relative to `.seo/truth-ledger.md` batch 7b (measured 0/261) and `seo-check.mjs` gate 13 — use
  `list.csv` in outreach copy and fix the sheet separately, not here.
- **Don't upload logos/screenshots to a directory that claims a licence to your marks on signup.**
  Use our own assets; check the T&C line before agreeing.

## Store + property URLs (quote exactly)

From `src/lib/schema.ts` `STORE_URLS` (lines 15–23; Chrome constant line 9–10):

- **Chrome:** `https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc`
- **Firefox:** `https://addons.mozilla.org/en-US/firefox/addon/marqly/`
- **iOS:** `https://apps.apple.com/us/app/marqly-ai-bookmark-manager/id6758905385`
- **Android:** `https://play.google.com/store/apps/details?id=com.marqly.android`

Also verified (fact sheet §What Marqly is / `STORE_URLS`): website
`https://www.marqly.com` · app `https://app.marqly.com` · help `https://help.marqly.com` · support
`support@marqly.com` · Product Hunt `https://www.producthunt.com/products/marqly` · X
`https://x.com/getmarqly` · LinkedIn `https://www.linkedin.com/company/marqly` · Edge add-on
`https://microsoftedge.microsoft.com/addons/detail/marqly-%E2%80%93-the-ultimate-boo/gojjglmdginjjpgajdnobmnkmcogngok`

Website field for these forms: `https://www.marqly.com`. CTA destination: `https://app.marqly.com`.

## Descriptions (pick by field length)

**One-liner (≤60 chars — PH tagline, directory short name)**
> AI bookmark manager: save once, find by meaning.
*(48 chars)*

**Short (≤160 chars — meta-style fields, G2/Capterra summaries)**
> Marqly is an AI bookmark manager. Save articles, videos and links from any browser; AI tags and
> summarizes them; find any save by describing it.
*(144 chars)*

**Medium (≤500 chars — AlternativeTo, Slant, TAAFT, Futurepedia)**
> Marqly is an AI bookmark manager for the things you save and never find again. One-click save
> articles, videos and links from Chrome, Edge, Firefox or Safari; AI summarizes and tags each save
> automatically (auto-tagging on import is a Pro feature); and semantic search lets you find any
> bookmark by describing what you remember instead of guessing keywords. Free plan with no card
> required, Pro for unlimited bookmarks. Browser extension, web app, iOS and Android.
*(464 chars)*

**Long (~1,525 chars / 237 words — G2 / Capterra / SaaSHub "about", PH description)**
> Marqly is an AI bookmark manager built around one problem: saving is one click, finding is a coin
> flip. Save articles, videos and links from the browser toolbar (or every open tab at once), and
> Marqly summarizes the page and organizes it for you. Then search by meaning — "that piece about
> habit tracking from last spring" — with semantic search alongside full-text search, and ask
> questions across your library with Ask, a multi-turn AI assistant.
>
> Boards and collections group saves, highlights and notes attach to pages, read mode strips the
> clutter, and offline reading on Pro caches pages you mark in the web or iOS app (per-device; no
> server-stored offline copy). Clipboard cloud sync keeps saves flowing across devices, and broken-link
> checking flags dead references. Teams is a shared team workspace on Pro features per seat, web only.
>
> It runs as browser extensions (Chrome, Edge, Firefox, Safari), a web app, and native iOS and Android
> apps. Free plan: no card required, up to 100 stored bookmarks with search across the whole library;
> notes capped at 10. Pro: unlimited bookmarks, AI summaries on every save, semantic search, AI
> Organizer, Ask with MCP connected apps, YouTube summaries and chat, offline reading, unlimited notes.
>
> Getting in is measured, not guessed: our published import-fidelity study ran real, publicly published
> Pocket, Raindrop and Chrome exports through our importer and reports what loads and what doesn't —
> including where it fails. https://www.marqly.com/research/bookmark-import-fidelity

## Feature bullets (form field lists — use only what fits)

- One-click save from the toolbar; save with tags; tab saver (all open tabs at once)
- AI summaries on every save (Pro); side-panel library so you browse without leaving the page
- **Semantic search — find a save by describing it, not by keyword** (Pro)
- Ask: multi-turn AI assistant over your saved library, with MCP connected apps (Pro)
- AI Organizer, smart sorting, broken-link checking, clipboard cloud sync (Pro)
- Boards and collections, highlights and notes, read mode
- Offline reading on Pro — web app + iOS, per-device (no cross-device offline sync, no Android or
  extension offline)
- Import: browser HTML (Chrome/Edge/Firefox/Safari), Raindrop HTML, Pocket `list.csv`, generic CSV.
  Folder structure flattens to at most 2 board levels; original save dates are **not** preserved
- Export: CSV button with URL, Title, Description, Tags (free = 100 most recent; Pro = whole library +
  new-since-last-export). Full account copy via support
- Chrome, Edge, Firefox, Safari extensions · web app · iOS · Android · unlimited devices
- Marqly Teams: shared team workspace, pooled AI, roles (Owner/Admin/Member), web only

## Categories

| Directory | Category pick(s) |
|---|---|
| G2 | Bookmark Management · Productivity · Knowledge Management (secondary: AI / Personal Information Management if offered) |
| Capterra | Bookmark Management · Productivity · Note Taking *(only if the form treats notes as a save-annotation feature — Marqly notes attach to bookmarks)* |
| AlternativeTo | **as alternatives to:** Pocket, Raindrop.io, mymind · tags: Bookmark Manager, Read It Later Service, AI / Note taking, News / content aggregation *(use the platform's own tag vocabulary)* |
| SaaSHub | Bookmark Management · Productivity · Knowledge Management |
| Slant | Bookmark Manager · Read-it-later · Productivity *(question-format: "What is the best bookmark manager?")* |
| Product Hunt | Topics: Bookmarking · Productivity · Artificial Intelligence · Read It Later |
| There's An AI For That | AI bookmarking / AI research / AI productivity (match their live taxonomy; do not invent a category name) |
| Futurepedia | Bookmark / Productivity / AI Assistant *(their taxonomy; pick the closest two)* |

## Pricing fields (many forms require this — verify live first)

- **Pricing model:** Freemium. Free plan, no credit card required.
- **Free:** up to 100 stored bookmarks, whole library searchable, one-click save, read mode, boards,
  highlights, mobile/tablet, unlimited devices; notes capped at 10.
- **Pro:** $72/year (≈ $6/month billed annually) or $9/month billed monthly. Student: $48 for the first
  year with a verified university email.
- **Standing first-year offer:** $49 for year one, then $72/year.
- **Teams:** $9 per seat/month or $72 per seat/year, minimum 3 seats (from $27/month), USD only, web only.
- **No lifetime deal. No free trial.**
- ⚠ The fact sheet's 2026-09-23 note: the $49/`STANDING49` promotion required a Stripe + app-config
  change to be true live. **Re-check `https://www.marqly.com/pricing` and checkout before pasting any
  number.** If it doesn't match, the live page wins and this file is wrong — update the fact sheet.

## Per-platform notes

- **G2 / Capterra:** claim the listing as the vendor. Do **not** incentivise, gate, or filter reviews
  (platform policy + our own rule). Never ask the team to post reviews from personal accounts.
  Photos: real product screenshots only, no mockups.
- **AlternativeTo:** the three "alternative to" pages (Pocket, Raindrop, mymind) are where the intent is.
  Honest feature flags — Marqly has **no public API**, is **not self-hostable**, has **no file-upload
  storage allowance**, and duplicate detection is exact-URL matching, **not** AI. Answer "no" on those.
- **SaaSHub / Slant:** vendor answers must be labelled as vendor answers. Slant is community Q&A — post
  as a disclosed representative of Marqly.
- **Product Hunt:** refresh the existing page (roadmap/changelog/version for Marqly 5.0), don't
  spam-relaunch. Approved proof only: **#1 Product of the Day, Marqly 1.0 (Sep 3, 2022)** and
  **Marqly 5.0 #5 of the day (May 31, 2026)**. Nothing about current ratings.
- **TAAFT / Futurepedia:** AI-category directories. Lead with semantic search + Ask + AI summaries. If a
  form offers a "pricing" dropdown with "free trial", select freemium/paid and say "free plan" in the
  description — never tick a trial box that isn't true.

## Never write in any of these forms

Public API · self-hosting · SOC 2 or any certification · team size · funding · AI-powered duplicate
detection · file uploads or storage quota (the Files plane is built but dark) · "offline on all your
devices" / Android or extension offline · offline on the free plan · team features beyond the Teams
wording above (no SSO/SCIM, no per-board permissions, no Viewer/Guest roles, no mobile Teams, no
custom sharing domains, no non-USD pricing) · any numeric rating or review count · "7-day trial" ·
"import Pocket HTML file" · anything about other vendors failing to import (we measured only ours).
