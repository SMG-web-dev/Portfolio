import React from "react";
import { ProjectProps } from "../../../types/projects";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaGithub, FaExternalLinkAlt } from "../../../constants/icons";

interface TabGalleryProps {
  project: ProjectProps;
}

export const TabGallery: React.FC<TabGalleryProps> = ({ project }) => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-xs uppercase tracking-wider text-sage font-semibold">
          {isEn ? "Interface Showcase & Live Production" : "Galería de Interfaces & Producción en Vivo"}
        </h3>
        <span className="text-[11px] text-timberwolf/60 font-mono">
          {project.gallery.length} {isEn ? "views available" : "vistas disponibles"}
        </span>
      </div>

      {/* Gallery Screenshots List */}
      <div className="space-y-6">
        {project.gallery.map((item, index) => {
          const title = isEn ? item.titleEn || item.title : item.title;
          const description = isEn ? item.descriptionEn || item.description : item.description;

          return (
            <div
              key={index}
              className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden p-4 sm:p-6 space-y-4 shadow-card"
            >
              {/* Screenshot Header */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-base sm:text-lg font-display font-bold text-white">
                    {title}
                  </h4>
                  <p className="text-timberwolf/85 text-xs sm:text-sm font-sans mt-0.5">
                    {description}
                  </p>
                </div>

                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                  title={isEn ? "Open full resolution screenshot" : "Abrir captura en alta resolución"}
                >
                  <span>{isEn ? "Full Image" : "Ver Completa"}</span>
                  <FaExternalLinkAlt size={10} />
                </a>
              </div>

              {/* Full Uncropped Screenshot Frame */}
              <div className="w-full rounded-2xl bg-black/90 border border-white/10 p-2 sm:p-3 overflow-hidden flex items-center justify-center shadow-inner">
                <img
                  src={item.image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-auto max-h-[580px] object-contain rounded-xl"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Production Links Card */}
      <div className="p-6 sm:p-7 rounded-3xl bg-hunter-green/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <h4 className="text-base sm:text-lg font-display font-bold text-white">
            {isEn ? "Experience the Live Application" : "Explorar la Aplicación en Producción"}
          </h4>
          <p className="text-timberwolf/85 text-xs sm:text-sm font-sans mt-1">
            {isEn
              ? "Test the fluid interactions, real-time feedback, and responsive layout firsthand."
              : "Comprueba de primera mano la navegación fluida, diseño responsive y características en tiempo real."}
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/10"
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
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-fern-green hover:bg-sage hover:text-brunswick-green text-white text-xs sm:text-sm font-semibold transition-all shadow-green"
            >
              <FaGlobe size={15} />
              <span>{t("projects.liveDemo") || "Visitar Web"}</span>
              <FaExternalLinkAlt size={10} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabGallery;
