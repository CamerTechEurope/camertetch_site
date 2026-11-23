"use client";
import { useEffect, useRef, useState } from "react";

const STATS_DATA = [
  { target: 350, suffix: "+", label: "Membres actifs", delay: 0 },
  { target: 350, suffix: "+", label: "Opportunités partagées", delay: 100 },
  { target: 150, suffix: "+", label: "Participants aux événements", delay: 200 },
  { target: 6,   suffix: "",  label: "Workshops organisés", delay: 300 },
  { target: 6,   suffix: "",  label: "Contrats obtenus", delay: 400 },
];

function StatItem({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        setTimeout(() => {
          const start = performance.now();
          const dur = 1700;
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(2, -10 * p);
            setCount(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }, delay);
      }
    }, { threshold: 0.2 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, delay]);

  return (
    <div ref={ref} className="stat-cell rev">
      <span className="stat-num">
        <span className="n">{count}</span>
        {suffix && <span className="u">{suffix}</span>}
      </span>
      <span className="stat-lbl">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats">
      <div className="ct">
        <div className="stats-row">
          {STATS_DATA.map((s, i) => (
            <StatItem key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
