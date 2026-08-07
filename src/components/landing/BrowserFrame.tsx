/**
 * Minimal browser-window chrome for framing reconstructions.
 * Surface + overlay shadow from the app's token system; separator hairline
 * only where the product itself uses one.
 */
import type { ReactNode } from 'react';

export function BrowserFrame({
  url,
  children,
  className = '',
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-surface shadow-frame md:rounded-3xl ${className}`}
    >
      <div className="flex h-10 items-center gap-3 border-b border-separator px-4">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto flex h-6 max-w-[60%] min-w-0 items-center rounded-lg bg-default px-3">
          <span className="truncate text-[11px] text-[#55555e]">{url}</span>
        </span>
        <span aria-hidden className="w-[42px]" />
      </div>
      {children}
    </div>
  );
}
