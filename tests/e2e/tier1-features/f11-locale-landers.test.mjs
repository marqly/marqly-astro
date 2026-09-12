import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const DE_MIGRATE = resolve(ROOT, 'dist/client/de/migration/raindrop.html');
const FR_MIGRATE = resolve(ROOT, 'dist/client/fr/migration/raindrop.html');

export const tests = [
  {
    id: 'T1.F11.01',
    feature: 'F11',
    name: 'dist/client/de/migration/raindrop.html exists and self-references canonical',
    run: async () => {
      if (!existsSync(DE_MIGRATE)) {
        return { ok: false, error: 'dist/client/de/migration/raindrop.html does not exist' };
      }
      const parsed = parseHtml(readFileSync(DE_MIGRATE, 'utf8'));
      if (!parsed.canonical || !parsed.canonical.endsWith('/de/migration/raindrop')) {
        return { ok: false, error: `Invalid German canonical URL: ${parsed.canonical}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F11.02',
    feature: 'F11',
    name: 'German migration lander uses native terminology ("Lesezeichen", "Migration" or "Umzug")',
    run: async () => {
      if (!existsSync(DE_MIGRATE)) return { ok: false, error: 'German migration page missing' };
      const text = parseHtml(readFileSync(DE_MIGRATE, 'utf8')).text.toLowerCase();
      if (!text.includes('lesezeichen')) {
        return { ok: false, error: 'German migration page missing native head term "Lesezeichen"' };
      }
      if (!text.includes('migration') && !text.includes('umzug') && !text.includes('exportieren')) {
        return { ok: false, error: 'German migration page missing native intent terms (Migration / Umzug / Exportieren)' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F11.03',
    feature: 'F11',
    name: 'dist/client/fr/migration/raindrop.html exists and self-references canonical',
    run: async () => {
      if (!existsSync(FR_MIGRATE)) {
        return { ok: false, error: 'dist/client/fr/migration/raindrop.html does not exist' };
      }
      const parsed = parseHtml(readFileSync(FR_MIGRATE, 'utf8'));
      if (!parsed.canonical || !parsed.canonical.endsWith('/fr/migration/raindrop')) {
        return { ok: false, error: `Invalid French canonical URL: ${parsed.canonical}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F11.04',
    feature: 'F11',
    name: 'French migration lander uses native terminology ("favoris" or "marque-pages", "migration")',
    run: async () => {
      if (!existsSync(FR_MIGRATE)) return { ok: false, error: 'French migration page missing' };
      const text = parseHtml(readFileSync(FR_MIGRATE, 'utf8')).text.toLowerCase();
      const hasFavoris = text.includes('favoris') || text.includes('marque-pages');
      if (!hasFavoris) {
        return { ok: false, error: 'French migration page missing native head terms "favoris" or "marque-pages"' };
      }
      if (!text.includes('migration') && !text.includes('exporter') && !text.includes('importer')) {
        return { ok: false, error: 'French migration page missing native action terms (migration, exporter, importer)' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F11.05',
    feature: 'F11',
    name: 'Localized migration landers emit reciprocal hreflang links to English twin and x-default',
    run: async () => {
      if (!existsSync(DE_MIGRATE)) return { ok: false, error: 'German migration page missing' };
      const parsed = parseHtml(readFileSync(DE_MIGRATE, 'utf8'));
      const hasEn = parsed.alternates.some(a => a.hreflang === 'en' && a.href.includes('/migrate/raindrop'));
      const hasXDef = parsed.alternates.some(a => a.hreflang === 'x-default' && a.href.includes('/migrate/raindrop'));
      if (!hasEn || !hasXDef) {
        return { ok: false, error: 'German migration page missing reciprocal hreflang="en" or "x-default"' };
      }
      return { ok: true };
    }
  }
];
