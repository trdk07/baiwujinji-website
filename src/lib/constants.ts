// 集中管理外部連結與聯繫資訊
export const SITE_URL = "https://baiwujinji.com";
export const SITE_NAME = "百無禁忌研究所";
export const SITE_DESCRIPTION =
  "人生本來就有無限可能。百無禁忌研究所提供人生顧問、法事服務、感情修復，先好好把心裡那團迷霧釐清，看見問題之後就不是那麼困難。";

export const LINE_URL = "https://lin.ee/tiEYURo";
export const EMAIL = "fortunetell99@gmail.com";
export const THREADS_URL = "https://www.threads.com/@fate_future";

// GA4 Measurement ID（上線前替換為正式 ID）
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

/**
 * 追蹤 LINE CTA 點擊事件
 * @param label - 事件標籤，例如 "hero", "footer", "floating"
 */
export function trackLineCTA(label: string) {
  if (typeof gtag !== "undefined") {
    gtag("event", "line_cta_click", {
      event_category: "engagement",
      event_label: label,
    });
  }
}
