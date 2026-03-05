import { Mail, MapPin, Navigation, Phone, Train, Plane, Car } from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import PageActions from "@/components/common/PageActions";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactData } from "@/data/contactData";

export default function Contact() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";

  const labels = {
    addressBlock: isHindi ? "एमसीएफ पता" : "MCF Address",
    pinCode: isHindi ? "पिन कोड" : "Pin Code",
    howToReach: isHindi ? "कैसे पहुंचें" : "How To Reach",
    railway: isHindi ? "निकटतम रेलवे स्टेशन" : "Nearest Railway Station",
    airport: isHindi ? "हवाई संपर्क" : "Airport Connectivity",
    road: isHindi ? "सड़क मार्ग" : "Road Access",
    departmentDirectory: isHindi ? "विभागीय संपर्क निर्देशिका" : "Department Contact Directory",
    department: isHindi ? "विभाग" : "Department",
    officer: isHindi ? "अधिकारी (प्लेसहोल्डर)" : "Officer (Placeholder)",
    mapSection: isHindi ? "स्थान मानचित्र" : "Location Map",
  };

  const addressText = isHindi
    ? `${contactData.address.line1Hi}, ${contactData.address.line2Hi}, ${contactData.address.cityHi}, ${contactData.address.stateHi}`
    : `${contactData.address.line1}, ${contactData.address.line2}, ${contactData.address.city}, ${contactData.address.state}`;

  return (
    <>
      <PageHeader title={t.contact.title} breadcrumbs={[{ label: t.contact.title }]} />

      <main className="container-page section-spacing space-y-8">
        <div className="flex justify-end">
          <PageActions title={t.contact.title} />
        </div>
        <section aria-labelledby="mcf-address-heading">
          <h2 id="mcf-address-heading" className="text-xl font-bold text-foreground mb-4">
            {labels.addressBlock}
          </h2>
          <div className="grid lg:grid-cols-2 gap-5">
            <article className="card-gov p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground">{t.contact.address}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{addressText}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t.contact.phone}</h3>
                    <p className="text-sm text-muted-foreground">{contactData.address.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t.contact.email}</h3>
                    <p className="text-sm text-muted-foreground">{contactData.address.email}</p>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{labels.pinCode}: </span>
                  {contactData.address.pinCode}
                </p>
              </div>
            </article>
          </div>
        </section>

        <section aria-labelledby="how-to-reach-heading">
          <h2 id="how-to-reach-heading" className="text-xl font-bold text-foreground mb-4">
            {labels.howToReach}
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <article className="card-gov p-5">
              <div className="flex items-center gap-2 mb-2">
                <Train className="w-4 h-4 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{labels.railway}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {isHindi ? contactData.howToReach.railwayStationHi : contactData.howToReach.railwayStation}
              </p>
            </article>
            <article className="card-gov p-5">
              <div className="flex items-center gap-2 mb-2">
                <Plane className="w-4 h-4 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{labels.airport}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {isHindi ? contactData.howToReach.airportHi : contactData.howToReach.airport}
              </p>
            </article>
            <article className="card-gov p-5">
              <div className="flex items-center gap-2 mb-2">
                <Car className="w-4 h-4 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{labels.road}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {isHindi ? contactData.howToReach.roadAccessHi : contactData.howToReach.roadAccess}
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="directory-heading">
          <h2 id="directory-heading" className="text-xl font-bold text-foreground mb-4">
            {labels.departmentDirectory}
          </h2>
          <div className="card-gov overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" role="table">
                <caption className="sr-only">{labels.departmentDirectory}</caption>
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th scope="col" className="text-left p-4 font-semibold">{labels.department}</th>
                    <th scope="col" className="text-left p-4 font-semibold">{labels.officer}</th>
                    <th scope="col" className="text-left p-4 font-semibold">{t.contact.phone}</th>
                    <th scope="col" className="text-left p-4 font-semibold">{t.contact.email}</th>
                  </tr>
                </thead>
                <tbody>
                  {contactData.departmentContacts.map((item) => (
                    <tr key={item.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium">{isHindi ? item.departmentHi : item.department}</td>
                      <td className="p-4 text-muted-foreground">{isHindi ? item.officerPlaceholderHi : item.officerPlaceholder}</td>
                      <td className="p-4 text-muted-foreground whitespace-nowrap">{item.phone}</td>
                      <td className="p-4">
                        <a href={`mailto:${item.email}`} className="text-primary hover:underline">{item.email}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section aria-labelledby="map-placeholder-heading">
          <h2 id="map-placeholder-heading" className="text-xl font-bold text-foreground mb-4">
            {labels.mapSection}
          </h2>
          <div className="card-gov p-8 min-h-56 flex items-center justify-center">
            <div className="text-center">
              <Navigation className="w-8 h-8 mx-auto text-primary mb-3" aria-hidden="true" />
              <p className="font-semibold text-foreground">
                {isHindi ? contactData.mapPlaceholder.titleHi : contactData.mapPlaceholder.title}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {isHindi ? contactData.mapPlaceholder.noteHi : contactData.mapPlaceholder.note}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
