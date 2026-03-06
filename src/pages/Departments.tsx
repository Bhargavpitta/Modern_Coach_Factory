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

function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const departmentSlugMap: Record<string, string> = {
  "General Administration": "department/general-administration",
  Personnel: "department/personnel",
  Accounts: "department/accounts",
  Medical: "department/medical",
  Production: "department/production",
  Quality: "department/quality",
  Stores: "department/stores",
  Design: "department/design",
  Electrical: "department/electrical",
  "Civil Engineering": "department/civil-engineering",
  Vigilance: "department/vigilance",
  "Information Technology": "department/information-technology",
  "Plant Maintenence": "department/plant-maintenence",
  Security: "department/security",
  "Project Department": "department/project-department",
  "Technical Training Centre": "department/technical-training-centre",
};

export default function Departments() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title={t.departments.title} breadcrumbs={[{ label: t.departments.title }]} />
      <DynamicSection sectionSlug="department" />

      <div className="container-page section-spacing space-y-6">
        <section aria-labelledby="departments-grid-heading">
          <div className="mb-4 flex items-center justify-between">
            <h2 id="departments-grid-heading" className="text-lg font-semibold text-foreground">
              {t.departments.title}
            </h2>
            <p className="text-xs text-muted-foreground">{departmentsData.length}</p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {departmentsData.map((dept) => {
              const Icon = iconMap[dept.icon] || Wrench;
              const targetSlug = departmentSlugMap[dept.name] || `department/${toSlug(dept.name)}`;

              return (
                <li key={dept.id}>
                  <article className="card-gov flex h-full flex-col p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>

                    <div className="mb-2">
                      <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {isHindi ? dept.categoryLabelHi : dept.categoryLabel}
                      </span>
                    </div>

                    <h3 className="mb-2 font-semibold leading-snug text-foreground">
                      {isHindi ? dept.nameHi : dept.name}
                    </h3>

                    <p className="flex-1 text-sm text-muted-foreground">
                      {isHindi ? dept.descriptionHi : dept.description}
                    </p>

                    <div className="mt-4 border-t pt-4">
                      <button
                        type="button"
                        onClick={() => navigate(`/content/${targetSlug}`)}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        {t.departments.viewDetails}
                      </button>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}

