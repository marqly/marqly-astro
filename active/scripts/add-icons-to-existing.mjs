import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIR = join(process.cwd(), 'src/content/prompts');

const ICONS = {
  'Image & Photo': '/prompts/icons/image-photo.svg',
  'Writing & Content': '/prompts/icons/writing-content.svg',
  'SEO & Marketing': '/prompts/icons/seo-marketing.svg',
  'Research & Learning': '/prompts/icons/research-learning.svg',
  'Work & Productivity': '/prompts/icons/work-productivity.svg',
  'Coding & Development': '/prompts/icons/coding-development.svg',
  'Social Media': '/prompts/icons/social-media.svg',
  'Personal & Creative': '/prompts/icons/personal-creative.svg',
  'Analysis & Data': '/prompts/icons/analysis-data.svg',
  'Prompt Engineering': '/prompts/icons/prompt-engineering.svg',
};

function getCategory(text) {
  const m = text.match(/^category:\s*"([^"]+)"/m);
  return m ? m[1] : null;
}

function getTitle(text) {
  const m = text.match(/^title:\s*"([^"]+)"/m);
  return m ? m[1] : 'this prompt';
}

async function main() {
  const files = await readdir(DIR);
  let updated = 0;
  for (const f of files) {
    if (!f.endsWith('.mdx')) continue;
    const path = join(DIR, f);
    const content = await readFile(path, 'utf8');
    if (content.includes('referenceImage:')) continue;
    const category = getCategory(content);
    if (!category || !ICONS[category]) continue;
    const title = getTitle(content);
    const insert = `referenceImage: "${ICONS[category]}"
imageAlt: "Illustration for ${title}"
`;
    const newContent = content.replace(/^(previewLength:.*\n)/m, `$1${insert}`);
    await writeFile(path, newContent, 'utf8');
    updated++;
  }
  console.log(`Updated ${updated} existing prompts with category icons.`);
}

main();
