import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const CRAWLER_OUT = path.join(ROOT, "crawler", "output");
const PUBLIC_DIR = path.join(ROOT, "public");
const SRC_DATA_DIR = path.join(ROOT, "src", "data");

async function ensureDir(dirPath) {
  await fs.promises.mkdir(dirPath, { recursive: true });
}

async function copyDirSkipExisting(srcDir, destDir) {
  await ensureDir(destDir);
  let copied = 0;
  let skipped = 0;

  if (!fs.existsSync(srcDir)) return { copied, skipped };
  const files = await fs.promises.readdir(srcDir, { withFileTypes: true });
  for (const entry of files) {
    if (!entry.isFile()) continue;
    const from = path.join(srcDir, entry.name);
    const to = path.join(destDir, entry.name);
    if (fs.existsSync(to)) {
      skipped += 1;
      continue;
    }
    await fs.promises.copyFile(from, to);
    copied += 1;
  }

  return { copied, skipped };
}

async function main() {
  const out = {
    images: { copied: 0, skipped: 0 },
    attachments: { copied: 0, skipped: 0 },
    pages: { copied: 0, skipped: 0 },
    sitemap: { copied: 0, skipped: 0 }
  };

  const srcImages = path.join(CRAWLER_OUT, "images");
  const srcAttachments = path.join(CRAWLER_OUT, "attachments");
  const srcPages = path.join(CRAWLER_OUT, "pages");
  const srcSitemap = path.join(CRAWLER_OUT, "sitemap.json");

  const destImages = path.join(PUBLIC_DIR, "images");
  const destAttachments = path.join(PUBLIC_DIR, "attachments");
  const destPages = path.join(SRC_DATA_DIR, "pages");
  const destSitemap = path.join(SRC_DATA_DIR, "sitemap.json");

  out.images = await copyDirSkipExisting(srcImages, destImages);
  out.attachments = await copyDirSkipExisting(srcAttachments, destAttachments);
  out.pages = await copyDirSkipExisting(srcPages, destPages);

  await ensureDir(SRC_DATA_DIR);
  if (fs.existsSync(srcSitemap)) {
    await fs.promises.copyFile(srcSitemap, destSitemap);
    out.sitemap.copied = 1;
  } else {
    out.sitemap.skipped = 1;
  }

  const totalCopied = out.images.copied + out.attachments.copied + out.pages.copied + out.sitemap.copied;
  const totalSkipped = out.images.skipped + out.attachments.skipped + out.pages.skipped + out.sitemap.skipped;

  console.log("Migration copy summary:");
  console.log(`images: copied=${out.images.copied}, skipped=${out.images.skipped}`);
  console.log(`attachments: copied=${out.attachments.copied}, skipped=${out.attachments.skipped}`);
  console.log(`pages: copied=${out.pages.copied}, skipped=${out.pages.skipped}`);
  console.log(`sitemap: copied=${out.sitemap.copied}, skipped=${out.sitemap.skipped}`);
  console.log(`total: copied=${totalCopied}, skipped=${totalSkipped}`);
}

main().catch((error) => {
  console.error("copy-assets failed:", error);
  process.exitCode = 1;
});

