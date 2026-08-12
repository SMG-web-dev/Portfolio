import React, { Suspense } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";

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
    <Suspense fallback={<div className="min-h-screen bg-timberwolf" />}>
      <main className="safe-area-container bg-timberwolf text-brunswick-green">
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
        <LanguageSwitcher />
      </main>
    </Suspense>
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