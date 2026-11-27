import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PageTransition } from './components/PageTransition';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

const PAGES = [
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/projects', element: <Projects /> },
  { path: '/experience', element: <Experience /> },
  { path: '/skills', element: <Skills /> },
  { path: '/contact', element: <Contact /> },
];

export default function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-dvh flex-col bg-surface">
      <ScrollToTop />
      <Navbar />

      <main id="main" className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/home" replace />} />

            {PAGES.map((page) => (
              <Route
                key={page.path}
                path={page.path}
                element={<PageTransition>{page.element}</PageTransition>}
              />
            ))}

            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
