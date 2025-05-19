import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SEO: React.FC = () => {
    const { i18n } = useTranslation();

    // Metadatos según el idioma
    const metadata = {
        en: {
            title: "SMG | Portfolio Website",
            description: "Frontend Developer portfolio showcasing projects and skills in React, NextJS and modern web technologies.",
            keywords: "frontend, developer, react, nextjs, portfolio, web development",
            profession: "Frontend Developer"
        },
        es: {
            title: "SMG | Sitio Web Portfolio",
            description: "Portfolio de Desarrollador Frontend mostrando proyectos y habilidades en React, NextJS y tecnologías web modernas.",
            keywords: "frontend, desarrollador, react, nextjs, portfolio, desarrollo web",
            profession: "Desarrollador Frontend"
        },
        it: {
            title: "SMG | Sito Web Portfolio",
            description: "Portfolio di Sviluppatore Frontend che mostra progetti e competenze in React, NextJS e tecnologie web moderne.",
            keywords: "frontend, sviluppatore, react, nextjs, portfolio, sviluppo web",
            profession: "Sviluppatore Frontend"
        },
        de: {
            title: "SMG | Portfolio-Webseite",
            description: "Frontend-Entwickler-Portfolio mit Projekten und Fähigkeiten in React, NextJS und modernen Webtechnologien.",
            keywords: "frontend, entwickler, react, nextjs, portfolio, webentwicklung",
            profession: "Frontend-Entwickler"
        },
        fr: {
            title: "SMG | Site Web Portfolio",
            description: "Portfolio de Développeur Frontend présentant des projets et compétences en React, NextJS et technologies web modernes.",
            keywords: "frontend, développeur, react, nextjs, portfolio, développement web",
            profession: "Développeur Frontend"
        }
    };

    // Obtener el idioma actual o usar inglés por defecto
    const lang = i18n.language || "en";
    const currentMeta = metadata[lang as keyof typeof metadata] || metadata.en;

    // URL canónica
    const canonicalUrl = "https://smg-dev.es";

    // URL de LinkedIn
    const linkedinUrl = "https://www.linkedin.com/in/smg-dev/";

    return (
        <Helmet>
            {/* Metadatos básicos */}
            <html lang={lang} />
            <title>{currentMeta.title}</title>
            <meta name="description" content={currentMeta.description} />
            <meta name="keywords" content={currentMeta.keywords} />

            {/* Autor y Publisher */}
            <meta name="author" content="SMG-Dev" />
            <meta name="publisher" content="SMG-Dev" />

            {/* Robots */}
            <meta name="robots" content="index, follow" />

            {/* URL Canónica */}
            <link rel="canonical" href={canonicalUrl} />

            {/* LinkedIn */}
            <meta property="linkedin:author" content={linkedinUrl} />
            <meta property="og:profession" content={currentMeta.profession} />
            <meta name="linkedin:owner" content="SMG-Dev" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={currentMeta.title} />
            <meta property="og:description" content={currentMeta.description} />
            <meta property="og:image" content={`${canonicalUrl}/og-image.png`} />
            <meta property="og:site_name" content="SMG-Dev Portfolio" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={currentMeta.title} />
            <meta property="twitter:description" content={currentMeta.description} />
            <meta property="twitter:image" content={`${canonicalUrl}/og-image.png`} />
            <meta property="twitter:creator" content="@smg_dev" />

            {/* Alternativas de idioma para SEO */}
            <link rel="alternate" hrefLang="en" href={`${canonicalUrl}/en`} />
            <link rel="alternate" hrefLang="es" href={`${canonicalUrl}/es`} />
            <link rel="alternate" hrefLang="it" href={`${canonicalUrl}/it`} />
            <link rel="alternate" hrefLang="de" href={`${canonicalUrl}/de`} />
            <link rel="alternate" hrefLang="fr" href={`${canonicalUrl}/fr`} />
            <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        </Helmet>
    );
};

export default SEO;