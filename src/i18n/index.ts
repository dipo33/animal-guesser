import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUS from "./locales/en-US/common.json";
import cs from "./locales/cs/common.json";
import sk from "./locales/sk/common.json";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "en-US": { common: enUS },
      "cs": { common: cs },
      "sk": { common: sk },
    },
    fallbackLng: "en-US",
    supportedLngs: ["en-US", "cs", "sk"],
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
