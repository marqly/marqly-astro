# Rehearsal: main product showcases

Reviewed 2026-11-01 in local desktop Chrome, with emulated viewport widths.

## Reference and composition

Gold: stageshow `hero-demo` (measured targets, cursor presses, a held payoff)
and `ai-chat` (typed question, streamed answer, complete poster). The runtime
core was copied into `stageshow/`; the existing Marqly components and imagery
were retained rather than replacing them with the gold's fictional product.
Gold captures: `/tmp/stageshow-gold.png`, `/tmp/stageshow-gold-poster.png`.

- Hero: save and tag → type and send → cited answer → approve the retained
  proposal card → open the Japan board and its card view. Plays once and
  holds; Replay is the explicit reset. The compact scene is Ask at full width,
  with shorter identifiable bookmark names in the approval record.
- Connected Apps: measured press on Cursor's permission switch → Can edit.
  Settings sit over the library on desktop. The four Ask tabs tour once with
  longer per-pane reading time; choosing a tab stops the tour.
- Highlighter: one deliberate mint-marker press changes the existing passage.
  The real swatches take over on interaction; repeated choices are supported.
- YouTube: chapter seek → contextual chat → selected transcript line; the
  time and progress respond to chapter/transcript clicks. The tour holds its
  result. The compact player uses a shorter title.

## Evidence and validation

Final/poster screenshots: `/tmp/hero-{1440,390}.png`,
`/tmp/ask-{1440,390}.png`, `/tmp/highlighter-{1440,390}.png`,
`/tmp/youtube-{1440,390}.png`. Live hero payoff:
`/tmp/hero-live-payoff.png`. Captures dismiss the unrelated YouCal promotion
through the same stored preference as its close control.

Typecheck: 0 errors, 0 warnings (20 existing hints). Production build passed.
The browser assertions also passed against the production build served locally.

Browser interaction assertions passed at 320, 390, 768 and 1440: no page
horizontal overflow; two successive highlighter choices and the rendered
marker color; chapter and transcript seeking; keyboard tabs; hero replay,
final hold and a runtime switch to reduced motion; no page/console errors.
The tablet run exposed and fixed the Search section's grid-item minimum width.

A fresh-eye review inspected the gold and the eight poster images. Its
findings led to shorter compact bookmark titles/player metadata, a tighter
transcript panel, a larger permission panel over visible library context,
removal of the stranded mobile Pro label, and less empty space in the marker
card. Native multiline highlights remain inline selections, with the original
passage retained.

Full hero contact sheets: `/tmp/hero-motion.png`,
`/tmp/hero-phone-motion.png`, `/tmp/hero-final-motion.png`. The automated
motion scans were **inconclusive**, not a clean gate pass: 17–34 sampling gaps
exceeded the verifier's ~27ms threshold. Additional candidates included the
embedded chat card's intentional space above the bottom composer and
truncated-title geometry. The first harness also stamped an SSR element
before hydration, producing a verifier-induced attribute mismatch; ordinary
browser assertions report no hydration errors. The local harness was adjusted
to wait for hydration and dismiss the cross-promotion.

Visible issues corrected during rehearsal: Tailwind/kit reset conflict,
clipped tool-pill line height, overlapping source favicons, compact title
truncation, clipped final library row, duplicated proposal-card handoff,
control/icon pops on approval, and a second shadow under the permission panel.

## Limits

No physical touch device, Safari, Firefox, or throttled-device frame-rate pass.
Highlighter state capture: `/tmp/highlighter-states.png`; its never-intentional
geometry gate printed rehearsal passed, while overall coverage remained
inconclusive. The full automated motion gate remains inconclusive; contact sheets and
functional assertions do not prove every intermediate animation frame.
The other extension/library/organizer demos were inspected in the source audit
but were not redesigned or given an end-to-end browser rehearsal in this pass.

## Follow-up: Connected Apps modal

At the user's request, Connected Apps is now centered as a modal over a
35% black translucent cover across the product viewport. The library remains
visible beneath it. This supersedes the earlier top-right composition.
Production build passed; desktop/phone captures are
`/tmp/ask-modal-1440.png` and `/tmp/ask-modal-390.png`.
