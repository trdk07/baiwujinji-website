import Link from "next/link";
import { serviceCategories } from "@/data/service-map";
import HowItWorks from "@/components/HowItWorks";
import PageBackground from "@/components/PageBackground";

export const metadata = {
  title: "服務項目 | 百無禁忌研究所",
};

export default function ServicesPage() {
  return (
    <>
      <PageBackground src="/images/bg-services.jpg" />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1100px] mx-auto text-center">
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3">
          services
        </div>
        <h1 className="rv text-serif text-[clamp(28px,4vw,40px)] font-semibold mb-4">
          可以幫你的事
        </h1>
        <p className="rv text-base md:text-lg text-ink-sub max-w-[540px] mx-auto leading-8">
          不確定要什麼也沒關係，先理解都好
        </p>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* All service categories */}
      <section className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/services/${cat.slug}`}
              className="scard rv relative overflow-hidden bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] p-10 no-underline text-inherit"
            >
              <div className="text-[11px] text-sand tracking-[2px] mb-5">
                /{String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-serif text-[22px] font-semibold mb-3 tracking-wide">
                {cat.title}
              </h3>
              <p className="text-sm md:text-base text-ink-sub leading-relaxed mb-3">
                {cat.tagline}
              </p>
              <span className="text-sm text-ink-dim block">
                {cat.articles.length} 項服務
              </span>
              <span className="scard-arrow absolute bottom-7 right-7 text-base text-sand">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

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
        <a
          href="https://lin.ee/tiEYURo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-seal text-white px-8 py-3 rounded-md text-[15px] font-medium tracking-wide hover:bg-seal-hover hover:-translate-y-0.5 transition-all"
        >
          加 LINE 聊聊
        </a>
      </div>
    </>
  );
}
