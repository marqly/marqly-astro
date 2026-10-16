/**
 * Infinite vertical testimonial column (21st.dev "testimonials-columns-1",
 * adapted for this site):
 * - framer-motion instead of `motion/react` — same API, already a dependency.
 * - The list renders twice and slides -50%, so the loop is seamless only when
 *   ONE copy is taller than the masked viewport; callers pad short lists by
 *   repeating them (see ReviewsSection.astro).
 * - Second copy is aria-hidden so screen readers hear each quote once.
 * - Pauses on hover/focus (moving text is hard to read) and stays still under
 *   prefers-reduced-motion.
 * - `image` is optional: without one we draw the app's letter-tile avatar
 *   rather than a stock face — testimonials must never look like someone
 *   they aren't.
 */
import { Fragment, useEffect, useRef } from 'react';
import { useAnimate, useReducedMotion } from 'framer-motion';
import type { AnimationPlaybackControls } from 'framer-motion';

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  image?: string;
}

/* Deterministic identity tint per key — the app's --avatar-1..8 recipe
   (same as landing/bits.tsx; duplicated so ui/ stays self-contained). */
function avatarVar(key: string): string {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) % 997;
  return `var(--avatar-${(h % 8) + 1})`;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const controls = useRef<AnimationPlaybackControls | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !scope.current) return;
    controls.current = animate(
      scope.current,
      { y: '-50%' },
      { duration: props.duration || 10, repeat: Infinity, ease: 'linear', repeatType: 'loop' },
    );
    return () => controls.current?.stop();
  }, [animate, scope, reduceMotion, props.duration]);

  const pause = () => controls.current?.pause();
  const play = () => controls.current?.play();

  return (
    <div
      className={props.className}
      onMouseEnter={pause}
      onMouseLeave={play}
      onFocus={pause}
      onBlur={play}
    >
      <div ref={scope} className="flex flex-col gap-6 pb-6">
        {[0, 1].map((copy) => (
          <Fragment key={copy}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <figure
                key={i}
                aria-hidden={copy === 1 ? true : undefined}
                className="w-full max-w-xs rounded-3xl bg-background p-8 shadow-surface"
              >
                <blockquote className="text-[15px] leading-relaxed text-foreground/85">
                  “{text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  {image ? (
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt=""
                      loading="lazy"
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-semibold text-white"
                      style={{ background: avatarVar(name + role) }}
                    >
                      {name.charAt(0).toUpperCase()}
                    </span>
                  )}
                  <span className="flex flex-col">
                    <span className="text-sm leading-5 font-medium tracking-tight text-foreground">
                      {name}
                    </span>
                    <span className="text-xs leading-5 tracking-tight text-muted">{role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
