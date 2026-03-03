import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
    },
    // Default to Arabic on first load; user preference (stored in localStorage)
    // will override this once they change the language.
    fallbackLng: 'ar',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Only use saved preference; if none, fall back to Arabic
      order: ['localStorage'],
      caches: ['localStorage'],
    },
  });

export default i18n;
