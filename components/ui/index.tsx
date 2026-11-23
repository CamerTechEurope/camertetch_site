"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ── Fade in up (scroll-triggered) ── */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container ── */
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
export const fadeItem = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* ── Section label ── */
export function SectionLabel({
  children,
  color = "green",
  center = false,
}: {
  children: React.ReactNode;
  color?: "green" | "yellow";
  center?: boolean;
}) {
  const c = color === "yellow" ? "var(--yellow)" : "var(--green)";
  return (
    <div className={`flex items-center gap-2.5 mb-3 ${center ? "justify-center" : ""}`}>
      <span className="block h-px w-5 flex-shrink-0" style={{ background: c }} />
      <span className="text-[11px] font-semibold tracking-[2px] uppercase" style={{ color: c }}>
        {children}
      </span>
    </div>
  );
}

/* ── Section title ── */
export function SectionTitle({
  children,
  center = false,
  size = "lg",
}: {
  children: React.ReactNode;
  center?: boolean;
  size?: "lg" | "md";
}) {
  const fs = size === "lg"
    ? "text-[clamp(2rem,4vw,3.2rem)]"
    : "text-[clamp(1.6rem,3vw,2.4rem)]";
  return (
    <h2
      className={`font-display font-extrabold leading-[1.06] tracking-[-0.035em] ${fs} ${center ? "text-center" : ""}`}
      style={{ color: "var(--text)" }}
    >
      {children}
    </h2>
  );
}

/* ── Highlight span ── */
export function Hl({ children, color = "green" }: { children: React.ReactNode; color?: "green" | "yellow" }) {
  return <span style={{ color: color === "yellow" ? "var(--yellow)" : "var(--green)" }}>{children}</span>;
}

/* ── Card ── */
export function Card({
  children,
  className = "",
  style = {},
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-[20px] border transition-all duration-300 ${hover ? "hover:-translate-y-0.5" : ""} ${className}`}
      style={{
        background: "var(--card)",
        borderColor: "var(--border2)",
        boxShadow: "var(--shadow)",
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!hover) return;
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)";
      }}
      onMouseLeave={(e) => {
        if (!hover) return;
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border2)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow)";
      }}
    >
      {children}
    </div>
  );
}

/* ── Button ── */
export function Btn({
  children,
  href,
  variant = "primary",
  onClick,
  disabled = false,
  full = false,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "yellow" | "white";
  onClick?: () => void;
  disabled?: boolean;
  full?: boolean;
}) {
  const base = `inline-flex items-center justify-center gap-2 text-sm font-medium rounded-[9px] px-5 py-3 transition-all duration-200 cursor-pointer border-0 ${full ? "w-full" : ""}`;
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: "var(--green)", color: "#fff" },
    outline: { background: "transparent", color: "var(--text)", border: "1px solid var(--border2)" },
    yellow:  { background: "var(--yellow)", color: "#fff" },
    white:   { background: "#fff", color: "var(--green)" },
  };
  const hover: Record<string, { bg: string }> = {
    primary: { bg: "var(--green-h)" },
    outline: { bg: "var(--green-dim)" },
    yellow:  { bg: "#b38622" },
    white:   { bg: "#f0faf5" },
  };

  const props = {
    className: base,
    style: styles[variant],
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      (e.currentTarget as HTMLElement).style.background = hover[variant].bg;
      if (variant !== "primary" && variant !== "yellow") {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      (e.currentTarget as HTMLElement).style.background = styles[variant].background as string;
      if (variant !== "primary" && variant !== "yellow") {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
      }
    },
  };

  if (href) return <a href={href} {...props}>{children}</a>;
  return <button onClick={onClick} disabled={disabled} {...props}>{children}</button>;
}

/* ── Image placeholder ── */
export function ImgPh({
  label,
  path,
  ratio = "16/9",
  className = "",
}: {
  label?: string;
  path: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`img-ph ${className}`}
      style={{ aspectRatio: ratio, width: "100%" }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ position: "relative", zIndex: 1 }}>
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      {label && <span style={{ position: "relative", zIndex: 1, textAlign: "center", lineHeight: 1.6 }}>{label}<br /><code style={{ fontSize: 10, opacity: 0.7 }}>{path}</code></span>}
      {!label && <code style={{ position: "relative", zIndex: 1, fontSize: 10 }}>{path}</code>}
    </div>
  );
}

/* ── Counter hook ── */
export function useCounter(target: number, started: boolean, delay = 0) {
  const [value, setValue] = useState(0);
  const ran = useRef(false);
  useEffect(() => {
    if (!started || ran.current) return;
    ran.current = true;
    const timer = setTimeout(() => {
      const t0 = performance.now();
      const dur = 1700;
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        setValue(Math.round((1 - Math.pow(2, -10 * p)) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timer);
  }, [started, target, delay]);
  return value;
}

/* ── Arrow icon ── */
export const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);