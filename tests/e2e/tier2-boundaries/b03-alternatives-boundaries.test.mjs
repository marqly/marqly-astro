import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const ALT_HTML = resolve(ROOT, 'dist/client/alternatives/raindrop.html');

export const tests = [
  {
    id: 'T2.B03.01',
    feature: 'F03',
    name: 'Canonical URL strips .html extension and retains exact origin protocol',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'alternatives/raindrop.html missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      if (parsed.canonical?.endsWith('.html')) {
        return { ok: false, error: `Canonical URL still contains .html: ${parsed.canonical}` };
      }
      if (!parsed.canonical?.startsWith('https://')) {
        return { ok: false, error: `Canonical URL does not use HTTPS: ${parsed.canonical}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B03.02',
    feature: 'F03',
    name: 'Title tag does not contain unescaped HTML entities or excess whitespace',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      const rawTitle = parsed.raw.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '';
      if (rawTitle.includes('&amp;amp;') || rawTitle.includes('&lt;') || rawTitle.includes('&gt;')) {
        return { ok: false, error: `Double-escaped entities in title: "${rawTitle}"` };
      }
      if (/\s{2,}/.test(rawTitle.trim())) {
        return { ok: false, error: `Excess internal whitespace in title: "${rawTitle}"` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B03.03',
    feature: 'F03',
    name: 'Meta description length is bounded between 60 and 170 characters',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      const desc = parsed.metaDescription || '';
      if (desc.length < 60) {
        return { ok: false, error: `Meta description too short (${desc.length} chars): "${desc}"` };
      }
      if (desc.length > 170) {
        return { ok: false, error: `Meta description too long (${desc.length} chars): "${desc}"` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B03.04',
    feature: 'F03',
    name: 'All alternate link hrefs are absolute URLs matching site domain',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      for (const alt of parsed.alternates) {
        if (!alt.href.startsWith('https://www.marqly.com/') && !alt.href.startsWith('https://marqly.com/')) {
          return { ok: false, error: `Relative or external alternate href found: ${alt.href}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B03.05',
    feature: 'F03',
    name: 'No circular or duplicate hreflang entries on alternatives page',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      const langs = parsed.alternates.map(a => a.hreflang);
      const uniqueLangs = new Set(langs);
      if (uniqueLangs.size !== langs.length) {
        return { ok: false, error: `Duplicate hreflang entries detected: ${langs.join(', ')}` };
      }
      return { ok: true };
    }
  }
];
