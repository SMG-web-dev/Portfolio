import React, { Suspense } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";

// Componentes cargados de forma perezosa
const Experience = React.lazy(() => import("./components/Experience"));
const TechStack = React.lazy(() => import("./components/TechStack"));
const Projects = React.lazy(() => import("./components/Projects"));

// Componente de carga simple
const LoadingFallback = () => (
  <div className="py-16 flex justify-center items-center text-fern-green">
    <div className="animate-pulse">Cargando...</div>
  </div>
);

function App() {
  return (
    <main className="min-h-screen bg-timberwolf text-brunswick-green">
      <Header />
      <Hero />
      
      {/* Sección de Experience con lazy loading */}
      <Suspense fallback={<LoadingFallback />}>
        <Experience />
      </Suspense>
      
      {/* Sección de TechStack con lazy loading */}
      <Suspense fallback={<LoadingFallback />}>
        <TechStack />
      </Suspense>
      
      {/* Sección de Projects con lazy loading */}
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>
      
      <Footer />
      <LanguageSwitcher />
    </main>
  );
}

// Prefetch de componentes cuando el usuario está inactivo
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    if ('requestIdleCallback' in window) {
      // @ts-ignore
      window.requestIdleCallback(() => {
        import('./components/Experience');
        import('./components/TechStack');
      });
    } else {
      setTimeout(() => {
        import('./components/Experience');
        import('./components/TechStack');
      }, 3000);
    }
  });
}

export default App;