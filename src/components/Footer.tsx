import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { profile } from '../data/profile';

const ROUTES = [
  { to: '/home', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/projects', key: 'projects' },
  { to: '/experience', key: 'experience' },
  { to: '/skills', key: 'skills' },
  { to: '/contact', key: 'contact' },
] as const;

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-edge bg-surface-soft">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        {/* Identidade */}
        <div>
          <Link to="/home" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-brand/30 bg-brand/10 font-display text-sm font-bold text-brand">
              {profile.initials}
            </span>
            <span className="font-display text-sm font-semibold text-ink">{profile.name}</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">{t.footer.tagline}</p>

          <p className="mt-4 inline-flex items-center gap-2 text-xs text-ink-muted">
            <MapPin size={14} className="text-brand" aria-hidden="true" />
            {t.contact.locationValue}
          </p>
        </div>

        {/* Navegação */}
        <nav aria-label={t.footer.navTitle}>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
            {t.footer.navTitle}
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
            {ROUTES.map((route) => (
              <li key={route.to}>
                <Link
                  to={route.to}
                  className="link-underline text-sm text-ink-muted transition-colors hover:text-brand"
                >
                  {t.nav[route.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contato */}
        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
            {t.footer.contactTitle}
          </h2>

          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-brand"
              >
                <Github size={15} aria-hidden="true" />
                GitHub
                <span className="sr-only">({t.common.externalLink})</span>
              </a>
            </li>
            <li>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-brand"
              >
                <Linkedin size={15} aria-hidden="true" />
                LinkedIn
                <span className="sr-only">({t.common.externalLink})</span>
              </a>
            </li>
            {profile.email ? (
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-brand"
                >
                  <Mail size={15} aria-hidden="true" />
                  {profile.email}
                </a>
              </li>
            ) : (
              <li>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-brand"
                >
                  <Mail size={15} aria-hidden="true" />
                  {t.contact.emailLabel}
                </Link>
              </li>
            )}
          </ul>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-edge bg-surface-card px-3 py-2 text-xs text-ink-muted transition-colors hover:border-brand/40 hover:text-brand"
          >
            <ArrowUp size={14} aria-hidden="true" />
            {t.footer.backToTop}
          </button>
        </div>
      </div>

      <div className="border-t border-edge">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. {t.footer.rights}
          </p>
          <p className="font-mono">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
