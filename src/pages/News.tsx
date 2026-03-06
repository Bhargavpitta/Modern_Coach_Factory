import DynamicSection from "@/components/DynamicSection";
import PageHeader from "@/components/common/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export default function News() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader title={t.news.title} breadcrumbs={[{ label: t.news.title }]} />
      <DynamicSection sectionSlug="news-information" />
    </>
  );
}

