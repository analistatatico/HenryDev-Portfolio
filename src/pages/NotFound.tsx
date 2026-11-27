import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';
import { Seo } from '../components/Seo';
import { Terminal } from '../components/Terminal';
import { useLanguage } from '../hooks/useLanguage';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      <Seo title={t.seo.notFound.title} description={t.seo.notFound.description} />

      <div aria-hidden="true" className="absolute inset-0 bg-tech-grid opacity-50" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 glow-soft"
      />

      <section className="shell relative grid min-h-[70vh] place-items-center py-28">
        <div className="w-full max-w-lg text-center">
          <p className="font-display text-7xl font-bold text-gradient sm:text-8xl">
            {t.notFound.code}
          </p>

          <h1 className="mt-4 text-2xl font-bold sm:text-3xl">{t.notFound.title}</h1>

          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            {t.notFound.text}
          </p>

          <Terminal title="error.log" className="mt-8 text-left">
            <pre className="font-mono text-[12.5px] leading-relaxed">
              <code>
                <span className="text-ink-muted">$ </span>
                <span className="text-ink">router.resolve(location)</span>
                {'\n'}
                <span className="text-[#ff5f57]">RouteNotFoundError</span>
                <span className="text-ink-muted">: 404</span>
              </code>
            </pre>
          </Terminal>

          <Link to="/home" className="btn-primary mt-8">
            <HomeIcon size={16} aria-hidden="true" />
            {t.notFound.button}
          </Link>
        </div>
      </section>
    </div>
  );
}
