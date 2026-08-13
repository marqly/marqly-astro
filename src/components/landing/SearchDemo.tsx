/**
 * Search demo — types a vague, keyword-free description and surfaces the
 * right bookmark with the app's real semantic-search affordances (AI shimmer
 * while thinking, yellow "Context:" snippet on the hit).
 *
 * Layout is JUMP-FREE by construction: the result rows are always in the
 * DOM sizing the dropdown (hidden with opacity only), and the interim
 * "typing / searching" messages float on top. Plays on scroll-into-view,
 * loops 3 times with a pause, then rests; the field's replay button runs
 * it once more. SSR frame: finished results. Reduced motion: static.
 */
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { searchQuery, searchResults } from './data';
import { FaviconTile, Kbd } from './bits';
import { SearchIcon, ReplayIcon, ArrowRightIcon } from './icons';

type Phase = 'typing' | 'thinking' | 'results';

const EASE = [0.32, 0.72, 0, 1] as const;
const AUTO_RUNS = 3;
const HOLD_MS = 3600;

export default function SearchDemo() {
  const [phase, setPhase] = useState<Phase>('results');
  const [chars, setChars] = useState(searchQuery.length);
  const [cycle, setCycle] = useState(0);
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useRef(false);
  const started = useRef(false);
  const runs = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const play = (auto: boolean) => {
    clearTimers();
    runs.current += 1;
    setCycle((c) => c + 1);
    setChars(0);
    setPhase('typing');
    for (let i = 1; i <= searchQuery.length; i++) {
      timers.current.push(setTimeout(() => setChars(i), 350 + i * 32));
    }
    const doneTyping = 350 + searchQuery.length * 32;
    timers.current.push(setTimeout(() => setPhase('thinking'), doneTyping + 250));
    timers.current.push(setTimeout(() => setPhase('results'), doneTyping + 1400));
    if (auto && runs.current < AUTO_RUNS) {
      timers.current.push(
        setTimeout(() => {
          if (inView.current) play(true);
        }, doneTyping + 1400 + HOLD_MS)
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
            play(true);
          }
        });
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimers();
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
            <span
              aria-hidden
              className="ml-px inline-block h-4 w-px animate-pulse bg-foreground align-middle"
            />
          )}
        </span>
        {/* Fixed-size right slot so the ⌘K → replay swap never shifts the field */}
        <span className="flex w-8 shrink-0 items-center justify-end">
          {showResults ? (
            <button
              type="button"
              onClick={() => play(false)}
              aria-label="Replay the search demo"
              className="flex size-7 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:bg-default hover:text-foreground"
            >
              <ReplayIcon size={13} />
            </button>
          ) : (
            <Kbd>⌘K</Kbd>
          )}
        </span>
      </div>

      {/* Dropdown — rows always size the box; interim states float on top */}
      <div className="mt-2 overflow-hidden rounded-2xl bg-surface shadow-overlay">
        <div className="flex items-center justify-between px-4 pt-3 pb-2">
          <span className="rounded-full bg-default px-2.5 py-1 text-[11px] font-medium text-foreground/80">
            All bookmarks
          </span>
          <span className="text-[10px] font-medium tracking-wide text-muted uppercase">
            semantic + full-text
          </span>
        </div>
        <div className="relative px-1.5 pb-2" aria-live="polite">
          {!showResults && (
            <p className="absolute top-1 left-4 z-10 text-sm text-muted">
              {phase === 'thinking' ? 'Searching by meaning…' : 'Keep typing…'}
            </p>
          )}
          <div className={showResults ? '' : 'pointer-events-none'} aria-hidden={!showResults}>
            {searchResults.map((r, i) => (
              <motion.div
                key={`${cycle}-${r.bookmark.id}`}
                initial={reduce ? false : { opacity: 0, y: 5 }}
                animate={
                  showResults || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }
                }
                transition={{
                  delay: showResults && !reduce ? i * 0.07 : 0,
                  duration: 0.24,
                  ease: EASE,
                }}
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
                    <span className="shrink-0 text-[11px] text-muted">{r.bookmark.date}</span>
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
    </div>
  );
}
