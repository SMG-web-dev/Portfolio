import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ProjectProps } from "../../types/projects";
import { technologyIcons } from "../technologyIcons";
import ProjectLinks from "../Projects/ProjectLinks";

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
  onSelect?: (project: ProjectProps) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    if (onSelect) {
      onSelect(project);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      onClick={handleClick}
      className="bg-brunswick-green/90 backdrop-blur-md rounded-2xl shadow-card hover:shadow-card-hover overflow-hidden flex flex-col group transition-all duration-300 border border-fern-green/20 hover:border-fern-green/50 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-fern-green via-sage to-fern-green transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      {/* Image Preview Container */}
      <div className="relative pt-[60%] overflow-hidden bg-black/20">
        {project.inProgress && (
          <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-white backdrop-blur-md shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {t('projects.inProgress')}
          </span>
        )}
        <img
          src={project.image}
          alt={project.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brunswick-green/90 via-brunswick-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="text-white text-sm font-semibold px-4 py-2 bg-fern-green/90 backdrop-blur-md rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {t('projects.viewProject')} &rarr;
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-display font-bold text-timberwolf group-hover:text-white transition-colors line-clamp-2 mb-3">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center bg-hunter-green/60 rounded-lg w-8 h-8 border border-white/10"
                title={tech}
              >
                {technologyIcons[tech]}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Links & Badge */}
      <ProjectLinks
        github={project.github}
        live={project.live}
        category={project.category}
      />
    </motion.div>
  );
};

export default ProjectCard;