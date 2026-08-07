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
    description: "OpenAI's conversational AI for writing, coding, analysis, and image generation.",
  },
  {
    slug: 'claude',
    name: 'Claude',
    url: 'https://claude.ai',
    description: "Anthropic's AI assistant with a long context window and strong reasoning.",
  },
  {
    slug: 'gemini',
    name: 'Gemini',
    url: 'https://gemini.google.com',
    description: "Google's multimodal AI, deeply integrated with Search and Workspace.",
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
    description: "Microsoft's AI companion for work, search, and coding assistance.",
  },
  {
    slug: 'deepseek',
    name: 'DeepSeek',
    url: 'https://chat.deepseek.com',
    description: 'Chinese LLM strong at reasoning, coding, math, and cost-efficient tasks.',
  },
  {
    slug: 'kimi',
    name: 'Kimi',
    url: 'https://kimi.moonshot.cn',
    description: "Moonshot AI's long-context assistant popular in China for research and coding.",
  },
  {
    slug: 'qwen',
    name: 'Qwen',
    url: 'https://chat.qwen.ai',
    description: "Alibaba's Qwen family of open-weight multilingual LLMs.",
  },
  {
    slug: 'glm',
    name: 'GLM',
    url: 'https://www.z.ai',
    description: "Zhipu's GLM series — bilingual Chinese-English reasoning models.",
  },
  {
    slug: 'doubao',
    name: 'Doubao',
    url: 'https://www.doubao.com',
    description: "ByteDance's AI assistant for chat, creation, and productivity in Chinese.",
  },
  {
    slug: 'hunyuan',
    name: 'Hunyuan',
    url: 'https://hunyuan.tencent.com',
    description: "Tencent's foundation model for text, code, and mixed-modal tasks.",
  },
  {
    slug: 'wenxin',
    name: 'Wenxin Yiyan',
    url: 'https://yiyan.baidu.com',
    description: "Baidu's Chinese LLM and knowledge-enhanced assistant.",
  },
  {
    slug: 'tongyi',
    name: 'Tongyi Qianwen',
    url: 'https://tongyi.aliyun.com',
    description: "Alibaba Cloud's enterprise-grade Chinese AI assistant.",
  },
  {
    slug: 'stepfun',
    name: 'Stepfun',
    url: 'https://www.stepfun.com',
    description: 'Step-series Chinese LLM focused on reasoning and multimodal understanding.',
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
    description: "OpenAI's text-to-image model, available inside ChatGPT.",
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
    description: "Adobe's generative AI for images, text effects, and design workflows.",
  },
  {
    slug: 'copy-ai',
    name: 'Copy.ai',
    url: 'https://www.copy.ai',
    description: 'AI copywriting platform with workflow automation for marketing teams.',
  },
  {
    slug: 'jasper',
    name: 'Jasper',
    url: 'https://www.jasper.ai',
    description: 'AI marketing and content creation suite for brand-focused teams.',
  },
  {
    slug: 'runway',
    name: 'Runway',
    url: 'https://runwayml.com',
    description: 'AI video generation and creative editing toolkit.',
  },
  {
    slug: 'sora',
    name: 'Sora',
    url: 'https://openai.com/sora',
    description: "OpenAI's text-to-video model for cinematic clips.",
  },
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    url: 'https://elevenlabs.io',
    description: 'AI voice synthesis and text-to-speech platform.',
  },
  {
    slug: 'suno',
    name: 'Suno',
    url: 'https://suno.ai',
    description: 'AI music and song generation from text prompts.',
  },
];

export const aiToolsBySlug: Record<string, AiTool> = Object.fromEntries(
  aiTools.map((t) => [t.slug, t]),
);
