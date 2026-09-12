import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';
import { parseNetscapeHtml } from '../helpers/netscape-parser.mjs';
import { parseRaindropCsv } from '../helpers/csv-parser.mjs';

const ROOT = resolve(process.cwd());

export const tests = [
  {
    id: 'T4.01',
    feature: 'Scenario: Raindrop Defector Journey',
    name: 'User journeys from /alternatives/raindrop through category switching rationale to /migrate/raindrop',
    run: async () => {
      const altFile = resolve(ROOT, 'dist/client/alternatives/raindrop.html');
      const migFile = resolve(ROOT, 'dist/client/migrate/raindrop.html');
      if (!existsSync(altFile) || !existsSync(migFile)) {
        return { ok: false, error: 'Prerequisite pages missing: alternatives/raindrop or migrate/raindrop' };
      }
      const altParsed = parseHtml(readFileSync(altFile, 'utf8'));
      // 1. Verify user can find categorized recommendations
      const text = altParsed.text.toLowerCase();
      if (!text.includes('ai') && !text.includes('semantic')) {
        return { ok: false, error: 'Defector journey step 1 failed: Missing AI category alternative' };
      }
      // 2. Verify link to migration
      const hasMigrateLink = altParsed.links.some(l => l.includes('/migrate/raindrop'));
      if (!hasMigrateLink) {
        return { ok: false, error: 'Defector journey step 2 failed: Missing link to /migrate/raindrop' };
      }
      // 3. Verify destination migration page is ready
      const migParsed = parseHtml(readFileSync(migFile, 'utf8'));
      if (migParsed.h1.length === 0) {
        return { ok: false, error: 'Defector journey step 3 failed: Destination migration page invalid' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T4.02',
    feature: 'Scenario: Power User Netscape Backup Flow',
    name: 'User drops Netscape HTML backup into analyzer, receives counts, rot estimate, and conversion link',
    run: async () => {
      const sampleHtml = resolve(ROOT, 'tests/e2e/fixtures/raindrop-sample-export.html');
      const rawHtml = readFileSync(sampleHtml, 'utf8');
      const analysis = parseNetscapeHtml(rawHtml);

      if (analysis.totalBookmarks < 5) {
        return { ok: false, error: 'Netscape flow failed: Bookmark volume incorrect' };
      }
      if (analysis.collectionsCount < 2) {
        return { ok: false, error: 'Netscape flow failed: Collections undercounted' };
      }
      if (analysis.estimatedDeadLinkPercentage <= 0) {
        return { ok: false, error: 'Netscape flow failed: Dead link percentage missing' };
      }

      // Check conversion onboarding URL format
      const signupUrl = `https://app.marqly.com/signup?source=migration_tool&items=${analysis.totalBookmarks}`;
      if (!signupUrl.includes('items=6')) {
        return { ok: false, error: 'Netscape flow failed: Conversion link param formatting' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T4.03',
    feature: 'Scenario: CSV Exporter Journey',
    name: 'User drops Raindrop CSV export, parses folder structure, verifies date range, and prepares import',
    run: async () => {
      const sampleCsv = resolve(ROOT, 'tests/e2e/fixtures/raindrop-sample-export.csv');
      const rawCsv = readFileSync(sampleCsv, 'utf8');
      const analysis = parseRaindropCsv(rawCsv);

      if (analysis.totalBookmarks !== 6) {
        return { ok: false, error: `CSV flow failed: Expected 6 bookmarks, found ${analysis.totalBookmarks}` };
      }
      if (!analysis.dateRange.earliest.startsWith('2021') && !analysis.dateRange.earliest.startsWith('2022')) {
        return { ok: false, error: `CSV flow failed: Unexpected earliest date ${analysis.dateRange.earliest}` };
      }
      if (!analysis.compatibilityStatus.includes('100% Compatible')) {
        return { ok: false, error: 'CSV flow failed: Compatibility status missing' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T4.04',
    feature: 'Scenario: German Native Searcher Flow',
    name: 'German searcher lands on /de/alternativen/raindrop, checks DSGVO/Euro pricing, navigates to /de/migration/raindrop',
    run: async () => {
      const deAlt = resolve(ROOT, 'dist/client/de/alternativen/raindrop.html');
      const deMig = resolve(ROOT, 'dist/client/de/migration/raindrop.html');
      if (!existsSync(deAlt) || !existsSync(deMig)) {
        return { ok: false, error: 'German landing pages missing (de/alternativen/raindrop or de/migration/raindrop)' };
      }
      const altParsed = parseHtml(readFileSync(deAlt, 'utf8'));
      const text = altParsed.text.toLowerCase();
      // Look for German native terms
      if (!text.includes('lesezeichen') && !text.includes('alternative')) {
        return { ok: false, error: 'German searcher flow step 1 failed: Native German terminology missing' };
      }
      // Check link to German migration page
      const hasDeMigrate = altParsed.links.some(l => l.includes('/de/migration/raindrop') || l.includes('/de/umzug/raindrop'));
      if (!hasDeMigrate) {
        return { ok: false, error: 'German searcher flow step 2 failed: Missing link from alternatives to migration' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T4.05',
    feature: 'Scenario: French Knowledge Curator Flow',
    name: 'French searcher queries comparison, lands on /fr/comparer/marqly-vs-raindrop, reviews benchmark, proceeds to /fr/migration/raindrop',
    run: async () => {
      const frComp = resolve(ROOT, 'dist/client/fr/comparer/marqly-vs-raindrop.html');
      const frMig = resolve(ROOT, 'dist/client/fr/migration/raindrop.html');
      if (!existsSync(frComp) || !existsSync(frMig)) {
        return { ok: false, error: 'French landing pages missing (fr/comparer/marqly-vs-raindrop or fr/migration/raindrop)' };
      }
      const compParsed = parseHtml(readFileSync(frComp, 'utf8'));
      const text = compParsed.text.toLowerCase();
      if (!text.includes('favoris') && !text.includes('marque-pages')) {
        return { ok: false, error: 'French curator flow step 1 failed: Native terms "favoris" or "marque-pages" missing' };
      }
      // Check link to French migration
      const hasFrMigrate = compParsed.links.some(l => l.includes('/fr/migration/raindrop'));
      if (!hasFrMigrate) {
        return { ok: false, error: 'French curator flow step 2 failed: Missing link to /fr/migration/raindrop' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T4.06',
    feature: 'Scenario: Head-to-Head Evaluator Journey',
    name: 'Evaluator lands on /compare/marqly-vs-raindrop, reads 5 workflow tests, reviews verdict, expands Android FAQ',
    run: async () => {
      const compFile = resolve(ROOT, 'dist/client/compare/marqly-vs-raindrop.html');
      if (!existsSync(compFile)) {
        return { ok: false, error: 'compare/marqly-vs-raindrop.html missing' };
      }
      const parsed = parseHtml(readFileSync(compFile, 'utf8'));
      const text = parsed.text.toLowerCase();
      // Must feature workflow tests
      if (!text.includes('latency') && !text.includes('semantic') && !text.includes('capture')) {
        return { ok: false, error: 'Evaluator journey failed: Missing empirical benchmark workflow tests' };
      }
      // Must address Android parity honestly
      if (!text.includes('android')) {
        return { ok: false, error: 'Evaluator journey failed: Missing cross-platform Android comparison' };
      }
      // Must provide Pro trial CTA
      const hasTrialCta = text.includes('trial') || text.includes('try') || text.includes('get started');
      if (!hasTrialCta) {
        return { ok: false, error: 'Evaluator journey failed: Missing conversion CTA' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T4.07',
    feature: 'Scenario: Broken Links & Health Recovery Flow',
    name: 'User tests export in /tools/raindrop-export-analyzer, discovers dead links, reviews Marqly automatic broken link checker solution',
    run: async () => {
      const toolFile = resolve(ROOT, 'dist/client/tools/raindrop-export-analyzer.html');
      if (!existsSync(toolFile)) {
        return { ok: false, error: 'dist/client/tools/raindrop-export-analyzer.html missing' };
      }
      const parsed = parseHtml(readFileSync(toolFile, 'utf8'));
      const text = parsed.text.toLowerCase();
      const mentionsRot = text.includes('rot') || text.includes('dead link') || text.includes('broken link') || text.includes('health');
      if (!mentionsRot) {
        return { ok: false, error: 'Tool page does not highlight link rot / broken link checking solution' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T4.08',
    feature: 'Scenario: Category-Wide Index Explorer',
    name: 'User lands on /best-bookmark-manager, compares tools across 6 batteries, navigates to Raindrop head-to-head comparison',
    run: async () => {
      const hubFile = resolve(ROOT, 'dist/client/best-bookmark-manager.html');
      if (!existsSync(hubFile)) {
        return { ok: false, error: 'dist/client/best-bookmark-manager.html missing' };
      }
      const parsed = parseHtml(readFileSync(hubFile, 'utf8'));
      const hasCompLink = parsed.links.some(l => l.includes('/compare/marqly-vs-raindrop'));
      if (!hasCompLink) {
        return { ok: false, error: 'Category explorer failed: Hub does not link to Raindrop comparison' };
      }
      const text = parsed.text.toLowerCase();
      if (!text.includes('raindrop') || !text.includes('marqly')) {
        return { ok: false, error: 'Category explorer failed: Hub does not evaluate Raindrop and Marqly' };
      }
      return { ok: true };
    }
  }
];
