import React, { useEffect } from "react";
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

    useEffect(() => {
        // Función para crear o actualizar meta tags
        const updateMetaTag = (name: string, content: string, property?: boolean) => {
            const attribute = property ? 'property' : 'name';
            const attributeValue = property ? name : name;
            
            let meta = document.querySelector(`meta[${attribute}="${attributeValue}"]`) as HTMLMetaElement;
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attribute, attributeValue);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        // Función para crear o actualizar link tags
        const updateLinkTag = (rel: string, href: string, hreflang?: string) => {
            const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
            let link = document.querySelector(selector) as HTMLLinkElement;
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', rel);
                if (hreflang) link.setAttribute('hreflang', hreflang);
                document.head.appendChild(link);
            }
            link.setAttribute('href', href);
        };

        // Actualizar título y lang del HTML
        document.title = currentMeta.title;
        document.documentElement.lang = lang;

        // Metadatos básicos
        updateMetaTag('description', currentMeta.description);
        updateMetaTag('keywords', currentMeta.keywords);
        updateMetaTag('author', 'SMG-Dev');
        updateMetaTag('publisher', 'SMG-Dev');
        updateMetaTag('robots', 'index, follow');

        // LinkedIn
        updateMetaTag('linkedin:author', linkedinUrl, true);
        updateMetaTag('og:profession', currentMeta.profession, true);
        updateMetaTag('linkedin:owner', 'SMG-Dev');

        // Open Graph / Facebook
        updateMetaTag('og:type', 'website', true);
        updateMetaTag('og:url', canonicalUrl, true);
        updateMetaTag('og:title', currentMeta.title, true);
        updateMetaTag('og:description', currentMeta.description, true);
        updateMetaTag('og:image', `${canonicalUrl}/og-image.png`, true);
        updateMetaTag('og:site_name', 'SMG-Dev Portfolio', true);

        // Twitter
        updateMetaTag('twitter:card', 'summary_large_image', true);
        updateMetaTag('twitter:url', canonicalUrl, true);
        updateMetaTag('twitter:title', currentMeta.title, true);
        updateMetaTag('twitter:description', currentMeta.description, true);
        updateMetaTag('twitter:image', `${canonicalUrl}/og-image.png`, true);
        updateMetaTag('twitter:creator', '@smg_dev', true);

        // URL Canónica
        updateLinkTag('canonical', canonicalUrl);

        // Alternativas de idioma para SEO
        updateLinkTag('alternate', `${canonicalUrl}/en`, 'en');
        updateLinkTag('alternate', `${canonicalUrl}/es`, 'es');
        updateLinkTag('alternate', `${canonicalUrl}/it`, 'it');
        updateLinkTag('alternate', `${canonicalUrl}/de`, 'de');
        updateLinkTag('alternate', `${canonicalUrl}/fr`, 'fr');
        updateLinkTag('alternate', canonicalUrl, 'x-default');

    }, [lang, currentMeta, canonicalUrl, linkedinUrl]);

    return null; // No render nada, solo efectos en el DOM
};

export default SEO;