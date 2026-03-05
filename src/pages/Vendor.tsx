import { AlertTriangle, ClipboardList, Download, Mail, Phone, ScrollText } from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import PageActions from "@/components/common/PageActions";
import { useLanguage } from "@/contexts/LanguageContext";
import { vendorData } from "@/data/vendorData";

export default function Vendor() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";

  const labels = {
    overview: isHindi ? "विक्रेता पंजीकरण अवलोकन" : "Vendor Registration Overview",
    guidelines: t.vendor.guidelines,
    forms: t.vendor.downloads,
    notices: isHindi ? "महत्वपूर्ण सूचनाएं" : "Important Notices",
    contact: isHindi ? "विक्रेता पूछताछ संपर्क" : "Vendor Query Contact Point",
    download: isHindi ? "डाउनलोड" : "Download",
    officer: isHindi ? "अधिकारी" : "Officer",
  };

  return (
    <>
      <PageHeader title={t.vendor.title} breadcrumbs={[{ label: t.vendor.title }]} />

      <main className="container-page section-spacing space-y-8">
        <div className="flex justify-end">
          <PageActions title={t.vendor.title} />
        </div>
        <section aria-labelledby="vendor-overview-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <ClipboardList className="w-6 h-6 text-primary mt-0.5" aria-hidden="true" />
            <div>
              <h2 id="vendor-overview-heading" className="text-xl font-bold text-foreground mb-3">
                {labels.overview}
              </h2>
              <h3 className="font-semibold text-foreground mb-2">
                {isHindi ? vendorData.overview.titleHi : vendorData.overview.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isHindi ? vendorData.overview.descriptionHi : vendorData.overview.description}
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="vendor-guidelines-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <ScrollText className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 id="vendor-guidelines-heading" className="text-xl font-bold text-foreground">
              {labels.guidelines}
            </h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            {(isHindi ? vendorData.guidelinesHi : vendorData.guidelines).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="vendor-forms-heading">
          <h2 id="vendor-forms-heading" className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-primary" aria-hidden="true" />
            {labels.forms}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {vendorData.forms.map((form) => (
              <li key={form.id}>
                <article className="card-gov p-4 flex items-center justify-between gap-3">
                  <p className="text-sm text-foreground">{isHindi ? form.titleHi : form.title}</p>
                  <a href={form.fileRef} className="inline-flex items-center gap-1 text-primary hover:underline text-sm">
                    <Download className="w-4 h-4" />
                    {labels.download}
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="vendor-notices-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 id="vendor-notices-heading" className="text-xl font-bold text-foreground">
              {labels.notices}
            </h2>
          </div>
          <ul className="space-y-2">
            {vendorData.notices.map((notice) => (
              <li key={notice.id} className="rounded-md bg-muted/40 px-3 py-2 text-sm text-foreground">
                {isHindi ? notice.textHi : notice.text}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="vendor-contact-heading" className="card-gov p-6 sm:p-8">
          <h2 id="vendor-contact-heading" className="text-xl font-bold text-foreground mb-4">
            {labels.contact}
          </h2>
          <dl className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-muted-foreground">{isHindi ? "कार्यालय" : "Office"}</dt>
              <dd className="text-foreground font-medium mt-1">
                {isHindi ? vendorData.contactPoint.officeHi : vendorData.contactPoint.office}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{labels.officer}</dt>
              <dd className="text-foreground font-medium mt-1">
                {isHindi ? vendorData.contactPoint.officerPlaceholderHi : vendorData.contactPoint.officerPlaceholder}
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-muted-foreground">{t.contact.phone}</dt>
                <dd className="text-foreground">{vendorData.contactPoint.phone}</dd>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
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
