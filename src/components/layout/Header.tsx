import { useLanguage } from "@/contexts/LanguageContext";
import mainLogo from "@/assets/indian-railway-logo.jpg";
import logo2 from "@/assets/IRIS_logo_TM.bmp";
import logo3 from "@/assets/national-emblem.jpg";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-card border-b py-3">
      <div className="container-page flex items-center justify-between gap-3">

        {/* Left Section (Main Logo + Title) */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={mainLogo}
            alt="MCF Logo"
            className="h-12 sm:h-14 w-auto object-contain shrink-0"
          />

          <div className="min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold text-primary leading-tight truncate">
              {t.siteName}
            </h1>
            <p className="hidden sm:block text-sm text-muted-foreground truncate">
              {t.siteSubtitle}
            </p>
          </div>
        </div>

        {/* Right Section (Additional Logos) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 shrink-0">
          <img
            src={logo2}
            alt="Secondary Logo"
            className="h-10 lg:h-12 w-auto object-contain"
          />
          <img
            src={logo3}
            alt="Third Logo"
            className="h-10 lg:h-12 w-auto object-contain"
          />
        </div>

      </div>
    </header>
  );
}
