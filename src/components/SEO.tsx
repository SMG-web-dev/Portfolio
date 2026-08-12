import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SEO: React.FC = () => {
  const { i18n } = useTranslation();

  const metadata = {
    es: {
      title: "Sergio Manjón | Full-Stack Developer — Apps Web Escalables",
      description: "Sergio Manjón — Full-Stack Developer especializado en construir aplicaciones web escalables con Next.js, React, Supabase e IA que convierten visitantes en clientes reales.",
      keywords: "Sergio Manjón, Full-Stack Developer, Desarrollador Web, Next.js, React, Supabase, TypeScript, Stripe, Madrid, Portfolio",
      profession: "Full-Stack Developer",
    },
    en: {
      title: "Sergio Manjón | Full-Stack Developer — Building Scalable Web Apps",
      description: "Sergio Manjón — Full-Stack Developer specialized in building scalable web apps with Next.js, React, Supabase, and AI integration that convert visitors into real customers.",
      keywords: "Sergio Manjón, Full-Stack Developer, Web Developer, Next.js, React, Supabase, TypeScript, Stripe, Madrid, Portfolio",
      profession: "Full-Stack Developer",
    },
    it: {
      title: "Sergio Manjón | Full-Stack Developer — App Web Scalabili",
      description: "Sergio Manjón — Sviluppatore Full-Stack specializzato nella creazione di app web scalabili con Next.js, React, Supabase e IA che convertono i visitatori in clienti reali.",
      keywords: "Sergio Manjón, Full-Stack Developer, Sviluppatore Web, Next.js, React, Supabase, TypeScript, Stripe, Madrid, Portfolio",
      profession: "Full-Stack Developer",
    },
    de: {
      title: "Sergio Manjón | Full-Stack Developer — Skalierbare Web-Apps",
      description: "Sergio Manjón — Full-Stack-Entwickler spezialisiert auf skalierbare Web-Apps mit Next.js, React, Supabase und KI-Integration, die Besucher in echte Kunden verwandeln.",
      keywords: "Sergio Manjón, Full-Stack Developer, Webentwickler, Next.js, React, Supabase, TypeScript, Stripe, Madrid, Portfolio",
      profession: "Full-Stack Developer",
    },
    fr: {
      title: "Sergio Manjón | Full-Stack Developer — Apps Web Évolutives",
      description: "Sergio Manjón — Développeur Full-Stack spécialisé dans la création d'applications web évolutives avec Next.js, React, Supabase et IA qui convertissent les visiteurs en vrais clients.",
      keywords: "Sergio Manjón, Full-Stack Developer, Développeur Web, Next.js, React, Supabase, TypeScript, Stripe, Madrid, Portfolio",
      profession: "Full-Stack Developer",
    },
  };

  const lang = (i18n.language?.split("-")[0] || "es") as keyof typeof metadata;
  const currentMeta = metadata[lang] || metadata.es;
  const canonicalUrl = "https://smg-dev.es";
  const linkedinUrl = "https://linkedin.com/in/smg-web-dev";
  const githubUrl = "https://github.com/SMG-web-dev";

  useEffect(() => {
    // Utility to update or append meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Utility to update link tags
    const updateLinkTag = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
      let link = document.querySelector(selector) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        if (hreflang) link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Document title and HTML language attribute
    document.title = currentMeta.title;
    document.documentElement.lang = lang;

    // Primary Meta Tags
    updateMetaTag("description", currentMeta.description);
    updateMetaTag("keywords", currentMeta.keywords);
    updateMetaTag("author", "Sergio Manjón");
    updateMetaTag("publisher", "Sergio Manjón");
    updateMetaTag("robots", "index, follow");

    // Open Graph / Facebook
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", canonicalUrl, true);
    updateMetaTag("og:title", currentMeta.title, true);
    updateMetaTag("og:description", currentMeta.description, true);
    updateMetaTag("og:image", `${canonicalUrl}/logo.webp`, true);
    updateMetaTag("og:site_name", "Sergio Manjón Portfolio", true);

    // Twitter Cards
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:url", canonicalUrl, true);
    updateMetaTag("twitter:title", currentMeta.title, true);
    updateMetaTag("twitter:description", currentMeta.description, true);
    updateMetaTag("twitter:image", `${canonicalUrl}/logo.webp`, true);

    // Canonical link
    updateLinkTag("canonical", canonicalUrl);

    // Hreflang alternates
    updateLinkTag("alternate", `${canonicalUrl}/en`, "en");
    updateLinkTag("alternate", `${canonicalUrl}/es`, "es");
    updateLinkTag("alternate", `${canonicalUrl}/it`, "it");
    updateLinkTag("alternate", `${canonicalUrl}/de`, "de");
    updateLinkTag("alternate", `${canonicalUrl}/fr`, "fr");
    updateLinkTag("alternate", canonicalUrl, "x-default");

    // Inject Google Schema.org JSON-LD Structured Data
    const schemaId = "json-ld-schema";
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = schemaId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${canonicalUrl}/#person`,
          "name": "Sergio Manjón",
          "jobTitle": "Full-Stack Developer",
          "url": canonicalUrl,
          "image": `${canonicalUrl}/logo.webp`,
          "sameAs": [githubUrl, linkedinUrl],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madrid",
            "addressCountry": "ES"
          },
          "knowsAbout": [
            "Next.js",
            "React",
            "TypeScript",
            "Supabase",
            "Stripe",
            "AI Integration",
            "Full-Stack Development",
            "TailwindCSS"
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${canonicalUrl}/#website`,
          "url": canonicalUrl,
          "name": "Sergio Manjón | Full-Stack Developer",
          "description": currentMeta.description,
          "inLanguage": lang,
          "publisher": {
            "@id": `${canonicalUrl}/#person`
          }
        }
      ]
    };

    scriptTag.textContent = JSON.stringify(structuredData);

  }, [lang, currentMeta, canonicalUrl, linkedinUrl, githubUrl]);

  return null;
};

export default SEO;