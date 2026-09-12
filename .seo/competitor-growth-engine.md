# Marqly Competitor Growth Engine — First Execution Sprint

**Execution Date:** 2026-09-12
**Target Objective:** Build a global competitor-search acquisition engine driving ~100× qualified competitor-influenced traffic to Marqly.

## 1. Executive Summary & Dynamic Rankings

We maintain TWO distinct rankings: **Brand Fame Ranking** (raw public search volume and fame) versus **Marqly Capture Value Ranking** (strategic commercial acquisition value). Resource allocation is strictly driven by the Capture Value Ranking.

### Ranking A: Brand Fame Ranking (Public Visibility)
| Rank | Competitor | Fame Score | Estimated Search TAM | Fame Tier |
| :--- | :--- | :---: | :---: | :---: |
| 1 | **Notion** | 98/100 | 45,000,000 | Tier S |
| 2 | **Pocket** | 85/100 | 2,500,000 | Tier S (Displaced) |
| 3 | **Raindrop** | 74/100 | 650,000 | Tier A |
| 4 | **Instapaper** | 72/100 | 550,000 | Tier A |
| 5 | **Readwise** | 68/100 | 450,000 | Tier A |
| 6 | **Readwise-reader** | 65/100 | 380,000 | Tier A |
| 7 | **Mymind** | 58/100 | 290,000 | Tier B |
| 8 | **Karakeep** | 45/100 | 140,000 | Tier B |
| 9 | **Linkwarden** | 40/100 | 110,000 | Tier B |
| 10 | **Anybox** | 32/100 | 65,000 | Tier C |

### Ranking B: Marqly Capture Value Ranking (Resource Allocation)
| Rank | Competitor Focus | Capture Score | Relevant TAM | Product Fit | Switch Intent | Conversion Potential | Key Acquisition Thesis |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| 1 | **Pocket** | **108.4** | 350,000 | 4.8/5.0 | 5.0/5.0 | 4.2/5.0 | Discontinued service, 20M+ orphaned users looking for active replacement. Huge immediate capture. |
| 2 | **mymind** | **80.9** | 95,000 | 5.0/5.0 | 4.8/5.0 | 4.9/5.0 | Identical target customer: paying for AI organization, zero-filing, semantic search, private memory. High conversion. |
| 3 | **Readwise Reader** | **61.6** | 85,000 | 4.4/5.0 | 4.5/5.0 | 5.0/5.0 | High willingness to pay ($120/yr). High frustration with complex UI and steep pricing. |
| 4 | **Notion Web Clipper** | **61.1** | 180,000 | 4.2/5.0 | 4.4/5.0 | 4.5/5.0 | Target only web clipping & research database friction. High volume, strong dissatisfaction with slow clipper. |
| 5 | **Instapaper** | **48.2** | 75,000 | 4.2/5.0 | 4.0/5.0 | 3.8/5.0 | Pocket displacement secondary beneficiary; users seeking smarter AI search and modern UI. |
| 6 | **Raindrop.io** | **47.7** | 220,000 | 4.5/5.0 | 3.9/5.0 | 4.0/5.0 | Category incumbent; huge comparison graph overlap. Target folder fatigue. |
| 7 | **Karakeep (Hoarder)** | **45.8** | 55,000 | 4.6/5.0 | 4.2/5.0 | 3.6/5.0 | Target users tired of managing Docker/local Ollama who want identical AI auto-tagging in cloud. |
| 8 | **Readwise (Highlights)** | **43.3** | 60,000 | 3.5/5.0 | 3.8/5.0 | 4.6/5.0 | Price resistance ($54-$120/yr). Capture users wanting bookmarking alongside highlights. |
| 9 | **Anybox** | **40.1** | 35,000 | 3.8/5.0 | 3.6/5.0 | 3.8/5.0 | Apple ecosystem users wanting cross-platform Windows/Android access, web app, and AI auto-tagging. |
| 10 | **Linkwarden** | **39.6** | 40,000 | 3.8/5.0 | 3.8/5.0 | 3.4/5.0 | Users wanting fast mobile and extension saving without heavy local PDF storage overhead. |

> [!IMPORTANT]
> **Why mymind Ranks Above Instapaper & Readwise in Capture Value:**
> mymind searchers represent Marqly's highest-LTV ICP: people actively paying for an AI-enhanced place for bookmarks, notes, images, and saved knowledge without wanting manual folder organization. Despite smaller raw brand fame than Instapaper, its conversion rate is projected to be 6–8× higher per visit.

---
## 2. 100× Growth Mathematical Model

To reach 100× competitor-influenced qualified organic traffic, growth expands multiplicatively across 5 independent vectors:
```text
100× Growth Engine Decomposition:
  4.0×  Expansion in competitor & migration keyword footprint (from 26 to 105+ high-intent clusters)
× 3.0×  Multi-locale international capture (EN + DE, FR, ES, IT, NL, JA, KO, PT, PL)
× 2.0×  Average ranking progression (from striking distance pos 8-15 to top 3)
× 1.5×  SERP CTR uplift (rich schemas, comparison tables, verified benchmark data)
× 3.0×  Generic competitor keyword theft ('ai bookmark manager', 'zero filing bookmark app', etc.)
≈ 108×  Total Qualified Traffic Expansion
```

---
## 3. High-Priority Competitor Opportunity Maps

### A. Pocket Displaced-User Opportunity Map (Event Priority S)
- **Factual Status:** Mozilla shut down Pocket on July 8, 2025. Export window permanently closed on October 8, 2025. All cloud servers decommissioned.
- **Search Reality:** Over 350,000 monthly searches still looking for Pocket replacements, alternatives, and export tools.
- **Strict Accuracy Rule:** Never tell users to 'export their Pocket library now'. Accurately separate users who have their export file from users starting fresh.
- **Acquisition Assets:**
  1. Dedicated lander `/migrate/pocket` with zero-friction export upload.
  2. Free browser utility `/tools/pocket-export-converter` converting CSV/HTML locally.
  3. Definitive flagship review: *'Pocket Is Gone: The Best Replacements in 2026'*.

### B. mymind ICP Displacement Opportunity Map (Priority A+ Elevated)
- **Product Positioning:** 'Zero-organization visual memory'. AI auto-tags and OCRs everything.
- **Vulnerabilities / Switching Triggers:**
  1. **Strictly no mass import:** Users cannot bring in browser bookmarks, Pocket, or Raindrop.
  2. **Strictly no sharing:** No public boards, no client sharing, no collaboration.
  3. **High pricing:** AI summaries require the $12.99/mo Mastermind plan ($129/yr).
  4. **Strict free limit:** Free plan caps at 100 cards.
- **Marqly Winning Thesis:** Deliver identical zero-maintenance AI auto-tagging, summaries, and semantic retrieval, while offering full bookmark imports, shareable public boards, and a 2,000-save free tier at half the annual price ($39 first year, $72/yr).

### C. Readwise vs Readwise Reader Intent Split
- **Intent Cannibalization Prevention:**
  - **Readwise (Highlight Sync):** Target book readers, Kindle sync, Obsidian/Notion note sync, spaced repetition review. Acknowledge when a user wants daily book flashcards, Marqly is not the right tool.
  - **Readwise Reader (Reading Inbox):** Target power-readers, RSS triage, PDF/EPUB annotations, Ghostreader AI. Attack high pricing ($120/yr) and UI complexity.

### D. Notion Web Clipper Slicing Strategy
- **Relevance Filter:** Never target broad 'Notion alternative' (CRM/wikis).
- **Target Intent:** 'Notion web clipper alternative', 'Notion for bookmarks', 'Notion bookmark database too slow'.
- **The Pitch:** Replace high-maintenance database schemas with Marqly's purpose-built, automatic AI bookmark indexing.

---
## 4. Migration Capability Matrix

| Competitor | Export Format | Marqly Import Support | Fields Preserved | Friction / Workaround |
| :--- | :--- | :---: | :--- | :--- |
| **Pocket** | `ril_export.html` / CSV | Direct | Titles, URLs, Tags, Timestamps | Unzip CSV or upload HTML directly |
| **Raindrop.io** | HTML / CSV | Direct | Titles, URLs, Tags, Folders, Notes | Direct export from Raindrop settings |
| **Chrome / Edge / Safari / Firefox** | Netscape HTML | Direct | Titles, URLs, Folder trees | Standard browser export |
| **mymind** | `cards.csv` + media ZIP | CSV via Browser Importer | URLs, Titles, Notes, Tags | mymind forbids import; Marqly parses their CSV |
| **Instapaper** | HTML / CSV | Direct | Titles, URLs, Folders, Highlights | Export from Settings → Export |
| **Readwise Reader** | HTML / CSV | Direct | URLs, Titles, Notes, Tags | Export library HTML |
| **Karakeep / Hoarder** | JSON / HTML | Direct | URLs, Tags, Notes, Highlights | Direct HTML export |
| **Linkwarden** | HTML / JSON | Direct | URLs, Tags, Collections | Standard HTML export |
| **Anybox** | HTML / JSON | Direct | URLs, Tags, Notes | Export HTML from Mac app |
| **Notion** | CSV / HTML | CSV Import | URLs, Titles, Custom Properties | Export database as CSV |

---
## 5. Comparison Graph Expansion Matrix

High-value comparison edges in `src/content/verdicts/`:

- [x] `mymind-vs-notion-web-clipper` (Visual canvas vs structured database)
- [x] `karakeep-vs-linkwarden` (Self-hosted local AI vs collaborative archival)
- [x] `readwise-reader-vs-mymind` (Keyboard power-reader vs zero-effort visual canvas)
- [x] `pocket-vs-karakeep` (Post-Pocket open-source refuge)
- [NEW] `anybox-vs-raindrop` (Native Apple speed vs cross-platform cloud sync)
- [NEW] `anybox-vs-mymind` (Mac offline shortcuts vs AI zero-organization canvas)
- [NEW] `readwise-vs-readwise-reader` (Highlight spaced repetition vs all-in-one reading inbox)

---
## 6. International TAM Priority Ranking

| Tier | Locale | Primary Competitor Focus | Commercial Rationale |
| :---: | :---: | :--- | :--- |
| **Tier 1** | **EN** (US, UK, CA, AU) | All 9 Competitors | Highest volume, baseline authority, highest ARPU |
| **Tier 2** | **DE** (Germany, Austria, CH) | Notion, Karakeep, mymind, Pocket | Exceptional SaaS purchasing power, privacy focus |
| **Tier 2** | **JA** (Japan) | Notion, mymind, Anybox, Pocket | Massive Notion & mymind affinity, heavy productivity software adoption |
| **Tier 3** | **FR** (France, Belgium) | Pocket, Raindrop, mymind | High post-Pocket displacement search volume |
| **Tier 3** | **ES** (Spain, LATAM) | Pocket, Raindrop, Notion | Huge raw search volume across 20+ countries |
| **Tier 4** | **NL / IT / KO / PT / PL** | Raindrop, Karakeep, Notion, Pocket | High-intent niche technical and creative communities |

---
*Generated by active/scripts/seo-competitors.py*
