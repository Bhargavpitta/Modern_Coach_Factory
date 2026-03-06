import { useEffect, useState } from "react";
import { Download, FileText } from "lucide-react";
import { getPageBySlug } from "@/data/loader";
import type { PageContent as PageContentType } from "@/data/types";

interface ContentPageProps {
  slug: string;
}

function basenameFromLocalPath(localPath: string): string {
  const parts = (localPath || "").split("/");
  return parts[parts.length - 1] || "";
}

export default function ContentPage({ slug }: ContentPageProps) {
  const [page, setPage] = useState<PageContentType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getPageBySlug(slug)
      .then((data) => {
        if (active) setPage(data);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <section className="card-gov p-6">
        <div className="flex items-center gap-3 text-muted-foreground">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <span>Loading content...</span>
        </div>
      </section>
    );
  }

  if (!page) {
    return (
      <section className="card-gov p-6">
        <p className="text-muted-foreground">Content not found.</p>
      </section>
    );
  }

  return (
    <div key={slug} className="animate-fadeIn">
      <section className="card-gov p-6 space-y-6">
        <h2 className="text-2xl font-bold text-foreground">{page.title}</h2>

        <div
          className="content-html"
          dangerouslySetInnerHTML={{ __html: page.contentHtml || "" }}
        />

        {page.attachments?.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Attachments</h3>
            <div className="space-y-2">
              {page.attachments
                .filter((attachment) => attachment.href && attachment.href.trim() !== "")
                .map((attachment, idx) => {
                  const file = basenameFromLocalPath(attachment.localPath);
                  return (
                    <a
                      key={`${file}-${idx}`}
                      href={attachment.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-2 p-3 rounded-md border border-border hover:bg-muted/50 transition-colors group"
                    >
                      <FileText className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors flex-1 break-words">
                        {attachment.label || file}
                      </span>
                      <Download className="h-3 w-3 text-muted-foreground shrink-0" />
                    </a>
                  );
                })}
            </div>
          </div>
        )}

        {page.images?.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Images</h3>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {page.images.map((image, idx) => {
                const file = basenameFromLocalPath(image.localPath);
                return (
                  <figure key={`${file}-${idx}`} className="overflow-hidden rounded-md border border-border bg-background">
                    <img
                      src={`/images/${file}`}
                      alt={image.alt || "image"}
                      loading="lazy"
                      className="h-auto w-full"
                    />
                    {image.alt ? <figcaption className="p-3 text-xs text-muted-foreground">{image.alt}</figcaption> : null}
                  </figure>
                );
              })}
            </div>
          </div>
        )}

        {page.lastReviewed ? (
          <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
            Source: Modern Coach Factory Raebareli &nbsp;|&nbsp; Last Reviewed: {page.lastReviewed}
          </p>
        ) : null}
      </section>
    </div>
  );
}
