import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ProjectCardProps, ProjectCategory } from "../../types/projects";
import { Github } from "lucide-react";
import { technologyIcons } from "../../constants/technologyIcons";

const categoryColors: { [key in ProjectCategory]: { bg: string; text: string } } = {
  "Frontend": { bg: "bg-fern-green", text: "text-white" },
  "Backend": { bg: "bg-sage", text: "text-brunswick-green" },
  "Full-Stack": { bg: "bg-timberwolf", text: "text-brunswick-green" }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="bg-brunswick-green rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-200 ease-in-out"
    >
      <div className="relative pt-[60%] overflow-hidden">
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 shadow-[inset_0_-4px_6px_rgba(0,0,0,0.1)]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">{t('projects.viewProject')}</span>
          </div>
        </motion.a>
      </div>
      <div className="p-6 flex-grow relative">
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/20 to-transparent"></div>
        <h3 className="text-xl font-semibold mb-2 text-timberwolf">
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
      <div className="px-6 pb-6 flex justify-between items-center">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sage hover:text-timberwolf transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="View source code on GitHub"
        >
          <Github size={20} className="mr-1" />
          <span>{t('projects.source')}</span>
        </motion.a>
        <span className={`text-sm font-medium ${categoryColors[project.category].bg} ${categoryColors[project.category].text} px-3 py-1.5 rounded-full shadow-md`}>
          {t(`projects.category.${project.category}`)}
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;