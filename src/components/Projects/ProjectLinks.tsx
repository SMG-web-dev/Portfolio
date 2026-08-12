import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLock } from "../../constants/icons";
import { useTranslation } from "react-i18next";
import { ProjectLinksProps, ProjectCategory } from "../../types/projects";

const categoryColors: { [key in ProjectCategory]: { bg: string; text: string } } = {
  "Frontend": { bg: "bg-fern-green/90", text: "text-white" },
  "Backend": { bg: "bg-sage", text: "text-brunswick-green font-semibold" },
  "Full-Stack": { bg: "bg-timberwolf", text: "text-brunswick-green font-semibold" }
};

const ProjectLinks: React.FC<ProjectLinksProps> = ({ github, category }) => {
  const { t } = useTranslation();
  const catStyle = categoryColors[category] || { bg: "bg-sage", text: "text-brunswick-green" };

  return (
    <div className="px-5 pb-5 pt-2 flex justify-between items-center border-t border-white/10">
      {github ? (
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-timberwolf/90 hover:text-white font-medium text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green rounded-md px-2 py-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`${t('projects.source')} code for project`}
        >
          <FaGithub size={18} className="mr-1.5" aria-hidden="true" />
          <span>{t('projects.source')}</span>
        </motion.a>
      ) : (
        <div
          className="flex items-center text-timberwolf/50 text-sm font-medium cursor-not-allowed px-2 py-1"
          title="Private repository"
        >
          <FaLock size={16} className="mr-1.5" aria-hidden="true" />
          <span>{t('projects.private') || "Private"}</span>
        </div>
      )}

      <span className={`text-xs font-semibold ${catStyle.bg} ${catStyle.text} px-3 py-1 rounded-full shadow-sm`}>
        {t(`projects.category.${category}`)}
      </span>
    </div>
  );
};

export default ProjectLinks;