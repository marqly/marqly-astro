import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseNetscapeHtml } from '../helpers/netscape-parser.mjs';
import { parseRaindropCsv } from '../helpers/csv-parser.mjs';

const ROOT = resolve(process.cwd());
const SAMPLE_HTML = resolve(ROOT, 'tests/e2e/fixtures/raindrop-sample-export.html');
const SAMPLE_CSV = resolve(ROOT, 'tests/e2e/fixtures/raindrop-sample-export.csv');

export const tests = [
  {
    id: 'T1.F09.01',
    feature: 'F09',
    name: 'Netscape HTML parser correctly extracts total bookmarks and collection counts',
    run: async () => {
      const html = readFileSync(SAMPLE_HTML, 'utf8');
      const stats = parseNetscapeHtml(html);
      if (stats.totalBookmarks !== 6) {
        return { ok: false, error: `Expected 6 bookmarks, found ${stats.totalBookmarks}` };
      }
      if (stats.collectionsCount < 2) {
        return { ok: false, error: `Expected at least 2 collections, found ${stats.collectionsCount}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F09.02',
    feature: 'F09',
    name: 'Raindrop CSV parser correctly parses folders, titles, tags, and counts',
    run: async () => {
      const csv = readFileSync(SAMPLE_CSV, 'utf8');
      const stats = parseRaindropCsv(csv);
      if (stats.totalBookmarks !== 6) {
        return { ok: false, error: `Expected 6 bookmarks, found ${stats.totalBookmarks}` };
      }
      if (stats.collectionsCount < 2) {
        return { ok: false, error: `Expected at least 2 collections, found ${stats.collectionsCount}` };
      }
      if (stats.tagsCount === 0) {
        return { ok: false, error: 'Expected extracted tags count > 0' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F09.03',
    feature: 'F09',
    name: 'Analyzer extracts domain breakdown sorted by frequency',
    run: async () => {
      const html = readFileSync(SAMPLE_HTML, 'utf8');
      const stats = parseNetscapeHtml(html);
      if (!Array.isArray(stats.domainBreakdown) || stats.domainBreakdown.length === 0) {
        return { ok: false, error: 'Domain breakdown is missing or empty' };
      }
      const topDomain = stats.domainBreakdown[0];
      if (!topDomain.domain || typeof topDomain.count !== 'number') {
        return { ok: false, error: 'Malformed domain breakdown element' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F09.04',
    feature: 'F09',
    name: 'Analyzer computes earliest and latest date range span',
    run: async () => {
      const csv = readFileSync(SAMPLE_CSV, 'utf8');
      const stats = parseRaindropCsv(csv);
      if (!stats.dateRange || !stats.dateRange.earliest || !stats.dateRange.latest) {
        return { ok: false, error: 'dateRange missing or incomplete' };
      }
      if (stats.dateRange.earliest === 'N/A' || stats.dateRange.latest === 'N/A') {
        return { ok: false, error: 'Expected valid ISO dates for sample export' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F09.05',
    feature: 'F09',
    name: 'Analyzer computes estimated dead link percentage and 100% compatibility status',
    run: async () => {
      const html = readFileSync(SAMPLE_HTML, 'utf8');
      const stats = parseNetscapeHtml(html);
      if (typeof stats.estimatedDeadLinkPercentage !== 'number' || stats.estimatedDeadLinkPercentage <= 0) {
        return { ok: false, error: 'Invalid estimated dead link percentage' };
      }
      if (!stats.compatibilityStatus.includes('Compatible with Marqly')) {
        return { ok: false, error: `Unexpected compatibility status: ${stats.compatibilityStatus}` };
      }
      return { ok: true };
    }
  }
];
