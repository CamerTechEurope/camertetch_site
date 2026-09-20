"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FadeUp({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
export const fadeItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function SecLabel({
  children,
  center = false,
  color = "green",
}: {
  children: React.ReactNode;
  center?: boolean;
  color?: "green" | "yellow";
}) {
  const c = color === "yellow" ? "var(--yellow)" : "var(--green)";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: "0.9rem",
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      <span style={{ width: 18, height: 1.5, background: c, flexShrink: 0, display: "block" }} />
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: c,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export function SecTitle({
  children,
  center = false,
  md = false,
}: {
  children: React.ReactNode;
  center?: boolean;
  md?: boolean;
}) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-bricolage, sans-serif)",
        fontSize: md ? "clamp(1.6rem,3vw,2.4rem)" : "clamp(2rem,4vw,3.2rem)",
        fontWeight: 800,
        letterSpacing: "-0.038em",
        lineHeight: 1.06,
        color: "var(--text)",
        textAlign: center ? "center" : "left",
      }}
    >
      {children}
    </h2>
  );
}

export function Hl({ children, y = false }: { children: React.ReactNode; y?: boolean }) {
  return <span style={{ color: y ? "var(--yellow)" : "var(--green)" }}>{children}</span>;
}

export function Btn({
  href,
  children,
  variant = "primary",
  full = false,
  onClick,
  disabled = false,
  size = "md",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "yellow" | "white" | "ghost";
  full?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  size?: "md" | "sm";
}) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "inherit",
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: 10,
    fontSize: size === "sm" ? 14 : 15,
    padding: size === "sm" ? "0.6rem 1.2rem" : "0.82rem 1.6rem",
    cursor: disabled ? "not-allowed" : "pointer",
    border: "none",
    textDecoration: "none",
    transition: "all .2s ease",
    whiteSpace: "nowrap",
    width: full ? "100%" : undefined,
    opacity: disabled ? 0.65 : 1,
  };
  const vs: Record<string, React.CSSProperties> = {
    primary: {
      background: "var(--green)",
      color: "#fff",
      boxShadow: "0 2px 12px rgba(15,143,91,0.3)",
    },
    outline: {
      background: "transparent",
      color: "var(--text)",
      border: "1.5px solid var(--border2)",
    },
    yellow: {
      background: "var(--yellow)",
      color: "#fff",
      boxShadow: "0 2px 10px rgba(200,154,42,0.3)",
    },
    white: {
      background: "#fff",
      color: "var(--green)",
      fontWeight: 600,
      boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
    },
    ghost: {
      background: "var(--green-dim)",
      color: "var(--green)",
      border: "1px solid var(--border)",
    },
  };
  const hoverMap: Record<string, Partial<React.CSSProperties>> = {
    primary: {
      background: "var(--green-h)",
      transform: "translateY(-1px)",
      boxShadow: "0 4px 18px rgba(15,143,91,0.4)",
    },
    outline: { borderColor: "var(--border)", background: "var(--green-dim)" },
    yellow: { background: "var(--yellow-h)", transform: "translateY(-1px)" },
    white: { background: "#f0faf5" },
    ghost: { background: "var(--green-light)", borderColor: "var(--green)" },
  };
  const restoreMap: Record<string, Partial<React.CSSProperties>> = {
    primary: {
      background: "var(--green)",
      transform: "",
      boxShadow: "0 2px 12px rgba(15,143,91,0.3)",
    },
    outline: { borderColor: "var(--border2)", background: "transparent" },
    yellow: { background: "var(--yellow)", transform: "" },
    white: { background: "#fff" },
    ghost: { background: "var(--green-dim)", borderColor: "var(--border)" },
  };
  const props = {
    style: { ...base, ...vs[variant] },
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget as HTMLElement;
      Object.assign(el.style, hoverMap[variant]);
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget as HTMLElement;
      Object.assign(el.style, restoreMap[variant]);
    },
  };
  if (href)
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  return (
    <button onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export function Card({
  children,
  style = {},
  hover = true,
  padding = "1.75rem",
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  hover?: boolean;
  padding?: string;
}) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border2)",
        borderRadius: 20,
        boxShadow: "var(--sh)",
        padding,
        transition: "all .3s ease",
        ...style,
      }}
      onMouseEnter={
        hover
          ? (e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.boxShadow = "var(--sh-lg)";
              el.style.borderColor = "var(--border)";
              el.style.transform = "translateY(-3px)";
            }
          : undefined
      }
      onMouseLeave={
        hover
          ? (e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.boxShadow = "var(--sh)";
              el.style.borderColor = "var(--border2)";
              el.style.transform = "";
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

export function ImgPh({
  path,
  ratio = "16/9",
  label,
  radius = 12,
}: {
  path: string;
  ratio?: string;
  label?: string;
  radius?: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: ratio,
        background: "var(--bg2)",
        border: "1.5px dashed var(--faint)",
        borderRadius: radius,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        color: "var(--faint)",
        fontSize: 12,
        textAlign: "center",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(-45deg,transparent,transparent 10px,rgba(15,143,91,0.02) 10px,rgba(15,143,91,0.02) 11px)",
        }}
      />
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        style={{ position: "relative", zIndex: 1, opacity: 0.5 }}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      {label && <span style={{ position: "relative", zIndex: 1, lineHeight: 1.6 }}>{label}</span>}
      <code style={{ position: "relative", zIndex: 1, fontSize: 10, opacity: 0.55 }}>{path}</code>
    </div>
  );
}

export function W({ size = "100%", children }: { size?: string; children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 1.75rem", width: size }}>
      {children}
    </div>
  );
}
