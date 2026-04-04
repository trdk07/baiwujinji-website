import type { Metadata } from "next";
import CaseFilter from "@/components/CaseFilter";
import PageBackground from "@/components/PageBackground";
import { LINE_URL, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "真實案例",
  description: "補財庫、感情挽回、命理諮詢的真實案例。每一段都是真實發生的，沒有誇大、沒有包裝，有些是客戶自己說的。",
};

export default function CasesPage() {
  return (
    <>
      <PageBackground src="/images/bg-cases.webp" position="center 60%" mobilePosition="center 50%" />
      <div className="pt-[160px] pb-16 px-6 md:px-12 max-w-[1100px] mx-auto">
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3">cases</div>
        <h1 className="rv text-serif text-[clamp(28px,4vw,38px)] font-semibold leading-snug mb-5 tracking-[2px]">
          真實案例
        </h1>
        <p className="rv text-lg text-ink-sub leading-9 max-w-[600px]">
          每一段都是真實發生的。沒有誇大、沒有包裝，有些是客戶自己說的，有些是我們整理的故事。
        </p>
      </div>

      <section className="pb-24 px-6 md:px-12 max-w-[1100px] mx-auto">
        <CaseFilter />
      </section>

      {/* Disclaimer */}
      <div className="px-6 md:px-12 max-w-[1100px] mx-auto pb-8">
        <p className="rv text-xs text-ink-dim leading-6 max-w-[600px]">
          ＊ 以上案例皆經客戶同意後整理刊載，部分細節已調整以保護隱私。每個人的狀況不同，效果因人而異。
        </p>
      </div>

      {/* CTA */}
      <div className="rv text-center py-16 px-6 md:px-12 bg-bg-card/70 backdrop-blur-[8px] rounded-2xl border border-sand/15 mx-6 md:mx-12 mb-24 max-w-[1100px] lg:mx-auto">
        <h2 className="text-serif text-2xl font-semibold mb-3 tracking-[2px]">
          你的故事，也可以不一樣
        </h2>
        <p className="text-base md:text-lg text-ink-sub mb-8 leading-8">
          不用準備什麼，加 LINE 跟我們說你的狀況就好。
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-seal text-white px-8 py-3 rounded-md text-[15px] font-medium tracking-wide hover:bg-seal-hover transition-all"
          >
            加 LINE 聊聊
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block border border-seal text-seal px-8 py-3 rounded-md text-[15px] font-medium tracking-wide hover:bg-seal hover:text-white transition-all"
          >
            Email 聯繫
          </a>
        </div>
      </div>
    </>
  );
}
