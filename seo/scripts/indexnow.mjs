// indexnow.mjs — ping the IndexNow protocol for participating search engines with
// the URLs we just changed. IndexNow key comes from ENV only; never hardcode it.
// Usage:  INDEXNOW_KEY=xxxx node seo/scripts/indexnow.mjs [--sitemap=dist/client/sitemap-0.xml] [--limit=10000] [--engine=indexnow|bing] [--dry]
// Wire into deploy AFTER the CDN has the new build: `npm run deploy && node seo/scripts/indexnow.mjs`.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const args = process.argv.slice(2);
const opt = (n, d) => { const m = args.find((a) => a.startsWith(`--${n}=`)); return m ? m.split('=')[1] : d; };
const KEY = process.env.INDEXNOW_KEY;
const engine = opt('engine', 'indexnow');
const ENDPOINTS = { indexnow: 'https://api.indexnow.org/indexnow', bing: 'https://www.bing.com/indexnow' };
if (!ENDPOINTS[engine]) { console.error('engine must be indexnow or bing'); process.exit(2); }
if (!KEY) { console.error('INDEXNOW_KEY env not set — put your Bing/IndexNow key there (never in the repo).'); process.exit(2); }
if (!/^[a-f0-9]{32}$/i.test(KEY)) { console.error('INDEXNOW_KEY must be a 32-hex-char key.'); process.exit(2); }

const smFile = path.join(ROOT, opt('sitemap', 'dist/client/sitemap-0.xml'));
if (!fs.existsSync(smFile)) { console.error(`sitemap not found: ${smFile}`); process.exit(2); }
const urls = [...fs.readFileSync(smFile, 'utf8').matchAll(/<loc>(https:\/\/www\.marqly\.com[^<]*)<\/loc>/g)].map((m) => m[1]);
const list = urls.slice(0, Number(opt('limit', 10000)));
console.log(`IndexNow: ${list.length} URLs, engine ${engine}, key ${KEY.slice(0, 4)}…, dry=${args.includes('--dry')}`);
if (args.includes('--dry')) process.exit(0);

const res = await fetch(ENDPOINTS[engine], {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: 'www.marqly.com', key: KEY, keyLocation: `https://www.marqly.com/${KEY}.txt`, urlList: list }),
});
console.log(`IndexNow response: HTTP ${res.status} ${res.statusText}`);
if (!res.ok) { console.error('  (also ensure /' + KEY + '.txt is served at the site root, or use the query-param key mode)'); process.exit(1); }
console.log(`OK — submitted ${list.length} URLs.`);
