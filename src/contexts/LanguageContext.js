import React, { useState, useEffect, createContext, useContext } from 'react';

// --- Language Context ---
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'zh' : 'en'));
  };

  useEffect(() => {
    // Apply language class to body for global font styling and set document language
    if (language === 'zh') {
      document.body.classList.add('font-chinese');
      document.body.classList.remove('font-english');
      document.documentElement.lang = 'zh';
    } else {
      document.body.classList.add('font-english');
      document.body.classList.remove('font-chinese');
      document.documentElement.lang = 'en';
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
const useLanguage = () => useContext(LanguageContext);

export { LanguageContext, LanguageProvider, useLanguage }; 