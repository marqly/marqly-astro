# seo/outreach/ — link acquisition & digital-PR kit

**Prep only. The owner sends. Nothing in this folder is automated, and no agent submits,
posts, emails, or creates accounts on our behalf.** This is the human-in-the-loop rule from
`seo/README.md` §Conventions: *outreach sending, account creation, analytics/GSC/app settings =
prepare fully, hand over with exact steps.*

## Why this folder exists

`seo/reports/00-baseline.md` shows the constraint is **authority, not on-page quality**: the site
is structurally clean (1,914 sitemap URLs all 200, 0 canonical/H1/main/alt defects) but named-author
editorial is **0 / 536** and there is no editorial backlink base to speak of. Fresh crawl evidence
only covers *our own* domain — this repo has no third-party link index, so our external link profile
is **UNKNOWN** here, and "near-zero editorial backlinks" is owner-reported, not repo-verified.
That is what outreach is for.

## Files

| File | What it is |
|---|---|
| `linkable-asset-study.md` | Press-ready one-pager for `/research/bookmark-import-fidelity` — the citable asset |
| `listicle-targets.csv` | Worksheet of the owner-named listicle/SERP publishers. **Deliberately incomplete** |
| `pitch-templates.md` | 3 personalisable pitches: listicle inclusion, study/PR, unlinked brand mention |
| `directory-copy-pack.md` | Paste-ready descriptions + categories + store URLs for review platforms/directories |
| `community-angles.md` | Reddit + Hacker News framing for the study (owner posts, manually) |
| `serp-checks-needed.md` | The live-SERP facts a human must confirm before any of this is sent |

## Suggested order of work (owner)

1. `serp-checks-needed.md` — 15 minutes, unblocks the pricing ADR-005 decision and fills
   `listicle-targets.csv`.
2. Directory/review listings (`directory-copy-pack.md`) — highest certainty, lowest effort, no
   editorial risk. AlternativeTo + G2 + Capterra first.
3. The study as a linkable asset (`linkable-asset-study.md` → `pitch-templates.md` §B) — the only
   thing here that can earn *editorial* links rather than directory links.
4. Listicle inclusion asks (§A) and unlinked-mention asks (§C) once targets are verified.
5. Community posts (§`community-angles.md`) — after the asset is cited somewhere, so it isn't a
   cold self-launch.

## Guardrails (non-negotiable)

- **No fabricated claims.** No invented statistics, test results, customer counts, integrations,
  awards, ratings, or review counts. Every number in this kit is copied verbatim from
  `src/pages/research/bookmark-import-fidelity.astro` + `public/research/bookmark-export-corpus.csv`
  and is labelled with its source. Product facts come from
  `docs/superpowers/specs/2026-08-02-marqly-product-facts.md` (the single source of truth) and
  `.seo/truth-ledger.md`. If a fact is not in those files, it does not go in an email.
- **No undisclosed self-promotion.** Marqly makes Marqly. Every pitch and every community post says
  so, up front, in the first two sentences. No guest posts without disclosure, no seeding a "roundup"
  we wrote, no astroturfing.
- **No buying links.** No paid "placement" fees, no sponsored-links-as-editorial-links, no paid
  reviews, no link exchanges, no PBN/directory-swaps, no "add us and we'll link you back". If a
  publisher charges for inclusion, it is either a legitimate paid-advertising slot (label it `sponsored`,
  `rel="sponsored"`, and it is *not* a link-building win) or a scam. Skip it and log it.
- **No star ratings or review counts, ever**, in copy or structured data (brand rule, fact sheet
  §Social proof + §Never claim). Live ratings are currently poor; citing them would be both off-brand
  and self-defeating. Only these two social-proof claims are approved: Product Hunt #1 Product of the
  Day (Marqly 1.0, Sep 3 2022) and Marqly 5.0 #5 of the day (May 31 2026).
- **No "trial" wording.** Marqly sells no free trial (retired 2026-09-18). Say "get started free"
  (the free plan) or "billed when you upgrade".
- **No Pocket-HTML-import promise.** Measured 0/261. Marqly reads browser Netscape HTML and Pocket's
  `list.csv` from inside the export ZIP — that's the approved sentence (`.seo/truth-ledger.md`
  2026-09-26 batch 7b; `seo-check.mjs` gate 13).
- **Off-strategy tools stay out of this folder.** Per ADR-003, `redirect-checker`, `url-cleaner`,
  `url-encoder`, `utm-builder`, `open-graph-checker`, `html-to-markdown`, `rss-feed-finder` are frozen
  and excluded from outreach lists. The linkable assets are the study and the on-strategy tools
  (`bookmark-file-viewer`, `pocket-export-converter`, `raindrop-export-analyzer`,
  `duplicate-bookmark-finder`, `dead-link-checker`, `youtube-*`, `reading-time`, `bookmarklet-maker`).
- **Personalise or don't send.** Every template has a `[REASON YOU COVER THIS]` slot. If it can't be
  filled with something specific and true about that outlet, the email doesn't go.
- **Log what happened.** Sent / no reply / declined / published, with the date, in the `status` column
  of `listicle-targets.csv`. Never record third-party individuals' personal emails here — use the
  outlet's published contact route.

## Scope reminder

This folder is marketing, not product. Claims here must not outrun what `marqly_2026_prod` /
`marqly-mobile` actually do. If a pitch idea needs a capability we can't point at in the fact sheet,
the fact sheet is wrong or the pitch is — resolve it there first, never in an email.
