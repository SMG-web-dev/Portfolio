import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-hunter-green">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-timberwolf"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0 flex justify-center"
          >
            <img
              src="/cv2.webp"
              alt="Sergio"
              className="rounded-full w-60 h-60 md:w-80 md:h-80 object-cover shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 md:pl-8"
          >
            <p className="text-xl mb-6 text-timberwolf">
              I’m web developer with four years of experience as a student. I
              specialize in creating elegant, functional applications that
              provide seamless user experiences using both front-end and
              back-end technologies.
            </p>
            <p className="text-xl mb-6 text-timberwolf">
              Constantly learning and evolving with the fast-paced world of
              tech, I leverage modern tools like AI to enhance productivity,
              optimize workflows, and focus on the most creative aspects of
              development.
            </p>
            <p className="text-xl mb-6 text-timberwolf">
              When I’m not coding, I’m either working out, training for soccer,
              or exploring the endless possibilities of the human mind. I
              believe in lifelong learning and in combining the power of
              technology with creativity to build amazing digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
