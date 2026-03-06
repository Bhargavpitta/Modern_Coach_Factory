import DynamicSection from "@/components/DynamicSection";
import PageHeader from "@/components/common/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Employee() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader title={t.employee.title} breadcrumbs={[{ label: t.employee.title }]} />
      <DynamicSection sectionSlug="employees-corner" />
    </>
  );
}

