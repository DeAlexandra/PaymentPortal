import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { EN_TRANSLATIONS } from "../src/shared/translations/en/translations";
import { RO_TRANSLATIONS } from "../src/shared/translations/ro/translations";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: EN_TRANSLATIONS
            },
            ro: {
                translation: RO_TRANSLATIONS
            }
        }
    });
export default i18n;