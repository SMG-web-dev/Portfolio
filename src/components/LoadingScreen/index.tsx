import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from '../Hero/AnimatedBackground';
import './LoadingScreen.css';

interface LoadingScreenProps {
  isVisible: boolean;
  onLogoAnimationStart?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible, onLogoAnimationStart }) => {
  const [showLogo, setShowLogo] = React.useState(true);
  const [startLogoAnimation, setStartLogoAnimation] = React.useState(false);

  React.useEffect(() => {
    if (!isVisible && showLogo) {
      // Iniciar la animación del logo antes del fade out
      setStartLogoAnimation(true);
      if (onLogoAnimationStart) {
        onLogoAnimationStart();
      }
      
      // Ocultar el logo después de que vuele al navbar
      setTimeout(() => {
        setShowLogo(false);
      }, 800);
    }
  }, [isVisible, showLogo, onLogoAnimationStart]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section 
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AnimatedBackground />
          
          {/* Overlay oscuro sutil */}
          <div className="loading-overlay" />
          
          {/* Contenido principal */}
          <article className="loading-content">
            {/* Logo con animación épica */}
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  className="loading-logo-container"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: startLogoAnimation ? 0.3 : 1, 
                    y: startLogoAnimation ? -window.innerHeight * 0.45 : 0,
                    x: startLogoAnimation ? -window.innerWidth * 0.35 : 0
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: startLogoAnimation ? 0.8 : 0.6,
                    ease: startLogoAnimation ? [0.25, 0.46, 0.45, 0.94] : "easeOut"
                  }}
                  style={{ zIndex: 10000 }}
                >
                  <motion.img
                    src="/logo.webp"
                    alt="SMG Dev Logo"
                    className="loading-logo"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      rotate: startLogoAnimation ? 360 : 0
                    }}
                    transition={{ 
                      rotate: { 
                        duration: startLogoAnimation ? 0.8 : 0,
                        ease: "easeInOut"
                      }
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Spinner principal */}
            <motion.div 
              className="loading-spinner-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5 }}
            >
              <div className="loading-spinner">
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
              </div>
            </motion.div>

            {/* Barra de progreso */}
            <motion.div 
              className="loading-progress-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
            >
              <div className="loading-progress-bar">
                <div className="loading-progress-fill"></div>
              </div>
              <p className="loading-text">Preparando experiencia increíble...</p>
            </motion.div>

            {/* Puntos flotantes */}
            <div className="loading-dots">
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div 
                  key={num}
                  className={`dot dot-${num}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0.8 + (num * 0.1) }}
                />
              ))}
            </div>
          </article>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;