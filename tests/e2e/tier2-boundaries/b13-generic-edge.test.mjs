import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const HUB_HTML = resolve(ROOT, 'dist/client/best-bookmark-manager.html');

export const tests = [
  {
    id: 'T2.B13.01',
    feature: 'F13',
    name: 'Benchmark rating scores are normalized numbers between 0 and 10 or percentages',
    run: async () => {
      if (!existsSync(HUB_HTML)) return { ok: false, error: 'best-bookmark-manager.html missing' };
      const raw = readFileSync(HUB_HTML, 'utf8');
      const ratings = [...raw.matchAll(/\b([0-9](?:\.[0-9])?)\s*\/\s*10\b/g)].map(m => parseFloat(m[1]));
      for (const r of ratings) {
        if (r < 0 || r > 10) {
          return { ok: false, error: `Out-of-bounds rating score found: ${r}/10` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B13.02',
    feature: 'F13',
    name: 'Table of contents anchor links point to existing DOM IDs within the document',
    run: async () => {
      if (!existsSync(HUB_HTML)) return { ok: false, error: 'best-bookmark-manager.html missing' };
      const raw = readFileSync(HUB_HTML, 'utf8');
      const anchorLinks = [...raw.matchAll(/href=["']#([a-zA-Z0-9_-]+)["']/g)].map(m => m[1]);
      for (const id of anchorLinks) {
        if (!raw.includes(`id="${id}"`) && !raw.includes(`id='${id}'`)) {
          return { ok: false, error: `Dangling internal anchor jump link to non-existent ID: #${id}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B13.03',
    feature: 'F13',
    name: 'Benchmark table has responsive wrapper or sticky headers for horizontal scrolling',
    run: async () => {
      if (!existsSync(HUB_HTML)) return { ok: false, error: 'best-bookmark-manager.html missing' };
      const raw = readFileSync(HUB_HTML, 'utf8');
      if (raw.includes('<table')) {
        const hasOverflow = raw.includes('overflow-x') || raw.includes('overflow-auto') || raw.includes('table-wrapper');
        if (!hasOverflow) {
          return { ok: false, error: 'Benchmark table lacks horizontal scroll handling container' };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B13.04',
    feature: 'F13',
    name: 'Benchmark hub includes published or modified date in 2026',
    run: async () => {
      if (!existsSync(HUB_HTML)) return { ok: false, error: 'best-bookmark-manager.html missing' };
      const parsed = parseHtml(readFileSync(HUB_HTML, 'utf8'));
      const text = parsed.text;
      if (!text.includes('2026')) {
        return { ok: false, error: 'Benchmark index does not reference current year (2026)' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B13.05',
    feature: 'F13',
    name: 'Benchmark hub does not emit forbidden AggregateRating review stars without real reviews',
    run: async () => {
      if (!existsSync(HUB_HTML)) return { ok: false, error: 'best-bookmark-manager.html missing' };
      const parsed = parseHtml(readFileSync(HUB_HTML, 'utf8'));
      const hasRatingSchema = parsed.jsonLd.some(s => s['@type'] === 'AggregateRating' || s.aggregateRating);
      if (hasRatingSchema) {
        return { ok: false, error: 'Forbidden AggregateRating detected in generic hub JSON-LD (Google spam violation)' };
      }
      return { ok: true };
    }
  }
];
