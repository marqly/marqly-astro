// seo-text.mjs — metadata length guard. The program standard (master §5) is
// title <= 60 and description 140-155. Truncation is at a word boundary, keeps
// the FRONT (titles are query-first, so the head must survive), and adds no
// ellipsis. Used as a safety net in the layouts AND by the title-building
// templates. Never invents copy — only shortens what exists.

/** @param {string} t @param {number} max */
export function clampTitle(t, max = 60) {
  const s = (t || '').replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  // try to cut at the last separator so "Query | Marqly" loses the brand tail, not the query
  for (const sep of [' | ', ' — ', ' – ', ' - ', ' · ']) {
    const i = s.lastIndexOf(sep);
    if (i >= 20 && i <= max) return s.slice(0, i).trim();
  }
  // else hard word boundary
  const cut = s.slice(0, max);
  const sp = cut.lastIndexOf(' ');
  return (sp > max * 0.6 ? cut.slice(0, sp) : cut).trim();
}

/** @param {string} d @param {number} max */
export function clampDesc(d, max = 155) {
  const s = (d || '').replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const sp = cut.lastIndexOf(' ');
  let out = (sp > max * 0.6 ? cut.slice(0, sp) : cut).trim();
  out = out.replace(/[,\-–—:;]\s*$/, '').trim(); // don't end on a dangling comma/dash
  return /[.!?]$/.test(out) ? out : out + '.';
}

/** Query-first + one differentiator + brand, but never over budget. */
export function brandTitle(core, brand = 'Marqly', max = 60) {
  const full = `${core} | ${brand}`;
  if (full.length <= max) return full;
  return clampTitle(core, max);
}
