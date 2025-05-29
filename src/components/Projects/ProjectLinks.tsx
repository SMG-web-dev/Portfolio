import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLock } from "../../constants/icons";
import { useTranslation } from "react-i18next";
import { ProjectLinksProps, ProjectCategory } from "../../types/projects";

const categoryColors: { [key in ProjectCategory]: { bg: string; text: string } } = {
  "Frontend": { bg: "bg-fern-green", text: "text-white" },
  "Backend": { bg: "bg-sage", text: "text-brunswick-green" },
  "Full-Stack": { bg: "bg-timberwolf", text: "text-brunswick-green" }
};

const ProjectLinks: React.FC<ProjectLinksProps> = ({ github, category }) => {
  const { t } = useTranslation();

  return (
    <div className="px-6 pb-6 flex justify-between items-center">
      {github ? (
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sage hover:text-timberwolf transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="View source code on GitHub"
        >
          <FaGithub size={20} className="mr-1" aria-hidden="true" />
          <span>{t('projects.source')}</span>
        </motion.a>
      ) : (
        <motion.div
          className="flex items-center text-gray-400 cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
        >
          <FaLock size={20} className="mr-1" aria-hidden="true" />
          <span>{t('projects.private') || "Private"}</span>
        </motion.div>
      )}

      <span className={`text-sm font-medium ${categoryColors[category].bg} ${categoryColors[category].text} px-3 py-1.5 rounded-full shadow-md`}>
        {t(`projects.category.${category}`)}
      </span>
    </div>
  );
};

export default ProjectLinks;