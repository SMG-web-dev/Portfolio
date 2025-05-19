import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const DownloadButton: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  // Ruta condicional basada en el idioma actual
  const cvPath = i18n.language === 'es' ? '/pdf/smg-cv_es.pdf' : '/pdf/smg-cv_en.pdf';
  const cvFileName = i18n.language === 'es' ? 'smg-cv_es.pdf' : 'smg-cv_en.pdf';

  useEffect(() => {
    // Usar requestAnimationFrame para optimizar la animación
    const rafId = requestAnimationFrame(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    });
    
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      className={`flex justify-center transition-all duration-700 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <a
        href={cvPath}
        download={cvFileName}
        className="inline-flex items-center justify-center min-w-[8rem] px-5 sm:px-6 h-10 sm:h-12 
          text-sm sm:text-base font-semibold text-white bg-fern-green rounded-full 
          shadow-lg transition-all duration-300 ease-in-out hover:bg-brunswick-green 
          hover:shadow-xl transform hover:-translate-y-1 focus:outline-none 
          focus:ring-2 focus:ring-fern-green focus:ring-opacity-50"
      >
        <FiDownload className="text-lg sm:text-xl mr-2 flex-shrink-0" />
        <span>{t('hero.downloadCV')}</span>
      </a>
    </div>
  );
};

export default React.memo(DownloadButton);