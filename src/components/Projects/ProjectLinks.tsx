import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectLinksProps {
  github: string;
  live: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ github, live }) => {
  return (
    <div className="px-6 pb-6 flex justify-between">
      <motion.a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sage hover:text-timberwolf transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Github size={20} className="mr-1" aria-hidden="true" />
        <span>Source</span>
      </motion.a>
      {live && (
        <motion.a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sage hover:text-timberwolf transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink size={20} className="mr-1" aria-hidden="true" />
          <span>Live Demo</span>
        </motion.a>
      )}
    </div>
  );
};

export default ProjectLinks;