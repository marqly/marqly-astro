/**
 * Hero demo — the page's one orchestrated moment: the Marqly loop end to end,
 * on one connected story (a Japan trip).
 *
 *   1. SAVE     — teamLab Planets lands: the save toast spins, AI reads the
 *                 page, tags come in, the ghost slot pops into a real row.
 *   2. ASK      — the question gets typed, Ask searches the user's own saves,
 *                 streams a cited answer — and it answers WITH the save from
 *                 beat 1 ("newest: teamLab Planets, auto-tagged today").
 *   3. PROPOSE  — tags for the three untagged Japan bookmarks; once approved,
 *                 the library updates.
 *   4. FILED    — the header flips to the "Travel · Japan" board: the four
 *                 Japan saves on one board, rest of the library dims away.
 *   5. BROWSE   — the view toggle flips to cards: the same four saves as the
 *                 app's real bookmark cards, covers and tags on show.
 *
 * The sequence LOOPS while the demo is on screen (paused off-screen).
 * Jump-free by construction: the dock is a fixed-size stage, every element
 * of the conversation is in the DOM from the first frame and only ever
 * changes opacity/transform; the library rows reserve a chip slot, and the
 * saved row is a permanent ghost slot that only changes opacity.
 * SSR frame: the finished story, browsed as cards — save applied, answer
 * complete, tags on, board shown, card view open — so the whole story reads
 * in one glance, JS off.
 * Reduced motion: that single static frame, no loop.
 */
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { BrowserFrame } from './BrowserFrame';
import { FaviconTile, Kbd, TagChip, BrandCover } from './bits';
import { askEmptyBoxes, askHero, gridBookmarks, heroSave, japanBoard, japanBookmarks, type AskBoxKind, type DemoBookmark } from './data';
import {
  AskActionCard,
  AskAnswer,
  AskComposer,
  AskDock,
  AskEmptyState,
  AskSourcesRow,
  AskThinking,
  AskToolPill,
  AskUserBubble,
  ColorTagChip,
  answerLength,
  type AskBox,
} from './AskDock';
import {
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  GridIcon,
  HistoryIcon,
  RowsIcon,
  SearchIcon,
  SparklesIcon,
  UnlinkIcon,
} from './icons';

type Step =
  | 'saving'
  | 'reading'
  | 'saved'
  | 'empty'
  | 'typing'
  | 'searching'
  | 'writing'
  | 'answer'
  | 'proposal'
  | 'applied'
  | 'board'
  | 'cards';

const TYPE_MS = 32;
const WORD_MS = 45;

/** Steps where the Ask dock shows the conversation instead of the empty state. */
const IN_CONVERSATION: Step[] = ['searching', 'writing', 'answer', 'proposal', 'applied', 'board', 'cards'];

export const BOX_ICONS: Record<AskBoxKind, AskBox['icon']> = {
  broken: UnlinkIcon,
  dups: CopyIcon,
  forgotten: HistoryIcon,
  overlap: GridIcon,
};

export const emptyBoxes: AskBox[] = askEmptyBoxes.map((b) => ({ label: b.label, tint: b.tint, icon: BOX_ICONS[b.kind] }));

const BOOKMARK_BY_ID = new Map<string, DemoBookmark>([
  heroSave.bookmark,
  ...japanBookmarks,
  ...gridBookmarks,
].map((b) => [b.id, b]));

const answerWords = answerLength(askHero.answer);

const proposalItems = askHero.proposal.items.map((it) => ({
  title: BOOKMARK_BY_ID.get(it.id)!.title,
  domain: BOOKMARK_BY_ID.get(it.id)!.domain,
  chips: it.chips,
}));

export default function Hero() {
  // SSR / reduced-motion static frame: the finished story, browsed as cards
  // (saved, answered, tagged, filed, card view). The loop takes over from
  // beat 1 once hydrated.
  const [step, setStep] = useState<Step>('cards');
  const [chars, setChars] = useState(askHero.question.length);
  const [words, setWords] = useState<number>(answerWords);
  const [pulse, setPulse] = useState(false);
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const inView = useRef(true);

  useEffect(() => {
    if (reduce) return;
    let alive = true;

    const at = (ms: number, fn: () => void) => {
      timers.current.push(setTimeout(() => alive && fn(), ms));
    };

    const cycle = () => {
      if (!alive) return;
      if (!inView.current) {
        // Off-screen: hold the finished frame and poll cheaply.
        timers.current.push(setTimeout(cycle, 1200));
        return;
      }
      setStep('saving');
      setChars(0);
      setWords(0);
      setPulse(false);
      at(1500, () => setStep('reading'));
      at(3100, () => setStep('saved'));
      at(4800, () => setStep('empty'));
      at(5500, () => setStep('typing'));
      for (let i = 1; i <= askHero.question.length; i++) at(5500 + i * TYPE_MS, () => setChars(i));
      const typed = 5500 + askHero.question.length * TYPE_MS; // ≈ 6330
      at(typed + 300, () => setStep('searching'));
      at(typed + 1100, () => setStep('writing'));
      const answerAt = typed + 1500;
      at(answerAt, () => setStep('answer'));
      for (let i = 1; i <= answerWords; i++) at(answerAt + i * WORD_MS, () => setWords(i));
      const answered = answerAt + answerWords * WORD_MS;
      at(answered + 600, () => setStep('proposal'));
      at(answered + 2000, () => setPulse(true));
      at(answered + 2900, () => setStep('applied'));
      at(answered + 5200, () => setStep('board'));
      at(answered + 7500, () => setStep('cards'));
      at(answered + 11400, cycle); // hold the cards, then loop
    };

    let io: IntersectionObserver | undefined;
    if (rootRef.current && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => (inView.current = e.isIntersecting)),
        { threshold: 0.25 }
      );
      io.observe(rootRef.current);
    }

    cycle();
    return () => {
      alive = false;
      io?.disconnect();
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [reduce]);

  // The save beat is done; the saved row is solid.
  const saved = step !== 'saving' && step !== 'reading';
  const justSaved = step === 'saved';
  const conversation = IN_CONVERSATION.includes(step);
  const thinking = step === 'searching' || step === 'writing';
  const answering = step !== 'saving' && step !== 'reading' && step !== 'saved' && step !== 'empty' && step !== 'typing';
  const proposed = step === 'proposal' || step === 'applied' || step === 'board' || step === 'cards';
  const applied = step === 'applied' || step === 'board' || step === 'cards';
  const filed = step === 'board' || step === 'cards';
  const cards = step === 'cards';
  const answerDone = words >= answerWords;
  const showToast = justSaved || step === 'saving' || step === 'reading' || filed;

  return (
    <div ref={rootRef} className="relative">
      <BrowserFrame url="app.marqly.com">
        <div className="relative h-[520px] overflow-hidden bg-background sm:h-[580px] lg:h-[680px]" aria-hidden>
          {/* The library, list view — hidden below sm where the app shows Ask as a full sheet */}
          <div className="absolute inset-y-0 right-0 left-0 max-sm:hidden sm:right-[320px] md:right-[340px] lg:right-[400px]">
            <LibraryRows added={applied} saved={saved} filed={filed} view={cards ? 'cards' : 'list'} reduce={!!reduce} />
            {/* Save / file toast — bottom snackbar, never covers the rows it talks about */}
            <div
              className="pointer-events-none absolute inset-x-4 bottom-5 z-20 flex justify-center transition-[opacity,transform] duration-300 ease-[var(--ease-smooth)]"
              style={{ opacity: showToast ? 1 : 0, transform: showToast ? 'none' : 'translateY(8px)' }}
            >
              <SaveToast step={step} reduce={!!reduce} />
            </div>
          </div>

          {/* Ask, docked on the right */}
          <div className="absolute inset-y-0 right-0 w-full sm:w-[320px] md:w-[340px] lg:w-[400px]">
            <AskDock
              composer={
                <AskComposer
                  value={conversation ? '' : askHero.question.slice(0, chars)}
                  typing={step === 'typing'}
                  streaming={thinking || (step === 'answer' && !answerDone)}
                />
              }
            >
              {/* Empty state layer */}
              <div
                className="absolute inset-x-3 top-3 transition-opacity duration-300"
                style={{ opacity: conversation ? 0 : 1 }}
              >
                <AskEmptyState boxes={emptyBoxes} reduce={!!reduce} visible={!conversation} />
              </div>

              {/* Conversation layer — every element mounted from frame one */}
              <div
                className="absolute inset-x-3 top-3 bottom-0 flex flex-col gap-2 transition-opacity duration-300"
                style={{ opacity: conversation ? 1 : 0 }}
              >
                <AskUserBubble>{askHero.question}</AskUserBubble>
                <div>
                  <AskToolPill
                    label={askHero.tool.label}
                    tail={`${askHero.tool.results} results`}
                    state={step === 'searching' ? 'start' : 'ok'}
                  />
                </div>
                {/* Thinking row and answer share one slot: the answer sizes it */}
                <div className="relative">
                  <div
                    className="absolute inset-x-0 top-0 transition-opacity duration-200"
                    style={{ opacity: thinking ? 1 : 0 }}
                  >
                    <AskThinking label={step === 'writing' ? 'Writing…' : 'Searching your library…'} />
                  </div>
                  <AskAnswer segments={askHero.answer} revealed={answering ? words : 0} />
                </div>
                <Fade show={answering && answerDone}>
                  <AskSourcesRow domains={askHero.sources.domains} count={askHero.sources.count} />
                </Fade>
                {/* The proposal card: preview sizes the slot, applied overlays it */}
                <div
                  className="relative mt-1 transition-[opacity,transform] duration-300 ease-[var(--ease-smooth)]"
                  style={{ opacity: proposed ? 1 : 0, transform: proposed ? 'none' : 'translateY(6px)' }}
                >
                  <div className="transition-opacity duration-200" style={{ opacity: applied ? 0 : 1 }}>
                    <AskActionCard
                      kind="preview"
                      title={askHero.proposal.title}
                      count={proposalItems.length}
                      items={proposalItems}
                      pulse={pulse && !applied}
                      reduce={!!reduce}
                    />
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-200" style={{ opacity: applied ? 1 : 0 }}>
                    <AskActionCard kind="applied" title={askHero.proposal.title} count={proposalItems.length} items={proposalItems} />
                  </div>
                </div>
              </div>
            </AskDock>
          </div>
        </div>
      </BrowserFrame>
      <p className="sr-only">
        Marqly in one loop: a new page is saved and auto-tagged as it lands; Ask then answers "what did I save
        about Japan?" from the user's own bookmarks, citing sources; tags for three untagged saves are proposed,
        applied after approval; the four Japan bookmarks show up filed together on one "Travel · Japan" board —
        and the board then opens in the app's card view.
      </p>
    </div>
  );
}

function Fade({ show, children }: { show: boolean; children: React.ReactNode }) {
  return (
    <div className="transition-opacity duration-300" style={{ opacity: show ? 1 : 0 }}>
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- toast -- */

/**
 * The one toast the loop tells its story with: saving → AI reading → saved
 * with tags, then later "filed to the board". Variants overlap in one grid
 * cell so swapping them never resizes a shared rail.
 */
function SaveToast({ step, reduce }: { step: Step; reduce: boolean }) {
  const show = (on: boolean) => (on ? 1 : 0);
  const wrap =
    'col-start-1 row-start-1 flex w-fit items-center gap-2 rounded-3xl bg-surface py-2 pr-3.5 pl-2.5 text-xs font-medium shadow-frame transition-opacity duration-200';
  return (
    <div className="grid justify-center">
      {/* saving */}
      <div className={wrap} style={{ opacity: show(step === 'saving') }}>
        <span
          aria-hidden
          className={`size-3.5 shrink-0 rounded-full border-2 border-default border-t-foreground ${step === 'saving' && !reduce ? 'hero-spin' : ''}`}
        />
        <FaviconTile domain={heroSave.bookmark.domain} size={16} />
        <span className="max-w-[180px] truncate text-foreground">{heroSave.bookmark.title}</span>
        <span className="text-muted">Saving…</span>
      </div>
      {/* AI reading/tagging */}
      <div className={wrap} style={{ opacity: show(step === 'reading') }}>
        <span aria-hidden className="ai-shimmer flex size-3.5 shrink-0 items-center justify-center rounded-full text-foreground">
          <SparklesIcon size={10} />
        </span>
        <FaviconTile domain={heroSave.bookmark.domain} size={16} />
        <span className="max-w-[180px] truncate text-foreground">{heroSave.bookmark.title}</span>
        <span className="text-muted">AI is tagging…</span>
      </div>
      {/* saved with AI tags */}
      <div className={wrap} style={{ opacity: show(step === 'saved') }}>
        <span aria-hidden className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[color:var(--success-solid)] text-white">
          <CheckIcon size={10} />
        </span>
        <FaviconTile domain={heroSave.bookmark.domain} size={16} />
        <span className="max-w-[180px] truncate text-foreground">{heroSave.bookmark.title}</span>
        <span className="flex items-center gap-1">
          {heroSave.bookmark.tags.map((t, i) => (
            <span key={t} className={reduce ? '' : 'badge-enter'} style={{ animationDelay: `${i * 120}ms` }}>
              <TagChip label={t} ai />
            </span>
          ))}
        </span>
      </div>
      {/* filed to the board */}
      <div className={wrap} style={{ opacity: show(step === 'board' || step === 'cards') }}>
        <span aria-hidden className="ai-shimmer flex size-4 shrink-0 items-center justify-center rounded-full text-foreground">
          <SparklesIcon size={11} />
        </span>
        <span className="text-foreground">
          {japanBoard.emoji} {japanBoard.count} Japan saves filed to <span className="font-semibold">{japanBoard.name}</span>
        </span>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- the library -- */

type RowKind = 'save' | 'japan' | 'grid';

const HERO_ROWS: { bookmark: DemoBookmark; chips: string[]; kind: RowKind }[] = [
  { bookmark: heroSave.bookmark, chips: heroSave.bookmark.tags, kind: 'save' },
  ...japanBookmarks.map((b) => ({
    bookmark: b,
    chips: askHero.proposal.items.find((it) => it.id === b.id)?.chips ?? [],
    kind: 'japan' as RowKind,
  })),
  ...gridBookmarks.slice(1, 5).map((b) => ({ bookmark: b, chips: b.tags, kind: 'grid' as RowKind })),
];

/** The four Japan saves, as the card view shows them once they're filed. */
const CARD_ROWS = HERO_ROWS.filter((r) => r.kind !== 'grid').map((r) => ({
  bookmark: r.bookmark,
  chips: r.kind === 'japan' ? (askHero.proposal.items.find((it) => it.id === r.bookmark.id)?.chips ?? r.chips) : r.chips,
}));

/** Grid-view bookmark card — the app's BookmarkCard geometry (cover, meta
 *  row, clamped title, tag row) at the hero's compact scale. */
function BoardCard({ bookmark, chips }: { bookmark: DemoBookmark; chips: string[] }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-surface">
      <div className="relative h-20 w-full overflow-hidden lg:aspect-video lg:h-auto">
        <BrandCover bookmark={bookmark} />
      </div>
      <div className="flex flex-1 flex-col gap-1 px-3 py-2">
        <div className="flex items-baseline justify-between gap-2">
          <span className="truncate text-[11px] text-muted">{bookmark.domain}</span>
          <span className="shrink-0 font-mono text-[10px] text-muted">{bookmark.date}</span>
        </div>
        <p className="line-clamp-2 text-[12px] leading-4 font-medium text-foreground">{bookmark.title}</p>
        <span className="mt-auto flex items-center gap-1 pt-1">
          {chips.slice(0, 2).map((c) => (
            <ColorTagChip key={c} label={c} />
          ))}
        </span>
      </div>
    </article>
  );
}

/**
 * The app's list view (BookmarkCondensedCard rows): favicon, title, domain,
 * a tag slot that is always reserved, and the date. `saved` solidifies the
 * top ghost slot (the save beat); `added` fills the chip slot of the three
 * Japan rows with the tags Ask just applied; `filed` flips the header to the
 * Travel · Japan board and dims everything that isn't part of it.
 */
export function LibraryRows({
  added = false,
  saved = true,
  filed = false,
  view = 'list',
  reduce = false,
  dimmed = false,
}: {
  added?: boolean;
  saved?: boolean;
  filed?: boolean;
  view?: 'list' | 'cards';
  reduce?: boolean;
  dimmed?: boolean;
}) {
  return (
    <div className={`flex h-full flex-col px-4 pt-4 sm:px-5 ${dimmed ? 'opacity-60' : ''}`}>
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 min-w-0 flex-1 items-center gap-2.5 rounded-lg bg-field px-3 shadow-surface">
          <SearchIcon size={15} className="shrink-0 text-muted" />
          <span className="truncate text-[13px] text-muted">Search your bookmarks</span>
          <span className="ml-auto">
            <Kbd>⌘K</Kbd>
          </span>
        </div>
        <span className="flex h-9 items-center gap-0.5 rounded-lg bg-default p-1 text-muted">
          <span
            className={`flex size-7 items-center justify-center rounded-md transition-colors duration-300 ${
              view === 'cards' ? 'bg-surface text-foreground shadow-surface' : ''
            }`}
          >
            <GridIcon size={14} />
          </span>
          <span
            className={`flex size-7 items-center justify-center rounded-md transition-colors duration-300 ${
              view === 'list' ? 'bg-surface text-foreground shadow-surface' : ''
            }`}
          >
            <RowsIcon size={14} />
          </span>
        </span>
        <span className="flex h-9 items-center gap-1 rounded-lg px-2 text-[12px] font-medium text-muted max-md:hidden">
          Recent
          <ChevronDownIcon size={13} />
        </span>
      </div>
      {/* Header: "All bookmarks" and the board view overlap — the crossfade
          is what reads as "filed", with zero layout shift. */}
      <p className="relative mt-4 mb-2 grid text-[13px] leading-5 font-medium text-foreground">
        <span className="col-start-1 row-start-1 flex items-baseline gap-2 transition-opacity duration-300" style={{ opacity: filed ? 0 : 1 }}>
          All bookmarks
          <span className="font-mono text-[11px] font-medium text-muted">{saved ? '1,413' : '1,412'}</span>
        </span>
        <span aria-hidden className="col-start-1 row-start-1 flex items-baseline gap-2 opacity-0 transition-opacity duration-300" style={{ opacity: filed ? 1 : 0 }}>
          {japanBoard.emoji} {japanBoard.name}
          <span className="font-mono text-[11px] font-medium text-muted">{japanBoard.count}</span>
        </span>
      </p>
      {/* Content stage: the list and the card grid share the slot — one
          crossfades out as the other staggers in. Zero layout shift. */}
      <div className="relative min-h-0 flex-1">
        <ul
          className="flex flex-col gap-1.5 transition-opacity duration-300 lg:gap-2"
          style={{ opacity: view === 'cards' ? 0 : 1 }}
        >
          {HERO_ROWS.map(({ bookmark, chips, kind }, i) => {
          const isJapanish = kind !== 'grid';
          const show = kind === 'save' ? saved : kind === 'japan' ? added : true;
          const ghost = kind === 'save' && !saved;
          return (
            <li
              key={bookmark.id}
              className={`flex min-h-[44px] items-center gap-3 rounded-lg bg-surface px-3 py-2 shadow-surface transition-opacity duration-500 ${
                i >= 6 ? 'max-lg:hidden' : ''
              } ${kind === 'save' && saved && !reduce ? 'just-added' : ''}`}
              style={{ opacity: ghost ? 0.35 : filed && !isJapanish ? 0.35 : 1 }}
            >
              <FaviconTile domain={bookmark.domain} size={18} />
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-[13px] leading-5 font-medium text-foreground">{bookmark.title}</span>
                <span className="truncate text-[11px] leading-4 text-muted">{bookmark.domain}</span>
              </span>
              <span className="flex w-[132px] shrink-0 items-center justify-end gap-1 max-lg:hidden">
                {chips.slice(0, 2).map((c, j) => (
                  <span
                    key={c}
                    className={`transition-opacity duration-200 ${show && !reduce ? 'badge-enter' : ''}`}
                    style={{ opacity: show ? 1 : 0, animationDelay: `${i * 120 + j * 60}ms` }}
                  >
                    <ColorTagChip label={c} />
                  </span>
                ))}
              </span>
              <span className="shrink-0 font-mono text-[11px] text-muted">{bookmark.date}</span>
            </li>
              );
            })}
        </ul>
        <div aria-hidden className="pointer-events-none absolute inset-0 grid content-start grid-cols-2 gap-2.5 lg:gap-4">
          {CARD_ROWS.map((c, i) => (
            <div
              key={c.bookmark.id}
              className="transition-[opacity,transform] duration-300 ease-[var(--ease-smooth)]"
              style={{
                opacity: view === 'cards' ? 1 : 0,
                transform: view === 'cards' ? 'none' : 'translateY(10px)',
                transitionDelay: view === 'cards' && !reduce ? `${150 + i * 90}ms` : '0ms',
              }}
            >
              <BoardCard bookmark={c.bookmark} chips={c.chips} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
