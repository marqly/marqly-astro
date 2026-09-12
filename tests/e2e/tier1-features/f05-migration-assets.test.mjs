import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const MIGRATE_HTML = resolve(ROOT, 'dist/client/migrate/raindrop.html');

export const tests = [
  {
    id: 'T1.F05.01',
    feature: 'F05',
    name: 'public/og/seo/migrate-raindrop.png asset exists',
    run: async () => {
      const publicOg = resolve(ROOT, 'public/og/seo/migrate-raindrop.png');
      const distOg = resolve(ROOT, 'dist/client/og/seo/migrate-raindrop.png');
      if (!existsSync(publicOg) && !existsSync(distOg)) {
        return { ok: false, error: 'Missing migrate-raindrop.png OG image in public/og/seo/ or dist/client/og/seo/' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F05.02',
    feature: 'F05',
    name: 'migrate/raindrop.html breadcrumb points to /migrate parent rather than /compare',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const parsed = parseHtml(readFileSync(MIGRATE_HTML, 'utf8'));
      // Check JSON-LD breadcrumbs if present
      const breadcrumbSchema = parsed.jsonLd.find(s => s['@type'] === 'BreadcrumbList');
      if (breadcrumbSchema && Array.isArray(breadcrumbSchema.itemListElement)) {
        const parentCrumb = breadcrumbSchema.itemListElement[1];
        if (parentCrumb && parentCrumb.item?.includes('/compare') && !parentCrumb.item?.includes('/migrate')) {
          return { ok: false, error: 'Breadcrumb schema parent still points to /compare instead of /migrate' };
        }
      }
      // Check rendered breadcrumb HTML links
      const raw = parsed.raw;
      if (raw.includes('name: \'Compare\'') || (raw.includes('href="/compare"') && raw.includes('Breadcrumb'))) {
        return { ok: false, error: 'Breadcrumb in migrate/raindrop.astro still points to /compare' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F05.03',
    feature: 'F05',
    name: 'migrate/raindrop.html references og:image without 404',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const parsed = parseHtml(readFileSync(MIGRATE_HTML, 'utf8'));
      const ogImg = parsed.og.image;
      if (!ogImg) {
        return { ok: false, error: 'Missing og:image in migrate/raindrop.html' };
      }
      if (ogImg.includes('migrate-raindrop.png')) {
        const imgPath = resolve(ROOT, 'public/og/seo/migrate-raindrop.png');
        if (!existsSync(imgPath)) {
          return { ok: false, error: `Referenced og:image ${ogImg} does not exist on disk in public/` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F05.04',
    feature: 'F05',
    name: 'migrate/raindrop.html contains single descriptive H1 and main landmark',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const parsed = parseHtml(readFileSync(MIGRATE_HTML, 'utf8'));
      if (parsed.h1.length !== 1) {
        return { ok: false, error: `Expected exactly one H1, found ${parsed.h1.length}` };
      }
      if (!parsed.raw.includes('<main')) {
        return { ok: false, error: 'Missing <main> landmark in migrate/raindrop.html' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F05.05',
    feature: 'F05',
    name: 'migrate/raindrop.html has valid canonical URL pointing to /migrate/raindrop',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const parsed = parseHtml(readFileSync(MIGRATE_HTML, 'utf8'));
      if (!parsed.canonical || !parsed.canonical.endsWith('/migrate/raindrop')) {
        return { ok: false, error: `Unexpected canonical URL: ${parsed.canonical}` };
      }
      return { ok: true };
    }
  }
];
