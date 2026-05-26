// Generate brand-consistent hero images for each blog post via OpenAI gpt-image-1.
// Reads the API key from the marqly api .env.local by file path (never logged).
// Output: src/assets/blog/<slug>.png  (skips ones that already exist).
//
// Run: node active/scripts/gen-hero-images.mjs
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const CONTENT_DIR = path.join(ROOT, 'src/content/blog');
const OUT_DIR = path.join(ROOT, 'src/assets/blog');
const ENV_PATH = '/Users/megamoon/DEV/marqly_2026_dev/apps/api/.env.local';

async function getKey() {
  const env = await readFile(ENV_PATH, 'utf8');
  const m = env.match(/^OPENAI_API_KEY=(.+)$/m);
  if (!m) throw new Error('OPENAI_API_KEY not found in env file');
  return m[1].trim().replace(/^["']|["']$/g, '');
}

function parseFrontmatter(src) {
  const fm = src.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) return {};
  const out = {};
  for (const line of fm[1].split('\n')) {
    const mm = line.match(/^(\w+):\s*(.*)$/);
    if (mm) out[mm[1]] = mm[2].replace(/^["']|["']$/g, '');
  }
  return out;
}

const STYLE =
  'Modern, clean, minimal flat vector illustration with soft gradients in blue (#007AFF) and violet (#A38AFB) on a light off-white background. Professional SaaS marketing editorial style, lots of negative space, soft shadows, rounded shapes. Absolutely no text, no words, no letters, no numbers anywhere in the image.';

async function generate(key, prompt) {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt,
      size: '1536x1024',
      quality: 'medium',
      n: 1,
    }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
  return Buffer.from(json.data[0].b64_json, 'base64');
}

const key = await getKey();
await mkdir(OUT_DIR, { recursive: true });
const files = (await readdir(CONTENT_DIR)).filter((f) => /\.(md|mdx)$/.test(f));

let done = 0,
  skipped = 0,
  failed = 0;
for (const file of files) {
  const slug = file.replace(/\.(md|mdx)$/, '');
  const outPath = path.join(OUT_DIR, `${slug}.png`);
  if (existsSync(outPath)) {
    skipped++;
    continue;
  }
  const data = parseFrontmatter(await readFile(path.join(CONTENT_DIR, file), 'utf8'));
  const subject = data.title || slug.replace(/-/g, ' ');
  const prompt = `Editorial blog hero illustration representing the concept of "${subject}" (about organizing, saving, and AI-searching bookmarks and articles). ${STYLE}`;
  try {
    process.stdout.write(`→ ${slug} ... `);
    const buf = await generate(key, prompt);
    await writeFile(outPath, buf);
    console.log('ok');
    done++;
  } catch (e) {
    console.log(`FAILED: ${e.message}`);
    failed++;
  }
}
console.log(`\nHero images — generated: ${done}, skipped(existing): ${skipped}, failed: ${failed}`);
