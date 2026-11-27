import type { ReactNode } from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
  action?: ReactNode;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Heading = 'h2',
  action,
}: SectionTitleProps) {
  const centered = align === 'center';

  return (
    <div
      className={[
        'flex w-full gap-6',
        centered
          ? 'flex-col items-center text-center'
          : 'flex-col items-start sm:flex-row sm:items-end sm:justify-between',
      ].join(' ')}
    >
      <div className={centered ? 'max-w-2xl' : 'max-w-2xl'}>
        {eyebrow ? (
          <p className="eyebrow mb-3 flex items-center gap-2">
            <span aria-hidden="true" className="inline-block h-px w-6 bg-brand/60" />
            {eyebrow}
          </p>
        ) : null}

        <Heading
          className={
            Heading === 'h1'
              ? 'text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl'
              : 'text-2xl font-bold leading-[1.15] sm:text-3xl lg:text-[2.25rem]'
          }
        >
          {title}
        </Heading>

        {description ? (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
            {description}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
