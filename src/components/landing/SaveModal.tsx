/**
 * Static reconstruction of the extension's save modal
 * (src/ui/bookmark-modal.svelte): 24px-radius white card, 64px right-aligned
 * labels, 36px #f0f0f2 fields, pill footer buttons, and the real AI-assist
 * states — "Finding a board…" / "Suggesting tags…" shimmer, lavender
 * AI-suggested tag chips, and the auto-save footer.
 */
import type { ReactNode } from 'react';
import { ChevronDownIcon, DotsIcon, XIcon } from './icons';
import { TagChip } from './bits';

export type SaveModalPhase = 'thinking' | 'suggested';

const FIELD = 'flex h-9 w-full items-center rounded-xl bg-[#f0f0f2] px-3 text-sm text-foreground';

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 shrink-0 text-right text-sm font-medium text-foreground/90 max-[420px]:hidden">
        {label}
      </span>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

export function SaveModal({
  phase,
  autoSaving = false,
  className = '',
}: {
  phase: SaveModalPhase;
  autoSaving?: boolean;
  className?: string;
}) {
  const thinking = phase === 'thinking';
  return (
    <div
      className={`w-full max-w-[440px] rounded-3xl bg-white p-5 text-left shadow-overlay ${className}`}
      role="img"
      aria-label={
        thinking
          ? 'Marqly save dialog: AI is picking a board and suggesting tags for the page'
          : 'Marqly save dialog: AI filed the page under Cooking and suggested the tags pasta, technique, and food-science'
      }
    >
      <div className="mb-1 flex items-center justify-between">
        <p className="text-base font-medium text-[#1a1a1a]">Add new bookmark</p>
        <div className="flex gap-1.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-black/[0.06] text-[#636366]">
            <DotsIcon size={15} />
          </span>
          <span className="flex size-8 items-center justify-center rounded-full bg-black/[0.06] text-[#636366]">
            <XIcon size={14} />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3.5 py-4">
        <Row label="URL">
          <div className={FIELD}>
            <span className="truncate text-foreground/80">bonappetit.com/recipe/cacio-e-pepe</span>
          </div>
        </Row>

        <Row label="Title">
          <div className={FIELD}>
            <span className="truncate">Cacio e Pepe</span>
          </div>
        </Row>

        <Row label="Board">
          <div className={`${FIELD} justify-between gap-2 ${thinking ? 'ai-shimmer' : ''}`}>
            {thinking ? (
              <span className="text-muted">Finding a board…</span>
            ) : (
              <span className="flex min-w-0 items-center gap-2">
                <span aria-hidden className="text-[14px] leading-none">🍳</span>
                <span className="truncate">Cooking</span>
              </span>
            )}
            <ChevronDownIcon size={15} className="shrink-0 text-muted" />
          </div>
        </Row>

        <Row label="Tags">
          <div
            className={`flex min-h-9 w-full flex-wrap items-center gap-1.5 rounded-xl bg-[#f0f0f2] px-3 py-2 ${
              thinking ? 'ai-shimmer' : ''
            }`}
          >
            {thinking ? (
              <span className="text-sm text-muted">Suggesting tags…</span>
            ) : (
              <>
                {['pasta', 'technique', 'food-science'].map((t, i) => (
                  <span key={t} style={{ animationDelay: `${i * 120}ms` }} className="badge-enter">
                    <TagChip label={t} ai />
                  </span>
                ))}
              </>
            )}
          </div>
        </Row>

        <Row label="Note">
          <div className="flex h-11 w-full items-start rounded-xl bg-[#f0f0f2] px-3 py-2 text-sm text-muted">
            Add a note...
          </div>
        </Row>
      </div>

      <div className="flex items-center justify-end gap-2 pt-1">
        {autoSaving && (
          <span className="mr-auto flex items-center gap-2 text-[13px] whitespace-nowrap text-muted">
            <span className="size-3.5 animate-spin rounded-full border-[1.5px] border-muted/40 border-t-foreground/70" />
            Saving automatically…
          </span>
        )}
        <span className="flex h-9 items-center rounded-3xl bg-[#f0f0f2] px-4 text-sm font-medium whitespace-nowrap text-[#1a1a1a]">
          Cancel
        </span>
        <span className="flex h-9 items-center justify-center rounded-3xl bg-black px-4 text-sm font-medium whitespace-nowrap text-white">
          Create Bookmark
        </span>
      </div>
    </div>
  );
}
