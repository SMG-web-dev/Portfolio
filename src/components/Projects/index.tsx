import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectBentoCard from "./ProjectBentoCard";
import ProjectDrawer from "./ProjectDrawer";
import { featuredProjects } from "../../constants/projects";
import { useTranslation } from "react-i18next";
import { ProjectProps } from "../../types/projects";

// Helper to parse project ID from URL hash (e.g., #project=neoon or #neoon)
const getProjectFromHash = (): ProjectProps | null => {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.toLowerCase();
  const match = hash.match(/#project=([a-z0-9-]+)/) || hash.match(/#([a-z0-9-]+)/);
  if (match && match[1]) {
    const found = featuredProjects.find((p) => p.id === match[1]);
    return found || null;
  }
  return null;
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(getProjectFromHash);

  // Listen for history back/forward navigation and external hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const p = getProjectFromHash();
      setSelectedProject(p);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  // Handle project selection and sync with URL hash
  const handleSelectProject = (project: ProjectProps) => {
    setSelectedProject(project);
    if (typeof window !== "undefined") {
      window.history.pushState(
        { projectId: project.id },
        "",
        `#project=${project.id}`
      );
    }
  };

  // Handle close drawer and clear hash
  const handleCloseDrawer = () => {
    setSelectedProject(null);
    if (typeof window !== "undefined") {
      // Revert URL hash to clean #projects section without reloading
      window.history.pushState(null, "", "#projects");
    }
  };

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

      <div className="container mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-fern-green/20 text-sage border border-fern-green/30 mb-4">
            Production Architecture & Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-timberwolf mb-5 tracking-tight">
            {t("projects.title")}
          </h2>
          <p className="text-timberwolf/80 text-base md:text-lg leading-relaxed mb-6 font-sans">
            {t("projects.subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sage to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Featured Projects - Horizontal Executive Showcase */}
        <div className="space-y-8 sm:space-y-12">
          {featuredProjects.map((project, index) => (
            <ProjectBentoCard
              key={project.id}
              project={project}
              index={index}
              onSelect={handleSelectProject}
            />
          ))}
        </div>
      </div>

      {/* Deep-Dive Technical Drawer */}
      <ProjectDrawer
        project={selectedProject}
        onClose={handleCloseDrawer}
      />
    </section>
  );
};

export default Projects;
