import i18n from 'i18next'
import {  initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json'
import hiTranslation from './locales/hi.json'
import ruTranslation from './locales/ru.json'
import frTranslation from './locales/fr.json'
import chTranslation from './locales/ch.json'

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslation },
        hi: {  translation:hiTranslation },
        ru: {  translation:ruTranslation },
        fr: {  translation:frTranslation },
        ch: {  translation:chTranslation }

    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, 
    },
    react: {
        wait: true,
    },
});


export default i18n;