// Adds heroImage / heroAlt / ogImage frontmatter to each blog post (idempotent).
// Run: node active/scripts/add-image-frontmatter.mjs
import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DIR = path.join(ROOT, 'src/content/blog');

const files = (await readdir(DIR)).filter((f) => /\.(md|mdx)$/.test(f));
let patched = 0;
for (const file of files) {
  const slug = file.replace(/\.(md|mdx)$/, '');
  const full = path.join(DIR, file);
  let src = await readFile(full, 'utf8');
  const m = src.match(/^---\n([\s\S]*?)\n---/);
  if (!m) continue;
  let fm = m[1];
  if (/^heroImage:/m.test(fm)) continue; // already patched

  const titleMatch = fm.match(/^title:\s*(.*)$/m);
  const title = titleMatch ? titleMatch[1].trim().replace(/^["']|["']$/g, '') : slug;
  const alt = JSON.stringify(`${title} — illustration`);

  const additions =
    `heroImage: ../../assets/blog/${slug}.png\n` +
    `heroAlt: ${alt}\n` +
    `ogImage: "https://www.marqly.com/og/${slug}.png"`;

  const newFm = `${fm}\n${additions}`;
  src = src.replace(m[0], `---\n${newFm}\n---`);
  await writeFile(full, src);
  patched++;
}
console.log(`Frontmatter patched: ${patched} / ${files.length}`);
