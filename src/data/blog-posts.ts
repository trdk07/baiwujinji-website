export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  /** Image path in /public/images/blog/ */
  image?: string;
  /** Markdown file path relative to src/content/blog/ */
  contentFile?: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-money-wont-stay",
    title: "為什麼努力賺錢卻總是留不住？",
    excerpt: "很多人以為自己不會理財，但有時候不是花太多，而是財路本身需要調整。從命理的角度來看，財運不只是「賺多少」，還包括「留不留得住」。",
    category: "zhaocai",
    categoryLabel: "求財開路",
    image: "/images/blog/zhaocai.webp",
    contentFile: "leak-prevention.md",
    date: "2025-03",
  },
  {
    slug: "when-love-feels-stuck",
    title: "感情卡住的時候，問題真的出在對方嗎？",
    excerpt: "很多人來聊感情，第一句話都是「他怎樣怎樣」。但看完盤之後常常發現，真正卡住的不是對方，而是自己內心的某個東西。",
    category: "ganqing",
    categoryLabel: "挽回修復",
    image: "/images/blog/ganqing.webp",
    contentFile: "emergency-recovery.md",
    date: "2025-02",
  },
  {
    slug: "bad-luck-or-transition",
    title: "最近什麼都不順，是衰運還是轉折期？",
    excerpt: "連續好幾個月什麼都卡住的時候，先別急著覺得自己在走衰運。有時候看起來像低谷，其實是命盤正在轉彎。",
    category: "zhuanyun",
    categoryLabel: "諸事不順",
    image: "/images/blog/zhuanyun.webp",
    contentFile: "life-transition.md",
    date: "2025-01",
  },
  {
    slug: "spirit-beast-guide",
    title: "靈獸招財術｜買了貔貅卻沒效果？問題可能出在這裡",
    excerpt: "貔貅沒有效果，通常源於三個問題：沒開光、單隻擺放、位置和養護錯誤。正確的開光、適當的擺放、定期的養護，三者缺一不可。",
    category: "zhaocai",
    categoryLabel: "求財開路",
    contentFile: "spirit-beast.md",
    date: "2025-03",
  },
  {
    slug: "family-harmony",
    title: "家庭和睦法術｜家人之間的關係可以修復嗎？",
    excerpt: "家人住在一起卻形同陌路。每個人各做各的，有人躲房間、有人晚回家。是真的不愛了嗎？往往不是。是家裡的氣場亂了、能量散了。",
    category: "ganqing",
    categoryLabel: "挽回修復",
    contentFile: "family-harmony.md",
    date: "2025-02",
  },
  {
    slug: "when-to-consult",
    title: "什麼時候該找命理師？這些時機點別錯過",
    excerpt: "不是走投無路才需要找人聊。但有些時機點，來談一次的收穫會特別大。站在岔路口、努力但結果不對、心裡有個聲音在叫你停下來。",
    category: "mingli",
    categoryLabel: "方向不明",
    contentFile: "when-to-consult.md",
    date: "2025-01",
  },
];

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.slice(0, 3);
}
