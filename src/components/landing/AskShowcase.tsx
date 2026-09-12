/**
 * Full-width Ask showcase — the panel next to the library, auto-cycling
 * through its four jobs: answer with sources, find problems, tidy up, and
 * the same tools from Claude / ChatGPT / Cursor (Connected apps). Clicking a
 * tab pins it; ← → move between tabs. Fixed stage height = zero layout jump.
 * Each pane owns a short timeline (cleared on unmount) and rests on a final
 * frame. Reduced motion: the final frames, static; no cycling.
 */
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { BrowserFrame } from './BrowserFrame';
import { askPanes, gridBookmarks } from './data';
import {
  AskActionCard,
  AskAddAll,
  AskAnswer,
  AskComposer,
  AskDock,
  AskEmptyState,
  AskSourcesRow,
  AskTagRows,
  AskThinking,
  AskToolPill,
  AskUserBubble,
  answerLength,
} from './AskDock';
import { ConnectedAppsDemo } from './ConnectedAppsDemo';
import { LibraryRows, emptyBoxes } from './Hero';
import { ArticleIcon, UnlinkIcon } from './icons';

const TABS = ['Ask', 'Find problems', 'Tidy up', 'From Claude & ChatGPT'] as const;
type Tab = (typeof TABS)[number];

const EASE = [0.32, 0.72, 0, 1] as const;
const CYCLE_MS = 6200;
const WORD_MS = 45;

export default function AskShowcase() {
  const [tab, setTab] = useState<Tab>('Ask');
  const [pinned, setPinned] = useState(false);
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useRef(false);

  useEffect(() => {
    if (reduce || pinned) return;
    const el = rootRef.current;
    let io: IntersectionObserver | undefined;
    if (el && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => (inView.current = e.isIntersecting)),
        { threshold: 0.3 }
      );
      io.observe(el);
    }
    const t = setInterval(() => {
      if (!inView.current) return;
      setTab((cur) => TABS[(TABS.indexOf(cur) + 1) % TABS.length]!);
    }, CYCLE_MS);
    return () => {
      clearInterval(t);
      io?.disconnect();
    };
  }, [reduce, pinned]);

  const pick = (t: Tab) => {
    setTab(t);
    setPinned(true);
  };

  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const i = TABS.indexOf(tab);
    const next = TABS[(i + (e.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length]!;
    pick(next);
    const btn = rootRef.current?.querySelector<HTMLButtonElement>(`[data-tab="${next}"]`);
    btn?.focus();
  };

  return (
    <div ref={rootRef}>
      <div
        role="tablist"
        aria-label="What Ask can do"
        className="flex flex-wrap items-center gap-1.5"
        onKeyDown={onKey}
      >
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            data-tab={t}
            aria-selected={tab === t}
            tabIndex={tab === t ? 0 : -1}
            onClick={() => pick(t)}
            className={`cursor-pointer rounded-3xl px-3 py-1 text-xs font-medium transition-colors duration-150 ${
              tab === t ? 'bg-accent text-accent-foreground' : 'bg-default text-foreground/70 hover:text-foreground'
            }`}
          >
            {t}
          </button>
        ))}
        <span className="ml-auto text-[10px] font-medium tracking-wide text-muted uppercase">Ask panel · Pro</span>
      </div>

      <div className="mt-3">
        <BrowserFrame url="app.marqly.com" className="border border-black/5">
          <div className="relative h-[440px] overflow-hidden bg-background sm:h-[460px]" aria-hidden>
            {/* The library behind, quiet */}
            <div className="absolute inset-y-0 right-0 left-0 max-sm:hidden sm:right-[340px] md:right-[380px]">
              <LibraryRows added dimmed reduce={!!reduce} />
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.24, ease: EASE }}
                className="absolute inset-0"
              >
                {tab === 'From Claude & ChatGPT' ? (
                  <ConnectedPane reduce={!!reduce} />
                ) : (
                  <div className="absolute inset-y-0 right-0 w-full sm:w-[340px] md:w-[380px]">
                    {tab === 'Ask' && <AskPane reduce={!!reduce} />}
                    {tab === 'Find problems' && <ProblemsPane reduce={!!reduce} />}
                    {tab === 'Tidy up' && <TidyPane reduce={!!reduce} />}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- timeline -- */

/** Schedule `[ms, fn]` beats on mount; everything is cleared on unmount.
 *  With reduced motion nothing is scheduled — the pane renders its final frame. */
function useBeats(beats: [number, () => void][], reduce: boolean) {
  useEffect(() => {
    if (reduce) return;
    const timers = beats.map(([ms, fn]) => setTimeout(fn, ms));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);
}

/** Word-by-word reveal starting at `startMs`; returns the revealed count. */
function useStream(total: number, startMs: number, reduce: boolean) {
  const [words, setWords] = useState(reduce ? total : 0);
  useEffect(() => {
    if (reduce) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= total; i++) timers.push(setTimeout(() => setWords(i), startMs + i * WORD_MS));
    return () => timers.forEach(clearTimeout);
  }, [total, startMs, reduce]);
  return words;
}

function Fade({ show, children, className = '' }: { show: boolean; children: React.ReactNode; className?: string }) {
  return (
    <div className={`transition-opacity duration-300 ${className}`} style={{ opacity: show ? 1 : 0 }}>
      {children}
    </div>
  );
}

/* --------------------------------------------------------------- Ask -- */

function AskPane({ reduce }: { reduce: boolean }) {
  const d = askPanes.ask;
  const total = answerLength(d.answer);
  const [phase, setPhase] = useState<'search' | 'read' | 'answer'>(reduce ? 'answer' : 'search');
  useBeats(
    [
      [1000, () => setPhase('read')],
      [1800, () => setPhase('answer')],
    ],
    reduce
  );
  const words = useStream(total, 1800, reduce);
  const done = words >= total;
  return (
    <AskDock composer={<AskComposer streaming={phase !== 'answer' || !done} />}>
      <div className="flex flex-col gap-2">
        <AskUserBubble>{d.question}</AskUserBubble>
        <AskToolPill label={d.search.label} tail={`${d.search.results} results`} state={phase === 'search' ? 'start' : 'ok'} />
        <Fade show={phase !== 'search'}>
          <AskToolPill icon={ArticleIcon} label="Read a page" tail={d.read} state={phase === 'read' ? 'start' : 'ok'} />
        </Fade>
        <div className="relative">
          <div className="absolute inset-x-0 top-0 transition-opacity duration-200" style={{ opacity: phase === 'answer' ? 0 : 1 }}>
            <AskThinking label={phase === 'read' ? 'Reading…' : 'Searching your library…'} />
          </div>
          <AskAnswer segments={d.answer} revealed={phase === 'answer' ? words : 0} />
        </div>
        <Fade show={done}>
          <AskSourcesRow domains={d.sources.domains} count={d.sources.count} />
        </Fade>
        <Fade show={done}>
          <p className="text-[10px] text-muted">answers come from your saves, not the web</p>
        </Fade>
      </div>
    </AskDock>
  );
}

/* ----------------------------------------------------- Find problems -- */

function ProblemsPane({ reduce }: { reduce: boolean }) {
  const d = askPanes.problems;
  const total = answerLength(d.answer);
  const [phase, setPhase] = useState<'empty' | 'pressed' | 'asked' | 'checked' | 'answer' | 'proposal'>(
    reduce ? 'proposal' : 'empty'
  );
  useBeats(
    [
      [1400, () => setPhase('pressed')],
      [1700, () => setPhase('asked')],
      [2100, () => setPhase('checked')],
      [2700, () => setPhase('answer')],
      [3700, () => setPhase('proposal')],
    ],
    reduce
  );
  const words = useStream(total, 2700, reduce);
  const conversation = phase !== 'empty' && phase !== 'pressed';
  const answering = phase === 'answer' || phase === 'proposal';
  return (
    <AskDock composer={<AskComposer streaming={phase === 'asked' || phase === 'checked'} />}>
      <div className="absolute inset-x-3 top-3 transition-opacity duration-300" style={{ opacity: conversation ? 0 : 1 }}>
        <AskEmptyState boxes={emptyBoxes} pressed={phase === 'pressed' ? 0 : -1} reduce={reduce} visible={!conversation} />
      </div>
      <div className="absolute inset-x-3 top-3 flex flex-col gap-2 transition-opacity duration-300" style={{ opacity: conversation ? 1 : 0 }}>
        <AskUserBubble>{d.question}</AskUserBubble>
        <AskToolPill icon={UnlinkIcon} label={d.tool.label} tail={`${d.tool.results} results`} state={phase === 'asked' ? 'start' : 'ok'} />
        <div className="relative">
          <div className="absolute inset-x-0 top-0 transition-opacity duration-200" style={{ opacity: answering ? 0 : 1 }}>
            <AskThinking label="Checking links…" />
          </div>
          <AskAnswer segments={d.answer} revealed={answering ? words : 0} />
        </div>
        <div
          className="mt-1 transition-[opacity,transform] duration-300 ease-[var(--ease-smooth)]"
          style={{ opacity: phase === 'proposal' ? 1 : 0, transform: phase === 'proposal' ? 'none' : 'translateY(6px)' }}
        >
          <AskActionCard
            kind="preview"
            title={d.proposal.title}
            count={d.proposal.count}
            warn={d.proposal.warn}
            items={d.proposal.items}
            more={d.proposal.more}
            reduce={reduce}
          />
        </div>
      </div>
    </AskDock>
  );
}

/* ------------------------------------------------------------ Tidy up -- */

const BY_ID = new Map(gridBookmarks.map((b) => [b.id, b]));

function TidyPane({ reduce }: { reduce: boolean }) {
  const d = askPanes.tidy;
  const total = answerLength(d.answer);
  const [phase, setPhase] = useState<'search' | 'answer' | 'pressed' | 'applied'>(reduce ? 'applied' : 'search');
  useBeats(
    [
      [1200, () => setPhase('answer')],
      [2600, () => setPhase('pressed')],
      [3400, () => setPhase('applied')],
    ],
    reduce
  );
  const words = useStream(total, 1200, reduce);
  const rows = d.rows.map((r) => ({ title: BY_ID.get(r.id)!.title, domain: BY_ID.get(r.id)!.domain, tags: r.tags }));
  const added = phase === 'pressed' || phase === 'applied';
  const answering = phase !== 'search';
  return (
    <AskDock composer={<AskComposer streaming={phase === 'search'} />}>
      <div className="flex flex-col gap-2">
        <AskUserBubble>{d.question}</AskUserBubble>
        <AskToolPill label={d.tool.label} tail={`${d.tool.results} results`} state={phase === 'search' ? 'start' : 'ok'} />
        <div className="relative">
          <div className="absolute inset-x-0 top-0 transition-opacity duration-200" style={{ opacity: answering ? 0 : 1 }}>
            <AskThinking label="Searching your library…" />
          </div>
          <AskAnswer segments={d.answer} revealed={answering ? words : 0} />
        </div>
        <Fade show={answering && words >= total}>
          <AskTagRows rows={rows} added={added} reduce={reduce} />
        </Fade>
        <div className="relative min-h-[28px]">
          <Fade show={answering && words >= total && phase !== 'applied'} className="absolute inset-x-0 top-0">
            <AskAddAll count={d.applied.count} pressed={phase === 'pressed'} />
          </Fade>
          <Fade show={phase === 'applied'} className="absolute inset-x-0 top-0">
            <AskActionCard kind="applied" title={d.applied.title} count={d.applied.count} items={[]} />
          </Fade>
        </div>
      </div>
    </AskDock>
  );
}

/* --------------------------------------------------- Connected apps -- */

function ConnectedPane({ reduce }: { reduce: boolean }) {
  const [editing, setEditing] = useState(reduce ? 2 : -1);
  useBeats([[1500, () => setEditing(2)]], reduce);
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-4">
      <ConnectedAppsDemo editing={editing} />
    </div>
  );
}
