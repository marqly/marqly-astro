export interface AiTool {
  slug: string;
  name: string;
  url: string;
  description: string;
}

/** AI tools referenced by prompt gallery entries. Keep URLs current and official. */
export const aiTools: AiTool[] = [
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    url: 'https://chat.openai.com',
    description: 'OpenAI\'s conversational AI for writing, coding, analysis, and image generation.',
  },
  {
    slug: 'claude',
    name: 'Claude',
    url: 'https://claude.ai',
    description: 'Anthropic\'s AI assistant with a long context window and strong reasoning.',
  },
  {
    slug: 'gemini',
    name: 'Gemini',
    url: 'https://gemini.google.com',
    description: 'Google\'s multimodal AI, deeply integrated with Search and Workspace.',
  },
  {
    slug: 'perplexity',
    name: 'Perplexity',
    url: 'https://www.perplexity.ai',
    description: 'Answer engine that cites sources while researching and summarizing.',
  },
  {
    slug: 'copilot',
    name: 'Microsoft Copilot',
    url: 'https://copilot.microsoft.com',
    description: 'Microsoft\'s AI companion for work, search, and coding assistance.',
  },
  {
    slug: 'midjourney',
    name: 'Midjourney',
    url: 'https://www.midjourney.com',
    description: 'Generative art tool known for highly stylized and cinematic images.',
  },
  {
    slug: 'dalle',
    name: 'DALL-E',
    url: 'https://openai.com/dall-e-3',
    description: 'OpenAI\'s text-to-image model, available inside ChatGPT.',
  },
  {
    slug: 'stable-diffusion',
    name: 'Stable Diffusion',
    url: 'https://stability.ai',
    description: 'Open-source image generation model with many fine-tuned variants.',
  },
  {
    slug: 'ideogram',
    name: 'Ideogram',
    url: 'https://ideogram.ai',
    description: 'Image generator with strong typography and text-in-image capabilities.',
  },
  {
    slug: 'leonardo',
    name: 'Leonardo.Ai',
    url: 'https://leonardo.ai',
    description: 'Creative image and asset generation platform with custom models.',
  },
  {
    slug: 'bing-image-creator',
    name: 'Bing Image Creator',
    url: 'https://www.bing.com/create',
    description: 'Free DALL-E powered image generation from Microsoft.',
  },
  {
    slug: 'canva',
    name: 'Canva',
    url: 'https://www.canva.com',
    description: 'Design platform with built-in Magic Media and AI image tools.',
  },
  {
    slug: 'firefly',
    name: 'Adobe Firefly',
    url: 'https://www.adobe.com/products/firefly.html',
    description: 'Adobe\'s generative AI for images, text effects, and design workflows.',
  },
];

export const aiToolsBySlug: Record<string, AiTool> = Object.fromEntries(
  aiTools.map((t) => [t.slug, t]),
);
