import React, { useState, useEffect, startTransition, useRef } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FaGithub, FaLinkedin } from '../../constants/icons';
import useScrollDirection from "./useScrollDirection";
import { navbarItems } from "../../constants/navbarItems";
import { useTranslation } from "react-i18next";
import { useTranslationLoaded } from "../../i18n/i18n";

interface HeaderProps {
  showInitialAnimation?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showInitialAnimation = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const isTranslationLoaded = useTranslationLoaded();
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);

  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  const colorAnimation = {
    animate: {
      color: ['#84A98C', '#CAD2C5', '#52796F', '#84A98C'],
      transition: { duration: 4, repeat: Infinity, ease: 'linear' },
    },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        startTransition(() => {
          setIsMenuOpen(false);
        });
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        startTransition(() => {
          setIsMenuOpen(false);
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderMenus = isTranslationLoaded;

  return (
    <motion.header
      className="fixed w-full z-50 transition-all duration-150"
      initial={{ 
        y: showInitialAnimation ? -120 : 0,
        opacity: showInitialAnimation ? 0 : 1
      }}
      animate={{ 
        y: scrollDirection === "down" ? -100 : 0,
        opacity: 1
      }}
      transition={{ 
        duration: showInitialAnimation ? 0.4 : 0.15,
        ease: showInitialAnimation ? [0.25, 0.46, 0.45, 0.94] : "easeInOut",
        delay: showInitialAnimation ? 0.1 : 0
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <motion.nav 
          className="flex justify-between items-center backdrop-blur-md bg-sage/80 shadow-xl rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 border border-white/20"
          initial={{
            scale: showInitialAnimation ? 0.8 : 1,
            opacity: showInitialAnimation ? 0 : 1,
            y: showInitialAnimation ? 30 : 0
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: showInitialAnimation ? 0.8 : 0,
            ease: "easeOut",
            delay: showInitialAnimation ? 0.3 : 0
          }}
        >
          <div className="flex items-center space-x-3 sm:space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/logo.webp"
                alt="SMG Dev Logo"
                title="SMG Dev Logo"
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-sm"
              />
            </motion.div>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="relative text-xl sm:text-2xl font-bold cursor-pointer text-brunswick-green hover:text-fern-green transition-colors duration-300 group"
            >
              smg-dev
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-fern-green to-transparent opacity-60 transform scale-x-75 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
            </Link>
          </div>

          <div className="flex items-center gap-2" ref={menuRef}>
            <motion.a
              href="https://github.com/SMG-web-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub Profile"
            >
              <motion.span variants={iconVariants}>
                <motion.span variants={colorAnimation} animate="animate">
                  <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </motion.span>
              </motion.span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/smg-web-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn Profile"
            >
              <motion.span variants={iconVariants}>
                <motion.span variants={colorAnimation} animate="animate">
                  <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </motion.span>
              </motion.span>
            </motion.a>

            <div className="w-px h-5 bg-brunswick-green/30" />

            {renderMenus && (
              <div className="relative">
                <motion.button
                  onClick={() => {
                    startTransition(() => {
                      setIsMenuOpen(!isMenuOpen);
                    });
                  }}
                  className="p-1 text-brunswick-green hover:text-fern-green transition-colors duration-300"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <FiMenu className="w-6 h-6" />
                </motion.button>

                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 bg-sage/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 overflow-hidden"
                    >
                      <ul className="py-2">
                        {navbarItems.map((item, index) => (
                          <motion.li
                            key={item.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={item.id}
                              smooth={true}
                              duration={500}
                              onClick={() => {
                                startTransition(() => {
                                  setIsMenuOpen(false);
                                });
                              }}
                              className="flex items-center gap-3 px-4 py-2.5 text-brunswick-green hover:bg-brunswick-green/10 hover:text-fern-green transition-all duration-200 cursor-pointer text-sm"
                            >
                              <item.icon className="w-4 h-4" />
                              <span>{t(item.name)}</span>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
