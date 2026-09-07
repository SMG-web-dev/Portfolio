import React from "react";
import { ProjectProps } from "../../../types/projects";
import { useTranslation } from "react-i18next";
import { FaCheck, FaBolt } from "../../../constants/icons";

interface TabEngineeringProps {
  project: ProjectProps;
}

export const TabEngineering: React.FC<TabEngineeringProps> = ({ project }) => {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-xs uppercase tracking-wider text-sage font-semibold">
          {isEn ? "Key Features & Business Impact" : "Funcionalidades Clave & Impacto de Negocio"}
        </h3>
        <span className="text-[11px] text-timberwolf/60 font-mono">
          {project.technicalHighlights.length} {isEn ? "features" : "funcionalidades"}
        </span>
      </div>

      <div className="space-y-5">
        {project.technicalHighlights.map((highlight, index) => {
          const title = isEn ? highlight.titleEn || highlight.title : highlight.title;
          const description = isEn ? highlight.descriptionEn || highlight.description : highlight.description;
          const bullets = isEn ? highlight.bulletsEn || highlight.bullets : highlight.bullets;

          return (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-fern-green/40 transition-all space-y-4"
            >
              {/* Highlight Header */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <span className="text-fern-green">
                    <FaBolt size={14} />
                  </span>
                  <span>{title}</span>
                </h4>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-fern-green/20 text-sage border border-fern-green/30">
                  {highlight.tag}
                </span>
              </div>

              {/* Description */}
              <p className="text-timberwolf/90 text-sm leading-relaxed font-sans">
                {description}
              </p>

              {/* Verified Technical Bullets */}
              <div className="p-4 rounded-xl bg-hunter-green/40 border border-white/5 space-y-2.5">
                {bullets.map((bullet, bIndex) => (
                  <div key={bIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-timberwolf/90 leading-relaxed font-sans">
                    <FaCheck className="text-fern-green mt-1 flex-shrink-0" size={13} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabEngineering;
