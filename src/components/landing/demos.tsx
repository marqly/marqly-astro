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
import { SearchIcon, HighlighterIcon } from './icons';

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
      className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl p-6 sm:p-8"
      role="img"
      aria-label="Marqly Home new tab: greeting, library search, and quick links as glass cards over a beach photo"
    >
      <img
        src="/landing/newtab-maldives.jpg"
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
