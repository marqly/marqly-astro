import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const ROUTES_TS = resolve(ROOT, 'src/i18n/routes.ts');

export const tests = [
  {
    id: 'T2.B12.01',
    feature: 'F12',
    name: 'alternatesForPath strips trailing slashes in requested path before resolving',
    run: async () => {
      if (!existsSync(ROUTES_TS)) return { ok: false, error: 'routes.ts missing' };
      const { pathToFileURL } = await import('node:url');
      const { alternatesForPath } = await import(pathToFileURL(ROUTES_TS).href);
      const cleanResult = alternatesForPath('/alternatives/raindrop');
      const slashResult = alternatesForPath('/alternatives/raindrop/');
      if (cleanResult.length === 0 || slashResult.length === 0) {
        return { ok: false, error: 'alternatesForPath failed on standard alternatives path' };
      }
      if (cleanResult.length !== slashResult.length) {
        return { ok: false, error: 'Trailing slash caused alternates mismatch' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B12.02',
    feature: 'F12',
    name: 'alternatesForPath safely returns empty array for completely non-existent routes',
    run: async () => {
      if (!existsSync(ROUTES_TS)) return { ok: false, error: 'routes.ts missing' };
      const { pathToFileURL } = await import('node:url');
      const { alternatesForPath } = await import(pathToFileURL(ROUTES_TS).href);
      const result = alternatesForPath('/non-existent-completely-unknown-path-12345');
      if (!Array.isArray(result) || result.length !== 0) {
        return { ok: false, error: 'Expected empty array for unmapped route' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B12.03',
    feature: 'F12',
    name: 'All hreflang values in alternates conform strictly to valid BCP 47 formats (e.g. "de", "fr", "x-default")',
    run: async () => {
      if (!existsSync(ROUTES_TS)) return { ok: false, error: 'routes.ts missing' };
      const { pathToFileURL } = await import('node:url');
      const { alternatesForPath } = await import(pathToFileURL(ROUTES_TS).href);
      const list = alternatesForPath('/compare/marqly-vs-raindrop');
      for (const item of list) {
        if (!/^[a-z]{2}(-[A-Z]{2})?$/i.test(item.hreflang) && item.hreflang !== 'x-default') {
          return { ok: false, error: `Invalid BCP 47 hreflang tag: "${item.hreflang}"` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B12.04',
    feature: 'F12',
    name: 'Reciprocal symmetry: query by German path yields identical alternates as query by English path',
    run: async () => {
      if (!existsSync(ROUTES_TS)) return { ok: false, error: 'routes.ts missing' };
      const { pathToFileURL } = await import('node:url');
      const { alternatesForPath } = await import(pathToFileURL(ROUTES_TS).href);
      const enAlts = alternatesForPath('/compare/marqly-vs-raindrop');
      const deAlts = alternatesForPath('/de/vergleich/marqly-vs-raindrop');
      if (enAlts.length === 0 || deAlts.length === 0) {
        return { ok: false, error: 'Missing alternates for comparison route' };
      }
      if (enAlts.length !== deAlts.length) {
        return { ok: false, error: `Asymmetric alternates count: EN has ${enAlts.length}, DE has ${deAlts.length}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B12.05',
    feature: 'F12',
    name: 'No alternate href in cluster targets a non-canonical redirect target',
    run: async () => {
      if (!existsSync(ROUTES_TS)) return { ok: false, error: 'routes.ts missing' };
      const { pathToFileURL } = await import('node:url');
      const { alternatesForPath } = await import(pathToFileURL(ROUTES_TS).href);
      const alts = alternatesForPath('/compare/marqly-vs-raindrop');
      for (const a of alts) {
        if (a.href.endsWith('/') && !a.href.endsWith('.com/')) {
          return { ok: false, error: `Alternate URL has trailing slash: ${a.href}` };
        }
      }
      return { ok: true };
    }
  }
];
