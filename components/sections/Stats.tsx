"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const DATA = [
  { target: 350, suffix: "+", label: "Membres actifs" },
  { target: 350, suffix: "+", label: "Opportunités partagées" },
  { target: 150, suffix: "+", label: "Participants aux événements" },
  { target: 6, suffix: "", label: "Workshops organisés" },
  { target: 6, suffix: "", label: "Contrats obtenus" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border2)",
        borderBottom: "1px solid var(--border2)",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 1.75rem",
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
        }}
        className="stats-g"
      >
        {DATA.map((s, i) => (
          <Cell key={i} {...s} started={inView} i={i} last={i === DATA.length - 1} />
        ))}
      </div>
      <style>{`
        .stats-g { grid-template-columns: repeat(5,1fr) !important; }
        @media(max-width:900px){ .stats-g { grid-template-columns: repeat(3,1fr) !important; } }
        @media(max-width:560px){ .stats-g { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}

function Cell({
  target,
  suffix,
  label,
  started,
  i,
  last,
}: {
  target: number;
  suffix: string;
  label: string;
  started: boolean;
  i: number;
  last: boolean;
}) {
  const [v, setV] = useState(0);
  const ran = useRef(false);
  useEffect(() => {
    if (!started || ran.current) return;
    ran.current = true;
    setTimeout(() => {
      const t0 = performance.now(),
        dur = 1700;
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        setV(Math.round((1 - Math.pow(2, -10 * p)) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, i * 100);
  }, [started, target, i]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: "2.75rem 1.5rem",
        textAlign: "center",
        borderRight: last ? "none" : "1px solid var(--border2)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-bricolage,sans-serif)",
          fontSize: "clamp(1.9rem,3vw,2.8rem)",
          fontWeight: 800,
          letterSpacing: "-0.045em",
          color: "var(--text)",
          display: "block",
          lineHeight: 1,
        }}
      >
        {v}
        <span style={{ color: "var(--green)" }}>{suffix}</span>
      </span>
      <span
        style={{
          fontSize: 13,
          color: "var(--muted)",
          marginTop: 8,
          display: "block",
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}
