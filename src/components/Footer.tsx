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
              天官賜福，<span className="text-[#E05555] font-medium">百無禁忌</span>，諸事皆宜。<br/>
              人生本來就有<span className="text-[#D4956B] font-medium">無限可能</span>。
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
              <Link href="/privacy" className="text-sm text-[#B8B0A6] hover:text-white transition-colors">隱私權政策</Link>
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

        {/* Status bar */}
        <div className="mt-14 pt-6 border-t border-[#3D3D3D] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-[11px] text-[#8A8279] tracking-[2px] mb-1.5">服務類型</div>
            <div className="text-sm font-medium">命理諮詢 & 法事服務</div>
          </div>
          <div>
            <div className="text-[11px] text-[#8A8279] tracking-[2px] mb-1.5">服務地區</div>
            <div className="text-sm font-medium">全球人類・線上皆可</div>
          </div>
          <div>
            <div className="text-[11px] text-[#8A8279] tracking-[2px] mb-1.5">諮詢方式</div>
            <div className="text-sm font-medium">LINE 預約制</div>
          </div>
          <div>
            <div className="text-[11px] text-[#8A8279] tracking-[2px] mb-1.5">目前狀態</div>
            <div className="text-sm font-medium flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-[status-pulse_2s_ease-in-out_infinite]" />
              接案中
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-[#3D3D3D] flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-[11px] text-[#8A8279] tracking-wide">
            © {new Date().getFullYear()} 百無禁忌研究所 BAI WU JIN JI
          </div>
          <div className="flex gap-5">
            <a
              href="https://lin.ee/tiEYURo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#8A8279] hover:text-[#E05555] transition-colors tracking-wide"
            >
              LINE
            </a>
            <a
              href="https://www.threads.com/@fate_future"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#8A8279] hover:text-[#E05555] transition-colors tracking-wide"
            >
              Threads
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
