import { createContext, useState, useEffect } from 'react';
import enTranslations from '../translation/en.json';
import heTranslations from '../translation/he.json';

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  const [translations, setTranslations] = useState(() => {
    return language === 'he' ? heTranslations : enTranslations;
  });

  const direction = language === 'he' ? 'rtl' : 'ltr';
  const isRTL = language === 'he';

  useEffect(() => {
    // Update translations when language changes
    setTranslations(language === 'he' ? heTranslations : enTranslations);
    // Save to localStorage
    localStorage.setItem('language', language);
    // Update document direction
    document.documentElement.setAttribute('dir', direction);
  }, [language, direction]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && (typeof value === 'object' || Array.isArray(value)) && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found`);
        return key;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, direction, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

