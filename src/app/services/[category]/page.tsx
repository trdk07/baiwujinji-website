import Link from "next/link";
import PageBackground from "@/components/PageBackground";
import { serviceCategories, getCategoryBySlug, crossRecommendations, crossCategoryBadges } from "@/data/service-map";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return serviceCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.title} | 百無禁忌研究所`,
    description: cat.taglineText,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  return (
    <>
      <PageBackground src="/images/bg-services.jpg" />
      <div className="pt-[160px] pb-16 px-6 md:px-12 max-w-[1100px] mx-auto">
        {/* Breadcrumb */}
        <nav className="rv flex items-center gap-2 text-sm text-ink-dim mb-8">
          <Link href="/" className="hover:text-seal transition-colors">首頁</Link>
          <span>/</span>
          <span className="text-ink">{cat.title}</span>
        </nav>

        <h1 className="rv text-serif text-[clamp(28px,4vw,38px)] font-semibold leading-snug mb-5 tracking-[2px]">
          {cat.title}
        </h1>
        <p className="rv text-lg text-ink-sub leading-9 max-w-[600px]">
          {cat.tagline}
        </p>
      </div>

      {/* Article cards */}
      <section className="pb-24 px-6 md:px-12 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cat.articles.map((article, i) => {
            const badgeKey = `${cat.slug}/${article.slug}`;
            const badge = crossCategoryBadges[badgeKey];
            return (
              <Link
                key={article.slug}
                href={`/services/${cat.slug}/${article.slug}`}
                className="scard rv relative overflow-hidden bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] p-8 no-underline text-inherit block"
              >
                <div className="text-[11px] text-sand tracking-[2px] mb-4">
                  /{String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-serif text-lg font-semibold mb-2 tracking-wide">
                  {article.shortTitle}
                </h3>
                <p className="text-sm md:text-base text-ink-sub leading-relaxed line-clamp-2">
                  {article.title.split("｜")[1] || article.title}
                </p>
                {badge && (
                  <span className="inline-block mt-3 text-xs text-seal bg-seal/8 px-2.5 py-1 rounded-md">
                    {badge}
                  </span>
                )}
                <span className="scard-arrow absolute bottom-6 right-6 text-base text-sand">→</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Cross-category recommendations */}
      {crossRecommendations[category] && crossRecommendations[category].length > 0 && (
        <section className="pb-16 px-6 md:px-12 max-w-[1100px] mx-auto">
          <h3 className="rv text-serif text-xl font-semibold mb-5 tracking-wide">你可能也需要</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {crossRecommendations[category].map((rec) => (
              <Link
                key={rec.slug}
                href={`/services/${rec.category}/${rec.slug}`}
                className="scard rv relative overflow-hidden bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] p-8 no-underline text-inherit block"
              >
                <h4 className="text-serif text-lg font-semibold mb-2 tracking-wide">{rec.title}</h4>
                <p className="text-sm md:text-base text-ink-sub leading-relaxed">{rec.note}</p>
                <span className="scard-arrow absolute bottom-6 right-6 text-base text-sand">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="rv text-center py-16 px-6 md:px-12 bg-bg-card/70 backdrop-blur-[8px] rounded-2xl border border-sand/15 mx-6 md:mx-12 mb-24 max-w-[1100px] lg:mx-auto">
        <h2 className="text-serif text-2xl font-semibold mb-3 tracking-[2px]">
          不確定需要哪一項？
        </h2>
        <p className="text-base md:text-lg text-ink-sub mb-8 leading-8">
          加 LINE 跟我們說你的狀況，我們幫你判斷。
        </p>
        <a
          href="https://lin.ee/tiEYURo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-seal text-white px-8 py-3 rounded-md text-[15px] font-medium tracking-wide hover:bg-seal-hover transition-all"
        >
          加 LINE 聊聊
        </a>
      </div>
    </>
  );
}
