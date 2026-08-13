/**
 * The extension side panel, reconstructed (test/webextension/panel.js:
 * workspace rail — bookmarks / clipboard / highlights / AI chats — over a
 * searchable board tree and condensed bookmark rows), in the current DS.
 */
import { gridBookmarks, userBoards } from './data';
import { FaviconTile } from './bits';
import {
  AllBookmarksGlyph,
  ArticlesGlyph,
  HighlightsGlyph,
  MessageIcon,
  SearchIcon,
  PlusIcon,
} from './icons';

const RAIL = [
  { icon: AllBookmarksGlyph, label: 'Bookmarks', active: true },
  { icon: ArticlesGlyph, label: 'Clipboard', active: false },
  { icon: HighlightsGlyph, label: 'Highlights', active: false },
  { icon: MessageIcon, label: 'AI Chats', active: false },
];

export function SidePanelDemo({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex w-full max-w-[440px] overflow-hidden rounded-3xl bg-white shadow-overlay ${className}`}
      role="img"
      aria-label="The Marqly side panel: workspace rail, board list, and recent bookmarks next to the page you are reading"
    >
      {/* Workspace rail */}
      <div className="flex w-12 shrink-0 flex-col items-center gap-1.5 border-r border-separator bg-background py-3">
        {RAIL.map(({ icon: Icon, label, active }) => (
          <span
            key={label}
            title={label}
            className={`flex size-8 items-center justify-center rounded-xl ${
              active ? 'bg-surface text-foreground shadow-surface' : 'text-muted'
            }`}
          >
            <Icon size={15} />
          </span>
        ))}
      </div>

      {/* Panel body */}
      <div className="min-w-0 flex-1 p-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 min-w-0 flex-1 items-center gap-2 rounded-lg bg-[#f0f0f2] px-2.5">
            <SearchIcon size={13} className="shrink-0 text-muted" />
            <span className="truncate text-xs text-muted">Search</span>
          </span>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <PlusIcon size={14} />
          </span>
        </div>

        <p className="mt-3 mb-1 px-1 text-[9px] font-semibold tracking-wider text-muted uppercase">
          Boards
        </p>
        <div className="space-y-0.5">
          {userBoards.slice(0, 3).map((b) => (
            <div key={b.name} className="flex items-center gap-2 rounded-lg px-1.5 py-1">
              <span aria-hidden className="w-4 text-center text-[12px] leading-none">
                {b.emoji}
              </span>
              <span className="flex-1 truncate text-[12px] font-medium text-foreground">
                {b.name}
              </span>
              <span className="text-[10px] font-medium text-muted">{b.count}</span>
            </div>
          ))}
        </div>

        <p className="mt-3 mb-1 px-1 text-[9px] font-semibold tracking-wider text-muted uppercase">
          Recent
        </p>
        <div className="space-y-1.5">
          {gridBookmarks.slice(0, 4).map((b) => (
            <div
              key={b.id}
              className="flex items-center gap-2 rounded-xl bg-surface px-2.5 py-2 shadow-surface"
            >
              <FaviconTile domain={b.domain} size={16} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12px] leading-tight font-medium text-foreground">
                  {b.title}
                </span>
                <span className="block truncate text-[10px] text-muted">{b.domain}</span>
              </span>
              <span className="shrink-0 text-[10px] text-muted">{b.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
