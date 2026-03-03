import { useLanguage } from "@/contexts/LanguageContext";
import { Train } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer-gov">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Train className="w-8 h-8 text-railway-gold" />
              <div>
                <p className="font-bold">{t.siteName}</p>
                <p className="text-xs text-primary-foreground/60">{t.siteSubtitle}</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70">{t.footer.designedBy}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">{t.footer.importantLinks}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="https://indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">{t.footer.indianRailways}</a></li>
              <li><a href="https://rb.indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">{t.footer.railwayBoard}</a></li>
              <li><a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">{t.footer.irctc}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/tenders" className="hover:text-primary-foreground transition-colors">{t.nav.tenders}</Link></li>
              <li><Link to="/rti" className="hover:text-primary-foreground transition-colors">{t.nav.rti}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">{t.footer.connectWithUs}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">{t.contact.title}</Link></li>
              <li><span>{t.footer.disclaimer}</span></li>
              <li><span>{t.footer.privacyPolicy}</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/50">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-4">
            <span>{t.footer.termsOfUse}</span>
            <span>{t.footer.accessibility}</span>
            <span>{t.footer.siteMap}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
