import React, { useState, useEffect, startTransition } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu, FiX } from '../../constants/icons';
import useScrollDirection from "./useScrollDirection";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useTranslationLoaded } from "../../i18n/i18n";

interface HeaderProps {
  showInitialAnimation?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showInitialAnimation = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const isTranslationLoaded = useTranslationLoaded();

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
          className="flex justify-between items-center backdrop-blur-md bg-sage/80 shadow-xl rounded-full px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border border-white/20"
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
          <motion.div
            className="flex items-center space-x-3 sm:space-x-4"
            initial={{ 
              opacity: showInitialAnimation ? 0 : 1, 
              x: showInitialAnimation ? -30 : 0 
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: showInitialAnimation ? 0.5 : 0.5,
              ease: "easeOut",
              delay: showInitialAnimation ? 0.6 : 0
            }}
          >
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
          </motion.div>

          {renderMenus && <DesktopMenu showInitialAnimation={showInitialAnimation} />}

          <motion.button
            className="md:hidden p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fern-green focus:ring-offset-2 focus:ring-offset-sage/20 shadow-lg"
            onClick={() => {
              startTransition(() => {
                setIsMenuOpen(!isMenuOpen);
              });
            }}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            initial={{
              opacity: showInitialAnimation ? 0 : 1,
              x: showInitialAnimation ? 30 : 0,
              rotate: showInitialAnimation ? 180 : 0
            }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              rotate: isMenuOpen ? 180 : 0 
            }}
            transition={{
              duration: showInitialAnimation ? 0.5 : 0.3,
              delay: showInitialAnimation ? 0.6 : 0,
              ease: "easeOut"
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {isMenuOpen ? (
              <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </motion.button>
        </motion.nav>

        {renderMenus && <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </motion.header>
  );
};

export default Header;