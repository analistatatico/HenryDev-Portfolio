import { useLanguage } from '../hooks/useLanguage';
import { LANGUAGES, translations } from '../locales';

interface LanguageSwitcherProps {
  className?: string;
}

/** Alternador PT | EN. A preferência é persistida em localStorage. */
export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className={`inline-flex items-center rounded-lg border border-edge bg-surface-soft p-0.5 ${className}`.trim()}
    >
      {LANGUAGES.map((code, index) => {
        const active = code === language;
        return (
          <span key={code} className="flex items-center">
            {index > 0 ? (
              <span aria-hidden="true" className="mx-0.5 h-3.5 w-px bg-edge" />
            ) : null}
            <button
              type="button"
              onClick={() => setLanguage(code)}
              aria-pressed={active}
              aria-label={translations[code].meta.label}
              className={[
                'rounded-md px-2.5 py-1 font-mono text-xs font-semibold tracking-wider transition-colors',
                active
                  ? 'bg-brand/15 text-brand'
                  : 'text-ink-muted hover:text-ink',
              ].join(' ')}
            >
              {translations[code].meta.short}
            </button>
          </span>
        );
      })}
    </div>
  );
}
