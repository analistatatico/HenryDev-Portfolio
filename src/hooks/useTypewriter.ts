import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './useReveal';

interface TypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}

/**
 * Animação de digitação cíclica.
 * Com `prefers-reduced-motion`, exibe o primeiro texto completo e estático.
 */
export function useTypewriter(words: string[], options: TypewriterOptions = {}) {
  const { typeSpeed = 75, deleteSpeed = 38, holdTime = 1900 } = options;
  const prefersReducedMotion = usePrefersReducedMotion();

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) return;

    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      const timeout = window.setTimeout(() => setDeleting(true), holdTime);
      return () => window.clearTimeout(timeout);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((index) => (index + 1) % words.length);
      return;
    }

    const timeout = window.setTimeout(
      () => {
        setText((previous) =>
          deleting ? current.slice(0, previous.length - 1) : current.slice(0, previous.length + 1),
        );
      },
      deleting ? deleteSpeed : typeSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, holdTime, prefersReducedMotion]);

  // Reinicia quando a lista muda (ex.: troca de idioma).
  useEffect(() => {
    setText('');
    setDeleting(false);
    setWordIndex(0);
  }, [words]);

  if (prefersReducedMotion) {
    return { text: words[0] ?? '', isStatic: true };
  }

  return { text, isStatic: false };
}
