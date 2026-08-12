import React from "react";
import { motion } from "framer-motion";

interface SkillIconProps {
  skill: {
    icon: React.ElementType;
    name: string;
    color: string;
  };
  index: number;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, index }) => {
  const IconComponent = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ scale: 1.06, y: -2 }}
      className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/40 border border-white/60 hover:bg-white/80 transition-all duration-200 group shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green cursor-default"
      tabIndex={0}
      aria-label={skill.name}
    >
      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-sm group-hover:shadow-md transition-shadow mb-2`}>
        <IconComponent size={24} className="group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
      </div>
      <span className="text-xs sm:text-sm font-semibold text-brunswick-green group-hover:text-fern-green transition-colors text-center line-clamp-1">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillIcon;