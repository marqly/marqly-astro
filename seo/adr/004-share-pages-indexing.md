# ADR-004: app.marqly.com/s/* public share pages — SPEC ONLY (owner/app-repo action)

- **Status:** proposed — NOT executed (touches the app repo, which this program must not)
- **Date:** 2026-10-05
- **Phase:** 1.4

## Context
Owner snapshot §2.1/§2.5: `app.marqly.com/s/*` share pages + `/explore` + `/discover` appear in GSC
("alternate with canonical", crawled-not-indexed). Per CLAUDE.md 2026-08-03 these are a MIXED surface —
`/explore`, `/discover`, `/s/*` are deliberately public and `/s/[slug]` is `noindex` while the app sitemap
advertises it (unresolved contradiction). Marketing repo cannot fix this.

## Recommended policy (hand to the app team to implement)
1. Default **`noindex,follow`** on all `app.marqly.com/s/*` share pages (thin, uncontrolled, cannibalises `www`).
2. Ship an **opt-in "public & discoverable"** toggle on a board, gated to minimum quality (≥N saved items,
   ≥M boards, title+description) that flips that one URL to `index,follow` + adds it to the APP sitemap only.
3. Keep `/explore` + `/discover` exactly as-is (owner said Discover boards are intentionally indexable) —
   do NOT blanket-disallow (a disallowed URL is never fetched, so an already-indexed page freezes — CLAUDE.md note).
4. Fix the `/s/[slug]` sitemap-vs-noindex contradiction: whatever the robots decision, make the app sitemap match.

## Why it's not in this repo's diff
Rule §6: "don't touch the app repo". This is the spec; owner/app-team executes. Marketing `www` is unaffected.
