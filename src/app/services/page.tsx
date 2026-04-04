import Link from "next/link";
import { serviceCategories } from "@/data/service-map";
import HowItWorks from "@/components/HowItWorks";
import PageBackground from "@/components/PageBackground";
import { LINE_URL, EMAIL } from "@/lib/constants";

export const metadata = {
  title: "服務項目",
  description: "命理諮詢、補財庫、招財法事、感情挽回、轉運法事。不確定需要什麼也沒關係，加 LINE 先聊聊你的狀況。",
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
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3">
          services
        </div>
        <h2 className="rv text-serif text-[clamp(24px,3.5vw,32px)] font-semibold mb-4">
          服務項目
        </h2>
        <p className="rv text-base md:text-lg text-ink-sub max-w-[540px] leading-8 mb-12">
          看看哪個跟你的狀況最像
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/services/${cat.slug}`}
              className={`scard rv relative overflow-hidden bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] p-10 no-underline text-inherit flex flex-col${cat.featured ? " scard-featured" : ""}`}
              style={{ "--card-color": cat.color } as React.CSSProperties}
            >
              <div className="flex items-center gap-3 mb-5 relative z-[1]">
                <span className="text-[15px] font-bold tracking-[2px]" style={{ color: cat.color }}>
                  /{String(i + 1).padStart(2, "0")}
                </span>
                {cat.badge && (
                  <span className="scard-badge" style={{ "--badge-color": cat.color } as React.CSSProperties}>
                    {cat.badge}
                  </span>
                )}
              </div>
              <h3 className="scard-title text-serif text-[22px] font-semibold mb-3 tracking-wide relative z-[1]">
                {cat.title}
              </h3>
              <p className="scard-tagline text-sm md:text-base text-ink-sub leading-relaxed mb-3 flex-1 relative z-[1]">
                {cat.tagline}
              </p>
              <span className="text-sm text-ink-dim block mb-6 relative z-[1]">
                {cat.articles.length} 項服務
              </span>
              <span className="scard-arrow absolute bottom-7 right-7 z-[1]">
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
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-seal text-white px-8 py-3 rounded-md text-[15px] font-medium tracking-wide hover:bg-seal-hover hover:-translate-y-0.5 transition-all"
          >
            加 LINE 聊聊
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block border border-seal text-seal px-8 py-3 rounded-md text-[15px] font-medium tracking-wide hover:bg-seal hover:text-white hover:-translate-y-0.5 transition-all"
          >
            Email 聯繫
          </a>
        </div>
      </div>
    </>
  );
}
