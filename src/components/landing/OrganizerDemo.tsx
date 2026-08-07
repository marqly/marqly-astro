/**
 * AI Organizer — animated reconstruction. Plays once when scrolled into
 * view: a short "reading your bookmarks" scan with the app's indeterminate
 * sweep, then the proposal lands row by row (staggered, the product's
 * easing), footer actions last. Board icons are the app's real 2D set;
 * sub-board chips carry the app's colored-label recipe (tint text on a
 * 15% tint wash). SSR frame: the finished proposal. Reduced motion: static.
 */
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { organizerProposal } from './data';
import { avatarVar } from './bits';
import { SparklesIcon, CheckIcon } from './icons';

type Phase = 'scan' | 'ready';

const EASE = [0.32, 0.72, 0, 1] as const;

export default function OrganizerDemo() {
  const [phase, setPhase] = useState<Phase>('ready');
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (reduce) return;
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !played.current) {
            played.current = true;
            setPhase('scan');
            timers.current.push(setTimeout(() => setPhase('ready'), 1500));
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.current.forEach(clearTimeout);
    };
  }, [reduce]);

  const ready = phase === 'ready';

  return (
    <div ref={rootRef} className="rounded-3xl bg-surface p-5 shadow-frame sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 items-center justify-center rounded-xl bg-default text-foreground">
          <SparklesIcon size={16} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground">AI Organizer</p>
          <p className="text-xs text-muted">
            {ready ? 'Read 1,412 bookmarks · proposal ready' : 'Reading 1,412 bookmarks…'}
          </p>
        </div>
        <span className="text-[11px] text-muted/80">happens once</span>
      </div>

      {/* Scan bar (reserved height either way — no layout shift) */}
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-default/80">
        {!ready && (
          <div className="organizer-sweep h-full w-1/3 rounded-full bg-foreground/25" />
        )}
        {ready && <div className="h-full w-full rounded-full bg-[color:var(--success-solid)]/50" />}
      </div>

      {/* Proposal rows — chips right-aligned on one axis, counts flush right */}
      <div className="mt-4 divide-y divide-separator rounded-2xl bg-background/60 px-4">
        {organizerProposal.map((b, i) => (
          <motion.div
            key={b.name}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ delay: reduce ? 0 : 0.1 + i * 0.07, duration: 0.28, ease: EASE }}
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
            <span className="w-9 shrink-0 text-right text-[11px] font-medium text-muted/80">
              {b.count}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: reduce ? 0 : 0.55, duration: 0.3, ease: EASE }}
        className="mt-4 flex items-center justify-end gap-2"
      >
        <span className="flex h-9 items-center rounded-3xl bg-default px-4 text-sm font-medium text-foreground">
          Adjust
        </span>
        <span className="flex h-9 items-center gap-1.5 rounded-3xl bg-accent px-4 text-sm font-medium text-accent-foreground">
          <CheckIcon size={14} />
          Approve and file
        </span>
      </motion.div>
    </div>
  );
}
