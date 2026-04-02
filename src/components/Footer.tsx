import Link from "next/link";
import { serviceCategories } from "@/data/service-map";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-ink text-[#F5F0EB]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-serif text-xl mb-3 tracking-wide">百無禁忌研究所</h3>
            <p className="text-sm text-[#B8B0A6] max-w-[280px] leading-7 mb-6">
              天官賜福，百無禁忌，諸事皆宜。<br/>
              人生本來就有無限可能。
            </p>
            <a
              href="https://lin.ee/tiEYURo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-seal text-white px-5 py-2 rounded-md text-[13px] font-medium tracking-wide hover:bg-seal-hover transition-colors"
            >
              加 LINE 聊聊
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs text-[#8A8279] tracking-[3px] uppercase mb-4">導覽</div>
            <nav className="flex flex-col gap-2.5">
              <Link href="/" className="text-sm text-[#B8B0A6] hover:text-white transition-colors">首頁</Link>
              <Link href="/about" className="text-sm text-[#B8B0A6] hover:text-white transition-colors">關於百無禁忌</Link>
              <Link href="/cases" className="text-sm text-[#B8B0A6] hover:text-white transition-colors">真實案例</Link>
              <Link href="/blog" className="text-sm text-[#B8B0A6] hover:text-white transition-colors">部落格</Link>
              <Link href="/faq" className="text-sm text-[#B8B0A6] hover:text-white transition-colors">常見問題</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs text-[#8A8279] tracking-[3px] uppercase mb-4">服務項目</div>
            <nav className="flex flex-col gap-2.5">
              {serviceCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/services/${cat.slug}`}
                  className="text-sm text-[#B8B0A6] hover:text-white transition-colors"
                >
                  {cat.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-5 border-t border-[#3D3D3D] flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-[11px] text-[#5C5549] tracking-wide">
            © {new Date().getFullYear()} 百無禁忌研究所 BAI WU JIN JI
          </div>
          <div className="flex gap-5">
            <a
              href="https://lin.ee/tiEYURo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#5C5549] hover:text-[#B8B0A6] transition-colors tracking-wide"
            >
              LINE
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#5C5549] hover:text-[#B8B0A6] transition-colors tracking-wide"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
