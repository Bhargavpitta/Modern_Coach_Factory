import { useMemo, useState } from "react";
import { Download, Eye, Filter, Search } from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import StatusBadge from "@/components/common/StatusBadge";
import { useLanguage } from "@/contexts/LanguageContext";
import { tendersData } from "@/data/tendersData";

type TenderStatusFilter = "all" | "open" | "closed" | "upcoming";

export default function Tenders() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";

  const [statusFilter, setStatusFilter] = useState<TenderStatusFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("all");

  const yearOptions = useMemo(() => {
    const years = Array.from(new Set(tendersData.map((item) => item.closingDate.slice(0, 4))));
    return years.sort((a, b) => Number(b) - Number(a));
  }, []);

  const filteredTenders = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return tendersData.filter((item) => {
      const matchesStatus = statusFilter === "all" || item.status === statusFilter;
      const matchesYear = yearFilter === "all" || item.closingDate.startsWith(yearFilter);
      const haystack = [
        item.title,
        item.titleHi,
        item.referenceNo,
        item.category,
        item.categoryHi,
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch = q.length === 0 || haystack.includes(q);

      return matchesStatus && matchesYear && matchesSearch;
    });
  }, [searchQuery, statusFilter, yearFilter]);

  const labels = {
    filtersTitle: isHindi ? "??????" : "Filters",
    status: isHindi ? "??????" : "Status",
    search: isHindi ? "???" : "Search",
    searchPlaceholder: isHindi ? "????? ??????, ?????? ?????? ?? ?????? ?????" : "Search by tender title, reference number, or category",
    year: isHindi ? "????" : "Year",
    all: isHindi ? "???" : "All",
    title: isHindi ? "????? ??????" : "Tender Title",
    referenceNo: isHindi ? "?????? ??????" : "Reference No",
    category: isHindi ? "??????" : "Category",
    closingDate: isHindi ? "????? ????" : "Closing Date",
    action: isHindi ? "????????" : "Action",
    download: isHindi ? "???????" : "Download",
    view: isHindi ? "?????" : "View",
    noData: isHindi ? "????? ?????? ?? ??? ??? ????? ?????? ???? ???" : "No tenders available for the selected filters.",
    results: isHindi ? "???????" : "records",
    allYears: isHindi ? "??? ????" : "All Years",
    yearPlaceholder: isHindi ? "???? ?????? (?????)" : "Year Filter (Ready)",
  };

  return (
    <>
      <PageHeader title={t.tenders.title} breadcrumbs={[{ label: t.tenders.title }]} />

      <div className="container-page section-spacing space-y-6">
        <section className="card-gov p-5" aria-labelledby="tender-filters-heading">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-primary" aria-hidden="true" />
            <h2 id="tender-filters-heading" className="text-base font-semibold text-foreground">
              {labels.filtersTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="tender-status-filter" className="text-sm font-medium text-foreground">
                {labels.status}
              </label>
              <select
                id="tender-status-filter"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as TenderStatusFilter)}
              >
                <option value="all">{labels.all}</option>
                <option value="open">{t.tenders.open}</option>
                <option value="closed">{t.tenders.closed}</option>
                <option value="upcoming">{t.tenders.upcoming}</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="tender-search" className="text-sm font-medium text-foreground">
                {labels.search}
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                <input
                  id="tender-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={labels.searchPlaceholder}
                  className="w-full rounded-md border bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="tender-year-filter" className="text-sm font-medium text-foreground">
                {labels.year}
              </label>
              <select
                id="tender-year-filter"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                aria-label={labels.yearPlaceholder}
              >
                <option value="all">{labels.allYears}</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="card-gov overflow-hidden" aria-labelledby="tender-table-heading">
          <div className="px-5 pt-5 pb-2 flex items-center justify-between gap-4">
            <h2 id="tender-table-heading" className="text-base font-semibold text-foreground">
              {t.tenders.title}
            </h2>
            <p className="text-xs text-muted-foreground">
              {filteredTenders.length} {labels.results}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[960px] text-sm" role="table">
              <caption className="sr-only">{t.tenders.title}</caption>
              <thead>
                <tr className="border-y bg-muted/40">
                  <th scope="col" className="text-left p-4 font-semibold">
                    {labels.title}
                  </th>
                  <th scope="col" className="text-left p-4 font-semibold whitespace-nowrap">
                    {labels.referenceNo}
                  </th>
                  <th scope="col" className="text-left p-4 font-semibold whitespace-nowrap">
                    {labels.category}
                  </th>
                  <th scope="col" className="text-left p-4 font-semibold whitespace-nowrap">
                    {labels.closingDate}
                  </th>
                  <th scope="col" className="text-left p-4 font-semibold whitespace-nowrap">
                    {labels.status}
                  </th>
                  <th scope="col" className="text-left p-4 font-semibold whitespace-nowrap">
                    {labels.action}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTenders.length > 0 ? (
                  filteredTenders.map((tender) => (
                    <tr key={tender.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors align-top">
                      <td className="p-4">
                        <p className="font-medium text-foreground leading-snug">
                          {isHindi ? tender.titleHi : tender.title}
                        </p>
                      </td>
                      <td className="p-4 font-mono text-xs whitespace-nowrap">{tender.referenceNo}</td>
                      <td className="p-4 whitespace-nowrap">{isHindi ? tender.categoryHi : tender.category}</td>
                      <td className="p-4 whitespace-nowrap">{tender.closingDate}</td>
                      <td className="p-4 whitespace-nowrap">
                        <StatusBadge status={tender.status} />
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <a
                            href={tender.documentUrl}
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                            aria-label={`${labels.download}: ${isHindi ? tender.titleHi : tender.title}`}
                          >
                            <Download className="w-4 h-4" />
                            <span>{labels.download}</span>
                          </a>
                          <a
                            href="#"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                            aria-label={`${labels.view}: ${isHindi ? tender.titleHi : tender.title}`}
                          >
                            <Eye className="w-4 h-4" />
                            <span>{labels.view}</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-muted-foreground">
                      {labels.noData}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
