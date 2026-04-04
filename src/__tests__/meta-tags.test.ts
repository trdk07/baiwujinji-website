import { describe, it, expect } from "vitest";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { serviceCategories } from "@/data/service-map";
import { blogPosts } from "@/data/blog-posts";

// Google 建議 title 不超過 60 字元，description 不超過 160 字元
const MAX_TITLE_LENGTH = 60;
const MAX_DESCRIPTION_LENGTH = 160;

describe("Meta Tags 長度檢查", () => {
  it("首頁 title 不應超過限制", () => {
    const title = `${SITE_NAME} — 人生顧問・法事服務・感情修復`;
    expect(title.length).toBeLessThanOrEqual(MAX_TITLE_LENGTH);
  });

  it("首頁 description 不應超過限制", () => {
    expect(SITE_DESCRIPTION.length).toBeLessThanOrEqual(MAX_DESCRIPTION_LENGTH);
  });

  it("服務分類頁 title 不應超過限制", () => {
    for (const cat of serviceCategories) {
      const title = cat.seoTitle || `${cat.title} | ${SITE_NAME}`;
      expect(title.length, `分類「${cat.title}」title 過長：${title.length} 字元`).toBeLessThanOrEqual(MAX_TITLE_LENGTH);
    }
  });

  it("服務分類頁 description 不應超過限制", () => {
    for (const cat of serviceCategories) {
      const desc = cat.seoDescription || cat.taglineText;
      expect(
        desc.length,
        `分類「${cat.title}」description 過長：${desc.length} 字元`
      ).toBeLessThanOrEqual(MAX_DESCRIPTION_LENGTH);
    }
  });

  it("服務文章頁 title 不應超過限制", () => {
    for (const cat of serviceCategories) {
      for (const article of cat.articles) {
        const title = article.seoTitle || article.title.split("｜")[0];
        expect(
          title.length,
          `文章「${article.shortTitle}」title 過長：${title.length} 字元`
        ).toBeLessThanOrEqual(MAX_TITLE_LENGTH);
      }
    }
  });

  it("服務文章頁 description 不應超過限制", () => {
    for (const cat of serviceCategories) {
      for (const article of cat.articles) {
        const desc = article.seoDescription || article.title.split("｜")[1] || article.title;
        expect(
          desc.length,
          `文章「${article.shortTitle}」description 過長：${desc.length} 字元`
        ).toBeLessThanOrEqual(MAX_DESCRIPTION_LENGTH);
      }
    }
  });

  it("部落格文章 title 不應超過限制", () => {
    for (const post of blogPosts) {
      const title = `${post.title} | ${SITE_NAME}`;
      expect(title.length, `文章「${post.title}」title 過長：${title.length} 字元`).toBeLessThanOrEqual(MAX_TITLE_LENGTH);
    }
  });

  it("部落格文章 description 不應超過限制", () => {
    for (const post of blogPosts) {
      expect(
        post.excerpt.length,
        `文章「${post.title}」excerpt 過長：${post.excerpt.length} 字元`
      ).toBeLessThanOrEqual(MAX_DESCRIPTION_LENGTH);
    }
  });
});
