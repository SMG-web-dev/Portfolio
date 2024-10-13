import React from "react";
import { motion } from "framer-motion";

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
              alt="Sergio"
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
              I'm a passionate and hardworker web developer with a keen eye for
              creating beautiful and functional web applications. With expertise
              in both front-end and back-end technologies, I strive to build
              seamless user experiences that solve real-world problems.
            </p>
            <p className="text-lg mb-4 text-brunswick-green dark:text-timberwolf">
              My journey in web development started four years ago and since
              then I have learned a lot about advanced development techniques
              such as TDD and Agile development methodlogies. I am currently at
              a point where I have to decide how I want to focus my professional
              career, but I know that with my ambition I will go far regardless
              of the branch of development I choose. I am always excited to
              learn new technologies and keep up to date with the latest in the
              industry.
            </p>
            <p className="text-lg text-brunswick-green dark:text-timberwolf">
              When I'm not coding, you can find me training soccer or at the
              gym. I believe in continuous learning and in the great
              capabilities of a healthy human mind.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
