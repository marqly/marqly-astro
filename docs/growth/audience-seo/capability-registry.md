# Capability & claims registry (2026-09-26)

Every material public claim must trace to a row here. Statuses: **shipped**
(live, verified), **partial**, **planned/dark** (exists, not claimable),
**unsupported**, **unverified** (circulating but unsourced — never claim).
Primary source: `docs/superpowers/specs/2026-08-02-marqly-product-facts.md`
(updated 2026-09-26) + `.seo/truth-ledger.md`. Deployed verification for web
copy = the site's own gates (`seo-check.mjs` gate 2).

| Capability | Status | Plan | Platforms | Claim wording / limits |
|---|---|---|---|---|
| One-click save, tab sessions | shipped | Free | Chrome/Edge/Firefox/Safari | core of the product |
| Auto-tagging + summaries on save | shipped | **Pro** | ext + web | persona pages must say "Pro's auto-tagging" (fixed 2026-09-26 ×3 pages) |
| Keyword search whole library | shipped | Free | all | Free cap = **100 bookmarks** (swept 2026-09-25, guard T1.F18.06) |
| Semantic search | shipped | Pro | all | "search by meaning" |
| Ask (AI answers + citations) | shipped | Pro | web | never claim memory-of-everything or credit numbers |
| Highlights + notes | shipped | Free (notes ≤10; Pro unlimited) | all | 6 colors, persist on revisit |
| Boards + public view-only pages | shipped | Free | web | links.yourcompany.com domains = dark, never claim |
| Embed generator | shipped | Free | web | /embed live |
| ChatVault / AI-chat capture | shipped | Pro | Chrome/Edge/FF (not Safari) | one feature, not three |
| Clipboard history | shipped | Free; Pro adds account sync | Chrome/Edge only | never OS-wide, never Safari/iPhone |
| YouTube card (summary/transcript/chat) | shipped | chat = Pro | ext platforms | transcript via InnerTube |
| Import (Pocket/Raindrop/browser HTML) | shipped | Free | web | the switching-intent spine |
| **Export** | **manual only** (email support) | — | — | never claim export API/button; FAQ can-i-export is the source |
| Offline mode | **unsupported per spec — claim banned** | conflict | — | **VERIFICATION QUEUE:** help.marqly.com reportedly lists "Offline Mode" (revenue plan SEO-02). Site keeps "no offline" until owner verifies per-platform behavior; if it ships, update spec + FAQ + 19+ lander tails in one commit |
| File uploads / "10 GB Pro allowance" | **unverified — claim banned** | — | — | number traces to Raindrop reviews only; zero product evidence (2026-09-26) |
| Marqly Teams | **shipped + public 2026-09-25** | $9/seat/mo, $72/seat/yr, min 3, USD | **web only** | approved wording in facts spec §Teams; dark list stays banned (files/storage, custom domains, team MCP, Viewer/Guest, SSO, per-board perms, extension save-to-team, mobile, non-USD, invoices, trial) |
| iOS / Android apps | shipped | Free access; Teams web-only | mobile | some IT locale landers still say "no Android" — fix queue |
