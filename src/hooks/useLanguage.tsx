import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { DEFAULT_LANGUAGE, translations, type Language, type Translation } from '../locales';

const STORAGE_KEY = 'henrydev:language';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: unknown): value is Language {
  return value === 'pt' || value === 'en';
}

/**
 * Lê a preferência salva pelo próprio visitante.
 * Sem preferência salva, o site abre em português — o idioma padrão do portfólio.
 * O idioma do navegador não é usado para evitar que a página abra em inglês
 * para quem nunca escolheu isso.
 */
function readInitialLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    /* localStorage indisponível (modo privado / cookies bloqueados) */
  }

  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readInitialLanguage);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* preferência não persistida — a troca continua funcionando na sessão */
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => {
      const next: Language = current === 'pt' ? 'en' : 'pt';
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignorado */
      }
      return next;
    });
  }, []);

  // Mantém o atributo lang do documento coerente com o idioma selecionado.
  useEffect(() => {
    document.documentElement.lang = translations[language].meta.langAttr;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, toggleLanguage, t: translations[language] }),
    [language, setLanguage, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de <LanguageProvider>.');
  }
  return context;
}
