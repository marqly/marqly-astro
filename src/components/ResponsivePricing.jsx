import { useState, useEffect } from 'react';
import PricingSection from './framer/PricingSection.js';

// Framer breakpoint components don't auto-switch variants when rendered standalone.
// Pick the variant that matches the viewport so mobile shows Framer's real iPhone
// pricing design (not the desktop layout overflowing). The component's internal
// Monthly/Annually toggle still works within the chosen breakpoint.
function pickVariant(w) {
  if (w <= 427) return 'iPhone/ Anually';
  if (w <= 1023) return 'iPad / Anually';
  return 'Desktop / Anually';
}

export default function ResponsivePricing() {
  const [variant, setVariant] = useState(
    pickVariant(typeof window !== 'undefined' ? window.innerWidth : 1440),
  );
  useEffect(() => {
    let last = pickVariant(window.innerWidth);
    setVariant(last);
    const onResize = () => {
      const next = pickVariant(window.innerWidth);
      if (next !== last) {
        last = next;
        setVariant(next); // only re-set when crossing a breakpoint
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return <PricingSection variant={variant} />;
}
