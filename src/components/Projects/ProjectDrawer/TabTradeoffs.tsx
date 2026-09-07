import React from "react";
import { ProjectProps } from "../../../types/projects";
import { useTranslation } from "react-i18next";
import { FaCode } from "../../../constants/icons";

interface TabTradeoffsProps {
  project: ProjectProps;
}

export const TabTradeoffs: React.FC<TabTradeoffsProps> = ({ project }) => {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");

  const problem = isEn ? project.overview.problemEn || project.overview.problem : project.overview.problem;
  const solution = isEn ? project.overview.solutionEn || project.overview.solution : project.overview.solution;

  return (
    <div className="space-y-6">
      {/* Problem vs Solution Split Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-black/30 border border-red-500/20 space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-red-400">
            {isEn ? "The Engineering Problem" : "El Problema de Negocio / Técnico"}
          </span>
          <p className="text-timberwolf/90 text-xs sm:text-sm leading-relaxed font-sans">
            {problem}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-hunter-green/40 border border-fern-green/30 space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-sage">
            {isEn ? "The Engineered Solution" : "La Solución Arquitectónica"}
          </span>
          <p className="text-timberwolf/90 text-xs sm:text-sm leading-relaxed font-sans">
            {solution}
          </p>
        </div>
      </div>

      {/* Senior Engineering Decisions & Trade-offs */}
      <div className="space-y-4">
        <h4 className="text-xs uppercase tracking-wider text-sage font-semibold px-1">
          {isEn ? "Strategic Decisions & Business Value" : "Decisiones Estratégicas & Valor Aportado"}
        </h4>

        {project.engineeringDecisions.map((item, index) => {
          const title = isEn ? item.titleEn || item.title : item.title;
          const context = isEn ? item.contextEn || item.context : item.context;
          const decision = isEn ? item.decisionEn || item.decision : item.decision;
          const tradeoff = isEn ? item.tradeoffEn || item.tradeoff : item.tradeoff;

          return (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-fern-green/40 transition-colors space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-sage">
                  <FaCode size={14} />
                </span>
                <h5 className="text-base font-display font-bold text-white">
                  {title}
                </h5>
              </div>

              {/* Decision Flow */}
              <div className="grid grid-cols-1 gap-3 text-xs sm:text-sm font-sans">
                <div className="p-3.5 rounded-xl bg-hunter-green/30 border border-white/5">
                  <span className="text-timberwolf/60 font-semibold block mb-1 uppercase text-[10px] tracking-wider">
                    {isEn ? "The Challenge" : "El Reto Inicial"}
                  </span>
                  <span className="text-timberwolf/90">{context}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-fern-green/15 border border-fern-green/25">
                  <span className="text-sage font-semibold block mb-1 uppercase text-[10px] tracking-wider">
                    {isEn ? "The Solution" : "La Solución Aplicada"}
                  </span>
                  <span className="text-white font-medium">{decision}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <span className="text-amber-300 font-semibold block mb-1 uppercase text-[10px] tracking-wider">
                    {isEn ? "Result & Impact" : "Resultado & Beneficio"}
                  </span>
                  <span className="text-timberwolf/90">{tradeoff}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabTradeoffs;
