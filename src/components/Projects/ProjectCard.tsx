import React from "react";
import { motion } from "framer-motion";
import ProjectLinks from "./ProjectLinks";
import {
  ReactOriginal,
  VitejsOriginal,
  JavaOriginal,
  TailwindcssOriginal,
  SpringOriginal,
  AmazonwebservicesOriginalWordmark,
  TypescriptOriginal,
} from "devicons-react";

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
  React: <ReactOriginal size="30" />,
  Vite: <VitejsOriginal size="30" />,
  Java: <JavaOriginal size="30" />,
  Tailwind: <TailwindcssOriginal size="30" />,
  Spring: <SpringOriginal size="30" />,
  AWS: <AmazonwebservicesOriginalWordmark size="30" />,
  TypeScript: <TypescriptOriginal size="30" />,
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
        <div className="flex flex-wrap gap-3 mt-2">
          {project.technologies.map((tech) => (
            <div
              key={tech}
              className="flex items-center bg-white dark:bg-hunter-green rounded-lg px-3 py-2 shadow-md"
            >
              <span className="mr-2">{technologyIcons[tech]}</span>
              <span className="text-sm font-medium text-brunswick-green dark:text-timberwolf">
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
