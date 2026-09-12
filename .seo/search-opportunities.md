# Scored opportunity backlog

Priority per the master brief §66:

```
Priority = (BV*2.0 + SO*1.5 + Conf*1.5 + SR*1.5 + CV*1.0 + Urg*1.0) / (Effort + Risk + 1)
```

BV = business value, SO = search opportunity, Conf = confidence, SR = strategic
relevance, CV = compounding value, Urg = urgency, all 0–5. Effort and Risk 0–5.
Scores are a discipline for comparing lanes, not a verdict — sanity-check the
ordering before acting.

**Blocker that shapes this whole list:** Google Search Console is unavailable
(see `config.json`). Without impressions, clicks, CTR and position, the CTR,
striking-distance, cannibalisation and content-refresh lanes cannot be
evidence-ranked. They are scored on structural merit only and marked ⛔ where
acting blind would violate "do not rewrite successful content without evidence".

---

## Completed 2026-09-12

| # | Lane | Action | Priority | Result |
| --- | --- | --- | --- | --- |
| 1 | STRUCTURED-DATA | Remove fabricated `AggregateRating` 4.8/150 | 12.2 | 801 URLs → 0 |
| 2 | MEASUREMENT | Repair stale truth ledger (pricing, free tier, ChatVault) | 11.7 | 3 conflicts resolved |
| 3 | MEASUREMENT | 16-gate regression suite + negative test | 7.3 | all gates pass |
| 4 | INTERNAL-LINK | Localized link hub for 11 locale trees | 6.8 | 1,890 orphans → 1 |
| 5 | TECHNICAL | Honest sitemap `lastmod` from frontmatter | 6.0 | 0% → 93% coverage |
| 6 | TECHNICAL | Align `i18n.locales` with the 12 live locales | 3.0 | latent bug removed |

---

## Next ranked opportunities

### 1. Obtain Search Console + Bing Webmaster access — 14.2 · MEASUREMENT
- **Evidence:** every query-level lane is currently blind. The site has 1,890
  indexable URLs across 12 locales and 131 comparison pages, and we cannot say
  which of them earn impressions.
- **Impact:** unlocks striking-distance (pos 4–20), CTR, cannibalisation,
  decay and indexation-coverage work, and is the only way to validate whether
  the six new locale trees have any demand at all.
- **Effort:** low (user action: property access or a one-off CSV export of
  Performance + Pages + queries). **Risk:** none.
- **Why it beats everything else:** no content or technical change below can be
  *prioritised* correctly without it. This is the highest-leverage action
  available and it is not an engineering task.

### 2. Add `width`/`height` to 11 images — 7.2 · TECHNICAL (CLS)
- **Evidence:** crawl found exactly 11 `<img>` without intrinsic dimensions:
  8 on `/`, 2 on `/extension`, 1 on `/tools/open-graph-checker`. Everything else
  on the site sets dimensions.
- **Impact:** removes avoidable layout shift on the two highest-traffic entry
  pages; `/` is the primary organic landing surface.
- **Effort:** very low (3 files). **Risk:** very low — verify no visual reflow.
- **Why now:** cheapest measurable Core Web Vitals win available without lab data.

### 3. Shrink `/prompt-gallery` index HTML (637KB) — 5.1 · TECHNICAL
- **Evidence:** 637KB vs a 62KB site median and 90KB p90 — 7–10x the rest of the
  site, and it is the hub for 411 gallery pages (22% of the index).
- **Impact:** faster LCP/parse on a high-crawl-volume hub; lower bandwidth for
  crawlers that must fetch it to reach every gallery page.
- **Effort:** medium (paginate or window the listing). **Risk:** medium — it is
  the discovery path for the whole gallery namespace, so keep every item
  reachable within 2 clicks or paginate with crawlable links.

### 4. Validate locale demand before expanding further — 5.75 · INTERNATIONAL
- **Evidence:** 11 locale trees, ~620 localized pages, 533 blog files. The six
  newest (ja/zh/ko/nl/pl/tr) shipped within days of this run with **no** demand
  data. Their content depth is legitimate (914/752/987 content units for
  ja/zh/ko — not thin), so this is a demand question, not a quality one.
- **Impact:** prevents continued investment in trees that may earn nothing, and
  identifies which 2–3 locales actually deserve deeper native keyword work.
- **Effort:** low once GSC exists. **Risk:** low.
- **Note:** §44 warns that literal English keyword translations rarely match
  local demand. Current trees are translations of English slugs; native keyword
  research per locale has not been done.

### 5. IndexNow submission on publish/update — 5.0 · TECHNICAL (Bing)
- **Evidence:** robots.txt already explicitly welcomes Bingbot and AI crawlers,
  but nothing notifies Bing when the ~1,890-URL estate changes.
- **Impact:** faster Bing/Copilot pickup; Bing is also the grounding source for
  several AI answer engines, so this is partly an AEO play.
- **Effort:** medium (key file + hook into deploy). **Risk:** low — must fire on
  real changes only, never resubmit unchanged URLs.

### 6. `/prompt-gallery/category` — the last orphan — 4.3 · CONSOLIDATE
- **Evidence:** the single remaining page with zero inbound internal links, and
  the thinnest page on the site at 112 content units.
- **Impact:** small. Either link it from `/prompt-gallery` with real content
  behind it, or fold it into the gallery index.
- **Effort:** low. **Risk:** low.

### 7. Title/description length pass — 3.9 · CTR ⛔ partially blocked
- **Evidence:** 251 titles > 65 chars, 107 descriptions < 70 chars, 22
  descriptions > 175 chars. Zero duplicates, zero missing.
- **Impact:** unknown without CTR-by-position data. Truncation is only a problem
  on pages that actually earn impressions.
- **Effort:** high (250+ pages) — and these are templated/commercial pages where
  the long tail is often the differentiator.
- **Risk:** high if done blind: §97 forbids rewriting successful content without
  evidence. **Defer until GSC.** Only act on pages with measured impressions and
  CTR below position expectation.

### 8. `help.marqly.com` intent boundary — 4.1 · CONSOLIDATE
- **Evidence:** not yet crawled. The brief flags possible cross-subdomain
  cannibalisation; the 64 `/faq/*` QAPage URLs on www overlap the help center's
  natural territory by design.
- **Impact:** unclear until measured. Marketing site should own
  discovery/evaluation/comparison; help center should own operation and
  troubleshooting.
- **Effort:** medium (crawl the subdomain, map intent owners). **Risk:** medium —
  do not touch help-center canonicals without confirming which entity currently
  wins each query.

### 9. Segmented sitemaps — 4.25 · TECHNICAL
- **Evidence:** one `sitemap-0.xml` holds all 1,890 URLs. Under the 50k limit, so
  not a defect.
- **Impact:** low. Cleaner reporting in GSC per namespace (blog / compare /
  alternatives / tools / prompt-gallery / per-locale), which makes indexation
  coverage far easier to read.
- **Effort:** low–medium. **Risk:** low. Do this together with #1 so the
  segmentation is actually useful.

### 10. Developer-ecosystem backlink asset (MCP server + `/integrations/mcp`) — 3.75 · OFFPAGE
- **Evidence:** already scoped as PR 6 in the war-plan backlog, not built. The
  site has no original-data or tool asset that earns links on merit beyond the 19
  existing free tools.
- **Impact:** authority is the stated binding constraint ("bridge the authority
  deficit with Raindrop.io"). A genuinely useful open-source MCP server is a
  credible link magnet in developer communities and reinforces the entity.
- **Effort:** high (real engineering + directory submissions). **Risk:** medium —
  only worth doing if it actually works and is maintained; a dead repo is worse
  than none.

### 11. Original-data linkable asset — 3.2 · OFFPAGE / content moat
- **Evidence:** none yet. Candidate: anonymised, aggregated bookmark-decay or
  duplicate-rate research from real libraries (§48).
- **Impact:** high if it lands — statistics get cited by journalists and by AI
  answer engines, and it is the one asset competitors cannot cheaply clone.
- **Effort:** high, and **gated on privacy review** — must be aggregated,
  anonymised and legally cleared (§86). Do not start without that sign-off.

---

## Deliberately not queued

- **New content creation.** Nothing in the current evidence justifies a new page.
  The site already has 52 root landers, 131 comparison pages, 26 alternatives,
  64 FAQs, 19 tools, 411 prompt pages and 44 English blog posts. Per §96, a new
  page needs a query cluster with no existing owner; without GSC we cannot show
  that, and the existing estate has measurable defects worth more than new URLs.
- **Pruning the prompt gallery.** 411 pages at a 594-content-unit median are not
  thin, they carry full schema, and PR 5 already grounded them in the product
  entity. No evidence of harm; pruning on volume alone would violate §65.
- **Re-testing the Feb-2026 Semrush findings further.** All were re-measured and
  are clean. Do not spend another cycle on them.
