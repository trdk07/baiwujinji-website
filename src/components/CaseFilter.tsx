"use client";

import { useState } from "react";
import { caseStudies, caseCategories } from "@/data/case-studies";
import type { CaseStudy } from "@/data/case-studies";
import CaseCard from "./CaseCard";

export default function CaseFilter() {
  const [active, setActive] = useState<string>("all");

  const filtered: CaseStudy[] =
    active === "all"
      ? caseStudies
      : caseStudies.filter((c) => c.category === active);

  return (
    <>
      {/* Filter pills */}
      <div className="flex gap-2 flex-wrap mb-10">
        {caseCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-4 py-1.5 rounded-full text-sm tracking-wide transition-all ${
              active === cat.value
                ? "bg-seal text-white"
                : "bg-bg-card/70 border border-sand/18 text-ink-sub hover:border-sand/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((c) => (
          <CaseCard key={c.id} c={c} />
        ))}
      </div>
    </>
  );
}
