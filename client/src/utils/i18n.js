import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to BazarSetu",
          login: "Login",
          register: "Register",
          home: "Home",
          about: "About",
          contact: "Contact",
          language: "Language",
          // Add more translations as needed
        }
      },
      hi: {
        translation: {
          welcome: "बाज़ारसेतु में आपका स्वागत है",
          login: "लॉगिन",
          register: "पंजीकरण",
          home: "मुख्य पृष्ठ",
          about: "के बारे में",
          contact: "संपर्क करें",
          language: "भाषा",
          // Add more translations as needed
        }
      }
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18next;