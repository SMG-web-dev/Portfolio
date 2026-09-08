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
      className="group relative bg-white/90 dark:bg-[#111e16] backdrop-blur-md border border-white/60 dark:border-white/10 hover:border-fern-green/40 rounded-3xl shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-300 w-full"
    >
      {/* Top Accent Gradient Line */}
      <div className="h-1.5 bg-gradient-to-r from-fern-green via-sage to-fern-green transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      {/* Card Body */}
      <div className="p-4 sm:p-7">
        {/* Company Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Logo Container - ALWAYS white background for authentic brand colors & contrast */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-black/10 dark:border-white/20 flex items-center justify-center p-2 shadow-sm overflow-hidden flex-shrink-0 group-hover:border-fern-green/40 transition-colors">
              <img
                src={collaboration.image}
                alt={collaboration.company}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-brunswick-green dark:text-white font-display font-black text-base sm:text-xl leading-snug">
                {collaboration.company}
              </h3>
              <p className="text-fern-green dark:text-sage font-bold text-xs sm:text-sm mt-0.5">
                {getLocalizedContent(collaboration.role)}
              </p>
            </div>
          </div>

          {/* Period Badge */}
          <div className="flex items-center gap-2 self-start sm:self-center flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-hunter-green text-white dark:bg-fern-green/20 dark:text-sage dark:border dark:border-fern-green/30 font-bold text-[11px] sm:text-xs shadow-xs">
              <FaCalendarAlt size={12} />
              {getLocalizedContent(collaboration.period)}
            </span>
          </div>
        </div>

        {/* Role Overview */}
        <p className="text-brunswick-green dark:text-white/85 font-medium text-xs sm:text-base leading-relaxed mb-4">
          {getLocalizedContent(collaboration.description)}
        </p>

        {/* Team Size & Website Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 mb-5 border-t border-brunswick-green/15 dark:border-white/10">
          <div className="flex items-center gap-1.5 text-xs font-bold text-brunswick-green dark:text-timberwolf/90">
            <FaUsers className="text-fern-green dark:text-sage" size={14} />
            <span>{getLocalizedContent(collaboration.teamSize)}</span>
          </div>

          {collaboration.website && (
            <a
              href={collaboration.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fern-green/15 text-brunswick-green hover:bg-fern-green hover:text-white dark:bg-white/10 dark:hover:bg-fern-green dark:text-white font-bold text-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green shadow-xs"
              aria-label={`Visit ${collaboration.company} website`}
            >
              <FaGlobe size={13} className="text-fern-green dark:text-sage" />
              <span className="truncate max-w-[180px] sm:max-w-none">
                {collaboration.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
              <FaExternalLinkAlt size={10} className="ml-0.5" />
            </a>
          )}
        </div>

        {/* Interactive Tabs Header */}
        <div className="flex items-center gap-1.5 bg-sage/20 dark:bg-black/40 dark:border dark:border-white/10 p-1 rounded-2xl mb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab("achievements")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex-1 justify-center whitespace-nowrap ${
              activeTab === "achievements"
                ? "bg-brunswick-green text-white shadow-xs dark:bg-fern-green"
                : "text-brunswick-green/80 hover:text-brunswick-green hover:bg-white/40 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10"
            }`}
          >
            <FaAward size={13} />
            <span>{t("experience.achievementsTab")} ({achievements.length})</span>
          </button>

          {techStack.length > 0 && (
            <button
              onClick={() => setActiveTab("stack")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex-1 justify-center whitespace-nowrap ${
                activeTab === "stack"
                  ? "bg-brunswick-green text-white shadow-xs dark:bg-fern-green"
                  : "text-brunswick-green/80 hover:text-brunswick-green hover:bg-white/40 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10"
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
                  ? "bg-brunswick-green text-white shadow-xs dark:bg-fern-green"
                  : "text-brunswick-green/80 hover:text-brunswick-green hover:bg-white/40 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10"
              }`}
            >
              <FaChartLine size={13} />
              <span>{t("experience.impactTab")}</span>
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
                    className="flex items-start gap-2.5 text-brunswick-green dark:text-white/90 font-medium text-xs sm:text-sm leading-relaxed"
                  >
                    <span className="h-2 w-2 rounded-full bg-fern-green dark:bg-sage mt-1.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {techStack.length > 0 && activeTab === "stack" && (
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
                    className="px-3 py-1 rounded-xl bg-fern-green/15 text-brunswick-green font-bold text-xs border border-fern-green/20 dark:bg-black/40 dark:text-white/90 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {impactMetrics.length > 0 && activeTab === "impact" && (
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
                    className="flex items-start gap-2.5 text-brunswick-green dark:text-white/95 font-bold text-xs sm:text-sm leading-relaxed"
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
