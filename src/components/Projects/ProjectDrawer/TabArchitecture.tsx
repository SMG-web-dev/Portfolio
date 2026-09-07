import React from "react";
import { ProjectProps } from "../../../types/projects";
import { useTranslation } from "react-i18next";
import TechBadge from "../TechBadge";
import { FiLayers } from "../../../constants/icons";

interface TabArchitectureProps {
  project: ProjectProps;
}

export const TabArchitecture: React.FC<TabArchitectureProps> = ({ project }) => {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");

  const summary = isEn ? project.architecture.summaryEn || project.architecture.summary : project.architecture.summary;

  return (
    <div className="space-y-6">
      {/* Architecture Overview Callout */}
      <div className="p-5 rounded-2xl bg-hunter-green/40 border border-white/10">
        <div className="flex items-center gap-2.5 mb-2 text-sage">
          <FiLayers size={18} />
          <h3 className="text-sm font-semibold uppercase tracking-wider">
            {isEn ? "Architectural Overview" : "Resumen de Arquitectura"}
          </h3>
        </div>
        <p className="text-timberwolf/90 text-sm sm:text-base leading-relaxed font-sans">
          {summary}
        </p>
      </div>

      {/* Layer by Layer Breakdown */}
      <div className="space-y-4">
        <h4 className="text-xs uppercase tracking-wider text-sage font-semibold px-1">
          {isEn ? "System Layers & Boundaries" : "Capas del Sistema & Desacoplamiento"}
        </h4>

        {project.architecture.layers.map((layer, index) => {
          const name = isEn ? layer.nameEn || layer.name : layer.name;
          const details = isEn ? layer.detailsEn || layer.details : layer.details;

          return (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-fern-green/40 transition-colors space-y-3"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-fern-green/20 text-sage border border-fern-green/30">
                  Layer 0{index + 1}
                </span>
                <span className="text-base font-display font-bold text-white">
                  {name}
                </span>
              </div>

              <p className="text-timberwolf/80 text-xs sm:text-sm leading-relaxed font-sans">
                {details}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {layer.stack.map((item) => (
                  <TechBadge key={item} tech={item} size="sm" />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabArchitecture;
