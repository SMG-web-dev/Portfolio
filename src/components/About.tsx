import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-timberwolf dark:bg-hunter-green">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-brunswick-green dark:text-timberwolf"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Your Name"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 md:pl-8"
          >
            <p className="text-lg mb-4 text-brunswick-green dark:text-timberwolf">
              I'm a passionate full stack developer with a keen eye for creating beautiful and functional web applications. With expertise in both front-end and back-end technologies, I strive to build seamless user experiences that solve real-world problems.
            </p>
            <p className="text-lg mb-4 text-brunswick-green dark:text-timberwolf">
              My journey in web development started [X] years ago, and since then, I've worked on a variety of projects ranging from small business websites to complex enterprise applications. I'm always excited to learn new technologies and stay up-to-date with the latest industry trends.
            </p>
            <p className="text-lg text-brunswick-green dark:text-timberwolf">
              When I'm not coding, you can find me [Your Hobbies/Interests]. I believe in continuous learning and giving back to the community through open-source contributions and mentoring aspiring developers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;