import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ProjectProps } from "../../types/projects";
import TechBadge from "./TechBadge";
import { FaGlobe, FaGithub, FaCheck, FaExternalLinkAlt, FaChartLine } from "../../constants/icons";

interface ProjectBentoCardProps {
  project: ProjectProps;
  index: number;
  onSelect: (project: ProjectProps) => void;
}

export const ProjectBentoCard: React.FC<ProjectBentoCardProps> = ({
  project,
  index,
  onSelect,
}) => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");

  const tagline = isEn ? project.taglineEn || project.tagline : project.tagline;
  const sellingAngle = isEn ? project.sellingAngleEn || project.sellingAngle : project.sellingAngle;
  const headlineMetric = isEn ? project.headlineMetricEn || project.headlineMetric : project.headlineMetric;
  const highlights = isEn ? project.quickHighlightsEn || project.quickHighlights : project.quickHighlights;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      className="group relative flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-10 w-full rounded-3xl bg-brunswick-green/90 border border-white/10 backdrop-blur-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:border-fern-green/50 p-6 sm:p-7 lg:p-8"
    >
      {/* Top Ambient Accent Glow Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-fern-green via-sage to-fern-green transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-20" />

      {/* Left Column: Top-Left Uncropped Visual Preview & Desktop KPI */}
      <div className="w-full lg:w-[400px] xl:w-[460px] flex-shrink-0 flex flex-col gap-4">
        {/* Screenshot Container - strictly 16:10 widescreen proportion, never vertically stretched */}
        <div
          className="relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-black/70 border border-white/10 shadow-md cursor-pointer group/img"
          onClick={() => onSelect(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
          />
          {/* Subtle Soft Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

          {/* Top Badges: Category & Production Status */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/70 text-timberwolf backdrop-blur-md border border-white/15 shadow-sm">
              {project.category}
            </span>

            {project.inProgress ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/90 text-white backdrop-blur-md shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                {t("projects.inProgress") || "En Desarrollo"}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-600/95 text-white backdrop-blur-md shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
                {t("projects.production") || "En Producción"}
              </span>
            )}
          </div>

          {/* Quick View Button Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="px-4 py-2 rounded-full bg-fern-green text-white font-semibold text-xs shadow-green transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300 flex items-center gap-1.5">
              <span>{t("projects.viewEngineeringCase") || "Ver Caso de Ingeniería"}</span>
              <span aria-hidden="true">&rarr;</span>
            </span>
          </div>
        </div>

        {/* Desktop Headline Metric Callout Box (under image on desktop) */}
        {headlineMetric && (
          <div className="hidden lg:flex p-4 rounded-2xl bg-hunter-green/50 border border-white/10 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-fern-green/25 border border-fern-green/40 flex items-center justify-center text-sage flex-shrink-0">
                <FaChartLine size={18} />
              </div>
              <div>
                <div className="text-xs text-timberwolf/85 uppercase tracking-wider font-semibold">
                  {headlineMetric.label}
                </div>
                {headlineMetric.sublabel && (
                  <div className="text-[11px] text-timberwolf/50 font-sans">
                    {headlineMetric.sublabel}
                  </div>
                )}
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight px-1 text-right whitespace-nowrap">
              {headlineMetric.value}
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Narrative, Highlights, Tech Stack & Actions */}
      <div className="flex-1 flex flex-col justify-between space-y-5 w-full">
        <div>
          {/* Selling Angle Tag */}
          <div className="mb-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-fern-green/20 text-sage border border-fern-green/35 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
              {sellingAngle}
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="mb-4">
            <h3
              onClick={() => onSelect(project)}
              className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-sage transition-colors duration-300 cursor-pointer inline-block leading-tight"
            >
              {project.title}
            </h3>
            <p className="text-timberwolf/90 text-sm sm:text-base leading-relaxed mt-1 font-sans">
              {tagline}
            </p>
          </div>

          {/* Mobile Headline Metric Box (visible only on mobile) */}
          {headlineMetric && (
            <div className="lg:hidden mb-4 p-3.5 sm:p-4 rounded-2xl bg-hunter-green/50 border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-fern-green/25 border border-fern-green/40 flex items-center justify-center text-sage flex-shrink-0">
                  <FaChartLine size={17} />
                </div>
                <div>
                  <div className="text-xs text-timberwolf/85 uppercase tracking-wider font-semibold">
                    {headlineMetric.label}
                  </div>
                  {headlineMetric.sublabel && (
                    <div className="text-[11px] text-timberwolf/50 font-sans">
                      {headlineMetric.sublabel}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight px-1 text-right whitespace-nowrap">
                {headlineMetric.value}
              </div>
            </div>
          )}

          {/* 3 Key Engineering Highlights */}
          <div className="space-y-2.5 mb-5">
            {highlights.map((highlight, hIndex) => (
              <div key={hIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-timberwolf/90 leading-relaxed font-sans">
                <FaCheck className="text-fern-green mt-1 flex-shrink-0" size={13} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges List */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.technologies.slice(0, 7).map((tech) => (
              <TechBadge key={tech} tech={tech} size="sm" />
            ))}
            {project.technologies.length > 7 && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium text-timberwolf/60 bg-hunter-green/40 border border-white/5">
                +{project.technologies.length - 7} más
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-fern-green hover:bg-sage hover:text-brunswick-green text-white font-semibold text-xs sm:text-sm transition-all shadow-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green"
          >
            <span>{t("projects.viewEngineeringCase") || "Caso de Ingeniería"}</span>
            <span aria-hidden="true">&rarr;</span>
          </button>

          <div className="flex items-center gap-2.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-hunter-green/80 hover:bg-white/20 text-white transition-colors border border-white/10"
                title={t("projects.source") || "Código Fuente"}
                aria-label={`${project.title} GitHub`}
              >
                <FaGithub size={16} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-hunter-green/80 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-medium border border-white/10"
                title={t("projects.liveDemo") || "Visitar Web"}
                aria-label={`${project.title} Live`}
              >
                <FaGlobe size={15} />
                <span className="hidden xs:inline">{t("projects.live") || "Demo"}</span>
                <FaExternalLinkAlt size={10} className="opacity-70" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectBentoCard;
