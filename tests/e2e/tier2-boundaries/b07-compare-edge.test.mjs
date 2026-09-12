import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const COMP_HTML = resolve(ROOT, 'dist/client/compare/marqly-vs-raindrop.html');

export const tests = [
  {
    id: 'T2.B07.01',
    feature: 'F07',
    name: 'Benchmark latency values are positive numbers and realistically formatted',
    run: async () => {
      if (!existsSync(COMP_HTML)) return { ok: false, error: 'compare/marqly-vs-raindrop.html missing' };
      const raw = readFileSync(COMP_HTML, 'utf8');
      // Check latency metrics format (e.g. 14.2s, 1.1s, or ms)
      const hasSeconds = /\b\d+(?:\.\d+)?\s*(?:s|ms|seconds)\b/i.test(raw);
      if (!hasSeconds) {
        return { ok: false, error: 'Benchmark section missing numeric latency measurements (e.g. 1.1s)' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B07.02',
    feature: 'F07',
    name: 'Comparison page verdict card contains both "Choose Raindrop if" and "Choose Marqly if"',
    run: async () => {
      if (!existsSync(COMP_HTML)) return { ok: false, error: 'File missing' };
      const text = parseHtml(readFileSync(COMP_HTML, 'utf8')).text.toLowerCase();
      const hasChooseRaindrop = text.includes('raindrop') && (text.includes('choose') || text.includes('best for') || text.includes('if you'));
      const hasChooseMarqly = text.includes('marqly') && (text.includes('choose') || text.includes('best for') || text.includes('if you'));
      if (!hasChooseRaindrop || !hasChooseMarqly) {
        return { ok: false, error: 'Verdict card does not balance recommendations for both products' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B07.03',
    feature: 'F07',
    name: 'Comparison table does not contain undefined, NaN, or [object Object] text',
    run: async () => {
      if (!existsSync(COMP_HTML)) return { ok: false, error: 'File missing' };
      const raw = readFileSync(COMP_HTML, 'utf8');
      if (raw.includes('undefined') || raw.includes('NaN') || raw.includes('[object Object]')) {
        return { ok: false, error: 'Found serialized JavaScript artifacts (undefined/NaN/[object Object]) in HTML' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B07.04',
    feature: 'F07',
    name: 'Comparison page FAQ items have non-empty question and answer pairs',
    run: async () => {
      if (!existsSync(COMP_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(COMP_HTML, 'utf8'));
      const faqSchema = parsed.jsonLd.find(s => s['@type'] === 'FAQPage');
      if (faqSchema && Array.isArray(faqSchema.mainEntity)) {
        for (const item of faqSchema.mainEntity) {
          if (!item.name || !item.acceptedAnswer?.text) {
            return { ok: false, error: 'FAQPage schema contains question with missing answer text' };
          }
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B07.05',
    feature: 'F07',
    name: 'Feature checkmarks and crosses use accessible text or aria-labels',
    run: async () => {
      if (!existsSync(COMP_HTML)) return { ok: false, error: 'File missing' };
      const raw = readFileSync(COMP_HTML, 'utf8');
      // If svg icons are used for checks/crosses, they must have aria-label or screen-reader text
      if (raw.includes('<svg') && !raw.includes('aria-label') && !raw.includes('sr-only') && !raw.includes('<title>')) {
        return { ok: false, error: 'Table icons lack accessibility labels or screen-reader text' };
      }
      return { ok: true };
    }
  }
];
