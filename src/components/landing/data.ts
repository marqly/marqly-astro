/**
 * Demo data for the product reconstructions.
 *
 * Every bookmark with a cover is a REAL page: real URL, real og:title, and
 * its real og:image downloaded to /public/landing/covers (see
 * active/tmp/og_harvest.mjs). Favicons are the real ones, stored locally.
 * Descriptions are short neutral summaries of the real content.
 *
 * The "protagonist" bookmark is the page's through-line: Bon Appétit's
 * Cacio e Pepe recipe gets saved in the hero and found again in the search
 * section from a keyword-free query.
 */

export type ContentKind = 'article' | 'paper' | 'repo' | 'video' | 'conversation';

export interface DemoBookmark {
  id: string;
  title: string;
  domain: string;
  description: string;
  tags: string[];
  date: string;
  kind: ContentKind;
  provider?: 'chatgpt' | 'claude' | 'gemini';
  cover?: string;
  duration?: string;
}

/** Real favicons downloaded locally (Google s2, same source the app uses). */
export const FAVICONS: Record<string, string> = {
  'bonappetit.com': '/landing/favicons/bonappetit.com.png',
  'arxiv.org': '/landing/favicons/arxiv.org.png',
  'github.com': '/landing/favicons/github.com.png',
  'chatgpt.com': '/landing/favicons/chatgpt.com.png',
  'overreacted.io': '/landing/favicons/overreacted.io.png',
  'youtube.com': '/landing/favicons/youtube.com.png',
  'fs.blog': '/landing/favicons/fs.blog.png',
  'web.dev': '/landing/favicons/web.dev.png',
  'paulgraham.com': '/landing/favicons/paulgraham.com.png',
  'claude.ai': '/landing/favicons/claude.ai.png',
  'gemini.google.com': '/landing/favicons/gemini.google.com.png',
  'figma.com': '/landing/favicons/figma.com.png',
  'stripe.com': '/landing/favicons/stripe.com.png',
};

export const protagonist: DemoBookmark = {
  id: 'cacio',
  title: 'Cacio e Pepe',
  domain: 'bonappetit.com',
  description:
    'Four ingredients and one glossy, emulsified pecorino sauce. The classic Roman technique, without the clumps.',
  tags: ['pasta', 'technique', 'food-science'],
  date: '12 May',
  kind: 'article',
  cover: '/landing/covers/cacio-ba.jpg',
};

export const carbonara: DemoBookmark = {
  id: 'carbonara',
  title: 'Simple Spaghetti Carbonara',
  domain: 'bonappetit.com',
  description:
    'Eggs, guanciale, and starchy pasta water. Silky, never scrambled, in about half an hour.',
  tags: ['pasta', 'eggs'],
  date: '2 Feb',
  kind: 'article',
  cover: '/landing/covers/carbonara-ba.jpg',
};

export const risotto: DemoBookmark = {
  id: 'risotto',
  title: "BA's Best Risotto",
  domain: 'bonappetit.com',
  description:
    'Toasted rice, hot stock in stages, constant stirring. Creamy without a drop of cream.',
  tags: ['rice', 'technique'],
  date: '19 Jan',
  kind: 'article',
  cover: '/landing/covers/risotto-ba.jpg',
};

/** The hero's Cooking board: protagonist + two real neighbors. */
export const cookingNeighbors: DemoBookmark[] = [carbonara, risotto];

/** The library grid: real pages a researcher-reader would plausibly keep. */
export const libraryBookmarks: DemoBookmark[] = [
  protagonist,
  {
    id: 'attention',
    title: 'Attention Is All You Need',
    domain: 'arxiv.org',
    description:
      'The transformer paper. Self-attention replaces recurrence entirely; everything since is a footnote to figure 1.',
    tags: ['transformers', 'foundational'],
    date: '28 Jul',
    kind: 'paper',
    cover: '/landing/covers/attention.jpg',
  },
  {
    id: 'shadcn',
    title: 'shadcn-ui/ui',
    domain: 'github.com',
    description:
      'Beautifully-designed, accessible components you copy into your own codebase instead of installing.',
    tags: ['react', 'components'],
    date: '2 Aug',
    kind: 'repo',
    cover: '/landing/covers/shadcn.jpg',
  },
  {
    id: 'pgvector-chat',
    title: 'pgvector vs Pinecone for a weekend project',
    domain: 'chatgpt.com',
    description:
      'Costs, latency, and when a managed vector DB is overkill. Verdict: pgvector until you pass ~5M embeddings.',
    tags: ['embeddings', 'postgres'],
    date: '5 Aug',
    kind: 'conversation',
    provider: 'chatgpt',
  },
  {
    id: 'useeffect',
    title: 'A Complete Guide to useEffect',
    domain: 'overreacted.io',
    description:
      'Effects run after render. Dependencies, stale closures, and why the exhaustive-deps linter is right.',
    tags: ['react', 'hooks'],
    date: '30 Jul',
    kind: 'article',
    cover: '/landing/covers/useeffect.jpg',
  },
  {
    id: 'neural',
    title: 'But what is a neural network?',
    domain: 'youtube.com',
    description:
      "3Blue1Brown's visual introduction: neurons, layers, weights, and what the network actually learns.",
    tags: ['neural-nets', 'math'],
    date: '22 Jul',
    kind: 'video',
    cover: '/landing/covers/neural.jpg',
    duration: '18:40',
  },
  {
    id: 'great-work',
    title: 'How to Do Great Work',
    domain: 'paulgraham.com',
    description:
      'Pick something you have a natural aptitude for and a deep curiosity about. Then work on it hard, for a long time.',
    tags: ['essays', 'career'],
    date: '9 Apr',
    kind: 'article',
  },
  {
    id: 'fsblog',
    title: 'How to Remember What You Read',
    domain: 'fs.blog',
    description:
      'Active reading over passive skimming: notes, mental links, and choosing books worth absorbing.',
    tags: ['reading', 'memory'],
    date: '3 Jun',
    kind: 'article',
    cover: '/landing/covers/fsblog.jpg',
  },
  {
    id: 'webvitals',
    title: 'Web Vitals',
    domain: 'web.dev',
    description:
      'Google’s user-centric performance metrics for load, interactivity, and visual stability.',
    tags: ['performance', 'metrics'],
    date: '17 Jun',
    kind: 'article',
    cover: '/landing/covers/webvitals.jpg',
  },
];

/** Sidebar: fixed filters + user boards with the app's real 2D board icons. */
export const fixedFilters = [
  { name: 'All bookmarks', count: 1412, icon: 'bookmark' as const },
  { name: 'Articles', count: 486, icon: 'article' as const },
  { name: 'Highlights', count: 203, icon: 'highlighter' as const },
  { name: 'AI Chats', count: 37, icon: 'message' as const, pro: true },
  { name: 'Videos', count: 129, icon: 'play' as const },
];

export const userBoards = [
  { name: 'Cooking', count: 89, depth: 0, icon: '/landing/icons/boards/food_bowl.png' },
  { name: 'Design systems', count: 134, depth: 0, icon: '/landing/icons/boards/color_palette.png' },
  { name: 'Type & color', count: 41, depth: 1, icon: '/landing/icons/boards/paintbrush.png' },
  { name: 'Reading list', count: 312, depth: 0, icon: '/landing/icons/boards/open_book.png' },
  { name: 'Side projects', count: 57, depth: 0, icon: '/landing/icons/boards/rocket.png' },
];

export const tagCarousel = [
  'all',
  'pasta',
  'react',
  'transformers',
  'reading',
  'design-systems',
  'food-science',
  'essays',
  'performance',
  'memory',
];

/** The search demo: a query that shares no keywords with the title it finds. */
export const searchQuery = 'that pasta article about emulsions';

export const searchResults = [
  {
    bookmark: protagonist,
    context:
      '…the starchy water binds cheese and fat into a stable emulsion; too much heat and it seizes…',
    top: true,
  },
  { bookmark: carbonara, context: null, top: false },
  { bookmark: risotto, context: null, top: false },
];

/** AI Organizer proposal (S5) — real board icons + colored sub-board chips. */
export const organizerProposal = [
  {
    name: 'Machine learning',
    count: 214,
    icon: '/landing/icons/boards/brain.png',
    chips: ['Papers', 'Tooling'],
  },
  {
    name: 'Product & pricing',
    count: 96,
    icon: '/landing/icons/boards/bar_chart.png',
    chips: ['SaaS teardowns'],
  },
  { name: 'Cooking', count: 89, icon: '/landing/icons/boards/food_bowl.png', chips: [] },
  {
    name: 'Design',
    count: 175,
    icon: '/landing/icons/boards/color_palette.png',
    chips: ['Type & color', 'Tokens'],
  },
  { name: 'Long reads', count: 168, icon: '/landing/icons/boards/open_book.png', chips: [] },
];

/** ChatVault cards (S6). */
export const conversationCards: DemoBookmark[] = [
  libraryBookmarks[3]!,
  {
    id: 'claude-migration',
    title: 'Plan a zero-downtime Postgres 15 → 17 migration',
    domain: 'claude.ai',
    description:
      'Logical replication, dual-write window, and the rollback tripwires to set before cutover.',
    tags: ['postgres', 'ops'],
    date: '29 Jul',
    kind: 'conversation',
    provider: 'claude',
  },
  {
    id: 'gemini-trip',
    title: 'Two weeks in Japan with a 4-year-old',
    domain: 'gemini.google.com',
    description:
      'Slower itinerary, konbini strategy, and which shinkansen cars have the stroller space.',
    tags: ['travel'],
    date: '14 Jun',
    kind: 'conversation',
    provider: 'gemini',
  },
];

export const newtabLinks = ['github.com', 'figma.com', 'arxiv.org', 'stripe.com', 'bonappetit.com'];

export const APP_URL = 'https://app.marqly.com';
export const CHROME_URL =
  'https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc';
export const IOS_URL = 'https://apps.apple.com/us/app/marqly-ai-bookmark-manager/id6758905385';
export const FIREFOX_URL = 'https://addons.mozilla.org/en-US/firefox/addon/marqly/';
export const EDGE_URL =
  'https://microsoftedge.microsoft.com/addons/detail/marqly-%E2%80%93-the-ultimate-boo/gojjglmdginjjpgajdnobmnkmcogngok';
