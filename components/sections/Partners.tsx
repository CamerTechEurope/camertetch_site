"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeUp, stagger, fadeItem, SecLabel, SecTitle, Hl, Btn } from "@/components/ui/primitives";

/* ─────────────────────────────────────────────
   DONNÉES — modifier ici pour ajouter/modifier
───────────────────────────────────────────── */
const PARTNERS = [
  {
    name: "CharisDataConsulting",
    role: "Data & Analytics",
    logoSrc: null as string | null,
    logoPath: "/images/partners/charis-data.png",
    accentColor: "#0F8F5B",
  },
  {
    name: "CamWonders",
    role: "Tech & Innovation",
    logoSrc: null as string | null,
    logoPath: "/images/partners/camwonders.png",
    accentColor: "#C89A2A",
  },
  {
    name: "YMB Tech",
    role: "Solutions Digitales",
    logoSrc: null as string | null,
    logoPath: "/images/partners/ymb-tech.png",
    accentColor: "#0F8F5B",
  },
];

const TRUSTED = [
  { logoSrc: null as string | null, logoPath: "/images/partners/google.png", name: "Google" },
  { logoSrc: null as string | null, logoPath: "/images/partners/aws.png",    name: "AWS" },
  { logoSrc: null as string | null, logoPath: "/images/partners/notion.png", name: "Notion" },
];

export default function Partners() {
  return (
    <section id="partners" style={{ background: "var(--bg2)", padding: "7rem 0", position: "relative", overflow: "hidden" }}>
      {/* Subtle glow */}
      <div style={{ position: "absolute", top: -120, right: -80, width: 400, height: 400, background: "radial-gradient(circle, rgba(200,154,42,0.05), transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 1.75rem" }}>

        {/* ── Header ── */}
        <FadeUp style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "4rem" }}>
          <div>
            <SecLabel>Partenaires</SecLabel>
            <SecTitle>Ils nous font <Hl>confiance.</Hl></SecTitle>
            <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.72, maxWidth: 460, marginTop: "0.85rem" }}>
              Des organisations qui partagent notre vision d&apos;un écosystème tech africain ambitieux et durable.
            </p>
          </div>
          <Btn href="#contact" variant="outline">Devenir partenaire</Btn>
        </FadeUp>

        {/* ── PARTENAIRES PRINCIPAUX ── */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="partners-main-g"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: "3.5rem" }}
        >
          {PARTNERS.map((p) => (
            <motion.div key={p.name} variants={fadeItem}>
              <PartnerCard {...p} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── DIVIDER avec texte ── */}
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "3rem" }}>
            <div style={{ flex: 1, height: 1, background: "var(--border2)" }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--faint)", letterSpacing: "2px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              Ils travaillent avec nous
            </span>
            <div style={{ flex: 1, height: 1, background: "var(--border2)" }} />
          </div>
        </FadeUp>

        {/* ── LOGOS ROW (grayscale → couleur) ── */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "4.5rem" }}
        >
          {TRUSTED.map((t) => (
            <motion.div key={t.name} variants={fadeItem}>
              <LogoChip {...t} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA BANNER ── */}
        <FadeUp>
          <div style={{
            background: "var(--card)",
            border: "1px solid var(--border2)",
            borderRadius: 22,
            padding: "3rem 3.5rem",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }} className="partner-cta-grid">
            {/* Background accent */}
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 5, background: "linear-gradient(to bottom, var(--green), var(--yellow))", borderRadius: "22px 0 0 22px" }} />
            <div style={{ paddingLeft: "1rem" }}>
              <h3 style={{
                fontFamily: "var(--font-bricolage, sans-serif)",
                fontSize: "clamp(1.2rem, 2vw, 1.65rem)",
                fontWeight: 800, letterSpacing: "-0.03em",
                color: "var(--text)", marginBottom: "0.6rem",
              }}>
                Votre entreprise croit au potentiel<br />de la diaspora tech africaine ?
              </h3>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65, maxWidth: 520 }}>
                Rejoignez nos partenaires. Ensemble nous construisons un écosystème durable entre l&apos;Europe et le Cameroun.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              <Btn href="#contact" variant="primary">Nous contacter</Btn>
              <Btn href="#contact" variant="ghost" size="sm">Voir les offres</Btn>
            </div>
          </div>
        </FadeUp>
      </div>

      <style>{`
        .partners-main-g { grid-template-columns: repeat(3,1fr) !important; }
        @media(max-width:900px){ .partners-main-g { grid-template-columns: 1fr !important; } }
        .partner-cta-grid { grid-template-columns: 1fr auto !important; }
        @media(max-width:640px){ .partner-cta-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

/* ── Card partenaire principal ── */
function PartnerCard({ name, role, logoSrc, logoPath, accentColor }: {
  name: string; role: string; logoSrc: string | null; logoPath: string; accentColor: string;
}) {
  return (
    <div
      style={{
        background: "var(--card)", border: "1px solid var(--border2)",
        borderRadius: 18, padding: "2rem",
        transition: "all .3s ease",
        position: "relative", overflow: "hidden",
        display: "flex", flexDirection: "column", gap: "1.5rem",
        cursor: "default",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "var(--sh-lg)";
        el.style.transform = "translateY(-3px)";
        const bar = el.querySelector(".p-bar") as HTMLElement;
        if (bar) bar.style.width = "100%";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "var(--border2)";
        el.style.boxShadow = "none";
        el.style.transform = "";
        const bar = el.querySelector(".p-bar") as HTMLElement;
        if (bar) bar.style.width = "0%";
      }}
    >
      {/* Progress bar hover effect */}
      <div className="p-bar" style={{ position: "absolute", bottom: 0, left: 0, height: 3, width: "0%", background: accentColor, transition: "width .35s ease", borderRadius: "0 0 18px 18px" }} />

      {/* Logo zone */}
      <div style={{
        width: "100%", height: 80,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "var(--bg2)", borderRadius: 12, overflow: "hidden",
        position: "relative",
      }}>
        {logoSrc ? (
          <Image
            src={logoSrc} alt={name}
            fill
            style={{
              objectFit: "contain", padding: "12px",
              filter: "grayscale(1)",
              transition: "filter .3s",
            }}
            className="partner-logo-img"
          />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--faint)" strokeWidth="1.2" strokeLinecap="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
            </svg>
            <code style={{ fontSize: 10, color: "var(--faint)", opacity: 0.7 }}>{logoPath}</code>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <div style={{ fontFamily: "var(--font-bricolage,sans-serif)", fontSize: 17, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 4 }}>{name}</div>
        <div style={{ fontSize: 13, color: "var(--muted)" }}>{role}</div>
      </div>
    </div>
  );
}

/* ── Logo chip (trusted by row) ── */
function LogoChip({ name, logoSrc, logoPath }: { name: string; logoSrc: string | null; logoPath: string }) {
  return (
    <div
      style={{
        background: "var(--card)", border: "1px solid var(--border2)",
        borderRadius: 12, padding: "1rem 1.75rem",
        minWidth: 140, height: 72,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all .3s", cursor: "default", position: "relative",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "var(--sh-md)";
        el.style.transform = "translateY(-2px)";
        const img = el.querySelector("img");
        if (img) img.style.filter = "grayscale(0)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "var(--border2)";
        el.style.boxShadow = "none";
        el.style.transform = "";
        const img = el.querySelector("img");
        if (img) img.style.filter = "grayscale(1) opacity(0.55)";
      }}
    >
      {logoSrc ? (
        <div style={{ position: "relative", width: 100, height: 36 }}>
          <Image
            src={logoSrc} alt={name} fill
            style={{ objectFit: "contain", filter: "grayscale(1) opacity(0.55)", transition: "filter .3s" }}
          />
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <span style={{ fontFamily: "var(--font-bricolage,sans-serif)", fontWeight: 700, fontSize: 15, color: "var(--faint)" }}>{name}</span>
          <code style={{ fontSize: 9, color: "var(--faint)", opacity: 0.6 }}>{logoPath}</code>
        </div>
      )}
    </div>
  );
}