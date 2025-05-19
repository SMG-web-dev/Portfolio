import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ProjectLinksProps } from "../../types/projects";

const ProjectLinks: React.FC<ProjectLinksProps> = ({ github, live }) => {
  const { t } = useTranslation();

  return (
    <div className="px-6 pb-6 flex justify-between">
      <motion.a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sage hover:text-timberwolf transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="View source code on GitHub"
      >
        <Github size={20} className="mr-1" aria-hidden="true" />
        <span>{t('projects.source')}</span>
      </motion.a>
      {live && (
        <motion.a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sage hover:text-timberwolf transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="View live demo"
        >
          <ExternalLink size={20} className="mr-1" aria-hidden="true" />
          <span>{t('projects.liveDemo')}</span>
        </motion.a>
      )}
    </div>
  );
};

export default ProjectLinks;