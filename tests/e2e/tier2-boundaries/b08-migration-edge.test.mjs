import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const MIGRATE_HTML = resolve(ROOT, 'dist/client/migrate/raindrop.html');

export const tests = [
  {
    id: 'T2.B08.01',
    feature: 'F08',
    name: 'Migration guide provides guidance for large collections (>5,000 or >10,000 bookmarks)',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const text = parseHtml(readFileSync(MIGRATE_HTML, 'utf8')).text;
      const hasLargeLibrary = text.includes('10,000') || text.includes('5,000') || text.includes('large library') || text.includes('large export');
      if (!hasLargeLibrary) {
        return { ok: false, error: 'Migration guide missing advice for large library exports (>5,000/10,000 bookmarks)' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B08.02',
    feature: 'F08',
    name: 'Migration guide addresses nested tag slash syntax (#parent/child) preservation',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'File missing' };
      const text = parseHtml(readFileSync(MIGRATE_HTML, 'utf8')).text.toLowerCase();
      const hasTagHierarchy = text.includes('nested') || text.includes('subcollection') || text.includes('sub-collection') || text.includes('hierarchy');
      if (!hasTagHierarchy) {
        return { ok: false, error: 'Migration guide missing instructions on how nested tags/subcollections are converted' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B08.03',
    feature: 'F08',
    name: 'Migration guide explains how duplicate URLs are handled during import',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'File missing' };
      const text = parseHtml(readFileSync(MIGRATE_HTML, 'utf8')).text.toLowerCase();
      const hasDuplicate = text.includes('duplicate') || text.includes('deduplicat');
      if (!hasDuplicate) {
        return { ok: false, error: 'Migration guide missing duplicate URL resolution details' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B08.04',
    feature: 'F08',
    name: 'HowTo schema steps have non-empty name and text instructions',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(MIGRATE_HTML, 'utf8'));
      const howTo = parsed.jsonLd.find(s => s['@type'] === 'HowTo');
      if (howTo && Array.isArray(howTo.step)) {
        for (const s of howTo.step) {
          if (!s.name || !s.text) {
            return { ok: false, error: `Incomplete HowTo step in schema: name="${s.name}"` };
          }
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B08.05',
    feature: 'F08',
    name: 'Migration guide mentions Netscape bookmark backup file location in Raindrop settings',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'File missing' };
      const text = parseHtml(readFileSync(MIGRATE_HTML, 'utf8')).text.toLowerCase();
      const hasBackups = text.includes('settings') && (text.includes('backup') || text.includes('export'));
      if (!hasBackups) {
        return { ok: false, error: 'Migration guide missing exact Raindrop navigation path (Settings -> Backups)' };
      }
      return { ok: true };
    }
  }
];
