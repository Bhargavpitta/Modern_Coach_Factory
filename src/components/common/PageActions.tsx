import { Printer, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface PageActionsProps {
  title: string;
}

export default function PageActions({ title }: PageActionsProps) {
  const { t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  const handleEmail = () => {
    const pageUrl = window.location.href;
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(
      `Please find below the link to the page:\n\n${title}\n\n${pageUrl}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex items-center gap-2 print:hidden">
      <Button
        variant="outline"
        size="sm"
        onClick={handlePrint}
        title={t.pageActions.printPage}
        className="gap-2"
      >
        <Printer className="h-4 w-4" />
        <span className="hidden sm:inline">{t.pageActions.print}</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleEmail}
        title={t.pageActions.shareViaEmail}
        className="gap-2"
      >
        <Mail className="h-4 w-4" />
        <span className="hidden sm:inline">{t.pageActions.email}</span>
      </Button>
    </div>
  );
}

