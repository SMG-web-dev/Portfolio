import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "../../constants/icons";
import { useTranslation } from "react-i18next";
import { ProjectCategory } from "../../types/projects";

interface ProjectLinksProps {
  github?: string | null;
  live: string;
  category: ProjectCategory;
}

const categoryColors: { [key in ProjectCategory]: { bg: string; text: string; border: string } } = {
  "Frontend": { bg: "bg-fern-green/20", text: "text-sage", border: "border-fern-green/40" },
  "Backend": { bg: "bg-sage/20", text: "text-sage", border: "border-sage/40" },
  "Full-Stack": { bg: "bg-timberwolf/20", text: "text-timberwolf", border: "border-timberwolf/30" }
};

const ProjectLinks: React.FC<ProjectLinksProps> = ({ live, category }) => {
  const { t } = useTranslation();
  const catStyle = categoryColors[category] || { bg: "bg-sage/20", text: "text-sage", border: "border-sage/40" };

  return (
    <div className="px-6 pb-6 pt-3 flex items-center justify-between gap-3 border-t border-white/10">
      {live && (
        <motion.a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-fern-green hover:bg-sage text-white hover:text-brunswick-green transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label={`${t('projects.liveDemo')}`}
        >
          <FaExternalLinkAlt size={12} aria-hidden="true" />
          <span>{t('projects.liveDemo')}</span>
        </motion.a>
      )}

      <span className={`text-xs font-medium px-3.5 py-1 rounded-full border ${catStyle.bg} ${catStyle.text} ${catStyle.border}`}>
        {t(`projects.category.${category}`)}
      </span>
    </div>
  );
};

export default ProjectLinks;
