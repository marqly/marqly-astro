/**
 * Migration fidelity — single source of truth for every /migrate page.
 *
 * Each row states what Marqly's REAL deployed importer preserves, from code
 * inspection (marqly_2026_prod@15dee327: apps/api/src/services/bookmark-parser.ts,
 * import.service.ts, lib/import-path-utils.ts) plus deterministic fixture runs
 * (active/logs/benchmark/2026-09-26-import-fidelity/). States:
 *   supported        = preserved end-to-end, verified against format spec + parser
 *   partial          = preserved but with a documented transformation or caveat
 *   not-supported    = the deployed code provably does not preserve it
 *   not-verified     = plausible from the parser's alias list, but we have not
 *                      run a real exported file of this source yet — never
 *                      presented as a promise (rule: no fabricated import tests)
 *
 * To add a source: add a FIDELITY entry, create the page, add the slug to
 * MIGRATIONS in compare-content.ts, and add the og key in gen-og-seo.mjs.
 */

export type FidelityState = 'supported' | 'partial' | 'not-supported' | 'not-verified';

export interface FidelityRow {
  field: string;
  state: FidelityState;
  note: string;
}

export interface FidelitySource {
  slug: string;
  label: string;
  formats: string;
  verifiedOn: string;
  method: string;
  rows: FidelityRow[];
}

const NOTE_DRIFT =
  'Imported as the bookmark description. The current importer can pair a <DD> note with the following item and drops a folder’s very first note — open the first saves of each folder after importing and re-paste if a note landed wrong.';

const DATE_ROW: FidelityRow = {
  field: 'Saved date',
  state: 'not-supported',
  note: 'The export carries it (ADD_DATE/created) and the parser reads it, but the import stores items with the import date. Sort by “recently added” after a big import with that in mind.',
};

const DUP_ROW: FidelityRow = {
  field: 'Duplicates',
  state: 'not-supported',
  note: 'Import writes every row; no dedup pass runs. Check the export first with the free duplicate finder, or clean up in Marqly after import.',
};

const FOLDER_ROW: FidelityRow = {
  field: 'Folders / collections',
  state: 'supported',
  note: 'Each folder level becomes a Marqly board; items land in the deepest board.',
};

const DEPTH_ROW: FidelityRow = {
  field: 'Nested folder depth',
  state: 'partial',
  note: 'Boards hold two levels. Deeper paths flatten by hyphen-joining the remainder — “Research/Sources/2024/Unpublished” becomes board “Sources-2024-Unpublished” under “Research”. Nothing is lost; the name gets longer.',
};

const HIGHLIGHT_ROW: FidelityRow = {
  field: 'Highlights / annotations',
  state: 'not-supported',
  note: 'Bookmark-file imports carry links, not page markup. Marqly highlights are created on the page after saving.',
};

const URL_ROW: FidelityRow = {
  field: 'URL',
  state: 'supported',
  note: 'Verbatim — query strings (including signed or tracking parameters) and fragments are preserved; nothing is normalized away.',
};

const TITLE_ROW: FidelityRow = {
  field: 'Title',
  state: 'supported',
  note: 'With HTML entities decoded (&amp; → &).',
};

const FAVICON_ROW: FidelityRow = {
  field: 'Favicon / extra metadata',
  state: 'not-supported',
  note: 'ICON attributes are parsed and discarded; Marqly re-fetches what it displays.',
};

export const FIDELITY: Record<string, FidelitySource> = {
  'browser-html': {
    slug: 'browser-html',
    label: 'Chrome, Edge, Firefox, Safari (bookmark HTML)',
    formats: '.html export (all four browsers write the same Netscape format)',
    verifiedOn: '2026-09-26',
    method: 'parser code + fixture runs reproducing each browser’s export layout',
    rows: [
      URL_ROW,
      TITLE_ROW,
      FOLDER_ROW,
      DEPTH_ROW,
      { field: 'Tags', state: 'partial', note: 'Firefox tags survive the export (TAGS attribute) and import as Marqly tags. Chrome, Edge and Safari bookmark exports contain no tags — there is nothing to preserve.' },
      { field: 'Notes / descriptions', state: 'partial', note: NOTE_DRIFT },
      DATE_ROW,
      HIGHLIGHT_ROW,
      FAVICON_ROW,
      DUP_ROW,
    ],
  },
  raindrop: {
    slug: 'raindrop',
    label: 'Raindrop.io',
    formats: 'HTML (recommended) or CSV — Raindrop’s JSON export is not accepted',
    verifiedOn: '2026-09-26',
    method: 'parser code + fixture runs (HTML hierarchy, TAGS + data-tags merging, semicolon/comma/pipe splitting)',
    rows: [
      URL_ROW,
      TITLE_ROW,
      FOLDER_ROW,
      DEPTH_ROW,
      { field: 'Tags', state: 'supported', note: 'TAGS and data-tags attributes are merged and split on commas, semicolons and pipes. CSV works too (tags column).' },
      { field: 'Descriptions / notes', state: 'partial', note: NOTE_DRIFT },
      DATE_ROW,
      { field: 'Collection color / view options', state: 'not-supported', note: 'Visual collection settings have no counterpart in the export Marqly reads.' },
      { field: 'Highlights / annotations', state: 'partial', note: 'Raindrop highlights are not part of the HTML/CSV export path; only descriptions transfer. Re-open important pages in Marqly to highlight.' },
      DUP_ROW,
    ],
  },
  pocket: {
    slug: 'pocket',
    label: 'Pocket',
    formats: 'the export ZIP: ril_export.html or list.csv (only for files saved before the service closed 2025-10-08)',
    verifiedOn: '2026-09-26',
    method: 'parser code + fixture runs against documented Pocket export layouts',
    rows: [
      URL_ROW,
      TITLE_ROW,
      { field: 'Tags', state: 'supported', note: 'TAGS attribute in the HTML import; the tags column in the CSV. Comma-separated either way.' },
      { field: 'Collections (folder)', state: 'partial', note: 'The HTML “Unfiled”/folder structure becomes boards. The CSV’s collection_label column is NOT in the importer’s header aliases — labels are lost in CSV imports; use the HTML.' },
      { field: 'My Notes', state: 'partial', note: NOTE_DRIFT },
      { field: 'Excerpt', state: 'not-supported', note: 'Pocket’s auto-generated EXCERPT attribute is not read by the importer (it reads description/note/comment attributes instead).' },
      { field: 'Read / archive status', state: 'not-supported', note: 'STATUS is ignored — archived and hidden items import as normal saves. Good if you wanted to reread the pile; plan a quick pass if not.' },
      DATE_ROW,
      HIGHLIGHT_ROW,
      DUP_ROW,
    ],
  },
  diigo: {
    slug: 'diigo',
    label: 'Diigo',
    formats: 'bookmark HTML export (My Library → Tools → Export)',
    verifiedOn: '2026-09-26',
    method: 'parser code vs Diigo’s documented export format; no live Diigo export file run yet — treat page-level details as spec-based',
    rows: [
      URL_ROW,
      TITLE_ROW,
      FOLDER_ROW,
      { field: 'Tags', state: 'supported', note: 'Diigo writes its rich tag data into the standard TAGS attribute, which the importer reads. Private/list tags come through as plain tags.' },
      { field: 'Descriptions', state: 'partial', note: NOTE_DRIFT },
      { field: 'Highlights & annotations (Diigo’s core)', state: 'not-supported', note: 'Diigo stores annotations server-side attached to the page — they are not in the bookmark HTML export at all. Before exporting, copy annotations that matter into each bookmark’s description, then import.' },
      { field: 'Outliners / lists', state: 'not-supported', note: 'No automatic path; export what you need as HTML files and re-save them.' },
      DATE_ROW,
      DUP_ROW,
    ],
  },
  mymind: {
    slug: 'mymind',
    label: 'mymind',
    formats: 'cards.csv from the data export (desktop Chrome/Edge only)',
    verifiedOn: '2026-09-26',
    method: 'importer CSV header aliases vs mymind’s documented export columns — NOT yet run against a real mymind export; rows marked unverified may resolve once we test an actual file',
    rows: [
      { field: 'URL', state: 'supported', note: 'A url/link/href column is aliased by the importer.' },
      { field: 'Title', state: 'partial', note: 'title or name columns are aliased; confirm your CSV header after the first test import.' },
      { field: 'Tags', state: 'partial', note: 'A tags column is aliased and split on separators; whether mymind’s CSV populates it for your cards varies — check a few rows in the file viewer first.' },
      { field: 'Text cards / quotes / highlights', state: 'not-supported', note: 'CSV text columns are not parsed as content; mymind-native cards (no URL) have nothing to import as bookmarks. Exported media files stay files — keep them locally.' },
      { field: 'Date', state: 'not-supported', note: DATE_ROW.note },
      { field: 'Folder structure', state: 'not-supported', note: 'mymind has no folder column; everything lands in one board. Sort by tag or board after import.' },
      DUP_ROW,
    ],
  },
  instapaper: {
    slug: 'instapaper',
    label: 'Instapaper',
    formats: 'HTML or CSV export',
    verifiedOn: '2026-09-26',
    method: 'parser code vs Instapaper’s documented exports; real-file run pending',
    rows: [
      URL_ROW,
      TITLE_ROW,
      { field: 'Folders', state: 'supported', note: 'Instapaper’s HTML export writes folders as standard Netscape structure — same board conversion as browsers (two levels, deeper names hyphen-joined).' },
      { field: 'Tags', state: 'not-verified', note: 'Instapaper exports differ by account vintage on whether tags are written; verify in the file viewer before promising yourself tags.' },
      { field: 'Highlights / notes', state: 'not-supported', note: 'Not part of the bookmark export; they stay in Instapaper’s own archive file.' },
      DATE_ROW,
      HIGHLIGHT_ROW,
      DUP_ROW,
    ],
  },
};

export const FIDELITY_LABEL: Record<FidelityState, string> = {
  supported: 'Supported',
  partial: 'Partial',
  'not-supported': 'Not supported',
  'not-verified': 'Not yet verified',
};
