/**
 * Interactive highlighter demo — the extension's selection toolbar
 * (src/ui/toolbar.svelte geometry: full pill, swatch circles, hairline
 * inset rings, two-tone ring on the selected color) over a verbatim
 * passage from fs.blog. Picking a swatch recolors the main highlight,
 * exactly like recoloring a selection in the product.
 */
import { useState } from 'react';
import { FaviconTile } from './bits';

const SWATCHES: { color: string; name: string }[] = [
  { color: '#F0EC68', name: 'yellow' },
  { color: '#F3ABFF', name: 'pink' },
  { color: '#FEB7AE', name: 'coral' },
  { color: '#B4EDF4', name: 'blue' },
  { color: '#B4F0C4', name: 'mint' },
  { color: '#D6BCFA', name: 'purple' },
];

export default function HighlighterDemo() {
  const [color, setColor] = useState('#F0EC68');

  return (
    <div className="relative flex-1 rounded-2xl bg-surface p-6 pt-11 shadow-surface sm:p-7 sm:pt-12">
      <div
        role="group"
        aria-label="Highlight color"
        className="absolute top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white p-1 shadow-[0_0_0_0.5px_rgba(0,0,0,0.2),0_5px_10px_rgba(0,0,0,0.05),0_15px_40px_rgba(0,0,0,0.1)]"
      >
        {SWATCHES.map((s) => (
          <button
            key={s.color}
            type="button"
            onClick={() => setColor(s.color)}
            aria-label={`Highlight in ${s.name}`}
            aria-pressed={color === s.color}
            className="flex size-7 cursor-pointer items-center justify-center rounded-full transition-transform duration-150 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-black"
          >
            <span
              aria-hidden
              className="size-5 rounded-full transition-shadow duration-150"
              style={{
                background: s.color,
                boxShadow:
                  color === s.color
                    ? `0 0 0 2px #fff, 0 0 0 3.5px ${s.color}`
                    : 'inset 0 0 0 1px rgba(0,0,0,0.10)',
              }}
            />
          </button>
        ))}
      </div>
      <blockquote className="text-[15px] leading-relaxed text-foreground/85">
        Quality matters more than quantity.{' '}
        <mark
          className="rounded-sm px-0.5 transition-colors duration-200"
          style={{ background: color }}
        >
          If you read one book a month but fully appreciate and absorb it,
        </mark>{' '}
        you’ll be better off than{' '}
        <mark className="rounded-sm px-0.5" style={{ background: '#B4F0C4' }}>
          someone who skims half the library
        </mark>{' '}
        without paying attention.
      </blockquote>
      <p className="mt-4 flex items-center gap-1.5 text-[11px] text-muted">
        <FaviconTile domain="fs.blog" size={13} />
        fs.blog · How to Remember What You Read
      </p>
    </div>
  );
}
