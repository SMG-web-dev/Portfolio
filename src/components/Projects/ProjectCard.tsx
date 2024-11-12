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
  Html5Original, Css3Original,
  DockerOriginal
} from "devicons-react";

export interface ProjectProps {
  title: string;
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
  HTML: <Html5Original size="38" />,
  CSS: <Css3Original size="38" />,
  React: <ReactOriginal size="38" />,
  Vite: <VitejsOriginal size="38" />,
  Java: <JavaOriginal size="38" />,
  Tailwind: <TailwindcssOriginal size="38" />,
  Spring: <SpringOriginal size="38" />,
  AWS: <AmazonwebservicesOriginalWordmark size="38" />,
  TypeScript: <TypescriptOriginal size="38" />,
  Docker: <DockerOriginal size="43" />
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="bg-brunswick-green rounded-lg shadow-lg overflow-hidden flex flex-col"
    >
      <div className="relative pt-[56.25%] overflow-hidden">
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="absolute top-0 left-0 w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.a>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-timberwolf mb-3">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-3 mt-2">
          {project.technologies.map((tech, index) => (
            <motion.div
              key={tech}
              className="flex items-center justify-center bg-hunter-green rounded-lg w-12 h-12 shadow-md"
              title={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {technologyIcons[tech]}
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectLinks github={project.github} live={project.live} />
    </motion.div>
  );
};

export default ProjectCard;