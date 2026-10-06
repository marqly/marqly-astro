// crawl-audit.mjs — Phase 0 data layer: live crawl -> enriched inventory.
// Fetch layer = active/scripts/seo-crawl.py (battle-tested regexes + disk cache).
// This script enriches: inbound links, EN pairing, parity, thin/stub classes, per-template rollup.
// Usage: node seo/scripts/crawl-audit.mjs [--force-fetch] [--workers=16]
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const RAW = path.join(ROOT, 'active/tmp/crawl.json');
const OUT = path.join(ROOT, 'seo/data/crawl');
const SITE = 'https://www.marqly.com';
const LOCALES = new Set(['es', 'pt', 'de', 'fr', 'it', 'ja', 'zh', 'ko', 'nl', 'pl', 'tr']);
const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);

function norm(p) {
  if (!p) return null;
  let x = p.startsWith(SITE) ? p.slice(SITE.length) : p;
  if (!x.startsWith('/')) return null; // marqly:// schemes etc.
  x = x.split('?')[0].split('#')[0];
  if (x.length > 1) x = x.replace(/\/+$/, '');
  x = x.replace(/\.html$/, '');
  return x || '/';
}

// CJK has no whitespace words; estimate comparable volume (same rule as seo-analyze.py).
function contentUnits(r) {
  const lang = (r.html_lang || 'en').split('-')[0];
  return ['ja', 'zh', 'ko'].includes(lang) ? Math.round((r.text_chars || 0) * 0.6) : (r.word_count || 0);
}

function templateOf(p) {
  const seg = p.split('/').filter(Boolean);
  if (p === '/') return 'home';
  if (seg[0] === 'blog') return 'blog';
  if (seg[0] === 'faq') return seg.length === 1 ? 'faq-index' : 'faq';
  if (seg[0] === 'compare') return seg.length === 1 ? 'compare-index' : 'compare';
  if (seg[0] === 'alternatives') return seg.length === 1 ? 'alternatives-index' : 'alternatives';
  if (seg[0] === 'migrate') return seg.length === 1 ? 'migrate-index' : 'migrate';
  if (seg[0] === 'prompt-gallery') return seg[1] === 'category' ? 'prompt-category' : (seg.length === 1 ? 'prompt-index' : 'prompt');
  if (seg[0] === 'tools') return seg.length === 1 ? 'tools-index' : 'tool';
  if (LOCALES.has(seg[0])) {
    const rest = seg.slice(1);
    if (rest.length === 0) return 'locale-home';
    if (rest[0] === 'blog') return rest.length > 1 ? 'locale-blog' : 'locale-blog-index';
    if (rest[0] === 'tools') return rest.length > 1 ? 'locale-tool' : 'locale-tools-index';
    if (rest[0] === 'faq') return 'locale-faq';
    return 'locale-lander';
  }
  if (seg.length === 1) return 'root-lander'; // /for-x, /bookmark-manager-for-chrome, /pricing, /terms, legal, /embed, /uninstall…
  return `other/${seg[0]}`;
}

function main() {
  const ageOk = fs.existsSync(RAW) && (Date.now() - fs.statSync(RAW).mtimeMs) < 24 * 3.6e6;
  if (!ageOk || flag('force-fetch')) {
    console.log('fetching production crawl (python seo-crawl.py)…');
    execFileSync('python3', [path.join(ROOT, 'active/scripts/seo-crawl.py'), '--workers', (args.find((a) => a.startsWith('--workers'))?.split('=')[1]) || '16'], { cwd: ROOT, stdio: 'inherit' });
  }
  const recs = JSON.parse(fs.readFileSync(RAW, 'utf8'));
  console.log(`enriching ${recs.length} records…`);

  const byPath = new Map();
  for (const r of recs) byPath.set(norm(r.path), r);

  // inbound internal links
  const inbound = new Map();
  for (const r of recs) {
    const self = norm(r.path);
    for (const t of r.internal_targets || []) {
      const n = norm(t);
      if (!n || n === self) continue;
      inbound.set(n, (inbound.get(n) || 0) + 1);
    }
  }

  const rows = recs.map((r) => {
    const p = norm(r.path);
    const lang = (r.html_lang || 'en').split('-')[0];
    const enAlt = (r.hreflang || []).find((a) => a.hreflang.toLowerCase() === 'en')?.href;
    const enPath = enAlt ? norm(enAlt) : null;
    const enRec = enPath && enPath !== p ? byPath.get(enPath) : null;
    const units = contentUnits(r);
    const parity = enRec && contentUnits(enRec) > 0 ? +(units / contentUnits(enRec)).toFixed(2) : null;
    const xrobot = (r.headers?.['x-robots-tag'] || '').toLowerCase();
    const noindex = !!r.noindex || xrobot.includes('noindex');
    return {
      path: p,
      url: r.url,
      status: r.status,
      lang: LOCALES.has(lang) ? lang : 'en',
      template: templateOf(p),
      title: r.title || '',
      title_len: r.title_len || 0,
      description: r.description || '',
      desc_len: r.description_len || 0,
      h1: r.h1 || '',
      h1_count: r.h1_count ?? 0,
      h2_count: r.h2_count ?? 0,
      units,
      word_count: r.word_count ?? 0,
      thin: units < 300,
      en_source: enPath && enPath !== p ? enPath : null,
      parity,
      stub: parity !== null && parity < 0.5,
      unpaired_locale: LOCALES.has(lang) && lang !== 'en' && (!enPath || enPath === p),
      canonical: r.canonical || '',
      canonical_ok: !!r.canonical_self,
      noindex,
      robots_meta: r.robots_meta || '',
      hreflang_count: r.hreflang_count ?? 0,
      has_xdefault: !!r.has_xdefault,
      schema_types: (r.schema_types || []).join('|'),
      jsonld_dates: r.jsonld_dates || {},
      author_types: (r.author_types || []).join('|'),
      internal_out: (r.internal_targets || []).length,
      inbound: inbound.get(p) || 0,
      external_links: r.external_links ?? 0,
      images: r.img_count ?? 0,
      img_missing_alt: r.img_alt_missing ?? (r.img_missing_alt ?? 0),
      og_image: r.has_og_image ?? false,
      bytes: r.bytes ?? 0,
      ms: r.ms ?? 0,
      from_cache: !!r.from_cache,
    };
  });

  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'audit.jsonl'), rows.map((r) => JSON.stringify(r)).join('\n') + '\n');

  const cols = ['path', 'url', 'status', 'lang', 'template', 'title_len', 'desc_len', 'units', 'thin', 'parity', 'stub', 'unpaired_locale', 'canonical_ok', 'noindex', 'hreflang_count', 'has_xdefault', 'schema_types', 'author_types', 'internal_out', 'inbound', 'external_links', 'images', 'img_missing_alt', 'og_image', 'jsonld_dates', 'h1'];
  const esc = (v) => `"${String(typeof v === 'object' && v ? JSON.stringify(v) : (v ?? '')).replaceAll('"', '""').replaceAll(/\n/g, ' ')}"`;
  const csv = [cols.join(','), ...rows.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n') + '\n';
  fs.writeFileSync(path.join(OUT, 'pages.csv'), csv);

  const idx = rows.filter((r) => r.status === 200 && !r.noindex);
  const sum = (f) => rows.filter(f).length;
  const byTpl = {};
  for (const r of rows) {
    (byTpl[r.template] ??= { urls: 0, units_sum: 0, thin: 0, stub: 0, unpaired: 0, en_only: 0 }).urls++;
    byTpl[r.template].units_sum += r.units;
    if (r.thin) byTpl[r.template].thin++;
    if (r.stub) byTpl[r.template].stub++;
    if (r.unpaired_locale) byTpl[r.template].unpaired++;
  }
  const meta = {
    generatedAt: new Date().toISOString(),
    source: 'live production crawl of sitemap-0.xml',
    total: rows.length,
    status_hist: rows.reduce((m, r) => (m[r.status] = (m[r.status] || 0) + 1, m), {}),
    indexable: idx.length,
    noindex_now: sum((r) => r.noindex),
    kpi: {
      indexable_thin_lt300: idx.filter((r) => r.thin).length,
      localized_stubs_parity_lt50: idx.filter((r) => r.stub).length,
      unpaired_locale_pages: idx.filter((r) => r.unpaired_locale).length,
      titles_over60: idx.filter((r) => r.title_len > 60).length,
      descs_over160: idx.filter((r) => r.desc_len > 160).length,
      descs_under70: idx.filter((r) => r.desc_len < 70).length,
      canonical_mismatch: sum((r) => r.status === 200 && r.canonical && !r.canonical_ok),
      pages_without_main: sum((r) => r.h1_count === 0),
      org_authored_with_dates: sum((r) => r.author_types === 'Organization' && r.jsonld_dates?.dateModified),
      person_authored: sum((r) => r.author_types?.includes('Person')),
      zero_inbound: idx.filter((r) => r.inbound === 0 && r.path !== '/').length,
    },
    by_template: Object.fromEntries(Object.entries(byTpl).map(([k, v]) => [k, { ...v, avg_units: Math.round(v.units_sum / v.urls) }])),
  };
  fs.writeFileSync(path.join(OUT, 'meta.json'), JSON.stringify(meta, null, 2) + '\n');
  console.log(JSON.stringify(meta, null, 2));
  console.log(`\nwrote ${path.relative(ROOT, OUT)}/{audit.jsonl,pages.csv,meta.json}`);
}

main();
