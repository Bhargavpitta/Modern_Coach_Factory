import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import { flattenSitemap, getSitemap } from "@/data/loader";
import type { SitemapNode } from "@/data/types";
import { useSitemapNode } from "@/hooks/useSitemapNode";
import { useLanguage } from "@/contexts/LanguageContext";

interface DynamicSectionProps {
  sectionSlug: string;
  pageSlug?: string;
}

function getNodeLabel(node: SitemapNode, isHindi: boolean): string {
  return isHindi && node.labelHi ? node.labelHi : node.label;
}

function findSectionNodeBySlug(sitemap: SitemapNode[], sectionSlug: string): SitemapNode | null {
  const flat = flattenSitemap(sitemap);
  const normalized = sectionSlug.trim().toLowerCase();
  return (
    flat.find((node) => node.slug.toLowerCase() === normalized) ||
    flat.find((node) => node.slug.toLowerCase().includes(normalized) || normalized.includes(node.slug.toLowerCase())) ||
    null
  );
}

function isDescendant(node: SitemapNode, targetSlug: string): boolean {
  if (!targetSlug) return false;
  if (node.slug === targetSlug) return true;
  return node.children?.some((child) => isDescendant(child, targetSlug)) ?? false;
}

function findFirstLeafSlug(node: SitemapNode | null): string | null {
  if (!node) return null;
  if (!node.children?.length) return node.slug;
  return findFirstLeafSlug(node.children[0]) || node.slug;
}

function indentationClass(depth: number): string {
  const levels = ["pl-3", "pl-6", "pl-9", "pl-12", "pl-12"];
  return levels[Math.min(depth, levels.length - 1)];
}

function SidebarNode({
  node,
  selectedSlug,
  onSelect,
  defaultExpanded,
  depth,
  isHindi,
}: {
  node: SitemapNode;
  selectedSlug: string | null;
  onSelect: (slug: string) => void;
  defaultExpanded: boolean;
  depth: number;
  isHindi: boolean;
}) {
  const hasChildren = node.children?.length > 0;
  const isSelected = node.slug === selectedSlug;
  const [expanded, setExpanded] = useState(defaultExpanded || isDescendant(node, selectedSlug ?? ""));

  useEffect(() => {
    if (isDescendant(node, selectedSlug ?? "")) {
      setExpanded(true);
    }
  }, [node, selectedSlug]);

  return (
    <li className="space-y-1">
      <div className={`flex items-center gap-1 ${indentationClass(depth)}`}>
        {hasChildren ? (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="rounded p-1 text-muted-foreground hover:bg-muted/50"
            aria-label={expanded ? `Collapse ${getNodeLabel(node, isHindi)}` : `Expand ${getNodeLabel(node, isHindi)}`}
          >
            {expanded ? (
              <ChevronDown className="h-4 w-4 transition-transform duration-200" />
            ) : (
              <ChevronRight className="h-4 w-4 transition-transform duration-200" />
            )}
          </button>
        ) : (
          <span className="w-6 shrink-0" />
        )}

        <button
          type="button"
          onClick={() => onSelect(node.slug)}
          className={`w-full text-left rounded px-3 py-2 text-sm ${
            isSelected
              ? "bg-primary/10 text-primary font-medium"
              : "text-foreground hover:bg-muted/50"
          }`}
        >
          {getNodeLabel(node, isHindi)}
        </button>
      </div>

      {hasChildren && expanded ? (
        <ul className="space-y-1">
          {node.children.map((child) => (
            <SidebarNode
              key={child.id}
              node={child}
              selectedSlug={selectedSlug}
              onSelect={onSelect}
              defaultExpanded={depth === 0 && child.children.length <= 5}
              depth={depth + 1}
              isHindi={isHindi}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function DynamicSection({ sectionSlug, pageSlug }: DynamicSectionProps) {
  const [sitemap, setSitemap] = useState<SitemapNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string | null>(pageSlug || null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  useEffect(() => {
    let active = true;
    getSitemap()
      .then((data) => {
        if (active) {
          setSitemap(data);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const sectionNode = useMemo(() => findSectionNodeBySlug(sitemap, sectionSlug), [sitemap, sectionSlug]);

  useEffect(() => {
    const prefix = "/content/";
    if (location.pathname.startsWith(prefix)) {
      const urlSlug = decodeURIComponent(location.pathname.slice(prefix.length));
      if (urlSlug) {
        setSelected(urlSlug);
        return;
      }
    }

    if (pageSlug) {
      setSelected(pageSlug);
      return;
    }

    const fallback = findFirstLeafSlug(sectionNode);
    if (fallback) {
      setSelected(fallback);
    }
  }, [location.pathname, pageSlug, sectionNode]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [selected]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const handleSelect = (slug: string) => {
    setSelected(slug);
    navigate(`/content/${slug}`);
    setMobileOpen(false);
  };

  const { node: currentNode, ancestors } = useSitemapNode(selected);
  const breadcrumbs = useMemo(() => {
    const items: Array<{ label: string; slug: string | null }> = [{ label: "Home", slug: null }];
    if (sectionNode) items.push({ label: getNodeLabel(sectionNode, isHindi), slug: sectionNode.slug });
    for (const ancestor of ancestors) {
      if (ancestor.slug !== sectionNode?.slug) {
        items.push({ label: getNodeLabel(ancestor, isHindi), slug: ancestor.slug });
      }
    }
    if (currentNode && currentNode.slug !== sectionNode?.slug) {
      items.push({ label: getNodeLabel(currentNode, isHindi), slug: currentNode.slug });
    }
    return items;
  }, [ancestors, currentNode, sectionNode, isHindi]);

  if (loading) {
    return (
      <div className="w-full">
        <div className="rounded-lg border border-border bg-card p-6 text-muted-foreground">
          Loading section content...
        </div>
      </div>
    );
  }

  if (!sectionNode) {
    return (
      <div className="w-full">
        <div className="rounded-lg border border-border bg-card p-6 text-muted-foreground">
          No section content found.
        </div>
      </div>
    );
  }

  const sidebar = (
    <aside
      ref={drawerRef}
      className="bg-card border-r border-border overflow-y-auto max-h-[80vh] lg:max-h-none sticky top-4 p-4"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-foreground">{getNodeLabel(sectionNode, isHindi)}</h3>
        <button
          type="button"
          className="rounded p-2 text-muted-foreground hover:bg-muted/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close section browser"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <ul className="space-y-1">
        <SidebarNode
          node={sectionNode}
          selectedSlug={selected}
          onSelect={handleSelect}
          defaultExpanded
          depth={0}
          isHindi={isHindi}
        />
      </ul>
    </aside>
  );

  return (
    <div className="w-full">
      <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-muted-foreground" aria-label="Breadcrumb">
        {breadcrumbs.map((crumb, index) => {
          const last = index === breadcrumbs.length - 1;
          return (
            <div key={`${crumb.label}-${index}`} className="flex items-center gap-1">
              {index > 0 ? <span aria-hidden="true">›</span> : null}
              {last ? (
                <span className="text-foreground">{crumb.label}</span>
              ) : (
                <button
                  type="button"
                  className="hover:text-primary"
                  onClick={() => {
                    if (!crumb.slug) {
                      navigate("/");
                    } else {
                      handleSelect(crumb.slug);
                    }
                  }}
                >
                  {crumb.label}
                </button>
              )}
            </div>
          );
        })}
      </nav>

      <div className="mb-4 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/50"
        >
          <Menu className="h-4 w-4" />
          Browse Section
        </button>
      </div>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div className="h-full w-[280px] max-w-[85vw]" onClick={(event) => event.stopPropagation()}>
            {sidebar}
          </div>
        </div>
      ) : null}

      <div className="grid lg:grid-cols-[240px,1fr] gap-0 min-h-[60vh] border border-border rounded-lg overflow-hidden">
        <div className="hidden lg:block">{sidebar}</div>
        <div className="flex-1 min-w-0 p-4 sm:p-6 bg-background w-full">
          {selected ? <ContentPage slug={selected} /> : <div className="text-muted-foreground">No page selected.</div>}
        </div>
      </div>
    </div>
  );
}

