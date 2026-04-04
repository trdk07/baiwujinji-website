import Counter from "@/components/Counter";
import PageBackground from "@/components/PageBackground";

export const metadata = {
  title: "關於百無禁忌 — 人生本來就有無限可能",
  description: "天官賜福，百無禁忌。百無禁忌，諸事皆宜。人生像一場遊戲，碰到卡關的時候，認識自己、投資自己，就是破關最好的方式。",
};

export default function AboutPage() {
  return (
    <>
      <PageBackground src="/images/bg-about.jpg" />
      {/* Hero */}
      <div className="pt-[180px] pb-24 px-6 md:px-12 max-w-[800px] mx-auto">
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-4">about</div>
        <h1 className="rv text-serif text-[clamp(28px,4vw,40px)] font-semibold leading-snug mb-6 tracking-[2px]">
          百無禁忌，諸事皆宜
        </h1>
        <p className="rv text-lg text-ink-sub leading-9 max-w-[600px]">
          人生本來就像一場遊戲：有關卡、有挑戰，也有值得體驗的風景。碰到卡關的時候不代表你有問題，只是需要有人幫你看看<span className="em-sub">地圖</span>。
        </p>
      </div>

      <div className="w-10 h-0.5 bg-sand/50 mx-6 md:px-12 max-w-[800px] md:ml-12 lg:ml-auto lg:mr-auto" />

      {/* Origin */}
      <section className="py-20 px-6 md:px-12 max-w-[800px] mx-auto">
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3">/ 為什麼叫百無禁忌</div>
        <h2 className="rv text-serif text-[clamp(22px,3vw,28px)] font-semibold mb-6 leading-snug tracking-wide">
          天官賜福，百無禁忌
        </h2>
        <p className="rv text-serif text-base md:text-lg text-ink leading-9 mb-5 italic">
          「天官賜福，百無禁忌」而「百無禁忌，諸事皆宜」
        </p>
        <p className="rv text-base md:text-lg text-ink-sub leading-9 mb-5">
          世界上有很多規則，但大部分是人規定的。在真正的玄學門前，什麼才是我們應該明白的？沒有人知道，就像站在真理之門前一樣。
        </p>
        <p className="rv text-base md:text-lg text-ink-sub leading-9">
          所以取了「百無禁忌」這個名字。但凡你有任何困擾，只要你願意為自己的決定負責，都歡迎來聊聊。
        </p>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 md:px-12 max-w-[800px] mx-auto">
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3">/ 我們怎麼看這件事</div>
        <h2 className="rv text-serif text-[clamp(22px,3vw,28px)] font-semibold mb-6 leading-snug tracking-wide">
          <span className="em-sub">命盤</span>是<span className="em-sub">地圖</span>，不是<span className="em">判決書</span>
        </h2>
        <p className="rv text-base md:text-lg text-ink-sub leading-9 mb-5">
          <span className="em-sub">命盤</span>告訴你現在站在哪裡、前面的路大概長什麼樣子。但要不要走、怎麼走，還是你自己決定。我們的工作是幫你把<span className="em-sub">地圖</span>看清楚，不是替你做決定。
        </p>
        <p className="rv text-base md:text-lg text-ink-sub leading-9">
          <span className="em-sub">法事</span>也一樣。它不是萬能的，但在某些狀況下，確實能幫你把卡住的東西鬆開。某些使你駐足不前的，也許是你的限制性。<span className="em">認識自己、投資自己</span>，是破關最好的方式。
        </p>
        <div className="quote-block rv">
          <p className="text-serif text-lg text-ink leading-8">
            人生本來就有無限可能，<br />這就是「百無禁忌」的意思。
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-6 md:px-12 max-w-[800px] mx-auto">
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3">/ 我們的原則</div>
        <h2 className="rv text-serif text-[clamp(22px,3vw,28px)] font-semibold mb-6 leading-snug tracking-wide">
          三件不會做的事
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {[
            { num: "/01", title: <><span className="em">不靈性恐嚇</span></>, desc: "不會用「不做就會怎樣」來嚇你。你的人生是你的，不是拿來恐嚇的。" },
            { num: "/02", title: <><span className="em">不強迫推銷</span></>, desc: "不需要的就不做。做好該做的事，需要的時候你自然會回來。" },
            { num: "/03", title: <><span className="em">不誇大承諾</span></>, desc: "能做到什麼程度，開始之前會講清楚。超出邊界的事情不裝懂。" },
          ].map((p) => (
            <div
              key={p.num}
              className="rv bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] p-8"
            >
              <div className="text-xs text-sand tracking-[2px] mb-4">{p.num}</div>
              <h3 className="text-serif text-lg font-semibold mb-2.5 tracking-wide">{p.title}</h3>
              <p className="text-sm md:text-base text-ink-sub leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-12 max-w-[800px] mx-auto">
        <div className="flex gap-16 flex-wrap">
          <div className="rv">
            <div className="text-serif text-[42px] font-semibold leading-none">
              <Counter target={18} suffix="年" />
            </div>
            <div className="text-sm text-ink-dim mt-2 tracking-wider">服務經驗</div>
          </div>
          <div className="rv">
            <div className="text-serif text-[42px] font-semibold leading-none">
              <Counter target={500} suffix="+" />
            </div>
            <div className="text-sm text-ink-dim mt-2 tracking-wider">服務案例</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="rv text-center py-18 px-6 md:px-12 bg-bg-card/70 backdrop-blur-[8px] rounded-2xl border border-sand/15 mx-6 md:mx-12 mb-24 max-w-[800px] lg:mx-auto">
        <h2 className="text-serif text-2xl font-semibold mb-3 tracking-[2px]">想聊就聊</h2>
        <p className="text-base md:text-lg text-ink-sub mb-8 leading-8">
          不用準備什麼，也不用先想好問題。<br />加 LINE 跟我們說你的狀況就好。
        </p>
        <a
          href="https://lin.ee/tiEYURo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-seal text-white px-8 py-3 rounded-md text-[15px] font-medium tracking-wide hover:bg-seal-hover hover:-translate-y-0.5 transition-all"
        >
          加 LINE 諮詢
        </a>
      </div>
    </>
  );
}
