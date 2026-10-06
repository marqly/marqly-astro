// check-redirects.mjs — verify permanent-redirect hygiene on the live edge (Phase 0 §4.0.5).
// node seo/scripts/check-redirects.mjs
const CASES = [
  { url: 'https://marqly.com/', expect: 'https://www.marqly.com/', why: 'apex→www (Cloudflare Redirect Rule)' },
  { url: 'https://marqly.com/tools/reading-time?utm_source=test', expect: 'https://www.marqly.com/tools/reading-time?utm_source=test', why: 'apex→www PRESERVES query string' },
  { url: 'https://www.marqly.com/tools/reading-time/', expect: 'https://www.marqly.com/tools/reading-time', why: 'trailing-slash catch-all must be 301, not 307' },
  { url: 'https://www.marqly.com/blog/how-to-organize-bookmarks/', expect: 'https://www.marqly.com/blog/how-to-organize-bookmarks', why: 'trailing slash on a blog URL' },
  { url: 'https://www.marqly.com/Pricing', expect: 'https://www.marqly.com/pricing', why: 'Framer uppercase alias' },
  { url: 'https://www.marqly.com/Pricing/', expect: 'https://www.marqly.com/pricing', why: 'uppercase + slash combo must not chain' },
  { url: 'https://www.marqly.com/Extension', expect: 'https://www.marqly.com/extension', why: 'legacy capital URL (backlink target)' },
  { url: 'https://www.marqly.com/T%26C', expect: 'https://www.marqly.com/terms', why: 'ampersand legal URL' },
  { url: 'https://www.marqly.com/about', expect: 'https://www.marqly.com/', why: 'current behavior — REPONT to /about in Phase 1.6' },
  { url: 'https://www.marqly.com/vs/raindrop', expect: 'https://www.marqly.com/compare/marqly-vs-raindrop', why: 'legacy vs-stub consolidation' },
  { url: 'https://www.marqly.com/sitemap.xml', expect: 'https://www.marqly.com/sitemap-index.xml', why: 'sitemap alias' },
  { url: 'https://www.marqly.com/nonexistent-page-xyz', expect: null, why: '404 should be 404 (not soft-redirect to home)' },
];
const PERM = new Set([301, 308]);

async function head(url) {
  const res = await fetch(url, { redirect: 'manual', headers: { 'user-agent': 'Mozilla/5.0 seo-check/1.0' } });
  return { status: res.status, location: res.headers.get('location'), cf: res.headers.get('cf-cache-status') };
}

let fails = 0;
for (const c of CASES) {
  const r = await head(c.url);
  const loc = r.location && c.url.startsWith('https://www') ? r.location : r.location; // absolute compare
  let verdict = 'INFO';
  if (c.expect) {
    const got = r.location ? new URL(r.location, c.url).href : null;
    const want = new URL(c.expect, 'https://www.marqly.com/').href;
    if (!PERM.has(r.status)) verdict = `FAIL status=${r.status} (expected 301/308)`;
    else if (got !== want) verdict = `FAIL target ${got} != ${want}`;
    else if (c.url === 'https://www.marqly.com/about') verdict = 'PASS (temp)';
    else verdict = 'PASS';
  } else {
    verdict = r.status === 404 ? 'PASS' : `FAIL expected 404, got ${r.status}`;
  }
  if (verdict.startsWith('FAIL') || verdict === 'INFO') fails++;
  console.log(`${verdict.padEnd(12)} ${r.status} ${c.url}\n${''.padEnd(13)}  -> ${r.location ?? '(none)'}  [${c.why}]${c.url === 'https://www.marqly.com/about' ? '  ← known: /about must be BUILT + repointed Phase 1.6' : ''}`);
}

// chain depth for apex combos
for (const u of ['https://marqly.com/Pricing', 'https://marqly.com/tools/reading-time/']) {
  let cur = u, hops = 0;
  const seen = [];
  while (hops < 6) {
    const r = await head(cur);
    seen.push(`${r.status}→${cur}`);
    if (!r.location) break;
    cur = new URL(r.location, cur).href;
    hops++;
    if (cur === u) { seen.push('LOOP'); break; }
  }
  console.log(`chain(${hops}): ${u}\n  ${seen.join(' → ')}`);
  if (hops > 2) { console.log('  FAIL: redirect chain >2 hops'); fails++; }
}
process.exit(fails ? 1 : 0);
