import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const DIR = join(process.cwd(), 'src/content/prompts');
const files = (await readdir(DIR)).filter((f) => /\.mdx?$/.test(f));

let changed = 0;
for (const file of files) {
  const path = join(DIR, file);
  let text = await readFile(path, 'utf8');
  const original = text;

  // Remove frontmatter fields related to images
  text = text.replace(/^referenceImage: "[^"]*"\n/gm, '');
  text = text.replace(/^imageAlt: "[^"]*"\n/gm, '');
  text = text.replace(/^imageCredit: "[^"]*"\n/gm, '');

  // Remove image credit body section
  text = text.replace(/\n## Image credit\n[\s\S]*?(?=\n## |\n---\n|$)/, '\n');

  if (text !== original) {
    await writeFile(path, text, 'utf8');
    changed++;
  }
}

console.log(`Stripped image fields from ${changed} prompt files.`);
