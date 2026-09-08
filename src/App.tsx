import React, { Suspense } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import AmbientCursorLight from "./components/AmbientCursorLight";
import { ThemeProvider } from "./context/ThemeContext";

// Componentes cargados de forma perezosa
const Experience = React.lazy(() => import("./components/Experience"));
const TechStack = React.lazy(() => import("./components/TechStack"));
const Projects = React.lazy(() => import("./components/Projects"));
const SoftSkills = React.lazy(() => import("./components/SoftSkills"));

// Componente de carga simple para lazy loading
const LoadingFallback = () => (
  <article className="py-16 flex justify-center items-center text-fern-green">
    <section className="animate-pulse font-medium">...</section>
  </article>
);

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="min-h-screen bg-timberwolf dark:bg-[#0a120d]" />}>
        <main className="safe-area-container bg-timberwolf text-brunswick-green dark:bg-[#0a120d] dark:text-white selection:bg-fern-green selection:text-white relative overflow-x-hidden min-h-screen transition-colors duration-300">
          {/* Ambient subtle green light trailing cursor in background canvas */}
          <AmbientCursorLight />

          <div className="relative z-10">
            <Header />
            <Hero />
            <Suspense fallback={<LoadingFallback />}>
              <Experience />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <TechStack />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <SoftSkills />
            </Suspense>
            <Footer />

            {/* Floating Language Switcher */}
            <div className="fixed z-50 bottom-safe right-safe">
              <LanguageSwitcher />
            </div>
          </div>
        </main>
      </Suspense>
    </ThemeProvider>
  );
}

// Prefetch de componentes cuando el usuario está inactivo
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        import('./components/Experience');
        import('./components/TechStack');
        import('./components/SoftSkills');
      });
    } else {
      setTimeout(() => {
        import('./components/Experience');
        import('./components/TechStack');
        import('./components/SoftSkills');
      }, 2000);
    }
  });
}

export default App;