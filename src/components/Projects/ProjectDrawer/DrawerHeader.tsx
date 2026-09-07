import React from "react";
import { FiX, FaGlobe, FaGithub, FaExternalLinkAlt } from "../../../constants/icons";
import { ProjectProps } from "../../../types/projects";
import { useTranslation } from "react-i18next";
import TechBadge from "../TechBadge";

export type DrawerTabKey = "architecture" | "engineering" | "tradeoffs" | "gallery";

interface DrawerHeaderProps {
  project: ProjectProps;
  activeTab: DrawerTabKey;
  onTabChange: (tab: DrawerTabKey) => void;
  onClose: () => void;
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  project,
  activeTab,
  onTabChange,
  onClose,
}) => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");

  const tagline = isEn ? project.taglineEn || project.tagline : project.tagline;
  const sellingAngle = isEn ? project.sellingAngleEn || project.sellingAngle : project.sellingAngle;

  const tabs: { key: DrawerTabKey; label: string }[] = [
    { key: "architecture", label: isEn ? "Architecture & Stack" : "Arquitectura & Stack" },
    { key: "engineering", label: isEn ? "Features & Solution" : "Características & Solución" },
    { key: "tradeoffs", label: isEn ? "Decisions & Value" : "Decisiones & Valor" },
    { key: "gallery", label: isEn ? "Screenshots & Live" : "Capturas & Live" },
  ];

  return (
    <header className="relative w-full border-b border-white/10 bg-brunswick-green/98 pt-6 sm:pt-7">
      {/* Top Controls & Badges */}
      <div className="px-6 sm:px-8 flex items-start justify-between gap-4">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2 max-w-[calc(100%-3.5rem)]">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-fern-green/25 text-sage border border-fern-green/40 shadow-xs">
            {sellingAngle}
          </span>
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-hunter-green/80 text-timberwolf border border-white/10">
            {project.category}
          </span>
          {project.inProgress ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-white shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              {t("projects.inProgress") || "En Desarrollo"}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600/90 text-white shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
              {t("projects.production") || "En Producción"}
            </span>
          )}
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 text-white hover:bg-fern-green hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green flex-shrink-0"
          aria-label={t("menu.close") || "Cerrar modal"}
        >
          <FiX size={20} />
        </button>
      </div>

      {/* Main Title, Tagline & Direct Links */}
      <div className="px-6 sm:px-8 mt-4 mb-5 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
            {project.title}
          </h2>
          <p className="text-timberwolf/90 text-sm sm:text-base font-sans mt-1.5 leading-relaxed">
            {tagline}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-hunter-green/80 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/10"
            >
              <FaGithub size={15} />
              <span>{t("projects.source") || "Código"}</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-fern-green hover:bg-sage hover:text-brunswick-green text-white text-xs sm:text-sm font-semibold transition-all shadow-green"
            >
              <FaGlobe size={15} />
              <span>{t("projects.liveDemo") || "Visitar Web"}</span>
              <FaExternalLinkAlt size={10} />
            </a>
          )}
        </div>
      </div>

      {/* Primary Tech Badges Row */}
      <div className="px-6 sm:px-8 py-2.5 bg-hunter-green/35 border-t border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[11px] uppercase tracking-wider text-sage font-semibold flex-shrink-0 mr-1">
          Stack:
        </span>
        {project.technologies.map((tech) => (
          <TechBadge key={tech} tech={tech} size="sm" />
        ))}
      </div>

      {/* Interactive Tabs Navigation */}
      <nav className="px-6 sm:px-8 flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar border-t border-white/10 bg-brunswick-green">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onTabChange(tab.key)}
              className={`py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-medium transition-all relative whitespace-nowrap flex-shrink-0 ${
                isActive
                  ? "text-white font-semibold"
                  : "text-timberwolf/70 hover:text-timberwolf"
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-fern-green via-sage to-fern-green rounded-full" />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default DrawerHeader;
