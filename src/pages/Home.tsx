import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Factory,
  Landmark,
  ShieldCheck,
  Star,
  Users2,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { newsData } from "@/data/newsData";
import { tendersData } from "@/data/tendersData";
import StatusBadge from "@/components/common/StatusBadge";
import SectionHeading from "@/components/common/SectionHeading";

export default function Home() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";

  const activeTenders = tendersData.filter((item) => item.status !== "closed").slice(0, 4);

  const overviewStats = [
    {
      icon: Landmark,
      label: isHindi ? "स्थापना एवं विकास" : "Establishment & Growth",
      value: isHindi ? "2010 के दशक से संचालन" : "Operational since early 2010s",
      detail: isHindi
        ? "भारतीय रेल की आधुनिक कोच निर्माण इकाई के रूप में चरणबद्ध विस्तार"
        : "Built as a dedicated Indian Railways coach manufacturing unit with phased expansion",
    },
    {
      icon: Factory,
      label: isHindi ? "उत्पादन क्षमता" : "Production Capacity",
      value: isHindi ? "3000+ कोच/वर्ष" : "3000+ coaches per year",
      detail: isHindi
        ? "एलएचबी आधारित यात्री कोचों का उच्च क्षमता उत्पादन"
        : "High-volume manufacturing of LHB-based passenger coaches",
    },
    {
      icon: CalendarDays,
      label: isHindi ? "प्रमुख उपलब्धियां" : "Milestones",
      value: isHindi ? "वार्षिक रिकॉर्ड वृद्धि" : "Consistent annual record growth",
      detail: isHindi
        ? "विकास, गुणवत्ता और सुरक्षा मानकों में निरंतर प्रगति"
        : "Sustained progress in scale, quality systems, and safety standards",
    },
  ];

  const ministers = [
    {
      name: isHindi ? "श्री अश्विनी वैष्णव" : "Shri Ashwini Vaishnaw",
      role: isHindi ? "रेल मंत्री" : "Minister of Railways",
    },
    {
      name: isHindi ? "श्री रवनीत सिंह बिट्टू" : "Shri Ravneet Singh Bittu",
      role: isHindi ? "रेल राज्य मंत्री" : "Minister of State for Railways",
    },
    {
      name: isHindi ? "श्री वी. सोमन्ना" : "Shri V. Somanna",
      role: isHindi ? "रेल राज्य मंत्री" : "Minister of State for Railways",
    },
  ];

  const externalLinks = [
    { label: "Indian Railways", href: "https://indianrailways.gov.in" },
    { label: "Railway Board", href: "https://rb.indianrailways.gov.in" },
    { label: "IREPS e-Procurement", href: "https://www.ireps.gov.in" },
    { label: "RailMadad", href: "https://railmadad.indianrailways.gov.in" },
    { label: "IRCTC", href: "https://www.irctc.co.in" },
    { label: "National Portal of India", href: "https://www.india.gov.in" },
  ];

  return (
    <>
      <section className="relative min-h-[420px] flex items-center" aria-label="Hero">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="relative container-page py-16 sm:py-24">
          <div className="max-w-2xl animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
              {t.hero.title}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t.hero.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/tenders"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-railway-surface" aria-label={isHindi ? "एमसीएफ अवलोकन" : "MCF overview"}>
        <div className="container-page">
          <SectionHeading title={isHindi ? "एमसीएफ का संक्षिप्त परिचय" : "MCF At a Glance"} />
          <p className="text-muted-foreground max-w-4xl mb-6">
            {isHindi
              ? "आधुनिक कोच कारखाना, रायबरेली भारतीय रेल के यात्री कोच निर्माण नेटवर्क का महत्वपूर्ण हिस्सा है। यह इकाई आधुनिक तकनीक, गुणवत्ता नियंत्रण और समयबद्ध उत्पादन के माध्यम से देश की कोच आवश्यकता को पूरा करती है।"
              : "Modern Coach Factory, Raebareli is a key production unit in Indian Railways' passenger coach manufacturing ecosystem. It supports national coach demand through modern processes, quality assurance, and time-bound delivery."}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {overviewStats.map(({ icon: Icon, label, value, detail }) => (
              <article key={label} className="card-gov p-5">
                <Icon className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="text-sm font-medium text-accent mt-1">{value}</p>
                <p className="text-sm text-muted-foreground mt-2">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing" aria-label={t.news.title}>
        <div className="container-page">
          <SectionHeading
            title={t.news.title}
            action={
              <Link to="/news" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                {t.news.viewAll} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            }
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {newsData.slice(0, 3).map((item) => (
              <article key={item.id} className="card-gov p-5">
                <span className="text-xs font-medium text-accent">{item.category}</span>
                <h3 className="font-semibold mt-1 mb-2 text-foreground leading-snug">
                  {lang === "hi" ? item.titleHi : item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {lang === "hi" ? item.summaryHi : item.summary}
                </p>
                <time className="text-xs text-muted-foreground">{item.date}</time>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-railway-surface" aria-label={t.tenders.title}>
        <div className="container-page">
          <SectionHeading
            title={isHindi ? "सक्रिय निविदाएं" : "Active Tenders"}
            action={
              <Link to="/tenders" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                {t.tenders.viewAll} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            }
          />
          <div className="card-gov overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" role="table">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3 font-semibold">{t.tenders.id}</th>
                    <th className="text-left p-3 font-semibold">{t.tenders.description}</th>
                    <th className="text-left p-3 font-semibold">{t.tenders.closingDate}</th>
                    <th className="text-left p-3 font-semibold">{t.tenders.status}</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTenders.map((tender) => (
                    <tr key={tender.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="p-3 font-mono text-xs">{tender.tenderId}</td>
                      <td className="p-3">{lang === "hi" ? tender.titleHi : tender.title}</td>
                      <td className="p-3 whitespace-nowrap">{tender.closingDate}</td>
                      <td className="p-3"><StatusBadge status={tender.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" aria-label={t.certifications.title}>
        <div className="container-page">
          <SectionHeading title={isHindi ? "प्रमाणन और अनुपालन" : "Certifications & Compliance"} />
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: Award,
                label: "ISO 9001",
                desc: isHindi ? "गुणवत्ता प्रबंधन प्रणाली" : "Quality management systems",
              },
              {
                icon: ShieldCheck,
                label: "ISO 14001",
                desc: isHindi ? "पर्यावरण प्रबंधन प्रणाली" : "Environmental management systems",
              },
              {
                icon: Star,
                label: "ISO 45001",
                desc: isHindi ? "व्यावसायिक स्वास्थ्य एवं सुरक्षा" : "Occupational health and safety",
              },
            ].map((cert) => (
              <div key={cert.label} className="card-gov p-6 text-center">
                <cert.icon className="w-10 h-10 mx-auto text-railway-gold mb-3" />
                <h3 className="font-bold text-foreground">{cert.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-railway-surface" aria-label={isHindi ? "मंत्रालय नेतृत्व" : "Ministerial leadership"}>
        <div className="container-page">
          <SectionHeading title={isHindi ? "मंत्रालय नेतृत्व" : "Ministers"} />
          <div className="grid md:grid-cols-3 gap-5">
            {ministers.map((minister) => (
              <article key={minister.name} className="card-gov p-5">
                <Users2 className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{minister.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{minister.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-8" aria-label={isHindi ? "महत्वपूर्ण बाहरी लिंक" : "Important external links"}>
        <div className="container-page">
          <SectionHeading title={isHindi ? "महत्वपूर्ण बाहरी लिंक" : "Important External Links"} />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            {externalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md border border-primary-foreground/20 px-4 py-3 hover:bg-primary-foreground/10 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-primary-foreground/80 mt-4">
            {isHindi
              ? "नोट: बाहरी पोर्टल अलग सुरक्षा और उपयोग नीतियों के अंतर्गत संचालित होते हैं।"
              : "Note: External portals operate under their own usage and security policies."}
          </p>
        </div>
      </section>

      <section className="section-spacing" aria-label={isHindi ? "महत्वपूर्ण पृष्ठों तक जाएं" : "Navigate to key sections"}>
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/about" className="card-gov p-4 hover:border-primary transition-colors">
              <h3 className="font-semibold">{isHindi ? "एमसीएफ परिचय" : "About MCF"}</h3>
            </Link>
            <Link to="/news" className="card-gov p-4 hover:border-primary transition-colors">
              <h3 className="font-semibold">{isHindi ? "समाचार एवं परिपत्र" : "News & Circulars"}</h3>
            </Link>
            <Link to="/tenders" className="card-gov p-4 hover:border-primary transition-colors">
              <h3 className="font-semibold">{isHindi ? "निविदा अनुभाग" : "Tender Section"}</h3>
            </Link>
            <Link to="/contact" className="card-gov p-4 hover:border-primary transition-colors">
              <h3 className="font-semibold">{isHindi ? "संपर्क निर्देशिका" : "Contact Directory"}</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
