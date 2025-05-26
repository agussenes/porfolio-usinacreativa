// src/hooks/useIsotope.js
import { useEffect } from 'react';
import Isotope from 'isotope-layout';

export default function useIsotope(containerRef, itemSelector, filter) {
  useEffect(() => {
    if (!containerRef.current) return;

    const iso = new Isotope(containerRef.current, {
      itemSelector,
      layoutMode: 'fitRows',
      transitionDuration: '0.5s',
    });

    if (filter === 'Todos') {
      iso.arrange({ filter: '*' });
    } else {
      iso.arrange({ filter: `.${filter.toLowerCase().replaceAll(' ', '-')}` });
    }

    return () => iso.destroy();
  }, [containerRef, itemSelector, filter]);
}
