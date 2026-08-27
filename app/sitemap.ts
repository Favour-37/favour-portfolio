import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://favour-portfolio.vercel.app";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/work`, lastModified: new Date() },
    { url: `${base}/work/dominion-outreach`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}

