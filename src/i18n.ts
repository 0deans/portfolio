import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import Backend from 'i18next-http-backend'

const savedLanguage = localStorage.getItem('language') || 'en'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: savedLanguage,
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
