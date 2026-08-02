/**
 * Canonical feature matrix for comparison tables.
 * Keys MUST match the `features` object in every src/data/competitors/*.json.
 * Order here = row order in rendered tables.
 */
export const FEATURE_LABELS: Record<string, string> = {
  aiAutoTagging: 'AI auto-tagging',
  semanticSearch: 'Semantic search (find by meaning)',
  aiSummaries: 'AI summaries',
  youtubeAi: 'YouTube AI (summary, chat, transcript)',
  chatWithSaves: 'Chat with your saves',
  highlights: 'Web highlighter',
  annotationNotes: 'Notes on highlights',
  savePdf: 'Save page as PDF',
  fullTextSearch: 'Full-text search',
  tabSaver: 'Save all open tabs',
  publicSharing: 'Public sharing (boards/collections)',
  importPocket: 'Pocket import',
  importBrowserHtml: 'Browser bookmarks import',
  offlineReading: 'Offline reading',
  iosApp: 'iOS app',
  androidApp: 'Android app',
  browserExtension: 'Browser extension',
  freeTier: 'Free tier',
  api: 'Public API',
  selfHosted: 'Self-hostable',
};

export type FeatureKey = keyof typeof FEATURE_LABELS;

/** Rows worth showing in a short table (landers, index pages). */
export const HEADLINE_FEATURES: FeatureKey[] = [
  'aiAutoTagging',
  'semanticSearch',
  'aiSummaries',
  'youtubeAi',
  'highlights',
  'savePdf',
  'publicSharing',
  'freeTier',
];
