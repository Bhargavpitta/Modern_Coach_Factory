import { Building2, Factory, Network, Ship, UserRound } from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import PageActions from "@/components/common/PageActions";
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

      <div className="container-page section-spacing">
        <div className="flex justify-end mb-4">
          <PageActions title={t.about.title} />
        </div>
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
            <div className="rounded-lg border bg-muted/40 relative overflow-hidden">
              <img
                src="/src/assets/gm-photo.jpg"
                alt="General Manager"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: '50% 50%' }}
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary bg-primary/10 px-4 py-3 rounded-lg">
                {isHindi ? "श्री प्रशान्त कुमार मिश्रा" : "Shri Prashant Kumar Mishra"}
              </h3>
              <article className="prose text-sm text-muted-foreground max-h-[400px] overflow-auto">
                {isHindi ? (
                  <>
                    <p>
                      आधुनिक रेल डिब्बा कारखाना, रायबरेली के नवनियुक्त महाप्रबंधक श्री  प्रशान्त कुमार
                      मिश्रा ने 17.03.2023 को महाप्रबंधक का पदभार ग्रहण कर लिया।
                    </p>
                    <p>
                      श्री पी के मिश्रा 1986 बैच के भारतीय रेलवे यांत्रिक इंजीनीयरिंग सेवा के
                      अधिकारी हैं। लगभग तीनदशकों से अधिक भारतीय रेलवें में अपनी सेवा प्रदान कर चुके
                      हैं। इससे पूर्व में श्री मिश्रा आरेडिका के महाप्रबंधक का पदभार ग्रहण करने से पहले
                      आसनसोल, मालदा एवं अलीपुरद्वार डिवीजन के डीआरएम एवं दक्षिण पश्चिमी   रेलवे में
                      एजीएम आदि पदों पर अपनी सेवा प्रदान कर चुके हैं।
                    </p>
                    <p>
                      इनके नेतृत्व में रिकार्ड लोड़िग, कमाई और समग्र सुधार के लिए आसनसोल डिवीजन को
                      लगातार दो बार सर्वश्रेष्ठ डिवीजन पुरस्कार से सम्मानित किया गया।
                    </p>
                    <p>
                      श्री मिश्रा पर्यावरण ,रेलवे हेरीटेज एवं सांस्कृतिक विकास के लिए विशेष  प्रयास किए
                      हैं इनके कार्यकाल में  मालदा डिवीजन  एवं आसनसोल डिवीजन ने अभूतपूर्व विकास किया
                      और पर्यावरण एवं हेरीटेज के क्षेत्र में एक नई पहचान कायम की।
                    </p>
                    <p>
                      श्री मिश्रा ने रेलवे विरासत पर गहन  शोध   किया और रेलवे विरासत, नेतृत्व
                      प्रबंधन एवं डीजल लोको रखरखाव जैसे तकनीकी विषयों  पर लेख लिखे हैं इन्होने भारतीय
                      रेलवे विरासत पर कई पुसतकों का लेखन किया है, जिसमें दक्षिण मराठा रेलवे का
                      इतिहास, भारत के पश्चिम  पुर्तगाली गारंटी रेलवे का इतिहास, परामर्श   इंजीनियर, रेल
                      और कोयला, संथाल क्रान्ति और ईआईआर शामिल हैं।
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      The newly appointed General Manager of Modern Coach Factory, Raebareli,
                      Shri Prashant Kumar Mishra assumed charge on 17.03.2023.
                    </p>
                    <p>
                      Shri P.K. Mishra is an officer of the 1986 batch of the Indian Railways
                      Mechanical Engineering Service. He has served Indian Railways for over three
                      decades. Before taking charge as GM of ARDE, he served as DRM of Asansol, Malda
                      and Alipurduar divisions and as AGM in South Western Railway, among other
                      positions.
                    </p>
                    <p>
                      Under his leadership, Asansol division was honored twice with the Best Division
                      Award for record loading, earnings and overall improvements.
                    </p>
                    <p>
                      Shri Mishra made special efforts towards environment, railway heritage and
                      cultural development. Under his tenure, Malda and Asansol divisions witnessed
                      unprecedented growth and carved a new identity in environment and heritage.
                    </p>
                    <p>
                      Shri Mishra has conducted extensive research on railway heritage and authored
                      articles on technical topics like railway heritage, leadership management and
                      diesel loco maintenance. He has written several books on Indian railway
                      heritage, including histories of the South Maratha Railway, the West
                      Portuguese Guaranteed Railway of India, consulting engineering, rail and coal,
                      the Santhal uprising and the EIR.
                    </p>
                  </>
                )}
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby="milestones-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <Factory className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 id="milestones-heading" className="text-xl font-bold text-foreground">
              {labels.milestones}
            </h2>
          </div>
          <div className="max-h-[350px] overflow-y-auto pr-2">
            <ol className="space-y-2">
              {aboutData.milestones.map((item) => (
                <li key={item.id}>
                  <article className="rounded-lg border bg-background p-3 md:grid md:grid-cols-[120px,1fr] gap-3 hover:bg-muted/50 hover:border-primary/50 transition-colors cursor-pointer">
                    <time
                      dateTime={item.year}
                      className="inline-flex items-center justify-center rounded-md bg-primary/10 text-primary font-semibold px-2 py-1 text-xs h-fit whitespace-nowrap"
                    >
                      {item.year}
                    </time>
                    <p className="text-xs text-muted-foreground mt-1 md:mt-0">
                      {isHindi ? item.descriptionHi : item.description}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
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

        <section aria-labelledby="production-heading" className="card-gov p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <Factory className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 id="production-heading" className="text-xl font-bold text-foreground">
              {isHindi ? "वार्षिक कोच उत्पादन" : "Yearly Coach Production"}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-3 font-semibold">{isHindi ? "वर्ष" : "Year"}</th>
                  <th className="text-left p-3 font-semibold">{isHindi ? "उत्पादित कोच" : "Coaches Produced"}</th>
                  <th className="text-left p-3 font-semibold">{isHindi ? "नोट्स" : "Notes"}</th>
                </tr>
              </thead>
              <tbody>
                {aboutData.yearlyProduction.map((item) => (
                  <tr key={item.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-3 font-medium">{item.year}</td>
                    <td className="p-3">{item.coachesProduced}</td>
                    <td className="p-3 text-muted-foreground">{isHindi ? item.notesHi : item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

