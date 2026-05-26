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

export const collections = { blog };
