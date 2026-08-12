import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaCalendarAlt,
  FaGlobe,
  FaExternalLinkAlt,
  FaCode,
  FaChartLine,
} from "../../constants/icons";
import { useTranslation } from "react-i18next";
import { CollaborationProps } from "../../types/collaboration";

const CollaborationCard: React.FC<{
  collaboration: CollaborationProps;
  index: number;
}> = ({ collaboration, index }) => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<"achievements" | "stack" | "impact">("achievements");
  const currentLanguage = (i18n.language?.split("-")[0] || "en") as "en" | "es" | "it" | "de" | "fr";

  const getLocalizedContent = <T,>(content: Record<string, T>): T => {
    return content[currentLanguage] || content["en"];
  };

  const achievements = getLocalizedContent(collaboration.achievements);
  const impactMetrics = collaboration.impactMetrics ? getLocalizedContent(collaboration.impactMetrics) : [];
  const techStack = collaboration.techStack || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-300 w-full"
    >
      {/* Top Accent Gradient Line */}
      <div className="h-1.5 bg-gradient-to-r from-fern-green via-hunter-green to-fern-green transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      {/* Card Body */}
      <div className="p-4 sm:p-7">
        {/* Company Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Logo Ring */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-white/80 flex items-center justify-center p-2 shadow-sm overflow-hidden flex-shrink-0 group-hover:border-fern-green/40 transition-colors">
              <img
                src={collaboration.image}
                alt={collaboration.company}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-brunswick-green font-display font-extrabold text-base sm:text-xl leading-snug">
                {collaboration.company}
              </h3>
              <p className="text-fern-green font-bold text-xs sm:text-sm mt-0.5">
                {getLocalizedContent(collaboration.role)}
              </p>
            </div>
          </div>

          {/* Period Badge */}
          <div className="flex items-center gap-2 self-start sm:self-center flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-hunter-green text-white font-bold text-[11px] sm:text-xs shadow-xs">
              <FaCalendarAlt size={12} />
              {getLocalizedContent(collaboration.period)}
            </span>
          </div>
        </div>

        {/* Role Overview */}
        <p className="text-brunswick-green font-medium text-xs sm:text-base leading-relaxed mb-4">
          {getLocalizedContent(collaboration.description)}
        </p>

        {/* Team Size & Website Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 mb-5 border-t border-brunswick-green/15">
          <div className="flex items-center gap-1.5 text-xs font-bold text-brunswick-green">
            <FaUsers className="text-fern-green" size={14} />
            <span>{getLocalizedContent(collaboration.teamSize)}</span>
          </div>

          {collaboration.website && (
            <a
              href={collaboration.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fern-green/15 text-brunswick-green hover:bg-fern-green hover:text-white font-bold text-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green shadow-xs"
              aria-label={`Visit ${collaboration.company} website`}
            >
              <FaGlobe size={13} />
              <span className="truncate max-w-[180px] sm:max-w-none">
                {collaboration.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
              <FaExternalLinkAlt size={10} className="ml-0.5" />
            </a>
          )}
        </div>

        {/* Interactive Tabs Header */}
        <div className="flex items-center gap-1.5 bg-sage/20 p-1 rounded-2xl mb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab("achievements")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex-1 justify-center whitespace-nowrap ${
              activeTab === "achievements"
                ? "bg-brunswick-green text-white shadow-xs"
                : "text-brunswick-green/80 hover:text-brunswick-green hover:bg-white/40"
            }`}
          >
            <FaAward size={13} />
            <span>{currentLanguage === "es" ? "Logros" : "Achievements"} ({achievements.length})</span>
          </button>

          {techStack.length > 0 && (
            <button
              onClick={() => setActiveTab("stack")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex-1 justify-center whitespace-nowrap ${
                activeTab === "stack"
                  ? "bg-brunswick-green text-white shadow-xs"
                  : "text-brunswick-green/80 hover:text-brunswick-green hover:bg-white/40"
              }`}
            >
              <FaCode size={13} />
              <span>Tech Stack ({techStack.length})</span>
            </button>
          )}

          {impactMetrics.length > 0 && (
            <button
              onClick={() => setActiveTab("impact")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex-1 justify-center whitespace-nowrap ${
                activeTab === "impact"
                  ? "bg-brunswick-green text-white shadow-xs"
                  : "text-brunswick-green/80 hover:text-brunswick-green hover:bg-white/40"
              }`}
            >
              <FaChartLine size={13} />
              <span>{currentLanguage === "es" ? "Impacto" : "Impact"}</span>
            </button>
          )}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 pt-1"
            >
              <ul className="space-y-2">
                {achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-brunswick-green font-medium text-xs sm:text-sm leading-relaxed"
                  >
                    <span className="h-2 w-2 rounded-full bg-fern-green mt-1.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === "stack" && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="pt-1"
            >
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-xl bg-fern-green/15 text-brunswick-green font-bold text-xs border border-fern-green/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "impact" && (
            <motion.div
              key="impact"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 pt-1"
            >
              <ul className="space-y-2">
                {impactMetrics.map((metric, mIdx) => (
                  <li
                    key={mIdx}
                    className="flex items-start gap-2.5 text-brunswick-green font-bold text-xs sm:text-sm leading-relaxed"
                  >
                    <span className="h-2 w-2 rounded-full bg-hunter-green mt-1.5 flex-shrink-0" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CollaborationCard;
