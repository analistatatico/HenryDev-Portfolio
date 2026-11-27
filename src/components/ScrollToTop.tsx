import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePrefersReducedMotion } from '../hooks/useReveal';

/** Leva a janela ao topo a cada troca de rota. */
export function ScrollToTop() {
  const { pathname } = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [pathname, prefersReducedMotion]);

  return null;
}
