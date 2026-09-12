import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const COMP_HTML = resolve(ROOT, 'dist/client/compare/marqly-vs-raindrop.html');

export const tests = [
  {
    id: 'T1.F07.01',
    feature: 'F07',
    name: 'dist/client/compare/marqly-vs-raindrop.html exists with single H1 and canonical URL',
    run: async () => {
      if (!existsSync(COMP_HTML)) {
        return { ok: false, error: 'dist/client/compare/marqly-vs-raindrop.html missing' };
      }
      const parsed = parseHtml(readFileSync(COMP_HTML, 'utf8'));
      if (parsed.h1.length !== 1) {
        return { ok: false, error: `Expected 1 H1, found ${parsed.h1.length}` };
      }
      if (!parsed.canonical || !parsed.canonical.endsWith('/compare/marqly-vs-raindrop')) {
        return { ok: false, error: `Invalid canonical URL: ${parsed.canonical}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F07.02',
    feature: 'F07',
    name: 'compare/marqly-vs-raindrop.html details 5 empirical workflow benchmark tests',
    run: async () => {
      if (!existsSync(COMP_HTML)) return { ok: false, error: 'File missing' };
      const text = parseHtml(readFileSync(COMP_HTML, 'utf8')).text.toLowerCase();
      // Look for benchmarks: capture/save latency, semantic/fuzzy search, youtube, platform, archive/rot
      const hasLatency = text.includes('latency') || text.includes('capture') || text.includes('seconds');
      const hasSemantic = text.includes('semantic') || text.includes('concept') || text.includes('fuzzy');
      const hasYouTube = text.includes('youtube') || text.includes('video') || text.includes('transcript');
      const hasPlatforms = text.includes('platform') || text.includes('android') || text.includes('linux');

      if (!hasLatency || !hasSemantic || !hasYouTube || !hasPlatforms) {
        return {
          ok: false,
          error: 'compare/marqly-vs-raindrop.html missing one or more of the 5 empirical workflow benchmarks'
        };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F07.03',
    feature: 'F07',
    name: 'compare/marqly-vs-raindrop.html features structured side-by-side comparison table',
    run: async () => {
      if (!existsSync(COMP_HTML)) return { ok: false, error: 'File missing' };
      const raw = readFileSync(COMP_HTML, 'utf8');
      if (!raw.includes('<table') && !raw.includes('comparison-table') && !raw.includes('grid')) {
        return { ok: false, error: 'Missing side-by-side comparison table in compare/marqly-vs-raindrop.html' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F07.04',
    feature: 'F07',
    name: 'compare/marqly-vs-raindrop.html features prominent executive verdict card',
    run: async () => {
      if (!existsSync(COMP_HTML)) return { ok: false, error: 'File missing' };
      const text = parseHtml(readFileSync(COMP_HTML, 'utf8')).text.toLowerCase();
      const hasVerdict = text.includes('verdict') || text.includes('which should you choose') || text.includes('bottom line');
      if (!hasVerdict) {
        return { ok: false, error: 'Missing executive verdict card summarizing recommendation' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F07.05',
    feature: 'F07',
    name: 'compare/marqly-vs-raindrop.html features FAQ section and links to /migrate/raindrop',
    run: async () => {
      if (!existsSync(COMP_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(COMP_HTML, 'utf8'));
      const hasMigrateLink = parsed.links.some(l => l.includes('/migrate/raindrop'));
      if (!hasMigrateLink) {
        return { ok: false, error: 'Missing direct link to /migrate/raindrop in comparison page' };
      }
      const text = parsed.text.toLowerCase();
      if (!text.includes('faq') && !text.includes('frequently asked')) {
        return { ok: false, error: 'Missing FAQ section on comparison page' };
      }
      return { ok: true };
    }
  }
];
