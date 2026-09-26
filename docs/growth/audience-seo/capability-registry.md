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
| **Export (CSV)** | **shipped — VERIFIED 2026-09-26** (sidebar/profile → Export) | Free: latest 100; Pro: all + "new since last export" | web | CSV columns = URL, Title, Description, Tags ONLY (no dates/boards/highlights — `export.service.ts:20-25`). A full-account copy (highlights/notes/boards) still goes through support. The OLD "manual only" row was stale: `apps/api/src/routes/export.route.ts`, `ExportModal.tsx`, help.marqly.com/account/export-data (live 200, verified 09-26) |
| Import (detail) | shipped | Free (10 MB; Pro 30 MB, ≤10,000/file, .html/.csv) | web | HTML (Chrome/Edge/Firefox/Safari/Raindrop/Pocket) + CSV. PRESERVED: title, URL, description, tags, folders→boards (flattened to max 2 levels). NOT preserved: original save dates (items take import date — `import.service.ts:478-491` discards parsed addDate), no dedup at import, no highlights/articles. Never promise "dates/folders intact" in migrate copy |
| Offline reading | **shipped, Pro — VERIFIED 2026-09-26** | Pro | **web app + iOS app only** (browser cache, per device) | Approved wording: "Offline reading (Pro) caches supported pages in the web app and the iOS app, on that device only." BANNED: server-stored copies, cross-device sync, Android/extension offline. Evidence: prod `apps/web/public/sw.js`, `lib/storage/offlineCache.ts` (5 MB HTML / 2 MB reader / 2 MB image caps), `components/settings/OfflineTab.tsx` (50 MB–1 GB slider), `components/bookmarks/CacheButton.tsx:36`; iOS `OfflineCoordinator.swift`, `OfflineContentManager.swift`. Cross-device is NOT shipped: prod API has 0 `savedOffline` field/endpoint (Android `Entities.kt:52-54` documents the iOS 404) |
| File uploads / "10 GB Pro allowance" | **built but DARK — claim still banned** (tightened 2026-09-26) | if enabled: Pro 10 GiB / Lifetime 2 GiB / **Free 0**, 500 MB/file | — | `lib/files-flags.ts` `ENABLE_FILES` default off ("future product, dark by default — founder decision"); prod `CHANGELOG_2026-09-26.md` §2 confirms dark. The number now has product evidence but zero public availability → never claim until launch, then re-verify quotas from `lib/file-quota.ts` |
| Marqly Teams | **shipped + public 2026-09-25** | $9/seat/mo, $72/seat/yr, min 3, USD | **web only** | approved wording in facts spec §Teams; dark list stays banned (files/storage, custom domains, team MCP, Viewer/Guest, SSO, per-board perms, extension save-to-team, mobile, non-USD, invoices, trial) |
| iOS / Android apps | shipped | Free access; Teams web-only | mobile | some IT locale landers still say "no Android" — fix queue |
