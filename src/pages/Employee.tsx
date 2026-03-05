import {
  Banknote,
  Briefcase,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  Heart,
  Shield,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import PageActions from "@/components/common/PageActions";
import { useLanguage } from "@/contexts/LanguageContext";
import { employeeData } from "@/data/employeeData";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Banknote,
  GraduationCap,
  Clock,
  Shield,
  UserCheck,
};

export default function Employee() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";

  const labels = {
    internalPortals: isHindi ? "आंतरिक पोर्टल" : "Internal Portals",
    circulars: isHindi ? "परिपत्र" : "Circulars",
    welfare: isHindi ? "कल्याण एवं लाभ" : "Welfare & Benefits",
    open: isHindi ? "खोलें" : "Open",
    view: isHindi ? "देखें" : "View",
    reference: isHindi ? "संदर्भ" : "Reference",
  };

  return (
    <>
      <PageHeader title={t.employee.title} breadcrumbs={[{ label: t.employee.title }]} />

      <main className="container-page section-spacing space-y-8">
        <div className="flex justify-end">
          <PageActions title={t.employee.title} />
        </div>
        <section aria-labelledby="hr-modules-heading">
          <h2 id="hr-modules-heading" className="text-xl font-bold text-foreground mb-4">
            {t.employee.hrModules}
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {employeeData.hrModules.map((module) => {
              const Icon = iconMap[module.icon] || Briefcase;

              return (
                <li key={module.id}>
                  <article className="card-gov p-5 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {isHindi ? module.titleHi : module.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-1">
                      {isHindi ? module.descriptionHi : module.description}
                    </p>
                    <div className="pt-4 mt-4 border-t">
                      <a href={module.link} className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                        {labels.open}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="internal-portals-heading">
          <h2 id="internal-portals-heading" className="text-xl font-bold text-foreground mb-4">
            {labels.internalPortals}
          </h2>
          <ul className="card-gov divide-y">
            {employeeData.internalPortals.map((portal) => (
              <li key={portal.id} className="p-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-foreground">{isHindi ? portal.nameHi : portal.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{isHindi ? portal.noteHi : portal.note}</p>
                </div>
                <a href={portal.link} className="text-sm font-medium text-primary hover:underline whitespace-nowrap">
                  {labels.open}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="employee-circulars-heading">
          <h2 id="employee-circulars-heading" className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" aria-hidden="true" />
            {labels.circulars}
          </h2>
          <ul className="space-y-3">
            {employeeData.circulars.map((item) => (
              <li key={item.id}>
                <article className="card-gov p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <time className="text-xs text-muted-foreground" dateTime={item.date}>
                      {item.date}
                    </time>
                    <h3 className="font-semibold text-foreground mt-1">{isHindi ? item.titleHi : item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {labels.reference}: {item.referenceNo}
                    </p>
                  </div>
                  <a href={item.link} className="text-sm font-medium text-primary hover:underline whitespace-nowrap">
                    {labels.view}
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="welfare-benefits-heading" className="card-gov p-6 sm:p-8">
          <h2 id="welfare-benefits-heading" className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" aria-hidden="true" />
            {labels.welfare}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {employeeData.welfareBenefits.map((item) => (
              <article key={item.id} className="rounded-lg border bg-background p-4">
                <h3 className="font-semibold text-foreground mb-2">{isHindi ? item.titleHi : item.title}</h3>
                <p className="text-sm text-muted-foreground">{isHindi ? item.summaryHi : item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
