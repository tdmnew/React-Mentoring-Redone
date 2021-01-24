import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TRANSLATIONS } from "./Core/I18N";

i18n.use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: TRANSLATIONS.EN
            },
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
        },
    });
