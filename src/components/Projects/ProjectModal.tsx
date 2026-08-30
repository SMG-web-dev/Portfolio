import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FiX, FaCheck } from "../../constants/icons";
import { useTranslation } from "react-i18next";
import { ProjectProps } from "../../types/projects";
import { technologyIcons } from "../technologyIcons";

interface ProjectModalProps {
  project: ProjectProps | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-brunswick-green/95 border border-white/20 rounded-3xl shadow-green-lg text-timberwolf flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Header Image & Overlay */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brunswick-green via-brunswick-green/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 text-white hover:bg-fern-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green"
              aria-label="Close modal"
            >
              <FiX size={22} />
            </button>

            {/* Title & Category Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-fern-green/90 text-white shadow-sm">
                  {t(`projects.category.${project.category}`)}
                </span>
                {project.inProgress ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/90 text-white shadow-sm backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {t('projects.inProgress')}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-600/90 text-white shadow-sm backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
                    {t('projects.production') || "En Producción"}
                  </span>
                )}
              </div>
              <h2
                id="modal-project-title"
                className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight"
              >
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6 flex-grow">
            {/* Tech Stack Chips */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sage mb-3">
                {t('projects.techUsed')}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 border border-white/10 text-white text-sm font-medium"
                  >
                    <span className="w-5 h-5 flex items-center justify-center">
                      {technologyIcons[tech]}
                    </span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sage mb-3">
                {t('projects.keyFeatures')}
              </h3>
              <ul className="space-y-2.5 text-timberwolf/90 text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <FaCheck className="text-fern-green mt-1 flex-shrink-0" size={16} />
                  <span>{t('projects.feature1')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheck className="text-fern-green mt-1 flex-shrink-0" size={16} />
                  <span>{t('projects.feature2')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheck className="text-fern-green mt-1 flex-shrink-0" size={16} />
                  <span>{t('projects.feature3')}</span>
                </li>
              </ul>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-fern-green text-white font-semibold text-sm hover:bg-sage hover:text-brunswick-green transition-all shadow-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green"
                >
                  <FaGlobe size={16} />
                  <span>{t('projects.liveDemo')}</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;


