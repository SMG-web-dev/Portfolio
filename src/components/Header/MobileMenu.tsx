import React, { startTransition } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { navbarItems } from "../../constants/navbarItems";
import { useTranslation } from "react-i18next";

interface MobileMenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    const { t } = useTranslation();

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.nav
                    className="md:hidden mt-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <motion.div
                        className="bg-sage/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20"
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <motion.ul
                            className="flex flex-col gap-2 p-6"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                            }}
                        >
                            {navbarItems.map((item) => (
                                <motion.li
                                    key={item.id}
                                    variants={{
                                        open: { opacity: 1, y: 0 },
                                        closed: { opacity: 0, y: 20 }
                                    }}
                                    className="w-full"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link
                                        to={item.id}
                                        smooth={true}
                                        duration={500}
                                        className="flex items-center justify-center py-4 px-6 rounded-xl cursor-pointer transition-all duration-300 capitalize font-semibold text-brunswick-green hover:text-fern-green group relative overflow-hidden"
                                        onClick={() => {
                                            startTransition(() => {
                                                setIsMenuOpen(false);
                                            });
                                        }}
                                    >
                                        <item.icon className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="text-base">{t(item.name)}</span>
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-fern-green to-brunswick-green transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300 ease-out"></span>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;