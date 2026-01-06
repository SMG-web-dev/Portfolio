import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "../constants/icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const iconVariants = {
  hover: {
    scale: 1.2,
    transition: { duration: 0.3, yoyo: Infinity },
  },
};

const colorAnimation = {
  animate: {
    color: ['#84A98C', '#CAD2C5', '#52796F', '#84A98C'],
    transition: { duration: 4, repeat: Infinity, ease: 'linear' },
  },
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brunswick-green text-timberwolf py-12 sm:py-16 lg:py-20">
      <div id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 lg:space-y-5"
          >
            <h3 className="text-xl lg:text-2xl font-semibold text-sage mb-4 lg:mb-5">{t('footer.contact')}</h3>
            <motion.div className="flex items-center space-x-3 text-sm lg:text-base group" whileHover="hover">
              <motion.span variants={iconVariants}>
                <motion.span variants={colorAnimation} animate="animate">
                  <FaEnvelope size={18} className="text-sage group-hover:scale-110 transition-transform duration-300" />
                </motion.span>
              </motion.span>
              <a
                href="mailto:smanjon2021@gmail.com"
                className="hover:text-sage transition-colors duration-300 hover:underline"
              >
                smanjon2021@gmail.com
              </a>
            </motion.div>
            <motion.div className="flex items-center space-x-3 text-sm lg:text-base group" whileHover="hover">
              <motion.span variants={iconVariants}>
                <motion.span variants={colorAnimation} animate="animate">
                  <FaPhone size={18} className="text-sage group-hover:scale-110 transition-transform duration-300" />
                </motion.span>
              </motion.span>
              <a
                href="tel:+34692244230"
                className="hover:text-sage transition-colors duration-300"
              >
                +34 692 244 230
              </a>
            </motion.div>
            <motion.div className="flex items-center space-x-3 text-sm lg:text-base group" whileHover="hover">
              <motion.span variants={iconVariants}>
                <motion.span variants={colorAnimation} animate="animate">
                  <FaMapMarkerAlt size={18} className="text-sage group-hover:scale-110 transition-transform duration-300" />
                </motion.span>
              </motion.span>
              <span>{t('footer.location')}</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Espacio para contenido adicional si se desea agregar en el futuro */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4 lg:space-y-5 lg:col-start-3"
          >
            <h3 className="text-xl lg:text-2xl font-semibold text-sage mb-4 lg:mb-5">
              {t('footer.connectWithMe')}
            </h3>
            <div className="flex space-x-6 lg:space-x-8 mb-4 lg:mb-5">
              <motion.a
                href="https://github.com/SMG-web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub Profile"
              >
                <motion.span variants={iconVariants}>
                  <motion.span variants={colorAnimation} animate="animate">
                    <FaGithub size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </motion.span>
                </motion.span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/smg-web-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn Profile"
              >
                <motion.span variants={iconVariants}>
                  <motion.span variants={colorAnimation} animate="animate">
                    <FaLinkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </motion.span>
                </motion.span>
              </motion.a>
            </div>
            <p className="text-sm lg:text-base text-sage/90">
              &copy; {new Date().getFullYear()} smg-dev. {t('footer.allRightsReserved')}.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}