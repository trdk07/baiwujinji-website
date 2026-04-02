export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  /** Image path in /public/images/blog/ — you just drop the image file there */
  image?: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-money-wont-stay",
    title: "為什麼努力賺錢卻總是留不住？",
    excerpt: "很多人以為自己不會理財，但有時候不是花太多，而是財路本身需要調整。從命理的角度來看，財運不只是「賺多少」，還包括「留不留得住」。",
    category: "zhaocai",
    categoryLabel: "求財開路",
    date: "2025-03",
  },
  {
    slug: "when-love-feels-stuck",
    title: "感情卡住的時候，問題真的出在對方嗎？",
    excerpt: "很多人來聊感情，第一句話都是「他怎樣怎樣」。但看完盤之後常常發現，真正卡住的不是對方，而是自己內心的某個東西。",
    category: "ganqing",
    categoryLabel: "挽回修復",
    date: "2025-02",
  },
  {
    slug: "bad-luck-or-transition",
    title: "最近什麼都不順，是衰運還是轉折期？",
    excerpt: "連續好幾個月什麼都卡住的時候，先別急著覺得自己在走衰運。有時候看起來像低谷，其實是命盤正在轉彎。",
    category: "zhuanyun",
    categoryLabel: "諸事不順",
    date: "2025-01",
  },
];

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.slice(0, 3);
}
