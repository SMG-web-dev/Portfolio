import React from "react";
import { motion } from "framer-motion";
import ProjectLinks from "./ProjectLinks";
import { FaReact, FaJava, FaAws } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiSpring, SiTypescript } from "react-icons/si";

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const technologyIcons: { [key: string]: React.ReactNode } = {
  React: <FaReact className="w-5 h-5 text-[#61DAFB]" />,
  Vite: <SiVite className="w-5 h-5 text-[#646CFF]" />,
  Java: <FaJava className="w-5 h-5 text-[#007396]" />,
  Tailwind: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />,
  Spring: <SiSpring className="w-5 h-5 text-[#6DB33F]" />,
  AWS: <FaAws className="w-5 h-5 text-[#FF9900]" />,
  TypeScript: <SiTypescript className="w-5 h-5 text-[#3178C6]" />,
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-timberwolf dark:bg-brunswick-green rounded-lg shadow-lg overflow-hidden flex flex-col"
    >
      <div className="relative pt-[56.25%] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-brunswick-green dark:text-timberwolf">
          {project.title}
        </h3>
        <p className="text-hunter-green dark:text-sage mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <div
              key={tech}
              className="flex items-center bg-white dark:bg-hunter-green rounded-full px-3 py-1 shadow-sm"
            >
              {technologyIcons[tech]}
              <span className="ml-2 text-sm text-brunswick-green dark:text-timberwolf">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
      <ProjectLinks github={project.github} live={project.live} />
    </motion.div>
  );
};

export default ProjectCard;
