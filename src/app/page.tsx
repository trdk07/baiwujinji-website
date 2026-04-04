import Link from "next/link";
import { serviceCategories, getCategoryBySlug } from "@/data/service-map";
import { getFeaturedCases } from "@/data/case-studies";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import EasterEgg from "@/components/EasterEgg";
import CaseCard from "@/components/CaseCard";
import PageBackground from "@/components/PageBackground";
import { LINE_URL, EMAIL } from "@/lib/constants";

// 首頁服務預覽順序：求財開路 C 位優先
const homeFeaturedSlugs = ["zhaocai", "mingli", "ganqing"];
const homeFeaturedCategories = homeFeaturedSlugs
  .map((s) => getCategoryBySlug(s))
  .filter(Boolean) as typeof serviceCategories;

export default function Home() {
  return (
    <>
      <PageBackground parallax />
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center relative">
        <div className="relative z-1 px-6">
          <EasterEgg>
            <img
              src="/images/logo-v.png"
              alt="百無禁忌"
              className="w-[180px] mx-auto mb-11 drop-shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:scale-103 transition-transform"
              title="點我試試看"
            />
          </EasterEgg>
          <h1 className="text-serif text-[clamp(24px,3.5vw,36px)] font-semibold text-ink tracking-[6px] mb-5 leading-relaxed">
            人生卡住的時候，<span className="em">找對人聊聊</span>
          </h1>
          <p className="text-lg text-ink-sub max-w-[480px] mx-auto mb-4 leading-9 tracking-wider">
            <span className="em-sub">求財開路</span> ／ 人生顧問 ／ 感情修復
          </p>
          <p className="text-base text-ink-dim max-w-[480px] mx-auto mb-8 leading-8">
            錢留不住、財路不順？也許不是你不夠努力，是需要有人幫你打通。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/services/zhaocai"
              className="bg-seal text-white px-8 py-3 rounded-md text-[15px] font-medium tracking-wide hover:bg-seal-hover hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(194,59,59,0.2)] transition-all"
            >
              了解求財服務
            </Link>
            <a
              href="#services"
              className="border border-sand text-ink-sub px-8 py-3 rounded-md text-[15px] font-medium tracking-wide hover:border-ink-dim hover:text-ink transition-all"
            >
              所有服務
            </a>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* About preview */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div>
            <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3">
              about
            </div>
            <h2 className="rv text-serif text-[clamp(24px,3.5vw,32px)] font-semibold leading-snug mb-4">
              為什麼叫
              <br />
              百無禁忌？
            </h2>
            <div className="flex gap-14 mt-11 flex-wrap">
              <div className="rv">
                <div className="text-serif text-[42px] font-semibold leading-none">
                  <Counter target={500} suffix="+" />
                </div>
                <div className="text-sm text-ink-dim mt-2 tracking-wider">
                  服務案例
                </div>
              </div>
              <div className="rv">
                <div className="text-serif text-[42px] font-semibold leading-none">
                  <Counter target={18} suffix="年" />
                </div>
                <div className="text-sm text-ink-dim mt-2 tracking-wider">
                  服務經驗
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="rv text-serif text-base md:text-lg text-ink leading-9 mb-5 italic">
              「天官賜福，百無禁忌」而「百無禁忌，諸事皆宜」
            </p>
            <p className="rv text-base md:text-lg text-ink-sub leading-9 mb-4">
              人生本來就像一場遊戲：有關卡、有挑戰，也有值得體驗的風景。碰到<span className="em-sub">卡關</span>的時候不代表你有問題，只是需要有人幫你看看<span className="em-sub">地圖</span>、找到下一步怎麼走。在玄學門前，沒有什麼不能聊的，某些使你駐足不前的，也許是你的限制性。<span className="em">認識自己、投資自己</span>，是破關最好的方式。
            </p>
            <p className="rv text-sm md:text-base text-ink-dim pt-3.5 border-t border-sand/25 mb-6">
              人生本來就有<span className="em-sub">無限可能</span>，這就是「百無禁忌」的意思。
            </p>
            <Link
              href="/about"
              className="rv text-sm text-seal hover:text-seal-hover transition-colors tracking-wide"
            >
              了解更多 →
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section id="services" className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto">
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3">
          services
        </div>
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <h2 className="rv text-serif text-[clamp(24px,3.5vw,32px)] font-semibold mb-4">
              可以幫你的事
            </h2>
            <p className="rv text-base md:text-lg text-ink-sub max-w-[540px] leading-8">
              不確定要什麼也沒關係，先理解都好
            </p>
          </div>
          <Link
            href="/services"
            className="rv text-sm text-seal hover:text-seal-hover transition-colors tracking-wide"
          >
            查看所有服務 →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {homeFeaturedCategories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/services/${cat.slug}`}
              className={`scard rv relative overflow-hidden bg-bg-card/70 backdrop-blur-[8px] border rounded-[14px] p-9 no-underline text-inherit ${
                i === 0
                  ? "border-seal/25 ring-1 ring-seal/10"
                  : "border-sand/18"
              }`}
            >
              {i === 0 && (
                <span className="absolute top-0 right-0 text-[10px] text-white bg-seal px-3 py-1 rounded-bl-lg tracking-wider font-medium">
                  熱門
                </span>
              )}
              <div className="text-[11px] text-sand tracking-[2px] mb-5">
                /{String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-serif text-[19px] font-semibold mb-2.5 tracking-wide">
                {cat.title}
              </h3>
              <p className="text-sm md:text-base text-ink-sub leading-relaxed">
                {cat.tagline}
              </p>
              <span className="text-sm text-ink-dim mt-3 block">{cat.articles.length} 項服務</span>
              <span className="scard-arrow absolute bottom-6 right-6 text-base text-sand">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Cases preview */}
      <section className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto">
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3">
          cases
        </div>
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <h2 className="rv text-serif text-[clamp(24px,3.5vw,32px)] font-semibold mb-4">
              真實案例
            </h2>
            <p className="rv text-base md:text-lg text-ink-sub max-w-[540px] leading-8">
              每一段都是真的，沒有誇大、沒有包裝
            </p>
          </div>
          <Link
            href="/cases"
            className="rv text-sm text-seal hover:text-seal-hover transition-colors tracking-wide"
          >
            看全部案例 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {getFeaturedCases().map((c) => (
            <CaseCard key={c.id} c={c} />
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
