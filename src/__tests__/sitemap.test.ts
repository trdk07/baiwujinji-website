import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import { SITE_URL } from "@/lib/constants";
import { serviceCategories } from "@/data/service-map";
import { blogPosts } from "@/data/blog-posts";

describe("Sitemap", () => {
  const entries = sitemap();

  it("應包含所有靜態頁面", () => {
    const urls = entries.map((e) => e.url);
    const requiredPages = [
      SITE_URL,
      `${SITE_URL}/about`,
      `${SITE_URL}/services`,
      `${SITE_URL}/cases`,
      `${SITE_URL}/blog`,
      `${SITE_URL}/contact`,
      `${SITE_URL}/faq`,
      `${SITE_URL}/privacy`,
    ];
    for (const page of requiredPages) {
      expect(urls).toContain(page);
    }
  });

  it("應包含所有服務分類頁", () => {
    const urls = entries.map((e) => e.url);
    for (const cat of serviceCategories) {
      expect(urls).toContain(`${SITE_URL}/services/${cat.slug}`);
    }
  });

  it("應包含所有服務文章頁", () => {
    const urls = entries.map((e) => e.url);
    for (const cat of serviceCategories) {
      for (const article of cat.articles) {
        expect(urls).toContain(`${SITE_URL}/services/${cat.slug}/${article.slug}`);
      }
    }
  });

  it("應包含所有部落格文章頁", () => {
    const urls = entries.map((e) => e.url);
    for (const post of blogPosts.filter((p) => p.contentFile)) {
      expect(urls).toContain(`${SITE_URL}/blog/${post.slug}`);
    }
  });

  it("所有 URL 應以 SITE_URL 開頭", () => {
    for (const entry of entries) {
      expect(entry.url).toMatch(new RegExp(`^${SITE_URL}`));
    }
  });

  it("所有 entry 應有 priority", () => {
    for (const entry of entries) {
      expect(entry.priority).toBeGreaterThan(0);
      expect(entry.priority).toBeLessThanOrEqual(1);
    }
  });
});
