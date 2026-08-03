import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  return rss({
    title: 'Marqly Blog',
    description:
      'Guides, honest tool reviews, and comparisons about bookmarking, read-it-later workflows, web highlighting, and finding what you saved.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.updatedDate ?? p.data.pubDate,
      link: `/blog/${p.id}`,
      categories: [p.data.category, ...p.data.tags],
    })),
    customData: '<language>en-us</language>',
  });
}
