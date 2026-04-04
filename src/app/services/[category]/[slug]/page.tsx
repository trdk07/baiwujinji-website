import Link from "next/link";
import PageBackground from "@/components/PageBackground";
import { notFound } from "next/navigation";
import { getAllArticlePaths, getArticle } from "@/data/service-map";
import { markdownToHtml } from "@/lib/markdown";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { LINE_URL, EMAIL, SITE_URL, SITE_NAME } from "@/lib/constants";
import { BreadcrumbJsonLd, ArticleJsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateStaticParams() {
  return getAllArticlePaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const result = getArticle(category, slug);
  if (!result) return {};
  const title = result.article.title.split("｜")[0];
  const description = result.article.title.split("｜")[1] || result.article.title;
  return {
    title,
    description,
    openGraph: {
      title: `${result.article.title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/services/${category}/${slug}`,
      ...(result.article.image && { images: [{ url: result.article.image }] }),
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const result = getArticle(category, slug);
  if (!result) notFound();

  const { category: cat, article } = result;

  // Read content from local markdown file
  let contentHtml = "";
  try {
    const filePath = path.join(process.cwd(), "src/content/services", article.contentFile);
    const markdown = fs.readFileSync(filePath, "utf-8");
    contentHtml = markdownToHtml(markdown);
  } catch {
    contentHtml = `
      <p class="rv text-base text-ink-sub leading-9 font-light mb-5">
        內容載入中。
      </p>
    `;
  }

  // Related articles from same category
  const related = cat.articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "首頁", url: SITE_URL },
        { name: cat.title, url: `${SITE_URL}/services/${cat.slug}` },
        { name: article.shortTitle, url: `${SITE_URL}/services/${cat.slug}/${article.slug}` },
      ]} />
      <ArticleJsonLd
        title={article.title}
        description={article.title.split("｜")[1] || article.title}
        url={`${SITE_URL}/services/${cat.slug}/${article.slug}`}
        image={article.image}
      />
      <PageBackground src="/images/bg-services.jpg" />
      <div className="pt-[160px] pb-16 px-6 md:px-12 max-w-[800px] mx-auto">
        {/* Breadcrumb */}
        <nav className="rv flex items-center gap-2 text-sm text-ink-dim mb-8 flex-wrap">
          <Link href="/" className="hover:text-seal transition-colors">首頁</Link>
          <span>/</span>
          <Link href={`/services/${cat.slug}`} className="hover:text-seal transition-colors">
            {cat.title}
          </Link>
          <span>/</span>
          <span className="text-ink">{article.shortTitle}</span>
        </nav>

        <h1 className="rv text-serif text-[clamp(24px,3.5vw,34px)] font-semibold leading-snug mb-5 tracking-[1px]">
          {article.title.split("｜")[0]}
        </h1>
        {article.title.includes("｜") && (
          <p className="rv text-lg text-ink-sub leading-9 max-w-[600px]">
            {article.title.split("｜")[1]}
          </p>
        )}

        {article.image && (
          <div className="rv mt-8 rounded-xl overflow-hidden">
            <img
              src={article.image}
              alt={article.title.split("｜")[0]}
              className="w-full h-auto"
            />
          </div>
        )}
      </div>

      {/* Article content */}
      <article
        className="pb-16 px-6 md:px-12 max-w-[800px] mx-auto"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* CTA */}
      <div className="rv bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-2xl p-10 mx-6 md:mx-12 max-w-[800px] lg:mx-auto mb-16">
        <h3 className="text-serif text-lg font-semibold mb-2 tracking-wide">
          有問題的話
        </h3>
        <p className="text-base text-ink-sub mb-6 leading-relaxed">
          不用想太多，加 LINE 跟我們說你的狀況就好。不收諮詢費，聊完再決定要不要做。
        </p>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-seal text-white px-6 py-2.5 rounded-md text-sm font-medium tracking-wide hover:bg-seal-hover transition-colors"
        >
          加 LINE 聊聊
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-block border border-seal text-seal px-6 py-2.5 rounded-md text-sm font-medium tracking-wide hover:bg-seal hover:text-white transition-colors ml-3"
        >
          Email 聯繫
        </a>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 px-6 md:px-12 max-w-[800px] mx-auto">
          <h3 className="rv text-serif text-xl font-semibold mb-6 tracking-wide">
            相關服務
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${cat.slug}/${r.slug}`}
                className="scard rv relative overflow-hidden bg-bg-card/70 border border-sand/18 rounded-[14px] p-6 no-underline text-inherit block"
              >
                <h4 className="text-serif text-base font-semibold mb-1.5">
                  {r.shortTitle}
                </h4>
                <p className="text-sm text-ink-sub leading-relaxed">
                  {r.title.split("｜")[1] || r.title}
                </p>
                <span className="scard-arrow absolute bottom-4 right-4 text-sm text-sand">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
