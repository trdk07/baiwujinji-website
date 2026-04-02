const items = [
  "方向不明", "諸事不順", "求財開路", "事業受阻", "桃花遲遲", "挽回修復",
  "人生顧問", "法事服務", "百無禁忌",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="py-8 overflow-hidden bg-bg/50 border-y border-sand/15">
      <div
        className="flex gap-10 w-max"
        style={{ animation: "marquee-scroll 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i}>
            <span className="text-serif text-[15px] text-ink-dim whitespace-nowrap tracking-[3px]">
              {item}
            </span>
            {i < doubled.length - 1 && (
              <span className="text-seal text-[6px] opacity-60 ml-10">●</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
