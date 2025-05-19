import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AnimatedSubtitle: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay ligeramente mayor que el título

    return () => clearTimeout(timer);
  }, []);

  return (
    <p
      className={`text-xl sm:text-2xl md:text-3xl mb-8 text-shadow transition-all duration-700 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      {t('hero.description')}
    </p>
  );
};

export default AnimatedSubtitle;