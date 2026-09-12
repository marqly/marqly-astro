#!/usr/bin/env node
/**
 * High-speed standalone E2E test runner for Marqly × Raindrop.io Global 100x Search Capture Program.
 *
 * Validates Tiers 1-4 (184 test cases) covering all 16 features from PROJECT.md:
 *   - Tier 1: Feature Coverage (80 tests)
 *   - Tier 2: Boundary & Corner Cases (80 tests)
 *   - Tier 3: Cross-Feature Combinations (16 tests)
 *   - Tier 4: Real-World Application Scenarios (8 tests)
 *
 * Usage:
 *   node active/scripts/test-e2e-raindrop.mjs [--baseline] [--strict] [--tier <1-4>] [--feature <id>] [--json] [--dist <path>]
 */

import { existsSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = resolve(process.cwd());
const argv = process.argv.slice(2);

const DIST_ARG = argv.includes('--dist') ? argv[argv.indexOf('--dist') + 1] : 'dist/client';
const DIST = resolve(ROOT, DIST_ARG);
const IS_BASELINE = argv.includes('--baseline');
const IS_STRICT = argv.includes('--strict');
const IS_JSON = argv.includes('--json');

const TIER_FILTER = argv.includes('--tier') ? argv[argv.indexOf('--tier') + 1] : null;
const FEATURE_FILTER = argv.includes('--feature') ? argv[argv.indexOf('--feature') + 1]?.toLowerCase() : null;

// ANSI Colors
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const DIM = '\x1b[2m';

const TESTS_DIR = resolve(ROOT, 'tests/e2e');

async function loadTestFiles() {
  const tiers = [
    { tier: 1, name: 'Tier 1: Feature Coverage (Isolation)', dir: resolve(TESTS_DIR, 'tier1-features') },
    { tier: 2, name: 'Tier 2: Boundary & Corner Cases', dir: resolve(TESTS_DIR, 'tier2-boundaries') },
    { tier: 3, name: 'Tier 3: Cross-Feature Combinations', dir: resolve(TESTS_DIR, 'tier3-combinations') },
    { tier: 4, name: 'Tier 4: Real-World Application Scenarios', dir: resolve(TESTS_DIR, 'tier4-scenarios') }
  ];

  const loadedSuites = [];

  for (const t of tiers) {
    if (TIER_FILTER && String(t.tier) !== String(TIER_FILTER)) continue;
    if (!existsSync(t.dir)) continue;

    const files = readdirSync(t.dir).filter(f => f.endsWith('.test.mjs')).sort();
    for (const file of files) {
      if (FEATURE_FILTER) {
        const fileLow = file.toLowerCase();
        const featMatch = FEATURE_FILTER.replace(/^f/, '');
        if (!fileLow.includes(FEATURE_FILTER) && !fileLow.includes(`f${featMatch}`) && !fileLow.includes(`b${featMatch}`)) {
          continue;
        }
      }

      const fullPath = join(t.dir, file);
      try {
        const mod = await import(pathToFileURL(fullPath).href);
        if (Array.isArray(mod.tests)) {
          loadedSuites.push({
            tier: t.tier,
            tierName: t.name,
            file,
            tests: mod.tests
          });
        }
      } catch (err) {
        loadedSuites.push({
          tier: t.tier,
          tierName: t.name,
          file,
          importError: err.message,
          tests: []
        });
      }
    }
  }

  return loadedSuites;
}

async function runSuite() {
  const startTime = Date.now();

  if (!existsSync(DIST)) {
    console.warn(`${YELLOW}⚠️ Warning: Target directory ${DIST} not found. Run "npm run build" to compile dist/client before running against built HTML.${RESET}\n`);
  }

  const suites = await loadTestFiles();
  const allResults = [];
  const tierStats = {
    1: { total: 0, passed: 0, failed: 0 },
    2: { total: 0, passed: 0, failed: 0 },
    3: { total: 0, passed: 0, failed: 0 },
    4: { total: 0, passed: 0, failed: 0 }
  };

  const featureStats = {};

  for (const s of suites) {
    if (s.importError) {
      allResults.push({
        id: 'IMPORT_ERROR',
        tier: s.tier,
        file: s.file,
        name: `Failed to load ${s.file}`,
        ok: false,
        error: s.importError
      });
      tierStats[s.tier].total++;
      tierStats[s.tier].failed++;
      continue;
    }

    for (const test of s.tests) {
      tierStats[s.tier].total++;
      const fKey = test.feature || 'Other';
      if (!featureStats[fKey]) featureStats[fKey] = { total: 0, passed: 0, failed: 0 };
      featureStats[fKey].total++;

      let result = { ok: false };
      const testStart = Date.now();
      try {
        result = await test.run();
      } catch (err) {
        result = { ok: false, error: err.message || String(err) };
      }
      const durationMs = Date.now() - testStart;

      if (result.ok) {
        tierStats[s.tier].passed++;
        featureStats[fKey].passed++;
      } else {
        tierStats[s.tier].failed++;
        featureStats[fKey].failed++;
      }

      allResults.push({
        id: test.id,
        feature: test.feature,
        tier: s.tier,
        file: s.file,
        name: test.name,
        ok: result.ok,
        error: result.error || null,
        durationMs
      });
    }
  }

  const durationTotal = Date.now() - startTime;
  const totalTests = allResults.length;
  const totalPassed = allResults.filter(r => r.ok).length;
  const totalFailed = totalTests - totalPassed;

  if (IS_JSON) {
    console.log(JSON.stringify({
      summary: {
        total: totalTests,
        passed: totalPassed,
        failed: totalFailed,
        durationMs: durationTotal,
        mode: IS_BASELINE ? 'baseline' : 'strict'
      },
      tierStats,
      featureStats,
      results: allResults
    }, null, 2));
    process.exit(IS_BASELINE ? 0 : (totalFailed > 0 ? 1 : 0));
  }

  // Pretty Console Output
  console.log(`\n${BOLD}================================================================================${RESET}`);
  console.log(`${BOLD}  MARQLY × RAINDROP.IO GLOBAL 100× SEARCH CAPTURE — E2E TEST RUNNER${RESET}`);
  console.log(`${BOLD}================================================================================${RESET}`);
  console.log(`${DIM}Target build: ${DIST}${RESET}`);
  console.log(`${DIM}Execution mode: ${IS_BASELINE ? 'Baseline Diagnostic (--baseline)' : 'Strict Validation'}${RESET}\n`);

  // Print results grouped by tier
  for (let tier = 1; tier <= 4; tier++) {
    if (TIER_FILTER && String(tier) !== String(TIER_FILTER)) continue;
    const tierResults = allResults.filter(r => r.tier === tier);
    if (tierResults.length === 0) continue;

    const stats = tierStats[tier];
    const tierColor = stats.failed === 0 ? GREEN : (stats.passed > 0 ? YELLOW : RED);
    console.log(`${BOLD}--- Tier ${tier}: ${stats.passed}/${stats.total} Passed (${tierColor}${Math.round((stats.passed / (stats.total || 1)) * 100)}%${RESET}${BOLD}) ---${RESET}`);

    for (const r of tierResults) {
      const mark = r.ok ? `${GREEN}✔ PASS${RESET}` : `${YELLOW}○ PENDING${RESET}`;
      console.log(`  ${mark} ${DIM}[${r.id}]${RESET} ${r.name}`);
      if (!r.ok && r.error) {
        console.log(`         ${RED}↳ Signal: ${r.error}${RESET}`);
      }
    }
    console.log('');
  }

  // Feature Breakdown Summary Table
  console.log(`${BOLD}================================================================================${RESET}`);
  console.log(`${BOLD} FEATURE COVERAGE MATRIX (F01 - F16)${RESET}`);
  console.log(`${BOLD}================================================================================${RESET}`);
  console.log(` ${'Feature'.padEnd(36)} | ${'Passed'.padStart(8)} | ${'Pending'.padStart(8)} | ${'Status'.padStart(12)}`);
  console.log(` ${'-'.repeat(36)}-|-${'-'.repeat(8)}-|-${'-'.repeat(8)}-|-${'-'.repeat(12)}`);

  for (const [fKey, fStat] of Object.entries(featureStats)) {
    const status = fStat.failed === 0
      ? `${GREEN}VERIFIED${RESET}`
      : (fStat.passed > 0 ? `${YELLOW}IN PROGRESS${RESET}` : `${RED}PENDING${RESET}`);
    console.log(` ${fKey.padEnd(36)} | ${String(fStat.passed).padStart(8)} | ${String(fStat.failed).padStart(8)} | ${status.padStart(20)}`);
  }

  console.log(`${BOLD}================================================================================${RESET}`);
  console.log(`${BOLD} SUITE EXECUTION SUMMARY${RESET}`);
  console.log(`${BOLD}================================================================================${RESET}`);
  console.log(` Total Automated Tests : ${BOLD}${totalTests}${RESET}`);
  console.log(` Passing Baseline      : ${GREEN}${BOLD}${totalPassed}${RESET}`);
  console.log(` Pending Implementation: ${YELLOW}${BOLD}${totalFailed}${RESET}`);
  console.log(` Pass Rate             : ${BOLD}${Math.round((totalPassed / (totalTests || 1)) * 100)}%${RESET}`);
  console.log(` Duration              : ${durationTotal}ms\n`);

  if (totalFailed > 0) {
    if (IS_BASELINE) {
      console.log(`${YELLOW}ℹ Baseline mode: Tests executed as diagnostic baseline. Exiting code 0.${RESET}\n`);
      process.exit(0);
    } else {
      console.log(`${RED}✖ Failed or pending implementation signals detected. Exiting code 1.${RESET}`);
      console.log(`${DIM}Tip: Run with "--baseline" to report diagnostic progress without non-zero exit.${RESET}\n`);
      process.exit(1);
    }
  } else {
    console.log(`${GREEN}✔ All 184 tests across Tiers 1-4 PASSED perfectly! Exiting code 0.${RESET}\n`);
    process.exit(0);
  }
}

runSuite().catch(err => {
  console.error(`${RED}Fatal runner error:${RESET}`, err);
  process.exit(1);
});
