// Two-layer structure: 6 hub pages, each with sub-articles from Notion
// Hub pages = /services/[category]
// Article pages = /services/[category]/[slug]

export interface ServiceCategory {
  slug: string;
  title: string;
  tagline: string;
  /** Optional cover image in /public/images/services/ — just drop the file and fill in the path */
  image?: string;
  articles: ServiceArticle[];
}

export interface ServiceArticle {
  notionPageId: string;
  slug: string;
  title: string;
  shortTitle: string; // for cards and navigation
  /** Optional image in /public/images/services/ — just drop the file and fill in the path */
  image?: string;
}

// Parent Notion page ID (百無禁忌研究所建制區)
export const NOTION_PARENT_PAGE = "19f50abccc158062918de59ad5b07021";

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "mingli",
    title: "方向不明",
    tagline: "看不清下一步的時候，透過命盤幫你把地圖攤開來看。",
    image: "/images/services/icon-mingli.png",
    articles: [
      { notionPageId: "19e50abccc158053a3b0fdca9ba05b7f", slug: "overview", title: "命理諮詢服務總覽｜百無禁忌研究所", shortTitle: "服務總覽" },
      { notionPageId: "19f50abccc15807597a4ea712071df02", slug: "consultation", title: "命理諮詢｜人生卡住的時候，找對人聊聊比什麼都重要", shortTitle: "命理諮詢" },
      { notionPageId: "19f50abccc158027968eecc9c7c9e380", slug: "online", title: "線上命理諮詢｜不出門也能找到人生方向", shortTitle: "線上諮詢" },
      { notionPageId: "19f50abccc15801ab069cf7dc13197b7", slug: "when-to-consult", title: "什麼時候該找命理師？這些時機點別錯過", shortTitle: "什麼時候該找" },
      { notionPageId: "19f50abccc1580c7b441c0b6c4cb20d4", slug: "financial", title: "財務困境諮詢｜當努力賺錢卻看不到出路", shortTitle: "財務困境" },
      { notionPageId: "19f50abccc1580dbaf5bda701413864d", slug: "relationship", title: "感情諮詢｜看不清這段關係的時候怎麼辦？", shortTitle: "感情諮詢" },
      { notionPageId: "19f50abccc15800995b1cb6446b59b01", slug: "career", title: "職涯諮詢｜不知道自己適合什麼工作？", shortTitle: "職涯諮詢" },
      { notionPageId: "19f50abccc1580a6b77af34a30aa5451", slug: "life-transition", title: "人生轉折期諮詢｜被資遣、離婚、低潮期怎麼走出來？", shortTitle: "人生轉折期" },
    ],
  },
  {
    slug: "zhuanyun",
    title: "諸事不順",
    tagline: "什麼都卡住的時候，也許不是你的問題，是運勢在走低谷。",
    image: "/images/services/icon-zhuanyun.png",
    articles: [
      { notionPageId: "1a450abccc1580cbbc7cefb59c21b446", slug: "turning-luck", title: "轉運法事｜低谷走不出來，有時候不是你不夠努力", shortTitle: "轉運法事" },
    ],
  },
  {
    slug: "zhaocai",
    title: "求財開路",
    tagline: "錢留不住或進不來，有時候跟努力無關，是財路需要打通。",
    image: "/images/services/icon-zhaocai.png",
    articles: [
      { notionPageId: "19f50abccc15805580c1d7079d1f4f80", slug: "five-nobles", title: "五方貴人法｜為什麼機會總是擦身而過？", shortTitle: "五方貴人法" },
      { notionPageId: "19f50abccc15801d86affa9e77ae91aa", slug: "five-earth", title: "五方五土招財法｜穩定財源的根基法事", shortTitle: "五方五土招財" },
      { notionPageId: "19f50abccc158001b392c0cfecdd5e80", slug: "day-night", title: "日夜招財法｜白天正財、晚上偏財，雙管齊下", shortTitle: "日夜招財" },
      { notionPageId: "19f50abccc158003afdff14d508a0a7a", slug: "wealth-vault", title: "補財庫法事｜為什麼努力賺錢卻總是留不住？", shortTitle: "補財庫" },
      { notionPageId: "19f50abccc1580319f69c16a2208e0ac", slug: "past-life-debt", title: "還壽生金法事｜前世的帳，會影響今生的財運嗎？", shortTitle: "還壽生金" },
      { notionPageId: "19f50abccc1580d6ace6d43fc3b5f4f9", slug: "guanyin", title: "觀音送財符｜求財之前，先把財路打開", shortTitle: "觀音送財符" },
      { notionPageId: "1a450abccc1580be9e82e58e6acc334f", slug: "shop-wealth", title: "開店旺財法事｜生意不好，不一定是你不夠努力", shortTitle: "開店旺財" },
      { notionPageId: "1a450abccc1580559407e75644a661f9", slug: "dual-wealth", title: "兩度招財法事｜急需用錢又想長期穩財", shortTitle: "兩度招財" },
      { notionPageId: "1a450abccc158066a94dfce7f3aa00b8", slug: "spirit-beast", title: "靈獸招財術｜買了貔貅卻沒效果？", shortTitle: "靈獸招財" },
      { notionPageId: "1a450abccc158065a085c80f0214f9f2", slug: "leak-prevention", title: "財運防漏法事｜賺得到卻存不住", shortTitle: "財運防漏" },
    ],
  },
  {
    slug: "shiye",
    title: "事業受阻",
    tagline: "職場卡住或生意不好，有時候不是策略問題，是局勢需要調整。",
    image: "/images/services/icon-shiye.png",
    articles: [
      { notionPageId: "1a450abccc1580e2a6b2dcd4f49f406c", slug: "career-noble", title: "職場貴人法術｜升職加薪總輪不到你？", shortTitle: "職場貴人" },
      { notionPageId: "29350abccc1580ae8520cb014fae70e3", slug: "workplace-relations", title: "職場人際法術｜同事關係差到影響工作怎麼辦？", shortTitle: "職場人際" },
      { notionPageId: "19f50abccc15805580c1d7079d1f4f80", slug: "five-nobles-biz", title: "五方貴人法｜為什麼機會總是擦身而過？", shortTitle: "五方貴人" },
    ],
  },
  {
    slug: "zhaohua",
    title: "桃花遲遲",
    tagline: "不是沒人要，是緣分還沒對上。幫你把感情的門打開。",
    image: "/images/services/icon-zhaohua.png",
    articles: [
      { notionPageId: "1a450abccc1580b79dccd9e7968f181b", slug: "attract-love", title: "招桃花法術｜單身太久不是沒人要，是緣分還沒對上", shortTitle: "招桃花" },
      { notionPageId: "29350abccc15800eb07ad950bacfb44b", slug: "dating-app", title: "交友軟體沒用？招桃花法術幫你打開真正的緣分", shortTitle: "交友軟體招桃花" },
      { notionPageId: "29350abccc1580cf848ae1ec6c728279", slug: "lgbtq-love", title: "同志桃花法術｜愛情不分性別，緣分也是", shortTitle: "同志桃花" },
      { notionPageId: "29650abccc15807d8995eb681d7fb935", slug: "lgbtq-consultation", title: "同志感情諮詢｜在圈子裡找到對的人有多難？", shortTitle: "同志感情諮詢" },
    ],
  },
  {
    slug: "ganqing",
    title: "挽回修復",
    tagline: "挽回、第三者、家庭關係，先判斷值不值得，再決定怎麼做。",
    image: "/images/services/icon-ganqing.png",
    articles: [
      { notionPageId: "1a450abccc1580b58e3cd67189ca55fc", slug: "love-recovery", title: "感情挽回法術｜分手後還有機會嗎？", shortTitle: "感情挽回" },
      { notionPageId: "29650abccc158096b7acc08165f87141", slug: "recovery-consultation", title: "感情挽回諮詢｜先搞清楚值不值得挽回", shortTitle: "挽回諮詢" },
      { notionPageId: "29650abccc158095a3c2eb79f6248d7b", slug: "emergency-recovery", title: "緊急感情挽回｜關係快崩了還來得及嗎？", shortTitle: "緊急挽回" },
      { notionPageId: "1a450abccc1580b7a290fc24ce4fb432", slug: "cut-peach", title: "斬桃花法術｜另一半身邊的人怎麼處理？", shortTitle: "斬桃花" },
      { notionPageId: "1a450abccc158079b624e7597a0c6b48", slug: "family-harmony", title: "家庭和睦法術｜家人之間的關係可以修復嗎？", shortTitle: "家庭和睦" },
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
export const crossCategoryBadges: Record<string, string> = {
  "shiye/five-nobles-biz": "也適用於求財開路",
  "zhaocai/five-nobles": "也適用於事業受阻",
};

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
