import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-brunswick-green text-timberwolf py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-sage">Contact</h3>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-sage" />
              <span>smanjon2021@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-sage" />
              <span>+34 692 244 230</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-sage" />
              <span>Madrid, Spain</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          ></motion.div>

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
              <a
                href="https://github.com/SMG-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="www.linkedin.com/in/smg-web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <p className="mt-4">&copy; 2024 smg-dev. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
