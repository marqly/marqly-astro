import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const ALT_HTML = resolve(ROOT, 'dist/client/alternatives/raindrop.html');

export const tests = [
  {
    id: 'T1.F03.01',
    feature: 'F03',
    name: 'dist/client/alternatives/raindrop.html exists and is non-empty',
    run: async () => {
      if (!existsSync(ALT_HTML)) {
        return { ok: false, error: 'dist/client/alternatives/raindrop.html does not exist' };
      }
      const raw = readFileSync(ALT_HTML, 'utf8');
      if (raw.length < 500) {
        return { ok: false, error: 'alternatives/raindrop.html is unexpectedly small (<500 bytes)' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F03.02',
    feature: 'F03',
    name: 'alternatives/raindrop.html has valid canonical URL without trailing slash',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      if (!parsed.canonical) {
        return { ok: false, error: 'Missing <link rel="canonical">' };
      }
      if (parsed.canonical.endsWith('/')) {
        return { ok: false, error: `Canonical URL must not have trailing slash: ${parsed.canonical}` };
      }
      if (!parsed.canonical.includes('/alternatives/raindrop')) {
        return { ok: false, error: `Unexpected canonical URL: ${parsed.canonical}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F03.03',
    feature: 'F03',
    name: 'alternatives/raindrop.html emits reciprocal German hreflang alternate',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      const deAlt = parsed.alternates.find(a => a.hreflang === 'de');
      if (!deAlt) {
        return {
          ok: false,
          error: 'alternatives/raindrop.html missing hreflang="de" alternate tag (Alternatives Hreflang Bug)'
        };
      }
      if (!deAlt.href.includes('/de/alternativen/raindrop')) {
        return { ok: false, error: `German hreflang href invalid: ${deAlt.href}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F03.04',
    feature: 'F03',
    name: 'alternatives/raindrop.html emits reciprocal French hreflang alternate',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      const frAlt = parsed.alternates.find(a => a.hreflang === 'fr');
      if (!frAlt) {
        return {
          ok: false,
          error: 'alternatives/raindrop.html missing hreflang="fr" alternate tag'
        };
      }
      if (!frAlt.href.includes('/fr/alternatives/raindrop')) {
        return { ok: false, error: `French hreflang href invalid: ${frAlt.href}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F03.05',
    feature: 'F03',
    name: 'alternatives/raindrop.html emits x-default hreflang pointing to English canonical',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      const xDef = parsed.alternates.find(a => a.hreflang === 'x-default');
      if (!xDef) {
        return { ok: false, error: 'alternatives/raindrop.html missing hreflang="x-default" alternate tag' };
      }
      if (!xDef.href.includes('/alternatives/raindrop')) {
        return { ok: false, error: `x-default href must point to English canonical: ${xDef.href}` };
      }
      return { ok: true };
    }
  }
];
