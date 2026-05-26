import { useState, useEffect } from 'react';
import Footer from './framer/Footer.js';

// Framer Footer has Desktop / Tablet-iPhone14 / iPhone SE variants. Pick by
// viewport so the blog footer matches the live site on every device.
export default function ResponsiveFooter() {
  const [variant, setVariant] = useState('Desktop');
  useEffect(() => {
    const pick = () => {
      const w = window.innerWidth;
      setVariant(w <= 427 ? 'iPhone SE' : w <= 810 ? 'Tablet / iPhone 14' : 'Desktop');
    };
    pick();
    window.addEventListener('resize', pick);
    return () => window.removeEventListener('resize', pick);
  }, []);
  return <Footer variant={variant} />;
}
