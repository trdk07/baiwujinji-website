// Two-layer structure: 6 hub pages, each with sub-articles
// Hub pages = /services/[category]
// Article pages = /services/[category]/[slug]

import type { ReactNode } from "react";

export interface ServiceCategory {
  slug: string;
  title: string;
  tagline: ReactNode;
  /** Optional cover image in /public/images/services/ */
  image?: string;
  articles: ServiceArticle[];
}

export interface ServiceArticle {
  slug: string;
  title: string;
  shortTitle: string;
  /** Markdown file path relative to src/content/services/ */
  contentFile: string;
  /** Optional image in /public/images/services/ */
  image?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "mingli",
    title: "方向不明",
    tagline: <>看不清下一步的時候，透過<span className="em-sub">命盤</span>幫你把<span className="em-sub">地圖</span>攤開來看。</>,
    image: "/images/services/icon-mingli.png",
    articles: [
      { slug: "consultation", title: "命理諮詢｜找不到人生方向？18 年經驗幫你理出頭緒", shortTitle: "命理諮詢", contentFile: "consultation.md" },
      { slug: "financial", title: "財富諮詢｜當努力賺錢卻看不到出路", shortTitle: "財富諮詢", contentFile: "financial.md" },
      { slug: "relationship", title: "感情諮詢｜看不清這段關係的時候怎麼辦？", shortTitle: "感情諮詢", contentFile: "relationship.md" },
      { slug: "career", title: "職涯諮詢｜不知道自己適合什麼工作？", shortTitle: "職涯諮詢", contentFile: "career.md" },
      { slug: "lgbtq-consultation", title: "同志感情諮詢｜在圈子裡找到對的人有多難？", shortTitle: "同志感情諮詢", contentFile: "lgbtq-consultation.md" },
    ],
  },
  {
    slug: "zhuanyun",
    title: "諸事不順",
    tagline: <>什麼都卡住的時候，也許不是你的問題，是<span className="em-sub">運勢</span>在走低谷。</>,
    image: "/images/services/icon-zhuanyun.png",
    articles: [
      { slug: "turning-luck", title: "轉運法事｜低谷走不出來，有時候不是你不夠努力", shortTitle: "轉運法事", contentFile: "turning-luck.md" },
    ],
  },
  {
    slug: "zhaocai",
    title: "求財開路",
    tagline: <>錢留不住或進不來，有時候跟努力無關，是<span className="em-sub">財路</span>需要打通。</>,
    image: "/images/services/icon-zhaocai.png",
    articles: [
      { slug: "five-nobles", title: "五方貴人法｜為什麼機會總是擦身而過？", shortTitle: "五方貴人法", contentFile: "five-nobles.md" },
      { slug: "five-earth", title: "五方五土招財法｜穩定財源的根基法事", shortTitle: "五方五土招財", contentFile: "five-earth.md" },
      { slug: "day-night", title: "日夜招財法｜白天正財、晚上偏財，雙管齊下", shortTitle: "日夜招財", contentFile: "day-night.md" },
      { slug: "wealth-vault", title: "補財庫法事｜為什麼努力賺錢卻總是留不住？", shortTitle: "補財庫", contentFile: "wealth-vault.md" },
      { slug: "past-life-debt", title: "還壽生金法事｜前世的帳，會影響今生的財運嗎？", shortTitle: "還壽生金", contentFile: "past-life-debt.md" },
      { slug: "guanyin", title: "觀音送財符｜求財之前，先把財路打開", shortTitle: "觀音送財符", contentFile: "guanyin.md" },
      { slug: "shop-wealth", title: "開店旺財法事｜生意不好，不一定是你不夠努力", shortTitle: "開店旺財", contentFile: "shop-wealth.md" },
      { slug: "dual-wealth", title: "兩度招財法事｜急需用錢又想長期穩財，可以同時處理嗎？", shortTitle: "兩度招財", contentFile: "dual-wealth.md" },
    ],
  },
  {
    slug: "shiye",
    title: "事業受阻",
    tagline: <>職場卡住或生意不好，有時候不是策略問題，是<span className="em-sub">局勢</span>需要調整。</>,
    image: "/images/services/icon-shiye.png",
    articles: [
      { slug: "career-noble", title: "職場貴人法術｜升職加薪總輪不到你？", shortTitle: "職場貴人", contentFile: "career-noble.md" },
      { slug: "workplace-relations", title: "職場人際法術｜同事關係差到影響工作怎麼辦？", shortTitle: "職場人際", contentFile: "workplace-relations.md" },
    ],
  },
  {
    slug: "zhaohua",
    title: "桃花遲遲",
    tagline: <>不是沒人要，是<span className="em-sub">緣分</span>還沒對上。幫你把感情的門打開。</>,
    image: "/images/services/icon-zhaohua.png",
    articles: [
      { slug: "attract-love", title: "招桃花法術｜單身太久不是沒人要，是緣分還沒對上", shortTitle: "招桃花", contentFile: "attract-love.md" },
      { slug: "dating-app", title: "交友軟體沒用？招桃花法術幫你打開真正的緣分", shortTitle: "交友軟體招桃花", contentFile: "dating-app.md" },
      { slug: "lgbtq-love", title: "同志桃花法術｜愛情不分性別，緣分也是", shortTitle: "同志桃花", contentFile: "lgbtq-love.md" },
    ],
  },
  {
    slug: "ganqing",
    title: "挽回修復",
    tagline: <>挽回、第三者、家庭關係，先判斷<span className="em-sub">值不值得</span>，再決定怎麼做。</>,
    image: "/images/services/icon-ganqing.png",
    articles: [
      { slug: "love-recovery", title: "感情挽回法術｜分手後還有機會嗎？法事能做什麼？", shortTitle: "感情挽回", contentFile: "love-recovery.md" },
      { slug: "recovery-consultation", title: "感情挽回諮詢｜先搞清楚值不值得挽回", shortTitle: "挽回諮詢", contentFile: "recovery-consultation.md" },
      { slug: "cut-peach", title: "斬桃花法術｜另一半身邊的人怎麼處理？", shortTitle: "斬桃花", contentFile: "cut-peach.md" },
    ],
  },
];

// Cross-category recommendations (shown at bottom of category pages)
export const crossRecommendations: Record<string, { slug: string; category: string; title: string; note: string }[]> = {
  shiye: [
    { slug: "shop-wealth", category: "zhaocai", title: "開店旺財", note: "開店或做生意的財運問題，也可以從求財開路的角度處理" },
  ],
};

// Articles that appear in multiple categories (shown as badge on card)
export const crossCategoryBadges: Record<string, string> = {};

// Helper functions
export function getCategoryBySlug(slug: string) {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getArticle(categorySlug: string, articleSlug: string) {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return null;
  const article = cat.articles.find((a) => a.slug === articleSlug);
  if (!article) return null;
  return { category: cat, article };
}

export function getAllArticlePaths() {
  const paths: { category: string; slug: string }[] = [];
  for (const cat of serviceCategories) {
    for (const article of cat.articles) {
      paths.push({ category: cat.slug, slug: article.slug });
    }
  }
  return paths;
}
