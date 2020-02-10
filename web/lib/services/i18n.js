import i18n from 'i18next'
import Detector from 'i18next-browser-languagedetector'

i18n.use(Detector).init({
  detection: {
    caches: ['localStorage'],
    lookupLocalStorage: 'language',
    order: ['localStorage', 'navigator'],
  },
  fallbackLng: LIB.language,
  returnObjects: true,
  whitelist: LIB.languages,
})

export default i18n
