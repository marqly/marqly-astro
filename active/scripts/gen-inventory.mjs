#!/usr/bin/env node
// Build-time canonical URL inventory generator (Phase Zero source of truth).
// Emits docs/seo/url-inventory.csv from the fresh dist/client build + sitemap:
// one row per indexable URL with page type, language, title, description,
// canonical, indexability, inbound/outbound internal link counts, cluster,
// and GSC/billing-derived metric columns left as `pending-export` until a
// Search Console export exists (.seo/config.json: GSC unavailable locally).
// Usage: node active/scripts/gen-inventory.mjs
// Run npm run build FIRST.

import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const CLIENT = path.join(ROOT, 'dist/client');
const OUT = path.join(ROOT, 'docs/seo/url-inventory.csv');
const BASE = 'https://www.marqly.com';
const LOCALES = new Set(['es', 'pt', 'de', 'fr', 'it', 'ja', 'zh', 'ko', 'nl', 'pl', 'tr']);

const htmlFiles = [];
async function walk(d) {
  for (const e of await readdir(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) await walk(p);
    else if (e.name.endsWith('.html')) htmlFiles.push(p);
  }
}
await walk(CLIENT);

function toUrl(file) {
  let rel = path.relative(CLIENT, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  rel = rel.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  rel = rel.replace(/\/$/, '');
  return ('/' + rel) || '/';
}

function classify(url) {
  const p = url.replace(/^\/(es|pt|de|fr|it|ja|zh|ko|nl|pl|tr)(?=\/|$)/, '');
  const seg = p.split('/').filter(Boolean);
  if (seg.length === 0) return { type: 'home', cluster: 'brand' };
  const first = seg[0];
  const map = {
    compare: ['comparison', `compare:${seg[1] ?? 'hub'}`],
    alternatives: ['alternatives', `alternatives:${seg[1] ?? 'hub'}`],
    migrate: ['migration', `migrate:${seg[1] ?? 'hub'}`],
    tools: ['interactive-tool', `tools:${seg[1] ?? 'hub'}`],
    faq: ['faq', 'faq'],
    blog: ['blog', 'blog'],
    prompts: ['prompt', 'prompts'],
    'prompt-gallery': ['prompt-hub', 'prompts'],
    usecases: ['use-case', 'usecases'],
    features: ['feature', `features:${seg[1] ?? 'hub'}`],
  };
  if (map[first]) return { type: map[first][0], cluster: map[first][1] };
  if (/^\/(terms|privacypolicy|Pricing|T&C)/i.test(p) || p === '/pricing') return { type: 'core', cluster: 'core' };
  if (/^(for|vs)-/.test(p) || first === 'vs') return { type: 'comparison', cluster: `comparison:${seg[0]}` };
  if (/^for-/.test(p)) return { type: 'persona-lander', cluster: 'personas' };
  return { type: 'use-case-lander', cluster: 'usecases' };
}

const rows = [];
for (const file of htmlFiles) {
  const url = toUrl(file);
  if (url === '/404' || url.startsWith('/_')) continue;
  const src = await readFile(file, 'utf8');
  const title = (src.match(/<title>([^<]*)<\/title>/) || [, ''])[1].trim();
  const desc = (src.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1].trim();
  const canonical = (src.match(/<link rel="canonical" href="([^"]*)"/) || [, ''])[1] || BASE + url;
  const robots = (src.match(/<meta name="robots" content="([^"]*)"/) || [, ''])[1];
  const lang = (src.match(/<html lang="([^"]*)"/) || [, 'en'])[1];
  const locale = url === '/' ? 'en' : [...LOCALES].find((l) => url === `/${l}` || url.startsWith(`/${l}/`)) ?? 'en';
  if (!path.relative(CLIENT, file).replace(/\\/g, '/').startsWith('_') && (url.split('/').filter(Boolean)[0] ?? '').match(/^\d{4}$/)) continue;
  if (url.endsWith('/404')) continue;
  rows.push({ url, canonical, indexable: robots && /noindex/i.test(robots) ? 'noindex' : 'index', lang, locale, title, desc });
}

// internal link graph over the built HTML (out links per page)
const urls = { };
const byCanonical = new Map();
const strip = (u) => {
  let p = u.replace(/^https?:\/\/[^/]+/, '').replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  if (!p.startsWith('/')) return null;
  p = p.split(/[?#]/)[0];
  if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1);
  let m = p.match(/\/(es|pt|de|fr|it|ja|zh|ko|nl|pl|tr)(\/.*)?$/);
  return p;
};
const hrefToPath = (href) => {
  if (!href || /^[a-z]+:/i.test(href) || href.startsWith('mailto:') || href.startsWith('javascript:')) return null;
  let p = href.startsWith('/') ? href : null;
  if (!p) return null;
  p = p.split(/[?#]/)[0].replace(/\/$/, '') || '/';
  return p;
};
const inbound = new Map();
const outbound = new Map();
const pathSet = new Set();
for (const r of rows) pathSet.add(r.url.replace(/\/$/, '') || '/');

for (const file of htmlFiles) {
  const url = toUrl(file);
  const key = url.replace(/\/$/, '') || '/';
  if (!pathSet.has(url.replace(/\/$/, '') || '/') && !pathSet.has(key)) continue;
  const src = await readFile(file, 'utf8');
  const outs = new Set();
  for (const m of src.matchAll(/href="(\/[^"#?]*)"/g)) {
    const p = hrefToPath(m[1]);
    if (p && pathSet.has(p) && p !== url) outs.add(p);
  }
  outbound.set(url, outs.size);
  for (const t of outs) inbound.set(t, (inbound.get(t) ?? 0) + 1);
}

const header = ['url', 'pageType', 'cluster', 'language', 'indexability', 'canonical', 'title', 'metaDescription', 'status', 'internalLinksIn', 'internalLinksOut', 'organicClicks', 'impressions', 'ctr', 'avgPosition', 'signups', 'imports', 'checkouts', 'payments', 'paidActive30', 'backlinks', 'lastUpdate', 'action'];
const now = new Date().toISOString().slice(0, 10);
const lines = [header.join(',')];
const seen = new Set();
const sorted = rows.sort((a, b) => {
  const order = ['home', 'core', 'migration', 'alternatives', 'comparison', 'interactive-tool', 'feature', 'use-case', 'faq', 'use-case-lander', 'persona-lander', 'blog', 'prompt', 'prompt-hub'];
  const ca = classify(a.url), cb = classify(b.url);
  return order.indexOf(ca.type) - order.indexOf(cb.type) || a.url.localeCompare(b.url);
});
let orphans = 0;
for (const r of sorted) {
  if (seen.has(r.url)) continue;
  seen.add(r.url);
  const { type, cluster } = classify(r.url);
  const fin = (inbound.get(r.url) ?? 0);
  const fout = (outbound.get(r.url) ?? 0);
  if (fin === 0 && r.url !== '/') { orphans++; console.log('ORPHAN(no internal inbound):', r.url); }
  const esc = (s) => `"${String(s ?? '').replace(/"/g, '""')}"`;
  lines.push([r.url, type, cluster, r.lang, r.indexable, r.canonical, esc(r.title.slice(0, 120)), esc(r.desc.slice(0, 160)), 'published', fin, fout, 'pending-export', 'pending-export', 'pending-export', 'pending-export', 'pending-export', 'pending-export', 'pending-export', 'pending-export', 'pending-export', 'pending-export', r.locale === 'en' ? '' : `lang:${r.locale}`, now, 'keep'].join(','));
}
await writeFile(OUT, lines.join('\n') + '\n');
console.log(`inventory rows: ${seen.size} → ${path.relative(ROOT, OUT)}; orphans: ${orphans}`);
