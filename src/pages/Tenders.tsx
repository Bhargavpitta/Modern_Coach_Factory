import DynamicSection from "@/components/DynamicSection";
import PageHeader from "@/components/common/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Tenders() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader title={t.tenders.title} breadcrumbs={[{ label: t.tenders.title }]} />
      <DynamicSection sectionSlug="tender-information" />
    </>
  );
}
