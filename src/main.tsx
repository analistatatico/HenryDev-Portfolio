import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { LanguageProvider } from './hooks/useLanguage';
import './styles/global.css';
import './styles/animations.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Elemento #root não encontrado no documento.');
}

createRoot(container).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        {/* HashRouter evita 404 em navegação direta no GitHub Pages. */}
        <HashRouter>
          <App />
        </HashRouter>
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>,
);
