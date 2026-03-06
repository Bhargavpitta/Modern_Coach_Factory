import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-page py-8">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-1 text-sm text-primary-foreground/70">
              <li>
                <Link to="/" className="hover:text-primary-foreground transition-colors">
                  {t.breadcrumb.home}
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5" />
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-primary-foreground transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-primary-foreground">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
