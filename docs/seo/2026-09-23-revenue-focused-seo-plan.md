# Marqly: a 90-day SEO plan built around paying switchers

Date: September 23, 2026. Planning horizon: September 23–December 22, 2026.

**Decision: make Diigo the first complete, measured switching journey. Improve the alternatives page, comparison, migration instructions, product handoff, and first-week experience together. Expand that approach to other sources only as qualified traffic and successful migrations justify it.**

The operating objective is more new paying customers who still use Marqly after 30 days. Organic traffic, rankings, and signups are useful diagnostic measures; they are not the business outcome.

This is a proposed execution plan, not a record of shipped changes. The review used the supplied paying-user report, the current marketing repository, selected public pages, and current Google guidance. It did not access raw billing/product data or a live Search Console property. Search-fetched pages can reflect older crawls; deployment discrepancies need a fresh production check.

## 1. What the evidence supports

### Strongest available direction

- The supplied report attributes purchases to switching and cleanup pages, including Diigo alternatives, Pocket alternatives, duplicate-bookmark finding, and best-bookmark-manager content.
- There are only 27 payers, including 15 new users. This supports a focused experiment, not a reliable forecast of conversion by keyword or country.
- Eight of 13 new payers in the report's timing subset paid on signup day. The landing page and initial product session deserve immediate attention.
- Imports, repeated saving, and iOS use correlate with payment. We have not established that any one of them causes payment.
- Nine of 27 payers have five or fewer bookmarks. An acquisition plan that increases purchases without useful adoption could simply increase cancellations later.
- Broad free utilities and localization produce signups with little demonstrated paid return. Bookmark migration and cleanup utilities are an important exception worth pursuing.

### Interpretations to avoid

“Diigo is bringing paid users” is treated here as **Diigo-related search intent converting on Marqly pages**, consistent with the report. Actual referrals from diigo.com must be measured separately. This plan does not propose mass-posting bookmarks on Diigo for backlinks.

Do not treat iOS access or ordinary device sync as inherently paid: the product facts file says mobile access and unlimited devices are included in Free. Use the cross-device workflow to activate users, then explain the actual paid capabilities such as supported clipboard account sync and AI retrieval.

Do not block countries or delete translations because a small cohort has not paid. Concentrate new editorial effort on English-language switchers in proven markets while preserving useful existing access. Language, location, timezone, payment acceptance, and buying intent are different variables.

Do not assume AI/MCP is already the main purchase driver: the report describes promising but very limited adoption. Demonstrate it as a relevant paid use case and test demand.

### Reconcile the measurement before publishing exact rates

The report mixes time windows and sources. Its channel table lists 247 signups while the narrative says roughly 450; the Google discussion lists two paying signups but names four landing-page types. The 15 new payers and 13-person timing subset also need explicit definitions. These may be legitimate cohort differences, but they cannot be combined into a page-level conversion forecast.

Keep separate: new versus legacy users; first purchase versus renewal; Stripe versus App Store; signup cohort date versus payment date; first touch versus later assistance; raw versus bot-filtered visits. The user report remains the directional input until those joins are verified.

## 2. What the repository reveals

| Finding | Evidence | Required action |
|---|---|---|
| Diigo decision pages already exist | `src/data/competitors/diigo.json`, `src/pages/alternatives/[slug].astro`, `src/pages/compare/[pair].astro` | Improve these URLs in place; preserve their existing relevance and links. |
| No dedicated Diigo migration route | `src/pages/migrate/` contains Pocket, Raindrop, mymind, Instapaper, and the hub | Add `/migrate/diigo` after testing export/import compatibility. |
| Diigo users receive generic migration advice | `switchSentence()` in `src/lib/compare-content.ts`; supported guide lists in both page templates omit Diigo | Replace generic assurances with a Diigo-specific route and tested limitations. |
| Migration copy overpromises | The migration hub says “zero data loss” and “zero lost tags” | Publish a field-by-field preservation table and exceptions instead of an absolute guarantee. |
| The alternatives ranking is predetermined | `rankAlternatives()` always returns Marqly first, then tools selected by category/prominence | Disclose Marqly authorship and recommend tools by the user's job; do not imply an independently measured overall ranking. |
| Diigo editorial data is dated August 2 | `src/data/competitors/diigo.json` | Recheck maintenance, platform support, prices, and export fields; link specific evidence. Remove unsupported claims rather than guessing. |
| Product truth conflicts across surfaces | The supplied report discusses offline; the product facts file prohibits offline claims; the fetched help pricing page describes Offline Mode and the old 100-bookmark access limit | Product owner verifies current behavior, then reconciles marketing, help, app, structured data, and `llms.txt`. |
| Existing payer-related content contains a plan conflict | `best-pocket-alternatives-2026.md` FAQ says Free includes AI search; product facts and comparison FAQ identify AI search as Pro | Correct highest-value articles and their generated FAQ markup first. |
| There is substantial existing content | Repository inventory: 47 English root blog Markdown files; 536 blog files including localized content, 623 locale pages, 400 prompts, 111 verdicts, 63 FAQs, 42 use cases | Audit and improve before increasing output. These are source-file counts, not verified indexed-page counts. |
| Older keyword targets are not a trustworthy demand baseline | `.seo/models/opportunity-tracking-matrix.md` contains precise volumes without visible provenance; `.seo/config.json` says GSC data is unavailable | Replace unsourced numbers with dated, attributable exports or “unknown.” Do not add overlapping keyword volumes. |
| Benchmark claims need substantiation | `ai-bookmark-retrieval-benchmark-2026.md` claims a 1,000-item test and 94% Top-3 accuracy | Locate datasets, query sets, execution records, and scoring evidence. The targeted review did not find supporting artifacts. If unavailable, remove numerical claims or rerun a reproducible study. |

The [public Diigo alternatives page](https://www.marqly.com/alternatives/diigo) surfaced an older trial offer in the search fetch. The repository's product facts say trials ended September 18. This is a **freshness/deployment check**, not proof the current production page still has the error.

## 3. Resource allocation and priorities

For the first six weeks, allocate approximately:

- **40%:** Diigo and other proven switching pages, migration evidence, and product handoff.
- **25%:** attribution, import reliability, and first-week activation with the app team.
- **20%:** factual corrections, technical SEO, and consolidation of existing content.
- **10%:** firsthand workflow guides for read-later, iPhone/Safari, and supported clipboard sync.
- **5%:** earning relevant references through genuinely useful migration evidence and tutorials.

These are suggested effort shares, not a budget or traffic forecast. Assume one engineering owner and a founder/editor with part-time product/analytics support. If capacity is lower, reduce the number of clusters, keeping Diigo and measurement first.

Pause new generic prompt pages, broad YouTube utility expansion, large batches of competitor permutations, and additional languages until they demonstrate a credible path to paid adoption. Keep serving existing useful pages.

## 4. The Diigo content and conversion plan

### URL ownership: one clear job per page

| Priority | URL | Intent and proposed title | Content needed | Next action |
|---|---|---|---|---|
| P0 | `/alternatives/diigo` — existing | **Diigo alternatives for highlighting, research, and saved links** | Short recommendations by need; real annotation and mobile comparisons; plan distinctions; migration constraints | Compare Marqly or inspect the Diigo migration guide |
| P0 | `/compare/marqly-vs-diigo` — existing | **Marqly vs Diigo: highlights, search, imports, and pricing** | Direct decision table; screenshots; where Diigo fits better; total first-year and renewal terms | Start free with a tested Diigo handoff |
| P0 | `/migrate/diigo` — new | **Move from Diigo to Marqly: export, import, and check your data** | Actual export steps; supported formats; preservation table; large-library behavior; failure recovery | Import using a verified app route |
| P1 | `/blog/how-to-export-diigo-bookmarks` — proposed | **How to export and back up Diigo bookmarks** | Destination-neutral backup instructions, actual sample files, field descriptions, export problems | View the file, then choose a migration path |
| P1 | `/web-highlighter` — existing | Highlight passages and retrieve them later | Demonstrate Marqly's current behavior; separate live-page highlights, PDF features, notes, and imported annotations | Save and highlight one real source |
| P1 | `/for-researchers` — existing | Organize and retrieve sources across a real research workflow | A credible firsthand workflow; source retrieval; notes; limitations for team/classroom use | Try the workflow with a small library |
| P2 | Existing `/tools/bookmark-file-viewer` or a validated Diigo mode | Inspect a Diigo export before switching | Parser compatibility and warnings; no data uploads unless disclosed and required | Continue to verified migration instructions |

The export article should exist separately only if it answers a meaningful backup task beyond the migration page and search evidence supports that distinction. Otherwise keep export instructions within `/migrate/diigo`. Do not publish additional near-duplicates for “best Diigo alternative,” “Diigo replacement,” and “apps like Diigo.”

### Rewrite the alternatives page for Diigo users

The current template emphasizes generic AI benefits. Diigo visitors may care most about years of annotations and research context. Start with their decision:

1. A concise answer organized by need: personal saved-web retrieval; collaborative/classroom annotation; PDF-heavy reading; straightforward bookmarking.
2. A comparison table that distinguishes highlighting on live pages from annotating PDFs and from preserving imported highlights. A single “highlights: yes” checkbox is insufficient.
3. Original screenshots and a short observed workflow for the recommended tools. Label untested features as documentation-based.
4. A clear Marqly fit statement and limitations. Do not imply its public boards replace collaborative Diigo groups.
5. A visible explanation of which source data can be moved. Link the migration guide before the visitor reaches the bottom.
6. Accurate Free/Pro boundaries and offer renewal terms close to the relevant CTA.
7. A byline, real verification date, and links to exact sources. Date changes should reflect actual rechecking.

Do not call Diigo abandoned, dead, or unsupported based on an old extension date alone. Verify specific facts or say what you could not verify. The official [Diigo export route](https://www.diigo.com/tools/export) required authentication in this review; no actual export was tested.

### Migration evidence required before publishing the guide

Create a controlled Diigo library with known examples, export it using a real account, and import into a clean Marqly test account. Obtain permission before using a customer's export, and sanitize test fixtures.

| Data or behavior | Verify explicitly |
|---|---|
| URLs and titles | Supported protocols, Unicode, long titles, correct total counts |
| Tags and dates | Multiple tags, delimiters, original dates versus import dates |
| Description and notes | Plain text versus HTML; whether both survive independently |
| Highlights | Text preservation, source URL, color, position, and ability to reattach to the live page |
| Groups and Outliners | Whether they export and how they map; clearly state unsupported structures |
| PDFs and cached articles | Distinguish a link from the actual file or cached body; do not imply archive recovery |
| Duplicate/repeated import | Predictable merge/skip behavior; no silent loss or multiplying records |
| Library size | Small, 500-item, 1,000-item, and larger fixtures; documented limits and recovery |
| Partial failure | Failed-item list, retry, readable error, reconciliation of input/imported/skipped/failed counts |
| Product value after import | Retrieve a known source, find it on another supported device, make a new save |

Publish “preserved,” “partially preserved,” or “unsupported” with the test date and format. If highlights do not migrate, state that before signup and describe a backup option that actually works. Do not block a truthful links-only guide on perfect annotation support, but do not call it a full research migration.

The report's 0/15 payment result for imports of 1,000+ bookmarks warrants investigation. It does not prove import size itself causes nonpayment. Inspect errors, timeouts, duplicates, onboarding, price exposure, and whether users were legacy/lifetime accounts.

### Preserve intent into the product

Use a supported app route or an agreed first-party `migration_source=diigo` handoff. Do not invent a deep link that the app cannot handle. Retain the original acquisition source rather than replacing it with internal campaign UTMs.

The proposed product journey is: create/sign into the account → choose Diigo import → receive a preservation preview → import → review counts and exceptions → retrieve one imported source → access it on a second supported device → save something new on another day.

Offer paid AI retrieval or clipboard sync at the relevant moment, with the actual Free/Pro boundary. Do not force an upgrade simply to complete a capability the Free plan already includes.

## 5. Expand the same approach carefully

| Cluster | Why it deserves attention | First work | Expansion condition |
|---|---|---|---|
| Diigo | User reports paid conversions; incomplete migration path | Two existing decision pages + one tested migration guide | Clean attribution and successful real imports |
| Pocket/read-later | Report names a payer-related article and read-later intent | Correct current article; align `/alternatives/pocket`, `/migrate/pocket`, and converter around distinct jobs | Verify current export/recovery facts; preserve working URLs |
| Bookmark cleanup | Duplicate finder appears in payer journeys | Improve cleanup-to-import CTA and counts; link migration and product benefits | Show successful imports or paid assistance, not just tool executions |
| Raindrop | Existing extensive pages, migration guide, analyzer, fixtures | Improve current funnel and factual accuracy | Evidence of qualified demand and successful migrations; do not assume parity with Diigo |
| iPhone/Safari/bookmark sync | Correlates with paid users and provides a real workflow | Refresh existing platform pages and connect them to switching guides | Validate the exact supported device behavior and plan boundary |
| Clipboard history/sync | Strong usage signal among several payers | Improve `/clipboard-history` with a two-computer Chrome/Edge demonstration | Validate demand and supported capture/sync surfaces |
| MCP over saved sources | Early evidence of value, limited adoption | Demonstrable guide using an existing integration URL if available | Working documented setup and user activation; never unsupported API claims |
| Pinterest/mymind/Karakeep | Some checkout intent; mixed paid evidence | Measure existing pages and fix obvious gaps | Observed qualified activation before a large content investment |

Clipboard positioning must be precise: the facts file describes web-page copy capture in Chrome/Edge and Pro account sync. It does not support promising universal OS clipboard sync or Safari/iPhone clipboard parity.

Suggested initial editorial cadence: **two substantial updates and at most one new evidence-backed page per week**. A good migration guide may consume that entire week's capacity. No word-count quotas, auto-generated publishing targets, or date-only refreshes.

## 6. Site-wide content quality and internal links

### Build an inventory with business outcomes

For each canonical URL record: content type, cluster, language, publish/update date, index status, GSC impressions/clicks, primary query group, referring domains if known, new signups, successful imports, first payments, D30 usage, and engineering/editorial effort.

Use four decisions:

- **Improve:** useful intent, unique value, impressions or qualified conversions, but weak answers or poor handoff.
- **Merge and redirect:** overlapping pages with substantially the same job; choose the destination using actual query, conversion, and link evidence. Preserve useful sections and update internal links.
- **Keep:** accurate and useful, including pages that support customers even with low search demand.
- **Noindex or retire selectively:** pages with no distinct value or public-search purpose after review. Preserve backlink value where there is a relevant replacement; return 404/410 where removal has no equivalent destination. Do not redirect everything to the homepage.

Do not remove all translations, prompts, or free tools as a batch. Zero conversions without adequate exposure and reliable attribution is not enough evidence. Start with a representative sample from each template, then expand only where repeated defects justify it.

### Internal linking

The Diigo alternatives page links to the comparison and migration page; the comparison links to migration and truthful pricing; export help links to migration and the file viewer; migration links to the appropriate device setup and retrieval guide. The migration hub includes Diigo. Relevant researcher/highlighter pages link to Diigo decision content where useful.

Use descriptive anchors such as “what transfers from Diigo” and “compare Marqly and Diigo.” Favor useful in-context links over adding another large site-wide grid. Audit actual incoming links to every priority page after build.

### Evidence standards

Every high-intent page needs direct answers, honest limitations, original evidence where it claims testing, and a verified next action. Update the shared competitor data where appropriate, but allow Diigo-specific editorial sections instead of forcing every product into identical copy.

Google emphasizes original value, firsthand experience, and accurate sourcing in its [helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content). Its [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) address scaled low-value content, including automated transformations. A large inventory is a reason to inspect quality, not proof of a penalty.

## 7. Technical SEO priorities

Keep and extend the existing Astro/static HTML, canonical, sitemap, redirect, metadata, and SEO-check infrastructure. Avoid a platform rewrite.

The September 12 historical crawl reported 1,868 sitemap URLs, all returning 200, with no canonical mismatches or broken/nonreciprocal hreflang. This is a useful baseline, not a fresh production certification. Previously removed fabricated rating markup is recorded in the truth ledger; do not reopen it as an active defect without new evidence.

1. **Validate priority production URLs.** Check status, final URL, canonical host/path, indexability, rendered text, app links, title, description, and social preview. Verify www/apex and slash variants resolve consistently. Local source correctness does not prove the deployed page is current.
2. **Use Search Console URL Inspection.** Confirm Google-selected canonical, crawled HTML, index coverage, and sitemap discovery for the highest-value pages. A successful HTTP request is not proof of indexing.
3. **Sitemap hygiene.** Include only canonical indexable 200 pages; remove redirect/noindex/error URLs; meaningful `lastmod`; no date changes solely to look fresh.
4. **Structured data accuracy.** Keep visible content and markup consistent. Use relevant supported types; avoid fabricated ratings, hidden claims, and schema added merely to inflate counts. Do not promise FAQ/HowTo rich results. Google's [documentation updates](https://developers.google.com/search/updates) record the FAQ rich-result retirement in May 2026; the older backlog's eligibility claims require correction.
5. **Performance by page family.** Measure homepage, Diigo decision pages, one article, migration, and interactive tools. Use field data where available, lab results as diagnostics. Fix measured image/JS/font/layout problems; do not presume Core Web Vitals are the growth bottleneck.
6. **Localized pages.** Validate reciprocal hreflang and self-canonicals for genuine translations. Do not canonicalize every language to English or point hreflang at redirects/noindex pages.
7. **App/help coordination.** Review public boards only if they are intentionally public, useful, and unique. Private libraries must remain private. Reconcile help articles with marketing; an external subdomain is still part of the customer's decision.
8. **Run existing gates when shipping.** Run the build, SEO regression checks, targeted orphan/link checks, and manual mobile/desktop checks for affected templates. Extend assertions for the actual claims being changed; avoid mass test work unrelated to the changes.

One concrete lower-priority performance candidate is `/prompt-gallery`: the September audit measured roughly 637 KB of HTML, and the current template renders every prompt card. Evaluate crawlable pagination or category hubs while keeping all retained prompts discoverable through ordinary links. Validate current size and user impact before assigning it priority over the Diigo path.

Technical effort should concentrate on defects affecting discoverability, trust, or conversion on valuable pages. No blanket indexing guarantee, “topical authority protection” guarantee, or target of 100% schema coverage.

## 8. Measurement: search to first purchase to continued use

### Establish the baseline in week one

Export available Search Console history (up to 16 months where available), with 28- and 90-day views by query, landing page, country, and device. Segment Diigo, other switchers, category terms, bookmark tools, general utilities, and localized pages. Separate Marqly-branded from nonbranded search.

Pull Bing Webmaster data as well; the report suggests Bing traffic may be valuable, but its small sample needs checking. Record search volumes and positions as unknown until a real source is available. Search queries are aggregate data and generally cannot be joined to individual purchasers.

### Proposed event contract

Reuse equivalent existing events where possible instead of creating duplicates.

The repository already has important infrastructure: `AttributionCapture.astro` creates a pseudonymous `visitor_id`, retains landing/referrer information in a parent-domain cookie, and posts to `/api/touch`; `CtaTracking.astro` records CTA/store clicks and stamps app links with placement-specific `src`; both main layouts configure GA4 cross-domain linking. Audit what reaches the app and billing records before adding more client tracking.

Two concrete checks matter: GA4 is deferred until three seconds after load, so brief visits and early clicks may be absent from its session view; the direct CTA transport can use a different identity from the attribution cookie. Verify a deterministic identity mapping into the authenticated account. Also inspect the attribution code's paid-click upgrade behavior: preserve an immutable original acquisition record alongside later touches so a later ad click does not silently rewrite organic acquisition in revenue reports. Do not simply load all analytics earlier and regress page performance.

| Stage | Event or authoritative record | Key fields |
|---|---|---|
| Marketing | landing and CTA click | Canonical path, cluster, locale, original referrer/source, CTA placement, content version |
| Account | signup complete | Pseudonymous account ID, original landing path, signup date, new/legacy flag |
| Migration | import start/complete/fail | Source tool, format, size band, duration, expected/imported/skipped/failed counts, error category |
| Activation | save, retrieval, supported second-device use | Day since signup, device family, new versus imported save, known workflow completion |
| Upgrade | paywall/checkout start | Trigger feature, plan, actual offer, content cohort |
| Revenue | confirmed first payment/refund/cancellation | Billing transaction ID, amount, currency, discount, account, billing platform |
| Retention | D7/D30 meaningful use | Distinct active/save days, retrieval, current paid status, refund state |

Use server-confirmed purchases and deduplicate by transaction ID. Reconcile Stripe and App Store totals with billing. Configure cross-subdomain measurement and check referral resets through authentication and checkout; preserve first touch and later content assistance separately. Respect consent and do not place email addresses, bookmark content, or raw sensitive URLs in analytics.

Measure unknown attribution explicitly. Do not hide it inside “direct,” and do not claim 100% acquisition coverage when consent or cross-device behavior prevents it.

### Weekly scorecard

| Metric | Purpose |
|---|---|
| New non-refunded payers by original content cluster | Primary acquisition outcome; separate legacy reactivation |
| Collected first-purchase revenue by cluster | Actual money, with discounts/refunds; not assumed renewal value |
| New payers active at D30 | Early quality signal; distinct from annual renewal retention |
| Successful import rate, by source and size | Detect friction hidden behind signup growth |
| Save on two separate days in week one | Report-supported activation hypothesis; track without treating correlation as causation |
| Relevant landing sessions → signup → import → payment | Explain where the funnel changes; always show counts and denominators |
| Search impressions, clicks, CTR, and position by query group | Diagnose discoverability and snippet performance |
| Content-assisted purchases | Understand articles that help after first landing without double-counting total customers |
| Support/import failures and refunds | Guardrail against attracting users the product cannot serve |

Use 7-day signup activation and 30-day first-payment windows consistently, plus later conversions reported separately. Compare only mature cohorts. D30 usage for users acquired near the end of the 90-day plan necessarily arrives later.

After the first two weeks, set numeric improvement targets from verified denominators. Before that, commit to operational milestones: tested Diigo path; corrected claims; measurable handoff; all priority URLs audited. There is no defensible revenue projection from the available page-level evidence.

## 9. Experiments and decisions

Traffic is too small for many simultaneous A/B tests. Ship one meaningful change per small cohort, annotate release dates, review sequentially, and avoid claims of causality from before/after movement alone.

| Experiment | Hypothesis | Evaluate | Guardrail |
|---|---|---|---|
| Diigo-specific CTA and handoff | Preserving switching intent improves completed imports | Import completion and first purchase per qualified landing cohort | No increase in import failures or misleading expectations |
| Preservation table near CTA | Clear limitations improve confidence and fit | Successful imports, support issues, refunds, paid usage | More CTA clicks alone is not a win |
| Post-import retrieval task | Finding one known source establishes value | Same-session retrieval and second-day activity | Do not force arbitrary board creation |
| Supported second-device setup | A useful multi-device loop encourages continued use | D7 and D30 activity | Mobile/device access presented accurately as Free where applicable |
| Paid workflow explanation | A specific AI/clipboard use case explains Pro | Upgrade behavior and continuing paid use | No unsupported platform or unlimited-AI claims |

Pricing changes belong in a separately owned experiment. First make the current offer clear, including the renewal price. Do not change pricing, content, and onboarding together and then attribute the result to SEO.

Review at days 30, 60, and 90:

- Impressions but few clicks: inspect query fit, title, snippet, and competing results.
- Clicks but few signups: inspect promise, evidence, relevance, and next step.
- Signups but failed imports: prioritize product reliability before adding more migration traffic.
- Successful imports but little repeated use: improve retrieval and ongoing capture workflows.
- Paid users with weak continued use: address value and expectations before expanding the cluster.
- No impressions on an indexed useful page: inspect demand and discovery; do not automatically publish more variants.

If traffic is insufficient, report “inconclusive,” preserve the measurement, and prioritize qualitative migration observations. Do not call a winner based on one payment.

## 10. Authority, Bing, and AI-assisted discovery

Publish genuinely useful migration evidence: a documented preservation table, sanitized fixture formats, a short real screen recording, and a user story only with permission. These can earn relevant references from research, annotation, and productivity communities.

Maintain accurate existing product listings and identify a small number of relevant editors or resource owners who would benefit from the guide. Outreach is a proposed later task; no messages or submissions were sent during this planning work. Avoid purchased links, mass directory submissions, automated forum promotion, and manufactured reviews.

For AI-assisted discovery, make important answers easy to extract from ordinary HTML: clear definitions, direct comparisons, limitations, sources, and consistent pricing. Maintain existing machine-readable descriptions accurately, but do not build a separate speculative AI content factory. Google states that its AI search features do not require special AI text files or special schema in its [AI features guidance](https://developers.google.com/search/docs/appearance/ai-features).

Track identifiable AI referrals and subsequent paid usage separately from organic search. Use any available first-party search AI reporting without claiming it gives a complete picture of all assistant mentions. Occasional manual prompt checks are qualitative observations, not market-share statistics.

## 11. Execution roadmap

| Timing | Deliverables | Responsible role | Exit condition |
|---|---|---|---|
| Days 1–7 | Reconcile product facts; establish page/cohort baseline; audit Diigo and payer-related pages; verify real Diigo export access | Founder/product owner + analytics + engineering | Supported promises and measurable events agreed; gaps explicitly recorded |
| Days 8–14 | Test Diigo import; fix material import failures; update alternatives/comparison; publish migration guide with limits; add relevant links | App engineer + marketing engineer + editor | Real export → import → retrieval journey works as documented; production checks pass |
| Days 15–30 | Add export article only if distinct; improve cleanup handoff; refresh Pocket content; run post-import activation changes | Editor + engineering | First weekly cluster scorecard; no unverified migration promises |
| Days 31–45 | Improve Raindrop's existing journey; refresh iPhone/Safari/sync and clipboard pages; review duplicate search intents | Editor + product + engineering | Existing pages reflect actual capabilities and clear intent ownership |
| Days 46–60 | Publish one substantiated migration study or authorized user story; evaluate Diigo results; selectively consolidate weak duplicates | Founder/editor + analytics | Evidence-based expand/hold decision; redirects and links validated |
| Days 61–90 | Scale the best-supported cluster; extend only proven workflows; review mature D30 paid cohorts; plan next quarter | Founder + analytics + product | Decision based on attributable purchases, activity, support cost, and uncertainty |

The 90-day period ends before the first annual renewals in February 2027. It can establish acquisition and early usage quality, not proven annual retention or lifetime value.

### Suggested implementation packages

1. **Product truth and high-intent copy:** shared product facts, relevant competitor data, pricing/FAQ statements, migration guarantees. Coordinate help/app corrections with their owners.
2. **Attribution and cohort reporting:** marketing CTA properties, app handoff, server import/payment events, billing reconciliation. Requires app/analytics work outside this repository.
3. **Diigo migration path:** tested fixtures, documented field mapping, new guide, template allowlists, migration hub, contextual links.
4. **Diigo decision-page improvements:** specialized editorial blocks, evidence, task-specific comparisons, clear plan limits.
5. **Existing revenue-page refresh:** Pocket, best-bookmark-manager, duplicate finder, then Raindrop according to measured demand.
6. **Ongoing workflow pages:** iPhone/Safari, read-later, clipboard, and validated MCP guidance.
7. **Selective consolidation and technical repairs:** only supported by page-level evidence and production validation.

Keep each package reviewable. Marketing content can be prepared while app work proceeds, but publish only promises the tested product supports.

## 12. First sprint backlog

| ID | Priority | Task | Acceptance criterion |
|---|---|---|---|
| SEO-01 | P0 | Define Diigo-attributed customers and visits | Separate Diigo query/page intent, diigo.com referrals, new users, and legacy users; document unknowns |
| SEO-02 | P0 | Reconcile Free/Pro, offline, mobile, and pricing | Product owner verifies behavior; one dated truth table; conflicting priority copy identified and corrected |
| SEO-03 | P0 | Test a real Diigo export | Format and field report with sanitized fixture; no assumed highlights preservation |
| SEO-04 | P0 | Inspect large import failures | Reproducible results by size; clear counts and recovery; concrete fixes for observed failures |
| SEO-05 | P0 | Add tested Diigo migration guide | Screenshots, supported fields, exceptions, app handoff, pricing boundaries, relevant links |
| SEO-06 | P0 | Upgrade existing Diigo decision pages | Job-specific advice, honest comparison, original evidence, prominent migration link |
| SEO-07 | P0 | Verify acquisition-to-payment attribution | Controlled test journey reconciles landing, account, import, and billing events without double-counting |
| SEO-08 | P1 | Refresh existing payer-related articles | Remove contradictory free AI and trial claims; verify migration and renewal statements |
| SEO-09 | P1 | Validate priority URL technical behavior | Correct canonical, indexability, internal links, schema/text consistency, app links, and production rendering |
| SEO-10 | P1 | Review first mature activation cohort | Report raw counts for imports, retrieval, second-day activity, payments, and failures |
| SEO-11 | P1 | Substantiate benchmark and demand figures | Evidence attached or unsupported figures removed; no recycled unsourced volume forecasts |
| SEO-12 | P2 | Decide on the next content cluster | Decision cites actual demand, qualified activation, support burden, and editorial cost |

The most valuable next deliverable is a truthful, testable Diigo switching experience. Every new article should either help someone choose, help them move, or help them get continuing value from the library they moved.
