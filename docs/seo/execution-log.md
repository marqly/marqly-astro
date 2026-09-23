# Marqly SEO execution log

Mission 76 format — every shipped item: date · URL/system · change · reason ·
hypothesis · metric · baseline · review date · result. Newest first.

The machine-readable page ledger is **`url-inventory.csv`** (regenerate after any
content change: `npm run build && node active/scripts/gen-inventory.mjs`).
GSC/GA4/billing columns ship as `pending-export` — join funnel data in there once
exports exist; that single CSV is the one source of truth for page decisions.

| Date | System | Change | Reason | Hypothesis | Metric | Baseline | Review | Result |
|---|---|---|---|---|---|---|---|---|
| 2026-09-23 | build/crawl | Full clean rebuild + 16-gate audit + link/orphan/OG audits on 1,911 pages; Feb crawl assumptions discarded | Mission §5 — never trust stale crawls | production state == repo state except 1 unpushed commit | page count / gate pass | 1,909 pages, 16/16 | weekly | confirmed (1,911 incl. diigo + 1 unpushed landing commit) |
| 2026-09-23 | url-inventory.csv | Canonical inventory generated from build (type/lang/canonical/indexability/title/desc/inbound/outbound + pending funnel cols) | Mission §7 source of truth | inventory catches cannibalization that spreadsheets missed | 1,910 rows, 2 orphans | — | 2026-10-07 | shipped, orphans since fixed (0) |
| 2026-09-23 | /blog/ai-bookmark-retrieval-benchmark-2026 | Removed fabricated 1,000-save "results" (94/78/82%); rewrote as runnable protocol + docs-verified matrix; fixed 8 citing pages | Zero-tolerance factual rule (§59); no evidence artifacts exist for the claimed test | honesty converts better than fake authority; URL keeps topical slot | rankings/CTR on this URL; trust metrics none yet | ~10 days old, no GSC data | 2026-10-23 | shipped |
| 2026-09-23 | 6 plan-boundary copy fixes | pocket-FAQ, what-is-an-ai-bookmark-manager, what-ai-model, how-to-search, web-highlighters, self-hosted | "free plan includes AI search" contradicts facts sheet (semantic/AI = Pro) | accurate boundaries cut refund/cancellation complaints from mismatched signups | refund rate, D30 of AI-intent signups | 27 payers (all-time) | 2026-10-23 | shipped |
| 2026-09-23 | 7 "zero data loss" removals | migrate hub, raindrop guide, Nav, viewer status, compare index, alternatives template | untested absolute guarantee → §59/74 violation + §14 preservation-table standard | what-to-check framing converts switchers at least as well, with more trust | /migrate/* → app import click rate | uninstrumented | 2026-10-23 | shipped |
| 2026-09-23 | faq/can-i-get-a-refund | $8 monthly → $9 monthly | facts sheet says Pro monthly is $9 | pricing trust | n/a | n/a | 2026-10-23 | shipped |
| 2026-09-23 | /migrate/diigo + templates | New Diigo migration guide w/ honest preservation table (highlights/Outliners/groups DON'T transfer + rescue workflow); `MIGRATION_SLUGS`/`MIGRATIONS` constant replaces 8 hardcoded lists; truthful `switchSentence('diigo')` | Payer report attributes conversions to Diigo intent; plan SEO-06; no Diigo migration route existed (§13) | switcher journey alternatives→compare→migrate→import converts above generic signup flow | qualified imports from Diingo-intent landers | uninstrumented | 2026-12-22 | shipped (end-to-end export test pending) |
| 2026-09-23 | OG images | migrate-hub/pocket/mymind/instapaper cards were **404 in production**; generator now emits migrate family + `ONLY=` filter; 6 cards generated | social previews broken on commercial funnels | preview completeness | n/a | n/a | — | shipped |
| 2026-09-23 | /uninstall, /prompt-gallery/category | Orphan fixes (30-sec survey link on /extension; category hub link on gallery) | §33 zero orphans; uninstall survey feeds §5 uninstall-reasons corpus | survey responses → changelog of friction driving product fixes | responses/week | 0 | 2026-10-07 | shipped |
| 2026-09-23 | SourceNote.astro | Vendor-authorship disclosure on every alternatives/compare page | §11 honesty: page says "best… ranked" while ranked by Marqly | disclosure raises trust/clicks vs. penalty risk of implied-independence flags | n/a | n/a | 2026-10-23 | shipped |
| 2026-09-23 | truth-ledger/change-log/facts | Reconciled mid-day first-year price move $39→$49 (parallel commits 565e8ae/b005a26) with the 3 surfaces written mid-move (Diigo guide, benchmark, facts sheet); benchmark retraction recorded w/ evidence-rule | two sessions, one number — repo must be internally consistent pre-deploy | n/a | n/a | n/a | shipped |

## Analysis gaps (access blocked in this environment)

- **GSC / GA4 / Bing WMT / Mixpanel / Stripe:** no exports available (`.seo/config.json`
  confirms GSC unavailable). Everything funnel-side in the inventory is `pending-export`.
  → Needs: last-16-month GSC exports (URL + query + page, by country/device), Bing
  verification status, GA4 organic→signup joins, Stripe attribution export. §31, §32, §40, §41
  cannot start until files or API access are provided.
- **App-side events** (import success/fail, retrieval): out of this repo; the
  event contract in the plan doc §8 stands.

## Live decision queue (from inventory + competitor data, priority-ordered)

Tier 0 — already attributable to payers (upgrade in place, no new URLs):
1. `/alternatives/diigo` content pass: job-based recs, annotation-vs-PDF-vs-imported
   distinction, migration constraint box (plan §4 rewrite spec) — needs product screenshot evidence.
2. `/compare/marqly-vs-diigo`: first-year total price + renewal terms block (facts: $39
   first year, renews $72) + "who should stay with Diigo" paragraph.
3. Pocket cluster freshness: re-verify `what-is-in-your-pocket-export-file` + converter
   against a real 2026 export file.

Tier 1 — migration build-out with evidence-first rules:
4. `/browser-bookmarks` hub: Chrome/Safari/Firefox/Edge export→import guides (§16);
   browser import is already a documented Marqly capability so guides are publishable.
5. Duplicate-finder page → post-result CTA path (§64 experiment) — analyzer exists at
   `/tools/duplicate-bookmark-finder`; check handoff copy for the same "clean first,
   then bring it here" pattern.
6. MyMind/Karakeep migration pages only after export format verification (no repeats of
   unverified Diigo-style assumptions).

Tier 1 — retrieval cluster pillar (§18):
7. `How to actually find things you've saved online` pillar linking the existing
   semantic-search FAQ/blog set; merge-cannibalization candidates: `how-to-search-bookmarks-with-ai`,
   `ai-bookmark-managers-semantic-search-compared`, the corrected benchmark page — define
   one as pillar owner, redirect/demote the rest only with query evidence (needs GSC).

## Next-7-days shipping list (no approvals needed, per mission §75)

- Day 1 (done this session): integrity sweep + inventory + diigo journey (above).
- Day 2: Diigo decision-page upgrade (screenshot pass requires app access — if none, do
  the text restructure + per-job recs; label docs-based items honestly).
- Day 3: `/migrate/browser` guide set (4 browser exports, each verified against the
  current browsers' actual menu paths this week).
- Day 4: cleanup→import CTA wiring on duplicate-finder/dead-link tools (§64).
- Day 5: benchmark lab run started (this time real: 20-item pilot on mymind/karakeep/
  raindrop free tiers + a dated evidence dir in active/logs/benchmark/).
- Day 6: refresh verification sweep for top-traffic compare pages (re-curl competitor
  pricing pages; update JSON lastVerified where changed).
- Day 7: weekly ledger post + inventory diff vs yesterday (page delta review).

## 2026-09-23 deploy record

- `git push marqly-astro main:main` (4e6cdbb→6b508fe, 6 commits incl. the parallel
  $49-pricing pair + StoreButtons landing change). Workers Builds: success.
- Verified live on www.marqly.com: /migrate/diigo (preservation table), honest
  benchmark rewrite, /alternatives/diigo→/migrate/diigo link, all migrate OG cards 200
  (were 404 pre-deploy), homepage store-buttons change.
- ACTION for owner: GSC URL-inspect + request indexing for /migrate/diigo,
  /blog/ai-bookmark-retrieval-benchmark-2026 (major change); confirm STANDING49 promo
  exists in Stripe before the $49 copy converts traffic (site now advertises it).
- Note: `marqly-astro.trymarqly.workers.dev` returns CF error 1014 (workers.dev
  subdomain banned/flagged account-side). Not caused by this deploy; www unaffected.
