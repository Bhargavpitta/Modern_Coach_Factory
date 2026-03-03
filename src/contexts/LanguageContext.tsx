import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en, type Translations } from "@/locales/en";
import { hi } from "@/locales/hi";

type Lang = "en" | "hi";

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggleLanguage: () => void;
  setLanguage: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Lang, Translations> = { en, hi };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("mcf-lang");
    return (saved === "hi" ? "hi" : "en") as Lang;
  });

  const setLanguage = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("mcf-lang", l);
  };

  const toggleLanguage = () => setLanguage(lang === "en" ? "hi" : "en");

  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === "hi") {
      document.documentElement.classList.add("font-hindi");
    } else {
      document.documentElement.classList.remove("font-hindi");
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
