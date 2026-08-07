/**
 * Search demo — the payoff of the page's through-line. Types a vague,
 * keyword-free description and surfaces the bookmark saved in the hero,
 * with the app's real semantic-search affordances: the AI shimmer on the
 * field while it thinks, and the yellow "Context:" snippet on the hit.
 *
 * SSR frame: the finished result list (complete with JS off). With motion
 * allowed, it resets and plays once when it scrolls into view.
 */
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { searchQuery, searchResults } from './data';
import { FaviconTile, Kbd } from './bits';
import { SearchIcon, ReplayIcon, ArrowRightIcon } from './icons';

type Phase = 'typing' | 'thinking' | 'results';

const EASE = [0.32, 0.72, 0, 1] as const;

export default function SearchDemo() {
  const [phase, setPhase] = useState<Phase>('results');
  const [chars, setChars] = useState(searchQuery.length);
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const play = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setChars(0);
    setPhase('typing');
    for (let i = 1; i <= searchQuery.length; i++) {
      timers.current.push(setTimeout(() => setChars(i), 350 + i * 32));
    }
    const doneTyping = 350 + searchQuery.length * 32;
    timers.current.push(setTimeout(() => setPhase('thinking'), doneTyping + 250));
    timers.current.push(setTimeout(() => setPhase('results'), doneTyping + 1400));
  };

  useEffect(() => {
    if (reduce) return;
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !played.current) {
            played.current = true;
            play();
            io.disconnect();
          }
        });
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.current.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  const typed = searchQuery.slice(0, chars);
  const showResults = phase === 'results';

  return (
    <div ref={rootRef} className="relative mx-auto w-full max-w-[620px]">
      {/* The app's header search field */}
      <div
        className={`flex h-11 items-center gap-2.5 rounded-xl bg-field px-3.5 shadow-surface ${
          phase === 'thinking' ? 'ai-shimmer' : ''
        }`}
      >
        <SearchIcon size={16} className="shrink-0 text-muted" />
        <span className="min-w-0 flex-1 truncate text-[15px] text-foreground">
          {typed}
          {phase === 'typing' && (
            <span aria-hidden className="ml-px inline-block h-4 w-px animate-pulse bg-foreground align-middle" />
          )}
          {phase === 'thinking' && <span className="text-muted"> </span>}
        </span>
        {showResults ? (
          <button
            type="button"
            onClick={play}
            aria-label="Replay the search demo"
            className="flex size-7 items-center justify-center rounded-full text-muted transition-colors hover:bg-default hover:text-foreground"
          >
            <ReplayIcon size={13} />
          </button>
        ) : (
          <Kbd>⌘K</Kbd>
        )}
      </div>

      {/* Suggestions dropdown (reserved height — no layout shift) */}
      <div className="mt-2 overflow-hidden rounded-2xl bg-surface shadow-overlay">
        <div className="flex items-center justify-between px-4 pt-3 pb-2">
          <span className="rounded-full bg-default px-2.5 py-1 text-[11px] font-medium text-foreground/80">
            All bookmarks
          </span>
          <span className="font-mono text-[10px] tracking-wide text-muted uppercase">
            semantic + full-text
          </span>
        </div>
        <div className="min-h-[204px] px-1.5 pb-2" aria-live="polite">
          {phase === 'thinking' && (
            <p className="px-3 py-3 text-sm text-muted">Searching by meaning…</p>
          )}
          {phase === 'typing' && (
            <p className="px-3 py-3 text-sm text-muted/70">Keep typing…</p>
          )}
          {showResults &&
            searchResults.map((r, i) => (
              <motion.div
                key={r.bookmark.id}
                initial={reduce ? false : { opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : i * 0.07, duration: 0.24, ease: EASE }}
                className={`mx-0.5 flex items-start gap-3 rounded-xl px-3 py-2.5 ${
                  r.top ? 'bg-default/60' : ''
                }`}
              >
                <span className="mt-0.5">
                  <FaviconTile domain={r.bookmark.domain} size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="truncate text-sm font-medium text-foreground">
                      {r.bookmark.title}
                    </span>
                    <span className="shrink-0 font-mono text-[11px] text-muted/80">
                      {r.bookmark.date}
                    </span>
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted">
                    {r.bookmark.domain}
                  </span>
                  {r.context && (
                    <span className="mt-1.5 inline-block rounded bg-marker/45 px-1.5 py-0.5 text-xs leading-snug text-foreground/90">
                      <b className="font-semibold">Context:</b> {r.context}
                    </span>
                  )}
                </span>
                {r.top && (
                  <span className="mt-1 shrink-0 text-muted/50">
                    <ArrowRightIcon size={14} />
                  </span>
                )}
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
