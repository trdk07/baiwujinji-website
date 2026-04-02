"use client";

import { useState, useRef, useCallback } from "react";

const fortunes = [
  "靜待時機，不急不躁。你等的那個轉變，比你想的更近。",
  "有些事情不是你的錯，但要不要放下是你的選擇。",
  "你最近在猶豫的那件事，心裡其實已經有答案了。",
  "別再問值不值得，問你自己還想不想要。",
  "貴人就在身邊，只是你還沒認出來。",
  "這不是低谷，是轉彎。方向對了，慢一點也沒關係。",
  "你比自己以為的更強。這句話不是安慰，是事實。",
];

export default function EasterEgg({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const [fortune, setFortune] = useState("");
  const clickCount = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleClick = useCallback(() => {
    clickCount.current++;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => (clickCount.current = 0), 2000);

    if (clickCount.current >= 5) {
      clickCount.current = 0;
      setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
      setShow(true);
    }
  }, []);

  return (
    <>
      <div onClick={handleClick} className="cursor-pointer">
        {children}
      </div>

      {show && (
        <div
          className="fixed inset-0 z-200 bg-ink/50 backdrop-blur-[8px] flex items-center justify-center"
          onClick={() => setShow(false)}
        >
          <div
            className="bg-bg border border-sand/30 rounded-2xl px-11 py-13 max-w-[380px] text-center animate-[scale-in_0.5s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-4xl text-seal block mb-5">印</span>
            <h3 className="text-serif text-xl mb-3.5 tracking-[2px]">今日籤詩</h3>
            <p className="text-[15px] text-ink-sub leading-8 font-light">{fortune}</p>
            <button
              onClick={() => setShow(false)}
              className="mt-6 text-xs text-ink-dim tracking-[2px] hover:text-seal transition-colors"
            >
              點擊關閉
            </button>
          </div>
        </div>
      )}
    </>
  );
}
