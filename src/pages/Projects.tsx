import { useMemo, useState } from 'react';
import { FolderPlus } from 'lucide-react';
import { Seo } from '../components/Seo';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { useLanguage } from '../hooks/useLanguage';
import { projects, type ProjectCategory } from '../data/projects';

type Filter = 'all' | ProjectCategory;

const FILTERS: Filter[] = ['all', 'frontend', 'backend', 'database', 'mobile', 'automation'];

export function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');

  const visibleProjects = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );

  const countFor = (value: Filter) =>
    value === 'all'
      ? projects.length
      : projects.filter((project) => project.categories.includes(value)).length;

  return (
    <div>
      <Seo title={t.seo.projects.title} description={t.seo.projects.description} path="#/projects" />

      <PageHero eyebrow={t.projects.eyebrow} title={t.projects.title} lead={t.projects.lead}>
        {/* Filtros */}
        <div
          role="group"
          aria-label={t.projects.filterLabel}
          className="mt-10 flex flex-wrap gap-2"
        >
          {FILTERS.map((value) => {
            const active = filter === value;
            const count = countFor(value);

            return (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                aria-pressed={active}
                className={[
                  'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
                  active
                    ? 'border-brand/45 bg-brand/10 text-brand'
                    : 'border-edge bg-surface-soft text-ink-muted hover:border-brand/30 hover:text-ink',
                ].join(' ')}
              >
                {t.projects.filters[value]}
                <span
                  className={[
                    'font-mono text-[11px]',
                    active ? 'text-brand/70' : 'text-ink-muted/70',
                  ].join(' ')}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </PageHero>

      <section className="section pt-4">
        <div className="shell">
          {visibleProjects.length === 0 ? (
            <div className="card p-12 text-center text-sm text-ink-muted">{t.projects.empty}</div>
          ) : (
            <ul className="grid gap-6 lg:grid-cols-2">
              {visibleProjects.map((project, index) => (
                <Reveal
                  key={`${filter}-${project.id}`}
                  delay={index * 70}
                  as="li"
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </Reveal>
              ))}

              {/* Espaço preparado para novos projetos */}
              <Reveal delay={visibleProjects.length * 70} as="li" className="h-full">
                <div className="flex h-full min-h-[260px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-edge bg-surface-soft/40 p-8 text-center transition-colors hover:border-brand/30">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-edge bg-surface-card text-brand">
                    <FolderPlus size={18} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {t.projects.moreSoon.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
                    {t.projects.moreSoon.text}
                  </p>
                </div>
              </Reveal>
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
