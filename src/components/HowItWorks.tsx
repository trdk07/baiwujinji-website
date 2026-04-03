import type { ReactNode } from "react";

const steps: { num: string; title: string; desc: ReactNode }[] = [
  {
    num: "01",
    title: "加 LINE 說你的狀況",
    desc: <>不用準備什麼，直接跟我們說你碰到的問題就好。可以先聊<span className="em-sub">三十分鐘</span>，聊完再決定下一步。</>,
  },
  {
    num: "02",
    title: "幫你看清楚現在的位置",
    desc: "透過命盤或溝通了解你的狀態，判斷你需要的是諮詢、法事、還是兩個都要。",
  },
  {
    num: "03",
    title: "開始處理，持續追蹤",
    desc: "確認方向之後就開始。過程中有任何變化都可以回來聊，不會做完就消失。",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto">
      <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3">
        how it works
      </div>
      <h2 className="rv text-serif text-[clamp(24px,3.5vw,32px)] font-semibold mb-4">
        怎麼開始？
      </h2>
      <p className="rv text-base md:text-lg text-ink-sub max-w-[540px] leading-8 mb-12">
        三步驟，<span className="em-sub">不複雜</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {steps.map((step, i) => (
          <div key={step.num} className="rv relative">
            {/* Connector line (desktop only) */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[calc(100%+2px)] w-[calc(100%-60px)] h-px bg-sand/30 translate-x-[30px]" />
            )}
            <div className="bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] p-8 h-full">
              <div className="text-serif text-[28px] font-semibold text-seal/30 mb-4">
                {step.num}
              </div>
              <h3 className="text-serif text-lg font-semibold mb-2.5 tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-ink-sub leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
