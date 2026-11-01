/**
 * Full-width YouTube showcase — a real watch-page moment connected to
 * Marqly's AI card. A chapter seek updates the player; the tour then carries
 * that chapter into Chat and Transcript, where individual lines can seek too.
 * The automatic tour plays once and holds on its transcript payoff.
 */
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from './stageshow/reduced-motion';
import { FaviconTile } from './bits';
import { PlayIcon, HighlighterIcon } from './icons';

const TABS = ['Summary', 'Chat', 'Transcript'] as const;
type Tab = (typeof TABS)[number];

const CHAPTERS = [
  { time: '1:11:04', label: 'The Tic Tac UFO story' },
  { time: '1:59:52', label: 'Tic Tac UFO details' },
  { time: '2:07:55', label: 'What do you think the Tic Tac was?' },
] as const;

const TRANSCRIPT = [
  { time: '1:12:40', line: 'It looks like a white Tic Tac, about the size of our airplane.' },
  { time: '1:13:05', line: 'No wings, no rotors, no exhaust plume.' },
  { time: '1:13:31', line: 'As we start coming down, it starts mirroring us.' },
] as const;

const EASE = [0.32, 0.72, 0, 1] as const;
const DURATION_SECONDS = 3 * 60 * 60 + 56 * 60 + 24;

function seconds(time: string) {
  return time.split(':').reduce((total, part) => total * 60 + Number(part), 0);
}

function tabId(tab: Tab) {
  return `youtube-ai-${tab.toLowerCase()}`;
}

export default function YouTubeShowcase({ bare = false }: { bare?: boolean }) {
  // The SSR/reduced-motion poster is the complete, playback-synced result.
  const [tab, setTab] = useState<Tab>('Transcript');
  const [pinned, setPinned] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>(TRANSCRIPT[2].time);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(CHAPTERS[0].time);
  const [selectedTranscript, setSelectedTranscript] = useState<number | null>(2);
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTour = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const seekChapter = (time: string) => {
    clearTour();
    setPinned(true);
    setSelectedChapter(time);
    setSelectedTranscript(null);
    setCurrentTime(time);
  };

  const seekTranscript = (index: number) => {
    clearTour();
    setPinned(true);
    setSelectedTranscript(index);
    setCurrentTime(TRANSCRIPT[index]!.time);
  };

  const pick = (next: Tab) => {
    clearTour();
    setPinned(true);
    setTab(next);
  };

  useEffect(() => {
    if (reduce) {
      clearTour();
      setTab('Transcript');
      setSelectedChapter(CHAPTERS[0].time);
      setSelectedTranscript(2);
      setCurrentTime(TRANSCRIPT[2].time);
      return;
    }
    if (pinned || played.current) return;

    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || played.current) return;
        played.current = true;
        setTab('Summary');
        setSelectedChapter(null);
        setSelectedTranscript(null);
        setCurrentTime('0:00');

        // One complete tour: seek a chapter, ask about it, then open the
        // matching transcript context and leave the result on screen.
        timers.current.push(
          setTimeout(() => {
            setSelectedChapter(CHAPTERS[0].time);
            setCurrentTime(CHAPTERS[0].time);
          }, 2200),
          setTimeout(() => setTab('Chat'), 5200),
          setTimeout(() => {
            setTab('Transcript');
            setSelectedTranscript(0);
            setCurrentTime(TRANSCRIPT[0].time);
          }, 9300)
        );
        io.disconnect();
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTour();
    };
  }, [reduce, pinned]);

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault();
    const current = TABS.indexOf(tab);
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? TABS.length - 1
          : (current + (event.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length;
    const next = TABS[nextIndex]!;
    pick(next);
    rootRef.current?.querySelector<HTMLButtonElement>(`#${tabId(next)}`)?.focus();
  };

  const progress = `${Math.min(100, (seconds(currentTime) / DURATION_SECONDS) * 100)}%`;

  return (
    <div
      ref={rootRef}
      data-showcase="youtube"
      className={bare ? '' : 'rounded-3xl p-3 sm:p-6'}
      style={bare ? undefined : { background: 'color-mix(in oklab, var(--hl-coral) 24%, white)' }}
    >
      <div className="grid grid-cols-1 items-stretch gap-3 sm:gap-4 md:grid-cols-[1.1fr_1fr] md:gap-5">
        <div className="flex min-h-[230px] flex-col overflow-hidden rounded-2xl bg-black sm:min-h-[280px] md:min-h-0">
          <div className="relative aspect-video md:aspect-auto md:flex-1">
            <img
              src="/landing/covers/lex-fravor.webp"
              alt="Lex Fridman Podcast #122 with David Fravor"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-11 w-14 items-center justify-center rounded-xl bg-[#f03] text-white shadow-lg sm:h-12 sm:w-16">
                <PlayIcon size={22} />
              </span>
            </span>
            <div className="absolute right-0 bottom-0 left-0 px-3 pb-2" aria-label={`Paused at ${currentTime}`}>
              <div className="h-[3px] overflow-hidden rounded-full bg-white/25">
                <motion.div
                  className="h-full rounded-full bg-[#f03]"
                  animate={{ width: progress }}
                  transition={{ duration: reduce ? 0 : 0.55, ease: EASE }}
                />
              </div>
            </div>
          </div>
          <div className="flex min-h-12 items-center gap-2.5 px-3 py-2.5 sm:p-3.5">
            <FaviconTile domain="youtube.com" size={16} />
            <p className="line-clamp-2 min-w-0 flex-1 text-[12px] leading-4 font-medium text-white/90 sm:line-clamp-1 sm:text-[13px]">
              <span className="sm:hidden">David Fravor · Lex Fridman #122</span><span className="max-sm:hidden">David Fravor: UFOs, Aliens, Fighter Jets, and Aerospace Engineering | Lex Fridman Podcast #122</span>
            </p>
            <span className="shrink-0 text-[10px] tabular-nums text-white/60 sm:text-[11px]">
              {currentTime}<span className="max-sm:hidden"> / 3:56:24</span>
            </span>
          </div>
        </div>

        <div className="flex min-h-[270px] flex-col rounded-2xl bg-surface p-3.5 shadow-surface sm:min-h-[270px] sm:p-5">
          <div
            role="tablist"
            aria-label="Marqly AI card tabs"
            className="grid grid-cols-3 gap-1.5 sm:flex sm:items-center"
            onKeyDown={onTabKeyDown}
          >
            {TABS.map((item) => (
              <button
                key={item}
                id={tabId(item)}
                type="button"
                role="tab"
                aria-selected={tab === item}
                aria-controls={`${tabId(item)}-panel`}
                tabIndex={tab === item ? 0 : -1}
                onClick={() => pick(item)}
                className={`min-w-0 cursor-pointer rounded-3xl px-2 py-1 text-[11px] font-medium transition-colors duration-150 sm:px-3 sm:text-xs ${
                  tab === item
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-default text-foreground/70 hover:text-foreground'
                }`}
              >
                {item}
              </button>
            ))}
            <span className="ml-auto text-[10px] font-medium tracking-wide text-muted uppercase max-sm:hidden">
              AI card
            </span>
          </div>

          <div className="relative mt-3 min-h-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                id={`${tabId(tab)}-panel`}
                role="tabpanel"
                aria-labelledby={tabId(tab)}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.24, ease: EASE }}
                className="absolute inset-0"
              >
                {tab === 'Summary' && <SummaryPane selected={selectedChapter} onSeek={seekChapter} />}
                {tab === 'Chat' && <ChatPane chapter={selectedChapter ?? CHAPTERS[0].time} />}
                {tab === 'Transcript' && <TranscriptPane selected={selectedTranscript} onSeek={seekTranscript} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryPane({ selected, onSeek }: { selected: string | null; onSeek: (time: string) => void }) {
  return (
    <div>
      <p className="text-[12px] leading-[1.55] text-foreground/85 sm:text-[13px] sm:leading-relaxed">
        <b className="font-semibold">TL;DR</b> Cmdr. David Fravor on the 2004 Nimitz encounter: a white tic-tac shaped object that outmaneuvered two F/A-18s, plus carrier flying and staying skeptical.
      </p>
      <ul className="mt-2.5 space-y-1">
        {CHAPTERS.map((chapter) => {
          const active = selected === chapter.time;
          return (
            <li key={chapter.time}>
              <button
                type="button"
                onClick={() => onSeek(chapter.time)}
                aria-pressed={active}
                className={`flex w-full cursor-pointer items-baseline gap-2 rounded-lg px-2 py-1.5 text-left text-[11px] transition-colors sm:text-xs ${
                  active ? 'bg-default text-foreground' : 'text-muted hover:bg-default/60 hover:text-foreground'
                }`}
              >
                <span className="w-12 shrink-0 text-right text-[10px] font-semibold tabular-nums text-foreground/65">
                  {chapter.time}
                </span>
                <span className="min-w-0 leading-4">{chapter.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ChatPane({ chapter }: { chapter: string }) {
  return (
    <div className="flex h-full flex-col gap-2.5">
      <p className="ml-auto max-w-[90%] rounded-[16px] rounded-br-md bg-default/70 px-3 py-1.5 text-[12px] leading-relaxed text-foreground/85">
        what happened when he tried to intercept it?
      </p>
      <p className="text-[12px] leading-relaxed text-muted">
        As Fravor descended, the object mirrored his aircraft. When he cut across the circle to close in, it accelerated and was gone in under a second. The Princeton reacquired it about 60 miles away.
      </p>
      <p className="mt-auto flex items-center gap-1.5 text-[10px] text-muted">
        <span className="rounded bg-default px-1.5 py-0.5 font-semibold tabular-nums text-foreground/70">{chapter}</span>
        answered from this chapter
      </p>
    </div>
  );
}

function TranscriptPane({ selected, onSeek }: { selected: number | null; onSeek: (index: number) => void }) {
  return (
    <div className="flex h-full flex-col">
      <ul className="space-y-1">
        {TRANSCRIPT.map((row, index) => {
          const active = selected === index;
          return (
            <li key={row.time}>
              <button
                type="button"
                onClick={() => onSeek(index)}
                aria-pressed={active}
                className={`flex w-full cursor-pointer items-start gap-2 rounded-xl px-2 py-2 text-left text-[11px] leading-[1.45] transition-colors sm:text-[12px] ${
                  active ? 'bg-marker/45 text-foreground' : 'text-foreground/75 hover:bg-default/60'
                }`}
              >
                <span className="w-12 shrink-0 pt-px text-right text-[10px] font-semibold tabular-nums text-foreground/60">
                  {row.time}
                </span>
                <span className="min-w-0">{row.line}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-auto flex items-center gap-1.5 pt-2 text-[10px] text-muted">
        <HighlighterIcon size={11} />
        click a line to seek · saved with the bookmark
      </p>
    </div>
  );
}
