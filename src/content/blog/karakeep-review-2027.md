---
title: "Karakeep Review 2027: The Self-Hosted Bookmark App With Real AI"
seoTitle: "Karakeep Review 2027: Free Self-Hosted AI Bookmarks"
description: "Karakeep in 2027: self-hosted and fully free, AI runs on your own key or a local Ollama model, Cloud Pro is $4/month, and what the ops bill really looks like."
pubDate: 2026-08-02
updatedDate: 2026-10-29
ogImage: "https://www.marqly.com/og/karakeep-review-2027.png"
category: "Reviews"
targetKeyword: "karakeep review"
tags:
  - "karakeep review"
  - "karakeep cloud pricing"
  - "karakeep vs hoarder"
  - "self-hosted bookmark manager"
  - "open source bookmarks"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Get started free"
faqs:
  - q: "Is Karakeep worth it in 2027?"
    a: "If you will run a Docker container and keep it updated, yes — Karakeep is still the strongest self-hosted bookmark manager for AI, because automatic tagging, summaries and semantic search all run on hardware you own, with no subscription and no volume cap. If you do not want to be your own sysadmin, Karakeep Cloud Pro at $4/month is fair money, but it is in public beta and hosted rivals are more polished for a similar bill."
  - q: "Is Karakeep free?"
    a: "Self-hosted, completely. The app is open source, every feature is included, and there is no bookmark or storage cap — you pay only for your server and for any AI API calls, or nothing at all if you run a local model through Ollama. Karakeep Cloud is the paid path: a $0 tier capped at 10 bookmarks and a Pro tier at $4/month."
  - q: "How much does Karakeep Cloud cost?"
    a: "Karakeep Cloud is in public beta with two tiers: a free tier limited to 10 bookmarks, and Pro at $4/month. Our fact sheet records no published annual price for the cloud plan, so treat any yearly discount you see quoted elsewhere as unconfirmed until Karakeep publishes it."
  - q: "Is Karakeep the same thing as Hoarder?"
    a: "Yes. The project launched as Hoarder and was renamed Karakeep in early 2025 — same codebase, same maintainers, new name. It is actively developed: version 0.33 shipped in August 2026 with semantic search, and the project has grown past 28,000 GitHub stars."
  - q: "Does Karakeep need an OpenAI key?"
    a: "No, and that is its best trick. Karakeep drives its AI through any OpenAI-compatible API **or** a local Ollama model, so you can tag and summarise your library without a single request leaving your network. The trade-off is variance: a small local model produces noticeably rougher tags than a frontier API."
  - q: "Can I get my data out of Karakeep?"
    a: "Yes, and this is the strongest portability story in the category. Settings offer a full export in Karakeep's own JSON or in standard Netscape bookmark HTML — the format almost every other manager can import — and exports include your lists. If you self-host, your library already lives in your own database, so the export is a convenience rather than an escape hatch."
  - q: "What are the best Karakeep alternatives?"
    a: "[Linkwarden](/blog/linkwarden-review-2027) is the closest open-source rival — preservation-first, collaborative, AGPL-3.0, but with tagging as its only AI. [Raindrop.io](/blog/raindrop-review-2027) is the polished hosted filing cabinet with the best free tier. Marqly is the hosted AI-first option: semantic search, automatic tagging, summaries and YouTube transcripts with no server to run. See the full list of [Karakeep alternatives](/alternatives/karakeep)."
---

**The short answer for 2027:** Karakeep is still the best self-hosted bookmark manager for anyone who wants real AI — automatic tagging, summaries, semantic search — without handing their library to a company. **Self-hosted, it is completely free and open source with no bookmark or storage cap. The AI is bring-your-own: an OpenAI-compatible API key, or a local Ollama model so nothing leaves your network. Karakeep Cloud is in public beta with a free tier capped at 10 bookmarks and Pro at $4/month.** The price of admission has not changed since we last reviewed it, and it is not money — it is that you become the ops team.

We first reviewed Karakeep in August 2026. This edition re-verifies every price, plan limit and platform against our dated fact sheet, corrects six things the 2026 edition got wrong or could not source, and adds the two assessments that edition skipped: what self-hosting actually costs over three and five years, and what happens to your library if the project stalls.

Disclosure, because it changes how you should read everything below: this review is published by Marqly, a hosted bookmark manager that cannot be self-hosted at all. Karakeep serves a requirement we structurally cannot meet — if "my data stays on my hardware" is non-negotiable, Karakeep is probably your answer and the rest of this page is detail. Where Karakeep wins a row against our own product, the comparison table says so. Our criteria are in [how we test](/how-we-test).

Key facts at a glance:

| | Karakeep |
| --- | --- |
| **Best for** | Self-hosters and privacy-first tinkerers who want AI on their own hardware |
| **Self-hosted price** | Free, open source, all features, no caps |
| **Cloud price** | $0 tier capped at 10 bookmarks · Pro $4/month (public beta) |
| **AI requirement** | Your own OpenAI-compatible key, or a local Ollama model |
| **Platforms** | Web, iOS, Android; extensions for Chrome, Firefox and Safari |
| **Standout** | Automatic tagging, summaries and semantic search that can run fully locally |
| **Hardest limits** | You are the sysadmin; no Edge extension; no AI Q&A over your saves |
| **Fact sheet** | Last verified August 2, 2026 |

> **How this review was compiled.** Prices, plan limits, feature flags and platform lists come from our dated Karakeep fact sheet, last verified against [karakeep.app](https://karakeep.app) on August 2, 2026, and cross-checked against the sheets we keep for every tool in this category. Marqly publishes this article and is one of the products discussed. Where we measured something rather than asserted it, the data lives in the [import-fidelity study](/research/bookmark-import-fidelity). We publish no numeric ratings for any product, including our own, and we invent no benchmark numbers.

## What changed since our 2026 review

Six corrections, plus three things the old edition simply did not cover.

1. **The cloud Pro price in our own comparison table was wrong.** The 2026 edition's Marqly-versus-Karakeep table listed Karakeep's all-in cloud price as "$6/mo." It is **$4/month**. The prose above that table had it right; the table did not. Karakeep was understated by half again in the one row readers skim.
2. **Cloud plan limits we quoted are not in our fact sheet.** The 2026 edition listed a "50,000 bookmarks, 50 GB" Pro allowance, a "20 MB" free allowance, a Corporate tier with SSO, and a seven-day money-back guarantee. Our verified record supports only two things: the **$0 tier is capped at 10 bookmarks**, and **Pro is $4/month, with no published annual price**. We have removed the rest rather than repeat numbers we cannot source. If Karakeep publishes an annual cloud price, that is the number to trust.
3. **The release we cited is two versions old.** We wrote that "v0.31.0 shipped in February 2026." The current record is **version 0.33, shipped August 2026, which added semantic search** — a more useful marker, because it dates the feature rather than the build.
4. **Semantic search is new, not established.** The 2026 edition described semantic search as an existing capability without saying when it arrived. Search is Meilisearch-backed full text, with **semantic and hybrid modes added during 2026**. That matters for anyone reading old forum threads that describe Karakeep as keyword-only.
5. **The import list was incomplete.** We named Chrome, Pocket, Linkwarden and Omnivore. Karakeep's importers cover **Pocket, browser bookmark HTML, Omnivore, Instapaper, Linkwarden and mymind** — two more landing spots for people rescuing a dead or abandoned library.
6. **We dropped claims we cannot source.** "OCR on images," an RSS-ingestion feature, a rule-based automation engine, Floccus sync, a 20 MB free allowance and a "190+ contributors" count all appeared in the 2026 edition and none of them are in our verified fact sheet. What the fact sheet does document is a **REST API, webhooks, a CLI and an MCP server** for wiring Karakeep into AI agents, plus **RSS feeds on public lists**. That is a stronger automation story than the one we told, and it is the one we can defend.

What we under-credited entirely: Karakeep has **highlights and annotation notes**, **save-as-PDF**, **public shareable lists**, and — added in 2026 — **offline reading in the mobile apps**. The 2026 edition mentioned none of them, which made Karakeep read as a hoarder's archive tool when it is closer to a complete manager.

## What is Karakeep?

Karakeep is an open-source "bookmark everything" app that you run yourself, normally with Docker. It stores links, notes, images, videos and PDFs on your own server, and it archives the full page behind every link so the library survives link rot. It began life as **Hoarder** and was renamed Karakeep in early 2025 after a trademark dispute — same codebase, same maintainers, new name. If you are arriving from an old Hoarder install, nothing was replaced; the project continued.

Two commitments define it, and both are load-bearing.

The first is **ownership**. Your bookmarks, your page archives, your database, your backups. There is no account to lose, no terms change to absorb, and no company whose disappearance takes your library with it. After two shutdowns in this category inside eight months, that is no longer a philosophical position — it is a risk assessment.

The second is **AI you supply**. Karakeep does not sell you an intelligence layer; it wires one in. Point it at any OpenAI-compatible API and it tags and summarises automatically. Point it at **Ollama** running on the same box and it does the same job with your bookmarks never leaving your network. No hosted competitor can offer the second option at any price, and for a subset of readers that single fact decides the purchase.

The project has grown past **28,000 GitHub stars** and keeps a steady release cadence. It is still pre-1.0, and the version number is honest about that.

## Key features

- **AI auto-tagging and summaries, cloud or fully local.** Every save can be tagged and summarised by a model you choose. The distinctive part is *where* it runs: a hosted API for quality, or a local Ollama model for privacy. Quality varies with what your hardware can run — tags from a small local model are noticeably rougher than from a frontier API — but the option existing at all is the point.
- **Full-text, semantic and hybrid search.** Search is Meilisearch-backed across the complete content of your saves, with semantic and hybrid modes added in 2026. Retrieval quality still depends on your configuration and your embedding model, but the architecture is meaningfully ahead of most self-hosted rivals, which stop at keyword matching.
- **Full-page archiving.** Every link is preserved as a page copy, a screenshot and a PDF, and videos can be pulled with yt-dlp. This is the feature that makes a Karakeep library an archive rather than a list of URLs, and it is also the feature that fills your disk fastest.
- **Highlights and annotation notes.** Both present, which our 2026 edition missed. You can mark up what you saved rather than only filing it.
- **Public shareable lists with RSS feeds.** A list can be published and followed, which is unusual for a self-hosted tool and useful for anyone curating for an audience rather than for themselves.
- **Mobile apps with offline reading.** Native iOS and Android apps, with offline reading added in 2026, plus share-sheet saving.
- **Browser extensions for Chrome, Firefox and Safari.** For an open-source project the client coverage is remarkable and beats several commercial products, including ours, on Safari. It does not include Edge.
- **REST API, webhooks, CLI and an MCP server.** This is the automation surface, and the MCP server is the part that matters in 2027: it lets an AI agent read and act on your library directly. Karakeep is the only self-hosted manager in our data layer that ships one.
- **Imports that read like a category obituary.** Pocket, browser bookmark HTML, Omnivore, Instapaper, Linkwarden and mymind. Two of those six services are gone. Karakeep is where their libraries go.

What is genuinely absent matters as much. There is **no AI Q&A over your saves** — nothing you can ask a question and get cited answers from your own library. There are **no YouTube-specific AI features**: yt-dlp will archive a video, but there is no summary, transcript or chat layer on the watch page. And there is **no one-click save-all-open-tabs** from the extension.

![Karakeep product view from the official site](/img/evidence/karakeep-site-2026-10-06.png)
<figcaption class="shot-cap">Captured from the product’s public view on October 6, 2026. Our method: <a href="/how-we-test">how we test</a>.</figcaption>

## Pricing, verified October 2026

| Option | Price | What is verified about it |
| --- | --- | --- |
| **Self-hosted** | **Free** | Open source, every feature included, no bookmark or storage cap. You supply the server, and for AI either an OpenAI-compatible key or a local Ollama model |
| **Cloud — free tier** | **$0** | Capped at **10 bookmarks**. Public beta |
| **Cloud — Pro** | **$4/month** | Public beta. Our fact sheet records **no published annual price**, so we quote none |

Three readings of that table.

**The free tier is a sample, not a plan.** Ten bookmarks tells you whether the interface loads and whether you like the shape of it. It does not tell you anything about living with Karakeep — not about tagging quality, not about search over volume, not about archiving a page that fights the parser. Anyone choosing between "self-host" and "$4/month" should understand that the cloud free tier cannot inform that choice.

**The genuinely free Karakeep is the self-hosted one.** This is the part competitors with freemium tiers do not offer: no feature is held back, no volume is capped, and the AI is not metered by a vendor. If you run an Ollama model locally, the marginal cost of a smarter library is electricity.

**The $4/month cloud price is the cheapest hosted AI in the category** — but it is public beta pricing on a public beta product, which is a real caveat rather than a formality. Beta services change their tiers. Read the durability section below before you commit a decade of saves to it.

## What Karakeep actually costs over three and five years

Subscriptions are small numbers repeated, and self-hosting is a zero repeated plus your evenings. Here is the arithmetic on verified prices only, assuming you keep the plan and the price holds:

| Path | Year 1 | 3 years | 5 years |
| --- | --- | --- | --- |
| **Karakeep, self-hosted** (software) | $0 | $0 | $0 |
| **Karakeep Cloud Pro**, $4/month | $48 | $144 | $240 |
| Linkwarden Cloud, $3/month per user billed yearly | $36 | $108 | $180 |
| Marqly Pro, $72/year | $72 | $216 | $360 |
| Marqly Pro on the standing $49 first-year offer | $49 | $193 | $337 |
| Raindrop.io Pro, $28/year | $28 | $84 | $140 |

The self-hosted row is the one people quote, and it is the one that misleads. **The software licence really is $0 forever** — that part is not marketing. But the honest total cost of a self-hosted Karakeep has four other lines, and none of them are zero:

- **Infrastructure.** An always-on machine with enough disk for full-page archives, screenshots, PDFs and any yt-dlp video pulls. If you already run a homelab, this is a rounding error on a bill you pay anyway. If you do not, it is the reason a $48/year cloud subscription looks cheap.
- **AI usage.** Bring-your-own key means bring-your-own meter. A frontier API tagging and summarising thousands of saves costs real money per thousand tokens; a local model costs nothing per call but needs hardware that can run it. We are not going to invent a figure here, because it depends entirely on your library size and your model choice — but "free AI" is only true on the Ollama path.
- **Time.** Installation is an evening if Docker is your comfort zone and a wall if it is not. Then updates, backups you actually test, reverse-proxy security, and the occasional migration step that a 0.x release asks of you.
- **Risk.** Pre-1.0 software on your own hardware, with your library as the payload. Backups are your job and so is discovering they were broken.

Run that arithmetic honestly and the decision stops being "free versus $4." It is "$4/month and someone else's pager, versus $0 and yours." Both are rational. Only one of them is usually presented straight.

## Durability and portability: what outlives the project

This is the section our 2026 edition did not write, and in 2027 it is the one that should decide the purchase. **Omnivore closed in November 2024**, with an export deadline of November 30, 2024, after its team was acqui-hired by ElevenLabs. **Mozilla shut Pocket down on July 8, 2025**; export access and the API were disabled on **November 12, 2025**, data deletion began then, and Premium subscribers received prorated refunds. Two of the most-loved saving tools in the category are gone inside eight months, and one of them was owned by a foundation rather than a startup.

Against that record, Karakeep's durability case is the strongest we cover — for reasons that have nothing to do with the company behind it.

**Licence and code.** Karakeep is open source and developed in the open. If the maintainers stop, the code does not disappear; it can be forked and run, which is exactly what happened to Omnivore's codebase. A hosted service that shuts down takes the product with it. An open-source project that stalls leaves you a working install.

**Revenue model.** The self-hosted app is free and does not depend on anyone's revenue. Karakeep Cloud is the monetisation path, still in public beta, and the risk it carries is a risk to the *hosting*, not to your library — a self-hosted install keeps working whether or not the cloud business survives. That is a genuinely different posture from a free-with-no-revenue hosted service, which is the model that killed Omnivore.

**Export path.** Karakeep exports your whole library from settings in either its own JSON or **standard Netscape bookmark HTML** — the format nearly every other manager can import — and the export includes your lists. Automated backups are supported. If you self-host, the data is already sitting in a database you own, so export is a convenience rather than an escape hatch.

**Import path.** Pocket, browser bookmark HTML, Omnivore, Instapaper, Linkwarden and mymind. Karakeep is a net importer of dead services, which is the most encouraging signal a tool in this category can send: the maintainers are building for people arriving with an archive, not only for people starting fresh.

**The honest caveat.** Durability of the *software* is not the same as durability of *your deployment*. A self-hosted Karakeep survives the project stalling only if you keep patching it, and an unpatched Docker container exposed to the internet is a worse outcome than a shut-down SaaS. You are trading vendor risk for ops risk. That trade is worth making — but it is a trade, not an escape.

If you are reading this because you have an old archive to rescue rather than a new library to start, our [Pocket alternatives guide for 2027](/blog/best-pocket-alternatives-2027) walks the field, and the [import-fidelity study](/research/bookmark-import-fidelity) reports what actually survived a real migration — measured on September 26, 2026, when 0 of 261 items parsed from a Pocket export's HTML preview file and 43 of 43 parsed from a Chrome bookmark export. The format you feed an importer matters more than the importer.

## Strengths

- **The best AI story in self-hosted bookmarking.** Automatic tagging, summaries and semantic search, with a fully local option via Ollama. Nothing else in the self-hosted space matches the combination, and nothing hosted matches the privacy path.
- **Free means free.** Open source, all features, no volume cap, no held-back tier. The only costs are infrastructure and, optionally, API usage.
- **Real data ownership.** Links, notes, images, page archives and even the AI processing can live entirely on hardware you control.
- **Serious client coverage.** Native iOS and Android apps with offline reading, plus Chrome, Firefox and Safari extensions — rare luxuries in open source, and better Safari support than several commercial products.
- **Archiving built for link rot.** A page copy, a screenshot and a PDF for every link, with yt-dlp for video. Your library keeps working after the original dies.
- **The automation surface is real.** REST API, webhooks, CLI and an MCP server for AI agents. Karakeep is the tool the community writes recipes for, not just screenshots of.
- **Import breadth that treats you as a refugee.** Pocket, Omnivore, Instapaper, Linkwarden, mymind and browser HTML.
- **Momentum.** Past 28,000 GitHub stars, active maintainers, a steady release cadence, real documentation, and a community that survived a rename intact.

## Weaknesses

- **You are the sysadmin, permanently.** Installation, updates, backups, storage growth and reverse-proxy security are your job forever. Full-page archives fill disks faster than people expect.
- **Pre-1.0 software.** The 0.x number is honest: upgrades occasionally require migration steps, and stability, while good, is not commercially guaranteed.
- **AI quality is your configuration's fault or credit.** With a paid frontier key, results are strong. With a small local model on modest hardware, tags and summaries get rough. The flexibility is the feature; the variance is the cost.
- **The cloud free tier cannot demonstrate the product.** Ten bookmarks is below the volume where tagging quality, semantic search and archiving become visible.
- **Cloud is public beta, with no published annual price.** Two tiers only, and beta pricing on a beta product. Do not put a decade of saves in it without an export habit.
- **No AI Q&A over your saves.** Nothing you can ask a question and get cited answers from your own library. The AI files; it does not converse.
- **No YouTube AI.** Videos can be archived with yt-dlp, but there is no summary, transcript or chat layer on the watch page.
- **No Edge extension.** Chrome, Firefox and Safari only. If Edge is your daily browser, you are saving from the web UI or the mobile share sheet.
- **No one-click save-all-tabs.** Bulk capture from the extension is not there.
- **Polish gap against mature commercial apps.** The UI is genuinely good, but side by side you notice the seams: rough edges in the reader, occasional parsing misses, mobile apps that trail the web app.

## How Karakeep compares to Marqly

We make Marqly, so read this with that in mind — and note that Karakeep wins most of it.

| | Karakeep | Marqly |
| --- | --- | --- |
| Core idea | Own everything, run the AI yourself | Find anything again by describing it |
| Self-hosting / data ownership | **Yes — its whole reason to exist** | No |
| Open source | **Yes** | No |
| Price (all-in) | **Free self-hosted; $4/month Cloud Pro** | Free tier up to 100 bookmarks; Pro **$72/yr (≈$6/mo) or $9/mo** |
| Setup required | Docker, config, updates, backups | **None — sign up and save** |
| AI auto-tagging | Yes, on your key or a local model | **Yes, on every save, zero config** |
| Semantic search | Yes, added 2026, configuration-dependent | **Pro — tuned, zero config** |
| AI summaries | Yes | **Yes, on Pro** |
| AI Q&A over your saves | **No** | **Yes — Ask, Pro** |
| Local / private AI | **Yes, via Ollama** | No — hosted service |
| API / CLI / webhooks / MCP | **Yes, all four** | No public API |
| YouTube | Archives video with yt-dlp | **Summary, transcript and chat on the watch page** |
| Page capture | **Page copy, screenshot, PDF, automatic** | Save as PDF on demand, matching the on-screen layout |
| Highlights and notes | **Yes** | **6 colours, free on every plan; notes unlimited on Pro** |
| Public sharing | **Public lists with RSS feeds** | **Public boards, view-only, no signup to view — free on every plan** |
| Offline reading | **Yes, iOS and Android** | Pro, web app and iOS app only, saved per device |
| Platforms | Web, iOS, Android; Chrome, Firefox, Safari | Web, Chrome, Edge, Firefox, Safari, iOS, Android |
| Android app | **Yes** | **Yes** |
| Who maintains it | **You** | Marqly |

The deciding row is the last one, and it decides honestly in both directions.

**Karakeep gives you everything Marqly charges for, free, plus ownership Marqly cannot offer** — in exchange for your evenings and your uptime. If you already run a homelab, the marginal cost of Karakeep is close to nothing and the marginal benefit is total control. There is no argument we can make against that, and we won't try.

**Marqly gives you the retrieval half working identically well on minute one and minute one million, with nobody to maintain.** Semantic search across titles, page content, highlights and YouTube transcripts. Automatic tagging with no key to configure and no model to choose. Ask, which answers questions from your own library with numbered citations that open the source — the one thing in this comparison Karakeep does not do at any price. Boards that publish as public pages needing no signup to view, free on every plan. Offline reading is a Pro feature of the web and iOS apps, and it is per-device: there is no server copy, so each device holds its own downloads.

Marqly's free plan stores up to 100 bookmarks with keyword search across the whole library, needs no card, and puts every AI feature on Pro at $72/year or $9/month — with a standing $49 first-year offer, which is 31% off the $72 list price, and $48 in the first year for verified students. Self-hosters do not need us to tell them which they are. If you are only *self-hosting-curious*, run the infrastructure-plus-time arithmetic above against [$4/month for Karakeep Cloud or $6/month for Marqly Pro](https://app.marqly.com) and pick the bill you would rather have.

The row-by-row version lives in [Marqly vs Karakeep](/compare/marqly-vs-karakeep).

## Karakeep against the rest of the 2027 field

Because the real decision is rarely Karakeep versus one named rival:

| | Karakeep | Linkwarden | Raindrop.io | Marqly |
| --- | --- | --- | --- | --- |
| Self-host for free | ✅ open source | ✅ AGPL-3.0 | ❌ | ❌ |
| Hosted price | $4/mo (beta) | $3/mo per user, yearly | **$28/yr** | $72/yr |
| Permanent free hosted tier | ⚠️ 10 bookmarks | ❌ trial only | ✅ unlimited bookmarks | ⚠️ 100 bookmarks |
| AI auto-tagging | ✅ BYO key or Ollama | ⚠️ optional, incl. local models | ❌ save-time suggestions on Pro | ✅ Pro |
| Semantic search | ✅ added 2026 | ❌ | ❌ | ✅ Pro |
| AI summaries | ✅ | ❌ | ❌ | ✅ Pro |
| Full-page archiving | ✅ page copy + screenshot + PDF | ✅ **screenshot + PDF + readable + Wayback** | ⚠️ permanent copies on Pro | ⚠️ save as PDF on demand |
| Team collaboration | ⚠️ public lists | ✅ **shared collections with permissions** | ✅ shared collections | ✅ Teams, from 3 seats |
| Public sharing | ✅ lists with RSS | ✅ | ✅ | ✅ public boards, free |
| API | ✅ REST + webhooks + CLI + MCP | ✅ REST | ✅ | ❌ |
| Offline reading | ✅ iOS, Android | ✅ mobile caching | ❌ | ⚠️ Pro — web + iOS, per device |
| Edge extension | ❌ | ✅ | ✅ | ✅ |
| Safari extension | ✅ | ❌ | ✅ | ✅ |
| Fact sheet verified | Aug 2, 2026 | Aug 2, 2026 | Sep 12, 2026 | Sep 26, 2026 |

Read across and Karakeep's position is precise. It is the only tool in the set that pairs self-hosting with semantic search and summaries — the AI column and the ownership column are both green nowhere else. It loses the preservation row to [Linkwarden](/blog/linkwarden-review-2027), which archives in more formats and can push a copy to the Wayback Machine. It loses the free-hosted row to [Raindrop.io](/blog/raindrop-review-2027), whose free tier is unlimited rather than ten items. And it loses the retrieval row to Marqly, which is the only one here with AI Q&A over your own saves.

Two browser rows are worth naming because they are the quiet disqualifiers: Karakeep has a Safari extension and no Edge one; Linkwarden is the mirror image. If your daily browser is Edge, the two open-source leaders split against you.

## Who should skip Karakeep

Real disqualifiers, in the order people hit them:

- **You read "reverse proxy" and felt tired.** No shame in it. Maintenance is a permanent cost, and paying $4/month to make it disappear is a rational trade rather than a failure of nerve.
- **You have no always-on machine and no intention of getting one.** Karakeep's free tier is a licence, not a service. Without hardware to run it on, the price comparison against hosted tools collapses.
- **You live in Microsoft Edge.** There is no Edge extension. Chrome, Firefox and Safari only.
- **You want to ask your library questions.** No AI Q&A over your saves, at any tier, self-hosted or cloud. If cited answers from your own collection are the feature you are buying, Marqly's Ask and Readwise Reader's chat are the ones that have it.
- **You save a lot of YouTube and want it summarised.** Karakeep can archive a video with yt-dlp. It cannot summarise it, transcribe it on the watch page, or chat with it.
- **You need real team permissions.** Public lists are view-only publishing. There is no shared collection with per-member permissions the way Linkwarden does it.
- **You want a service with a published annual price and a support address.** Karakeep Cloud is public beta with two tiers and no published yearly figure.
- **You bulk-capture open tabs.** No one-click save-all-tabs from the extension.

And who should *not* skip it: homelabbers, privacy-first users who want AI with no cloud in the loop, data hoarders who need page and video archives, developers who will actually use the API and MCP server, and ex-Pocket or ex-Omnivore users who are comfortable with Docker and would rather own the rescue than rent it. Inside that profile Karakeep is the best value in the entire bookmark category, and it is not close.

## Verdict

Karakeep in 2027 is the most complete self-hosted bookmark manager available, and still the only one where AI feels native rather than bolted on. Version 0.33 brought semantic and hybrid search to a Meilisearch-backed full-text index; the mobile apps gained offline reading; the automation surface grew an MCP server; and the import list now covers six formats including two services that no longer exist. Self-hosted, all of it is free with no caps. Hosted, it is $4/month on a public beta with a 10-bookmark free tier that cannot tell you what you need to know.

Its trade-offs are the ones every self-hosted tool imposes — setup, maintenance, pre-1.0 turbulence, AI quality that depends on what you feed it, and no Edge extension — and none of that will deter its actual audience even slightly. What we would add for 2027, and did not have room to say in 2026, is that Karakeep's durability story is the best in the category. Open source, free to run, an export in standard Netscape HTML, and a codebase that survives its maintainers. After watching Omnivore and Pocket disappear inside eight months, that is worth more than a feature list.

If you want Karakeep's AI experience without the server — semantic search that works on day one, automatic tagging with no key to configure, summaries, and Ask answering from your own library with citations — [Marqly is the hosted version of the same idea](https://app.marqly.com). The free plan needs no card, imports browser bookmark HTML, Raindrop collections or the `list.csv` from inside a Pocket export archive, and works in the next two minutes.

For deeper analysis: [Marqly vs Karakeep](/compare/marqly-vs-karakeep), the full list of [Karakeep alternatives](/alternatives/karakeep), our [self-hosted Pocket alternative guide](/blog/best-self-hosted-pocket-alternative) if ownership is the requirement, the [AI bookmark manager guide for 2027](/blog/best-ai-bookmark-manager-2027) for why the retrieval layer is the whole game, and the [free tools directory](/tools) if you want to inspect or de-duplicate an export archive offline.

---

*Prices, plan limits and platform lists verified against our dated Karakeep fact sheet, last checked against the official site on August 2, 2026, and re-read for this edition in October 2026. Changes from the 2026 edition: the cloud Pro price in our comparison table corrected from $6/month to $4/month; unsourced cloud allowances, a Corporate tier and a money-back guarantee removed; the cited release updated to 0.33 (August 2026, semantic search); the import list expanded to include Instapaper and mymind; unverified OCR, RSS-ingestion, rule-engine and Floccus claims dropped in favour of the documented API, webhooks, CLI and MCP server; and highlights, public lists, save-as-PDF and mobile offline reading added. We publish no numeric ratings. We will update this review as plans change.*
