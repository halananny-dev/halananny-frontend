"use client";

import ar from "@/locales/ar.json";
import en from "@/locales/en.json";
import { createContext, useContext, useEffect, useState } from "react";

const translations: any = { en, ar };
const I18nContext = createContext<any>(null);

export function I18nProvider({ children }: { children: React.ReactNode; }) {
  const [locale, setLocale] = useState('');
  const [t, setT] = useState();

  useEffect(() => {
    if (!locale) {
      const lang = localStorage.getItem('lang')
      setLocale(lang || 'en')
    }

    else {
      if (typeof document !== "undefined") {
        setT(translations[locale]);
        localStorage.setItem('lang', locale)
        document.documentElement.lang = locale;
        document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
      }
    }
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {t && children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
