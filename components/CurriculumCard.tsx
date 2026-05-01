"use client";

import { useState } from "react";
import type { Module } from "@/lib/constants";

export function CurriculumCard({ module }: { module: Module }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      className="flex w-full flex-col rounded-2xl border border-ink/10 bg-white p-6 text-left transition hover:border-ink/30"
    >
      <div className="flex items-center justify-between">
        <span className="eyebrow">Week {module.week}</span>
        <span aria-hidden className={`text-text-muted transition-transform ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </div>
      <h3 className="mt-3 font-serif text-2xl text-ink">{module.name}</h3>
      {open ? (
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-text-secondary">
          <div>
            <div className="eyebrow mb-1">What we build</div>
            <p>{module.build}</p>
          </div>
          <div>
            <div className="eyebrow mb-1">You walk away with</div>
            <p>{module.deliverable}</p>
          </div>
        </div>
      ) : null}
    </button>
  );
}
