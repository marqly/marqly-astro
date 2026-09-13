# Search Opportunity Tracking Matrix & Query Portfolio

## 1. Overview & Pillar Taxonomy

This tracking matrix operationalizes search capture across all 6 core growth pillars for the Marqly vs Raindrop campaign:
- **Branded Core & Alternatives** (`/alternatives/raindrop`)
- **Migration Conquest Funnel** (`/migrate/raindrop`)
- **Direct Comparison Funnel** (`/compare/marqly-vs-raindrop`)
- **Generic Category Authority** (`/best-bookmark-manager`)
- **Free Engineering Tools** (`/tools/raindrop-export-analyzer`)
- **International Expansion** (`/de/alternativen/raindrop`, `/fr/alternatives/raindrop`)

---

## 2. Query Opportunity Matrix

| Query | Pillar | Region | Volume | Target Position | Target URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `raindrop alternative` | Branded Core & Alternatives | Global/EN | 5400 | Top 1 | `/alternatives/raindrop` |
| `raindrop io alternative` | Branded Core & Alternatives | Global/EN | 2900 | Top 1 | `/alternatives/raindrop` |
| `alternatives to raindrop io` | Branded Core & Alternatives | Global/EN | 1600 | Top 1 | `/alternatives/raindrop` |
| `raindrop io competitors` | Branded Core & Alternatives | Global/EN | 1300 | Top 2 | `/alternatives/raindrop` |
| `best raindrop alternatives` | Branded Core & Alternatives | Global/EN | 2100 | Top 1 | `/alternatives/raindrop` |
| `raindrop replacement` | Branded Core & Alternatives | Global/EN | 880 | Top 2 | `/alternatives/raindrop` |
| `migrate from raindrop` | Migration Conquest Funnel | Global/EN | 720 | Top 1 | `/migrate/raindrop` |
| `export raindrop bookmarks` | Migration Conquest Funnel | Global/EN | 1100 | Top 1 | `/migrate/raindrop` |
| `raindrop io export html` | Migration Conquest Funnel | Global/EN | 590 | Top 1 | `/migrate/raindrop` |
| `import raindrop to marqly` | Migration Conquest Funnel | Global/EN | 450 | Top 1 | `/migrate/raindrop` |
| `how to export from raindrop` | Migration Conquest Funnel | Global/EN | 850 | Top 1 | `/migrate/raindrop` |
| `switch from raindrop io` | Migration Conquest Funnel | Global/EN | 390 | Top 2 | `/migrate/raindrop` |
| `marqly vs raindrop` | Direct Comparison Funnel | Global/EN | 1200 | Top 1 | `/compare/marqly-vs-raindrop` |
| `raindrop vs marqly` | Direct Comparison Funnel | Global/EN | 950 | Top 1 | `/compare/marqly-vs-raindrop` |
| `raindrop io vs marqly bookmark` | Direct Comparison Funnel | Global/EN | 480 | Top 1 | `/compare/marqly-vs-raindrop` |
| `marqly compared to raindrop` | Direct Comparison Funnel | Global/EN | 320 | Top 1 | `/compare/marqly-vs-raindrop` |
| `raindrop io review vs marqly` | Direct Comparison Funnel | Global/EN | 670 | Top 2 | `/compare/marqly-vs-raindrop` |
| `marqly pro vs raindrop pro` | Direct Comparison Funnel | Global/EN | 410 | Top 1 | `/compare/marqly-vs-raindrop` |
| `best bookmark manager` | Generic Category Authority | Global/EN | 8100 | Top 3 | `/best-bookmark-manager` |
| `top bookmark manager 2026` | Generic Category Authority | Global/EN | 2400 | Top 3 | `/best-bookmark-manager` |
| `bookmark manager with tags` | Generic Category Authority | Global/EN | 1600 | Top 2 | `/best-bookmark-manager` |
| `cloud bookmark manager` | Generic Category Authority | Global/EN | 3200 | Top 3 | `/best-bookmark-manager` |
| `browser bookmark organizer` | Generic Category Authority | Global/EN | 2800 | Top 2 | `/best-bookmark-manager` |
| `best tool to organize bookmarks` | Generic Category Authority | Global/EN | 1900 | Top 3 | `/best-bookmark-manager` |
| `raindrop export analyzer` | Free Engineering Tools | Global/EN | 890 | Top 1 | `/tools/raindrop-export-analyzer` |
| `analyze raindrop export` | Free Engineering Tools | Global/EN | 540 | Top 1 | `/tools/raindrop-export-analyzer` |
| `bookmark dead link checker` | Free Engineering Tools | Global/EN | 2100 | Top 2 | `/tools/raindrop-export-analyzer` |
| `raindrop backup parser` | Free Engineering Tools | Global/EN | 430 | Top 1 | `/tools/raindrop-export-analyzer` |
| `check broken bookmarks tool` | Free Engineering Tools | Global/EN | 1400 | Top 3 | `/tools/raindrop-export-analyzer` |
| `raindrop html export viewer` | Free Engineering Tools | Global/EN | 620 | Top 1 | `/tools/raindrop-export-analyzer` |
| `raindrop alternative deutsch` | International Expansion | DE/AT/CH | 1800 | Top 1 | `/de/alternativen/raindrop` |
| `raindrop io alternative de` | International Expansion | DE/AT/CH | 950 | Top 1 | `/de/alternativen/raindrop` |
| `lesezeichen manager alternative` | International Expansion | DE/AT/CH | 1400 | Top 2 | `/de/alternativen/raindrop` |
| `raindrop alternative francaise` | International Expansion | FR/BE/CH | 1600 | Top 1 | `/fr/alternatives/raindrop` |
| `alternative a raindrop io` | International Expansion | FR/BE/CH | 1100 | Top 1 | `/fr/alternatives/raindrop` |
| `gestionnaire de favoris cloud` | International Expansion | FR/BE/CH | 1300 | Top 2 | `/fr/alternatives/raindrop` |

---

## 3. Regression Monitoring Protocol & CI Gates

To guarantee that ranking gains, canonical integrity, and structured metadata remain uncompromised during continuous deployments:

1. **Automated CI Test Gate (`seo:check`)**:
   - The primary regression script `scripts/seo-check.mjs` (invoked via `npm run seo:check`) runs on every pull request and build.
   - It validates that every capture route contains strictly validated schema markup, canonical URLs matching host configuration, valid hreflang reciprocity across international pairs, and zero broken internal links.

2. **Orphan Route and Trailing Slash Verification**:
   - Automated crawler suite `test-e2e-raindrop.mjs` verifies zero orphaned conquest landers across English, German, and French locales.
   - Strict trailing slash enforcement ensures all target URLs remain normalized without duplicate slash variants.

3. **Rank Tracking Cadence**:
   - Weekly SERP position checks track all 36 priority queries in Google Search Console and Rank Tracker API.
   - Any query dropping below its Target Position triggers an automated alert and content freshness audit.
