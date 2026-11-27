import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import type { TimelineEntry } from '../data/experience';

const ICONS = {
  work: Briefcase,
  education: GraduationCap,
  course: Award,
} as const;

interface TimelineProps {
  entries: TimelineEntry[];
  /** Variante densa, usada para a lista de cursos. */
  dense?: boolean;
}

export function Timeline({ entries, dense = false }: TimelineProps) {
  const { language, t } = useLanguage();

  return (
    <ol className="relative space-y-5 pl-8 sm:pl-10">
      <span
        aria-hidden="true"
        className="timeline-line absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px sm:left-[19px]"
      />

      {entries.map((entry) => {
        const Icon = ICONS[entry.kind];
        const activities = entry.activities?.[language];

        return (
          <li key={entry.id} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-8 top-5 grid h-8 w-8 place-items-center rounded-full border border-edge bg-surface-card text-brand sm:-left-10"
            >
              <Icon size={14} />
            </span>

            <div className="card-interactive p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                    {entry.title[language]}
                  </h3>
                  <p className="mt-1 text-sm text-brand">{entry.organization}</p>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2">
                  {entry.period !== '—' ? (
                    <span className="chip">{entry.period}</span>
                  ) : null}
                  {entry.current ? (
                    <span className="chip-brand">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-brand"
                      />
                      {t.experience.current}
                    </span>
                  ) : null}
                </div>
              </div>

              {entry.description && !dense ? (
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {entry.description[language]}
                </p>
              ) : null}

              {activities && activities.length > 0 && !dense ? (
                <div className="mt-5">
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink">
                    {t.experience.activitiesTitle}
                  </h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand"
                        />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {entry.tags && entry.tags.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {entry.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
