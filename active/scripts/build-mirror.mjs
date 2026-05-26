// Build a true 1:1 mirror of the live Framer site from the captured HTML.
// Writes each captured page.html to public/<route>/index.html so the Cloudflare
// Worker serves it verbatim. Assets/fonts/JS load from framerusercontent CDN
// (immutable hashed URLs). Internal "./x" links are rewritten to "/x".
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const CAP = path.join(ROOT, 'active/logs/capture');
const PUB = path.join(ROOT, 'public');

function routeToFile(routePath) {
  // "/" -> index.html ; "/Pricing" -> Pricing/index.html
  const clean = decodeURIComponent(routePath).replace(/^\/+|\/+$/g, '');
  return clean === '' ? 'index.html' : path.join(clean, 'index.html');
}

// Force-show Framer entrance-animation elements (they start opacity:0 and are
// revealed by scroll JS that doesn't run reliably in the rehosted page).
const REVEAL_CSS = `<style id="mirror-reveal">
[data-framer-appear-id]{opacity:1 !important;transform:none !important;visibility:visible !important;}
.framer-appear,[data-framer-appear-id] *{opacity:1 !important;}
</style>`;

// Framer renders nav items as <a> WITHOUT href and navigates via JS that doesn't
// run in the static mirror. Inject real hrefs + a capture-phase click handler so
// every nav link/logo works as a normal browser link.
const NAV_FIX = `<script id="mirror-navfix">
(function(){
  var map={'Home':'/','Pricing':'/Pricing','Extension':'/Extension','Blog':'/blog'};
  function apply(){
    document.querySelectorAll('a').forEach(function(a){
      var t=(a.textContent||'').replace(/\\s+/g,' ').trim();
      var h=a.getAttribute('href');
      if(map[t] && (!h || h==='./' || h==='/#')) a.setAttribute('href',map[t]);
      // logo: an anchor with no href and no text (icon only) -> home
      if((!h||h==='./') && !t) a.setAttribute('href','/');
    });
  }
  apply();
  new MutationObserver(apply).observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('click',function(e){
    var a=e.target&&e.target.closest?e.target.closest('a'):null;
    if(!a) return;
    var t=(a.textContent||'').replace(/\\s+/g,' ').trim();
    if(map[t]){ e.preventDefault(); e.stopImmediatePropagation(); location.assign(map[t]); }
  },true);
})();
</script>`;

function fixHtml(html) {
  let out = html;
  // Rewrite Framer relative nav links "./X" -> "/X" (so they work from nested routes)
  out = out.replace(/href="\.\//g, 'href="/');
  // Neutralise any domain-canonical redirect script Framer injects (keeps us on our host).
  out = out.replace(/location\.host[^<]*?marqly\.com[^<]*?(?=<\/script>)/gi, '/* redirect neutralised */');
  // Inject the reveal override at the very end of <head> so it wins specificity/order.
  out = out.replace(/<\/head>/i, `${REVEAL_CSS}</head>`);
  // Inject the navigation fix just before </body>.
  out = out.replace(/<\/body>/i, `${NAV_FIX}</body>`);
  return out;
}

async function main() {
  const { pages } = JSON.parse(await readFile(path.join(__dirname, 'urls.json'), 'utf8'));
  let n = 0;
  for (const { url, slug } of pages) {
    const src = path.join(CAP, slug, 'page.html');
    if (!existsSync(src)) { console.warn(`! missing ${slug}`); continue; }
    const route = new URL(url).pathname;
    const rel = routeToFile(route);
    const dest = path.join(PUB, rel);
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, fixHtml(await readFile(src, 'utf8')));
    console.log(`✓ ${route}  ->  public/${rel}`);
    n++;
  }
  console.log(`\nMirrored ${n} pages into public/.`);
}
main().catch((e) => { console.error(e); process.exit(1); });
