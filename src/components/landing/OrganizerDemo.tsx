/**
 * AI Organizer — storytelling reconstruction, jump-free by construction.
 *
 * The story, in four beats on a fixed-size stage:
 *   1. pile     — 1,412 bookmarks as a scattered heap of real favicons
 *   2. scan     — the heap shimmers while the AI reads it (sweep bar)
 *   3. organize — the heap dissolves; the proposed board structure
 *                 cascades in with the app's real 2D icons + colored chips
 *   4. ready    — actions arm; nothing moves until "Approve and file"
 *
 * The proposal rows always size the card (hidden by opacity only) and the
 * pile floats above them, so no phase ever changes the layout. Plays on
 * scroll-into-view, loops 3 times, then rests on the proposal.
 * SSR / no-JS / reduced motion: the finished proposal, static.
 */
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { organizerProposal } from './data';
import { avatarVar, FaviconTile } from './bits';
import { SparklesIcon, CheckIcon } from './icons';

type Phase = 'pile' | 'scan' | 'organize' | 'ready';

const EASE = [0.32, 0.72, 0, 1] as const;
const AUTO_RUNS = 3;

const BEATS: [Phase, number][] = [
  ['pile', 1500],
  ['scan', 1700],
  ['organize', 1000],
  ['ready', 4600],
];

/* Deterministic scatter (SSR-stable): real favicons strewn like a downloads
   folder. x/y in %, r in degrees. */
const PILE: { d: string; x: number; y: number; r: number }[] = [
  { d: 'github.com', x: 6, y: 16, r: -9 },
  { d: 'youtube.com', x: 22, y: 58, r: 7 },
  { d: 'asana.com', x: 14, y: 34, r: -4 },
  { d: 'arxiv.org', x: 33, y: 22, r: 11 },
  { d: 'fs.blog', x: 44, y: 62, r: -12 },
  { d: 'figma.com', x: 52, y: 30, r: 5 },
  { d: 'stripe.com', x: 63, y: 56, r: -6 },
  { d: 'laracasts.com', x: 71, y: 20, r: 9 },
  { d: 'feelgoodfoodie.net', x: 80, y: 48, r: -10 },
  { d: 'chatgpt.com', x: 88, y: 24, r: 4 },
  { d: 'themediterraneandish.com', x: 10, y: 76, r: 8 },
  { d: 'claude.ai', x: 30, y: 84, r: -7 },
  { d: 'web.dev', x: 48, y: 88, r: 10 },
  { d: 'haraldurthorleifsson.com', x: 60, y: 78, r: -5 },
  { d: 'gemini.google.com', x: 74, y: 86, r: 6 },
  { d: 'overreacted.io', x: 86, y: 70, r: -11 },
  { d: 'vcstack.io', x: 40, y: 8, r: -6 },
  { d: 'paulgraham.com', x: 92, y: 52, r: 12 },
];

const SUBTITLES: Record<Phase, string> = {
  pile: '1,412 bookmarks, no structure',
  scan: 'Reading titles, content, and tags…',
  organize: 'Proposing a board structure…',
  ready: 'Proposal ready · nothing moves until you approve',
};

export default function OrganizerDemo() {
  const [phase, setPhase] = useState<Phase>('ready');
  const [cycle, setCycle] = useState(0);
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useRef(false);
  const started = useRef(false);
  const runs = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const play = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    runs.current += 1;
    setCycle((c) => c + 1);
    let t = 0;
    for (const [p, dur] of BEATS) {
      const at = t;
      timers.current.push(setTimeout(() => setPhase(p), at));
      t += dur;
    }
    if (runs.current < AUTO_RUNS) {
      timers.current.push(
        setTimeout(() => {
          if (inView.current) play();
        }, t)
      );
    }
  };

  useEffect(() => {
    if (reduce) return;
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          inView.current = e.isIntersecting;
          if (e.isIntersecting && !started.current) {
            started.current = true;
            play();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.current.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  const ready = phase === 'ready';
  const showRows = phase === 'organize' || phase === 'ready';

  return (
    <div ref={rootRef} className="rounded-3xl bg-surface p-5 shadow-frame sm:p-6">
      {/* Header — fixed height, text swaps in place */}
      <div className="flex items-center gap-2.5">
        <motion.span
          animate={
            phase === 'scan' && !reduce
              ? { scale: [1, 1.12, 1], transition: { duration: 0.9, repeat: Infinity } }
              : { scale: 1 }
          }
          className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-default text-foreground"
        >
          <SparklesIcon size={16} />
        </motion.span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground">AI Organizer</p>
          <p className="truncate text-xs text-muted">{SUBTITLES[phase]}</p>
        </div>
        <span className="shrink-0 text-[11px] text-muted">happens once</span>
      </div>

      {/* Progress — same bar, four meanings */}
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-default/80">
        {phase === 'scan' && (
          <div className="organizer-sweep h-full w-1/3 rounded-full bg-foreground/25" />
        )}
        {phase === 'organize' && (
          <motion.div
            initial={{ width: '30%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.9, ease: EASE }}
            className="h-full rounded-full bg-foreground/30"
          />
        )}
        {ready && <div className="h-full w-full rounded-full bg-[color:var(--success-solid)]/50" />}
      </div>

      {/* Stage — rows always size it; the pile floats above */}
      <div className="relative mt-4">
        <div className="divide-y divide-separator rounded-2xl bg-background/60 px-4">
          {organizerProposal.map((b, i) => (
            <motion.div
              key={b.name}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={
                showRows || reduce
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 6 }
              }
              transition={{
                delay: showRows && !reduce ? 0.15 + i * 0.11 : 0,
                duration: 0.3,
                ease: EASE,
              }}
              className="flex min-h-[46px] items-center gap-2.5 py-1.5"
            >
              <img
                src={b.icon}
                alt=""
                width={20}
                height={20}
                loading="lazy"
                className="size-5 shrink-0 object-contain"
              />
              <span className="truncate text-[13px] font-medium text-foreground">{b.name}</span>
              <span className="ml-auto flex shrink-0 items-center gap-1.5">
                {b.chips.map((c) => {
                  const tint = avatarVar(c);
                  return (
                    <span
                      key={c}
                      className="rounded-xl px-2 py-0.5 text-[11px] font-medium max-sm:hidden"
                      style={{
                        background: `color-mix(in oklab, ${tint} 14%, transparent)`,
                        color: tint,
                      }}
                    >
                      {c}
                    </span>
                  );
                })}
              </span>
              <span className="w-9 shrink-0 text-right text-[11px] font-medium text-muted">
                {b.count}
              </span>
            </motion.div>
          ))}
        </div>

        {/* The unsorted heap */}
        <AnimatePresence>
          {!showRows && !reduce && (
            <motion.div
              key={`pile-${cycle}`}
              aria-hidden
              className="pointer-events-none absolute inset-0"
              exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.35, ease: EASE } }}
            >
              {PILE.map((c, i) => (
                <motion.span
                  key={c.d}
                  className="absolute"
                  style={{ left: `${c.x}%`, top: `${c.y}%`, rotate: c.r }}
                  initial={{ opacity: 0, y: -6 }}
                  animate={
                    phase === 'scan'
                      ? {
                          opacity: [0.45, 1, 0.45],
                          y: 0,
                          transition: {
                            opacity: { duration: 1.1, repeat: Infinity, delay: i * 0.05 },
                            y: { duration: 0.3 },
                          },
                        }
                      : { opacity: 0.9, y: 0, transition: { delay: i * 0.035, duration: 0.3 } }
                  }
                >
                  <FaviconTile domain={c.d} size={i % 3 === 0 ? 22 : 18} />
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Actions arm only when the proposal is ready */}
      <motion.div
        animate={{ opacity: ready || reduce ? 1 : 0.35 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="mt-4 flex items-center justify-end gap-2"
      >
        <span className="flex h-9 items-center rounded-3xl bg-default px-4 text-sm font-medium text-foreground">
          Adjust
        </span>
        <motion.span
          animate={
            ready && !reduce
              ? { scale: [1, 1.04, 1], transition: { delay: 0.6, duration: 0.5, ease: EASE } }
              : { scale: 1 }
          }
          className="flex h-9 items-center gap-1.5 rounded-3xl bg-accent px-4 text-sm font-medium text-accent-foreground"
        >
          <CheckIcon size={14} />
          Approve and file
        </motion.span>
      </motion.div>
    </div>
  );
}
