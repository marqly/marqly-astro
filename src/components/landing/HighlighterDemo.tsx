/** A real recolor gesture: press a marker, see the passage change, keep the result. */
import { useState } from 'react';
import { FaviconTile } from './bits';
import { Stage } from './stageshow/stage';
import type { Act } from './stageshow/act';

const SWATCHES = [
  { color: '#F0EC68', name: 'yellow' },
  { color: '#F3ABFF', name: 'pink' },
  { color: '#FEB7AE', name: 'coral' },
  { color: '#B4EDF4', name: 'blue' },
  { color: '#B4F0C4', name: 'mint' },
  { color: '#D6BCFA', name: 'purple' },
];
type Scene = { color: string };
const INITIAL: Scene = { color: SWATCHES[0]!.color };
const POSTER: Scene = { color: SWATCHES[4]!.color };

// The hero-demo's measured press, reduced to one gesture at feature-card scale.
async function recolor(a: Act<Scene>) {
  await a.wait(900);
  await a.move('marker-mint');
  await a.wait(300);
  await a.click();
  await a.set(POSTER);
  a.mark('recolored');
  await a.move('marker-rest');
  await a.wait(2200);
}

export default function HighlighterDemo() {
  const [chosen, setChosen] = useState<string | null>(null);
  return (
    <div className="w-full max-w-[440px] overflow-hidden rounded-3xl bg-white shadow-overlay" data-showcase="highlighter">
      <Stage width={440} height={280} compact={{ below: 420, width: 358, height: 330 }}
        initial={INITIAL} poster={chosen ? { color: chosen } : POSTER} script={chosen ? undefined : recolor} play="once"
        cursor={{ at: { x: 310, y: 275 }, idle: 900 }} accent="#000"
        tokens={{ '--ss-font': 'var(--font-app)' }}>
        {(s) => (
          <div className="relative flex h-full flex-col bg-white px-5 pt-5 pb-4 text-left">
            <div className="flex items-center gap-2 text-xs text-muted">
              <FaviconTile domain="fs.blog" size={16} />
              <span>How to Remember What You Read</span>
            </div>
            <div role="group" aria-label="Highlight color" className="my-4 flex w-fit items-center gap-1 self-start rounded-full bg-white p-1.5 shadow-[0_0_0_0.5px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.08)]">
              {SWATCHES.map((swatch) => (
                <button key={swatch.name} type="button" data-target={`marker-${swatch.name}`} data-cursor="hand"
                  onClick={() => setChosen(swatch.color)} aria-label={`Highlight in ${swatch.name}`} aria-pressed={(chosen ?? s.color) === swatch.color}
                  className="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full transition-transform duration-150 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-black">
                  <span aria-hidden className="size-5 rounded-full transition-shadow duration-200" style={{ background: swatch.color, boxShadow: (chosen ?? s.color) === swatch.color ? `0 0 0 2px #fff, 0 0 0 3.5px ${swatch.color}` : 'inset 0 0 0 1px rgba(0,0,0,0.1)' }} />
                </button>
              ))}
            </div>
            <blockquote className="text-[15px] leading-relaxed text-foreground/85">
              Quality matters more than quantity.{' '}
              <mark className="rounded-sm px-0.5 transition-colors duration-250" style={{ background: chosen ?? s.color }}>If you read one book a month but fully appreciate and absorb it,</mark>{' '}
              you’ll be better off than someone who skims half the library without paying attention.
              Getting the rough gist and{' '}
              <mark className="rounded-sm px-0.5" style={{ background: '#B4F0C4' }}>absorbing the lessons</mark>{' '}
              are two different things. Confuse them at your peril.
            </blockquote>
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-separator pt-3 text-xs text-muted">
              <span>2 highlights · saved to your library</span>
              <span className="shrink-0">Try a color</span>
            </div>
            <span data-target="marker-rest" className="absolute top-20 right-5 size-px" />
          </div>
        )}
      </Stage>
    </div>
  );
}
