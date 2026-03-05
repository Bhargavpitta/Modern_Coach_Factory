import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Eye, Filter, Search } from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import PageActions from "@/components/common/PageActions";
import { useLanguage } from "@/contexts/LanguageContext";
import { newsData, type NewsCategoryType } from "@/data/newsData";

type NewsCategoryFilter = "all" | NewsCategoryType;

const PAGE_SIZE = 6;

export default function News() {
  const { t, lang } = useLanguage();
  const isHindi = lang === "hi";

  const [yearFilter, setYearFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState<NewsCategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const labels = {
    filters: isHindi ? "फिल्टर" : "Filters",
    year: isHindi ? "वर्ष" : "Year",
    allYears: isHindi ? "सभी वर्ष" : "All Years",
    category: isHindi ? "श्रेणी" : "Category",
    allCategories: isHindi ? "सभी श्रेणियां" : "All Categories",
    search: isHindi ? "खोज" : "Search",
    searchPlaceholder: isHindi ? "शीर्षक, सारांश या श्रेणी से खोजें" : "Search by title, summary, or category",
    pressRelease: isHindi ? "प्रेस विज्ञप्ति" : "Press Release",
    feature: isHindi ? "विशेष लेख" : "Feature",
    circular: isHindi ? "परिपत्र" : "Circular",
    view: isHindi ? "देखें" : "View",
    noData: isHindi ? "चयनित फिल्टर के लिए कोई समाचार उपलब्ध नहीं है।" : "No news items available for the selected filters.",
    page: isHindi ? "पृष्ठ" : "Page",
    of: isHindi ? "में से" : "of",
    previous: t.pagination.previous,
    next: t.pagination.next,
    showing: isHindi ? "दिखाए जा रहे रिकॉर्ड" : "Showing records",
    totalRecords: isHindi ? "कुल रिकॉर्ड" : "Total records",
  };

  const yearOptions = useMemo(() => {
    const years = Array.from(new Set(newsData.map((item) => item.date.slice(0, 4))));
    return years.sort((a, b) => Number(b) - Number(a));
  }, []);

  const filteredNews = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const result = newsData.filter((item) => {
      const matchesYear = yearFilter === "all" || item.date.startsWith(yearFilter);
      const matchesCategory = categoryFilter === "all" || item.categoryType === categoryFilter;
      const searchIndex = [item.title, item.titleHi, item.summary, item.summaryHi, item.category, item.categoryHi]
        .join(" ")
        .toLowerCase();
      const matchesSearch = query.length === 0 || searchIndex.includes(query);

      return matchesYear && matchesCategory && matchesSearch;
    });

    return result.sort((a, b) => b.date.localeCompare(a.date));
  }, [yearFilter, categoryFilter, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredNews.length / PAGE_SIZE));

  const paginatedNews = useMemo(() => {
    const current = Math.min(currentPage, totalPages);
    const start = (current - 1) * PAGE_SIZE;
    return filteredNews.slice(start, start + PAGE_SIZE);
  }, [currentPage, filteredNews, totalPages]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const categoryBadgeClass: Record<NewsCategoryType, string> = {
    press_release: "bg-primary/10 text-primary",
    feature: "bg-railway-gold/15 text-amber-700",
    circular: "bg-muted text-muted-foreground",
  };

  const categoryLabel = (item: { categoryType: NewsCategoryType; category: string; categoryHi: string }) => {
    if (isHindi) return item.categoryHi;
    return item.category;
  };

  return (
    <>
      <PageHeader title={t.news.title} breadcrumbs={[{ label: t.news.title }]} />

      <div className="container-page section-spacing space-y-6">
        <div className="flex justify-end">
          <PageActions title={t.news.title} />
        </div>
        <section className="card-gov p-5" aria-labelledby="news-filters-heading">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-primary" aria-hidden="true" />
            <h2 id="news-filters-heading" className="text-base font-semibold text-foreground">
              {labels.filters}
            </h2>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label htmlFor="news-year" className="text-sm font-medium text-foreground">
                {labels.year}
              </label>
              <select
                id="news-year"
                value={yearFilter}
                onChange={(e) => {
                  setYearFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="all">{labels.allYears}</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="news-category" className="text-sm font-medium text-foreground">
                {labels.category}
              </label>
              <select
                id="news-category"
                value={categoryFilter}
                onChange={(e) => {
                  setCategoryFilter(e.target.value as NewsCategoryFilter);
                  setCurrentPage(1);
                }}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="all">{labels.allCategories}</option>
                <option value="press_release">{labels.pressRelease}</option>
                <option value="feature">{labels.feature}</option>
                <option value="circular">{labels.circular}</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="news-search" className="text-sm font-medium text-foreground">
                {labels.search}
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                <input
                  id="news-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder={labels.searchPlaceholder}
                  className="w-full rounded-md border bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
          </form>
        </section>

        <section className="space-y-4" aria-labelledby="news-list-heading">
          <div className="flex items-center justify-between gap-3">
            <h2 id="news-list-heading" className="text-lg font-semibold text-foreground">
              {t.news.title}
            </h2>
            <p className="text-xs text-muted-foreground">
              {labels.totalRecords}: {filteredNews.length}
            </p>
          </div>

          {paginatedNews.length > 0 ? (
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-label={t.news.title}>
              {paginatedNews.map((item) => (
                <li key={item.id}>
                  <article className="card-gov p-5 h-full flex flex-col">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <time className="text-xs text-muted-foreground" dateTime={item.date}>
                        {item.date}
                      </time>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryBadgeClass[item.categoryType]}`}>
                        {categoryLabel(item)}
                      </span>
                    </div>

                    <h3 className="font-semibold text-foreground mb-2 leading-snug">
                      {isHindi ? item.titleHi : item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {isHindi ? item.summaryHi : item.summary}
                    </p>

                    <div className="pt-2 border-t">
                      <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                        <Eye className="w-4 h-4" />
                        {labels.view}
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <div className="card-gov p-8 text-center text-muted-foreground">{labels.noData}</div>
          )}
        </section>

        <nav className="card-gov p-4 flex items-center justify-between gap-3" aria-label="Pagination">
          <p className="text-sm text-muted-foreground">
            {labels.page} {currentPage} {labels.of} {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm disabled:opacity-50"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage <= 1}
            >
              <ChevronLeft className="w-4 h-4" />
              {labels.previous}
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm disabled:opacity-50"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={currentPage >= totalPages}
            >
              {labels.next}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
