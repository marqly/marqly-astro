import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog content collection (Astro 5 Content Layer).
 * Posts are authored as Markdown/MDX in src/content/blog/.
 * AEO note: `faqs` render as a visible FAQ section AND emit FAQPage JSON-LD,
 * keeping structured data identical to on-page content (Google's requirement).
 */
const blog = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      /** Optional <title> override for SEO; falls back to `title`. */
      seoTitle: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.string().default('Guides'),
      tags: z.array(z.string()).default([]),
      targetKeyword: z.string().optional(),
      /** Hero image imported from src/assets (optimized by Astro). */
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      /** Absolute URL of the social/OG card image. */
      ogImage: z.string().optional(),
      ctaUrl: z.string().url().default('https://app.marqly.com'),
      ctaLabel: z.string().default('Try Marqly free'),
      /** Answer-first Q&A → visible FAQ + FAQPage schema (high AI-citation value). */
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      draft: z.boolean().default(false),
      lang: z.string().default('en'),
    }),
});

/**
 * FAQ engine — every entry becomes a standalone indexable /faq/<slug> page
 * with QAPage JSON-LD (the PhotoAI pattern: FAQs as pages, not just accordions).
 */
const faq = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    /** 150–160 char meta description; also the short answer shown on index cards. */
    description: z.string(),
    category: z.enum(['pricing', 'trust', 'getting-started', 'features', 'basics', 'company']),
    updatedDate: z.coerce.date(),
    /** Slugs of related FAQ entries (rendered as "Related questions"). */
    related: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * Use-case landers — rendered at root level (/for-students, /web-highlighter…),
 * one unique page per persona / job-to-be-done / platform.
 */
const usecases = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/usecases' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    kind: z.enum(['persona', 'jtbd', 'platform']),
    targetKeyword: z.string(),
    /** Short label used in the LinkHub column (defaults to title). */
    navLabel: z.string().optional(),
    hero: z.object({ heading: z.string(), subheading: z.string() }),
    updatedDate: z.coerce.date(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    ctaUrl: z.string().url().default('https://app.marqly.com'),
    ctaLabel: z.string().default('Try Marqly free'),
    draft: z.boolean().default(false),
  }),
});

/**
 * Third-party pair verdicts — unique editorial prose for /compare/x-vs-y pages.
 * Filename must be `<a>-vs-<b>.md` matching competitor slugs; body = the
 * "which should you choose" analysis (markdown).
 */
const verdicts = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/verdicts' }),
  schema: z.object({
    a: z.string(),
    b: z.string(),
    /** One-two sentence answer-first verdict (featured-snippet bait). */
    verdict: z.string(),
    updatedDate: z.coerce.date(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, faq, usecases, verdicts };
