import DynamicSection from "@/components/DynamicSection";
import PageHeader from "@/components/common/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RTI() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader title={t.rti.title} breadcrumbs={[{ label: t.rti.title }]} />
      <DynamicSection sectionSlug="news-information" pageSlug="news-information/right-to-information-act" />
    </>
  );
}

