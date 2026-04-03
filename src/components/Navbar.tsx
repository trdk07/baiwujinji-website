"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 80;
      setScrolled((prev) => (prev !== shouldBeScrolled ? shouldBeScrolled : prev));
    };
    // Inner pages start with visible nav
    if (!isHome) setScrolled(true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 px-6 md:px-12 py-4 flex items-center justify-between transition-[background-color,border-color,backdrop-filter] duration-400 ${
        scrolled
          ? "bg-bg/88 backdrop-blur-[14px] border-b border-sand/25"
          : "bg-transparent"
      }`}
    >
      {/* Left: Logo + Status */}
      <div className="flex items-center gap-3.5">
        <Link href="/">
          <img
            src="/images/logo-h.png"
            alt="百無禁忌"
            className={`h-10 transition-opacity duration-400 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>
        <div
          className={`flex items-center gap-1.5 text-xs text-ink-dim tracking-wide transition-opacity duration-400 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="w-[7px] h-[7px] bg-[#5ab883] rounded-full animate-[status-pulse_2s_infinite]" />
          目前可預約
        </div>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/"
          className={`text-[15px] tracking-wide transition-colors ${
            pathname === "/" ? "text-ink font-medium" : "text-ink-sub hover:text-ink"
          }`}
        >
          首頁
        </Link>
        <Link
          href="/about"
          className={`text-[15px] tracking-wide transition-colors ${
            pathname === "/about" ? "text-ink font-medium" : "text-ink-sub hover:text-ink"
          }`}
        >
          關於
        </Link>
        <Link
          href="/services"
          className={`text-[15px] tracking-wide transition-colors ${
            pathname.startsWith("/services") ? "text-ink font-medium" : "text-ink-sub hover:text-ink"
          }`}
        >
          服務
        </Link>
        <Link
          href="/cases"
          className={`text-[15px] tracking-wide transition-colors ${
            pathname === "/cases" ? "text-ink font-medium" : "text-ink-sub hover:text-ink"
          }`}
        >
          案例
        </Link>
        <Link
          href="/blog"
          className={`text-[15px] tracking-wide transition-colors ${
            pathname.startsWith("/blog") ? "text-ink font-medium" : "text-ink-sub hover:text-ink"
          }`}
        >
          部落格
        </Link>
        <a
          href="https://lin.ee/tiEYURo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-seal text-white px-5 py-2 rounded-md text-[13px] font-medium tracking-wide hover:bg-seal-hover transition-colors"
        >
          LINE 諮詢
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-ink"
        aria-label="選單"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg/95 backdrop-blur-[14px] border-b border-sand/25 md:hidden">
          <div className="px-6 py-5 space-y-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block text-ink-sub hover:text-ink">首頁</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-ink-sub hover:text-ink">關於</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="block text-ink-sub hover:text-ink">服務</Link>
            <Link href="/cases" onClick={() => setMenuOpen(false)} className="block text-ink-sub hover:text-ink">案例</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="block text-ink-sub hover:text-ink">部落格</Link>
            <a
              href="https://lin.ee/tiEYURo"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-seal text-white px-5 py-2.5 rounded-md text-sm font-medium text-center"
            >
              LINE 諮詢
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
