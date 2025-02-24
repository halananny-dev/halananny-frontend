"use client";

import ar from "@/locales/ar.json";
import en from "@/locales/en.json";
import { createContext, useContext, useEffect, useState } from "react";

const translations: { [key: string]: any } = { en, ar };

const I18nContext = createContext<any>(null);

export function I18nProvider({ children, defaultLocale }: { children: React.ReactNode; defaultLocale: string }) {
  const [locale, setLocale] = useState(defaultLocale);
  const [t, setT] = useState(translations[defaultLocale]);

  useEffect(() => {
    setT(translations[locale]);
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    }
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
