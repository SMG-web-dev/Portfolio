import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { FaGlobe, FaCheck } from '../constants/icons';
import { languages } from '../constants/languages';
import { motion, AnimatePresence } from 'framer-motion';
import { USFlag, SpainFlag, ItalyFlag, GermanyFlag, FranceFlag } from './FlagIcons';

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
        <motion.div
            ref={dropdownRef}
            className="fixed bottom-6 right-6 z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
        >
            <div className="relative">
                {/* Main button */}
                <motion.button
                    className="text-white p-4 rounded-full shadow-xl backdrop-blur-md bg-brunswick-green/90 border border-sage/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fern-green focus:ring-offset-2 focus:ring-offset-sage/20 hover:bg-brunswick-green hover:shadow-2xl"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaGlobe size={22} className="text-sage" />
                    </motion.div>
                </motion.button>

                {/* Dropdown menu with animation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute bottom-full mb-3 right-0 w-52 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md bg-timberwolf/95 border border-sage/30"
                        >
                            <div className="py-2">
                                {languages.map((language, index) => {
                                    // Mapeo local de códigos de idioma a componentes de bandera
                                    const flagComponents = {
                                        en: USFlag,
                                        es: SpainFlag,
                                        it: ItalyFlag,
                                        de: GermanyFlag,
                                        fr: FranceFlag,
                                    };
                                    
                                    const FlagComponent = flagComponents[language.code as keyof typeof flagComponents];
                                    return (
                                        <motion.button
                                            key={language.code}
                                            onClick={() => changeLanguage(language.code)}
                                            className={`flex items-center w-full px-5 py-3 text-sm font-medium transition-all duration-300 group relative ${
                                                i18n.language === language.code 
                                                    ? 'text-fern-green bg-sage/20' 
                                                    : 'text-brunswick-green hover:text-fern-green hover:bg-sage/10'
                                            }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.2 }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="flex items-center gap-3 flex-grow">
                                                <FlagComponent size={20} className="rounded-sm shadow-sm" />
                                                <span className="text-left font-medium">{language.name}</span>
                                            </div>
                                            {i18n.language === language.code && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                                                >
                                                    <FaCheck size={16} className="text-fern-green" />
                                                </motion.div>
                                            )}
                                            <span className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-fern-green to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></span>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default LanguageSwitcher;