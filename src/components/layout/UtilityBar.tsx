import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Search, Accessibility } from "lucide-react";
import { useState } from "react";

export default function UtilityBar() {
  const { t, lang, toggleLanguage } = useLanguage();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="utility-bar">
      <div className="container-page flex items-center justify-between gap-4">
        <span className="hidden sm:inline text-primary-foreground/80 text-xs">
          {t.governmentOf} | {t.ministryOf}
        </span>

        <div className="flex items-center gap-3 ml-auto">
          {searchOpen && (
            <input
              type="search"
              placeholder={t.search.placeholder}
              className="h-7 px-3 rounded text-xs bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary-foreground/40 w-48"
              autoFocus
              aria-label={t.search.placeholder}
            />
          )}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors"
            aria-label="Search"
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors font-medium"
            aria-label={`Switch to ${lang === "en" ? "Hindi" : "English"}`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "हिन्दी" : "English"}</span>
          </button>

          <button
            className="flex items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors"
            aria-label="Accessibility options"
          >
            <Accessibility className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
