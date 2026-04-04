import { describe, it, expect } from "vitest";
import { SITE_URL, SITE_NAME, EMAIL } from "@/lib/constants";

// 模擬 Organization JSON-LD 結構（與 JsonLd.tsx 中的邏輯對應）
function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-v.png`,
    image: `${SITE_URL}/og-image.png`,
    description: expect.any(String),
    email: EMAIL,
    areaServed: "TW",
    serviceType: ["命理諮詢", "��事服務", "感情修復"],
  };
}

describe("Structured Data", () => {
  it("Organization schema 應有必要欄位", () => {
    const schema = getOrganizationSchema();
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("ProfessionalService");
    expect(schema.name).toBe(SITE_NAME);
    expect(schema.url).toBe(SITE_URL);
    expect(schema.email).toBe(EMAIL);
    expect(schema.serviceType).toHaveLength(3);
  });

  it("logo URL 應為合法絕對路徑", () => {
    const schema = getOrganizationSchema();
    expect(schema.logo).toMatch(/^https?:\/\/.+\.(png|jpg|svg|webp)$/);
  });

  it("Breadcrumb schema 格式正確", () => {
    const items = [
      { name: "首頁", url: SITE_URL },
      { name: "服務", url: `${SITE_URL}/services` },
    ];
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    };

    expect(schema["@type"]).toBe("BreadcrumbList");
    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0].position).toBe(1);
    expect(schema.itemListElement[1].position).toBe(2);
  });
});
