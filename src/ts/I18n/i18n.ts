import i18next from "i18next/index";
import en from "./locales/en";
import pt from "./locales/pt";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const language = params.get("lang");

const resources = {
    en: {
        translation: en,
    },
    pt: {
        translation: pt,
    },
};

const availableLanguages = Object.keys(resources);

const initI18n = () => {
    i18next.init({
        lng: availableLanguages.includes(language) ? language : "pt",
        resources: resources,
    });
};

initI18n();

export { initI18n, i18next, availableLanguages };
