/**
 * The extension popup, reconstructed (test/webextension/popup.js structure:
 * header + connection pill, search, primary save action, grouped utility
 * rows, version footer) and dressed in the current design system.
 */
import { BookmarkIcon, SearchIcon, ChevronRightIcon } from './icons';

function GroupRow({
  label,
  badge,
  kbd,
  last = false,
}: {
  label: string;
  badge?: string;
  kbd?: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex h-11 items-center gap-2.5 px-3.5 ${last ? '' : 'border-b border-separator'}`}
    >
      <span className="min-w-0 flex-1 truncate text-[13px] font-medium text-foreground">
        {label}
      </span>
      {badge && (
        <span className="flex size-5 items-center justify-center rounded-full bg-default text-[10px] font-semibold text-foreground/70">
          {badge}
        </span>
      )}
      {kbd && (
        <kbd className="rounded-sm bg-default px-1.5 py-0.5 text-[10px] leading-none text-muted">
          {kbd}
        </kbd>
      )}
      <ChevronRightIcon size={13} className="shrink-0 text-muted/60" />
    </div>
  );
}

export function PopupDemo({ className = '' }: { className?: string }) {
  return (
    <div
      className={`w-[300px] rounded-3xl bg-white p-4 text-left shadow-overlay ${className}`}
      role="img"
      aria-label="The Marqly extension popup: Save This Page, saved sessions, save and close tabs, and bookmark import"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 pb-3">
        <img src="/landing/logo.svg" alt="" width="28" height="28" />
        <span className="min-w-0 flex-1">
          <span className="block text-[14px] leading-tight font-semibold text-foreground">
            Marqly
          </span>
          <span className="block text-[11px] leading-tight text-muted">Bookmark Manager</span>
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-default px-2.5 py-1 text-[11px] font-medium text-foreground/80">
          <span className="size-[7px] rounded-full bg-[color:var(--success-solid)]" />
          Connected
        </span>
      </div>

      {/* Search */}
      <div className="flex h-9 items-center gap-2 rounded-xl bg-[#f0f0f2] px-3">
        <SearchIcon size={14} className="shrink-0 text-muted" />
        <span className="text-[13px] text-muted">Search bookmarks…</span>
      </div>

      {/* Primary action */}
      <div className="mt-3 flex h-11 items-center gap-2.5 rounded-2xl bg-accent px-3.5 text-accent-foreground">
        <BookmarkIcon size={16} />
        <span className="text-[13px] font-medium">Save This Page</span>
      </div>

      {/* Grouped utilities */}
      <div className="mt-3 overflow-hidden rounded-2xl bg-[#f7f7f8]">
        <GroupRow label="Saved Sessions" badge="3" />
        <GroupRow label="Save & Close Tabs" kbd="Alt+T" />
        <GroupRow label="Import browser bookmarks" last />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3">
        <span className="text-[10px] text-muted/70">v9.70</span>
        <span className="text-[11px] font-medium text-foreground/80">Open dashboard →</span>
      </div>
    </div>
  );
}
