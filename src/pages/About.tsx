import { Building2, Factory, Network, Ship, UserRound } from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutData } from "@/data/aboutData";

export default function About() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";

  const labels = {
    overview: isHindi ? "संस्थागत अवलोकन" : "Overview",
    establishment: isHindi ? "स्थापना विवरण" : "Establishment Details",
    productionCapacity: isHindi ? "उत्पादन क्षमता" : "Production Capacity",
    manufacturingCapability: isHindi ? "विनिर्माण क्षमता" : "Manufacturing Capability",
    generalManager: isHindi ? "महाप्रबंधक" : "General Manager",
    milestones: isHindi ? "प्रमुख उपलब्धियां" : "Milestones",
    infrastructure: isHindi ? "अवसंरचना" : "Infrastructure",
    exportCapability: isHindi ? "निर्यात क्षमता" : "Export Capability",
    organisationChart: isHindi ? "संगठन चार्ट" : "Organisation Chart",
    gmMessage: isHindi ? "संदेश" : "Message",
  };

  return (
    <>
      <PageHeader title={t.about.title} breadcrumbs={[{ label: t.about.title }]} />

      <main className="container-page section-spacing space-y-8">
        <section aria-labelledby="overview-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <Building2 className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 id="overview-heading" className="text-xl font-bold text-foreground">
              {labels.overview}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <article className="rounded-lg border bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">{labels.establishment}</h3>
              <p className="text-sm text-muted-foreground">
                {isHindi ? aboutData.overview.establishmentHi : aboutData.overview.establishment}
              </p>
            </article>
            <article className="rounded-lg border bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">{labels.productionCapacity}</h3>
              <p className="text-sm text-muted-foreground">
                {isHindi ? aboutData.overview.productionCapacityHi : aboutData.overview.productionCapacity}
              </p>
            </article>
            <article className="rounded-lg border bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">{labels.manufacturingCapability}</h3>
              <p className="text-sm text-muted-foreground">
                {isHindi ? aboutData.overview.manufacturingSummaryHi : aboutData.overview.manufacturingSummary}
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="gm-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <UserRound className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 id="gm-heading" className="text-xl font-bold text-foreground">
              {labels.generalManager}
            </h2>
          </div>
          <div className="grid lg:grid-cols-[220px,1fr] gap-6">
            <div className="rounded-lg border bg-muted/40 p-5 flex flex-col items-center justify-center text-center min-h-52">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <UserRound className="w-10 h-10 text-primary" aria-hidden="true" />
              </div>
              <p className="text-xs text-muted-foreground">
                {isHindi ? "छवि प्लेसहोल्डर" : "Image Placeholder"}
              </p>
            </div>
            <article>
              <h3 className="text-lg font-semibold text-foreground">
                {isHindi ? aboutData.generalManager.nameHi : aboutData.generalManager.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {isHindi ? aboutData.generalManager.designationHi : aboutData.generalManager.designation}
              </p>
              <div className="mt-4 rounded-lg border bg-background p-4">
                <h4 className="font-semibold text-foreground mb-2">{labels.gmMessage}</h4>
                <p className="text-sm text-muted-foreground">
                  {isHindi ? aboutData.generalManager.messageHi : aboutData.generalManager.message}
                </p>
              </div>
            </article>
          </div>
        </section>

        <section aria-labelledby="milestones-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <Factory className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 id="milestones-heading" className="text-xl font-bold text-foreground">
              {labels.milestones}
            </h2>
          </div>
          <ol className="space-y-4">
            {aboutData.milestones.map((item) => (
              <li key={item.id}>
                <article className="rounded-lg border bg-background p-4 md:grid md:grid-cols-[110px,1fr] gap-4">
                  <time
                    dateTime={item.year}
                    className="inline-flex items-center justify-center rounded-md bg-primary/10 text-primary font-semibold px-3 py-1.5 text-sm h-fit"
                  >
                    {item.year}
                  </time>
                  <p className="text-sm text-muted-foreground mt-3 md:mt-0">
                    {isHindi ? item.descriptionHi : item.description}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="infrastructure-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <Factory className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 id="infrastructure-heading" className="text-xl font-bold text-foreground">
              {labels.infrastructure}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutData.infrastructure.map((facility) => (
              <article key={facility.id} className="rounded-lg border bg-background p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  {isHindi ? facility.nameHi : facility.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isHindi ? facility.summaryHi : facility.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="export-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <Ship className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 id="export-heading" className="text-xl font-bold text-foreground">
              {labels.exportCapability}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {isHindi ? aboutData.exportCapability.summaryHi : aboutData.exportCapability.summary}
          </p>
          <ul className="space-y-2">
            {(isHindi ? aboutData.exportCapability.highlightsHi : aboutData.exportCapability.highlights).map((item) => (
              <li key={item} className="rounded-md bg-muted/40 px-3 py-2 text-sm text-foreground">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="org-chart-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <Network className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 id="org-chart-heading" className="text-xl font-bold text-foreground">
              {labels.organisationChart}
            </h2>
          </div>
          <div className="rounded-lg border bg-muted/40 min-h-48 p-6 flex items-center justify-center text-center">
            <div>
              <p className="font-semibold text-foreground">
                {isHindi ? aboutData.organisationChart.titleHi : aboutData.organisationChart.title}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {isHindi ? aboutData.organisationChart.noteHi : aboutData.organisationChart.note}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
