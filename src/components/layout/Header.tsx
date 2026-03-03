import { useLanguage } from "@/contexts/LanguageContext";
import { Train } from "lucide-react";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-card border-b py-3">
      <div className="container-page flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shrink-0">
          <Train className="w-7 h-7" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-primary leading-tight">
            {t.siteName}
          </h1>
          <p className="text-sm text-muted-foreground">{t.siteSubtitle}</p>
        </div>
      </div>
    </header>
  );
}
