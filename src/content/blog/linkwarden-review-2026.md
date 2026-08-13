---
title: "Linkwarden Review 2026: The Archivist's Open-Source Bookmark Manager"
seoTitle: "Linkwarden Review 2026 — Open-Source Bookmarks | Marqly"
description: "An honest Linkwarden review for 2026: full-page archiving, $3/month cloud pricing, AI tagging, team collections — and where the open-source tool stops short."
pubDate: 2026-08-02
ogImage: "https://www.marqly.com/og/linkwarden-review-2026.png"
category: "Reviews"
targetKeyword: "linkwarden review"
tags:
  - "linkwarden review"
  - "linkwarden pricing"
  - "open source bookmark manager"
  - "self-hosted bookmarks"
  - "link archiving"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Try Marqly free"
faqs:
  - q: "Is Linkwarden worth it?"
    a: "Yes, if preservation or collaboration is your priority. Linkwarden archives every link in multiple formats (HTML, screenshot, PDF, readable view) so your library survives link rot, supports shared team collections, and costs either nothing (self-hosted) or $3/month billed annually (cloud). If your priority is finding saves by memory or AI-assisted triage, its keyword search and tag-only AI will feel thin."
  - q: "Is Linkwarden free?"
    a: "Self-hosted, yes — Linkwarden is fully open source under AGPL-3.0 and every feature is free on your own server. The official cloud plan costs $3/month per user billed annually (about $4 month-to-month) with a 14-day free trial and a 30,000-links-per-user allowance, which is effectively unlimited for personal use."
  - q: "What are the best Linkwarden alternatives?"
    a: "Karakeep is the closest open-source alternative — stronger AI (summaries, semantic search, local Ollama models) but no team collaboration. Raindrop.io is the polished hosted equivalent with a huge free tier. Marqly is the hosted AI-first option, adding semantic search and automatic summaries that Linkwarden lacks. Wallabag suits pure read-it-later self-hosters."
  - q: "Does Linkwarden archive full pages?"
    a: "Yes — this is its signature feature. Every saved link is automatically preserved in multiple formats: the full HTML content, a screenshot, a PDF, and a readable text view, and Linkwarden can additionally submit the page to the Internet Archive's Wayback Machine. Even if the original site dies, your copies remain."
---

**★ 4/5** — Linkwarden is the archivist's bookmark manager: every link you save is preserved in multiple formats before it can rot, the whole thing is open source, and the cloud plan costs $3 a month — just don't expect it to organize your library for you or find things by meaning.

Disclosure: this review appears on the blog of Marqly, a competing (hosted, closed-source) bookmark tool. Linkwarden's core promise — your links, preserved, on infrastructure you can own — is one we don't compete on, and this review scores it for what it is: the most preservation-focused tool in the category.

## What is Linkwarden?

Linkwarden is an open-source, self-hostable bookmark manager built around a blunt observation: the web rots. Studies keep finding that a large share of links break within a few years, and a bookmark to a dead page is a note that says "you used to know something." Linkwarden's answer is to archive everything, automatically, the moment you save it.

The project is licensed under AGPL-3.0, has 19,000+ stars on GitHub, and is developed in the open with a steady release rhythm. You can self-host it with Docker or pay for the official cloud at linkwarden.app. In 2026 the team also shipped official iOS and Android apps — a milestone most open-source bookmark projects never reach — alongside the existing browser extension and an installable PWA.

The second thing to know: unlike most personal bookmark tools, Linkwarden is genuinely collaborative, with shared collections, team invites, and public collection pages.

## Key features

### Multi-format page preservation

The headline feature. Every saved link is captured as full HTML, a screenshot, a PDF, and a readable text view — and Linkwarden can also push a copy to the Internet Archive's Wayback Machine for good measure. Five years from now, when half your links 404, your library still opens. No mainstream hosted bookmark service is this thorough about preservation.

### Collections, tags, and collaboration

Links organize into collections (with sub-collections) and tags. Collections can be shared with teammates with per-member permissions, or published as public pages anyone can view. For research teams, content planners, or a shared reading list, this is Linkwarden's second superpower — most rivals treat collaboration as an afterthought.

### Reader view with highlights and annotations

A clean reading view with font controls, text highlighting, and annotations. It's competent rather than luxurious — fine for reading saved articles, not aiming to replace a dedicated read-it-later reader.

### Optional AI tagging

Linkwarden can auto-tag new saves using AI, including via local models with Ollama, so self-hosters can keep the AI on their own hardware. Note the scope: it tags. There are no AI summaries, no chat-with-your-library, no semantic retrieval layer — the AI files things; it doesn't help you get them back out.

### Search with operators, RSS, API, and sync

Full-text search across your archived content with search operators for precision, RSS feed subscriptions, a documented API with access tokens, bulk actions, and browser-bookmark sync via Floccus. It's a well-rounded, developer-friendly toolkit.

## Pricing

Verified August 2026 on linkwarden.app:

| Option | Price | What you get |
| --- | --- | --- |
| **Self-hosted** | Free (AGPL-3.0) | Every feature, unlimited, on your hardware |
| **Cloud** | $3/month per user billed annually (25% off), ~$4/month billed monthly | Hosted infrastructure, full preservation, AI tagging, full-text search, RSS, 30,000 links per user, priority support |
| **Trial** | 14 days free | Full cloud access, cancel anytime |

The cloud plan is among the cheapest hosted options in the entire category, and 30,000 links per user is effectively unlimited for personal use. Third parties (Elestio, Railway, and others) also offer managed Linkwarden hosting at higher prices if you want self-hosting's control with someone else's pager.

## What Linkwarden does well

- **Preservation nobody else matches.** Four archive formats plus Wayback Machine submission, automatically, for every link. If link rot has ever burned you, this is the cure.
- **Real collaboration.** Shared and public collections with permissions — rare in this category and well executed.
- **Open source done properly.** Clean AGPL licensing, active development, self-host parity with cloud (no held-back features), and easy import/export. No lock-in anywhere.
- **Aggressive pricing.** $3/month hosted, or free on your own server. The money argument is hard to lose.
- **Maturing client story.** Official mobile apps in 2026, a solid extension, PWA, API, and Floccus sync. The platform gaps are closing fast.

## Where Linkwarden falls short

- **Retrieval is entirely on you.** Search is keyword and operator based. If you can't recall words that appear in the page, no amount of archived formats will surface it. There's no semantic search — the gap we keep measuring across tools in our [AI bookmark manager guide](/blog/best-ai-bookmark-manager-2026).
- **The AI stops at tagging.** No summaries for triaging a backlog, no Q&A over your library. Compared to Karakeep — its closest open-source rival — Linkwarden's intelligence layer is a clear step behind.
- **Reading experience is functional, not delightful.** Fine for occasional reading; heavy readers will want a dedicated reader app alongside.
- **Self-hosting has real appetite.** Multi-format archiving means a headless browser doing captures and storage that grows fast. It wants a proper server, not the smallest VPS you can find.
- **No native desktop apps.** Web, PWA, extension, and mobile cover most needs, but desktop-app fans should know it's browser-first.

## How it compares to Marqly

| | Linkwarden | Marqly |
| --- | --- | --- |
| Preservation | **HTML + screenshot + PDF + readable + Wayback, automatic** | Save as PDF on demand |
| Open source / self-host | **Yes (AGPL-3.0)** | No |
| Team collaboration | **Shared collections, permissions** | No teams (public board sharing only) |
| Price | **Free self-hosted; $3/mo cloud** | Free tier; $72/yr (≈$6/mo) Pro |
| API | **Yes** | No public API |
| Android | **Yes (new official app)** | No (web app in browser) |
| Search | Keyword + operators | **Semantic — find saves by describing them** |
| Auto-tagging | Optional AI tagging | **Automatic on every save, zero config** |
| AI summaries | No | **Yes** |
| Chat with your saves | No | Yes (Pro) |
| YouTube | Saves the link | **AI summary, chat, transcript on the watch page** |
| Setup | Docker or cloud signup | Sign up and save |

The fair summary: Linkwarden and Marqly optimize opposite ends of a bookmark's life. Linkwarden is unbeatable at *keeping* what you save — multiple formats, your server, your rules — and wins every ownership and preservation row. Marqly is built for *getting things back out* — search by meaning, automatic tags, summaries — and wins every retrieval row. A pile of perfectly preserved pages you can't find is only half a solution; so is perfect recall over links that have died. Know which failure mode you actually fear, then pick. If it's the second one, [Marqly's free tier](https://app.marqly.com) will demonstrate its half in an afternoon.

## Who should use Linkwarden?

- **Anyone burned by link rot** — researchers, journalists, lawyers, and citation-heavy writers who need pages as they were.
- **Teams and collaborators** sharing curated link collections with permissions.
- **Self-hosters** who want a polished, actively developed tool — compare it against Karakeep in our [self-hosted Pocket alternative guide](/blog/best-self-hosted-pocket-alternative) before committing, since the two lead that field for different reasons.
- **Budget-first users** — $3/month hosted is nearly unbeatable.
- **Ex-Pocket users who prioritize ownership** — though the wider field is worth a scan in our [Pocket alternatives roundup](/blog/best-pocket-alternatives-2026).

Who shouldn't: people whose real problem is retrieval or triage. If your library's failure mode is "I saved it and never found it again," archiving it in four formats doesn't fix that.

## Verdict

**★ 4/5.** Linkwarden is the best preservation-first bookmark manager in the open-source world, with honest pricing, real collaboration, and a platform story that improved dramatically this year. It loses a star because the intelligence layer is thin — keyword-only retrieval and tag-only AI leave the finding-things-again problem unsolved. Keep Linkwarden as your vault if permanence is what you need. If what you need is to *find* what you saved, that's the other half of the problem — [try Marqly free](https://app.marqly.com), no card required, and search your library by what you remember.
