/**
 * Static reconstructions for the capture, chat, and new-tab sections.
 * Real content only: the highlighter quote is verbatim from fs.blog's
 * "How to Remember What You Read"; the YouTube card shows 3Blue1Brown's
 * real chapter list; the new tab wears a real Unsplash night scene the way
 * the product's Marqly Home does (glass over photo, credit line included).
 */
import { conversationCards, newtabLinks } from './data';
import { BookmarkCard } from './BookmarkCard';
import { ProviderTile, Kbd, FaviconTile } from './bits';
import { SearchIcon, HighlighterIcon, PlayIcon } from './icons';

/* ------------------------------------------------------- highlighter ---- */

const SWATCHES = ['#F0EC68', '#F3ABFF', '#FEB7AE', '#B4EDF4', '#B4F0C4', '#D6BCFA'];

export function HighlighterDemo() {
  return (
    <div
      className="relative flex-1 rounded-2xl bg-surface p-6 pt-11 shadow-surface sm:p-7 sm:pt-12"
      role="img"
      aria-label="Marqly's highlighter: a pill toolbar with six marker colors floating over a highlighted passage from fs.blog"
    >
      {/* Selection toolbar (src/ui/toolbar.svelte): full pill, swatch circles
          with hairline inset ring; selected gets a two-tone ring. */}
      <div className="absolute top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white p-1 shadow-[0_0_0_0.5px_rgba(0,0,0,0.2),0_5px_10px_rgba(0,0,0,0.05),0_15px_40px_rgba(0,0,0,0.1)]">
        {SWATCHES.map((c, i) => (
          <span key={c} className="flex size-7 items-center justify-center">
            <span
              className="size-5 rounded-full"
              style={{
                background: c,
                boxShadow:
                  i === 0
                    ? `0 0 0 2px #fff, 0 0 0 3.5px ${c}`
                    : 'inset 0 0 0 1px rgba(0,0,0,0.10)',
              }}
            />
          </span>
        ))}
      </div>
      <blockquote className="text-[15px] leading-relaxed text-foreground/85">
        Quality matters more than quantity.{' '}
        <mark className="rounded-sm px-0.5" style={{ background: '#F0EC68' }}>
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

/* ------------------------------------------------------ youtube card ---- */

export function YouTubeCard() {
  return (
    <div
      className="flex-1 rounded-2xl bg-surface p-4 shadow-surface"
      role="img"
      aria-label="Marqly's AI card on a YouTube watch page: summary, chat, and transcript tabs with a TLDR and real chapter timestamps"
    >
      <div className="flex items-center gap-2 pb-3">
        <FaviconTile domain="youtube.com" size={15} />
        <span className="line-clamp-1 min-w-0 flex-1 text-xs font-medium text-foreground">
          But what is a neural network?
        </span>
        <span className="flex shrink-0 items-center gap-1 font-mono text-[10px] text-muted">
          <PlayIcon size={10} />
          18:40
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        {['Summary', 'Chat', 'Transcript'].map((t, i) => (
          <span
            key={t}
            className={`rounded-3xl px-3 py-1 text-xs font-medium ${
              i === 0 ? 'bg-accent text-accent-foreground' : 'bg-default text-foreground/70'
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-foreground/85">
        <b className="font-semibold">TL;DR</b> A network is layers of neurons joined by weights;
        learning means nudging those weights until the cost function stops complaining.
      </p>
      <ul className="mt-3 space-y-1.5">
        {[
          ['3:35', 'Introducing layers'],
          ['8:38', 'Edge detection example'],
          ['11:34', 'Counting weights and biases'],
        ].map(([ts, label]) => (
          <li key={ts} className="flex items-baseline gap-2.5 text-xs text-muted">
            <span className="w-9 shrink-0 text-right font-mono text-[10px] text-foreground/60">
              {ts}
            </span>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------- chat vault ---- */

export function ChatVaultDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {conversationCards.map((c, i) => (
        <div key={c.id} data-reveal style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}>
          <BookmarkCard bookmark={c} />
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------- new tab ----- */

export function NewTabDemo() {
  return (
    <div
      className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl p-6 shadow-frame sm:p-8"
      role="img"
      aria-label="Marqly Home new tab: greeting, library search, and quick links as glass cards over a beach photo"
    >
      <img
        src="/landing/newtab-bg.jpg"
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-black/20" />
      <div className="relative">
        <p className="text-xl font-semibold text-white">Good morning</p>
        <p className="mt-0.5 text-[11px] text-white/80">Friday, August 8 · 9:41</p>
        <div className="mt-4 flex h-11 items-center gap-2.5 rounded-full bg-[rgba(18,18,20,0.55)] px-4 backdrop-blur-md">
          <SearchIcon size={15} className="text-white/70" />
          <span className="flex-1 text-[13px] text-white/70">Search your library or the web</span>
          <kbd className="rounded-sm bg-white/15 px-1.5 py-0.5 text-[11px] leading-none text-white/80">
            ⌘K
          </kbd>
        </div>
        <div className="mt-5 flex gap-3">
          {newtabLinks.map((d) => (
            <span
              key={d}
              className="flex size-10 items-center justify-center rounded-2xl bg-[rgba(18,18,20,0.5)] backdrop-blur-md"
            >
              <FaviconTile domain={d} size={20} />
            </span>
          ))}
          <span className="flex size-10 items-center justify-center rounded-2xl bg-[rgba(18,18,20,0.35)] text-[11px] text-white/70 backdrop-blur-md">
            +4
          </span>
        </div>
        <p className="mt-6 font-mono text-[9px] text-white/40">Photo · Unsplash</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------- conversation strip --- */

export function TranscriptStrip() {
  return (
    <div
      className="flex flex-col gap-3 rounded-3xl bg-surface p-5 shadow-surface sm:p-6"
      role="img"
      aria-label="A saved ChatGPT conversation rendered in Marqly: user question as a bubble, assistant answer as prose"
    >
      <div className="flex items-center gap-2 border-b border-separator pb-3">
        <ProviderTile provider="chatgpt" size={17} />
        <span className="text-xs font-medium text-foreground">ChatGPT</span>
        <span className="ml-auto font-mono text-[10px] text-muted">14 turns · saved 5 Aug</span>
      </div>
      <p className="ml-auto max-w-[78%] rounded-[18px] rounded-br-md bg-default/70 px-3.5 py-2 text-[13px] leading-relaxed text-foreground/85">
        pgvector or Pinecone for ~200k embeddings on a hobby budget?
      </p>
      <p className="max-w-[92%] text-[13px] leading-relaxed text-muted">
        pgvector, comfortably. At 200k rows with HNSW you'll see single-digit-millisecond queries,
        it lives inside the Postgres you already run, and the bill is the database you were paying
        for anyway. Pinecone earns its keep past ~5M vectors or when…
      </p>
      <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
        <HighlighterIcon size={11} />
        searchable next to every article you saved about embeddings
      </span>
    </div>
  );
}
