import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import useScrollDirection from "./useScrollDirection"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

const Header: React.FC = () => {
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

                    <DesktopMenu />

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

                <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
        </motion.header>
    )
}

export default Header