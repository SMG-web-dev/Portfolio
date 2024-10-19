'use client'

import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up")

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? "down" : "up"
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])

  return scrollDirection
}

const menuItems = ["about", "skills", "projects", "contact"]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollDirection = useScrollDirection()

  return (
    <motion.header
      className="fixed w-full z-50 transition-all duration-300"
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center backdrop-blur-md bg-sage/70 shadow-lg rounded-full px-6 py-4">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/logo.png"
                alt="SMG Dev Logo"
                className="w-10 h-10 rounded-sm"
              />
            </motion.div>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-2xl font-bold cursor-pointer text-brunswick-green hover:text-fern-green transition-colors duration-300"
            >
              smg-dev
            </Link>
          </motion.div>

          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="relative text-brunswick-green hover:text-fern-green cursor-pointer transition-colors duration-300 capitalize font-medium group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-fern-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="md:hidden p-2 rounded-full hover:bg-fern-green hover:bg-opacity-20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fern-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul
                className="flex flex-wrap justify-center gap-2 bg-sage/90 backdrop-blur-md rounded-2xl shadow-lg p-4"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {menuItems.map((item) => (
                  <motion.li
                    key={item}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                  >
                    <Link
                      to={item}
                      smooth={true}
                      duration={500}
                      className="block py-2 px-4 hover:bg-fern-green hover:text-white rounded-lg cursor-pointer transition-all duration-300 capitalize font-medium text-brunswick-green"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}