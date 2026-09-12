#!/usr/bin/env node
/**
 * SEO quality gates over the built site (dist/client).
 *
 * Every check here corresponds to a defect that actually shipped, so the suite
 * is a regression net rather than a generic linter. Exits non-zero on any FAIL
 * so it can gate a deploy.
 *
 * Usage: node active/scripts/seo-check.mjs [--dist dist/client]
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const argv = process.argv.slice(2);
const DIST = argv.includes('--dist') ? argv[argv.indexOf('--dist') + 1] : 'dist/client';
const BASE = 'https://www.marqly.com';
const LOCALES = ['es', 'pt', 'de', 'fr', 'it', 'ja', 'zh', 'ko', 'nl', 'pl', 'tr'];

const results = [];
const check = (name, failures, note = '') => {
  results.push({ name, ok: failures.length === 0, count: failures.length, failures, note });
};

function walk(dir) {
  let out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out = out.concat(walk(p));
    else if (e.endsWith('.html')) out.push(p);
  }
  return out;
}

const toUrl = (p) => {
  let rel = relative(DIST, p).split('\\').join('/').replace(/\.html$/, '');
  if (rel === 'index') return '/';
  if (rel.endsWith('/index')) rel = rel.slice(0, -'/index'.length);
  return '/' + rel;
};

/** Strip <script>/<style>/comments: inline scripts contain HTML string literals. */
const toDom = (h) =>
  h.replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');

/**
 * Read an attribute value honouring whichever quote opened it. The closing
 * delimiter must match the opening one — a value may legitimately contain the
 * other quote character (e.g. content="'Later bekijken' is de plek…"). Matching
 * ["'] on both sides truncates there and reports a phantom missing description.
 */
function attr(tag, name) {
  const m = new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i').exec(tag);
  if (!m) return null;
  return m[2] !== undefined ? m[2] : m[3];
}

console.log(`\nSEO gates — ${DIST}\n${'='.repeat(60)}`);
if (!existsSync(DIST)) {
  console.error(`FAIL: ${DIST} not found. Run \`npm run build\` first.`);
  process.exit(2);
}

const files = walk(DIST).filter((f) => !toUrl(f).startsWith('/404'));
const pages = files.map((f) => ({ url: toUrl(f), raw: readFileSync(f, 'utf8') }));
console.log(`analysing ${pages.length} built pages\n`);

// --- 1. No fabricated review markup -------------------------------------
// A 4.8/150 AggregateRating shipped on 801 live URLs until 2026-09-12. Store
// ratings are far lower and self-serving ratings are ineligible for stars.
const rated = pages.filter((p) => /AggregateRating|ratingValue/i.test(p.raw));
check('no fabricated AggregateRating in JSON-LD', rated.map((p) => p.url),
  'see .seo/truth-ledger.md');

// --- 2. Retired / false commercial claims must not reappear -------------
// Two classes, deliberately separated:
//   (a) phrases that are wrong in ANY context (stale limits, stale trial length,
//       fabricated ratings);
//   (b) capabilities Marqly does not have. For (b) a bare substring match is
//       useless — the comparison tables MUST say "Android app: —" and the FAQ
//       MUST answer "Is there a Marqly lifetime deal?". So (b) only fires on an
//       AFFIRMATIVE claim that Marqly has the capability.
const ALWAYS_WRONG = [
  [/100 most recent/i, 'free-tier read-wall was removed; whole library is searchable'],
  [/3-day (?:free )?trial/i, 'trial is 7 days'],
];
/**
 * Capabilities Marqly does NOT have. Only fires when the claim is attributed to
 * Marqly: the comparison pages legitimately state "Android app: —", the FAQ
 * legitimately answers "Is there a Marqly lifetime deal?", and competitor rows
 * legitimately cite e.g. "Anybox — 4.7 stars on the App Store". A window that
 * mentions another product, or that negates the capability, is correct copy.
 */
const MARQLY_CLAIM = /\bmarqly\b[^.]{0,140}?\b(?:has|have|offers?|includes?|supports?|provides?|comes with|ships with)\b[^.]{0,140}?\b(?:android app|offline (?:reading|mode|copies|access)|public api|self-host)/i;
// Deliberately narrow: it must be an explicit rating construction attributed to
// Marqly. Loose patterns match CSS ("/5)"), the word "started" (via /stars?/),
// and competitor review scores that merely sit near a "Marqly Team" byline.
const SCORE = /\b[0-5](?:\.[0-9])?\s*(?:\/\s*5|out of 5|\bstars?\b)/i;
const MARQLY_RATING_FWD = new RegExp(`\\bmarqly\\b[^.]{0,70}?\\b(?:rated|rating of|review score|scores?)\\b[^.]{0,30}?${SCORE.source}`, 'i');
const MARQLY_RATING_REV = new RegExp(`${SCORE.source}[^.]{0,30}?\\b(?:for|of|from)\\s+marqly\\b`, 'i');
const LIFETIME_OFFER = /\b(?:buy|get|grab|claim|our)\b[^.]{0,40}?\blifetime deal\b/i;
const NEGATED = /\b(?:no|not|never|doesn't|does not|isn't|is not|without|lacks?|unlike|—)\b/i;

/** Competitor display names, from the verified data layer that renders those pages. */
function competitorNames() {
  const dir = 'src/data/competitors';
  const names = new Set();
  try {
    for (const f of readdirSync(dir)) {
      if (!f.endsWith('.json') || f === 'marqly.json') continue;
      try {
        const j = JSON.parse(readFileSync(join(dir, f), 'utf8'));
        if (j.name) names.add(j.name.toLowerCase());
      } catch { /* skip malformed entry; the build is the gate for that */ }
    }
  } catch { /* data layer absent — run without the competitor filter */ }
  return names;
}
const COMPETITORS = competitorNames();
const mentionsCompetitor = (s) => {
  const low = s.toLowerCase();
  return [...COMPETITORS].some((n) => n.length > 2 && low.includes(n));
};
/**
 * Two copy shapes look like a claim but are not, and are handled inline below:
 * an interrogative ("Does Marqly have an API or a self-hosted option?" — the
 * answer is "no to both"), and the "Marqly Team" author byline sitting next to
 * an editorial review SCORE for the competitor under review (legitimate and
 * encouraged — it is our rating OF them, not a rating OF Marqly).
 */

const claimHits = [];
for (const p of pages) {
  const text = toDom(p.raw).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  for (const [re, why] of ALWAYS_WRONG) {
    if (re.test(text)) claimHits.push(`${p.url} → ${why}`);
  }
  for (const [re, why] of [[MARQLY_CLAIM, 'claims a capability Marqly does not have'],
    [MARQLY_RATING_FWD, 'publishes a Marqly rating/review score'],
    [MARQLY_RATING_REV, 'publishes a Marqly rating/review score'],
    [LIFETIME_OFFER, 'offers a lifetime deal that does not exist']]) {
    const m = re.exec(text);
    if (!m) continue;
    if (NEGATED.test(m[0])) continue;
    if (/marqly team/i.test(m[0])) continue;
    // The '?' of an FAQ question can fall just past the matched window
    // ("Does Marqly have an API or a self-hosted option?"), so look ahead too.
    if (/\?/.test(text.slice(m.index, m.index + m[0].length + 60))) continue;
    if (mentionsCompetitor(m[0])) continue;
    claimHits.push(`${p.url} → ${why}: "${m[0].slice(0, 120)}"`);
  }
}
check('no retired or false product claims in visible copy', claimHits.slice(0, 40),
  `${claimHits.length} total`);

// --- 3. Required metadata on every indexable page -----------------------
const noTitle = [], noDesc = [], noCanon = [], multiH1 = [], noH1 = [], noMain = [], dupTitle = new Map();
for (const p of pages) {
  const head = (p.raw.match(/<head\b[\s\S]*?<\/head>/i) || [p.raw])[0];
  const title = (p.raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1];
  const descTag = /<meta[^>]+name=["']description["'][^>]*>/i.exec(head);
  const desc = descTag ? attr(descTag[0], 'content') : null;
  const canonTag = /<link[^>]+rel=["']canonical["'][^>]*>/i.exec(head);
  const canon = canonTag ? attr(canonTag[0], 'href') : null;
  const dom = toDom(p.raw);
  const h1s = [...dom.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);

  if (!title || !title.trim()) noTitle.push(p.url);
  else {
    const key = title.trim();
    if (dupTitle.has(key)) dupTitle.get(key).push(p.url);
    else dupTitle.set(key, [p.url]);
  }
  if (!desc || !desc.trim()) noDesc.push(p.url);
  if (!canon) noCanon.push(p.url);
  if (h1s.length === 0) noH1.push(p.url);
  if (h1s.length > 1) multiH1.push(p.url);
  if (!/<main\b/i.test(dom)) noMain.push(p.url);
}
check('every page has a <title>', noTitle.slice(0, 20));
check('every page has a meta description', noDesc.slice(0, 20));
check('every page has a canonical', noCanon.slice(0, 20));
check('exactly one H1 per page', [...noH1, ...multiH1].slice(0, 20));
check('every page has a <main> landmark', noMain.slice(0, 20));
const dupes = [...dupTitle.entries()].filter(([, v]) => v.length > 1);
check('no duplicate <title> across pages',
  dupes.slice(0, 20).map(([t, v]) => `${t} (${v.length}x: ${v.slice(0, 3).join(', ')})`));

// --- 4. JSON-LD parses --------------------------------------------------
const badJson = [];
for (const p of pages) {
  for (const m of p.raw.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(m[1].trim()); } catch { badJson.push(p.url); break; }
  }
}
check('all JSON-LD parses', badJson.slice(0, 20));

// --- 5. Sitemap hygiene -------------------------------------------------
const smPath = join(DIST, 'sitemap-0.xml');
if (existsSync(smPath)) {
  const sm = readFileSync(smPath, 'utf8');
  const blocks = [...sm.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
  const urls = blocks.map((b) => (b.match(/<loc>([\s\S]*?)<\/loc>/) || [])[1]);
  const built = new Set(pages.map((p) => p.url));
  const missing = urls.map((u) => u.replace(BASE, '') || '/').filter((u) => !built.has(u));
  check('every sitemap URL exists in the build', missing.slice(0, 20), `${urls.length} URLs`);

  const noindexInSitemap = blocks
    .filter((b) => /noindex/i.test(b))
    .map((b) => (b.match(/<loc>([\s\S]*?)<\/loc>/) || [])[1]);
  check('sitemap contains no noindex pages', noindexInSitemap.slice(0, 20));

  // lastmod must be real and varied — a single build timestamp for every URL is
  // fake freshness, and Google stops trusting lastmod when it does not reflect edits.
  const lastmods = blocks.map((b) => (b.match(/<lastmod>([\s\S]*?)<\/lastmod>/) || [])[1]).filter(Boolean);
  const coverage = lastmods.length / Math.max(urls.length, 1);
  const distinct = new Set(lastmods.map((d) => d.slice(0, 10)));
  const lmFails = [];
  if (coverage < 0.5) lmFails.push(`lastmod coverage only ${(coverage * 100).toFixed(0)}%`);
  if (lastmods.length && distinct.size < 2) lmFails.push(`all ${lastmods.length} lastmods share one date — fake freshness`);
  check('sitemap lastmod is present and reflects real edit dates', lmFails,
    `${(coverage * 100).toFixed(0)}% coverage, ${distinct.size} distinct dates`);
} else {
  check('sitemap exists', ['sitemap-0.xml not found']);
}

// --- 6. hreflang targets must resolve ----------------------------------
const hreflangBroken = [];
const builtSet = new Set(pages.map((p) => p.url));
for (const p of pages) {
  const head = (p.raw.match(/<head\b[\s\S]*?<\/head>/i) || [p.raw])[0];
  for (const m of head.matchAll(/<link[^>]+rel=["']alternate["'][^>]*>/gi)) {
    const hl = attr(m[0], 'hreflang');
    const href = attr(m[0], 'href');
    if (!hl || !href) continue;
    const target = href.replace(BASE, '') || '/';
    if (!builtSet.has(target)) hreflangBroken.push(`${p.url} [${hl}] → ${target}`);
  }
}
check('every hreflang target exists in the build', hreflangBroken.slice(0, 20),
  `${hreflangBroken.length} broken`);

// --- 7. Internal links resolve -----------------------------------------
const brokenInternal = new Map();
for (const p of pages) {
  const dom = toDom(p.raw);
  for (const m of dom.matchAll(/<a\b[^>]*>/gi)) {
    let href = attr(m[0], 'href');
    if (!href) continue;
    if (href.startsWith('#') || /^(mailto:|tel:|javascript:)/i.test(href)) continue;
    if (href.startsWith('http')) {
      if (!href.startsWith(BASE)) continue;
      href = href.slice(BASE.length);
    }
    if (!href.startsWith('/')) continue;
    const target = href.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
    if (!builtSet.has(target) && !existsSync(join(DIST, target.replace(/^\//, '')))) {
      if (!brokenInternal.has(target)) brokenInternal.set(target, []);
      if (brokenInternal.get(target).length < 3) brokenInternal.get(target).push(p.url);
    }
  }
}
check('no internal links to non-existent pages',
  [...brokenInternal.entries()].slice(0, 25).map(([t, from]) => `${t} ← ${from.join(', ')}`),
  `${brokenInternal.size} distinct broken targets`);

// --- 8. Localized pages must not leak English chrome --------------------
const EN_HEADINGS = new Set(["Who it's for", 'Common questions', 'Free tools',
  'Features & use cases', 'From the blog', 'Prompt Gallery', 'Explore Marqly']);
const leaked = [];
for (const p of pages) {
  const loc = p.url.split('/')[1];
  if (!LOCALES.includes(loc)) continue;
  const hub = p.raw.match(/<section class="linkhub"[\s\S]*?<\/section>/);
  if (!hub) continue;
  for (const m of hub[0].matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/gi)) {
    const txt = m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
    if (EN_HEADINGS.has(txt)) leaked.push(`${p.url} → "${txt}"`);
  }
}
check('localized link hubs emit no English headings', leaked.slice(0, 20));

// --- 9. Every localized page carries a hub ------------------------------
const noHub = pages
  .filter((p) => LOCALES.includes(p.url.split('/')[1]))
  .filter((p) => !p.raw.includes('class="linkhub"'))
  .map((p) => p.url);
check('every localized page renders a link hub', noHub.slice(0, 30), `${noHub.length} missing`);

// --- report -------------------------------------------------------------
let failed = 0;
for (const r of results) {
  const tag = r.ok ? 'PASS' : 'FAIL';
  if (!r.ok) failed++;
  const note = r.note ? ` (${r.note})` : '';
  console.log(`${tag}  ${r.name}${r.ok ? '' : ` — ${r.count} problem(s)`}${note}`);
  if (!r.ok) for (const f of r.failures.slice(0, 12)) console.log(`        ${f}`);
}
console.log(`${'='.repeat(60)}`);
console.log(failed === 0
  ? `ALL ${results.length} SEO GATES PASSED (${pages.length} pages)\n`
  : `${failed}/${results.length} SEO GATES FAILED\n`);
process.exit(failed === 0 ? 0 : 1);
