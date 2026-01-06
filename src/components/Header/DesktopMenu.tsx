import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navbarItems } from "../../constants/navbarItems";
import { useTranslation } from "react-i18next";

const DesktopMenu: React.FC = () => {
    const { t } = useTranslation();

    return (
        <ul className="hidden md:flex space-x-6 lg:space-x-8 xl:space-x-10">
            {navbarItems.map((item, index) => (
                <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to={item.id}
                        smooth={true}
                        duration={500}
                        className="relative text-brunswick-green hover:text-fern-green cursor-pointer transition-all duration-300 capitalize font-semibold group text-sm lg:text-base xl:text-lg flex items-center px-3 py-2 rounded-lg"
                    >
                        <item.icon className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                        <span className="whitespace-nowrap">{t(item.name)}</span>
                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-fern-green to-brunswick-green transform -translate-x-1/2 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                </motion.li>
            ))}
        </ul>
    );
};

export default DesktopMenu;