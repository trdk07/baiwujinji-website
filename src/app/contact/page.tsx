"use client";

import { useState } from "react";
import PageBackground from "@/components/PageBackground";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const subject = encodeURIComponent(`來自網站的訊息 — ${name || "訪客"}`);
    const body = encodeURIComponent(
      `姓名：${name}\n信箱：${email}\n\n${message}`
    );
    window.location.href = `mailto:fortunetell99@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageBackground src="/images/bg-about.jpg" />

      <div className="pt-[180px] pb-24 px-6 md:px-12 max-w-[600px] mx-auto">
        <div className="rv text-xs text-ink-dim tracking-[5px] uppercase mb-4">
          contact
        </div>
        <h1 className="rv text-serif text-[clamp(28px,4vw,40px)] font-semibold leading-snug mb-4 tracking-[2px]">
          聯絡我們
        </h1>
        <p className="rv text-base text-ink-sub leading-8 mb-12">
          有任何問題都歡迎來信，或直接加 LINE 聊也可以。
        </p>

        <div className="rv space-y-5">
          <div>
            <label className="block text-sm text-ink-dim mb-1.5 tracking-wide">
              姓名
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="你的名字"
              className="w-full bg-bg-card/70 border border-sand/25 rounded-lg px-4 py-3 text-base text-ink placeholder:text-ink-dim/50 focus:outline-none focus:border-seal/40 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-ink-dim mb-1.5 tracking-wide">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-bg-card/70 border border-sand/25 rounded-lg px-4 py-3 text-base text-ink placeholder:text-ink-dim/50 focus:outline-none focus:border-seal/40 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-ink-dim mb-1.5 tracking-wide">
              內容
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="想跟我們聊什麼？"
              rows={5}
              className="w-full bg-bg-card/70 border border-sand/25 rounded-lg px-4 py-3 text-base text-ink placeholder:text-ink-dim/50 focus:outline-none focus:border-seal/40 transition-colors resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-seal text-white py-3 rounded-md text-[15px] font-medium tracking-wide hover:bg-seal-hover hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(194,59,59,0.2)] transition-all"
          >
            開啟 Email 寄出
          </button>

          <p className="text-xs text-ink-dim text-center leading-6">
            點擊後會開啟你的 Email 軟體，內容會自動帶入。
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-12">
          <div className="flex-1 h-px bg-sand/25" />
          <span className="text-xs text-ink-dim tracking-wide">或</span>
          <div className="flex-1 h-px bg-sand/25" />
        </div>

        {/* LINE CTA */}
        <div className="rv text-center">
          <p className="text-base text-ink-sub mb-5 leading-8">
            不想寄信？直接加 LINE 聊更快。
          </p>
          <a
            href="https://lin.ee/tiEYURo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-sand text-ink-sub px-8 py-3 rounded-md text-[15px] tracking-wide hover:border-ink-dim hover:text-ink transition-all"
          >
            加 LINE 諮詢
          </a>
        </div>
      </div>
    </>
  );
}
