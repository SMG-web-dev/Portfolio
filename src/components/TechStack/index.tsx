import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryCard from "../Cards/CategoryCard";
import { techStackCategories } from "../../constants/techStack";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export default function TechStack() {
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredCategories =
    selectedFilter === "all"
      ? techStackCategories
      : techStackCategories.filter((cat) => cat.name.toLowerCase().includes(selectedFilter));

  return (
    <section
      id="techstack"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sage/30 via-timberwolf to-sage/40 overflow-hidden relative"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brunswick-green mb-4">
            {t('techstack.title')}
          </h2>
          <div className="w-24 h-1.5 bg-fern-green mx-auto rounded-full opacity-80" />
        </motion.div>

        {/* Ecosystem Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
          {[
            { id: "all", labelKey: "techstack.filterAll" },
            { id: "frontend", labelKey: "techstack.frontend" },
            { id: "backenddatabases", labelKey: "techstack.backendDatabases" },
            { id: "clouddevops", labelKey: "techstack.cloudDevops" },
            { id: "aiengineering", labelKey: "techstack.filterAi" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green ${
                selectedFilter === tab.id
                  ? "bg-brunswick-green text-white shadow-green"
                  : "bg-white/60 text-brunswick-green/80 hover:bg-white/90 hover:text-brunswick-green border border-white/50"
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <CategoryCard category={category} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}