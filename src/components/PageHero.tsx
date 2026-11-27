import type { ReactNode } from 'react';
import { SectionTitle } from './SectionTitle';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}

/** Cabeçalho padrão das páginas internas. */
export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-10 pt-32 sm:pb-14 sm:pt-36">
      <div aria-hidden="true" className="absolute inset-0 bg-tech-grid opacity-50" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 glow-soft opacity-60"
      />

      <div className="shell relative">
        <SectionTitle as="h1" eyebrow={eyebrow} title={title} description={lead} />
        {children}
      </div>
    </section>
  );
}
