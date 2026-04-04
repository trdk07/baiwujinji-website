import Link from "next/link";
import PageBackground from "@/components/PageBackground";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { markdownToHtml } from "@/lib/markdown";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { LINE_URL, EMAIL, SITE_URL, SITE_NAME } from "@/lib/constants";
import { BreadcrumbJsonLd, ArticleJsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts
    .filter((p) => p.contentFile)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      ...(post.image && { images: [{ url: post.image }] }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post || !post.contentFile) notFound();

  let contentHtml = "";
  try {
    const filePath = path.join(process.cwd(), "src/content/blog", post.contentFile);
    const markdown = fs.readFileSync(filePath, "utf-8");
    contentHtml = markdownToHtml(markdown);
  } catch {
    contentHtml = `<p class="text-base text-ink-sub leading-9">內容載入中。</p>`;
  }

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "首頁", url: SITE_URL },
        { name: "部落格", url: `${SITE_URL}/blog` },
        { name: post.title.split("｜")[0], url: `${SITE_URL}/blog/${post.slug}` },
      ]} />
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={`${SITE_URL}/blog/${post.slug}`}
        datePublished={post.date}
        image={post.image}
      />
      <PageBackground src="/images/bg-about.webp" />
      <div className="pt-[160px] pb-16 px-6 md:px-12 max-w-[800px] mx-auto">
        <nav className="rv flex items-center gap-2 text-sm text-ink-dim mb-8 flex-wrap">
          <Link href="/" className="hover:text-seal transition-colors">首頁</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-seal transition-colors">部落格</Link>
          <span>/</span>
          <span className="text-ink">{post.title.split("｜")[0]}</span>
        </nav>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-[11px] text-seal bg-seal/8 px-2 py-0.5 rounded">
            {post.categoryLabel}
          </span>
          <span className="text-[11px] text-ink-dim">{post.date}</span>
        </div>

        <h1 className="rv text-serif text-[clamp(24px,3.5vw,34px)] font-semibold leading-snug mb-5 tracking-[1px]">
          {post.title.split("｜")[0]}
        </h1>
        {post.title.includes("｜") && (
          <p className="rv text-lg text-ink-sub leading-9 max-w-[600px]">
            {post.title.split("｜")[1]}
          </p>
        )}

        {post.image && (
          <div className="rv mt-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title.split("｜")[0]}
              className="w-full h-auto"
            />
          </div>
        )}
      </div>

      <article
        className="pb-16 px-6 md:px-12 max-w-[800px] mx-auto"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <div className="rv bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-2xl p-10 mx-6 md:mx-12 max-w-[800px] lg:mx-auto mb-16">
        <h3 className="text-serif text-lg font-semibold mb-2 tracking-wide">
          想聊就聊
        </h3>
        <p className="text-base text-ink-sub mb-6 leading-relaxed">
          不用準備什麼，也不用先想好問題。加 LINE 跟我們說你的狀況就好。
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

      {related.length > 0 && (
        <section className="py-16 px-6 md:px-12 max-w-[800px] mx-auto">
          <h3 className="rv text-serif text-xl font-semibold mb-6 tracking-wide">
            其他文章
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="scard rv relative overflow-hidden bg-bg-card/70 border border-sand/18 rounded-[14px] p-6 no-underline text-inherit block"
              >
                <span className="text-[11px] text-seal bg-seal/8 px-2 py-0.5 rounded">
                  {r.categoryLabel}
                </span>
                <h4 className="text-serif text-base font-semibold mt-3 mb-1.5">
                  {r.title.split("｜")[0]}
                </h4>
                <p className="text-sm text-ink-sub leading-relaxed line-clamp-2">
                  {r.excerpt}
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
