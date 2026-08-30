import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../Cards/ProjectCard";
import ProjectModal from "./ProjectModal";
import { featuredProjects } from "../../constants/projects";
import { useTranslation } from "react-i18next";
import { ProjectProps } from "../../types/projects";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-brunswick-green/95 relative overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-fern-green/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-72 h-72 bg-sage/10 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-fern-green/20 text-sage border border-fern-green/30 mb-4">
            Showcase
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-timberwolf mb-5 tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="text-timberwolf/80 text-base md:text-lg leading-relaxed mb-6 font-sans">
            {t('projects.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sage to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* 3 Featured Projects Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className="h-full">
              <ProjectCard
                project={project}
                index={index}
                onSelect={(p) => setSelectedProject(p)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;

