import { useNavigate } from "react-router-dom";
import { Wrench, Zap, Package, Users, Calculator, ShieldCheck, PenTool, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import DynamicSection from "@/components/DynamicSection";
import PageHeader from "@/components/common/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { departmentsData } from "@/data/departmentsData";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Zap,
  Package,
  Users,
  Calculator,
  ShieldCheck,
  PenTool,
  Monitor,
};

export default function Departments() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title={t.departments.title} breadcrumbs={[{ label: t.departments.title }]} />
      <DynamicSection sectionSlug="department" />

      <div className="container-page section-spacing space-y-8">
        <section aria-labelledby="departments-grid-heading">
          <div className="mb-6 flex items-center justify-between">
            <h2 id="departments-grid-heading" className="text-xl font-semibold text-foreground">
              {t.departments.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {departmentsData.length} {t.departments.departments}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departmentsData.map((dept) => {
              const Icon = iconMap[dept.icon] || Wrench;

              return (
                <article
                  key={dept.id}
                  className="card-gov flex flex-col overflow-hidden transition-shadow hover:shadow-md"
                >
                  <div className="p-5">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                          {isHindi ? dept.categoryLabelHi : dept.categoryLabel}
                        </span>
                        <h3 className="mt-2 font-semibold leading-tight text-foreground">
                          {isHindi ? dept.nameHi : dept.name}
                        </h3>
                      </div>
                    </div>

                    <p className="mb-4 text-sm text-muted-foreground">
                      {isHindi ? dept.descriptionHi : dept.description}
                    </p>
                  </div>

                  <div className="mt-auto border-t bg-muted/30">
                    <div className="p-4">
                      <h4 className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {t.departments.sections}
                      </h4>
                      <ul className="space-y-1.5">
                        {dept.subsections.slice(-5).map((subsection, index) => (
                          <li key={index}>
                            <button
                              type="button"
                              onClick={() => navigate(`/content/${subsection.slug}`)}
                              className="flex w-full items-center justify-between rounded px-2 py-1.5 text-left text-sm text-primary hover:bg-primary/5 hover:text-primary/80 transition-colors"
                            >
                              <span className="truncate">
                                {subsection.label} {subsection.labelHi && ` / ${subsection.labelHi}`}
                              </span>
                              <span className="ml-2 text-muted-foreground">→</span>
                            </button>
                          </li>
                        ))}
                        {dept.subsections.length > 5 && (
                          <li>
                            <button
                              type="button"
                              onClick={() => navigate(`/content/department/${dept.slug}`)}
                              className="flex w-full items-center justify-between rounded px-2 py-1.5 text-left text-sm font-medium text-primary hover:bg-primary/5 hover:text-primary/80 transition-colors"
                            >
                              <span>
                                {t.departments.viewAll} ({dept.subsections.length - 5} {t.departments.more})
                              </span>
                              <span className="ml-2 text-muted-foreground">→</span>
                            </button>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

