import { ExternalLink, Github, Lock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  /** Modo compacto: usado na seção de destaques da Home. */
  compact?: boolean;
}

const STATUS_STYLES: Record<Project['status'], string> = {
  production: 'border-brand/35 bg-brand/10 text-brand',
  development: 'border-[#febc2e]/35 bg-[#febc2e]/10 text-[#febc2e]',
  concept: 'border-edge bg-surface-soft text-ink-muted',
  internal: 'border-[#7AA2F7]/35 bg-[#7AA2F7]/10 text-[#7AA2F7]',
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const { language, t } = useLanguage();

  const features = project.features[language];
  const visibleFeatures = compact ? [] : features.slice(0, 6);
  const remainingFeatures = features.length - visibleFeatures.length;

  return (
    <article className="card-interactive group flex h-full flex-col overflow-hidden">
      {/* Cover */}
      <div className="relative h-40 overflow-hidden border-b border-edge bg-surface-soft sm:h-44">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="relative h-full w-full">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-tech-grid opacity-70"
              style={{ maskImage: 'none', WebkitMaskImage: 'none' }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 glow-soft opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="absolute inset-0 grid place-items-center">
              <span className="font-display text-3xl font-bold tracking-[0.2em] text-gradient sm:text-4xl">
                {project.cover}
              </span>
            </span>
          </div>
        )}

        <div className="absolute left-4 top-4 flex gap-2">
          <span
            className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${STATUS_STYLES[project.status]}`}
          >
            {t.projects.status[project.status]}
          </span>
          {project.featured && !compact ? (
            <span className="rounded-full border border-edge bg-surface/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted backdrop-blur">
              {t.projects.featured}
            </span>
          ) : null}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-brand sm:text-xl">
          {project.name}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
          {compact ? project.summary[language] : project.description[language]}
        </p>

        {visibleFeatures.length > 0 ? (
          <div className="mt-5">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink">
              {t.projects.featuresTitle}
            </h4>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {visibleFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-[13px] text-ink-muted">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            {remainingFeatures > 0 ? (
              <p className="mt-2.5 font-mono text-[11px] text-ink-muted">
                +{remainingFeatures}
              </p>
            ) : null}
          </div>
        ) : null}

        {/* Stack */}
        <div className="mt-5">
          {!compact ? (
            <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink">
              {t.projects.stackTitle}
            </h4>
          ) : null}
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Ações */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-edge pt-5">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost px-4 py-2 text-xs"
            >
              <Github size={14} aria-hidden="true" />
              {t.projects.viewCode}
            </a>
          ) : (
            <span
              className="btn-ghost cursor-not-allowed px-4 py-2 text-xs opacity-45"
              title={t.projects.linkPendingHint}
            >
              <Lock size={14} aria-hidden="true" />
              {t.projects.linkPending}
            </span>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary px-4 py-2 text-xs"
            >
              <ExternalLink size={14} aria-hidden="true" />
              {t.projects.viewDemo}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
