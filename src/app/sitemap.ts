import type { MetadataRoute } from "next";
import { serviceCategories } from "@/data/service-map";
import { blogPosts } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // 靜態頁面
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/cases`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // 服務分類頁
  const categoryPages: MetadataRoute.Sitemap = serviceCategories.map((cat) => ({
    url: `${SITE_URL}/services/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 服務文章頁
  const articlePages: MetadataRoute.Sitemap = serviceCategories.flatMap((cat) =>
    cat.articles.map((article) => ({
      url: `${SITE_URL}/services/${cat.slug}/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // 部落格文章頁
  const blogPages: MetadataRoute.Sitemap = blogPosts
    .filter((p) => p.contentFile)
    .map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticPages, ...categoryPages, ...articlePages, ...blogPages];
}
