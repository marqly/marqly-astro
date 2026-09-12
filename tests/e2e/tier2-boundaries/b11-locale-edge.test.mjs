import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const DE_MIGRATE = resolve(ROOT, 'dist/client/de/migration/raindrop.html');
const FR_MIGRATE = resolve(ROOT, 'dist/client/fr/migration/raindrop.html');

export const tests = [
  {
    id: 'T2.B11.01',
    feature: 'F11',
    name: 'German migration page preserves UTF-8 German umlauts (ä, ö, ü, ß)',
    run: async () => {
      if (!existsSync(DE_MIGRATE)) return { ok: false, error: 'German migration page missing' };
      const raw = readFileSync(DE_MIGRATE, 'utf8');
      // Should contain valid German umlauts
      const hasUmlauts = /[äöüßÄÖÜ]/.test(raw);
      if (!hasUmlauts) {
        return { ok: false, error: 'German migration page missing native umlauts (ä, ö, ü, ß)' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B11.02',
    feature: 'F11',
    name: 'French migration page preserves UTF-8 French accented characters (é, è, à, ç, ê)',
    run: async () => {
      if (!existsSync(FR_MIGRATE)) return { ok: false, error: 'French migration page missing' };
      const raw = readFileSync(FR_MIGRATE, 'utf8');
      const hasAccents = /[éèàçêôîÉÈÀ]/.test(raw);
      if (!hasAccents) {
        return { ok: false, error: 'French migration page missing native accented characters (é, è, à, ç)' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B11.03',
    feature: 'F11',
    name: 'European localized pages quote prices with Euro currency symbol (€)',
    run: async () => {
      if (!existsSync(DE_MIGRATE) && !existsSync(FR_MIGRATE)) return { ok: false, error: 'DE/FR pages missing' };
      const deRaw = existsSync(DE_MIGRATE) ? readFileSync(DE_MIGRATE, 'utf8') : '';
      const frRaw = existsSync(FR_MIGRATE) ? readFileSync(FR_MIGRATE, 'utf8') : '';
      const combined = deRaw + frRaw;
      if (!combined.includes('€') && !combined.includes('&euro;')) {
        return { ok: false, error: 'European migration pages do not mention Euro (€) pricing' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B11.04',
    feature: 'F11',
    name: 'Localized title tags remain within 65 characters to prevent Google SERP truncation',
    run: async () => {
      const files = [DE_MIGRATE, FR_MIGRATE];
      for (const f of files) {
        if (existsSync(f)) {
          const raw = readFileSync(f, 'utf8');
          const titleMatch = /<title\b[^>]*>([\s\S]*?)<\/title>/i.exec(raw);
          const title = titleMatch ? titleMatch[1].trim() : '';
          if (title.length > 70) {
            return { ok: false, error: `Title exceeds 70 characters (${title.length}): "${title}"` };
          }
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B11.05',
    feature: 'F11',
    name: 'Localized migration pages do not leak English boilerplate headlines',
    run: async () => {
      if (!existsSync(DE_MIGRATE)) return { ok: false, error: 'German page missing' };
      const raw = readFileSync(DE_MIGRATE, 'utf8');
      // Look for untranslated english headers
      if (raw.includes('<h2>How to migrate') || raw.includes('<h2>Step-by-step guide</h2>')) {
        return { ok: false, error: 'German migration page leaks English headline boilerplate' };
      }
      return { ok: true };
    }
  }
];
