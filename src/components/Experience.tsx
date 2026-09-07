import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { collaborations } from "../constants/collaborations";
import CollaborationCard from "./Cards/CollaborationCard";
import { FaBriefcase, FaRocket, FaBolt } from "../constants/icons";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-24 overflow-hidden bg-timberwolf"
    >
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sage/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-fern-green/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brunswick-green text-white font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">
            <FaBriefcase size={13} />
            <span>{t("experience.journey")}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-brunswick-green tracking-tight leading-tight">
            {t("experience.title")}
          </h2>
          <div className="w-20 h-1.5 bg-fern-green mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Top Career KPI Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 sm:mb-14"
        >
          {/* Mobile View: Sleek Unified Glass Capsule (Compact & Ergonomic) */}
          <div className="sm:hidden bg-white/85 backdrop-blur-md border border-white/70 rounded-2xl shadow-sm p-3">
            <div className="grid grid-cols-3 divide-x divide-brunswick-green/15 text-center">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center px-1">
                <div className="w-7 h-7 rounded-full bg-fern-green/10 flex items-center justify-center mb-1 text-fern-green">
                  <FaBriefcase size={12} />
                </div>
                <span className="font-display font-black text-lg text-brunswick-green leading-none">
                  {collaborations.length}
                </span>
                <span className="text-[10px] font-bold text-brunswick-green/75 uppercase tracking-wide mt-1 text-center line-clamp-2 leading-tight">
                  {t("experience.keyPositions")}
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center px-1">
                <div className="w-7 h-7 rounded-full bg-fern-green/10 flex items-center justify-center mb-1 text-fern-green">
                  <FaRocket size={12} />
                </div>
                <span className="font-display font-black text-lg text-brunswick-green leading-none">
                  8+
                </span>
                <span className="text-[10px] font-bold text-brunswick-green/75 uppercase tracking-wide mt-1 text-center line-clamp-2 leading-tight">
                  {t("experience.projectsDelivered")}
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center px-1">
                <div className="w-7 h-7 rounded-full bg-fern-green/10 flex items-center justify-center mb-1 text-fern-green">
                  <FaBolt size={12} />
                </div>
                <span className="font-display font-black text-lg text-brunswick-green leading-none">
                  100%
                </span>
                <span className="text-[10px] font-bold text-brunswick-green/75 uppercase tracking-wide mt-1 text-center line-clamp-2 leading-tight">
                  {t("experience.agileFocus")}
                </span>
              </div>
            </div>
          </div>

          {/* Tablet & Desktop View: 3 Refined Glassmorphism Cards */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-4">
            <div className="bg-white/80 hover:bg-white/95 transition-all duration-300 backdrop-blur-md border border-white/60 p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-md text-center flex flex-col items-center justify-center group hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-fern-green/10 group-hover:bg-fern-green/15 transition-colors flex items-center justify-center mb-2 text-fern-green">
                <FaBriefcase size={18} />
              </div>
              <span className="font-display font-black text-2xl lg:text-3xl text-brunswick-green">
                {collaborations.length}
              </span>
              <span className="text-xs font-bold text-brunswick-green/80 uppercase tracking-wider mt-0.5">
                {t("experience.keyPositions")}
              </span>
            </div>

            <div className="bg-white/80 hover:bg-white/95 transition-all duration-300 backdrop-blur-md border border-white/60 p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-md text-center flex flex-col items-center justify-center group hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-fern-green/10 group-hover:bg-fern-green/15 transition-colors flex items-center justify-center mb-2 text-fern-green">
                <FaRocket size={18} />
              </div>
              <span className="font-display font-black text-2xl lg:text-3xl text-brunswick-green">8+</span>
              <span className="text-xs font-bold text-brunswick-green/80 uppercase tracking-wider mt-0.5">
                {t("experience.projectsDelivered")}
              </span>
            </div>

            <div className="bg-white/80 hover:bg-white/95 transition-all duration-300 backdrop-blur-md border border-white/60 p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-md text-center flex flex-col items-center justify-center group hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-fern-green/10 group-hover:bg-fern-green/15 transition-colors flex items-center justify-center mb-2 text-fern-green">
                <FaBolt size={18} />
              </div>
              <span className="font-display font-black text-2xl lg:text-3xl text-brunswick-green">100%</span>
              <span className="text-xs font-bold text-brunswick-green/80 uppercase tracking-wider mt-0.5">
                {t("experience.agileFocus")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Vertical Timeline Axis */}
        <div className="relative pl-4 sm:pl-8 lg:pl-10 space-y-8 sm:space-y-12">
          {/* Animated Glowing Laser Vertical Line */}
          <div className="absolute top-2 bottom-2 left-4 sm:left-8 lg:left-10 w-1 bg-gradient-to-b from-fern-green via-sage to-fern-green rounded-full shadow-green-glow -translate-x-1/2" />

          {collaborations.map((item, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline Pulsing Node Dot */}
              <div className="absolute -left-4 sm:-left-8 lg:-left-10 top-7 -translate-x-1/2 flex items-center justify-center z-10">
                <span className="relative flex h-3.5 w-3.5 sm:h-4 sm:w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fern-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-fern-green border-2 border-white shadow-md" />
                </span>
              </div>

              {/* Experience Card Component */}
              <div className="w-full pl-6 sm:pl-10">
                <CollaborationCard collaboration={item} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
