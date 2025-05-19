import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navbarItems } from "../../constants/navbarItems";
import { useTranslation } from "react-i18next";

const DesktopMenu: React.FC = () => {
    const { t } = useTranslation();

    return (
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
            {navbarItems.map((item, index) => (
                <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Link
                        to={item.id}
                        smooth={true}
                        duration={500}
                        className="relative text-brunswick-green hover:text-fern-green cursor-pointer transition-colors duration-300 capitalize font-medium group text-sm lg:text-base flex items-center"
                    >
                        <item.icon className="mr-1 h-4 w-4" />
                        {t(item.name)}
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-fern-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </Link>
                </motion.li>
            ))}
        </ul>
    );
};

export default DesktopMenu;