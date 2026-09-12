/**
 * Ask — the assistant panel, reconstructed. Presentational only: every piece
 * here is a static frame; the scenes (Hero, AskShowcase) own the timelines.
 *
 * Geometry and copy mirror the product (apps/web/components/assistant/*):
 * the dock header ("New chat"), the composer ("Ask about your bookmarks…"),
 * the user bubble, tool pills ("Searched your library · 7 results"), numbered
 * citation pills + a folded Sources row, the proposal card with Approve /
 * Reject and its applied state with Undo, and the 2×2 suggestion boxes of
 * the empty state. The Ask mark is the chat bubble — never a sparkle.
 *
 * Jump-free rule: callers mount every future element at opacity 0 inside a
 * fixed-height stage and only ever change opacity/transform.
 */
import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FAVICONS } from './data';
import { FaviconTile, Kbd, avatarVar } from './bits';
import {
  ArrowUpIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  MessageIcon,
  PlusIcon,
  SearchIcon,
  UndoIcon,
  XIcon,
} from './icons';

export const EASE = [0.32, 0.72, 0, 1] as const;

export type AskTint = 'sky' | 'mint' | 'peach' | 'lilac' | 'rose' | 'amber';

/* ------------------------------------------------------------ the dock -- */

export function AskDock({
  children,
  composer,
  className = '',
}: {
  children: ReactNode;
  composer?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex h-full flex-col border-l border-separator bg-surface ${className}`}>
      <div className="flex h-10 shrink-0 items-center gap-2 border-b border-separator px-3">
        <span className="flex items-center gap-1 text-[13px] font-medium text-foreground">
          New chat
          <ChevronDownIcon size={13} className="text-muted" />
        </span>
        <span className="ml-auto flex items-center gap-0.5 text-muted">
          <span className="flex size-7 items-center justify-center rounded-lg">
            <PlusIcon size={14} />
          </span>
          <span className="flex size-7 items-center justify-center rounded-lg">
            <XIcon size={14} />
          </span>
        </span>
      </div>
      <div className="relative min-h-0 flex-1 overflow-hidden px-3 pt-3">{children}</div>
      {composer}
    </div>
  );
}

export function AskComposer({
  value = '',
  typing = false,
  streaming = false,
  placeholder = 'Ask about your bookmarks…',
}: {
  value?: string;
  typing?: boolean;
  streaming?: boolean;
  placeholder?: string;
}) {
  const empty = value.length === 0;
  return (
    <div className="shrink-0 px-3 pt-2 pb-3">
      <div
        className={`flex min-h-[44px] items-center gap-2 rounded-2xl bg-default/70 px-3 py-2 ${
          streaming ? 'ai-shimmer' : ''
        }`}
      >
        <span className={`min-w-0 flex-1 text-[13px] leading-5 ${empty ? 'text-muted' : 'text-foreground'}`}>
          {empty ? placeholder : value}
          {typing && (
            <span aria-hidden className="ml-px inline-block h-4 w-px animate-pulse bg-foreground align-middle" />
          )}
        </span>
        <span
          className={`flex size-7 shrink-0 items-center justify-center rounded-full ${
            empty && !streaming ? 'bg-default text-muted' : 'bg-accent text-accent-foreground'
          }`}
        >
          {streaming ? <span className="size-2.5 rounded-[2px] bg-current" /> : <ArrowUpIcon size={14} />}
        </span>
      </div>
      <p className="mt-1.5 text-[10px] text-muted">Enter to send · Shift+Enter for a new line</p>
    </div>
  );
}

/* ----------------------------------------------------------- messages -- */

export function AskUserBubble({ children }: { children: ReactNode }) {
  return (
    <p className="ml-auto max-w-[85%] rounded-[20px] rounded-br-md border border-separator bg-default/70 px-3.5 py-2 text-[13px] leading-[1.45] text-foreground">
      {children}
    </p>
  );
}

export function AskToolPill({
  label,
  tail,
  state = 'ok',
  icon: Icon = SearchIcon,
}: {
  label: string;
  tail?: string;
  state?: 'start' | 'ok';
  icon?: (p: { size?: number; className?: string }) => React.JSX.Element;
}) {
  return (
    <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-separator py-1 pr-2.5 pl-2 text-[12px] leading-none text-muted">
      <Icon size={12} className="shrink-0" />
      <span className="shrink-0 whitespace-nowrap">{label}</span>
      {(tail || state === 'start') && (
        <span className="min-w-0 truncate">
          <span className="mr-1">·</span>
          {state === 'start' ? '…' : tail}
        </span>
      )}
    </span>
  );
}

export function AskThinking({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-2 text-[12px] text-muted">
      <span className="ask-dots" aria-hidden>
        <span />
        <span />
        <span />
      </span>
      {label}
    </span>
  );
}

export type AnswerSegment = string | { cite: number };

/** Every word is in the DOM from the first frame (the final height is reserved);
 *  `revealed` only changes opacity, so streaming never reflows the dock. */
type Token = { kind: 'word'; text: string; i: number } | { kind: 'space'; text: string } | { kind: 'cite'; n: number; i: number };

/** Words, spaces and citations in reading order; each word/citation gets its reveal index. */
function tokenize(segments: AnswerSegment[]): Token[] {
  const out: Token[] = [];
  let i = 0;
  for (const seg of segments) {
    if (typeof seg !== 'string') {
      out.push({ kind: 'cite', n: seg.cite, i: i++ });
      continue;
    }
    for (const tok of seg.split(/(\s+)/)) {
      if (tok === '') continue;
      if (tok.trim() === '') out.push({ kind: 'space', text: tok });
      else out.push({ kind: 'word', text: tok, i: i++ });
    }
  }
  return out;
}

export function AskAnswer({
  segments,
  revealed = Infinity,
  className = '',
}: {
  segments: AnswerSegment[];
  revealed?: number;
  className?: string;
}) {
  const tokens = tokenize(segments);
  const nodes: React.ReactNode[] = [];
  for (let t = 0; t < tokens.length; t++) {
    const tok = tokens[t]!;
    if (tok.kind === 'space') {
      nodes.push(<span key={t}>{tok.text}</span>);
      continue;
    }
    if (tok.kind === 'cite') {
      // A citation with no word before it (start of a segment): stands alone.
      nodes.push(<AskCite key={t} n={tok.n} visible={revealed > tok.i} />);
      continue;
    }
    // A word keeps its citations (and any punctuation glued to them) on the same line.
    const group: React.ReactNode[] = [
      <span key="w" className="transition-opacity duration-150" style={{ opacity: revealed > tok.i ? 1 : 0 }}>
        {tok.text}
      </span>,
    ];
    let j = t + 1;
    while (j < tokens.length && tokens[j]!.kind === 'cite') {
      const c = tokens[j] as Extract<Token, { kind: 'cite' }>;
      group.push(<AskCite key={`c${j}`} n={c.n} visible={revealed > c.i} />);
      j++;
    }
    // Punctuation that follows a citation directly (", a Tokyo…" → ",") stays attached too.
    if (j > t + 1 && j < tokens.length && tokens[j]!.kind === 'word' && /^[,.;:!?)]/.test((tokens[j] as { text: string }).text)) {
      const w = tokens[j] as Extract<Token, { kind: 'word' }>;
      group.push(
        <span key={`p${j}`} className="transition-opacity duration-150" style={{ opacity: revealed > w.i ? 1 : 0 }}>
          {w.text}
        </span>
      );
      j++;
    }
    nodes.push(
      <span key={t} className={j > t + 1 ? 'whitespace-nowrap' : undefined}>
        {group}
      </span>
    );
    t = j - 1;
  }
  return <p className={`text-[13px] leading-[1.55] text-foreground/85 ${className}`}>{nodes}</p>;
}

/** Word count of an answer, for scheduling the reveal. */
export function answerLength(segments: AnswerSegment[]): number {
  return segments.reduce<number>(
    (n, seg) => n + (typeof seg === 'string' ? seg.split(/\s+/).filter(Boolean).length : 1),
    0
  );
}

/** Citation pill — the product's `.assistant-cite`: a small round badge that sits on the
 *  text's midline (not a superscript), hugging the word before it. */
export const CITE_CLASS =
  'relative -top-px ml-0.5 mr-px inline-flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-default px-[5px] align-middle text-[9px] leading-none font-semibold text-foreground/75';

export function AskCite({ n, visible = true }: { n: number; visible?: boolean }) {
  return (
    <span className={`${CITE_CLASS} transition-opacity duration-150 ${visible ? 'opacity-100' : 'opacity-0'}`}>{n}</span>
  );
}

export function AskSourcesRow({ domains, count }: { domains: string[]; count: number }) {
  return (
    <span className="inline-flex items-center gap-2 self-start rounded-full border border-separator py-1 pr-2.5 pl-1.5 text-[12px] leading-none text-muted">
      <span className="flex items-center">
        {domains.map((d, i) => (
          <span key={d} className={`rounded-full ring-2 ring-surface ${i ? '-ml-1.5' : ''}`}>
            <FaviconTile domain={d} size={16} />
          </span>
        ))}
      </span>
      {count} {count === 1 ? 'source' : 'sources'}
      <ChevronDownIcon size={12} />
    </span>
  );
}

/* ------------------------------------------------------ proposal card -- */

export interface AskActionItem {
  title: string;
  domain: string;
  chips?: string[];
}

export function AskActionCard({
  kind,
  title,
  count,
  countLabel = 'items',
  warn,
  items,
  more,
  primary = 'Approve',
  secondary = 'Reject',
  pulse = false,
  reduce = false,
}: {
  kind: 'preview' | 'applied';
  title: string;
  count: number;
  countLabel?: string;
  warn?: string;
  items: AskActionItem[];
  more?: string;
  primary?: string;
  secondary?: string;
  pulse?: boolean;
  reduce?: boolean;
}) {
  const applied = kind === 'applied';
  return (
    <div
      className={`flex flex-col gap-2 rounded-xl border bg-surface px-3 py-2.5 text-[12px] ${
        applied ? 'border-separator' : 'border-foreground'
      }`}
    >
      <div className="flex items-center gap-2">
        {applied ? (
          <CheckCircleIcon size={16} className="shrink-0 text-[color:var(--success-solid)]" />
        ) : (
          <MessageIcon size={14} className="shrink-0 text-muted" />
        )}
        <span className="truncate font-semibold text-foreground">{title}</span>
        <span className="ml-auto shrink-0 text-[11px] text-muted">
          {count} {countLabel}
          {applied ? ' done' : ''}
        </span>
      </div>
      {warn && !applied && <p className="text-[11px] leading-snug text-muted">{warn}</p>}
      <ul className="flex flex-col gap-1.5">
        {items.map((it) => (
          <li key={it.title} className="flex min-w-0 items-center gap-2">
            <span className={`flex size-4 shrink-0 items-center justify-center ${applied ? 'text-[color:var(--success-solid)]' : 'text-muted/60'}`}>
              <CheckIcon size={12} />
            </span>
            <FaviconTile domain={it.domain} size={14} />
            <span className="min-w-0 flex-1 truncate text-foreground">{it.title}</span>
            {it.chips && it.chips.length > 0 && (
              <span className="flex shrink-0 items-center gap-1">
                {it.chips.map((c) => (
                  <AskChip key={c} label={c} done={applied} />
                ))}
              </span>
            )}
          </li>
        ))}
        {more && <li className="pl-6 text-[11px] text-muted">{more}</li>}
      </ul>
      <div className="mt-0.5 flex items-center justify-end gap-2">
        {applied ? (
          <>
            <span className="text-[11px] text-muted">for 30 days</span>
            <span className="flex h-7 items-center gap-1 rounded-3xl bg-default px-3 text-[12px] font-medium text-foreground">
              <UndoIcon size={12} />
              Undo
            </span>
          </>
        ) : (
          <>
            <span className="flex h-7 items-center rounded-3xl px-3 text-[12px] font-medium text-muted">
              {secondary}
            </span>
            <motion.span
              animate={
                pulse && !reduce
                  ? { scale: [1, 1.04, 1], transition: { duration: 0.5, ease: EASE } }
                  : { scale: 1 }
              }
              className="flex h-7 items-center gap-1 rounded-3xl bg-accent px-3 text-[12px] font-medium text-accent-foreground"
            >
              <CheckIcon size={12} />
              {primary}
            </motion.span>
          </>
        )}
      </div>
    </div>
  );
}

/** A tag as the library shows it: the product's per-tag colour, soft. Same hash as the
 *  favicon letter-tiles, so "japan" is the same tint everywhere on the page. */
export function ColorTagChip({ label }: { label: string }) {
  const tint = avatarVar(label);
  return (
    <span
      className="inline-flex h-5 items-center rounded-2xl px-2 text-xs leading-none font-medium whitespace-nowrap"
      style={{ background: `color-mix(in oklab, ${tint} 13%, transparent)`, color: `color-mix(in oklab, ${tint} 82%, var(--foreground))` }}
    >
      {label}
    </span>
  );
}

/** "+ tag" chip; `done` = the product's added state (green tick). */
export function AskChip({ label, done = false, arrow = false }: { label: string; done?: boolean; arrow?: boolean }) {
  const tint = avatarVar(label);
  return (
    <span
      className="inline-flex h-5 items-center gap-0.5 rounded-2xl px-1.5 text-[11px] leading-none font-medium whitespace-nowrap transition-colors duration-200"
      style={
        done
          ? { background: 'color-mix(in oklab, var(--success-solid) 14%, transparent)', color: 'var(--success-solid)' }
          : { background: `color-mix(in oklab, ${tint} 13%, transparent)`, color: `color-mix(in oklab, ${tint} 82%, var(--foreground))` }
      }
    >
      {done ? <CheckIcon size={10} /> : <span aria-hidden>{arrow ? '→' : '+'}</span>}
      {label}
    </span>
  );
}

/* ------------------------------------------------------- empty state -- */

export interface AskBox {
  label: string;
  tint: AskTint;
  icon: (p: { size?: number; className?: string }) => React.JSX.Element;
}

export function AskSuggestionBoxes({
  items,
  pressed = -1,
  reduce = false,
  visible = true,
}: {
  items: AskBox[];
  pressed?: number;
  reduce?: boolean;
  visible?: boolean;
}) {
  return (
    <ul className="grid grid-cols-2 gap-1.5" aria-label="Suggestions">
      {items.map((b, i) => {
        const Icon = b.icon;
        const style = {
          '--ask-box-bg': `var(--ask-${b.tint})`,
          '--ask-box-fg': `var(--ask-${b.tint}-fg)`,
        } as CSSProperties;
        return (
          <motion.li
            key={b.label}
            style={style}
            initial={reduce ? false : { opacity: 0, y: 4 }}
            animate={visible || reduce ? { opacity: 1, y: 0, scale: pressed === i ? 0.97 : 1 } : { opacity: 0, y: 4 }}
            transition={{ delay: visible && !reduce ? i * 0.06 : 0, duration: 0.24, ease: EASE }}
            className={`flex min-h-[52px] items-center gap-2 rounded-[14px] border border-separator px-2 py-1.5 ${
              pressed === i ? 'bg-default' : 'bg-surface'
            }`}
          >
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-lg"
              style={{ background: 'var(--ask-box-bg)', color: 'var(--ask-box-fg)' }}
            >
              <Icon size={15} />
            </span>
            <span className="line-clamp-2 text-[11px] leading-[1.3] font-medium text-foreground">{b.label}</span>
          </motion.li>
        );
      })}
    </ul>
  );
}

export function AskEmptyState({
  boxes,
  pressed = -1,
  reduce = false,
  visible = true,
}: {
  boxes: AskBox[];
  pressed?: number;
  reduce?: boolean;
  visible?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-center gap-1.5 pt-2 text-center">
        <span className="flex size-9 items-center justify-center rounded-xl bg-default text-foreground">
          <MessageIcon size={18} />
        </span>
        <p className="text-[13px] font-medium text-foreground">Ask anything about what you've saved</p>
        <p className="max-w-[260px] text-[11px] leading-snug text-muted">
          Find things you vaguely remember, get the gist of an article, or spot what you keep collecting. Every
          answer links to the source.
        </p>
      </div>
      <AskSuggestionBoxes items={boxes} pressed={pressed} reduce={reduce} visible={visible} />
    </div>
  );
}

/* ------------------------------------------------------ tag suggestions -- */

export interface AskTagRow {
  title: string;
  domain: string;
  tags: string[];
}

export function AskTagRows({
  rows,
  added = false,
  reduce = false,
}: {
  rows: AskTagRow[];
  added?: boolean;
  reduce?: boolean;
}) {
  let k = 0;
  return (
    <ul className="flex flex-col gap-1.5">
      {rows.map((r) => (
        <li key={r.title} className="flex min-w-0 flex-col gap-1">
          <span className="flex min-w-0 items-center gap-1.5">
            <FaviconTile domain={r.domain} size={14} />
            <span className="min-w-0 truncate text-[12px] text-foreground">{r.title}</span>
          </span>
          <span className="flex flex-wrap items-center gap-1 pl-5">
            {r.tags.map((t) => {
              const delay = reduce ? 0 : (k++) * 60;
              return (
                <span key={t} style={{ transitionDelay: added ? `${delay}ms` : '0ms' }} className="transition-opacity">
                  <AskChip label={t} done={added} />
                </span>
              );
            })}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Small "Add all N" button, pressed = darker. */
export function AskAddAll({ count, pressed = false }: { count: number; pressed?: boolean }) {
  return (
    <span
      className={`inline-flex h-7 items-center gap-1 self-start rounded-3xl px-3 text-[12px] font-medium transition-colors ${
        pressed ? 'bg-accent/80 text-accent-foreground' : 'bg-accent text-accent-foreground'
      }`}
    >
      <PlusIcon size={12} />
      Add all {count}
    </span>
  );
}

/** Kbd + label used by the section cards. */
export function AskShortcut() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[12px] text-muted">
      <Kbd>⌘J</Kbd>
      opens Ask
    </span>
  );
}

export const hasFavicon = (domain: string) => Boolean(FAVICONS[domain]);
