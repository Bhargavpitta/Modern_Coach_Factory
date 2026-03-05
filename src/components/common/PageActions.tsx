import { Printer, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PageActionsProps {
  title: string;
}

export default function PageActions({ title }: PageActionsProps) {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";

  const handlePrint = () => {
    window.print();
  };

  const handleMail = () => {
    const subject = isHindi 
      ? `${title} - आधुनिक कोच कारखाना, रायबरेली`
      : `${title} - Modern Coach Factory, Raebareli`;
    const body = isHindi
      ? `नमस्ते,\n\nयह जानकारी आधुनिक कोच कारखाना, रायबरेली की वेबसाइट से है।\n\n${window.location.href}`
      : `Hello,\n\nThis information is from Modern Coach Factory, Raebareli website.\n\n${window.location.href}`;
    
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex items-center gap-2 print:hidden">
      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border bg-background hover:bg-muted transition-colors"
        title={isHindi ? "प्रिंट करें" : "Print this page"}
      >
        <Printer className="w-4 h-4" />
        {isHindi ? "प्रिंट" : "Print"}
      </button>
      <button
        onClick={handleMail}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border bg-background hover:bg-muted transition-colors"
        title={isHindi ? "ईमेल करें" : "Mail this page"}
      >
        <Mail className="w-4 h-4" />
        {isHindi ? "ईमेल" : "Mail"}
      </button>
    </div>
  );
}

