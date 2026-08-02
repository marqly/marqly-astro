import type { FeatureKey } from './features';

export interface Competitor {
  name: string;
  slug: string;
  aka: string[];
  category: 'bookmark-manager' | 'read-it-later' | 'highlighter' | 'tab-manager' | 'notes' | 'visual';
  status: 'active' | 'shutdown';
  shutdownNote: string | null;
  website: string;
  tagline: string;
  pricing: { free: boolean; paid: string | null; trial: string | null; notes: string };
  platforms: string[];
  features: Record<FeatureKey, boolean>;
  pros: string[];
  cons: string[];
  bestFor: string;
  verdict: string;
  overview: string;
  faqs: { q: string; a: string }[];
  lastVerified: string;
}

const modules = import.meta.glob<Competitor>('../data/competitors/*.json', {
  eager: true,
  import: 'default',
});

/** All competitor entries, EXCLUDING Marqly, sorted by name. */
export const competitors: Competitor[] = Object.values(modules)
  .filter((c) => c.slug !== 'marqly')
  .sort((a, b) => a.name.localeCompare(b.name));

/** Marqly's own entry (rendered as a column in every comparison). */
export const marqly: Competitor = Object.values(modules).find((c) => c.slug === 'marqly')!;

export function getCompetitor(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug || c.aka.includes(slug));
}

/**
 * Competitors prominent enough to warrant third-party X-vs-Y pair pages.
 * Order matters: pair slug is always `<earlier>-vs-<later>` from this list,
 * so URLs are deterministic.
 */
export const PAIR_TIER: string[] = [
  'pocket',
  'raindrop',
  'instapaper',
  'readwise-reader',
  'matter',
  'omnivore',
  'wallabag',
  'linkwarden',
  'karakeep',
  'mymind',
  'evernote-web-clipper',
  'notion-web-clipper',
  'obsidian-web-clipper',
  'onetab',
  'toby',
];

/** All X-vs-Y pair slugs among the pair tier (order-stable, no marqly pairs). */
export function thirdPartyPairs(): { a: string; b: string; slug: string }[] {
  const pairs: { a: string; b: string; slug: string }[] = [];
  for (let i = 0; i < PAIR_TIER.length; i++) {
    for (let j = i + 1; j < PAIR_TIER.length; j++) {
      pairs.push({ a: PAIR_TIER[i], b: PAIR_TIER[j], slug: `${PAIR_TIER[i]}-vs-${PAIR_TIER[j]}` });
    }
  }
  return pairs;
}
