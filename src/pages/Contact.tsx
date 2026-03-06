import { Mail, MapPin, Phone, Train, Plane, Car } from "lucide-react";

import DynamicSection from "@/components/DynamicSection";
import PageHeader from "@/components/common/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactData } from "@/data/contactData";

export default function Contact() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";

  const labels = {
    addressBlock: isHindi ? "à¤à¤®à¤¸à¥€à¤à¤« à¤ªà¤¤à¤¾" : "MCF Address",
    pinCode: isHindi ? "à¤ªà¤¿à¤¨ à¤•à¥‹à¤¡" : "Pin Code",
    howToReach: isHindi ? "à¤•à¥ˆà¤¸à¥‡ à¤ªà¤¹à¥à¤‚à¤šà¥‡à¤‚" : "How To Reach",
    railway: isHindi ? "à¤¨à¤¿à¤•à¤Ÿà¤¤à¤® à¤°à¥‡à¤²à¤µà¥‡ à¤¸à¥à¤Ÿà¥‡à¤¶à¤¨" : "Nearest Railway Station",
    airport: isHindi ? "à¤¹à¤µà¤¾à¤ˆ à¤¸à¤‚à¤ªà¤°à¥à¤•" : "Airport Connectivity",
    road: isHindi ? "à¤¸à¤¡à¤¼à¤• à¤®à¤¾à¤°à¥à¤—" : "Road Access",
  };

  const addressText = isHindi
    ? `${contactData.address.line1Hi}, ${contactData.address.line2Hi}, ${contactData.address.cityHi}, ${contactData.address.stateHi}`
    : `${contactData.address.line1}, ${contactData.address.line2}, ${contactData.address.city}, ${contactData.address.state}`;

  return (
    <>
      <PageHeader title={t.contact.title} breadcrumbs={[{ label: t.contact.title }]} />
      <DynamicSection sectionSlug="contact-us" />

      <main className="container-page section-spacing space-y-8">
        <section aria-labelledby="mcf-address-heading">
          <h2 id="mcf-address-heading" className="mb-4 text-xl font-bold text-foreground">
            {labels.addressBlock}
          </h2>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="card-gov space-y-4 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground">{t.contact.address}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{addressText}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t.contact.phone}</h3>
                    <p className="text-sm text-muted-foreground">{contactData.address.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t.contact.email}</h3>
                    <p className="text-sm text-muted-foreground">{contactData.address.email}</p>
                  </div>
                </div>
              </div>
              <div className="border-t pt-3">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{labels.pinCode}: </span>
                  {contactData.address.pinCode}
                </p>
              </div>
            </article>
          </div>
        </section>

        <section aria-labelledby="how-to-reach-heading">
          <h2 id="how-to-reach-heading" className="mb-4 text-xl font-bold text-foreground">
            {labels.howToReach}
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="card-gov p-5">
              <div className="mb-2 flex items-center gap-2">
                <Train className="h-4 w-4 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{labels.railway}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {isHindi ? contactData.howToReach.railwayStationHi : contactData.howToReach.railwayStation}
              </p>
            </article>
            <article className="card-gov p-5">
              <div className="mb-2 flex items-center gap-2">
                <Plane className="h-4 w-4 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{labels.airport}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {isHindi ? contactData.howToReach.airportHi : contactData.howToReach.airport}
              </p>
            </article>
            <article className="card-gov p-5">
              <div className="mb-2 flex items-center gap-2">
                <Car className="h-4 w-4 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{labels.road}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {isHindi ? contactData.howToReach.roadAccessHi : contactData.howToReach.roadAccess}
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

