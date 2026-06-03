import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaCalendarAlt,
  FaGlobe,
} from "../../constants/icons";
import { useTranslation } from "react-i18next";
import { CollaborationProps } from "../../types/collaboration";

const CollaborationCard: React.FC<{
  collaboration: CollaborationProps;
  index: number;
}> = ({ collaboration }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as "en" | "es" | "it" | "de" | "fr";

  const getLocalizedContent = <T,>(content: Record<string, T>): T => {
    return content[currentLanguage] || content["en"];
  };

  const achievements = getLocalizedContent(collaboration.achievements);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.25)" }}
      className="bg-brunswick-green rounded-xl shadow-lg overflow-hidden transition-all duration-300"
    >
      <div className="relative h-16 sm:h-20 bg-gradient-to-br from-sage/20 to-brunswick-green">
        <div className="absolute inset-0 bg-gradient-to-r from-brunswick-green via-brunswick-green/90 to-transparent" />
        <div className="relative h-full flex items-center px-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-sage/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <motion.img
                src={collaboration.image}
                alt={collaboration.company}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <h3 className="text-timberwolf font-bold text-base sm:text-lg leading-tight">
                {collaboration.company}
              </h3>
              <p className="text-sage text-sm">
                {getLocalizedContent(collaboration.role)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-5 py-2 flex flex-wrap gap-3 sm:gap-4 border-b border-sage/20">
        <div className="flex items-center gap-1.5 text-sm text-timberwolf/70">
          <FaCalendarAlt className="text-sage text-sm flex-shrink-0" />
          <span>{getLocalizedContent(collaboration.period)}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-timberwolf/70">
          <FaUsers className="text-sage text-sm flex-shrink-0" />
          <span>{getLocalizedContent(collaboration.teamSize)}</span>
        </div>
        {collaboration.website && (
          <a
            href={collaboration.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-sage hover:text-timberwolf transition-colors duration-200"
          >
            <FaGlobe className="text-sm flex-shrink-0" />
            <span>
              {collaboration.website
                .replace(/^https?:\/\//, "")
                .replace(/\/$/, "")}
            </span>
          </a>
        )}
      </div>

      <div className="px-4 sm:px-5 py-2">
        <p className="text-timberwolf/80 text-sm leading-relaxed">
          {getLocalizedContent(collaboration.description)}
        </p>
      </div>

      <div className="px-4 sm:px-5 py-2 border-t border-sage/20">
        <div className="flex items-center gap-1.5 mb-1.5">
          <FaAward className="text-sage text-sm" />
          <span className="text-sage text-sm font-medium">
            {t("experience.achievements")}
          </span>
        </div>
        <ul className="space-y-1">
          {achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-start gap-1.5 text-timberwolf/80 text-sm leading-relaxed"
            >
              <motion.span
                className="h-1 w-1 bg-sage rounded-full mt-1.5 flex-shrink-0"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default CollaborationCard;
