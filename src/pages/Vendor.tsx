import { ClipboardList, Mail, Phone, ScrollText } from "lucide-react";

import DynamicSection from "@/components/DynamicSection";
import PageHeader from "@/components/common/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { vendorData } from "@/data/vendorData";

export default function Vendor() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";

  const labels = {
    overview: isHindi ? "à¤µà¤¿à¤•à¥à¤°à¥‡à¤¤à¤¾ à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£ à¤…à¤µà¤²à¥‹à¤•à¤¨" : "Vendor Registration Overview",
    guidelines: t.vendor.guidelines,
    contact: isHindi ? "à¤µà¤¿à¤•à¥à¤°à¥‡à¤¤à¤¾ à¤ªà¥‚à¤›à¤¤à¤¾à¤› à¤¸à¤‚à¤ªà¤°à¥à¤•" : "Vendor Query Contact Point",
    officer: isHindi ? "à¤…à¤§à¤¿à¤•à¤¾à¤°à¥€" : "Officer",
  };

  return (
    <>
      <PageHeader title={t.vendor.title} breadcrumbs={[{ label: t.vendor.title }]} />
      <DynamicSection sectionSlug="vendor-information" />

      <main className="container-page section-spacing space-y-8">
        <section aria-labelledby="vendor-overview-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <ClipboardList className="mt-0.5 h-6 w-6 text-primary" aria-hidden="true" />
            <div>
              <h2 id="vendor-overview-heading" className="mb-3 text-xl font-bold text-foreground">
                {labels.overview}
              </h2>
              <h3 className="mb-2 font-semibold text-foreground">
                {isHindi ? vendorData.overview.titleHi : vendorData.overview.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {isHindi ? vendorData.overview.descriptionHi : vendorData.overview.description}
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="vendor-guidelines-heading" className="card-gov p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <ScrollText className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 id="vendor-guidelines-heading" className="text-xl font-bold text-foreground">
              {labels.guidelines}
            </h2>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {(isHindi ? vendorData.guidelinesHi : vendorData.guidelines).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="vendor-contact-heading" className="card-gov p-6 sm:p-8">
          <h2 id="vendor-contact-heading" className="mb-4 text-xl font-bold text-foreground">
            {labels.contact}
          </h2>
          <dl className="grid gap-4 text-sm md:grid-cols-2">
            <div>
              <dt className="text-muted-foreground">{isHindi ? "à¤•à¤¾à¤°à¥à¤¯à¤¾à¤²à¤¯" : "Office"}</dt>
              <dd className="mt-1 font-medium text-foreground">
                {isHindi ? vendorData.contactPoint.officeHi : vendorData.contactPoint.office}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{labels.officer}</dt>
              <dd className="mt-1 font-medium text-foreground">
                {isHindi ? "à¤¸à¤‚à¤ªà¤°à¥à¤• à¤…à¤§à¤¿à¤•à¤¾à¤°à¥€" : "Contact Officer"}
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-muted-foreground">{t.contact.phone}</dt>
                <dd className="text-foreground">{vendorData.contactPoint.phone}</dd>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-muted-foreground">{t.contact.email}</dt>
                <dd>
                  <a className="text-primary hover:underline" href={`mailto:${vendorData.contactPoint.email}`}>
                    {vendorData.contactPoint.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </section>
      </main>
    </>
  );
}

