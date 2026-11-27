import { useState } from 'react';
import { AlertTriangle, ExternalLink, GitFork, Github, RefreshCw, Star, Users } from 'lucide-react';
import { useGithub } from '../hooks/useGithub';
import { useLanguage } from '../hooks/useLanguage';
import { profile } from '../data/profile';

/** Cartão externo de estatísticas, com tratamento de falha de carregamento. */
function StatsCard({ theme = 'dark' }: { theme?: string }) {
  const { t } = useLanguage();
  const [failed, setFailed] = useState(false);

  const params = new URLSearchParams({
    username: profile.githubUsername,
    show_icons: 'true',
    hide_border: 'true',
    bg_color: '141C18',
    title_color: '00E6A0',
    icon_color: '00E6A0',
    text_color: '9AA7A0',
    theme,
  });

  if (failed) {
    return (
      <div className="card grid h-[180px] place-items-center px-6 text-center">
        <p className="text-sm text-ink-muted">{t.github.statsUnavailable}</p>
      </div>
    );
  }

  return (
    <img
      src={`https://github-readme-stats.vercel.app/api?${params.toString()}`}
      alt={t.github.statsAlt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="w-full rounded-2xl border border-edge bg-surface-card"
    />
  );
}

export function GithubStats() {
  const { t, language } = useLanguage();
  const { user, repos, languages, loading, error, retry } = useGithub(6);

  if (loading) {
    return (
      <div className="card flex items-center justify-center gap-3 p-10 text-sm text-ink-muted">
        <RefreshCw size={16} className="animate-spin text-brand" aria-hidden="true" />
        {t.github.loading}
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="card flex flex-col items-center gap-3 p-10 text-center">
        <AlertTriangle size={20} className="text-[#febc2e]" aria-hidden="true" />
        <p className="text-sm font-medium text-ink">{t.github.error}</p>
        <p className="max-w-md text-xs text-ink-muted">{t.github.errorHint}</p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          <button type="button" onClick={retry} className="btn-ghost px-4 py-2 text-xs">
            <RefreshCw size={14} aria-hidden="true" />
            {t.github.retry}
          </button>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-ghost px-4 py-2 text-xs"
          >
            <Github size={14} aria-hidden="true" />
            {t.github.openProfile}
          </a>
        </div>
      </div>
    );
  }

  const stats = [
    { label: t.github.repos, value: user.public_repos, icon: Github },
    { label: t.github.followers, value: user.followers, icon: Users },
    { label: t.github.following, value: user.following, icon: Users },
    { label: t.github.gists, value: user.public_gists, icon: GitFork },
  ];

  const dateFormatter = new Intl.DateTimeFormat(language === 'pt' ? 'pt-BR' : 'en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="space-y-6">
      {/* Números do perfil — vindos diretamente da API pública */}
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <li key={stat.label} className="card px-4 py-5 text-center">
            <stat.icon size={16} className="mx-auto mb-2 text-brand" aria-hidden="true" />
            <p className="font-display text-2xl font-bold text-ink">{stat.value}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-ink-muted">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Repositórios em destaque */}
        <div>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-ink">
            {t.github.featured}
          </h3>

          {repos.length === 0 ? (
            <div className="card p-6 text-sm text-ink-muted">{t.github.empty}</div>
          ) : (
            <ul className="space-y-2.5">
              {repos.slice(0, 4).map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="card-interactive group flex items-start gap-3 p-4"
                  >
                    <Github size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="truncate text-sm font-medium text-ink transition-colors group-hover:text-brand">
                          {repo.name}
                        </span>
                        <ExternalLink
                          size={12}
                          aria-hidden="true"
                          className="shrink-0 text-ink-muted opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </span>

                      {repo.description ? (
                        <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-ink-muted">
                          {repo.description}
                        </span>
                      ) : null}

                      <span className="mt-2 flex flex-wrap items-center gap-3 font-mono text-[11px] text-ink-muted">
                        {repo.language ? (
                          <span className="inline-flex items-center gap-1.5">
                            <span
                              aria-hidden="true"
                              className="h-1.5 w-1.5 rounded-full bg-brand"
                            />
                            {repo.language}
                          </span>
                        ) : null}
                        {repo.stargazers_count > 0 ? (
                          <span className="inline-flex items-center gap-1">
                            <Star size={11} aria-hidden="true" />
                            {repo.stargazers_count}
                          </span>
                        ) : null}
                        <span>
                          {t.github.updated} {dateFormatter.format(new Date(repo.updated_at))}
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Linguagens + cartão de estatísticas */}
        <div className="space-y-6">
          {languages.length > 0 ? (
            <div className="card p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
                {t.github.languages}
              </h3>

              <ul className="mt-4 space-y-3">
                {languages.map((item) => (
                  <li key={item.language}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-ink">{item.language}</span>
                      <span className="font-mono text-ink-muted">{item.percentage}%</span>
                    </div>
                    <div
                      className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-soft"
                      role="presentation"
                    >
                      <div
                        className="h-full rounded-full bg-brand-gradient"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <StatsCard />
        </div>
      </div>
    </div>
  );
}
