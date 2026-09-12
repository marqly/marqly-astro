import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());

export const tests = [
  {
    id: 'T1.F04.01',
    feature: 'F04',
    name: 'German locale pages do not advertise retired 3-day trial ("3 Tage kostenlos")',
    run: async () => {
      const deFile = resolve(ROOT, 'src/content/locale-pages/de/marqly-vs-raindrop.md');
      if (existsSync(deFile)) {
        const raw = readFileSync(deFile, 'utf8');
        if (/3\s*tage\b/i.test(raw)) {
          return { ok: false, error: 'Found stale "3 Tage" claim in de/marqly-vs-raindrop.md' };
        }
      }
      const deHtml = resolve(ROOT, 'dist/client/de/vergleich/marqly-vs-raindrop.html');
      if (existsSync(deHtml)) {
        const raw = readFileSync(deHtml, 'utf8');
        if (/3\s*tage\b/i.test(raw)) {
          return { ok: false, error: 'Found stale "3 Tage" claim in rendered German comparison page' };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F04.02',
    feature: 'F04',
    name: 'French locale pages do not advertise retired 3-day trial ("3 jours")',
    run: async () => {
      const frFile = resolve(ROOT, 'src/content/locale-pages/fr/marqly-vs-raindrop.md');
      if (existsSync(frFile)) {
        const raw = readFileSync(frFile, 'utf8');
        if (/3\s*jours\b/i.test(raw)) {
          return { ok: false, error: 'Found stale "3 jours" claim in fr/marqly-vs-raindrop.md' };
        }
      }
      const frHtml = resolve(ROOT, 'dist/client/fr/comparer/marqly-vs-raindrop.html');
      if (existsSync(frHtml)) {
        const raw = readFileSync(frHtml, 'utf8');
        if (/3\s*jours\b/i.test(raw)) {
          return { ok: false, error: 'Found stale "3 jours" claim in rendered French comparison page' };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F04.03',
    feature: 'F04',
    name: 'Italian & Spanish locale pages do not advertise retired 3-day trial ("3 giorni", "3 días")',
    run: async () => {
      const itFile = resolve(ROOT, 'src/content/locale-pages/it/marqly-vs-raindrop.md');
      if (existsSync(itFile)) {
        const raw = readFileSync(itFile, 'utf8');
        if (/3\s*giorni\b/i.test(raw)) {
          return { ok: false, error: 'Found stale "3 giorni" claim in it/marqly-vs-raindrop.md' };
        }
      }
      const esFile = resolve(ROOT, 'src/content/locale-pages/es/marqly-vs-raindrop.md');
      if (existsSync(esFile)) {
        const raw = readFileSync(esFile, 'utf8');
        if (/3\s*días\b/i.test(raw) || /3\s*dias\b/i.test(raw)) {
          return { ok: false, error: 'Found stale "3 días" claim in es/marqly-vs-raindrop.md' };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F04.04',
    feature: 'F04',
    name: 'English Raindrop comparison pages advertise verified 7-day Pro trial or free tier',
    run: async () => {
      const compHtml = resolve(ROOT, 'dist/client/compare/marqly-vs-raindrop.html');
      if (!existsSync(compHtml)) return { ok: false, error: 'compare/marqly-vs-raindrop.html missing' };
      const raw = readFileSync(compHtml, 'utf8');
      if (/3[- ]day\s*(?:free\s*)?trial/i.test(raw)) {
        return { ok: false, error: 'Found stale "3-day trial" claim in compare/marqly-vs-raindrop.html' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F04.05',
    feature: 'F04',
    name: 'seo-check.mjs checks for multi-lingual trial claims (Tage, jours, giorni, dias)',
    run: async () => {
      const scriptPath = resolve(ROOT, 'active/scripts/seo-check.mjs');
      if (!existsSync(scriptPath)) return { ok: false, error: 'seo-check.mjs missing' };
      const raw = readFileSync(scriptPath, 'utf8');
      const hasMultilingual = /tage|jours|giorni|dias|días/i.test(raw);
      if (!hasMultilingual) {
        return {
          ok: false,
          error: 'seo-check.mjs only checks English 3-day trial; must be expanded with multilingual regex.'
        };
      }
      return { ok: true };
    }
  }
];
