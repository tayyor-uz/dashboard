import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationRU from "./locales/ru/translation.json";
import translationEN from "./locales/en/translation.json";
import translationUZ from "./locales/uz/translation.json";

const resources = {
  ru: {
    translation: translationRU,
  },
  en: {
    translation: translationEN,
  },
  uz: {
    translation: translationUZ,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["ru", "en", "uz"],
    fallbackLng: "ru",
    detection: {
      order: [
        "cookie",
        "localStorage",
        "htmlTags",
        "path",
        "subdomain",
        "queryString",
      ],
      caches: ["cookie", "localStorage"],
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
