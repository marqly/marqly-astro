# E2E Test Infrastructure & Quality Engineering Specification
## Marqly × Raindrop.io Global 100× Search Capture Program

---

## 1. Quality Engineering Philosophy

### 1.1 Opaque-Box, Requirement-Driven Testing
The testing infrastructure for the Marqly × Raindrop.io Search Capture Program adheres strictly to **opaque-box, requirement-driven verification**:
- **Interface & Artifact Contracts Over Code Implementation**: Tests do not evaluate private functions, component internals, or AST layouts in `src/`. Instead, they validate external outputs, HTTP contracts, rendered HTML artifacts in `dist/client`, structured JSON-LD schemas, truth JSON definitions, and client-side analyzer data models.
- **Zero-Hallucination Oracle**: The authoritative source of expected behavior is derived directly from:
  1. `ORIGINAL_REQUEST.md` (Strategic intent, Tier-1 locales, migration funnel, truth requirements)
  2. `PROJECT.md` (§ Feature Inventory, § Interface Contracts, § Milestones)
  3. Authoritative competitor specifications in `.seo/competitors/raindrop/`
  4. Web standards: RFC 4180 (CSV), Netscape Bookmark File Format (HTML standard), W3C JSON-LD, ISO 639-1 / BCP 47 (hreflang), and Google Search Central Guidelines.
- **Anti-Facade Guarantee**: Every test executes real file system assertions, DOM queries, regex evaluations, or parser logic. Facade assertions (`expect(true).toBe(true)`) are strictly prohibited.
- **Independent & Self-Contained**: Each test sets up its own state and executes isolated assertions without side-effects or execution-order dependencies.

---

## 2. Test Tier Architecture

The test suite is structured into four distinct, progressive tiers designed to test features from unit isolation up to end-to-end multi-step user workflows:

```
┌────────────────────────────────────────────────────────────────────────┐
│  Tier 4: Real-World Application Scenarios                              │
│  8 Multi-step realistic user journeys (Defector, Power User, Locale)  │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 3: Cross-Feature Combinations                                    │
│  16 Pairwise interaction & contract symmetry tests                     │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 2: Boundary & Corner Cases                                       │
│  80 Adversarial & edge case tests (5 per feature across 16 features)   │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 1: Feature Coverage (Isolation)                                  │
│  80 Happy-path specification compliance tests (5 per feature × 16)    │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Tier 1: Feature Coverage (>=5 tests per feature = 80 tests)
Verifies happy-path functionality in isolation for each of the 16 features specified in `PROJECT.md`:
- Confirms the presence of target routes in `dist/client`.
- Asserts mandatory HTTP metadata (200 OK, `<title>`, meta description, single `<h1>`, `<main>` landmark).
- Validates canonical URL formatting (no trailing slash, matching site origin).
- Asserts verified data structures, pricing values, and platform booleans.

### 2.2 Tier 2: Boundary & Corner Cases (>=5 tests per feature = 80 tests)
Probes limits, invalid formats, corrupted inputs, and localized edge conditions:
- **Encoding & Unicode**: German umlauts (`ä`, `ö`, `ü`, `ß`), French accents (`é`, `è`, `à`, `ç`), and currency symbols (`€`, `$`).
- **File Parsing Stress**: Empty Netscape HTML, zero-bookmark files, nested `<DL>` hierarchies >10 levels deep, CSVs with multiline quotes and internal commas.
- **Path Normalization**: Trailing slash stripping, case insensitivity, query string handling, anchor references.
- **Commercial Boundary Rules**: Multi-language detection of stale trial claims (`3 Tage`, `3 jours`, `3 giorni`, `3 días`, `3 dias`).

### 2.3 Tier 3: Cross-Feature Combinations (>=16 tests)
Evaluates pairwise interactions and contract parity across distinct modules:
- **Truth vs Runtime**: `.seo/competitors/raindrop/*.json` vs `src/data/competitors/raindrop.json`.
- **Hreflang Symmetry**: Reciprocal pairing between English, German (`/de/`), and French (`/fr/`) twins with `x-default`.
- **Cross-Page Link Funnels**: Alternatives → Migration Guide → Free Analyzer Tool → Pricing / Signup Funnel.
- **Generic Benchmark Hub Integration**: `/best-bookmark-manager` links to `/compare/marqly-vs-raindrop` and `/alternatives/raindrop`.

### 2.4 Tier 4: Real-World Application Scenarios (>=8 scenarios)
Simulates end-to-end user journeys from organic search discovery to conversion:
1. **The Raindrop Defector Journey**: Category switching search → Alternatives quick-pick → Migration CTA.
2. **The Power User Netscape Backup Flow**: Netscape HTML export parsing → Link rot estimation → Compatibility summary → Signup onboarding.
3. **The CSV Exporter Journey**: Raindrop CSV drop → Column mapping → Date range span → Import preview.
4. **The German Native Searcher Flow**: German SERP landing (`/de/alternativen/raindrop`) → Euro pricing & DSGVO validation → Localized migration guide (`/de/migration/raindrop`).
5. **The French Knowledge Curator Flow**: French SERP landing (`/fr/comparer/marqly-vs-raindrop`) → Reading workflow benchmark → French migration guide (`/fr/migration/raindrop`).
6. **The Head-to-Head Evaluator Journey**: Empirical comparison landing (`/compare/marqly-vs-raindrop`) → 5 workflow tests review → 7-day Pro trial activation.
7. **The Broken Links & Health Recovery Flow**: Analyzer detects dead links in large library → Marqly automatic broken link checker promotion → Migration start.
8. **The Category-Wide Index Explorer**: Category head query landing (`/best-bookmark-manager`) → 6 test battery analysis → Raindrop head-to-head link traversal.

---

## 3. Feature Inventory & Coverage Mapping (16 Features)

| Feature ID | Feature Name | Target Scope | Tier 1 Tests | Tier 2 Tests | Tier 3/4 Coverage |
|:---:|:---|:---|:---:|:---:|:---:|
| **F01** | Authoritative Raindrop Truth Files | `.seo/competitors/raindrop/*.json` | 5 | 5 | T3.1, T3.2, T3.3 |
| **F02** | Reconcile `raindrop.json` | `src/data/competitors/raindrop.json` | 5 | 5 | T3.1, T3.2, T3.3 |
| **F03** | Fix Alternatives Hreflang Bug | `dist/client/alternatives/raindrop.html` | 5 | 5 | T3.4, T3.5, T4.1 |
| **F04** | Remediate Stale Commercial Claims | `src/content/locale-pages/` & `dist/client/` | 5 | 5 | T3.16 |
| **F05** | Fix Migration Asset & Breadcrumb | `dist/client/migrate/raindrop.html` & OG card | 5 | 5 | T3.8, T3.9 |
| **F06** | Category-Segmented Alternatives | `dist/client/alternatives/raindrop.html` | 5 | 5 | T3.10, T4.1 |
| **F07** | Benchmark-Driven Comparison Page | `dist/client/compare/marqly-vs-raindrop.html` | 5 | 5 | T3.6, T3.7, T3.11, T4.6 |
| **F08** | Transactional Migration Guide | `dist/client/migrate/raindrop.html` | 5 | 5 | T3.8, T3.9, T3.13, T4.1 |
| **F09** | Client-Side Raindrop Export Analyzer | Netscape & CSV parsing engine contracts | 5 | 5 | T4.2, T4.3, T4.7 |
| **F10** | Standalone & Embedded Tool Deployment| `dist/client/tools/raindrop-export-analyzer.html` | 5 | 5 | T3.12, T4.2, T4.7 |
| **F11** | German & French Migration Landers | `dist/client/{de,fr}/migration/raindrop.html` | 5 | 5 | T3.8, T3.9, T4.4, T4.5 |
| **F12** | Complete i18n Route Clustering | `src/i18n/routes.ts` & reciprocal hreflang | 5 | 5 | T3.4, T3.5, T3.6, T3.7 |
| **F13** | Generic Category Authority Hub | `dist/client/best-bookmark-manager.html` | 5 | 5 | T3.14, T4.8 |
| **F14** | 100× Search Traffic Growth Model | `.seo/models/100x-traffic-growth-model.md` | 5 | 5 | T3.15 |
| **F15** | Query Opportunity & Tracking Matrix | `.seo/models/query-opportunity-matrix.md` | 5 | 5 | T3.15 |
| **F16** | E2E Test Suite Health & Runner | `active/scripts/test-e2e-raindrop.mjs` | 5 | 5 | T1-T4 Execution |

---

## 4. Directory Layout

```
marketing_site/
├── TEST_INFRA.md                          # Test infrastructure specification (this file)
├── TEST_READY.md                          # Suite execution readiness & matrix report
├── active/
│   └── scripts/
│       └── test-e2e-raindrop.mjs          # High-speed standalone E2E test runner
└── tests/
    └── e2e/
        ├── fixtures/                      # Test input fixtures & samples
        │   ├── raindrop-sample-export.html
        │   ├── raindrop-sample-export.csv
        │   ├── empty-export.html
        │   ├── malformed-export.html
        │   └── large-export.csv
        ├── helpers/                       # Reusable parsing & assertion helpers
        │   ├── html-parser.mjs            # Static DOM / HTML attribute extractor
        │   ├── netscape-parser.mjs        # Bookmark HTML parsing engine reference
        │   └── csv-parser.mjs             # Raindrop CSV parsing engine reference
        ├── tier1-features/                # Tier 1 isolation tests (F01–F16)
        │   ├── f01-truth-files.test.mjs
        │   ├── f02-reconcile-data.test.mjs
        │   ├── f03-alternatives-hreflang.test.mjs
        │   ├── f04-commercial-claims.test.mjs
        │   ├── f05-migration-assets.test.mjs
        │   ├── f06-alternatives-page.test.mjs
        │   ├── f07-compare-page.test.mjs
        │   ├── f08-migration-guide.test.mjs
        │   ├── f09-analyzer-engine.test.mjs
        │   ├── f10-tool-deployment.test.mjs
        │   ├── f11-locale-landers.test.mjs
        │   ├── f12-i18n-clustering.test.mjs
        │   ├── f13-generic-hub.test.mjs
        │   ├── f14-growth-model.test.mjs
        │   ├── f15-tracking-matrix.test.mjs
        │   └── f16-test-suite-health.test.mjs
        ├── tier2-boundaries/              # Tier 2 boundary & edge tests (B01–B16)
        │   ├── b01-truth-boundaries.test.mjs
        │   ├── b02-reconcile-boundaries.test.mjs
        │   ├── b03-alternatives-boundaries.test.mjs
        │   ├── b04-commercial-boundaries.test.mjs
        │   ├── b05-migration-boundaries.test.mjs
        │   ├── b06-alternatives-edge.test.mjs
        │   ├── b07-compare-edge.test.mjs
        │   ├── b08-migration-edge.test.mjs
        │   ├── b09-analyzer-edge.test.mjs
        │   ├── b10-tool-edge.test.mjs
        │   ├── b11-locale-edge.test.mjs
        │   ├── b12-i18n-edge.test.mjs
        │   ├── b13-generic-edge.test.mjs
        │   ├── b14-growth-edge.test.mjs
        │   ├── b15-tracking-edge.test.mjs
        │   └── b16-runner-edge.test.mjs
        ├── tier3-combinations/            # Tier 3 pairwise & contract tests
        │   └── cross-feature-matrix.test.mjs
        └── tier4-scenarios/               # Tier 4 real-world user scenarios
            └── user-journeys.test.mjs
```

---

## 5. Test Runner Execution & CLI Interface

The custom test runner `active/scripts/test-e2e-raindrop.mjs` executes all tests in pure Node.js ES Modules with zero heavy browser overhead, achieving sub-second execution speeds while validating hundreds of complex constraints.

### 5.1 Basic Execution Commands
```bash
# Run the complete test suite across all 4 tiers
node active/scripts/test-e2e-raindrop.mjs

# Run tests in baseline diagnostic mode (reports pass/pending signals without failing process exit)
node active/scripts/test-e2e-raindrop.mjs --baseline

# Filter by tier
node active/scripts/test-e2e-raindrop.mjs --tier 1
node active/scripts/test-e2e-raindrop.mjs --tier 2
node active/scripts/test-e2e-raindrop.mjs --tier 3
node active/scripts/test-e2e-raindrop.mjs --tier 4

# Filter by feature ID
node active/scripts/test-e2e-raindrop.mjs --feature f01
node active/scripts/test-e2e-raindrop.mjs --feature f09

# Output machine-readable JSON results
node active/scripts/test-e2e-raindrop.mjs --json
```

### 5.2 CI/CD Quality Gate Integration
In continuous integration pipelines:
- Running `node active/scripts/test-e2e-raindrop.mjs` exits with code `0` if 100% of tests pass.
- If any test fails, it exits with code `1` and prints detailed failure traces including file path, line number, and expected vs actual values.
- During milestone development (M1–M7), running with `--baseline` allows downstream builders to observe their progress incrementally without blocking intermediate pipeline runs.
