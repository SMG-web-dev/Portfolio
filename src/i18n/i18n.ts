import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enMessages from "./messages/en.json";
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
  if (i18n.hasResourceBundle(language, "translation")) return;

  let messages;
  switch (language) {
    case "es":
      messages = await import("./messages/es.json");
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

  i18n.addResourceBundle(language, "translation", messages.default || messages);
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enMessages,
      },
    },
    fallbackLng: "en",
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
