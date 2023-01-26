import i18next, {TFunction} from "i18next";
import {initReactI18next} from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {tr} from "date-fns/locale";

export const namespaces = {
    pages: {
        home: "pages.home",
        professor: "pages.professor"
    },
    components: {
        footer: "components.footer"
    },
};

export const languages = {
    ar: "ar",
    en: "en",
};

const createI18n = (language: string): Promise<TFunction> => {
    const i18n = i18next.createInstance().use(initReactI18next);

    return i18n
        .use(HttpApi)
        .use(LanguageDetector)
        .init({
            debug: true,
            backend: {
                loadPath: "/locales/{{lng}}/{{ns}}.json",
            },
            fallbackLng: language,
            interpolation: {
                escapeValue: false
            }
        });
};

export const i18n = createI18n(languages.en);