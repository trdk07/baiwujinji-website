"use client";

import { useState, type ReactNode } from "react";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "法事需要到現場嗎？",
    a: "不一定。大部分的法事可以遠距處理，少數需要到現場的我們會事先說明。線上一樣有效，不用擔心。",
  },
  {
    q: "做完法事多久會有效果？",
    a: "每個人的狀況不一樣，通常 2 到 4 週會開始感受到變化。我們不會跟你說「馬上見效」，但過程中有任何問題都可以回來聊。",
  },
  {
    q: "我不確定自己需要什麼，可以先聊嗎？",
    a: "當然可以。加 LINE 跟我們說你的狀況，可以先聊個三十分鐘了解情況。如果後續需要正式諮詢或法事，再跟你說明費用。",
  },
  {
    q: "命理諮詢跟算命有什麼不同？",
    a: <>算命通常是告訴你「會怎樣」，我們做的是幫你看清楚「現在站在哪裡、前面的路大概長什麼樣」，然後你自己決定怎麼走。<span className="em-sub">命盤</span>是<span className="em-sub">地圖</span>，不是<span className="em">判決書</span>。</>,
  },
  {
    q: "法事做了沒效怎麼辦？",
    a: "我們開始之前就會跟你說清楚能做到什麼程度。如果狀況沒有改善，可以回來聊，我們會重新評估，不會叫你一直做。",
  },
  {
    q: "費用大概是多少？",
    a: "每個人需要的不一樣，費用也不同。加 LINE 聊完狀況之後會跟你說清楚，不會聊到一半才報價，也不會有隱藏費用。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 max-w-[800px] mx-auto">
      <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3 text-center">
        faq
      </div>
      <h2 className="rv text-serif text-[clamp(24px,3.5vw,32px)] font-semibold mb-12 text-center">
        常見問題
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="rv bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left px-7 py-5 flex items-center justify-between gap-4"
              >
                <span className="text-serif text-base font-medium tracking-wide">
                  {faq.q}
                </span>
                <span
                  className={`text-sand text-lg shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-7 pb-5 text-sm md:text-base text-ink-sub leading-8">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
