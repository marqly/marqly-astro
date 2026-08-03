export type FreeToolCategory = 'YouTube' | 'Links & SEO' | 'Content' | 'Bookmarks';

export interface FreeTool {
  name: string;
  shortName: string;
  desc: string;
  path: `/tools/${string}`;
  category: FreeToolCategory;
  browserOnly: boolean;
}

/** Single source of truth for the crawlable free-tools directory and link hub. */
export const freeTools: FreeTool[] = [
  {
    name: 'YouTube transcript viewer',
    shortName: 'YouTube transcript viewer',
    desc: 'Paste a link, get the full transcript, then copy or download it as text.',
    path: '/tools/youtube-transcript',
    category: 'YouTube',
    browserOnly: false,
  },
  {
    name: 'YouTube summarizer',
    shortName: 'YouTube summarizer',
    desc: 'Turn a video transcript into a concise summary and key points.',
    path: '/tools/youtube-summarize',
    category: 'YouTube',
    browserOnly: false,
  },
  {
    name: 'YouTube thumbnail downloader',
    shortName: 'YouTube thumbnail downloader',
    desc: 'Get every available thumbnail size from a video, Short, or live URL.',
    path: '/tools/youtube-thumbnail-downloader',
    category: 'YouTube',
    browserOnly: true,
  },
  {
    name: 'YouTube timestamp link generator',
    shortName: 'YouTube timestamp link',
    desc: 'Create a shareable YouTube link that starts at an exact time.',
    path: '/tools/youtube-timestamp-link',
    category: 'YouTube',
    browserOnly: true,
  },
  {
    name: 'URL cleaner',
    shortName: 'URL cleaner',
    desc: 'Strip utm_*, fbclid, gclid, and 20+ other tracking parameters.',
    path: '/tools/url-cleaner',
    category: 'Links & SEO',
    browserOnly: true,
  },
  {
    name: 'UTM builder',
    shortName: 'UTM builder',
    desc: 'Build consistent campaign URLs with correctly encoded UTM parameters.',
    path: '/tools/utm-builder',
    category: 'Links & SEO',
    browserOnly: true,
  },
  {
    name: 'URL encoder and decoder',
    shortName: 'URL encoder & decoder',
    desc: 'Encode text for a URL or decode percent-encoded values instantly.',
    path: '/tools/url-encoder',
    category: 'Links & SEO',
    browserOnly: true,
  },
  {
    name: 'Dead link checker',
    shortName: 'Dead link checker',
    desc: 'Test up to 25 URLs at once and find dead or redirected links.',
    path: '/tools/dead-link-checker',
    category: 'Links & SEO',
    browserOnly: false,
  },
  {
    name: 'Redirect chain checker',
    shortName: 'Redirect checker',
    desc: 'Follow every HTTP redirect hop and reveal loops or long chains.',
    path: '/tools/redirect-checker',
    category: 'Links & SEO',
    browserOnly: false,
  },
  {
    name: 'Open Graph and meta tag checker',
    shortName: 'Open Graph checker',
    desc: 'Inspect titles, descriptions, canonical URLs, robots, and social tags.',
    path: '/tools/open-graph-checker',
    category: 'Links & SEO',
    browserOnly: false,
  },
  {
    name: 'HTML to Markdown converter',
    shortName: 'HTML to Markdown',
    desc: 'Convert pasted HTML or an HTML file into clean GitHub-flavored Markdown.',
    path: '/tools/html-to-markdown',
    category: 'Content',
    browserOnly: true,
  },
  {
    name: 'Reading time calculator',
    shortName: 'Reading time calculator',
    desc: 'Calculate word count, character count, reading time, and speaking time.',
    path: '/tools/reading-time',
    category: 'Content',
    browserOnly: true,
  },
  {
    name: 'Bookmarklet maker',
    shortName: 'Bookmarklet maker',
    desc: 'Turn a small JavaScript snippet into a draggable browser bookmarklet.',
    path: '/tools/bookmarklet-maker',
    category: 'Content',
    browserOnly: true,
  },
  {
    name: 'Bookmark file viewer',
    shortName: 'Bookmark file viewer',
    desc: 'Open a bookmarks HTML export, search it, and export CSV or JSON.',
    path: '/tools/bookmark-file-viewer',
    category: 'Bookmarks',
    browserOnly: true,
  },
  {
    name: 'Duplicate bookmark finder',
    shortName: 'Duplicate bookmark finder',
    desc: 'Find duplicate bookmarks and download a deduplicated export.',
    path: '/tools/duplicate-bookmark-finder',
    category: 'Bookmarks',
    browserOnly: true,
  },
  {
    name: 'Pocket export converter',
    shortName: 'Pocket export converter',
    desc: 'Turn a Pocket export CSV into bookmarks HTML or clean JSON.',
    path: '/tools/pocket-export-converter',
    category: 'Bookmarks',
    browserOnly: true,
  },
];

export const freeToolCategories: FreeToolCategory[] = ['YouTube', 'Links & SEO', 'Content', 'Bookmarks'];
