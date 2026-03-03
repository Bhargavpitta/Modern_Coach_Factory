import { useLanguage } from "@/contexts/LanguageContext";

export default function StatusBadge({ status }: { status: "open" | "closed" | "upcoming" }) {
  const { t } = useLanguage();

  const classes: Record<string, string> = {
    open: "badge-open",
    closed: "badge-closed",
    upcoming: "badge-upcoming",
  };

  const labels: Record<string, string> = {
    open: t.tenders.open,
    closed: t.tenders.closed,
    upcoming: t.tenders.upcoming,
  };

  return <span className={classes[status]}>{labels[status]}</span>;
}
