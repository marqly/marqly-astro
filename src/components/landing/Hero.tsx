/**
 * Hero demo — the page's one orchestrated moment: Ask, the assistant panel,
 * next to the library. A question gets typed, Ask searches the user's own
 * saves, streams an answer with numbered citations, proposes tags for the
 * three untagged bookmarks, and — once approved — the library updates.
 *
 * The sequence LOOPS while the demo is on screen (paused off-screen).
 * Jump-free by construction: the dock is a fixed-size stage, every element
 * of the conversation is in the DOM from the first frame and only ever
 * changes opacity/transform; the library rows reserve a chip slot.
 * SSR frame: the "proposal" state with the full answer, so the story reads
 * with JS off. Reduced motion: that single static frame, no loop.
 */
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { BrowserFrame } from './BrowserFrame';
import { FaviconTile, Kbd } from './bits';
import { askEmptyBoxes, askHero, gridBookmarks, japanBookmarks, type AskBoxKind, type DemoBookmark } from './data';
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
import { ChevronDownIcon, CopyIcon, GridIcon, HistoryIcon, RowsIcon, SearchIcon, UnlinkIcon } from './icons';

type Step = 'empty' | 'typing' | 'searching' | 'writing' | 'answer' | 'proposal' | 'applied';

const TYPE_MS = 32;
const WORD_MS = 45;

export const BOX_ICONS: Record<AskBoxKind, AskBox['icon']> = {
  broken: UnlinkIcon,
  dups: CopyIcon,
  forgotten: HistoryIcon,
  overlap: GridIcon,
};

export const emptyBoxes: AskBox[] = askEmptyBoxes.map((b) => ({ label: b.label, tint: b.tint, icon: BOX_ICONS[b.kind] }));

const BOOKMARK_BY_ID = new Map<string, DemoBookmark>([...japanBookmarks, ...gridBookmarks].map((b) => [b.id, b]));

const answerWords = answerLength(askHero.answer);

const proposalItems = askHero.proposal.items.map((it) => ({
  title: BOOKMARK_BY_ID.get(it.id)!.title,
  domain: BOOKMARK_BY_ID.get(it.id)!.domain,
  chips: it.chips,
}));

export default function Hero() {
  const [step, setStep] = useState<Step>('proposal');
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
      setStep('empty');
      setChars(0);
      setWords(0);
      setPulse(false);
      at(700, () => setStep('typing'));
      for (let i = 1; i <= askHero.question.length; i++) at(700 + i * TYPE_MS, () => setChars(i));
      const typed = 700 + askHero.question.length * TYPE_MS; // ≈ 1600
      at(typed + 300, () => setStep('searching'));
      at(typed + 1100, () => setStep('writing'));
      const answerAt = typed + 1500;
      at(answerAt, () => setStep('answer'));
      for (let i = 1; i <= answerWords; i++) at(answerAt + i * WORD_MS, () => setWords(i));
      const answered = answerAt + answerWords * WORD_MS; // ≈ 4500
      at(answered + 600, () => setStep('proposal'));
      at(answered + 2000, () => setPulse(true));
      at(answered + 2600, () => setStep('applied'));
      at(answered + 6900, cycle); // hold the finished library, then loop
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

  const conversation = step !== 'empty' && step !== 'typing';
  const thinking = step === 'searching' || step === 'writing';
  const answering = step === 'answer' || step === 'proposal' || step === 'applied';
  const proposed = step === 'proposal' || step === 'applied';
  const applied = step === 'applied';
  const answerDone = words >= answerWords;

  return (
    <div ref={rootRef} className="relative">
      <BrowserFrame url="app.marqly.com">
        <div className="relative h-[430px] overflow-hidden bg-background sm:h-[470px] lg:h-[540px]" aria-hidden>
          {/* The library, list view — hidden below sm where the app shows Ask as a full sheet */}
          <div className="absolute inset-y-0 right-0 left-0 max-sm:hidden sm:right-[320px] md:right-[340px] lg:right-[400px]">
            <LibraryRows added={applied} reduce={!!reduce} />
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
        Marqly's Ask panel answering "what did I save about Japan?" from the user's own bookmarks, citing three
        sources, then proposing tags for three bookmarks that apply after approval.
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

/* --------------------------------------------------------- the library -- */

const HERO_ROWS: { bookmark: DemoBookmark; chips: string[]; fresh: boolean }[] = [
  ...japanBookmarks.map((b) => ({
    bookmark: b,
    chips: askHero.proposal.items.find((it) => it.id === b.id)?.chips ?? [],
    fresh: true,
  })),
  ...gridBookmarks.slice(1, 5).map((b) => ({ bookmark: b, chips: b.tags, fresh: false })),
];

/**
 * The app's list view (BookmarkCondensedCard rows): favicon, title, domain,
 * a tag slot that is always reserved, and the date. `added` fills the slot
 * of the three Japan rows with the tags Ask just applied.
 */
export function LibraryRows({
  added = false,
  reduce = false,
  dimmed = false,
}: {
  added?: boolean;
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
          <span className="flex size-7 items-center justify-center rounded-md">
            <GridIcon size={14} />
          </span>
          <span className="flex size-7 items-center justify-center rounded-md bg-surface text-foreground shadow-surface">
            <RowsIcon size={14} />
          </span>
        </span>
        <span className="flex h-9 items-center gap-1 rounded-lg px-2 text-[12px] font-medium text-muted max-md:hidden">
          Recent
          <ChevronDownIcon size={13} />
        </span>
      </div>
      <p className="mt-4 mb-2 flex items-baseline gap-2 text-[13px] font-medium text-foreground">
        All bookmarks
        <span className="font-mono text-[11px] font-medium text-muted">1,412</span>
      </p>
      <ul className="flex flex-col gap-1.5 lg:gap-2">
        {HERO_ROWS.map(({ bookmark, chips, fresh }, i) => {
          const show = !fresh || added;
          return (
            <li
              key={bookmark.id}
              className={`flex min-h-[44px] items-center gap-3 rounded-lg bg-surface px-3 py-2 shadow-surface ${
                i === 6 ? 'max-lg:hidden' : ''
              } ${fresh && added && !reduce ? 'just-added' : ''}`}
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
                    className={`transition-opacity duration-200 ${show && fresh && !reduce ? 'badge-enter' : ''}`}
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
    </div>
  );
}
