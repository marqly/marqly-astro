/**
 * Demo data for the product reconstructions.
 *
 * Every bookmark shown is a REAL page: real domain, real title (og:title
 * where the site provides one), and its real og/preview image stored under
 * /public/landing/covers. Favicons are the real ones, stored locally.
 *
 * Through-line: Bon Appétit's Cacio e Pepe gets saved in the hero's looping
 * sequence and lands in the Cooking board next to two more real recipes.
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
  'youtube.com': '/landing/favicons/youtube.com.png',
  'fs.blog': '/landing/favicons/fs.blog.png',
  'claude.ai': '/landing/favicons/claude.ai.png',
  'gemini.google.com': '/landing/favicons/gemini.google.com.png',
  'figma.com': '/landing/favicons/figma.com.png',
  'stripe.com': '/landing/favicons/stripe.com.png',
  'asana.com': '/landing/favicons/asana.com.png',
  'haraldurthorleifsson.com': '/landing/favicons/haraldurthorleifsson.com.png',
  'vcstack.io': '/landing/favicons/vcstack.io.png',
  'laracasts.com': '/landing/favicons/laracasts.com.png',
  'overreacted.io': '/landing/favicons/overreacted.io.png',
  'web.dev': '/landing/favicons/web.dev.png',
  'paulgraham.com': '/landing/favicons/paulgraham.com.png',
};

/* ------------------------------------------------------ hero (Cooking) --- */

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

export const cookingNeighbors: DemoBookmark[] = [
  {
    id: 'carbonara',
    title: 'Simple Spaghetti Carbonara',
    domain: 'bonappetit.com',
    description:
      'Eggs, guanciale, and starchy pasta water. Silky, never scrambled, in about half an hour.',
    tags: ['pasta', 'eggs'],
    date: '2 Feb',
    kind: 'article',
    cover: '/landing/covers/carbonara-ba.jpg',
  },
  {
    id: 'risotto',
    title: "BA's Best Risotto",
    domain: 'bonappetit.com',
    description:
      'Toasted rice, hot stock in stages, constant stirring. Creamy without a drop of cream.',
    tags: ['rice', 'technique'],
    date: '19 Jan',
    kind: 'article',
    cover: '/landing/covers/risotto-ba.jpg',
  },
];

/* ------------------------------------------------------- library grid ---- */

export const gridBookmarks: DemoBookmark[] = [
  {
    id: 'lex-fravor',
    title: 'David Fravor: UFOs, Aliens, Fighter Jets, and Aerospace Engineering | Lex Fridman Podcast #122',
    domain: 'youtube.com',
    description:
      'The Nimitz encounter, firsthand: the pilot who chased the tic-tac, on flying and aerospace.',
    tags: ['podcasts', 'aerospace'],
    date: '6 Aug',
    kind: 'video',
    cover: '/landing/covers/lex-fravor.webp',
  },
  {
    id: 'asana',
    title: 'Asana: The OS for human-agent teams',
    domain: 'asana.com',
    description:
      'Work management for teams: projects, tasks, goals, and reporting in one shared place.',
    tags: ['productivity', 'work'],
    date: '31 Jul',
    kind: 'article',
    cover: '/landing/covers/asana.webp',
  },
  {
    id: 'halli',
    title: 'Halli — Haraldur Thorleifsson',
    domain: 'haraldurthorleifsson.com',
    description:
      'Designer, founder of Ueno, and the person behind Ramp Up Iceland. Personal site and writing.',
    tags: ['design', 'people'],
    date: '25 Jul',
    kind: 'article',
    cover: '/landing/covers/halli.webp',
  },
  {
    id: 'laracasts',
    title: 'Learn Laravel | Laracasts',
    domain: 'laracasts.com',
    description:
      'Want to learn Laravel and PHP from the coding wizards who know it best? It is dangerous to code alone.',
    tags: ['laravel', 'learning'],
    date: '18 Jul',
    kind: 'article',
    cover: '/landing/covers/laracasts.webp',
  },
  {
    id: 'vcstack',
    title: 'Visible: investor reporting and portfolio monitoring',
    domain: 'vcstack.io',
    description:
      'Monitor portfolio companies, analyze data, and streamline reporting, all from one place.',
    tags: ['venture', 'tools'],
    date: '9 Jul',
    kind: 'article',
    cover: '/landing/covers/vcstack.webp',
  },
  {
    id: 'meta-pm',
    title: 'Meta Product Manager Interview',
    domain: 'youtube.com',
    description:
      'A full mock PM loop: product sense, execution, and how the interviewers grade both.',
    tags: ['product', 'careers'],
    date: '21 Jun',
    kind: 'video',
    cover: '/landing/covers/meta-pm.webp',
  },
];

/* ---------------------------------------------------------- sidebar ------ */

export const fixedFilters = [
  { name: 'All bookmarks', count: 1412, icon: 'bookmark' as const },
  { name: 'Articles', count: 486, icon: 'article' as const },
  { name: 'Highlights', count: 203, icon: 'highlighter' as const },
  { name: 'AI Chats', count: 37, icon: 'message' as const, pro: true },
  { name: 'Videos', count: 129, icon: 'play' as const },
];

/** Boards use emoji icons here — boards in the app take emojis natively. */
export const userBoards = [
  { name: 'Cooking', count: 89, depth: 0, emoji: '🍳' },
  { name: 'Design systems', count: 134, depth: 0, emoji: '🎨' },
  { name: 'Type & color', count: 41, depth: 1, emoji: '🖍️' },
  { name: 'Reading list', count: 312, depth: 0, emoji: '📚' },
  { name: 'Side projects', count: 57, depth: 0, emoji: '🚀' },
];

export const tagCarousel = [
  'all',
  'podcasts',
  'productivity',
  'design',
  'laravel',
  'venture',
  'product',
  'aerospace',
  'careers',
  'learning',
];

/* ------------------------------------------------------------ search ----- */

export const searchQuery = 'that podcast with the navy pilot who saw a ufo';

const neuralNetworkVideo: DemoBookmark = {
  id: 'neural',
  title: 'But what is a neural network?',
  domain: 'youtube.com',
  description: "3Blue1Brown's visual introduction to deep learning.",
  tags: ['neural-nets', 'math'],
  date: '22 Jul',
  kind: 'video',
  duration: '18:40',
};

export const searchResults = [
  {
    bookmark: gridBookmarks[0]!,
    context:
      '…a white tic-tac shaped object, no wings, no rotors, moving in ways nothing we had could match…',
    top: true,
  },
  { bookmark: gridBookmarks[5]!, context: null, top: false },
  { bookmark: neuralNetworkVideo, context: null, top: false },
];

/* ------------------------------------------------------- AI organizer ---- */

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

/* ----------------------------------------------------------- AI chats ---- */

export const conversationCards: DemoBookmark[] = [
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
    kind: 'conversation',
    date: '14 Jun',
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
