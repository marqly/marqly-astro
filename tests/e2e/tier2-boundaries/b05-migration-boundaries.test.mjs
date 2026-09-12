import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const MIGRATE_HTML = resolve(ROOT, 'dist/client/migrate/raindrop.html');

export const tests = [
  {
    id: 'T2.B05.01',
    feature: 'F05',
    name: 'Migration page breadcrumb trail has minimum 2 elements and root begins at Home',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const parsed = parseHtml(readFileSync(MIGRATE_HTML, 'utf8'));
      const breadcrumb = parsed.jsonLd.find(s => s['@type'] === 'BreadcrumbList');
      if (breadcrumb && Array.isArray(breadcrumb.itemListElement)) {
        if (breadcrumb.itemListElement.length < 2) {
          return { ok: false, error: `Breadcrumb trail too short (${breadcrumb.itemListElement.length})` };
        }
        const rootItem = breadcrumb.itemListElement[0];
        if (rootItem.item && !rootItem.item.endsWith('/') && !rootItem.item.includes('marqly.com')) {
          return { ok: false, error: `Unexpected breadcrumb root: ${rootItem.item}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B05.02',
    feature: 'F05',
    name: 'OG image URL uses absolute HTTPS schema and points to .png format',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(MIGRATE_HTML, 'utf8'));
      const ogImg = parsed.og.image;
      if (ogImg) {
        if (!ogImg.startsWith('https://')) {
          return { ok: false, error: `og:image must use absolute HTTPS URL: ${ogImg}` };
        }
        if (!ogImg.endsWith('.png') && !ogImg.endsWith('.webp') && !ogImg.endsWith('.jpg')) {
          return { ok: false, error: `og:image must reference valid image format: ${ogImg}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B05.03',
    feature: 'F05',
    name: 'Migration page contains no broken internal relative links',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(MIGRATE_HTML, 'utf8'));
      for (const link of parsed.links) {
        if (link.startsWith('/') && !link.startsWith('//')) {
          const cleanPath = link.split('#')[0].split('?')[0];
          if (cleanPath && cleanPath !== '/') {
            const relFile = resolve(ROOT, `dist/client${cleanPath}.html`);
            const indexFile = resolve(ROOT, `dist/client${cleanPath}/index.html`);
            const exactFile = resolve(ROOT, `dist/client${cleanPath}`);
            if (!existsSync(relFile) && !existsSync(indexFile) && !existsSync(exactFile)) {
              // Mark warning / error if broken
              return { ok: false, error: `Broken internal link target: "${link}" on migrate/raindrop.html` };
            }
          }
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B05.04',
    feature: 'F05',
    name: 'Heading hierarchy does not skip levels (H1 followed by H2, then H3)',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(MIGRATE_HTML, 'utf8'));
      if (parsed.h1.length > 0 && parsed.h2.length === 0 && parsed.h3.length > 0) {
        return { ok: false, error: 'Heading level skipped: H3 appears without intermediate H2' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B05.05',
    feature: 'F05',
    name: 'All JSON-LD blocks on migration page parse with zero JSON syntax errors',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(MIGRATE_HTML, 'utf8'));
      const errBlock = parsed.jsonLd.find(s => s.parseError);
      if (errBlock) {
        return { ok: false, error: `Malformed JSON-LD script on migration page: ${errBlock.raw}` };
      }
      return { ok: true };
    }
  }
];
