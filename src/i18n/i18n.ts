import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enMessages from "./messages/en.json";
import esMessages from "./messages/es.json";
import { useState, useEffect } from "react";

export function useTranslationLoaded() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkIfLoaded = async () => {
      // Espera a que el idioma actual esté cargado
      const currentLang = i18n.language;
      if (currentLang !== "en") {
        await loadLanguageAsync(currentLang);
      }
      setIsLoaded(true);
    };

    checkIfLoaded();
  }, []);

  return isLoaded;
}

// Función para cargar idiomas bajo demanda
const loadLanguageAsync = async (language: string) => {
  const normalizedLang = language?.split(/[-_]/)[0]?.toLowerCase();
  if (!normalizedLang || i18n.hasResourceBundle(normalizedLang, "translation")) return;

  let messages;
  switch (normalizedLang) {
    case "es":
      messages = esMessages;
      break;
    case "it":
      messages = await import("./messages/it.json");
      break;
    case "de":
      messages = await import("./messages/de.json");
      break;
    case "fr":
      messages = await import("./messages/fr.json");
      break;
    default:
      return;
  }

  i18n.addResourceBundle(normalizedLang, "translation", messages.default || messages);
  if (normalizedLang !== language) {
    i18n.addResourceBundle(language, "translation", messages.default || messages);
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enMessages,
      },
      es: {
        translation: esMessages,
      },
    },
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

// Carga inicial del idioma detectado (si no es inglés)
const currentLanguage = i18n.language || "en";
if (currentLanguage !== "en") {
  loadLanguageAsync(currentLanguage);
}

// Intercepta los cambios de idioma para cargar archivos cuando sea necesario
const originalChangeLanguage = i18n.changeLanguage;
i18n.changeLanguage = async (lng: string, ...rest) => {
  await loadLanguageAsync(lng);
  return originalChangeLanguage.apply(i18n, [lng, ...rest]);
};

export default i18n;
