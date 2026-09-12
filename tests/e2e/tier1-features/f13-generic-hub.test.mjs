import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const HUB_HTML = resolve(ROOT, 'dist/client/best-bookmark-manager.html');

export const tests = [
  {
    id: 'T1.F13.01',
    feature: 'F13',
    name: 'dist/client/best-bookmark-manager.html exists with single H1 and canonical URL',
    run: async () => {
      if (!existsSync(HUB_HTML)) {
        return { ok: false, error: 'dist/client/best-bookmark-manager.html does not exist' };
      }
      const parsed = parseHtml(readFileSync(HUB_HTML, 'utf8'));
      if (parsed.h1.length !== 1) {
        return { ok: false, error: `Expected exactly 1 H1, found ${parsed.h1.length}` };
      }
      if (!parsed.canonical || !parsed.canonical.endsWith('/best-bookmark-manager')) {
        return { ok: false, error: `Invalid canonical URL: ${parsed.canonical}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F13.02',
    feature: 'F13',
    name: 'Generic authority hub targets "The 2026 Bookmark Manager Index" or head benchmark title',
    run: async () => {
      if (!existsSync(HUB_HTML)) return { ok: false, error: 'best-bookmark-manager.html missing' };
      const parsed = parseHtml(readFileSync(HUB_HTML, 'utf8'));
      const title = parsed.title.toLowerCase();
      const h1 = parsed.h1[0]?.toLowerCase() || '';
      const hasBenchmarkTitle = (title.includes('bookmark manager') && title.includes('2026')) ||
                                (h1.includes('bookmark manager') && h1.includes('2026'));
      if (!hasBenchmarkTitle) {
        return { ok: false, error: `H1 or title does not reflect 2026 bookmark manager benchmark: H1="${h1}", title="${title}"` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F13.03',
    feature: 'F13',
    name: 'Hub details empirical test batteries (retrieval, latency, multimedia, portability)',
    run: async () => {
      if (!existsSync(HUB_HTML)) return { ok: false, error: 'best-bookmark-manager.html missing' };
      const text = parseHtml(readFileSync(HUB_HTML, 'utf8')).text.toLowerCase();
      const hasRetrieval = text.includes('retrieval') || text.includes('search') || text.includes('semantic');
      const hasFiling = text.includes('filing') || text.includes('overhead') || text.includes('latency');
      const hasPortability = text.includes('portability') || text.includes('export') || text.includes('lock-in');
      if (!hasRetrieval || !hasFiling || !hasPortability) {
        return { ok: false, error: 'Hub missing standardized test batteries (retrieval, filing overhead, portability)' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F13.04',
    feature: 'F13',
    name: 'Hub includes comparative ranking table across top bookmark managers',
    run: async () => {
      if (!existsSync(HUB_HTML)) return { ok: false, error: 'best-bookmark-manager.html missing' };
      const raw = readFileSync(HUB_HTML, 'utf8');
      if (!raw.includes('<table') && !raw.includes('comparison-table') && !raw.includes('matrix')) {
        return { ok: false, error: 'Hub missing comparative ranking table or benchmark matrix' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F13.05',
    feature: 'F13',
    name: 'Hub contains contextual internal links to /compare/marqly-vs-raindrop and /alternatives/raindrop',
    run: async () => {
      if (!existsSync(HUB_HTML)) return { ok: false, error: 'best-bookmark-manager.html missing' };
      const parsed = parseHtml(readFileSync(HUB_HTML, 'utf8'));
      const hasComp = parsed.links.some(l => l.includes('/compare/marqly-vs-raindrop'));
      const hasAlt = parsed.links.some(l => l.includes('/alternatives/raindrop'));
      if (!hasComp && !hasAlt) {
        return { ok: false, error: 'Hub missing internal links to comparison or alternatives pages' };
      }
      return { ok: true };
    }
  }
];
