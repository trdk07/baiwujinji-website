import FAQ from "@/components/FAQ";
import PageBackground from "@/components/PageBackground";

export const metadata = {
  title: "常見問題 | 百無禁忌研究所",
};

export default function FAQPage() {
  return (
    <>
      <PageBackground src="/images/bg-about.jpg" />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1100px] mx-auto text-center">
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3">
          faq
        </div>
        <h1 className="rv text-serif text-[clamp(28px,4vw,40px)] font-semibold mb-4">
          常見問題
        </h1>
        <p className="rv text-base md:text-lg text-ink-sub max-w-[540px] mx-auto leading-8">
          關於我們的服務，這裡整理了最常被問到的問題
        </p>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <div className="rv text-center py-18 px-6 md:px-12 bg-bg-card/70 backdrop-blur-[8px] rounded-2xl border border-sand/15 mx-6 md:mx-12 mb-24 max-w-[1100px] lg:mx-auto">
        <h2 className="text-serif text-2xl font-semibold mb-3 tracking-[2px]">
          想聊就聊
        </h2>
        <p className="text-base md:text-lg text-ink-sub mb-8 leading-8">
          不用準備什麼，也不用先想好問題。
          <br />
          加 LINE 跟我們說你的狀況就好。
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="https://lin.ee/tiEYURo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-seal text-white px-8 py-3 rounded-md text-[15px] font-medium tracking-wide hover:bg-seal-hover hover:-translate-y-0.5 transition-all"
          >
            加 LINE 聊聊
          </a>
          <a
            href="mailto:fortunetell99@gmail.com"
            className="inline-block border border-seal text-seal px-8 py-3 rounded-md text-[15px] font-medium tracking-wide hover:bg-seal hover:text-white hover:-translate-y-0.5 transition-all"
          >
            Email 聯繫
          </a>
        </div>
      </div>
    </>
  );
}
