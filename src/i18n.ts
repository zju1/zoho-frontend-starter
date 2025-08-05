import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    detection: {
      caches: ["localStorage"],
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "i18nextLng",
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
