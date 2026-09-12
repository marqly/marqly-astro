// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('.', import.meta.url));

/** Minimal frontmatter reader — top-level `key: value` scalars only. */
function frontmatter(file) {
  const src = readFileSync(file, 'utf8');
  if (!src.startsWith('---')) return {};
  const end = src.indexOf('\n---', 3);
  if (end === -1) return {};
  const out = {};
  for (const line of src.slice(3, end).split('\n')) {
    const m = /^([A-Za-z_][\w-]*):\s*(.+)$/.exec(line);
    if (m) out[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
  return out;
}

function walk(dir) {
  let files = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) files = files.concat(walk(p));
    else if (/\.(md|mdx)$/.test(name)) files.push(p);
  }
  return files;
}

/**
 * URL -> ISO lastmod, derived from each entry's own frontmatter date.
 *
 * Deliberately NOT the build timestamp: this is a static site rebuilt on every
 * deploy, so a build-time lastmod would claim all ~1,900 URLs changed on every
 * push. That is fake freshness, and Google stops trusting lastmod when it does
 * not reflect real edits. URLs with no mappable source date get no lastmod.
 */
function buildLastmod() {
  const map = new Map();
  const put = (url, dateStr) => {
    if (!url || !dateStr) return;
    const d = new Date(dateStr);
    if (!Number.isNaN(d.getTime())) map.set(url, d.toISOString());
  };
  const content = join(ROOT, 'src/content');

  // locale-pages declare their own public `path`, so the mapping is exact.
  for (const f of walk(join(content, 'locale-pages'))) {
    const fm = frontmatter(f);
    put(fm.path, fm.updatedDate || fm.pubDate);
  }
  // blog: /blog/<id> for English, /<lang>/blog/<slug> for translations
  // (mirrors src/pages/blog/[slug].astro + postPath()).
  for (const f of walk(join(content, 'blog'))) {
    const rel = relative(join(content, 'blog'), f).split(/[\\/]/);
    const file = rel.pop().replace(/\.(md|mdx)$/, '');
    const lang = rel[0];
    const fm = frontmatter(f);
    put(lang ? `/${lang}/blog/${file}` : `/blog/${file}`, fm.updatedDate || fm.pubDate);
  }
  // Single-segment collections keyed by filename (matches their getStaticPaths).
  const byFilename = {
    faq: (id) => `/faq/${id}`,
    usecases: (id) => `/${id}`,
    prompts: (id) => `/prompt-gallery/${id}`,
    verdicts: (id) => `/compare/${id}`,
  };
  for (const [coll, toUrl] of Object.entries(byFilename)) {
    const dir = join(content, coll);
    let files;
    try {
      files = walk(dir);
    } catch {
      continue;
    }
    for (const f of files) {
      const id = f.split(/[\\/]/).pop().replace(/\.(md|mdx)$/, '');
      const fm = frontmatter(f);
      put(toUrl(id), fm.updatedDate || fm.pubDate);
    }
  }
  return map;
}

const LASTMOD = buildLastmod();

// https://astro.build/config
// Deployed as a Cloudflare Worker (Workers Static Assets). All pages are
// prerendered (static); the adapter produces the worker entry + asset manifest
// that wrangler.json wires up.
export default defineConfig({
  site: 'https://www.marqly.com',
  trailingSlash: 'ignore',
  // Emit `<route>.html` instead of `<route>/index.html` so URLs resolve with
  // NO trailing slash (parity with the original Framer URLs and with every
  // internal link on the site). Before this, Workers assets 307-redirected
  // every no-slash request to its slashed twin — a temporary redirect on all
  // ~54k internal link hops. Old /path/ URLs now 308 back to /path.
  build: { format: 'file' },
  // Locale subdirectories with localized slugs (/es/herramientas/…). English
  // stays unprefixed at root and is the x-default. hreflang is emitted from
  // src/i18n/routes.ts via the layouts (the sitemap i18n option can't pair
  // localized slugs, so it stays off).
  i18n: {
    defaultLocale: 'en',
    // Must stay in sync with LOCALES in src/i18n/routes.ts, which is the real
    // source of truth for routing + hreflang. Routing here is manual (per-locale
    // src/pages/<locale>/ trees), so nothing reads Astro.currentLocale today —
    // but a short list would silently resolve /ja/... to 'en' the moment
    // someone does.
    locales: ['en', 'es', 'pt', 'de', 'fr', 'it', 'ja', 'zh', 'ko', 'nl', 'pl', 'tr'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    react(),
    mdx(),
    sitemap({
      // Attach real per-URL lastmod from frontmatter. URLs with no mappable
      // source date are emitted without lastmod rather than with a fake one.
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\.html$/, '');
        const key = path.length > 1 ? path.replace(/\/$/, '') : path;
        const lastmod = LASTMOD.get(key);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  vite: {
    // Tailwind v4 (scoped: landing.css uses `source(none)` + explicit @source
    // globs, so utilities are generated only for the redesigned landing).
    plugins: [tailwindcss()],
  },
  adapter: cloudflare({
    imageService: 'compile',
    prerenderEnvironment: 'node',
  }),
});
