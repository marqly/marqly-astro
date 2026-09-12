import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const ROUTES_TS = resolve(ROOT, 'src/i18n/routes.ts');

export const tests = [
  {
    id: 'T1.F12.01',
    feature: 'F12',
    name: 'src/i18n/routes.ts includes /migrate/raindrop in TRANSLATIONS dictionary',
    run: async () => {
      if (!existsSync(ROUTES_TS)) return { ok: false, error: 'src/i18n/routes.ts missing' };
      const raw = readFileSync(ROUTES_TS, 'utf8');
      if (!raw.includes("'/migrate/raindrop'") && !raw.includes('"/migrate/raindrop"')) {
        return {
          ok: false,
          error: 'src/i18n/routes.ts TRANSLATIONS does not register key for /migrate/raindrop'
        };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F12.02',
    feature: 'F12',
    name: 'routes.ts maps /migrate/raindrop to German localized route',
    run: async () => {
      if (!existsSync(ROUTES_TS)) return { ok: false, error: 'src/i18n/routes.ts missing' };
      const raw = readFileSync(ROUTES_TS, 'utf8');
      const hasDeMigration = /de:\s*['"]\/(?:de\/)?(?:migration|umzug)\/raindrop['"]/i.test(raw);
      if (!hasDeMigration) {
        return { ok: false, error: 'Missing German translation mapping for /migrate/raindrop in routes.ts' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F12.03',
    feature: 'F12',
    name: 'routes.ts maps /migrate/raindrop to French localized route',
    run: async () => {
      if (!existsSync(ROUTES_TS)) return { ok: false, error: 'src/i18n/routes.ts missing' };
      const raw = readFileSync(ROUTES_TS, 'utf8');
      const hasFrMigration = /fr:\s*['"]\/(?:fr\/)?migration\/raindrop['"]/i.test(raw);
      if (!hasFrMigration) {
        return { ok: false, error: 'Missing French translation mapping for /migrate/raindrop in routes.ts' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F12.04',
    feature: 'F12',
    name: 'alternatesForPath generates reciprocal entries including x-default',
    run: async () => {
      if (!existsSync(ROUTES_TS)) return { ok: false, error: 'src/i18n/routes.ts missing' };
      const { pathToFileURL } = await import('node:url');
      const { alternatesForPath } = await import(pathToFileURL(ROUTES_TS).href);
      const alternates = alternatesForPath('/migrate/raindrop');
      if (!Array.isArray(alternates) || alternates.length === 0) {
        return { ok: false, error: 'alternatesForPath("/migrate/raindrop") returned empty array' };
      }
      const xDef = alternates.find(a => a.hreflang === 'x-default');
      if (!xDef || !xDef.href.includes('/migrate/raindrop')) {
        return { ok: false, error: 'Missing or invalid x-default alternate entry' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F12.05',
    feature: 'F12',
    name: 'Reverse path resolution in alternatesForPath works for localized migration routes',
    run: async () => {
      if (!existsSync(ROUTES_TS)) return { ok: false, error: 'src/i18n/routes.ts missing' };
      const { pathToFileURL } = await import('node:url');
      const { alternatesForPath } = await import(pathToFileURL(ROUTES_TS).href);
      const alternates = alternatesForPath('/de/migration/raindrop');
      if (!Array.isArray(alternates) || alternates.length === 0) {
        return { ok: false, error: 'alternatesForPath failed to resolve from localized German route' };
      }
      const hasEn = alternates.some(a => a.hreflang === 'en' && a.href.includes('/migrate/raindrop'));
      if (!hasEn) {
        return { ok: false, error: 'Reverse resolution from German route did not yield English canonical' };
      }
      return { ok: true };
    }
  }
];
