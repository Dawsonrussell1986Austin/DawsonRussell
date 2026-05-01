"use client";

import { useEffect, useState } from "react";

function diff(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export function CountdownTimer({ targetISO }: { targetISO: string }) {
  const target = new Date(targetISO);
  const [t, setT] = useState(() => diff(target));
  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  const cell = (n: number, label: string) => (
    <div className="flex flex-col items-center">
      <span className="font-serif text-3xl tabular-nums text-ink">
        {String(n).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-widest text-text-muted">
        {label}
      </span>
    </div>
  );

  return (
    <div className="inline-flex items-center gap-6 rounded-full border border-ink/10 bg-white px-6 py-3">
      {cell(t.days, "days")}
      {cell(t.hours, "hrs")}
      {cell(t.minutes, "min")}
      {cell(t.seconds, "sec")}
    </div>
  );
}
