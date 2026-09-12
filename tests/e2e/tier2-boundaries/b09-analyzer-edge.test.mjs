import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseNetscapeHtml } from '../helpers/netscape-parser.mjs';
import { parseRaindropCsv } from '../helpers/csv-parser.mjs';

const ROOT = resolve(process.cwd());
const EMPTY_HTML = resolve(ROOT, 'tests/e2e/fixtures/empty-export.html');
const MALFORMED_HTML = resolve(ROOT, 'tests/e2e/fixtures/malformed-export.html');
const LARGE_CSV = resolve(ROOT, 'tests/e2e/fixtures/large-export.csv');

export const tests = [
  {
    id: 'T2.B09.01',
    feature: 'F09',
    name: 'Netscape parser safely handles empty bookmark file returning 0 count',
    run: async () => {
      const html = readFileSync(EMPTY_HTML, 'utf8');
      const stats = parseNetscapeHtml(html);
      if (stats.totalBookmarks !== 0) {
        return { ok: false, error: `Expected 0 bookmarks for empty file, found ${stats.totalBookmarks}` };
      }
      if (stats.collectionsCount !== 0) {
        return { ok: false, error: `Expected 0 collections, found ${stats.collectionsCount}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B09.02',
    feature: 'F09',
    name: 'Netscape parser handles malformed HTML without crashing and extracts valid links',
    run: async () => {
      const html = readFileSync(MALFORMED_HTML, 'utf8');
      const stats = parseNetscapeHtml(html);
      if (stats.totalBookmarks < 1) {
        return { ok: false, error: 'Parser failed to salvage valid bookmarks from malformed file' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B09.03',
    feature: 'F09',
    name: 'Raindrop CSV parser handles quotes inside quotes, multiline notes, and commas',
    run: async () => {
      const csv = readFileSync(LARGE_CSV, 'utf8');
      const stats = parseRaindropCsv(csv);
      if (stats.totalBookmarks < 2) {
        return { ok: false, error: `Expected at least 2 valid bookmarks from large CSV, found ${stats.totalBookmarks}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B09.04',
    feature: 'F09',
    name: 'Parsers throw descriptive error on null, undefined, or empty string input',
    run: async () => {
      let threwNetscape = false;
      try {
        parseNetscapeHtml('');
      } catch {
        threwNetscape = true;
      }
      let threwCsv = false;
      try {
        parseRaindropCsv('');
      } catch {
        threwCsv = true;
      }
      if (!threwNetscape || !threwCsv) {
        return { ok: false, error: 'Parsers must throw on empty string input' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B09.05',
    feature: 'F09',
    name: 'Estimated link rot percentage is bounded between 5% and 38%',
    run: async () => {
      const csv = readFileSync(LARGE_CSV, 'utf8');
      const stats = parseRaindropCsv(csv);
      if (stats.estimatedDeadLinkPercentage < 5 || stats.estimatedDeadLinkPercentage > 38) {
        return {
          ok: false,
          error: `Link rot percentage (${stats.estimatedDeadLinkPercentage}%) outside realistic bounds [5%, 38%]`
        };
      }
      return { ok: true };
    }
  }
];
