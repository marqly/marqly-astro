/**
 * Hand-drawn inline icon set for the landing reconstructions.
 * 24-unit grid, 1.7 stroke, round caps — matches the product's responsive
 * lucide stroke treatment (lib/icons: ≤16px → 1.5, larger → 1.8).
 */
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base(size: number, props: SVGProps<SVGSVGElement>) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: size <= 16 ? 1.5 : 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  };
}

export const BookmarkIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M17 3.5H7a2 2 0 0 0-2 2v15l7-4.2 7 4.2v-15a2 2 0 0 0-2-2z" />
  </svg>
);

export const SearchIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m16.6 16.6 4.4 4.4" />
  </svg>
);

export const FolderIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M3 7a2 2 0 0 1 2-2h4.2l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

export const ChevronDownIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m6 9.5 6 6 6-6" />
  </svg>
);

export const ChevronRightIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m9.5 6 6 6-6 6" />
  </svg>
);

export const CheckIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m5 13.2 4.2 4.2L19 7" />
  </svg>
);

export const XIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5" />
  </svg>
);

export const PlusIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M12 5.5v13M5.5 12h13" />
  </svg>
);

export const SparklesIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M12 4.5 13.8 9.7 19 11.5l-5.2 1.8L12 18.5l-1.8-5.2L5 11.5l5.2-1.8z" />
    <path d="M18.6 3.5l.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7z" strokeWidth="1.3" />
  </svg>
);

export const PlayIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)} fill="currentColor" stroke="none">
    <path d="M8.5 5.8a1 1 0 0 1 1.5-.86l10 6.06a1 1 0 0 1 0 1.72l-10 6.06a1 1 0 0 1-1.5-.86z" />
  </svg>
);

export const TagIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M20.6 13.3 13.3 20.6a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 3 12.2V5a2 2 0 0 1 2-2h7.2a2 2 0 0 1 1.4.6l7 7a2 2 0 0 1 0 2.7z" />
    <circle cx="8.2" cy="8.2" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const ArrowRightIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M4.5 12h15m-6.5-6.5L19.5 12 13 18.5" />
  </svg>
);

export const ReplayIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M3.5 12a8.5 8.5 0 1 0 2.5-6L3.5 8.4" />
    <path d="M3.5 3.5v4.9h4.9" />
  </svg>
);

export const DotsIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)} fill="currentColor" stroke="none">
    <circle cx="5.5" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="18.5" cy="12" r="1.5" />
  </svg>
);

export const HighlighterIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m9.5 10.5 5-5 4 4-5 5-4.6.6z" />
    <path d="m9.5 10.5-1.4 4 .8.8 4-1.4" />
    <path d="M4 20.5h7" />
  </svg>
);

export const GridIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" />
  </svg>
);

export const RowsIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M4.5 6.5h15M4.5 12h15M4.5 17.5h15" />
  </svg>
);

export const MessageIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M21 11.6a8.4 8.4 0 0 1-8.5 8.3 8.9 8.9 0 0 1-3.2-.6L4 20.5l1.3-4.1a8 8 0 0 1-1.3-4.8A8.4 8.4 0 0 1 12.5 3.3 8.4 8.4 0 0 1 21 11.6z" />
  </svg>
);

export const ArticleIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <rect x="4.5" y="3.5" width="15" height="17" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h4.5" />
  </svg>
);

export const DownloadIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M12 3.5V15m-5-4.5 5 4.9 5-4.9" />
    <path d="M4.5 20.5h15" />
  </svg>
);

export const NoteIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M5 4.5h14a1 1 0 0 1 1 1V15l-5.5 5.5H5a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1z" />
    <path d="M14.5 20.5V15H20" />
  </svg>
);

export const CodeIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m8.5 7.5-5 4.5 5 4.5m7-9 5 4.5-5 4.5" />
  </svg>
);

export const PenNibIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m12 4 6 3.5-1.5 8-4.5 4.5L7.5 15.5 6 7.5z" />
    <circle cx="12" cy="12.5" r="1.6" />
  </svg>
);

/* ------------------------------------------------------------------------ *
 * Real app glyphs — ported verbatim from the product's own sidebar SVGs
 * (apps/web/components/icons/{All bookmarks,Articles,Highlights}.svg),
 * recolored to currentColor. 16-unit grid, 1.5 stroke.
 * ------------------------------------------------------------------------ */

type GlyphProps = SVGProps<SVGSVGElement> & { size?: number };

function glyphBase(size: number, props: SVGProps<SVGSVGElement>) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 16 16',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  };
}

export const AllBookmarksGlyph = ({ size = 16, ...p }: GlyphProps) => (
  <svg {...glyphBase(size, p)}>
    <path d="M7.99998 14.6663C4.31808 14.6663 1.33331 11.6815 1.33331 7.99968C1.33331 6.13798 2.09641 4.45452 3.32689 3.24502M7.99998 14.6663C7.35798 14.1906 7.46045 13.6367 7.78251 13.0828C8.27771 12.2313 8.27771 12.2313 8.27771 11.0959C8.27771 9.96061 8.95238 9.42828 11.3333 9.90441C12.4031 10.1184 13.1827 8.64028 14.5715 9.12834M7.99998 14.6663C11.2972 14.6663 14.0353 12.2727 14.5715 9.12834M3.32689 3.24502C3.89309 3.30477 4.21009 3.6081 4.73662 4.16445C5.73625 5.22069 6.73585 5.30882 7.40231 4.95674C8.40191 4.42863 7.56191 3.57321 8.73511 3.10833C9.45438 2.82335 9.59145 2.077 9.25105 1.4502M3.32689 3.24502C4.52995 2.06248 6.17977 1.33301 7.99998 1.33301C8.42758 1.33301 8.84578 1.37327 9.25105 1.4502M14.5715 9.12834C14.634 8.76148 14.6666 8.38441 14.6666 7.99968C14.6666 4.74539 12.3349 2.03571 9.25105 1.4502" />
  </svg>
);

export const ArticlesGlyph = ({ size = 16, ...p }: GlyphProps) => (
  <svg {...glyphBase(size, p)}>
    <path d="M3.55553 2.00001C5.19584 1.99771 6.77898 2.59139 7.99998 3.66667V14C6.77898 12.9247 5.19584 12.3311 3.55553 12.3333C2.51419 12.3333 1.99353 12.3333 1.76349 12.1861C1.62538 12.0977 1.56895 12.0413 1.48055 11.9031C1.33331 11.6731 1.33331 11.2627 1.33331 10.4419V4.26881C1.33331 3.31695 1.33331 2.84103 1.69914 2.45524C2.06497 2.06945 2.43947 2.04955 3.18846 2.00973C3.30998 2.00327 3.43237 2.00001 3.55553 2.00001Z" />
    <path d="M12.4445 2.00001C10.8041 1.99771 9.221 2.59139 8 3.66667V14C9.221 12.9247 10.8041 12.3311 12.4445 12.3333C13.4858 12.3333 14.0065 12.3333 14.2365 12.1861C14.3746 12.0977 14.431 12.0413 14.5194 11.9031C14.6667 11.6731 14.6667 11.2627 14.6667 10.4419V4.26881C14.6667 3.31695 14.6667 2.84103 14.3009 2.45524C13.935 2.06945 13.5605 2.04955 12.8115 2.00973C12.69 2.00327 12.5676 2.00001 12.4445 2.00001Z" />
  </svg>
);

export const HighlightsGlyph = ({ size = 16, ...p }: GlyphProps) => (
  <svg {...glyphBase(size, p)}>
    <path d="M10.3333 4.66699H5.66667M8.33267 7.33366H5.66602" />
    <path d="M13.3334 14.6663H4.00002C3.26364 14.6663 2.66669 14.0694 2.66669 13.333M2.66669 13.333C2.66669 12.5966 3.26364 11.9997 4.00002 11.9997H13.3334V3.99968C13.3334 2.74259 13.3334 2.11405 12.9428 1.72353C12.5523 1.33301 11.9238 1.33301 10.6667 1.33301H6.66669C4.78107 1.33301 3.83826 1.33301 3.25247 1.91879C2.66669 2.50458 2.66669 3.44739 2.66669 5.33301V13.333Z" />
    <path d="M13 12C13 12 12.3333 12.5085 12.3333 13.3333C12.3333 14.1581 13 14.6667 13 14.6667" />
  </svg>
);
