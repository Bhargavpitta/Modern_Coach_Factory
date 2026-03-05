import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Wrench, Zap, Package, Users, Calculator, ShieldCheck, PenTool, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import PageHeader from "@/components/common/PageHeader";
import PageActions from "@/components/common/PageActions";
import { departmentsData, type DepartmentCategory } from "@/data/departmentsData";

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

type DepartmentCategoryFilter = "all" | DepartmentCategory;

export default function Departments() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";

  const [categoryFilter, setCategoryFilter] = useState<DepartmentCategoryFilter>("all");

  const labels = {
    filters: isHindi ? "विभाग फिल्टर" : "Department Filters",
    category: isHindi ? "श्रेणी" : "Category",
    all: isHindi ? "सभी" : "All",
    technical: isHindi ? "तकनीकी" : "Technical",
    administrative: isHindi ? "प्रशासनिक" : "Administrative",
    finance: isHindi ? "वित्त" : "Finance",
    hr: isHindi ? "मानव संसाधन" : "HR",
    noData: isHindi ? "चयनित श्रेणी में कोई विभाग उपलब्ध नहीं है।" : "No departments are available for the selected category.",
    details: t.departments.viewDetails,
  };

  const filteredDepartments = useMemo(() => {
    if (categoryFilter === "all") return departmentsData;
    return departmentsData.filter((dept) => dept.category === categoryFilter);
  }, [categoryFilter]);

  return (
    <>
      <PageHeader title={t.departments.title} breadcrumbs={[{ label: t.departments.title }]} />

      <div className="container-page section-spacing space-y-6">
        <div className="flex justify-end">
          <PageActions title={t.departments.title} />
        </div>
        <section className="card-gov p-5" aria-labelledby="dept-filters-heading">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-primary" aria-hidden="true" />
            <h2 id="dept-filters-heading" className="text-base font-semibold text-foreground">
              {labels.filters}
            </h2>
          </div>

          <div className="max-w-xs space-y-1.5">
            <label htmlFor="department-category-filter" className="text-sm font-medium text-foreground">
              {labels.category}
            </label>
            <select
              id="department-category-filter"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as DepartmentCategoryFilter)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="all">{labels.all}</option>
              <option value="technical">{labels.technical}</option>
              <option value="administrative">{labels.administrative}</option>
              <option value="finance">{labels.finance}</option>
              <option value="hr">{labels.hr}</option>
            </select>
          </div>
        </section>

        <section aria-labelledby="departments-grid-heading">
          <div className="flex items-center justify-between mb-4">
            <h2 id="departments-grid-heading" className="text-lg font-semibold text-foreground">
              {t.departments.title}
            </h2>
            <p className="text-xs text-muted-foreground">{filteredDepartments.length}</p>
          </div>

          {filteredDepartments.length > 0 ? (
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredDepartments.map((dept) => {
                const Icon = iconMap[dept.icon] || Wrench;

                return (
                  <li key={dept.id}>
                    <article className="card-gov p-6 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>

                      <div className="mb-2">
                        <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                          {isHindi ? dept.categoryLabelHi : dept.categoryLabel}
                        </span>
                      </div>

                      <h3 className="font-semibold text-foreground mb-2 leading-snug">
                        {isHindi ? dept.nameHi : dept.name}
                      </h3>

                      <p className="text-sm text-muted-foreground flex-1">
                        {isHindi ? dept.descriptionHi : dept.description}
                      </p>

                      <div className="pt-4 mt-4 border-t">
                        <Link to={dept.detailsPath} className="text-sm font-medium text-primary hover:underline">
                          {labels.details}
                        </Link>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="card-gov p-8 text-center text-muted-foreground">{labels.noData}</div>
          )}
        </section>
      </div>
    </>
  );
}
