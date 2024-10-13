import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DAW Promo Web",
    description:
      "A promocional website work for my academic module 'UI/UX design'",
    image: "/dawPromo.png",
    github: "https://github.com/SMG-hash/WebPromocionDAW",
    live: "https://ies-tetuan-daw.netlify.app",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-sage dark:bg-hunter-green">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-brunswick-green dark:text-timberwolf"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-timberwolf dark:bg-brunswick-green rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-brunswick-green dark:text-timberwolf">
                  {project.title}
                </h3>
                <p className="text-hunter-green dark:text-sage mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-fern-green hover:text-hunter-green dark:text-sage dark:hover:text-timberwolf"
                  >
                    <Github size={20} className="mr-1" /> Source
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-fern-green hover:text-hunter-green dark:text-sage dark:hover:text-timberwolf"
                  >
                    <ExternalLink size={20} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
