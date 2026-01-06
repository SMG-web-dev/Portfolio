import React, { useState, useEffect, startTransition } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu, FiX } from '../../constants/icons';
import useScrollDirection from "./useScrollDirection";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useTranslationLoaded } from "../../i18n/i18n";

const Header: React.FC = () => {
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
      className="fixed w-full z-50 transition-all duration-300"
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <nav className="flex justify-between items-center backdrop-blur-md bg-sage/80 shadow-xl rounded-full px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border border-white/20">
          <motion.div
            className="flex items-center space-x-3 sm:space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
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

          {renderMenus && <DesktopMenu />}

          <motion.button
            className="md:hidden p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fern-green focus:ring-offset-2 focus:ring-offset-sage/20 shadow-lg"
            onClick={() => {
              startTransition(() => {
                setIsMenuOpen(!isMenuOpen);
              });
            }}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {isMenuOpen ? (
              <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </motion.button>
        </nav>

        {renderMenus && <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </motion.header>
  );
};

export default Header;