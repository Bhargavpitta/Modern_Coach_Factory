import type { PageContent, SitemapNode } from "./types";

const pageModules = import.meta.glob("./pages/*.json");

export async function getSitemap(): Promise<SitemapNode[]> {
  try {
    const modules = import.meta.glob("./sitemap.json", { eager: false });
    const loader = modules["./sitemap.json"];
    if (!loader) return [];
    const mod = (await loader()) as { default?: SitemapNode[] };
    return mod.default || [];
  } catch {
    return [];
  }
}

export function flattenSitemap(nodes: SitemapNode[]): SitemapNode[] {
  const out: SitemapNode[] = [];
  const walk = (items: SitemapNode[]) => {
    for (const node of items) {
      out.push(node);
      if (node.children?.length) walk(node.children);
    }
  };
  walk(nodes);
  return out;
}

function slugToFilename(slug: string): string {
  return `${slug.replaceAll("/", "--")}.json`;
}

export async function getPageBySlug(slug: string): Promise<PageContent | null> {
  const key = `./pages/${slugToFilename(slug)}`;
  const loader = pageModules[key];
  if (!loader) return null;
  try {
    const mod = (await loader()) as { default?: PageContent } & PageContent;
    return (mod.default || mod) as PageContent;
  } catch {
    return null;
  }
}

export async function getPagesBySection(sectionSlug: string): Promise<PageContent[]> {
  const allLoaders = Object.entries(pageModules);
  const out: PageContent[] = [];
  for (const [key, load] of allLoaders) {
    const fileSlug = key.replace("./pages/", "").replace(".json", "").replaceAll("--", "/");
    if (!fileSlug.startsWith(sectionSlug)) continue;
    try {
      const mod = (await load()) as { default?: PageContent } & PageContent;
      out.push((mod.default || mod) as PageContent);
    } catch {
      // skip invalid page
    }
  }
  return out;
}

export function getSectionNav(sitemap: SitemapNode[], label: string): SitemapNode | null {
  const normalized = label.trim().toLowerCase();
  const flat = flattenSitemap(sitemap);

  const exact = flat.find((n) => n.label.trim().toLowerCase() === normalized);
  if (exact) return exact;

  const partial = flat.find((n) => n.label.trim().toLowerCase().includes(normalized) || normalized.includes(n.label.trim().toLowerCase()));
  return partial || null;
}
