import React, { useState, useEffect, startTransition, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FaGithub, FaLinkedin } from "../../constants/icons";
import useScrollDirection from "./useScrollDirection";
import { navbarItems } from "../../constants/navbarItems";
import { useTranslation } from "react-i18next";
import { useTranslationLoaded } from "../../i18n/i18n";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const scrollDirection = useScrollDirection();
  const isTranslationLoaded = useTranslationLoaded();
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = ["hero", "experience", "projects", "techstack", "soft-skills"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <motion.header
      className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center items-center pointer-events-none px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: scrollDirection === "down" ? -120 : 0,
        opacity: 1,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Floating Notch / Capsule Navigation Pill - Perfectly Centered */}
      <nav
        className="pointer-events-auto max-w-[calc(100vw-1.5rem)] sm:max-w-fit bg-brunswick-green/95 backdrop-blur-xl border border-white/20 shadow-green-glow rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-5 transition-all duration-300"
        aria-label="Main Navigation"
      >
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green rounded-full"
            aria-label="Sergio Manjón - Scroll to top"
          >
            <span className="font-display font-bold text-xs sm:text-base text-white hover:text-sage transition-colors">
              smg-dev
            </span>
          </ScrollLink>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-4 bg-white/30" />

        {/* Desktop Nav Links with Active Scroll-Spy Indicator */}
        {isTranslationLoaded && (
          <div className="hidden md:flex items-center gap-1.5">
            {navbarItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  onSetActive={() => setActiveSection(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green ${
                    isActive
                      ? "text-white bg-fern-green shadow-xs"
                      : "text-white/90 hover:text-white hover:bg-white/15"
                  }`}
                >
                  {t(item.name)}
                </ScrollLink>
              );
            })}
          </div>
        )}

        {/* Vertical Divider */}
        <div className="w-px h-4 bg-white/30" />

        {/* Social Links (Desktop) & Mobile Menu Toggle */}
        <div className="flex items-center gap-2" ref={menuRef}>
          <a
            href="https://github.com/SMG-web-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green rounded-full p-1"
            aria-label="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/smg-web-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green rounded-full p-1"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 text-white hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green rounded-full"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-3 w-56 bg-brunswick-green rounded-2xl shadow-2xl border border-white/30 overflow-hidden p-2 opacity-100"
              >
                <ul className="space-y-1">
                  {navbarItems.map((item) => (
                    <li key={item.id}>
                      <ScrollLink
                        to={item.id}
                        smooth={true}
                        duration={500}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-white/15 transition-colors cursor-pointer"
                      >
                        <item.icon size={16} />
                        <span>{t(item.name)}</span>
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
