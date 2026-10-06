# Live-SERP checks this repo cannot do

Everything in `seo/` is verifiable offline (crawl, redirects, own-page inventory — see
`seo/reports/00-baseline.md`). What follows is **not**: Google/Bing result pages, third-party listing
status, and outlet identities. These need a human with a real browser (Tier 2 — plain `curl` returns a
consent/JS wall, not a SERP). Use incognito, a US locale, and note the date + a screenshot per check.

**Record results in:** `listicle-targets.csv` (columns below), `seo/data/changes-log.csv` if a decision
changes a page, and a dated entry in `.seo/truth-ledger.md` if a claim's truth changes.

## 1. Pricing-intent SERP shape — unblocks ADR-005

ADR-005 (`seo/adr/005-pricing-intent.md`) decided: add a dated "Pricing (verified <date>)" section to the
**existing** reviews for readwise, readwise-reader, mymind, raindrop, instapaper, rather than mint
`/pricing-guides/*` pages. Its own text flags this exact gap: *"'if the top 5 are dedicated pricing
pages, build dedicated pages' — that SERP check is the one thing the marketing repo can't do offline."*

For each query (`readwise pricing`, `readwise reader pricing`, `mymind pricing`, `raindrop pricing`,
`instapaper pricing`), record:

- [ ] Top-5 URLs — are they **dedicated pricing pages** or **in-review pricing sections**?
- [ ] Where Marqly's own review page sits today (owner snapshot: pos 8–10; confirm current)
- [ ] SERP features present: FAQ/people-also-ask, AI Overview / AI-mode answer, and **whether the AI
      answer cites a competitor pricing page** (that's the CTR risk, not just rank)
- [ ] Verdict to write back: keep in-review sections (default) **or** open dedicated pricing pages

## 2. "Best bookmark manager" ranking shape — fills the outreach worksheet

- [ ] Top 10 for `best bookmark manager`, `online bookmark manager`, `bookmark manager for chrome`,
      `best read it later app`, `Pocket alternative`, `Raindrop alternative`, `mymind alternative`
- [ ] Result shape per slot: listicle / review site / vendor page / Reddit thread / YouTube
- [ ] **Are any of the 18 named publishers present?** If yes → that's their real `suggested_url` and the
      query they rank for. If no → they're not the SERP; drop or de-prioritise.
- [ ] Is **Marqly** listed on each (`marqly_listed` = YES/NO) and since when
- [ ] The `last_known_updated` date each outlet shows on-page (a listicle last touched in 2023 is a
      refresh ask, not an inclusion ask)
- [ ] Which competitors appear that we *should* be next to, and which we shouldn't (positioning signal)

## 3. Outlet identity + contact route — the biggest UNKNOWN in the CSV

Six of the owner-named "publishers" (**Tixio, ContextBolt, Tabmark, SupaSidebar, Bookmarkify,
LinkFlare, GetLinkVault**) look like they may be **competing bookmark/link tools that publish
roundups**, not independent publishers. This repo cannot tell. For each:

- [ ] Is it a product, a publisher, or both?
- [ ] If a product: does it even host third-party listings? (If not, the only viable ask is a **data
      citation** to the study, or nothing.)
- [ ] If a publisher: the actual article URL, the editor/contact route they publish (form, `press@`,
      public X/LinkedIn — **not a scraped personal email**), and any stated "suggest a tool" process
- [ ] Any paid-inclusion / "get listed" pricing page → treat as advertising, label `sponsored`, and
      decide on ROI. **We do not buy editorial links.**

## 4. Review-platform / directory state (before writing anything)

- [ ] Does a Marqly listing already exist on G2, Capterra, AlternativeTo, SaaSHub, Slant, TAAFT,
      Futurepedia? (Claim-or-create; a duplicate record is worse than none.)
- [ ] AlternativeTo: are we already user-suggested on the Pocket / Raindrop / mymind pages?
- [ ] What fields each form actually requires (logos, screenshots, category taxonomy) so
      `directory-copy-pack.md` can be trimmed to what's used
- [ ] Product Hunt: current state of the existing product page
      (`https://www.producthunt.com/products/marqly`) — versions/roadmap/changelog, maker access
- [ ] **Do not copy any rating or review count off these pages into our kit.** Note existence only.

## 5. Unlinked-brand-mention inventory (needs a link index we don't have)

- [ ] Pull the backlink/mention list from a third-party index (Ahrefs/Semrush/DataForSEO if we have
      access — `00-baseline.md` §7.5 says volumes and the link profile are UNKNOWN here; owner to say
      which tool is available)
- [ ] Search: `"Marqly" -site:marqly.com` on Google + Bing, plus Reddit/HN/GitHub/YouTube
- [ ] For each mention: does it already link? Is the description accurate? → feed
      `pitch-templates.md` §C, and fix wrong facts at the source (our page) first, not in the email
- [ ] AI surfaces: ask ChatGPT / Perplexity / Gemini "best AI bookmark manager", "Pocket alternative
      that does semantic search", "does Marqly import Pocket HTML" and save the answers + citations to
      `seo/data/` — this is the only way to know whether the llms/AI-Overview surface is drifting

## 6. Also blocked (unchanged, for context)

- [ ] **GSC grant / 4 CSV exports** — still the single Phase-0 blocker (`00-baseline.md` §8). Outreach
      prioritisation by query value waits on it, but nothing in this folder does.
