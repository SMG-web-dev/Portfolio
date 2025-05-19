import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface AnimatedTitleProps {
  delay?: number; // Opción para definir un retraso en milisegundos
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ delay = 300 }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Usar un timeout para iniciar la animación después de la carga
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <h1
      className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-shadow transform transition-all duration-700 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}
    >
      {t('hero.welcome')}
    </h1>
  );
};

export default AnimatedTitle;