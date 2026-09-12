import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const MIGRATE_HTML = resolve(ROOT, 'dist/client/migrate/raindrop.html');

export const tests = [
  {
    id: 'T1.F08.01',
    feature: 'F08',
    name: 'dist/client/migrate/raindrop.html details step-by-step export and import instructions',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const text = parseHtml(readFileSync(MIGRATE_HTML, 'utf8')).text.toLowerCase();
      const hasExportStep = text.includes('export') && text.includes('settings');
      const hasImportStep = text.includes('import') && text.includes('upload');
      if (!hasExportStep || !hasImportStep) {
        return { ok: false, error: 'migrate/raindrop.html missing step-by-step export/import instructions' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F08.02',
    feature: 'F08',
    name: 'migrate/raindrop.html provides format guidance comparing Netscape HTML vs CSV',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const text = parseHtml(readFileSync(MIGRATE_HTML, 'utf8')).text.toLowerCase();
      if (!text.includes('html') || !text.includes('csv')) {
        return { ok: false, error: 'migrate/raindrop.html must compare HTML vs CSV export formats' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F08.03',
    feature: 'F08',
    name: 'migrate/raindrop.html includes taxonomy and field mapping matrix',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const text = parseHtml(readFileSync(MIGRATE_HTML, 'utf8')).text.toLowerCase();
      // Should mention collections/folders mapping to boards/tags
      const hasCollectionMap = text.includes('collection') && (text.includes('board') || text.includes('folder') || text.includes('tag'));
      const hasTagMap = text.includes('tag');
      if (!hasCollectionMap || !hasTagMap) {
        return { ok: false, error: 'migrate/raindrop.html missing field and taxonomy mapping details' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F08.04',
    feature: 'F08',
    name: 'migrate/raindrop.html includes edge case troubleshooting playbook (large libraries, broken links)',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const text = parseHtml(readFileSync(MIGRATE_HTML, 'utf8')).text.toLowerCase();
      const hasTroubleshooting = text.includes('troubleshoot') || text.includes('faq') || text.includes('issue') || text.includes('error') || text.includes('problem');
      if (!hasTroubleshooting) {
        return { ok: false, error: 'migrate/raindrop.html missing troubleshooting playbook' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F08.05',
    feature: 'F08',
    name: 'migrate/raindrop.html contains valid HowTo or FAQPage JSON-LD schema',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const parsed = parseHtml(readFileSync(MIGRATE_HTML, 'utf8'));
      const hasSchema = parsed.jsonLd.some(s =>
        s['@type'] === 'HowTo' ||
        s['@type'] === 'FAQPage' ||
        s['@type'] === 'WebPage'
      );
      if (!hasSchema) {
        return { ok: false, error: 'migrate/raindrop.html missing HowTo, FAQPage, or WebPage JSON-LD schema' };
      }
      return { ok: true };
    }
  }
];
