import React from "react";
import { motion } from "framer-motion";
import SkillIcon from "../TechStack/SkillIcon";
import { useTranslation } from "react-i18next";

interface CategoryCardProps {
  category: {
    name: string;
    techstack: Array<{
      icon: React.ElementType;
      name: string;
      color: string;
    }>;
  };
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const { t } = useTranslation();
  const isAICategory = category.name === "techstack.aiEngineering";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative rounded-3xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 ${
        isAICategory
          ? "bg-gradient-to-br from-brunswick-green/90 to-hunter-green/90 border-2 border-fern-green/50 shadow-green-lg text-white"
          : "bg-white/80 border border-white/50 shadow-card hover:shadow-card-hover text-brunswick-green"
      }`}
    >
      {/* Category Header */}
      <div className="flex items-center justify-between mb-6">
        <h3
          className={`text-xl sm:text-2xl font-display font-bold ${
            isAICategory ? "text-white" : "text-brunswick-green"
          }`}
        >
          {t(category.name)}
        </h3>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-4">
        {category.techstack.map((skill, skillIndex) => (
          <SkillIcon key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryCard;