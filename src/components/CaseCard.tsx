"use client";

import type { CaseStudy } from "@/data/case-studies";

function FormatBadge({ format }: { format: CaseStudy["format"] }) {
  const labels = { quote: "客戶回饋", screenshot: "LINE 對話", story: "真實故事" };
  const colors = {
    quote: "bg-seal/8 text-seal",
    screenshot: "bg-[#06C755]/8 text-[#06C755]",
    story: "bg-ink-dim/10 text-ink-dim",
  };
  return (
    <span className={`inline-block text-[11px] px-2 py-0.5 rounded ${colors[format]}`}>
      {labels[format]}
    </span>
  );
}

export function QuoteCard({ c }: { c: CaseStudy }) {
  return (
    <div className="rv bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] p-7 md:p-8 flex flex-col h-full">
      <div className="flex items-center gap-2.5 mb-5">
        <FormatBadge format="quote" />
        <span className="text-[11px] text-sand tracking-[1px]">{c.categoryLabel}</span>
      </div>
      <blockquote className="text-base text-ink leading-8 mb-5 flex-1">
        「{c.content}」
      </blockquote>
      {c.followUp && (
        <p className="text-sm text-ink-sub leading-7 mb-4 pl-3 border-l-2 border-seal/20">
          {c.followUp}
        </p>
      )}
      <div className="mt-auto pt-4 border-t border-sand/15">
        <div className="text-sm font-medium text-ink">{c.client}</div>
        <div className="text-xs text-ink-dim mt-1">{c.service}{c.timeframe && ` · ${c.timeframe}`}</div>
      </div>
    </div>
  );
}

export function ScreenshotCard({ c }: { c: CaseStudy }) {
  return (
    <div className="rv bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] p-7 md:p-8 flex flex-col h-full">
      <div className="flex items-center gap-2.5 mb-5">
        <FormatBadge format="screenshot" />
        <span className="text-[11px] text-sand tracking-[1px]">{c.categoryLabel}</span>
      </div>
      {/* LINE-style chat bubble */}
      <div className="bg-[#06C755]/6 rounded-xl rounded-tl-sm px-4 py-3 mb-5 flex-1">
        <p className="text-[15px] text-ink leading-7">{c.content}</p>
      </div>
      <div className="mt-auto pt-4 border-t border-sand/15">
        <div className="text-sm font-medium text-ink">{c.client}</div>
        <div className="text-xs text-ink-dim mt-1">{c.service}</div>
      </div>
    </div>
  );
}

export function StoryCard({ c }: { c: CaseStudy }) {
  return (
    <div className="rv bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] p-7 md:p-8 flex flex-col h-full">
      <div className="flex items-center gap-2.5 mb-5">
        <FormatBadge format="story" />
        <span className="text-[11px] text-sand tracking-[1px]">{c.categoryLabel}</span>
        {c.timeframe && (
          <span className="text-[11px] text-ink-dim ml-auto">{c.timeframe}</span>
        )}
      </div>
      <div className="text-xs text-seal tracking-[1px] mb-2">{c.problem}</div>
      <p className="text-base text-ink leading-8 mb-4">{c.content}</p>
      {c.followUp && (
        <div className="bg-seal/5 rounded-lg px-4 py-3 mt-auto">
          <div className="text-[11px] text-seal tracking-[1px] mb-1.5">後來</div>
          <p className="text-sm text-ink leading-7">{c.followUp}</p>
        </div>
      )}
      <div className="mt-4 pt-4 border-t border-sand/15">
        <div className="text-sm font-medium text-ink">{c.client}</div>
        <div className="text-xs text-ink-dim mt-1">{c.service}</div>
      </div>
    </div>
  );
}

export default function CaseCard({ c }: { c: CaseStudy }) {
  if (c.format === "screenshot") return <ScreenshotCard c={c} />;
  if (c.format === "story") return <StoryCard c={c} />;
  return <QuoteCard c={c} />;
}
