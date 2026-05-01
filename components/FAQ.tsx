"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function FAQ({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="font-serif text-lg text-ink">{item.q}</span>
              <span
                aria-hidden
                className={`text-text-muted transition-transform ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="px-6 pb-6 text-sm leading-relaxed text-text-secondary">
                {item.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
