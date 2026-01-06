import React, { Suspense, useState, useEffect } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import LoadingScreen from "./components/LoadingScreen";

// Componentes cargados de forma perezosa
// const Experience = React.lazy(() => import("./components/Experience"));
const TechStack = React.lazy(() => import("./components/TechStack"));
const Projects = React.lazy(() => import("./components/Projects"));

// Componente de carga simple para lazy loading
const LoadingFallback = () => (
  <article className="py-16 flex justify-center items-center text-fern-green">
    <section className="animate-pulse">...</section>
  </article>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [headerShouldAnimate, setHeaderShouldAnimate] = useState(false);

  const handleLogoAnimationStart = () => {
    // Activar la animación del header inmediatamente
    setHeaderShouldAnimate(true);
  };

  useEffect(() => {
    // Simular carga de recursos y mostrar pantalla de carga
    const loadResources = async () => {
      // Esperar que los componentes se monten
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simular carga de imágenes y recursos
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        return new Promise(resolve => {
          if (img.complete) {
            resolve(true);
          } else {
            img.onload = () => resolve(true);
            img.onerror = () => resolve(true);
          }
        });
      });
      
      await Promise.all(imagePromises);
      
      // Tiempo mínimo para mostrar la pantalla de carga (2 segundos)
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      setIsLoading(false);
    };

    loadResources();
  }, []);

  return (
    <>
      {/* Pantalla de carga espectacular */}
      <LoadingScreen 
        isVisible={isLoading} 
        onLogoAnimationStart={handleLogoAnimationStart}
      />
      
      {/* Contenido principal */}
      <main className={`min-h-screen bg-timberwolf text-brunswick-green transition-opacity duration-700 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Header siempre visible pero controlamos su animación */}
        <Header showInitialAnimation={headerShouldAnimate} />
        
        <Hero />
        {/* Sección de Experience con lazy loading
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense> */}
        {/* Sección de Projects con lazy loading */}
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        {/* Sección de TechStack con lazy loading */}
        <Suspense fallback={<LoadingFallback />}>
          <TechStack />
        </Suspense>
        <Footer />
        <LanguageSwitcher />
      </main>
    </>
  );
}

// Prefetch de componentes cuando el usuario está inactivo
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    if ('requestIdleCallback' in window) {
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