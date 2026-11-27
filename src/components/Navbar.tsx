import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { profile } from '../data/profile';

const ROUTES = [
  { to: '/home', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/projects', key: 'projects' },
  { to: '/experience', key: 'experience' },
  { to: '/skills', key: 'skills' },
  { to: '/contact', key: 'contact' },
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fecha o menu móvel automaticamente após navegar.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Estado "sticky compacto" após rolar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trava o scroll do corpo e fecha com Escape enquanto o menu móvel está aberto.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'relative px-3 py-2 text-sm font-medium transition-colors',
      isActive ? 'text-brand' : 'text-ink-muted hover:text-ink',
    ].join(' ');

  return (
    <>
      <a href="#main" className="sr-only-focusable btn-primary fixed left-4 top-4 z-[70]">
        {t.nav.skipToContent}
      </a>

      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-edge bg-surface/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        ].join(' ')}
      >
        <nav
          aria-label={t.nav.menu}
          className="shell flex h-[72px] items-center justify-between gap-4"
        >
          {/* Logo */}
          <Link
            to="/home"
            className="group flex items-center gap-2.5"
            aria-label={`${profile.name} — ${t.nav.home}`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-brand/30 bg-brand/10 font-display text-sm font-bold text-brand transition-all duration-300 group-hover:border-brand/60 group-hover:shadow-glow">
              {profile.initials}
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight text-ink sm:block">
              {profile.name}
              <span className="ml-1.5 font-mono text-[11px] font-normal text-ink-muted">
                /dev
              </span>
            </span>
          </Link>

          {/* Navegação desktop */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {ROUTES.map((route) => (
              <li key={route.to}>
                <NavLink to={route.to} className={navLinkClass}>
                  {({ isActive }) => (
                    <>
                      {t.nav[route.key]}
                      <span
                        aria-hidden="true"
                        className={[
                          'absolute inset-x-3 -bottom-0.5 h-px bg-brand transition-transform duration-300',
                          isActive ? 'scale-x-100' : 'scale-x-0',
                        ].join(' ')}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.nav.close : t.nav.menu}
              className="grid h-10 w-10 place-items-center rounded-lg border border-edge bg-surface-soft text-ink transition-colors hover:border-brand/40 hover:text-brand lg:hidden"
            >
              {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu móvel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 lg:hidden"
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm" />
        <nav
          aria-label={t.nav.menu}
          className="absolute inset-x-0 top-[72px] origin-top border-y border-edge bg-surface-soft px-5 py-6 shadow-card"
          onClick={(event) => event.stopPropagation()}
        >
          <ul className="flex flex-col gap-1">
            {ROUTES.map((route, index) => (
              <li key={route.to}>
                <NavLink
                  to={route.to}
                  className={({ isActive }) =>
                    [
                      'flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-colors',
                      isActive
                        ? 'border border-brand/25 bg-brand/10 text-brand'
                        : 'border border-transparent text-ink-muted hover:bg-surface-card hover:text-ink',
                    ].join(' ')
                  }
                >
                  <span className="font-mono text-xs text-brand/70">
                    0{index + 1}
                  </span>
                  {t.nav[route.key]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
