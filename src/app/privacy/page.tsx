import PageBackground from "@/components/PageBackground";
import { LINE_URL } from "@/lib/constants";

export const metadata = {
  title: "隱私權政策",
};

export default function PrivacyPage() {
  return (
    <>
      <PageBackground src="/images/bg-about.webp" position="center 40%" mobilePosition="40% center" />

      <div className="pt-[180px] pb-24 px-6 md:px-12 max-w-[800px] mx-auto">
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-4">privacy policy</div>
        <h1 className="rv text-serif text-[clamp(28px,4vw,40px)] font-semibold leading-snug mb-6 tracking-[2px]">
          隱私權政策
        </h1>
        <p className="rv text-sm text-ink-dim mb-12">
          最後更新日期：2026 年 4 月
        </p>

        <div className="space-y-10">
          <section className="rv">
            <h2 className="text-serif text-xl font-semibold mb-3 tracking-wide">資料蒐集</h2>
            <p className="text-base text-ink-sub leading-9">
              當您透過 LINE 與我們聯繫時，我們可能會蒐集您主動提供的姓名、聯絡方式及諮詢內容。我們不會在網站上使用表單蒐集您的個人資料，也不會主動要求您提供非必要的資訊。
            </p>
          </section>

          <section className="rv">
            <h2 className="text-serif text-xl font-semibold mb-3 tracking-wide">資料用途</h2>
            <p className="text-base text-ink-sub leading-9">
              您提供的資料僅用於諮詢服務與法事處理，不會用於其他商業用途。我們不會將您的個人資料提供給第三方。
            </p>
          </section>

          <section className="rv">
            <h2 className="text-serif text-xl font-semibold mb-3 tracking-wide">資料保護</h2>
            <p className="text-base text-ink-sub leading-9">
              我們會採取合理的安全措施保護您的個人資料，防止未經授權的存取、使用或洩露。諮詢內容屬於個人隱私，未經您的同意不會公開。
            </p>
          </section>

          <section className="rv">
            <h2 className="text-serif text-xl font-semibold mb-3 tracking-wide">Cookie 使用</h2>
            <p className="text-base text-ink-sub leading-9">
              本網站可能使用 Cookie 及類似技術來改善瀏覽體驗與分析網站流量。您可以透過瀏覽器設定選擇停用 Cookie。
            </p>
          </section>

          <section className="rv">
            <h2 className="text-serif text-xl font-semibold mb-3 tracking-wide">聯絡我們</h2>
            <p className="text-base text-ink-sub leading-9">
              如果您對隱私權政策有任何疑問，歡迎透過{" "}
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-seal hover:underline"
              >
                LINE
              </a>
              {" "}與我們聯繫。
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
