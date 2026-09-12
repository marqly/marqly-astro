/**
 * Save demo — the former hero loop, now the Capture section's first card:
 * Halli's real personal site gets saved with the real save modal (AI picks
 * the board, suggests tags), then lands in the Design systems board next to
 * another real design reference.
 *
 * The sequence LOOPS while the demo is on screen (paused off-screen).
 * SSR frame: the "suggested" modal state, so the story reads with JS off.
 * Reduced motion: a single static "suggested" frame, no loop.
 */
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { BrowserFrame } from './BrowserFrame';
import { SaveModal } from './SaveModal';
import { BookmarkCard } from './BookmarkCard';
import { designNeighbor, gridBookmarks } from './data';
import { CheckIcon } from './icons';

const halli = gridBookmarks.find((b) => b.id === 'halli')!;

type Step = 'article' | 'thinking' | 'suggested' | 'saved';

const EASE = [0.32, 0.72, 0, 1] as const;

export default function SaveDemo() {
  const [step, setStep] = useState<Step>('suggested');
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const inView = useRef(false);

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
      setStep('article');
      at(500, () => setStep('thinking'));
      at(2100, () => setStep('suggested'));
      at(3700, () => setStep('saved'));
      at(7600, cycle); // hold the library, then loop
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

  const showModal = step === 'thinking' || step === 'suggested';

  return (
    <div ref={rootRef} className="relative w-full">
      <BrowserFrame url="haraldurthorleifsson.com">
        <div className="relative h-[400px] overflow-hidden bg-background sm:h-[420px]">
          <AnimatePresence mode="wait" initial={false}>
            {step !== 'saved' ? (
              <motion.div
                key="article"
                className="absolute inset-0"
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <ArticlePage dimmed={showModal} />
                <AnimatePresence>
                  {showModal && (
                    <motion.div
                      key="modal"
                      className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 6 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className="w-full max-w-[420px]"
                      >
                        <SaveModal
                          phase={step === 'thinking' ? 'thinking' : 'suggested'}
                          url="haraldurthorleifsson.com"
                          title="Halli — Haraldur Thorleifsson"
                          boardEmoji="🎨"
                          boardName="Design systems"
                          tags={['design', 'people', 'inspiration']}
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="library"
                className="absolute inset-0 flex flex-col"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <LibraryLanding reduce={!!reduce} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </BrowserFrame>
    </div>
  );
}

/* --------------------------------------------------------------- scenes -- */

function ArticlePage({ dimmed }: { dimmed: boolean }) {
  return (
    <div
      className={`h-full px-6 pt-7 transition-opacity duration-300 sm:px-10 ${dimmed ? 'opacity-90' : ''}`}
      aria-hidden
    >
      <div className="mx-auto max-w-[520px]">
        <span className="text-[11px] text-muted">haraldurthorleifsson.com</span>
        <p className="font-display mt-3 text-[26px] leading-tight font-medium text-foreground sm:text-[28px]">
          Halli
        </p>
        <p className="mt-2 text-[11px] text-muted">Haraldur Thorleifsson · designer, founder</p>
        <div className="mt-5 space-y-2.5 text-[13px] leading-relaxed text-muted/90">
          <p>
            Designer, founder of Ueno, and the person behind Ramp Up Iceland.
          </p>
          <p>
            Notes on design, on building companies, and on the things worth making along the way.
          </p>
          <p className="text-muted/50">Selected work, writing, and talks.</p>
        </div>
      </div>
    </div>
  );
}

function LibraryLanding({ reduce }: { reduce: boolean }) {
  return (
    <div className="flex h-full flex-col justify-center gap-4 px-5 sm:px-6">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-foreground">
          <span aria-hidden className="text-[15px] leading-none">🎨</span>
          Design systems
          <span className="font-mono text-[11px] text-muted">134</span>
        </span>
        <motion.span
          initial={reduce ? false : { opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.25, ease: EASE }}
          className="flex items-center gap-1.5 rounded-3xl bg-surface py-1.5 pr-3 pl-2 text-xs font-medium shadow-surface"
        >
          <span className="flex size-4 items-center justify-center rounded-full bg-[color:var(--success-solid)] text-white">
            <CheckIcon size={10} />
          </span>
          Saved to Design systems
        </motion.span>
      </div>
      <div className="grid grid-cols-2 items-start gap-3">
        <div className={reduce ? '' : 'just-added'}>
          <BookmarkCard bookmark={{ ...halli, tags: ['design', 'people', 'inspiration'], date: 'Today' }} highlight />
        </div>
        <div>
          <BookmarkCard bookmark={designNeighbor} />
        </div>
      </div>
    </div>
  );
}
