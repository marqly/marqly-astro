import { writeFile, mkdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');
const OUT_DIR = join(ROOT, 'src/content/prompts');

const CATEGORY_TOOLS = {
  'Image & Photo': ['midjourney', 'dalle', 'stable-diffusion', 'leonardo', 'ideogram', 'bing-image-creator', 'canva', 'firefly'],
  'Writing & Content': ['chatgpt', 'claude', 'gemini', 'deepseek', 'kimi', 'qwen', 'copy-ai', 'jasper'],
  'SEO & Marketing': ['chatgpt', 'claude', 'gemini', 'perplexity', 'deepseek', 'kimi', 'copy-ai', 'jasper'],
  'Research & Learning': ['chatgpt', 'claude', 'gemini', 'perplexity', 'deepseek', 'kimi', 'qwen', 'glm'],
  'Work & Productivity': ['chatgpt', 'claude', 'gemini', 'copilot', 'deepseek', 'kimi', 'tongyi', 'doubao'],
  'Coding & Development': ['chatgpt', 'claude', 'gemini', 'copilot', 'deepseek', 'kimi', 'qwen', 'glm'],
  'Social Media': ['chatgpt', 'claude', 'gemini', 'copy-ai', 'jasper', 'deepseek', 'kimi'],
  'Personal & Creative': ['chatgpt', 'claude', 'gemini', 'deepseek', 'kimi'],
  'Analysis & Data': ['chatgpt', 'claude', 'gemini', 'perplexity', 'copilot', 'deepseek', 'kimi'],
  'Prompt Engineering': ['chatgpt', 'claude', 'gemini', 'deepseek', 'kimi', 'qwen', 'glm'],
};

const CATEGORY_TAGS = {
  'Image & Photo': ['ai image prompt', 'image generation', 'midjourney', 'dalle'],
  'Writing & Content': ['writing prompt', 'copywriting', 'content creation'],
  'SEO & Marketing': ['seo prompt', 'marketing prompt', 'content strategy'],
  'Research & Learning': ['research prompt', 'study prompt', 'learning'],
  'Work & Productivity': ['productivity prompt', 'work prompt', 'planning'],
  'Coding & Development': ['coding prompt', 'developer prompt', 'programming'],
  'Social Media': ['social media prompt', 'instagram', 'linkedin', 'tiktok'],
  'Personal & Creative': ['creative prompt', 'personal prompt', 'brainstorming'],
  'Analysis & Data': ['data analysis prompt', 'analytics', 'decision making'],
  'Prompt Engineering': ['prompt engineering', 'prompt design', 'llm technique'],
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function today() {
  return new Date().toISOString().split('T')[0];
}

function escapeYaml(text) {
  return text.replace(/"/g, '\\"');
}

function generatePromptText(item) {
  const { title, category } = item;
  if (item.prompt) return item.prompt;
  const name = title.replace(/prompt$/i, '').trim();
  const placeholders = {
    'Image & Photo': `A highly detailed [SUBJECT] in [STYLE] style, [MOOD] lighting, [COLOR] color palette, [COMPOSITION], 8k, ultra-sharp, professional [MEDIUM] --ar [ASPECT]`,
    'Writing & Content': `You are an expert [ROLE]. Write a [FORMAT] about [TOPIC] for [AUDIENCE]. Goal: [GOAL]. Tone: [TONE]. Length: [LENGTH]. Include: [KEY POINTS]. Start with a compelling hook and end with a clear call to action.`,
    'SEO & Marketing': `Act as a senior [ROLE] for [INDUSTRY]. Analyze [TOPIC/COMPETITOR] and create a [DELIVERABLE] that targets [AUDIENCE] and primary keyword "[KEYWORD]". Include actionable steps, examples, and metrics to track.`,
    'Research & Learning': `You are a [EXPERT ROLE]. Explain [TOPIC/CONCEPT] to a [AUDIENCE LEVEL] audience. Compare it with [ALTERNATIVE], list key takeaways, and provide 3 practical applications or study questions.`,
    'Work & Productivity': `Act as a [ROLE] coach. Help me [TASK] for [CONTEXT]. Constraints: [CONSTRAINTS]. Output format: [FORMAT]. Include deadlines, priorities, and a quick-start first step.`,
    'Coding & Development': `You are a senior [LANGUAGE/STACK] developer. [TASK: e.g., Write a function that...]. Requirements: [REQUIREMENTS]. Include error handling, comments, unit tests, and a short explanation of the approach.`,
    'Social Media': `You are a social media strategist for [PLATFORM]. Create a [FORMAT] about [TOPIC] for [AUDIENCE]. Hook: [HOOK ANGLE]. Tone: [TONE]. Include hashtags and a CTA.`,
    'Personal & Creative': `You are a creative coach. Help me [TASK] about [TOPIC/IDEA]. Style: [STYLE]. Constraints: [CONSTRAINTS]. Output should feel [VIBE] and include a surprising twist or fresh angle.`,
    'Analysis & Data': `You are a data analyst. Given [DATASET/DESCRIPTION], perform [ANALYSIS TYPE]. Show your reasoning, identify 3 key insights, visualize results as [CHART TYPE], and recommend next actions.`,
    'Prompt Engineering': `You are a prompt-engineering expert. I need a prompt that [GOAL]. Design it using [TECHNIQUE: e.g., chain-of-thought / few-shot / ReAct]. Include the system context, instructions, examples, and output format.`,
  };
  return `Act as a specialized AI assistant. ${placeholders[category] || placeholders['Writing & Content']}`;
}

function generateDescription(item) {
  if (item.description) return item.description;
  const tools = item.tools.slice(0, 4).map((t) => {
    const map = {
      chatgpt: 'ChatGPT', claude: 'Claude', gemini: 'Gemini', deepseek: 'DeepSeek', kimi: 'Kimi',
      midjourney: 'Midjourney', dalle: 'DALL-E', 'stable-diffusion': 'Stable Diffusion',
    };
    return map[t] || t;
  });
  const base = `Copy-paste this ${item.category.toLowerCase()} prompt to generate ${item.title.replace(/prompt$/i, '').trim().toLowerCase()}. Works with ${tools.join(', ')} and more.`;
  return base.length <= 160 ? base : base.slice(0, 157) + '...';
}

function generateFaqs(item) {
  if (item.faqs) return item.faqs;
  return [
    { q: `Which AI tools work with this ${item.category.toLowerCase()} prompt?`, a: `This prompt works in ChatGPT, Claude, Gemini, DeepSeek, Kimi${item.tools.includes('midjourney') ? ', Midjourney, DALL-E' : ''} and other compatible AI assistants. Just replace the bracketed placeholders before pasting.` },
    { q: 'How do I customize this prompt for my project?', a: 'Replace every placeholder like [TOPIC], [AUDIENCE], or [TONE] with your own details. The more specific your inputs, the more useful the AI output will be.' },
  ];
}

function generateBody(item) {
  const lines = [];
  lines.push('## How to use this prompt');
  lines.push('1. Copy the full prompt above.');
  lines.push('2. Open your preferred AI tool (ChatGPT, Claude, Gemini, DeepSeek, Kimi, etc.).');
  lines.push('3. Replace every bracketed placeholder such as [TOPIC], [AUDIENCE], or [TONE] with your own details.');
  lines.push('4. Paste the customized prompt and run it.');
  lines.push('5. Iterate on the output by adding constraints or examples.');
  lines.push('');
  lines.push('## Why this prompt works');
  const reasons = {
    'Image & Photo': 'It separates subject, style, lighting, color, and composition so image-generation models can render consistent, controllable results.',
    'Writing & Content': 'It defines role, audience, goal, tone, and structure up front, which reduces generic output and keeps the copy aligned with your intent.',
    'SEO & Marketing': 'It grounds the AI in a target audience, keyword, and deliverable, making the output actionable and search-intent driven.',
    'Research & Learning': 'It asks for comparison, takeaways, and applications, which forces the model to explain rather than just summarize.',
    'Work & Productivity': 'It adds constraints and a first step, turning a vague request into a concrete plan you can execute immediately.',
    'Coding & Development': 'It requires tests, comments, and explanations alongside the code, so the result is production-ready and maintainable.',
    'Social Media': 'It pairs a hook angle with platform-specific format and CTA, helping the content feel native and engaging.',
    'Personal & Creative': 'It combines constraints with a desired vibe, giving the model enough structure to spark original ideas without being rigid.',
    'Analysis & Data': 'It asks for reasoning, insights, visualization, and recommendations, turning raw data into a decision-ready narrative.',
    'Prompt Engineering': 'It builds in technique, context, examples, and output format, making the resulting prompt reusable and reliable.',
  };
  lines.push(reasons[item.category] || reasons['Writing & Content']);
  return lines.join('\n');
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

export async function generatePrompts(items, { force = false, verbose = true } = {}) {
  await mkdir(OUT_DIR, { recursive: true });
  let created = 0;
  let skipped = 0;
  for (const item of items) {
    const slug = item.slug || slugify(item.title);
    const file = join(OUT_DIR, `${slug}.mdx`);
    if (!force && (await exists(file))) {
      skipped++;
      continue;
    }
    const category = item.category;
    const tools = item.tools || CATEGORY_TOOLS[category] || [];
    const tags = item.tags || CATEGORY_TAGS[category] || [];
    const targetKeyword = item.targetKeyword || item.title.toLowerCase();
    const description = generateDescription({ ...item, tools });
    const promptText = generatePromptText({ ...item, category });
    const faqs = generateFaqs({ ...item, tools });

    const frontmatter = `---
title: "${escapeYaml(item.title)}"
description: "${escapeYaml(description)}"
category: "${category}"
tags: [${tags.map((t) => `"${t}"`).join(', ')}]
tools: [${tools.map((t) => `"${t}"`).join(', ')}]
targetKeyword: "${escapeYaml(targetKeyword)}"
prompt: |
${promptText.split('\n').map((l) => '  ' + l).join('\n')}
previewLength: 180
faqs:
${faqs.map((f) => `  - q: "${escapeYaml(f.q)}"\n    a: "${escapeYaml(f.a)}"`).join('\n')}
updatedDate: ${item.updatedDate || today()}
draft: false
---

${generateBody({ ...item, category })}
`;
    await writeFile(file, frontmatter, 'utf8');
    created++;
    if (verbose) console.log(`✓ ${slug}`);
  }
  console.log(`Created ${created}, skipped ${skipped}`);
}

// Allow running directly with a data file: node active/scripts/generate-prompts.mjs ./active/data/prompts-new.mjs
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dataPath = process.argv[2];
  if (!dataPath) {
    console.error('Usage: node active/scripts/generate-prompts.mjs <path-to-data.mjs>');
    process.exit(1);
  }
  const { prompts } = await import(new URL(dataPath, `file://${ROOT}/`).href);
  await generatePrompts(prompts);
}
