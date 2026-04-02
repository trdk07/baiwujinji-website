import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import PageBackground from "@/components/PageBackground";

export const metadata = {
  title: "部落格 | 百無禁忌研究所",
};

export default function BlogPage() {
  return (
    <>
      <PageBackground src="/images/bg-about.jpg" />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1100px] mx-auto text-center">
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-3">
          blog
        </div>
        <h1 className="rv text-serif text-[clamp(28px,4vw,40px)] font-semibold mb-4">
          部落格
        </h1>
        <p className="rv text-base md:text-lg text-ink-sub max-w-[540px] mx-auto leading-8">
          關於命理、法事、人生，寫給正在找答案的你
        </p>
      </section>

      {/* Blog posts grid */}
      <section className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="scard rv relative overflow-hidden bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] no-underline text-inherit block"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/9] bg-sand/15 overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sand/40 text-sm">
                    圖片待補
                  </div>
                )}
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] text-seal bg-seal/8 px-2 py-0.5 rounded">
                    {post.categoryLabel}
                  </span>
                  <span className="text-[11px] text-ink-dim">{post.date}</span>
                </div>
                <h3 className="text-serif text-base font-semibold mb-2 tracking-wide leading-relaxed">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-sub leading-7 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
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
