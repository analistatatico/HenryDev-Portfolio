import type { ReactNode } from 'react';

interface TerminalProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

/** Janela de terminal decorativa, usada para exibir snippets de código. */
export function Terminal({ title = 'terminal', children, className = '' }: TerminalProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-edge bg-surface-card shadow-card ${className}`.trim()}
    >
      <div className="flex items-center gap-2 border-b border-edge bg-surface-soft px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand/80" />
        </span>
        <span className="ml-2 font-mono text-xs text-ink-muted">{title}</span>
      </div>

      <div className="overflow-x-auto px-5 py-5 scrollbar-none">{children}</div>
    </div>
  );
}

/** Snippet do objeto `developer` exibido na Hero Section. */
export function DeveloperSnippet() {
  const kw = 'text-[#7AA2F7]';
  const vr = 'text-[#E0AF68]';
  const prop = 'text-brand';
  const str = 'text-[#9ECE6A]';
  const punct = 'text-ink-muted';

  const entries: Array<[string, string]> = [
    ['name', 'Abraão Henrique'],
    ['role', 'Full Stack Developer'],
    ['country', 'Brazil'],
    ['passion', 'Building solutions through code'],
  ];

  return (
    <pre className="font-mono text-[12.5px] leading-[1.9] sm:text-[13.5px]">
      <code>
        <span className={kw}>const</span> <span className={vr}>developer</span>{' '}
        <span className={punct}>= {'{'}</span>
        {'\n'}
        {entries.map(([key, value], index) => (
          <span key={key}>
            {'  '}
            <span className={prop}>{key}</span>
            <span className={punct}>: </span>
            <span className={str}>&quot;{value}&quot;</span>
            <span className={punct}>{index < entries.length - 1 ? ',' : ''}</span>
            {'\n'}
          </span>
        ))}
        <span className={punct}>{'};'}</span>
      </code>
    </pre>
  );
}
