'use client'

import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX, FiUser, FiLayers, FiBriefcase, FiMail } from "react-icons/fi"

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

const menuItems = [
  { name: "about", icon: FiUser },
  { name: "tech stack", icon: FiLayers },
  { name: "projects", icon: FiBriefcase },
  { name: "contact", icon: FiMail }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.header
      className="fixed w-full z-50 transition-all duration-300"
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center backdrop-blur-md bg-sage/70 shadow-lg rounded-full px-4 sm:px-6 py-2 sm:py-4">
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3"
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
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm"
              />
            </motion.div>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-xl sm:text-2xl font-bold cursor-pointer text-brunswick-green hover:text-fern-green transition-colors duration-300"
            >
              smg-dev
            </Link>
          </motion.div>

          <ul className="hidden md:flex space-x-4 lg:space-x-6">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.name.replace(" ", "-")}
                  smooth={true}
                  duration={500}
                  className="relative text-brunswick-green hover:text-fern-green cursor-pointer transition-colors duration-300 capitalize font-medium group text-sm lg:text-base flex items-center"
                >
                  <item.icon className="mr-1 h-4 w-4" />
                  {item.name}
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
            {isMenuOpen ? <FiX className="w-5 h-5 sm:w-6 sm:h-6" /> : <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />}
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
              <motion.div
                className="bg-sage/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.ul
                  className="flex flex-wrap justify-center gap-2 p-4"
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
                      key={item.name}
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 }
                      }}
                      className="w-auto"
                    >
                      <Link
                        to={item.name.replace(" ", "-")}
                        smooth={true}
                        duration={500}
                        className="flex items-center py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 capitalize font-medium text-brunswick-green hover:text-fern-green text-center group relative overflow-hidden"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="mr-2 h-5 w-5" />
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fern-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}