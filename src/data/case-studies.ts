// Case study data extracted from client records
// Three display formats: "quote" (text feedback), "screenshot" (LINE chat image), "story" (before/after narrative)

export type CaseFormat = "quote" | "screenshot" | "story";

export interface CaseStudy {
  id: string;
  format: CaseFormat;
  category: "fortune" | "relationship" | "career" | "consultation";
  /** Display label for the category */
  categoryLabel: string;
  /** Client descriptor (anonymous) */
  client: string;
  /** The problem they came with */
  problem: string;
  /** What was done */
  service: string;
  /** Client quote or story text */
  content: string;
  /** Result timeframe, e.g. "3個月內" */
  timeframe?: string;
  /** Optional second quote or follow-up */
  followUp?: string;
  /** Screenshot image path (for screenshot format) */
  imagePath?: string;
  /** Teacher reply message (for screenshot format) */
  teacherReply?: string;
  /** Chat date label (for screenshot format) */
  chatDate?: string;
  /** Chat time label (for screenshot format) */
  chatTime?: string;
}

export const caseStudies: CaseStudy[] = [
  // ── Quote format ──────────────────────────────────────
  {
    id: "q-freelancer",
    format: "quote",
    category: "consultation",
    categoryLabel: "方向不明",
    client: "30 歲・自由接案者",
    problem: "案子做得心很累，不知道該不該轉換跑道",
    service: "命理諮詢",
    content: "本來只是想來問工作的事，結果聊完之後發現自己真正卡住的不是工作，是對未來的恐懼。老師沒有叫我一定要怎樣，而是幫我看清楚我現在站在哪裡。",
    timeframe: "諮詢後 2 週",
    followUp: "我開始整理自己真正想做的事了，心比較定了。",
  },
  {
    id: "q-restaurant",
    format: "quote",
    category: "fortune",
    categoryLabel: "求財開路",
    client: "餐飲業老闆",
    problem: "店開了半年，生意一直起不來",
    service: "開店旺財法事",
    content: "做完法事大概第三週開始，週末的來客數明顯變多，後來還有客人說是朋友推薦來的。我不確定是不是法事的關係，但至少那段時間真的有轉變。",
    timeframe: "3 週後",
  },
  {
    id: "q-salary",
    format: "quote",
    category: "fortune",
    categoryLabel: "求財開路",
    client: "35 歲・上班族",
    problem: "薪水不低但錢就是存不住",
    service: "財運防漏法事＋補財庫",
    content: "以前月底就見底，做完之後也不是突然變有錢，而是莫名其妙開始會注意自己的花錢習慣。現在每個月至少能存下一些了。",
    timeframe: "1 個月後",
  },
  {
    id: "q-couple",
    format: "quote",
    category: "relationship",
    categoryLabel: "挽回修復",
    client: "28 歲・女性",
    problem: "和交往五年的男友冷戰，快要分手",
    service: "感情挽回法事＋諮詢",
    content: "我那時候整個人都很慌，老師先幫我看清楚這段關係的狀態，再決定要不要做法事。後來我們有好好聊開，現在關係比以前還好。",
    timeframe: "2 個月內",
  },
  {
    id: "q-peach",
    format: "quote",
    category: "relationship",
    categoryLabel: "桃花遲遲",
    client: "32 歲・男性",
    problem: "單身快五年，交友軟體都沒用",
    service: "招桃花法事",
    content: "做完大概一個月，有次朋友聚餐認識了一個人，聊得還不錯。我不知道是不是法事的效果，但至少我開始願意出門了，整個人狀態好很多。",
    timeframe: "1 個月後",
  },
  {
    id: "q-career-block",
    format: "quote",
    category: "career",
    categoryLabel: "事業受阻",
    client: "40 歲・中階主管",
    problem: "在公司待了八年，升遷總是輪不到自己",
    service: "職場貴人法術",
    content: "其實我一開始蠻懷疑的，但做完之後大概兩個月，部門有新的專案，主管第一次主動找我負責。不敢說百分之百是法事，但那個時機點真的很巧。",
    timeframe: "2 個月後",
  },
  {
    id: "q-divorce",
    format: "quote",
    category: "consultation",
    categoryLabel: "方向不明",
    client: "45 歲・離婚後重新開始",
    problem: "離婚後不知道接下來的人生要怎麼走",
    service: "命理諮詢",
    content: "離婚之後覺得人生整個空掉，朋友介紹來的。老師沒有講那些心靈雞湯，就是很直接地幫我看盤，告訴我哪些事情適合現在做、哪些可以再等等。那次聊完我哭了，但是是鬆一口氣的那種哭。",
    timeframe: "諮詢當天",
  },
  {
    id: "q-debt",
    format: "quote",
    category: "fortune",
    categoryLabel: "求財開路",
    client: "38 歲・負債中",
    problem: "欠了一筆錢，怎麼努力都還不完",
    service: "還壽生金＋補財庫",
    content: "做完之後沒有突然有一筆錢從天上掉下來，但那個月剛好有一個早就放棄的帳收回來了。慢慢的，還債的壓力沒那麼重了。",
    timeframe: "當月",
  },

  // ── Screenshot format (placeholder images) ─────────────
  {
    id: "s-luck-turn",
    format: "screenshot",
    category: "career",
    categoryLabel: "諸事不順",
    client: "自營業者",
    problem: "什麼都不順，覺得自己在走衰運",
    service: "轉運法事",
    content: "老師謝謝你，最近真的有比較順了，上禮拜還接到一個大案子 🙏",
    teacherReply: "很好，繼續保持這個狀態，有什麼變化再跟我說 👍",
    chatDate: "3月15日",
    chatTime: "下午 2:34",
    imagePath: "/images/cases/line-luck.png",
  },
  {
    id: "s-wealth",
    format: "screenshot",
    category: "fortune",
    categoryLabel: "求財開路",
    client: "業務人員",
    problem: "業績一直達不到目標",
    service: "五方貴人法",
    content: "報告老師！這個月業績終於破紀錄了，而且有三個客戶是別人轉介紹的 😭",
    teacherReply: "恭喜！貴人運開了，接下來好好把握這些機會",
    chatDate: "2月28日",
    chatTime: "晚上 9:12",
    imagePath: "/images/cases/line-wealth.png",
  },
  {
    id: "s-love",
    format: "screenshot",
    category: "relationship",
    categoryLabel: "桃花遲遲",
    client: "單身女性",
    problem: "身邊完全沒有對象",
    service: "招桃花法事",
    content: "老師我要跟你說一件事！！我上禮拜被告白了！！對方超認真的那種！！",
    teacherReply: "哈哈恭喜妳～先慢慢相處，不要急，有問題再來聊",
    chatDate: "4月2日",
    chatTime: "下午 5:47",
    imagePath: "/images/cases/line-love.png",
  },
  {
    id: "s-family",
    format: "screenshot",
    category: "relationship",
    categoryLabel: "挽回修復",
    client: "家庭主婦",
    problem: "和婆婆關係很差，影響到婚姻",
    service: "家庭和睦法術",
    content: "老師你不會相信，我婆婆昨天居然主動打電話來說想一起吃飯，我嚇到",
    teacherReply: "很好的開始，妳就自然地去，不用想太多",
    chatDate: "1月20日",
    chatTime: "上午 10:08",
    imagePath: "/images/cases/line-family.png",
  },

  // ── Story format (before/after narrative) ──────────────
  {
    id: "st-pivot",
    format: "story",
    category: "consultation",
    categoryLabel: "方向不明",
    client: "29 歲・工程師",
    problem: "工作穩定但完全沒有熱情，每天都在懷疑人生",
    service: "命理諮詢（兩次）",
    content: "第一次來的時候只是覺得工作沒意義，聊完才發現自己其實一直在逃避一件事——他真正想做的是教育相關的工作，但覺得「不穩定」所以從來沒認真考慮過。",
    timeframe: "6 個月",
    followUp: "半年後他回來報告，已經開始在下班後做線上教學的 side project，雖然還沒離職，但整個人的狀態完全不一樣了。",
  },
  {
    id: "st-shop",
    format: "story",
    category: "fortune",
    categoryLabel: "求財開路",
    client: "夫妻・開早餐店",
    problem: "開店一年多，每個月都在虧，考慮要不要收掉",
    service: "開店旺財法事＋命理諮詢",
    content: "來的時候兩個人都很沮喪，先看了盤才發現他們的店面方位和營業時間其實有可以調整的地方。做了法事之後，也建議他們調整菜單方向。",
    timeframe: "3 個月",
    followUp: "三個月後回來說已經開始打平了，假日還會有人排隊。太太說「至少現在不會每天都在吵要不要收店了」。",
  },
  {
    id: "st-third-party",
    format: "story",
    category: "relationship",
    categoryLabel: "挽回修復",
    client: "33 歲・男性",
    problem: "發現另一半有曖昧對象，關係瀕臨破裂",
    service: "斬桃花＋感情挽回＋諮詢",
    content: "他來的時候非常憤怒，第一次諮詢幾乎都在聽他說。先幫他冷靜下來看清楚狀況：對方不是不愛他，是這段關係裡有些需求長期被忽略。",
    timeframe: "4 個月",
    followUp: "做了斬桃花和挽回之後，也持續在諮詢中調整相處方式。四個月後兩個人的關係反而比出事前更好，他說「這次的事情反而讓我們真正開始溝通了」。",
  },
  {
    id: "st-layoff",
    format: "story",
    category: "career",
    categoryLabel: "事業受阻",
    client: "42 歲・被資遣",
    problem: "突然被裁員，中年失業不知道怎麼辦",
    service: "命理諮詢＋轉運法事＋五方貴人法",
    content: "被資遣的第二天就來了，整個人非常慌。看盤之後發現他其實正在走一個轉換期，這次的失業反而是一個重新開始的機會。",
    timeframe: "5 個月",
    followUp: "做了轉運和貴人法之後，第三個月有獵頭主動聯繫。五個月後進了一間規模更大的公司，薪水還比之前高。他說「被裁的時候覺得天塌了，現在回頭看反而感謝那個轉折」。",
  },
];

// Category filter options
export const caseCategories = [
  { value: "all", label: "全部" },
  { value: "consultation", label: "方向不明" },
  { value: "fortune", label: "求財開路" },
  { value: "career", label: "事業・轉運" },
  { value: "relationship", label: "感情・桃花" },
] as const;

// Get featured cases for homepage preview (mix of formats)
export function getFeaturedCases(): CaseStudy[] {
  return [
    caseStudies.find((c) => c.id === "q-freelancer")!,
    caseStudies.find((c) => c.id === "s-wealth")!,
    caseStudies.find((c) => c.id === "st-shop")!,
    caseStudies.find((c) => c.id === "q-couple")!,
    caseStudies.find((c) => c.id === "st-layoff")!,
    caseStudies.find((c) => c.id === "s-love")!,
  ];
}
