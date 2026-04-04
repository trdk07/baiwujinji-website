"use client";

import type { CaseStudy } from "@/data/case-studies";

function FormatBadge({ format }: { format: CaseStudy["format"] }) {
  const labels = { quote: "諮詢紀錄", screenshot: "LINE 對話", story: "真實故事" };
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

/* ─── Quote → 諮詢紀錄 UI ─────────────────────────── */
export function QuoteCard({ c }: { c: CaseStudy }) {
  return (
    <div className="rv bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] overflow-hidden flex flex-col h-full">
      {/* Paper header */}
      <div className="bg-warm/50 border-b border-sand/15 px-7 py-5 md:px-8">
        <div className="flex items-center gap-2.5 mb-3">
          <FormatBadge format="quote" />
          <span className="text-[11px] text-sand tracking-[1px]">{c.categoryLabel}</span>
        </div>
        {/* Structured fields */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[12px]">
          <div>
            <span className="text-ink-dim">諮詢類型</span>
            <p className="text-ink font-medium mt-0.5">{c.service}</p>
          </div>
          <div>
            <span className="text-ink-dim">客戶身份</span>
            <p className="text-ink font-medium mt-0.5">{c.client}</p>
          </div>
          {c.timeframe && (
            <div className="col-span-2">
              <span className="text-ink-dim">回饋時間</span>
              <p className="text-ink font-medium mt-0.5">{c.timeframe}</p>
            </div>
          )}
        </div>
      </div>

      {/* Quote body */}
      <div className="px-7 py-6 md:px-8 flex-1 flex flex-col">
        <blockquote className="text-base text-ink leading-8 flex-1 relative pl-4 border-l-[3px] border-ochre/30">
          {c.content}
        </blockquote>

        {/* Follow-up as checkmark result */}
        {c.followUp && (
          <div className="mt-5 flex gap-2.5 items-start bg-seal/4 rounded-lg px-4 py-3">
            <span className="text-seal text-base mt-0.5 shrink-0">✓</span>
            <p className="text-sm text-ink leading-7">{c.followUp}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Screenshot → LINE 聊天 UI ────────────────────── */
export function ScreenshotCard({ c }: { c: CaseStudy }) {
  return (
    <div className="rv bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] overflow-hidden flex flex-col h-full">
      {/* LINE header */}
      <div className="bg-[#7494C0] px-4 py-3 flex items-center gap-3">
        <svg className="w-5 h-5 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <div className="w-9 h-9 rounded-full bg-seal flex items-center justify-center shrink-0">
          <span className="text-white text-sm font-bold">百</span>
        </div>
        <span className="text-white text-sm font-medium tracking-wide flex-1">百無禁忌研究所</span>
        <svg className="w-5 h-5 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <svg className="w-5 h-5 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {/* Chat area */}
      <div className="flex-1 bg-[#7494C0]/10 px-4 py-4 flex flex-col gap-3">
        {/* Date label */}
        {c.chatDate && (
          <div className="text-center">
            <span className="text-[10px] text-white/90 bg-black/20 px-3 py-0.5 rounded-full">
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

/* ─── Story → 垂直時間軸 UI ────────────────────────── */
export function StoryCard({ c }: { c: CaseStudy }) {
  return (
    <div className="rv bg-bg-card/70 backdrop-blur-[8px] border border-sand/18 rounded-[14px] p-7 md:p-8 flex flex-col h-full">
      <div className="flex items-center gap-2.5 mb-5">
        <FormatBadge format="story" />
        <span className="text-[11px] text-sand tracking-[1px]">{c.categoryLabel}</span>
      </div>

      {/* Vertical timeline */}
      <div className="flex-1 relative pl-7">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-[6px] bottom-[6px] w-[2px] bg-sand/30" />

        {/* Node 1: 第一次來 */}
        <div className="relative mb-6">
          <div className="absolute -left-7 top-[6px] w-[16px] h-[16px] rounded-full border-2 border-sand bg-bg-card" />
          <div className="text-[11px] text-ink-dim tracking-[1px] mb-1.5">第一次來</div>
          <div className="text-xs text-seal font-medium mb-2">{c.problem}</div>
          <p className="text-[14px] text-ink leading-7">{c.content}</p>
        </div>

        {/* Node 2: 後來 (result) */}
        {c.followUp && (
          <div className="relative">
            <div className="absolute -left-7 top-[6px] w-[16px] h-[16px] rounded-full bg-seal border-2 border-seal" />
            {c.timeframe && (
              <div className="text-[11px] text-seal font-semibold tracking-[1px] mb-1.5">
                {c.timeframe}後
              </div>
            )}
            <p className="text-[14px] text-ink leading-7">{c.followUp}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-sand/15">
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
