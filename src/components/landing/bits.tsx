/**
 * Small shared reconstruction pieces. Realism rules:
 * - Favicons are the real ones (downloaded locally; letter-tile fallback
 *   only for domains without one, which is also the app's real fallback).
 * - Conversation provider marks are the real ChatGPT/Claude/Gemini icons.
 * - Card covers are real og:image captures; the tinted brand tile is the
 *   app's real cover-degradation treatment for imageless links.
 */
import type { ReactNode } from 'react';
import type { DemoBookmark } from './data';
import { FAVICONS } from './data';
import { PlayIcon } from './icons';

/* Deterministic identity tint per key — the app's --avatar-1..8 recipe. */
export function avatarVar(key: string): string {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) % 997;
  return `var(--avatar-${(h % 8) + 1})`;
}

export function FaviconTile({ domain, size = 20 }: { domain: string; size?: number }) {
  const src = FAVICONS[domain.replace(/^www\./, '')];
  if (src) {
    return (
      <img
        src={src}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        className="inline-block shrink-0 rounded-[5px] object-contain"
        style={{ width: size, height: size }}
      />
    );
  }
  const tint = avatarVar(domain);
  const letter = domain.replace(/^www\./, '').charAt(0).toUpperCase();
  return (
    <span
      aria-hidden
      className="inline-flex shrink-0 items-center justify-center rounded-md font-semibold select-none"
      style={{
        width: size,
        height: size,
        background: `color-mix(in oklab, ${tint} 15%, transparent)`,
        color: tint,
        fontSize: size * 0.55,
        lineHeight: 1,
      }}
    >
      {letter}
    </span>
  );
}

export function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd
      className="inline-flex items-center rounded-sm bg-default px-1.5 py-0.5 font-mono text-[11px] leading-none text-muted"
      style={{ fontFamily: 'var(--font-mono-v)' }}
    >
      {children}
    </kbd>
  );
}

/** Standard tag chip + the extension's lavender AI-suggested variant. */
export function TagChip({ label, ai = false }: { label: string; ai?: boolean }) {
  if (ai) {
    return (
      <span
        className="badge-enter inline-flex h-5 items-center rounded-2xl border px-2 text-xs font-medium leading-none"
        style={{ background: '#F5F1FF', borderColor: '#B87EFB', color: '#3b1e6e' }}
        title="AI suggested tag"
      >
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex h-5 items-center rounded-2xl bg-default px-2 text-xs font-medium leading-none text-foreground/80">
      {label}
    </span>
  );
}

/** Real provider marks — the actual ChatGPT / Claude / Gemini icons. */
const PROVIDERS: Record<string, { icon: string; label: string }> = {
  chatgpt: { icon: '/landing/favicons/chatgpt.com.png', label: 'ChatGPT' },
  claude: { icon: '/landing/favicons/claude.ai.png', label: 'Claude' },
  gemini: { icon: '/landing/favicons/gemini.google.com.png', label: 'Gemini' },
};

export function ProviderTile({ provider, size = 22 }: { provider: string; size?: number }) {
  const p = PROVIDERS[provider] ?? PROVIDERS.chatgpt!;
  return (
    <img
      src={p.icon}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className="inline-block shrink-0 rounded-[5px] bg-white object-contain"
      style={{ width: size, height: size }}
    />
  );
}

export function providerLabel(provider?: string): string {
  return provider ? (PROVIDERS[provider]?.label ?? 'AI chat') : 'AI chat';
}

/**
 * Bookmark cover. Real og:image when the page has one (which is what the
 * app renders); otherwise the app's branded-tile fallback. Conversations
 * get a top-aligned two-bubble excerpt derived from that conversation.
 */
export function BrandCover({ bookmark }: { bookmark: DemoBookmark }) {
  if (bookmark.cover) {
    return (
      <div className="relative h-full w-full">
        <img
          src={bookmark.cover}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {bookmark.kind === 'video' && (
          <>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-10 items-center justify-center rounded-full bg-black/60 pl-0.5 text-white backdrop-blur-sm">
                <PlayIcon size={18} />
              </span>
            </span>
            {bookmark.duration && (
              <span className="absolute right-2 bottom-2 rounded-sm bg-black/70 px-1.5 py-0.5 font-mono text-[10px] text-white">
                {bookmark.duration}
              </span>
            )}
          </>
        )}
      </div>
    );
  }

  if (bookmark.kind === 'conversation') {
    const tint = avatarVar(bookmark.domain);
    const reply = (bookmark.description.split(/[.?!]/)[0] ?? '').trim();
    return (
      <div
        className="flex h-full w-full flex-col gap-1.5 p-4"
        style={{ background: `color-mix(in oklab, ${tint} 10%, var(--surface))` }}
      >
        <span className="ml-auto line-clamp-1 max-w-[85%] rounded-xl rounded-br-sm bg-white px-2.5 py-1.5 text-[10px] leading-snug text-foreground/75 shadow-surface">
          {bookmark.title}
        </span>
        <span
          className="mr-auto line-clamp-2 max-w-[85%] rounded-xl rounded-bl-sm px-2.5 py-1.5 text-[10px] leading-snug text-foreground/60 max-sm:hidden"
          style={{ background: `color-mix(in oklab, ${tint} 16%, white)` }}
        >
          {reply}…
        </span>
      </div>
    );
  }

  /* Imageless link — the app's branded tile. */
  const tint = avatarVar(bookmark.domain);
  const letter = bookmark.domain.replace(/^www\./, '').charAt(0);
  return (
    <div
      className="relative flex h-full w-full items-end overflow-hidden p-3.5"
      style={{ background: `color-mix(in oklab, ${tint} 9%, var(--surface))` }}
    >
      <span
        aria-hidden
        className="font-display absolute -top-5 -right-1 leading-none font-medium italic select-none"
        style={{ color: `color-mix(in oklab, ${tint} 28%, transparent)`, fontSize: '7rem' }}
      >
        {letter}
      </span>
    </div>
  );
}
