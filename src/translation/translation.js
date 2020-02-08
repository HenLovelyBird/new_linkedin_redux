import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import english from './languages/en'
import deutsch from './languages/de'
import ruski from './languages/ru'
import italiano from './languages/it'
import korean from './languages/ko'


const resources = {
    en: english,
    de: deutsch,
    ru: ruski,
    it: italiano,
    ko: korean
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "en", 
        fallbackLng: "en"
    })

export default i18n