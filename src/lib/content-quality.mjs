// content-quality.mjs — the ONE place indexability is decided (ADR-001).
// Computes locale parity from SOURCE files at build time; feeds:
//   - LandingLayout/LandingV2 (robots noindex)
//   - astro.config sitemap filter
//   - routes.ts alternatesForPath (hreflang cluster exclusion on all siblings)
//   - active/scripts/seo-check.mjs gate 11 (consistency + "stubs can't ship")
// Plain ESM + fs so config/scripts/components share it without a TS cycle.
import fs from 'node:fs';
import path from 'node:path';
import TRANSLATIONS from '../i18n/translations.mjs';

// ROOT: process.cwd() is the repo root during `astro build` AND prerender.
// NEVER import.meta.dirname here — at prerender time it resolves into
// dist/server/.prerender/, so fs scans hit dist/server/src/pages and ENOENT
// (lab note 2026-09-25). Guard: only trust cwd if the content dir exists.
const SELF = path.resolve(import.meta.dirname, '..', '..');
const ROOT = fs.existsSync(path.join(process.cwd(), 'src/content'))
  ? process.cwd()
  : fs.existsSync(path.join(SELF, 'src/content'))
    ? SELF
    : process.cwd();

/** ADR-001 tiers: 1 = market producing clicks, keep indexable, upgrade to parity. */
export const TIERS = { ja: 1, ko: 1, de: 1, es: 1, fr: 2, pt: 2, it: 2, zh: 3, pl: 3, tr: 3, nl: 3 };
export const PARITY_BAR = 0.8; // Tier 2/3: units ratio vs the EN source
export const SECTION_BAR = 0.8; // Tier 2/3: h2 count vs the EN source

const LOCALE_DIRS = fs.readdirSync(path.join(ROOT, 'src/pages')).filter((d) =>
  /^[a-z]{2}$/.test(d) && d !== 'en' && fs.statSync(path.join(ROOT, 'src/pages', d)).isDirectory());

const stripFm = (s) => s.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');

/** Comparable content volume: CJK has no whitespace words (same rule as the crawl). */
export function units(text, lang) {
  const body = text
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
  if (['ja', 'zh', 'ko'].includes(lang)) return Math.round(body.replace(/\s+/g, '').length * 0.6);
  return body.split(/\s+/).filter((w) => /\w/.test(w)).length;
}
const h2s = (text) => (text.replace(/^---[\s\S]*?---/, '').match(/^##\s+/gm) || []).length;

// ---- source registry: locale URL -> {lang, file} ----
const localeSource = new Map(); // "/es/usos/x" -> file
const enByLocale = new Map();    // "/es/usos/x" -> "/for-students"
for (const [enPath, locs] of Object.entries(TRANSLATIONS)) {
  for (const [l, p] of Object.entries(locs || {})) if (p) enByLocale.set(p, enPath);
}

function registerLocalePages() {
  const dir = path.join(ROOT, 'src/content/locale-pages');
  for (const lang of fs.readdirSync(dir)) {
    const ldir = path.join(dir, lang);
    if (!fs.statSync(ldir).isDirectory()) continue;
    for (const f of fs.readdirSync(ldir)) {
      if (!/\.mdx?$/.test(f)) continue;
      const file = path.join(ldir, f);
      const m = /^---[\s\S]*?^path:\s*(\S+)[\s\S]*?^---/m.exec(fs.readFileSync(file, 'utf8'));
      if (m) localeSource.set(m[1].replaceAll('"', ''), file);
    }
  }
}
registerLocalePages();

const enBlogFile = (slug) =>
  [path.join(ROOT, 'src/content/blog', `${slug}.md`), path.join(ROOT, 'src/content/blog', `${slug}.mdx`)]
    .find((p) => fs.existsSync(p));

/** @returns {{url:string, lang:string, units:number, h2:number, file:string}|null} */
function localeMeasure(url) {
  const seg = url.split('/').filter(Boolean);
  const lang = seg[0];
  if (!LOCALE_DIRS.includes(lang)) return null;
  // localized blog post
  if (seg[1] === 'blog' && seg.length === 3) {
    const file = [`${lang}/${seg[2]}.md`, `${lang}/${seg[2]}.mdx`]
      .map((p) => path.join(ROOT, 'src/content/blog', p))
      .find((p) => fs.existsSync(p));
    if (!file) return null;
    const t = fs.readFileSync(file, 'utf8');
    return { url, lang, units: units(t, lang), h2: h2s(t), file };
  }
  // locale lander (collection md with explicit path)
  const file = localeSource.get(url) ?? localeSource.get(url.replace(/\/$/, ''));
  if (file) {
    const t = fs.readFileSync(file, 'utf8');
    return { url, lang, units: units(t, lang), h2: h2s(t), file };
  }
  // static hand-written locale page (e.g. /fr/outils/resume-youtube.astro)
  const rel = url.replace(/^\//, '');
  for (const ext of ['.astro', '.md']) {
    const p = path.join(ROOT, 'src/pages', `${rel}${ext}`);
    if (fs.existsSync(p)) {
      const t = fs.readFileSync(p, 'utf8');
      return { url, lang, units: units(t, lang), h2: h2s(t), file: p };
    }
  }
  const idx = path.join(ROOT, 'src/pages', rel, 'index.astro');
  if (fs.existsSync(idx)) {
    const t = fs.readFileSync(idx, 'utf8');
    return { url, lang, units: units(t, lang), h2: h2s(t), file: idx };
  }
  return null;
}

function enMeasure(enUrl) {
  if (enUrl === '/' || !enUrl) return null;
  const seg = enUrl.split('/').filter(Boolean);
  if (seg[0] === 'blog') {
    const file = enBlogFile(seg[1]);
    if (file) { const t = fs.readFileSync(file, 'utf8'); return { units: units(t, 'en'), h2: h2s(t), file }; }
    return null;
  }
  if (enUrl.startsWith('/for-') || TIERS[seg[0]] === undefined) {
    const uc = path.join(ROOT, 'src/content/usecases', `${enUrl.slice(1)}.md`);
    const ucx = path.join(ROOT, 'src/content/usecases', `${enUrl.slice(1)}.mdx`);
    const file = fs.existsSync(uc) ? uc : fs.existsSync(ucx) ? ucx : null;
    if (file) { const t = fs.readFileSync(file, 'utf8'); return { units: units(t, 'en'), h2: h2s(t), file }; }
  }
  for (const ext of ['.astro', '.md', '.mdx']) {
    const p = path.join(ROOT, 'src/pages', `${enUrl.slice(1)}${ext}`);
    if (fs.existsSync(p)) { const t = fs.readFileSync(p, 'utf8'); return { units: units(t, 'en'), h2: h2s(t), file: p }; }
  }
  const idx = path.join(ROOT, 'src/pages', enUrl.slice(1), 'index.astro');
  if (fs.existsSync(idx)) { const t = fs.readFileSync(idx, 'utf8'); return { units: units(t, 'en'), h2: h2s(t), file: idx }; }
  return null;
}

/** ADR-002: prompt-gallery keep-list (Phase 1.2). Pages at /prompt-gallery/<slug>
 * must appear in seo/data/gsc/prompt-keep.csv (≥1 click or ≥20 impressions over
 * the last 90 days, or be a category hub) or they are pruned the same way as
 * below-bar locale pages: noindex + off sitemap. If the file is absent, prompts
 * are ALL kept — fail-open, so deleting the file is the one-line rollback. */
function loadPromptKeep() {
  const p = path.join(ROOT, 'seo/data/gsc/prompt-keep.csv');
  if (!fs.existsSync(p)) return null;
  const set = new Set();
  for (const line of fs.readFileSync(p, 'utf8').split('\n').slice(1)) {
    const m = line.match(/^\s*"([^"]+)"/);
    if (m) set.add(m[1]);
  }
  return set.size ? set : null;
}
const PROMPT_KEEP = loadPromptKeep();

const cache = new Map();
const PRUNE_LOG = [];

/** ADR-001 verdict for a served URL. Non-locale URLs are always indexable. */
export function isIndexable(url) {
  const u = (url || '/').replace(/\.html$/, '').replace(/\/$/, '') || '/';
  if (cache.has(u)) return cache.get(u).index;
  // ADR-002 prompt branch: detail pages need a keep-list seat; hubs always pass.
  if (PROMPT_KEEP && u.startsWith('/prompt-gallery/') && u !== '/prompt-gallery/category' && !u.startsWith('/prompt-gallery/category/')) {
    const ok = PROMPT_KEEP.has(u);
    if (!ok) PRUNE_LOG.push({ url: u, lang: 'en', tier: 0, units: 0, enUnits: 0, parity: null, h2: 0, enH2: 0, secParity: null, en: null, file: 'seo/content/prompts' });
    cache.set(u, { index: ok, why: ok ? 'prompt keep-list' : 'prompt below 90d demand bar' });
    return ok;
  }
  const loc = localeMeasure(u);
  if (!loc) { const v = true; cache.set(u, { index: v }); return v; }
  const tier = TIERS[loc.lang] ?? 3;
  if (tier === 1) { const v = true; cache.set(u, { index: v, why: 'tier1' }); return v; }
  const enUrl = enByLocale.get(u);
  const en = enUrl ? enMeasure(enUrl) : null;
  if (!en) { // unpaired — can't judge parity; ADR-001 keeps it, flagged in the report
    const v = true; cache.set(u, { index: v, why: 'unpaired' }); return v;
  }
  const parity = en.units ? loc.units / en.units : 0;
  const secParity = en.h2 ? loc.h2 / en.h2 : (loc.h2 >= 2 ? 1 : 0);
  const ok = parity >= PARITY_BAR && secParity >= SECTION_BAR;
  if (!ok) PRUNE_LOG.push({ url: u, lang: loc.lang, tier, units: loc.units, enUnits: en.units, parity: +parity.toFixed(2), h2: loc.h2, enH2: en.h2, secParity: +secParity.toFixed(2), en: enUrl, file: path.relative(ROOT, loc.file) });
  cache.set(u, { index: ok, parity, why: ok ? 'meets bar' : `below bar (parity ${parity.toFixed(2)}, sections ${secParity.toFixed(2)})` });
  return ok;
}

/** True when a pruned URL must be hidden from hreflang on siblings. */
export function clusterHidden(url) {
  const seg = url.replace(SITE_RE, '').split('/').filter(Boolean);
  return !isIndexable('/' + seg.join('/'));
}
const SITE_RE = /^https?:\/\/[^/]+/;

/** Full decision census — what the gate and the gate report read. */
export function pruneCensus() {
  // force evaluation of every known locale URL (collection paths + hreflang clusters)
  const urls = new Set([...localeSource.keys(), ...enByLocale.keys()]);
  const out = [];
  for (const u of urls) if (!isIndexable(u)) out.push(PRUNE_LOG.find((p) => p.url === u.replace(/\/$/, '')));
  return { bar: { parity: PARITY_BAR, sections: SECTION_BAR }, tiers: TIERS, pruned: out.filter(Boolean) };
}

/**
 * Parity census for EVERY locale page (all tiers), so the KPI "indexable
 * localized stubs" is a measured number and re-enablement is trackable.
 * Returns { url, lang, tier, parity, indexable, enSource }.
 */
export function localeParityCensus() {
  const urls = new Set([...localeSource.keys(), ...enByLocale.keys()]);
  const rows = [];
  for (const u0 of urls) {
    const u = u0.replace(/\/$/, '') || '/';
    const loc = localeMeasure(u);
    if (!loc) continue;
    const enUrl = enByLocale.get(u) ?? enByLocale.get(u0);
    const en = enUrl ? enMeasure(enUrl) : null;
    const parity = en && en.units ? +(loc.units / en.units).toFixed(2) : null;
    rows.push({ url: u, lang: loc.lang, tier: TIERS[loc.lang] ?? 3, parity, indexable: isIndexable(u), enSource: enUrl || null });
  }
  return rows;
}

if (process.argv[1] && process.argv[1].endsWith('content-quality.mjs')) {
  const c = pruneCensus();
  const byLang = {};
  for (const p of c.pruned) byLang[p.lang] = (byLang[p.lang] || 0) + 1;
  console.log(JSON.stringify({ bar: c.bar, totalLocaleUrlsEvaluated: new Set([...localeSource.keys(), ...enByLocale.keys()]).size, pruned: c.pruned.length, byLang, sample: c.pruned.slice(0, 10) }, null, 2));
}
