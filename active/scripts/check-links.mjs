// Internal link integrity for the built site: every internal href in dist/
// must resolve to a built page, a public asset, an API route, or a _redirects
// source. Run after `npm run build`: node active/scripts/check-links.mjs
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DIST = path.join(ROOT, 'dist');

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

const redirects = new Set(
  (await readFile(path.join(ROOT, 'public/_redirects'), 'utf8'))
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))
    .map((l) => l.split(/\s+/)[0].replace(/\/$/, '') || '/'),
);

const broken = new Map();
let pages = 0;
let links = 0;

for await (const file of walk(DIST)) {
  pages++;
  const html = await readFile(file, 'utf8');
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = m[1].replace(/\/$/, '') || '/';
    links++;
    if (href.startsWith('/api/')) continue;
    if (href.startsWith('/_astro/')) continue;
    const clean = href === '/' ? '/index' : href;
    const candidates = [
      path.join(DIST, clean + '.html'),
      path.join(DIST, clean, 'index.html'),
      path.join(DIST, href), // static asset (og png, llms.txt, css…)
    ];
    if (candidates.some((c) => existsSync(c))) continue;
    if (redirects.has(href)) continue;
    if (!broken.has(href)) broken.set(href, []);
    if (broken.get(href).length < 3) broken.get(href).push(path.relative(DIST, file));
  }
}

console.log(`pages scanned: ${pages}, internal hrefs: ${links}, broken targets: ${broken.size}`);
for (const [href, sources] of [...broken.entries()].sort()) {
  console.log(`BROKEN ${href}  ← ${sources.join(', ')}`);
}
process.exit(broken.size ? 1 : 0);
