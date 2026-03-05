import { Download, FileText, Scale, UserCheck } from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import PageActions from "@/components/common/PageActions";
import { useLanguage } from "@/contexts/LanguageContext";
import { rtiData } from "@/data/rtiData";

export default function RTI() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";

  const labels = {
    overview: isHindi ? "आरटीआई अवलोकन" : "RTI Overview",
    pio: isHindi ? "लोक सूचना अधिकारी" : "Public Information Officer",
    appellate: isHindi ? "अपीलीय प्राधिकारी" : "Appellate Authority",
    documents: isHindi ? "आरटीआई दस्तावेज़" : "RTI Documents",
    mandatoryTable: isHindi ? "अनिवार्य प्रकटीकरण श्रेणियां" : "Mandatory Disclosure Categories",
    name: isHindi ? "नाम" : "Name",
    designation: isHindi ? "पदनाम" : "Designation",
    category: isHindi ? "श्रेणी" : "Category",
    details: isHindi ? "विवरण" : "Details",
    status: isHindi ? "स्थिति" : "Status",
    download: isHindi ? "डाउनलोड" : "Download",
  };

  return (
    <>
      <PageHeader title={t.rti.title} breadcrumbs={[{ label: t.rti.title }]} />

      <main className="container-page section-spacing space-y-8">
        <div className="flex justify-end">
          <PageActions title={t.rti.title} />
        </div>
        <section aria-labelledby="rti-overview-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <Scale className="w-6 h-6 text-primary mt-0.5" aria-hidden="true" />
            <div>
              <h2 id="rti-overview-heading" className="text-xl font-bold text-foreground mb-3">
                {labels.overview}
              </h2>
              <h3 className="font-semibold text-foreground mb-2">
                {isHindi ? rtiData.overview.titleHi : rtiData.overview.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isHindi ? rtiData.overview.descriptionHi : rtiData.overview.description}
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="officers-heading" className="space-y-4">
          <h2 id="officers-heading" className="text-xl font-bold text-foreground flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-primary" aria-hidden="true" />
            {t.rti.officers}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <article className="card-gov p-5">
              <h3 className="font-semibold text-foreground mb-3">{labels.pio}</h3>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="text-muted-foreground">{labels.name}</dt>
                  <dd className="text-foreground">{isHindi ? rtiData.publicInformationOfficer.nameHi : rtiData.publicInformationOfficer.name}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{labels.designation}</dt>
                  <dd className="text-foreground">{isHindi ? rtiData.publicInformationOfficer.designationHi : rtiData.publicInformationOfficer.designation}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t.contact.phone}</dt>
                  <dd className="text-foreground">{rtiData.publicInformationOfficer.phone}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t.contact.email}</dt>
                  <dd>
                    <a className="text-primary hover:underline" href={`mailto:${rtiData.publicInformationOfficer.email}`}>
                      {rtiData.publicInformationOfficer.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </article>

            <article className="card-gov p-5">
              <h3 className="font-semibold text-foreground mb-3">{labels.appellate}</h3>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="text-muted-foreground">{labels.name}</dt>
                  <dd className="text-foreground">{isHindi ? rtiData.appellateAuthority.nameHi : rtiData.appellateAuthority.name}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{labels.designation}</dt>
                  <dd className="text-foreground">{isHindi ? rtiData.appellateAuthority.designationHi : rtiData.appellateAuthority.designation}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t.contact.phone}</dt>
                  <dd className="text-foreground">{rtiData.appellateAuthority.phone}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t.contact.email}</dt>
                  <dd>
                    <a className="text-primary hover:underline" href={`mailto:${rtiData.appellateAuthority.email}`}>
                      {rtiData.appellateAuthority.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        </section>

        <section aria-labelledby="rti-documents-heading">
          <h2 id="rti-documents-heading" className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" aria-hidden="true" />
            {labels.documents}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {rtiData.documents.map((doc) => (
              <li key={doc.id}>
                <article className="card-gov p-4 flex items-center justify-between gap-3">
                  <p className="text-sm text-foreground">{isHindi ? doc.titleHi : doc.title}</p>
                  <a href={doc.fileRef} className="inline-flex items-center gap-1 text-primary hover:underline text-sm">
                    <Download className="w-4 h-4" />
                    {labels.download}
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="mandatory-disclosure-heading">
          <h2 id="mandatory-disclosure-heading" className="text-xl font-bold text-foreground mb-4">
            {labels.mandatoryTable}
          </h2>
          <div className="card-gov overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" role="table">
                <caption className="sr-only">{labels.mandatoryTable}</caption>
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th scope="col" className="text-left p-4 font-semibold">{labels.category}</th>
                    <th scope="col" className="text-left p-4 font-semibold">{labels.details}</th>
                    <th scope="col" className="text-left p-4 font-semibold">{labels.status}</th>
                  </tr>
                </thead>
                <tbody>
                  {rtiData.mandatoryDisclosures.map((row) => (
                    <tr key={row.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium">{isHindi ? row.categoryHi : row.category}</td>
                      <td className="p-4 text-muted-foreground">{isHindi ? row.detailsHi : row.details}</td>
                      <td className="p-4 text-muted-foreground whitespace-nowrap">{isHindi ? row.statusHi : row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
