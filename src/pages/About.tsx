import DynamicSection from "@/components/DynamicSection";
import PageHeader from "@/components/common/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader title={t.about.title} breadcrumbs={[{ label: t.about.title }]} />
      <DynamicSection sectionSlug="about-mcf" />
    </>
  );
}

