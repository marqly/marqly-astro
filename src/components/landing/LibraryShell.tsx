/**
 * Full app-window reconstruction: sidebar board tree + header + tag row +
 * bookmark grid. Filter glyphs are the app's real sidebar SVGs; board icons
 * are the app's real marqly2d set; covers are real og images.
 */
import { gridBookmarks, fixedFilters, userBoards, tagCarousel } from './data';
import { BookmarkCard } from './BookmarkCard';
import { BrowserFrame } from './BrowserFrame';
import {
  AllBookmarksGlyph,
  ArticlesGlyph,
  HighlightsGlyph,
  MessageIcon,
  PlayIcon,
  SearchIcon,
  GridIcon,
  RowsIcon,
  ChevronDownIcon,
} from './icons';
import { Kbd } from './bits';

const FILTER_ICONS = {
  bookmark: AllBookmarksGlyph,
  article: ArticlesGlyph,
  highlighter: HighlightsGlyph,
  message: MessageIcon,
  play: PlayIcon,
} as const;

function FilterRow({
  icon: Icon,
  name,
  count,
  active = false,
  pro = false,
}: {
  icon: (p: { size?: number; className?: string }) => React.JSX.Element;
  name: string;
  count: number;
  active?: boolean;
  pro?: boolean;
}) {
  return (
    <div
      className={`flex min-h-8 items-center gap-2 rounded-lg px-2.5 py-1 ${
        active ? 'bg-surface shadow-surface' : ''
      }`}
    >
      <Icon size={15} className="shrink-0 text-foreground/70" />
      <span className="flex-1 truncate text-[13px] leading-5 font-medium text-foreground">
        {name}
      </span>
      {pro && (
        <span className="rounded-2xl bg-pro px-1.5 py-px text-[9px] font-semibold tracking-wide text-white">
          PRO
        </span>
      )}
      <span className="min-w-5 text-right font-mono text-[11px] font-medium text-muted/70">
        {count.toLocaleString()}
      </span>
    </div>
  );
}

function BoardRow({
  emoji,
  name,
  count,
  depth = 0,
}: {
  emoji: string;
  name: string;
  count: number;
  depth?: number;
}) {
  return (
    <div
      className="flex min-h-8 items-center gap-2 rounded-lg px-2.5 py-1"
      style={depth ? { paddingLeft: `${10 + depth * 18}px` } : undefined}
    >
      <span aria-hidden className="w-4 shrink-0 text-center text-[13px] leading-none">
        {emoji}
      </span>
      <span className="flex-1 truncate text-[13px] leading-5 font-medium text-foreground">
        {name}
      </span>
      <span className="min-w-5 text-right font-mono text-[11px] font-medium text-muted/70">
        {count}
      </span>
    </div>
  );
}

export function LibraryShell() {
  const gridCards = gridBookmarks;
  return (
    <BrowserFrame url="app.marqly.com" className="border border-black/5">
      <div className="flex bg-background">
        {/* Sidebar (Sidebar.tsx, scaled) */}
        <aside
          data-shell="sidebar"
          className="w-[218px] shrink-0 border-r border-separator px-2.5 py-4 max-md:hidden"
        >
          <div className="mb-4 flex items-center gap-2 px-2">
            <img src="/landing/logo.svg" alt="" width="22" height="22" />
            <span className="text-sm font-semibold text-foreground">Marqly</span>
          </div>
          <nav aria-label="Library filters" className="flex flex-col gap-0.5">
            {fixedFilters.map((f) => (
              <FilterRow
                key={f.name}
                icon={FILTER_ICONS[f.icon]}
                name={f.name}
                count={f.count}
                pro={f.pro}
                active={f.name === 'All bookmarks'}
              />
            ))}
          </nav>
          <p className="mt-5 mb-1.5 px-2.5 font-mono text-[10px] tracking-wider text-muted/70 uppercase">
            Boards
          </p>
          <nav aria-label="Boards" className="flex flex-col gap-0.5">
            {userBoards.map((b) => (
              <BoardRow key={b.name} emoji={b.emoji} name={b.name} count={b.count} depth={b.depth} />
            ))}
          </nav>
        </aside>

        {/* Main column */}
        <div className="min-w-0 flex-1 px-4 pt-4 pb-5 sm:px-6">
          {/* Header row */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 min-w-0 flex-1 items-center gap-2.5 rounded-lg bg-field px-3 shadow-surface">
              <SearchIcon size={15} className="shrink-0 text-muted" />
              <span className="truncate text-[13px] text-muted">Search your bookmarks</span>
              <span className="ml-auto">
                <Kbd>⌘K</Kbd>
              </span>
            </div>
            <div className="flex h-9 items-center gap-1 rounded-3xl bg-default p-1 max-sm:hidden">
              <span className="flex h-7 items-center rounded-3xl bg-surface px-2.5 shadow-surface">
                <GridIcon size={14} className="text-foreground" />
              </span>
              <span className="flex h-7 items-center rounded-3xl px-2.5">
                <RowsIcon size={14} className="text-muted" />
              </span>
            </div>
            <div className="flex h-9 items-center gap-1.5 rounded-3xl bg-default px-3 text-[13px] font-medium text-foreground/80 max-sm:hidden">
              Recent
              <ChevronDownIcon size={13} className="text-muted" />
            </div>
          </div>

          {/* Tag carousel */}
          <div className="mt-3 flex gap-1.5 overflow-hidden" aria-label="Tag filters">
            {tagCarousel.map((t, i) => (
              <span
                key={t}
                className={`shrink-0 rounded-xl px-2.5 py-1 text-xs font-medium ${
                  i === 0 ? 'bg-accent text-accent-foreground' : 'bg-default text-foreground/75'
                } ${i > 6 ? 'max-lg:hidden' : ''}`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {gridCards.map((b, i) => (
              <div
                key={b.id}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}
                className={i >= 4 ? 'max-sm:hidden' : ''}
              >
                <BookmarkCard bookmark={b} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
