import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // подключаемые плагины
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    // Для работы константы использую definePlugin webpack и в глобальной декларации обьявляю переменную
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
