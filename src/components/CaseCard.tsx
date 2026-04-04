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
    <div className="rv bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] overflow-hidden flex flex-col h-full">
      {/* LINE header */}
      <div className="bg-[#7494C0] px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-seal flex items-center justify-center shrink-0">
          <span className="text-white text-sm font-bold">百</span>
        </div>
        <span className="text-white text-sm font-medium tracking-wide">百無禁忌研究所</span>
      </div>

      {/* Chat area */}
      <div className="flex-1 bg-[#8B9DC3]/8 px-4 py-4 flex flex-col gap-3">
        {/* Date label */}
        {c.chatDate && (
          <div className="text-center">
            <span className="text-[10px] text-ink-dim/70 bg-ink/5 px-3 py-0.5 rounded-full">
              {c.chatDate}
            </span>
          </div>
        )}

        {/* Client message (green, right side) */}
        <div className="flex justify-end gap-1.5 items-end">
          <div className="flex flex-col items-end gap-0.5">
            <span className="text-[10px] text-ink-dim/60">已讀</span>
            {c.chatTime && <span className="text-[10px] text-ink-dim/50">{c.chatTime}</span>}
          </div>
          <div className="bg-[#A6E08D] rounded-xl rounded-br-sm px-3.5 py-2.5 max-w-[80%]">
            <p className="text-[13px] text-ink leading-6">{c.content}</p>
          </div>
        </div>

        {/* Teacher reply (white, left side) */}
        {c.teacherReply && (
          <div className="flex justify-start gap-1.5 items-end">
            <div className="w-7 h-7 rounded-full bg-seal flex items-center justify-center shrink-0">
              <span className="text-white text-[10px] font-bold">百</span>
            </div>
            <div className="bg-white rounded-xl rounded-bl-sm px-3.5 py-2.5 max-w-[80%] shadow-sm">
              <p className="text-[13px] text-ink leading-6">{c.teacherReply}</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer info */}
      <div className="px-4 py-4 border-t border-sand/15">
        <div className="flex items-center gap-2.5 mb-3">
          <FormatBadge format="screenshot" />
          <span className="text-[11px] text-sand tracking-[1px]">{c.categoryLabel}</span>
        </div>
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
