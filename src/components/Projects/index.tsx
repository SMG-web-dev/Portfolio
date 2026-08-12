import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../Cards/ProjectCard";
import ProjectModal from "./ProjectModal";
import { personalProjects, freelanceProjects } from "../../constants/projects";
import { useTranslation } from "react-i18next";
import { ProjectProps } from "../../types/projects";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "freelance" | "personal">("all");

  const allProjects = [...freelanceProjects, ...personalProjects];

  const filteredProjects =
    activeTab === "freelance"
      ? freelanceProjects
      : activeTab === "personal"
      ? personalProjects
      : allProjects;

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-brunswick-green/95 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-timberwolf mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1.5 bg-sage mx-auto rounded-full opacity-80" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green ${
              activeTab === "all"
                ? "bg-fern-green text-white shadow-green font-semibold"
                : "bg-white/10 text-timberwolf/80 hover:text-white hover:bg-white/15"
            }`}
          >
            {t('menu.projects')} ({allProjects.length})
          </button>
          <button
            onClick={() => setActiveTab("freelance")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green ${
              activeTab === "freelance"
                ? "bg-fern-green text-white shadow-green font-semibold"
                : "bg-white/10 text-timberwolf/80 hover:text-white hover:bg-white/15"
            }`}
          >
            {t('projects.freelance')} ({freelanceProjects.length})
          </button>
          <button
            onClick={() => setActiveTab("personal")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green ${
              activeTab === "personal"
                ? "bg-fern-green text-white shadow-green font-semibold"
                : "bg-white/10 text-timberwolf/80 hover:text-white hover:bg-white/15"
            }`}
          >
            {t('projects.personal')} ({personalProjects.length})
          </button>
        </div>

        {/* Projects Grid with AnimatePresence & Layout animation */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onSelect={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
