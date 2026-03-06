import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "news", path: "/news" },
  { key: "departments", path: "/departments" },
  { key: "tenders", path: "/tenders" },
  { key: "vendor", path: "/vendor" },
  { key: "employee", path: "/employee" },
  { key: "rti", path: "/rti" },
  { key: "contact", path: "/contact" },
] as const;

export default function Navbar() {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav-gov w-full" role="navigation" aria-label="Main navigation">
      
      {/* Desktop Menu */}
      <div className="w-full">
        <div className="flex items-center justify-between h-12 lg:hidden px-4">
          <button
            className="p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Centered Desktop Navigation */}
        <ul className="hidden lg:flex justify-center items-center gap-6 py-3 flex-wrap w-full">
          {navItems.map(({ key, path }) => {
            const isActive =
              path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(path);

            return (
              <li key={key}>
                <Link
                  to={path}
                  className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t.nav[key as keyof typeof t.nav]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="lg:hidden px-4 pb-4 space-y-1 animate-slide-in">
          {navItems.map(({ key, path }) => {
            const isActive =
              path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(path);

            return (
              <li key={key}>
                <Link
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t.nav[key as keyof typeof t.nav]}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}