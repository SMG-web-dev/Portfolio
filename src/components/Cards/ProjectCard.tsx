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
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      onClick={handleClick}
      className="bg-brunswick-green/85 backdrop-blur-xl rounded-3xl shadow-card hover:shadow-card-hover overflow-hidden flex flex-col group transition-all duration-500 border border-white/10 hover:border-fern-green/50 cursor-pointer h-full relative"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`${t('projects.viewProject')}: ${project.title}`}
    >
      {/* Top Accent Glowing Line */}
      <div className="h-1 bg-gradient-to-r from-fern-green via-sage to-fern-green transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      {/* Large Showcase Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
        {/* Status Badge */}
        <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-2">
          {project.inProgress ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-white backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              {t('projects.inProgress')}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600/90 text-white backdrop-blur-md shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
              {t('projects.production') || "En Producción"}
            </span>
          )}
        </div>

        {/* Project Thumbnail Image with Smooth Hover Zoom */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Hover Overlay with Detail Trigger */}
        <div className="absolute inset-0 bg-gradient-to-t from-brunswick-green via-brunswick-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="text-white text-sm font-semibold px-5 py-2.5 bg-fern-green/90 hover:bg-fern-green backdrop-blur-md rounded-full shadow-green transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
            {t('projects.viewProject')} &rarr;
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-sage transition-colors duration-300 mb-3.5">
            {project.title}
          </h3>

          {/* Highlighted Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-2">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-hunter-green/70 border border-white/10 hover:border-fern-green/40 text-timberwolf text-xs font-medium transition-colors"
                title={tech}
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  {technologyIcons[tech]}
                </span>
                <span className="hidden sm:inline">{tech}</span>
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