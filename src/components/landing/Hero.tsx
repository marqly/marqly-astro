/**
 * Hero demo — the page's one orchestrated moment, and the start of its
 * through-line: Bon Appétit's real Cacio e Pepe recipe gets saved with the
 * real save modal (AI picks the board, suggests tags), then lands in the
 * Cooking board next to two more real recipes. The search section later
 * finds this exact bookmark again.
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
import { protagonist, cookingNeighbors } from './data';
import { CheckIcon } from './icons';

type Step = 'article' | 'thinking' | 'suggested' | 'saved';

const EASE = [0.32, 0.72, 0, 1] as const;

export default function Hero() {
  const [step, setStep] = useState<Step>('suggested');
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
    <div ref={rootRef} className="relative">
      <BrowserFrame url="feelgoodfoodie.net/recipe/best-hummus">
        <div className="relative h-[430px] overflow-hidden bg-background sm:h-[460px]">
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
                        className="w-full max-w-[440px]"
                      >
                        <SaveModal
                          phase={step === 'thinking' ? 'thinking' : 'suggested'}
                          url="feelgoodfoodie.net/recipe/best-hummus"
                          title="This is the hummus I make for dipping, spreading, and snacking"
                          boardEmoji="🍳"
                          boardName="Cooking"
                          tags={['hummus', 'lebanese', 'meze']}
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
      className={`h-full px-8 pt-8 transition-opacity duration-300 sm:px-14 ${dimmed ? 'opacity-90' : ''}`}
      aria-hidden
    >
      <div className="mx-auto max-w-[560px]">
        <span className="text-[11px] text-muted">feelgoodfoodie.net · Recipes</span>
        <p className="font-display mt-3 text-[28px] leading-tight font-medium text-foreground sm:text-3xl">
          The Hummus I Make Every Week
        </p>
        <p className="mt-2 text-[11px] text-muted/80">5 ingredients · 10 minutes</p>
        <div className="mt-5 space-y-2.5 text-[13px] leading-relaxed text-muted/90">
          <p>
            Chickpeas, tahini, lemon, garlic, and ice-cold water. Authentic Lebanese hummus needs
            nothing else, and the blender does most of the work.
          </p>
          <p>
            The cold water is the trick: streamed in while blending, it whips the tahini and turns
            the whole bowl pale, light, and impossibly smooth.
          </p>
          <p className="text-muted/50">
            Serve it swirled, with olive oil pooling in the middle. Warm pita is not optional.
          </p>
        </div>
      </div>
    </div>
  );
}

function LibraryLanding({ reduce }: { reduce: boolean }) {
  return (
    <div className="flex h-full flex-col justify-center gap-5 px-6 sm:px-8">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-foreground">
          <span aria-hidden className="text-[15px] leading-none">🍳</span>
          Cooking
          <span className="font-mono text-[11px] text-muted">90</span>
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
          Saved to Cooking
        </motion.span>
      </div>
      <div className="grid grid-cols-2 items-start gap-4 sm:grid-cols-3">
        <div className={reduce ? '' : 'just-added'}>
          <BookmarkCard bookmark={protagonist} highlight />
        </div>
        {cookingNeighbors.map((b, i) => (
          <div key={b.id} className={i === 1 ? 'max-sm:hidden' : ''}>
            <BookmarkCard bookmark={b} />
          </div>
        ))}
      </div>
    </div>
  );
}
