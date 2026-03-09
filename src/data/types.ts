export interface SitemapNode {
  id: string;
  label: string;
  labelHi?: string;
  url: string;
  slug: string;
  depth: number;
  parentId: string | null;
  children: SitemapNode[];
}

export interface PageContent {
  id: string;
  slug: string;
  title: string;
  titleHi?: string;
  lang: string;
  lastReviewed?: string;
  contentHtml: string;
  contentHtmlHi?: string;
  contentMarkdown: string;
  contentMarkdownHi?: string;
  tables: Array<{
    headers: string[];
    rows: string[][];
  }>;
  images: Array<{
    src: string;
    alt: string;
    localPath: string;
  }>;
  attachments: Array<{
    label: string;
    href: string;
    localPath: string;
  }>;
}

