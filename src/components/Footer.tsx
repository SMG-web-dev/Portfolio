import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <footer className="bg-brunswick-green text-timberwolf py-16">
      <div id="contact" className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-sage">Contact</h3>
            <motion.div className="flex items-center space-x-3" whileHover="hover">
              <motion.span variants={iconVariants}>
                <motion.span variants={colorAnimation} animate="animate">
                  <Mail size={20} className="text-sage" />
                </motion.span>
              </motion.span>
              <a
                href="mailto:smanjon2021@gmail.com"
                className="hover:text-sage transition-colors duration-300"
              >
                smanjon2021@gmail.com
              </a>
            </motion.div>
            <motion.div className="flex items-center space-x-3" whileHover="hover">
              <motion.span variants={iconVariants}>
                <motion.span variants={colorAnimation} animate="animate">
                  <Phone size={20} className="text-sage" />
                </motion.span>
              </motion.span>
              <a
                href="tel:+34692244230"
                className="hover:text-sage transition-colors duration-300"
              >
                +34 692 244 230
              </a>
            </motion.div>
            <motion.div className="flex items-center space-x-3" whileHover="hover">
              <motion.span variants={iconVariants}>
                <motion.span variants={colorAnimation} animate="animate">
                  <MapPin size={20} className="text-sage" />
                </motion.span>
              </motion.span>
              <span>Madrid, Spain</span>
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
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-sage">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/SMG-web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage transition-colors duration-300"
                whileHover="hover"
                aria-label="GitHub Profile"
              >
                <motion.span variants={iconVariants}>
                  <motion.span variants={colorAnimation} animate="animate">
                    <Github size={24} />
                  </motion.span>
                </motion.span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/smg-web-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage transition-colors duration-300"
                whileHover="hover"
                aria-label="LinkedIn Profile"
              >
                <motion.span variants={iconVariants}>
                  <motion.span variants={colorAnimation} animate="animate">
                    <Linkedin size={24} />
                  </motion.span>
                </motion.span>
              </motion.a>
            </div>
            <p className="mt-4">
              &copy; {new Date().getFullYear()} smg-dev. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}