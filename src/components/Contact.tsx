import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-timberwolf dark:bg-hunter-green">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-brunswick-green dark:text-timberwolf"
        >
          Get In Touch
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-semibold mb-4 text-fern-green dark:text-sage">Contact Information</h3>
            <div className="flex items-center mb-4">
              <Mail size={20} className="mr-4 text-hunter-green dark:text-sage" />
              <span className="text-brunswick-green dark:text-timberwolf">youremail@example.com</span>
            </div>
            <div className="flex items-center mb-4">
              <Phone size={20} className="mr-4 text-hunter-green dark:text-sage" />
              <span className="text-brunswick-green dark:text-timberwolf">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="mr-4 text-hunter-green dark:text-sage" />
              <span className="text-brunswick-green dark:text-timberwolf">Your City, Country</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-fern-green dark:text-sage">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-fern-green bg-white dark:bg-brunswick-green text-brunswick-green dark:text-timberwolf" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-fern-green dark:text-sage">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-fern-green bg-white dark:bg-brunswick-green text-brunswick-green dark:text-timberwolf" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-fern-green dark:text-sage">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-fern-green bg-white dark:bg-brunswick-green text-brunswick-green dark:text-timberwolf" required></textarea>
              </div>
              <button type="submit" className="bg-fern-green text-timberwolf px-6 py-3 rounded-md hover:bg-hunter-green transition duration-300">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;