/**
 * Static reconstruction of the app's grid bookmark card.
 * Geometry mirrors components/bookmarks/BookmarkList.tsx (BookmarkCard):
 * rounded-3xl surface, aspect-video cover, px-4 py-3 body with
 * domain/date meta row, clamped title + description, tag row.
 */
import type { CSSProperties } from 'react';
import type { DemoBookmark } from './data';
import { BrandCover, ProviderTile, providerLabel } from './bits';
import { TagIcon } from './icons';

export function BookmarkCard({
  bookmark,
  className = '',
  style,
  highlight = false,
}: {
  bookmark: DemoBookmark;
  className?: string;
  style?: CSSProperties;
  highlight?: boolean;
}) {
  return (
    <article
      data-card="bookmark"
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-surface transition-shadow duration-200 hover:shadow-overlay md:rounded-3xl ${className}`}
      style={style}
    >
      {highlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl md:rounded-3xl"
          style={{ boxShadow: 'inset 0 0 0 2px var(--foreground)' }}
        />
      )}
      <div className="relative aspect-video w-full overflow-hidden">
        <BrandCover bookmark={bookmark} />
        {bookmark.kind === 'conversation' && (
          <span className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-background/85 py-1 pr-2 pl-1 backdrop-blur">
            <ProviderTile provider={bookmark.provider ?? 'chatgpt'} size={14} />
            <span className="text-[11px] leading-none font-medium">
              {providerLabel(bookmark.provider)}
            </span>
          </span>
        )}
      </div>
      <div className="flex min-h-[104px] flex-1 flex-col gap-2 px-4 py-3">
        <div className="flex items-baseline justify-between gap-3">
          <span className="truncate text-xs leading-4 font-medium text-muted">{bookmark.domain}</span>
          <span className="shrink-0 font-mono text-[11px] leading-4 text-muted/80">{bookmark.date}</span>
        </div>
        <p className="line-clamp-1 text-sm leading-5 font-medium text-foreground">
          {bookmark.title}
        </p>
        <p className="line-clamp-2 text-xs leading-4 font-normal text-muted">
          {bookmark.description}
        </p>
        <div className="mt-auto flex items-center gap-1.5 pt-1">
          <TagIcon size={14} className="shrink-0 text-muted/60" />
          <span className="truncate text-xs text-muted">{bookmark.tags.join(', ')}</span>
        </div>
      </div>
    </article>
  );
}

/** Condensed row — the app's BookmarkCondensedCard (favicon + one line). */
export function BookmarkRow({ bookmark }: { bookmark: DemoBookmark }) {
  return (
    <div
      data-card="bookmark"
      className="flex min-h-[44px] items-center gap-3 rounded-lg bg-surface px-4 py-2.5 shadow-surface"
    >
      <span className="flex size-5 shrink-0 items-center justify-center">
        {bookmark.kind === 'conversation' ? (
          <ProviderTile provider={bookmark.provider ?? 'chatgpt'} size={18} />
        ) : (
          <FaviconLetter domain={bookmark.domain} />
        )}
      </span>
      <span className="line-clamp-1 flex-1 truncate text-sm font-medium text-foreground">
        {bookmark.title}
      </span>
      <span className="shrink-0 font-mono text-[11px] text-muted/80">{bookmark.date}</span>
    </div>
  );
}

import { FaviconTile } from './bits';

function FaviconLetter({ domain }: { domain: string }) {
  return <FaviconTile domain={domain} size={18} />;
}
