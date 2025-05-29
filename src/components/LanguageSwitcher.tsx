import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { FaGlobe, FaCheck } from '../constants/icons';
import { languages } from '../constants/languages';
import { motion, AnimatePresence } from 'framer-motion';

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const changeLanguage = (language: string | undefined) => {
        i18n.changeLanguage(language);
        setIsOpen(false);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

    return (
        <div
            ref={dropdownRef}
            className="fixed bottom-4 right-4 z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative">
                {/* Main button */}
                <button
                    style={{
                        backgroundColor: 'var(--color-brunswick-green)',
                        borderColor: 'var(--color-hunter-green)'
                    }}
                    className="text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 hover:bg-opacity-90 focus:ring-opacity-50"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                >
                    <FaGlobe size={20} className="text-white" />
                </button>

                {/* Dropdown menu with animation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-full mb-2 right-0 w-48 rounded-lg shadow-xl overflow-hidden max-h-60 overflow-y-auto"
                            style={{
                                borderColor: 'var(--color-sage)',
                                backgroundColor: 'var(--color-timberwolf)',
                                paddingBottom: '8px'
                            }}
                        >
                            <div className="py-1">
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        onClick={() => changeLanguage(language.code)}
                                        className="flex items-center w-full px-4 py-2 text-sm transition-colors"
                                        style={{
                                            color: 'var(--color-brunswick-green)',
                                            backgroundColor: i18n.language === language.code ? 'var(--color-timberwolf)' : 'transparent'
                                        }}
                                        onMouseOver={(e) => {
                                            if (i18n.language !== language.code) {
                                                e.currentTarget.style.opacity = '0.7';
                                            }
                                        }}
                                        onMouseOut={(e) => {
                                            if (i18n.language !== language.code) {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                e.currentTarget.style.opacity = '1';
                                            }
                                        }}
                                    >
                                        <span className="flex-grow text-left">{language.name}</span>
                                        {i18n.language === language.code && (
                                            <FaCheck
                                                size={16}
                                                style={{ color: 'var(--color-fern-green)' }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default LanguageSwitcher;