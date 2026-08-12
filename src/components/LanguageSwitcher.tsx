import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { FaCheck } from '../constants/icons';
import { languages } from '../constants/languages';
import { motion, AnimatePresence } from 'framer-motion';
import { USFlag, SpainFlag, ItalyFlag, GermanyFlag, FranceFlag } from './FlagIcons';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const flagComponents = {
    en: USFlag,
    es: SpainFlag,
    it: ItalyFlag,
    de: GermanyFlag,
    fr: FranceFlag,
  };

  const getCurrentFlag = () => {
    const lang = i18n.language?.split('-')[0] || 'en';
    return flagComponents[lang as keyof typeof flagComponents] || USFlag;
  };

  const CurrentFlag = getCurrentFlag();

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleKeyDownButton = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="fixed z-50 bottom-safe right-safe"
    >
      <div className="relative">
        {/* Trigger Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDownButton}
          className="group relative flex items-center justify-center p-3 rounded-full bg-brunswick-green/90 backdrop-blur-xl border border-white/20 shadow-green hover:shadow-green-lg text-timberwolf hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green focus-visible:ring-offset-2 focus-visible:ring-offset-brunswick-green"
          aria-label="Select Language"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <CurrentFlag size={24} className="rounded-xs shadow-xs" />
          <span className="sr-only">Change language</span>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute bottom-full mb-3 right-0 w-48 rounded-2xl shadow-2xl overflow-hidden bg-brunswick-green border border-white/30 p-2 opacity-100"
              role="listbox"
              aria-label="Languages"
            >
              <div className="space-y-1">
                {languages.map((language) => {
                  const FlagComponent = flagComponents[language.code as keyof typeof flagComponents] || USFlag;
                  const isActive = i18n.language === language.code;
                  return (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      role="option"
                      aria-selected={isActive}
                      className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green ${
                        isActive
                          ? 'bg-fern-green/20 text-white font-semibold'
                          : 'text-timberwolf/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <FlagComponent size={20} className="rounded-xs shadow-xs" />
                        <span>{language.name}</span>
                      </div>
                      {isActive && (
                        <FaCheck size={14} className="text-fern-green flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default LanguageSwitcher;