import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SEO: React.FC = () => {
  const { i18n } = useTranslation();

  const metadata = {
    es: {
      title: "Sergio Manjón — Full-Stack Developer | Soluciones Web, Automatización & IA",
      description: "Sergio Manjón (smg-dev) — Full-Stack Developer especializado en soluciones web de alto rendimiento, arquitecturas escalables y automatizaciones técnicas diseñadas para optimizar operaciones y escalar negocios.",
      keywords: "Sergio Manjón, smg-dev, Full-Stack Developer, Software Engineer, Soluciones Web, Automatizaciones Técnicas, Inteligencia Artificial, Next.js, React, TypeScript, Node.js, PostgreSQL, Stripe, Gemini IA, Three.js, Madrid, Sevilla, España, Portfolio",
      profession: "Full-Stack Developer & Software Engineer",
      locale: "es_ES",
    },
    en: {
      title: "Sergio Manjón — Full-Stack Developer | Web Solutions, Automation & AI",
      description: "Sergio Manjón (smg-dev) — Full-Stack Developer specialized in high-performance web applications, scalable architectures, and technical automations built to scale businesses.",
      keywords: "Sergio Manjón, smg-dev, Full-Stack Developer, Software Engineer, Web Developer, Web Solutions, Technical Automation, AI Agents, Next.js, React, TypeScript, Node.js, PostgreSQL, Stripe, Gemini AI, Three.js, Madrid, Spain, Portfolio",
      profession: "Full-Stack Developer & Software Engineer",
      locale: "en_US",
    },
    it: {
      title: "Sergio Manjón — Full-Stack Developer | Soluzioni Web, Automazione e IA",
      description: "Sergio Manjón (smg-dev) — Sviluppatore Full-Stack specializzato in soluzioni web ad alte prestazioni, architetture scalabili e automazioni tecniche per far scalare il tuo business.",
      keywords: "Sergio Manjón, smg-dev, Full-Stack Developer, Sviluppatore Web, Next.js, React, TypeScript, Node.js, PostgreSQL, Stripe, Madrid, Portfolio",
      profession: "Full-Stack Developer & Software Engineer",
      locale: "it_IT",
    },
    de: {
      title: "Sergio Manjón — Full-Stack Developer | Web-Lösungen, Automatisierung & KI",
      description: "Sergio Manjón (smg-dev) — Full-Stack-Entwickler spezialisiert auf hochperformante Webanwendungen, skalierbare Architekturen und technische Automatisierungen für skalierbare Unternehmen.",
      keywords: "Sergio Manjón, smg-dev, Full-Stack Developer, Webentwickler, Next.js, React, TypeScript, Node.js, PostgreSQL, Stripe, Madrid, Portfolio",
      profession: "Full-Stack Developer & Software Engineer",
      locale: "de_DE",
    },
    fr: {
      title: "Sergio Manjón — Développeur Full-Stack | Solutions Web, Automatisation et IA",
      description: "Sergio Manjón (smg-dev) — Développeur Full-Stack spécialisé dans les applications web haute performance, les architectures évolutives et les automatisations techniques pour développer les entreprises.",
      keywords: "Sergio Manjón, smg-dev, Développeur Full-Stack, Développeur Web, Next.js, React, TypeScript, Node.js, PostgreSQL, Stripe, Madrid, Portfolio",
      profession: "Full-Stack Developer & Software Engineer",
      locale: "fr_FR",
    },
  };

  const lang = (i18n.language?.split("-")[0] || "es") as keyof typeof metadata;
  const currentMeta = metadata[lang] || metadata.es;
  const canonicalUrl = "https://smg-dev.es";
  const linkedinUrl = "https://www.linkedin.com/in/smg-web-dev/";
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
    updateMetaTag("author", "Sergio Manjón García");
    updateMetaTag("publisher", "Sergio Manjón García");
    updateMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    updateMetaTag("googlebot", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Open Graph / Social
    updateMetaTag("og:type", "profile", true);
    updateMetaTag("og:url", `${canonicalUrl}/`, true);
    updateMetaTag("og:site_name", "SMG Dev — Sergio Manjón", true);
    updateMetaTag("og:title", currentMeta.title, true);
    updateMetaTag("og:description", currentMeta.description, true);
    updateMetaTag("og:image", `${canonicalUrl}/og-image.jpg`, true);
    updateMetaTag("og:image:secure_url", `${canonicalUrl}/og-image.jpg`, true);
    updateMetaTag("og:image:type", "image/jpeg", true);
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:image:alt", "SMG Dev — Sergio Manjón Portfolio Full-Stack Developer", true);
    updateMetaTag("og:locale", currentMeta.locale, true);

    // Twitter Cards
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:url", `${canonicalUrl}/`, true);
    updateMetaTag("twitter:title", currentMeta.title, true);
    updateMetaTag("twitter:description", currentMeta.description, true);
    updateMetaTag("twitter:image", `${canonicalUrl}/og-image.jpg`, true);
    updateMetaTag("twitter:image:alt", "SMG Dev — Sergio Manjón Portfolio Full-Stack Developer", true);

    // Canonical link
    updateLinkTag("canonical", `${canonicalUrl}/`);

    // Hreflang alternates
    updateLinkTag("alternate", `${canonicalUrl}/es`, "es");
    updateLinkTag("alternate", `${canonicalUrl}/en`, "en");
    updateLinkTag("alternate", `${canonicalUrl}/it`, "it");
    updateLinkTag("alternate", `${canonicalUrl}/de`, "de");
    updateLinkTag("alternate", `${canonicalUrl}/fr`, "fr");
    updateLinkTag("alternate", `${canonicalUrl}/`, "x-default");

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
          "name": "Sergio Manjón García",
          "givenName": "Sergio",
          "familyName": "Manjón García",
          "additionalName": "SMG",
          "alternateName": ["smg-dev", "Sergio Manjón"],
          "gender": "https://schema.org/Male",
          "email": "mailto:dev@smg-dev.es",
          "jobTitle": currentMeta.profession,
          "url": `${canonicalUrl}/`,
          "image": `${canonicalUrl}/logo.webp`,
          "sameAs": [githubUrl, linkedinUrl],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madrid",
            "addressRegion": "Comunidad de Madrid",
            "addressCountry": "ES"
          },
          "nationality": {
            "@type": "Country",
            "name": "Spain"
          },
          "knowsAbout": [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Java",
            "Spring Boot",
            "Tailwind CSS",
            "Three.js",
            "Google Gemini AI",
            "Stripe",
            "Docker",
            "REST APIs",
            "Web Performance",
            "SEO Architecture",
            "WCAG Accessibility"
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${canonicalUrl}/#website`,
          "url": `${canonicalUrl}/`,
          "name": "SMG Dev — Sergio Manjón",
          "alternateName": ["smg-dev", "Sergio Manjón Portfolio"],
          "description": currentMeta.description,
          "inLanguage": ["es", "en", "it", "de", "fr"],
          "publisher": {
            "@id": `${canonicalUrl}/#person`
          }
        },
        {
          "@type": "ProfilePage",
          "@id": `${canonicalUrl}/#profilepage`,
          "url": `${canonicalUrl}/`,
          "name": currentMeta.title,
          "description": currentMeta.description,
          "mainEntity": {
            "@id": `${canonicalUrl}/#person`
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "@id": `${canonicalUrl}/#logo`,
            "url": `${canonicalUrl}/og-image.jpg`,
            "caption": "SMG Dev — Sergio Manjón"
          }
        },
        {
          "@type": "ItemList",
          "@id": `${canonicalUrl}/#projects`,
          "name": "Featured Engineering Projects & Case Studies",
          "itemListElement": [
            {
              "@type": "SoftwareApplication",
              "position": 1,
              "name": "FSC Nutrition",
              "url": "https://fscnutrition.es",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "Enterprise sports nutrition e-commerce platform with natural language AI search (Google Gemini), executive ERP console, and secure Stripe payment processing."
            },
            {
              "@type": "SoftwareApplication",
              "position": 2,
              "name": "Neoon",
              "url": "https://neoones.netlify.app/",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "Custom LED neon e-commerce experience with 24/7 AI sales assistant, automated PDF quote & invoice engine, and signature dark theme animations."
            },
            {
              "@type": "SoftwareApplication",
              "position": 3,
              "name": "Nuevo Estilo Unisex",
              "url": "https://nuevoestilounisex.es",
              "applicationCategory": "WebApplication",
              "operatingSystem": "Web",
              "description": "Editorial salon web presence featuring interactive 60 FPS real-time Three.js 3D object and complete bilingual internationalization."
            }
          ]
        }
      ]
    };

    scriptTag.textContent = JSON.stringify(structuredData);

  }, [lang, currentMeta, canonicalUrl, linkedinUrl, githubUrl]);

  return null;
};

export default SEO;