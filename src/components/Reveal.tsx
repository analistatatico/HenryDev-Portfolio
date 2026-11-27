import type { ElementType, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso em milissegundos, para escalonar listas. */
  delay?: number;
  as?: ElementType;
}

/**
 * Revela o conteúdo ao entrar na viewport.
 * O CSS desativa o efeito automaticamente com `prefers-reduced-motion`.
 */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
