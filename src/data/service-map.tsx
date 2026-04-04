// Two-layer structure: 6 hub pages, each with sub-articles
// Hub pages = /services/[category]
// Article pages = /services/[category]/[slug]

import type { ReactNode } from "react";

export interface ServiceCategory {
  slug: string;
  title: string;
  tagline: ReactNode;
  /** Plain text version for SEO metadata */
  taglineText: string;
  /** Optional cover image in /public/images/services/ */
  image?: string;
  /** SEO: 自訂 meta title（≤60 字元） */
  seoTitle?: string;
  /** SEO: 自訂 meta description（≤155 字元） */
  seoDescription?: string;
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
  /** SEO: 自訂 meta title（≤60 字元） */
  seoTitle?: string;
  /** SEO: 自訂 meta description（≤155 字元） */
  seoDescription?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "mingli",
    title: "方向不明",
    tagline: <>看不清下一步的時候，透過<span className="em-sub">命盤</span>幫你把<span className="em-sub">地圖</span>攤開來看。</>,
    taglineText: "看不清下一步的時候，透過命盤幫你把地圖攤開來看。",
    image: "/images/services/icon-mingli.png",
    seoTitle: "命理諮詢線上｜方向不明？幫你看清下一步",
    seoDescription: "找不到人生方向？18 年經驗命理師線上諮詢，透過命盤幫你釐清財運、感情、職涯。不恐嚇、不推銷，先聊再決定。立即加 LINE 諮詢 →",
    articles: [
      { slug: "consultation", title: "命理諮詢｜找不到人生方向？18 年經驗幫你理出頭緒", shortTitle: "命理諮詢", contentFile: "consultation.md", image: "/images/blog/consultation.webp", seoTitle: "命理諮詢線上推薦｜18 年經驗幫你理出頭緒", seoDescription: "線上算命推薦。不是算命告訴你會怎樣，而是幫你看清現在站哪裡、前面的路怎麼走。18 年經驗，先聊再決定。" },
      { slug: "financial", title: "財富諮詢｜當努力賺錢卻看不到出路", shortTitle: "財富諮詢", contentFile: "financial.md", image: "/images/blog/financial.webp", seoTitle: "線上算命推薦 財運｜財富諮詢幫你找到出路", seoDescription: "努力賺錢卻看不到出路？財運不好怎麼辦？從命盤看你的財運格局，找出問題在哪。線上諮詢，先聊不收費。" },
      { slug: "relationship", title: "感情諮詢｜看不清這段關係的時候怎麼辦？", shortTitle: "感情諮詢", contentFile: "relationship.md", image: "/images/blog/relationship.webp" },
      { slug: "career", title: "職涯諮詢｜不知道自己適合什麼工作？", shortTitle: "職涯諮詢", contentFile: "career.md", image: "/images/blog/career.webp" },
      { slug: "lgbtq-consultation", title: "同志感情諮詢｜在圈子裡找到對的人有多難？", shortTitle: "同志感情諮詢", contentFile: "lgbtq-consultation.md", image: "/images/blog/lgbtq-consultation.webp" },
    ],
  },
  {
    slug: "zhuanyun",
    title: "諸事不順",
    tagline: <>什麼都卡住的時候，也許不是你的問題，是<span className="em-sub">運勢</span>在走低谷。</>,
    taglineText: "什麼都卡住的時候，也許不是你的問題，是運勢在走低谷。",
    image: "/images/services/icon-zhuanyun.png",
    articles: [
      { slug: "turning-luck", title: "轉運法事｜低谷走不出來，有時候不是你不夠努力", shortTitle: "轉運法事", contentFile: "turning-luck.md", image: "/images/blog/turning-luck.webp" },
    ],
  },
  {
    slug: "zhaocai",
    title: "求財開路",
    tagline: <>錢留不住或進不來，有時候跟努力無關，是<span className="em-sub">財路</span>需要打通。</>,
    taglineText: "錢留不住或進不來，有時候跟努力無關，是財路需要打通。",
    image: "/images/services/icon-zhaocai.png",
    seoTitle: "求財法事推薦｜財運不好怎麼辦？",
    seoDescription: "財運不好怎麼辦？補財庫、招財法事、觀音送財符，多種開運求財方法。18 年經驗，先評估再處理，不強迫推銷。立即加 LINE 諮詢 →",
    articles: [
      { slug: "five-nobles", title: "五方貴人法｜為什麼機會總是擦身而過？", shortTitle: "五方貴人法", contentFile: "five-nobles.md", image: "/images/blog/five-nobles.webp", seoTitle: "五方貴人法有效嗎？貴人運不好的解法", seoDescription: "五方貴人法有效嗎？機會總是擦身而過，可能是貴人運被擋住了。18 年經驗法師處理，先評估你的狀況再決定。" },
      { slug: "five-earth", title: "五方五土招財法｜穩定財源的根基法事", shortTitle: "五方五土招財", contentFile: "five-earth.md", image: "/images/blog/five-earth.webp", seoTitle: "五方五土招財法｜穩定財源的根基法事", seoDescription: "想要穩定的財運基礎？五方五土招財法從根本打通財路，不是短期衝刺，是長期穩定。適合生意人與上班族。" },
      { slug: "day-night", title: "日夜招財法｜白天正財、晚上偏財，雙管齊下", shortTitle: "日夜招財", contentFile: "day-night.md", image: "/images/blog/day-night.webp", seoTitle: "開運求財方法｜日夜招財法 正財偏財雙管齊下", seoDescription: "開運求財方法推薦。白天正財、晚上偏財，日夜雙管齊下的招財法事。不誇大效果，做之前先說清楚。" },
      { slug: "wealth-vault", title: "補財庫法事｜為什麼努力賺錢卻總是留不住？", shortTitle: "補財庫", contentFile: "wealth-vault.md", image: "/images/blog/wealth-vault.webp", seoTitle: "補財庫有用嗎？推薦真正有效的補財庫法事", seoDescription: "補財庫有用嗎？努力賺錢卻總留不住，可能是財庫有漏。18 年經驗補財庫推薦，先聊你的狀況再決定要不要做。" },
      { slug: "past-life-debt", title: "還壽生金法事｜前世的帳，會影響今生的財運嗎？", shortTitle: "還壽生金", contentFile: "past-life-debt.md", image: "/images/blog/past-life-debt.webp", seoTitle: "還壽生金法事｜前世債影響今生財運？", seoDescription: "前世的帳會影響今生財運嗎？還壽生金法事幫你清理累世債務，讓財路不再被卡住。先評估、不強推。" },
      { slug: "guanyin", title: "觀音送財符｜求財之前，先把財路打開", shortTitle: "觀音送財符", contentFile: "guanyin.md", image: "/images/blog/guanyin.webp", seoTitle: "觀音送財符｜求財之前先把財路打開", seoDescription: "觀音送財符是什麼？求財之前先把財路打開，讓錢進得來、留得住。不是買了就有效，需要正確的方式處理。" },
      { slug: "shop-wealth", title: "開店旺財法事｜生意不好，不一定是你不夠努力", shortTitle: "開店旺財", contentFile: "shop-wealth.md", image: "/images/blog/shop-wealth.webp", seoTitle: "開店旺財法事｜生意不好？幫你調整財運", seoDescription: "開店生意不好不一定是你不夠努力。開店旺財法事幫你從根本調整店面財運與人氣，先了解狀況再處理。" },
      { slug: "dual-wealth", title: "兩度招財法事｜急需用錢又想長期穩財，可以同時處理嗎？", shortTitle: "兩度招財", contentFile: "dual-wealth.md", image: "/images/blog/dual-wealth.webp", seoTitle: "開運求財方法｜兩度招財法事 急財穩財同時處理", seoDescription: "急需用錢又想長期穩財？兩度招財法事同時處理短期急需與長期財運，開運求財方法推薦。先聊再決定。" },
    ],
  },
  {
    slug: "shiye",
    title: "事業受阻",
    tagline: <>職場卡住或生意不好，有時候不是策略問題，是<span className="em-sub">局勢</span>需要調整。</>,
    taglineText: "職場卡住或生意不好，有時候不是策略問題，是局勢需要調整。",
    image: "/images/services/icon-shiye.png",
    articles: [
      { slug: "career-noble", title: "職場貴人法術｜升職加薪總輪不到你？", shortTitle: "職場貴人", contentFile: "career-noble.md", image: "/images/blog/career-noble.webp" },
      { slug: "workplace-relations", title: "職場人際法術｜同事關係差到影響工作怎麼辦？", shortTitle: "職場人際", contentFile: "workplace-relations.md", image: "/images/blog/workplace-relations.webp" },
    ],
  },
  {
    slug: "zhaohua",
    title: "桃花遲遲",
    tagline: <>不是沒人要，是<span className="em-sub">緣分</span>還沒對上。幫你把感情的門打開。</>,
    taglineText: "不是沒人要，是緣分還沒對上。幫你把感情的門打開。",
    image: "/images/services/icon-zhaohua.png",
    articles: [
      { slug: "attract-love", title: "招桃花法術｜單身太久不是沒人要，是緣分還沒對上", shortTitle: "招桃花", contentFile: "attract-love.md", image: "/images/blog/attract-love.webp" },
      { slug: "dating-app", title: "交友軟體沒用？招桃花法術幫你打開真正的緣分", shortTitle: "交友軟體招桃花", contentFile: "dating-app.md", image: "/images/blog/dating-app.webp" },
      { slug: "lgbtq-love", title: "同志桃花法術｜愛情不分性別，緣分也是", shortTitle: "同志桃花", contentFile: "lgbtq-love.md", image: "/images/blog/lgbtq-love.webp" },
    ],
  },
  {
    slug: "ganqing",
    title: "挽回修復",
    tagline: <>挽回、第三者、家庭關係，先判斷<span className="em-sub">值不值得</span>，再決定怎麼做。</>,
    taglineText: "挽回、第三者、家庭關係，先判斷值不值得，再決定怎麼做。",
    image: "/images/services/icon-ganqing.png",
    seoTitle: "感情挽回法事推薦｜挽回修復服務",
    seoDescription: "分手後還有機會嗎？感情挽回法事推薦，先判斷值不值得挽回，再決定怎麼做。不強推、不誇大，18 年經驗。",
    articles: [
      { slug: "love-recovery", title: "感情挽回法術｜分手後還有機會嗎？法事能做什麼？", shortTitle: "感情挽回", contentFile: "love-recovery.md", image: "/images/blog/love-recovery.webp", seoTitle: "感情挽回法事推薦｜分手後還有機會嗎？", seoDescription: "感情挽回法事推薦。分手後還有機會嗎？先幫你判斷值不值得挽回，再決定法事怎麼做。不誇大、不強推。" },
      { slug: "recovery-consultation", title: "感情挽回諮詢｜先搞清楚值不值得挽回", shortTitle: "挽回諮詢", contentFile: "recovery-consultation.md", image: "/images/blog/recovery-consultation.webp" },
      { slug: "cut-peach", title: "斬桃花法術｜另一半身邊的人怎麼處理？", shortTitle: "斬桃花", contentFile: "cut-peach.md", image: "/images/blog/cut-peach.webp" },
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
