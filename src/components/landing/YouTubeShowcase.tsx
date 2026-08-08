/**
 * Full-width YouTube showcase — the real Lex Fridman #122 (David Fravor)
 * episode next to Marqly's AI card, auto-cycling Summary → Chat → Transcript
 * with real chapter timestamps from the actual video. Clicking a tab pins it
 * (auto-cycling stops). Fixed panel height = zero layout jump.
 * Reduced motion: static Summary tab.
 */
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaviconTile } from './bits';
import { PlayIcon, HighlighterIcon } from './icons';

const TABS = ['Summary', 'Chat', 'Transcript'] as const;
type Tab = (typeof TABS)[number];

const EASE = [0.32, 0.72, 0, 1] as const;

export default function YouTubeShowcase({ bare = false }: { bare?: boolean }) {
  const [tab, setTab] = useState<Tab>('Summary');
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
    }, 4200);
    return () => {
      clearInterval(t);
      io?.disconnect();
    };
  }, [reduce, pinned]);

  return (
    <div
      ref={rootRef}
      className={bare ? '' : 'rounded-3xl p-4 sm:p-6'}
      style={bare ? undefined : { background: 'color-mix(in oklab, var(--hl-coral) 24%, white)' }}
    >
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1.1fr_1fr] md:gap-5">
        {/* The real video, as the watch page shows it */}
        <div className="flex flex-col overflow-hidden rounded-2xl bg-black">
          <div className="relative aspect-video md:aspect-auto md:flex-1">
            <img
              src="/landing/covers/lex-fravor.webp"
              alt="Lex Fridman Podcast #122 with David Fravor"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-16 items-center justify-center rounded-xl bg-[#f03] text-white">
                <PlayIcon size={22} />
              </span>
            </span>
            {/* player progress bar, paused inside the Tic Tac chapter */}
            <div className="absolute right-0 bottom-0 left-0 px-3 pb-2">
              <div className="h-[3px] overflow-hidden rounded-full bg-white/25">
                <div className="h-full w-[30%] rounded-full bg-[#f03]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-3.5">
            <FaviconTile domain="youtube.com" size={16} />
            <p className="line-clamp-1 min-w-0 flex-1 text-[13px] font-medium text-white/90">
              David Fravor: UFOs, Aliens, Fighter Jets, and Aerospace Engineering | Lex Fridman
              Podcast #122
            </p>
            <span className="shrink-0 text-[11px] text-white/50">1:11:04 / 3:56:24</span>
          </div>
        </div>

        {/* Marqly's AI card on the watch page */}
        <div className="flex flex-col rounded-2xl bg-surface p-4 shadow-surface sm:p-5">
          <div role="tablist" aria-label="Marqly AI card tabs" className="flex items-center gap-1.5">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                onClick={() => {
                  setTab(t);
                  setPinned(true);
                }}
                className={`cursor-pointer rounded-3xl px-3 py-1 text-xs font-medium transition-colors duration-150 ${
                  tab === t
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-default text-foreground/70 hover:text-foreground'
                }`}
              >
                {t}
              </button>
            ))}
            <span className="ml-auto text-[10px] font-medium tracking-wide text-muted uppercase">
              AI card
            </span>
          </div>

          {/* Fixed-height panel: tabs swap with a fade-slide, never a resize */}
          <div className="relative mt-3 h-[240px] overflow-hidden sm:h-[220px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.24, ease: EASE }}
                className="absolute inset-0"
              >
                {tab === 'Summary' && <SummaryPane />}
                {tab === 'Chat' && <ChatPane />}
                {tab === 'Transcript' && <TranscriptPane />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryPane() {
  return (
    <div>
      <p className="text-[13px] leading-relaxed text-foreground/85">
        <b className="font-semibold">TL;DR</b> Cmdr. David Fravor on the 2004 Nimitz encounter: a
        white tic-tac shaped object that outmaneuvered two F/A-18s, plus carrier flying, jet
        design, and staying skeptical.
      </p>
      <ul className="mt-3 space-y-1.5">
        {[
          ['1:11:04', 'The Tic Tac UFO story'],
          ['1:59:52', 'Tic Tac UFO details'],
          ['2:07:55', 'What do you think the Tic Tac was?'],
        ].map(([ts, label]) => (
          <li key={ts} className="flex items-baseline gap-2.5 text-xs text-muted">
            <span className="w-12 shrink-0 text-right text-[10px] font-medium text-foreground/60">
              {ts}
            </span>
            {label}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[10px] text-muted/80">chapters pulled from the video</p>
    </div>
  );
}

function ChatPane() {
  return (
    <div className="flex h-full flex-col gap-2.5">
      <p className="ml-auto max-w-[85%] rounded-[16px] rounded-br-md bg-default/70 px-3 py-1.5 text-[12px] leading-relaxed text-foreground/85">
        what happened when he tried to intercept it?
      </p>
      <p className="text-[12px] leading-relaxed text-muted">
        As Fravor descended toward the object it began mirroring his aircraft, rising to meet him.
        When he cut across the circle to close in, it accelerated and was gone in under a second.
        The Princeton then reacquired it at the group's CAP point, about 60 miles away.
      </p>
      <p className="mt-auto text-[10px] text-muted/80">answers come from this video's transcript</p>
    </div>
  );
}

function TranscriptPane() {
  return (
    <div>
      <ul className="space-y-2">
        {[
          ['1:12:40', 'It looks like a white Tic Tac, about the size of our airplane.'],
          ['1:13:05', 'No wings, no rotors, no exhaust plume.'],
          ['1:13:31', 'As we start coming down, it starts mirroring us.'],
        ].map(([ts, line]) => (
          <li key={ts} className="flex items-baseline gap-2.5 text-[12px] leading-relaxed">
            <span className="w-12 shrink-0 text-right text-[10px] font-medium text-foreground/60">
              {ts}
            </span>
            <span className="text-foreground/80">{line}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 flex items-center gap-1.5 text-[10px] text-muted/80">
        <HighlighterIcon size={11} />
        playback-synced · one-click copy · saved with the bookmark
      </p>
    </div>
  );
}
