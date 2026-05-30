/* ------------------------------------------------------------------ *
 * Mobile nav menu for the static Framer-capture pages.
 *
 * The captures render the desktop nav links, which mobile-fixes.css hides
 * on phones to stop overflow. That left no mobile navigation, so this
 * script adds a hamburger button + dropdown that reuses the page's own
 * nav links (so destinations + current-page state always match). Runs on
 * every static page for consistent navigation. Desktop is untouched —
 * the button only shows under 600px (see mobile-fixes.css).
 *
 * Stopgap until these pages are rebuilt as Astro on the shared
 * BaseLayout + ResponsiveNavbar.
 * ------------------------------------------------------------------ */
(function () {
  function init() {
    if (document.querySelector('.mobile-hamburger')) return; // idempotent
    var nav = document.querySelector('[data-framer-name="Components / Navbar"]');
    if (!nav) return;

    // Reuse the real nav links (skip any without a destination, e.g. Help).
    var menu = nav.querySelector('[data-framer-name="Menu"]');
    var links = [];
    if (menu) {
      menu.querySelectorAll('a').forEach(function (a) {
        var text = (a.textContent || '').trim();
        var href = a.getAttribute('href');
        if (text && href) {
          links.push({ text: text, href: href, current: a.getAttribute('data-framer-page-link-current') === 'true' });
        }
      });
    }
    if (!links.length) {
      links = [
        { text: 'Home', href: '/' },
        { text: 'Pricing', href: '/Pricing' },
        { text: 'Extension', href: '/Extension' },
        { text: 'Blog', href: '/blog' }
      ];
    }
    // De-dupe by label.
    var seen = {};
    links = links.filter(function (l) { if (seen[l.text]) return false; seen[l.text] = 1; return true; });

    // Hamburger button. Insert it just before the logo, inside the logo's
    // own flex row (the real horizontal header row), so it sits at the left
    // of the header rather than in the column wrapper above it.
    var logo = nav.querySelector('[data-framer-name="Logo"]');
    var btn = document.createElement('button');
    btn.className = 'mobile-hamburger';
    btn.setAttribute('aria-label', 'Open menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';

    // Dropdown panel + backdrop. Build links with safe DOM methods (no innerHTML).
    var panel = document.createElement('nav');
    panel.className = 'mobile-menu-panel';
    panel.setAttribute('aria-label', 'Site menu');
    links.forEach(function (l) {
      var a = document.createElement('a');
      a.setAttribute('href', l.href);
      a.textContent = l.text;
      if (l.current) a.setAttribute('aria-current', 'page');
      panel.appendChild(a);
    });
    var backdrop = document.createElement('div');
    backdrop.className = 'mobile-menu-backdrop';

    function position() {
      var r = nav.getBoundingClientRect();
      panel.style.top = Math.max(8, r.bottom + 8) + 'px';
    }
    function close() {
      document.body.classList.remove('mobile-menu-open');
      btn.setAttribute('aria-expanded', 'false');
    }
    function toggle() {
      var open = !document.body.classList.contains('mobile-menu-open');
      if (open) position();
      document.body.classList.toggle('mobile-menu-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    btn.addEventListener('click', toggle);
    backdrop.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    if (logo && logo.parentElement) {
      logo.parentElement.insertBefore(btn, logo);
    } else {
      var row = nav.querySelector('[data-framer-name^="Desktop /"]') || nav.firstElementChild;
      if (row) row.insertBefore(btn, row.firstChild);
    }
    document.body.appendChild(backdrop);
    document.body.appendChild(panel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
