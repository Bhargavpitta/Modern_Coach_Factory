import { useEffect, useState } from "react";
import { flattenSitemap, getSitemap } from "@/data/loader";
import type { SitemapNode } from "@/data/types";

interface UseSitemapNodeResult {
  node: SitemapNode | null;
  ancestors: SitemapNode[];
  loading: boolean;
}

export function useSitemapNode(slug: string | null): UseSitemapNodeResult {
  const [node, setNode] = useState<SitemapNode | null>(null);
  const [ancestors, setAncestors] = useState<SitemapNode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getSitemap()
      .then((sitemap) => {
        if (!active) return;
        const flat = flattenSitemap(sitemap);
        const found = slug ? flat.find((item) => item.slug === slug) || null : null;
        setNode(found);

        if (!found) {
          setAncestors([]);
          return;
        }

        const byId = new Map(flat.map((item) => [item.id, item]));
        const lineage: SitemapNode[] = [];
        let currentParentId = found.parentId;
        while (currentParentId) {
          const parent = byId.get(currentParentId);
          if (!parent) break;
          lineage.unshift(parent);
          currentParentId = parent.parentId;
        }
        setAncestors(lineage);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  return { node, ancestors, loading };
}

