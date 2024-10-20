import React from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { FiUser, FiLayers, FiBriefcase, FiMail } from "react-icons/fi"

const menuItems = [
    { name: "about", icon: FiUser },
    { name: "tech stack", icon: FiLayers },
    { name: "projects", icon: FiBriefcase },
    { name: "contact", icon: FiMail }
]

interface MobileMenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
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
    )
}

export default MobileMenu