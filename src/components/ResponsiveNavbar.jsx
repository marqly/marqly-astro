import { useState, useEffect } from 'react';
import Navbar from './framer/Navbar.js';

// The Framer Navbar has desktop + Mobile variants but doesn't auto-switch
// standalone. Pick the Mobile variant on small screens so the blog header is
// Framer's real mobile nav (hamburger) — same design, fully responsive.
export default function ResponsiveNavbar({ desktopVariant = 'Desktop / Home' }) {
  const [variant, setVariant] = useState(desktopVariant);
  useEffect(() => {
    const pick = () => setVariant(window.innerWidth <= 810 ? 'Mobile' : desktopVariant);
    pick();
    window.addEventListener('resize', pick);
    return () => window.removeEventListener('resize', pick);
  }, [desktopVariant]);
  return <Navbar variant={variant} />;
}
