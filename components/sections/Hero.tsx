"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Btn } from "@/components/ui/primitives";

// ── Set to true once /public/images/community/hero.jpg is added ──
const HAS_HERO_IMAGE = true;
const HERO_IMAGE = "/images/community/hero.jpg";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", background: "var(--bg)",
      display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
    }}>
      {/* ── Decorative grid ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(var(--border2) 1px,transparent 1px),linear-gradient(90deg,var(--border2) 1px,transparent 1px)",
        backgroundSize: "64px 64px",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 55% 45%, black 30%, transparent 70%)",
        maskImage: "radial-gradient(ellipse 80% 80% at 55% 45%, black 30%, transparent 70%)",
      }} />

      {/* ── Green glow ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 55% 50% at 68% 44%, rgba(15,143,91,0.09), transparent 65%)",
      }} />

      {/* ── Yellow blob ── */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: 220, height: 220, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,154,42,0.07), transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── Inner grid ── */}
      <div style={{
        maxWidth: 1120, margin: "0 auto", width: "100%",
        padding: "0 1.75rem", paddingTop: "7.5rem", paddingBottom: "5rem",
        position: "relative", zIndex: 1,
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "4rem", alignItems: "center",
      }} className="hero-grid">

        {/* ══════ LEFT — Text ══════ */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--green-light)", border: "1px solid var(--border)",
              borderRadius: 100, padding: "5px 14px",
              fontSize: 12.5, fontWeight: 500, color: "var(--green)",
              marginBottom: "1.75rem",
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)", flexShrink: 0, display: "block" }}
            />
            Communauté active · Paris · Europe
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-bricolage, sans-serif)",
              fontSize: "clamp(2.6rem, 5.2vw, 4.8rem)",
              fontWeight: 800, letterSpacing: "-0.042em",
              lineHeight: 1.05, color: "var(--text)",
            }}
          >
            La tech africaine<br />
            rayonne{" "}
            <span style={{ color: "var(--green)" }}>depuis l&apos;Europe.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(15px, 1.5vw, 17px)", color: "var(--muted)",
              lineHeight: 1.75, maxWidth: 460, marginTop: "1.5rem", marginBottom: "2.25rem",
            }}
          >
            Camer&apos;Tech Europe connecte étudiants, ingénieurs, entrepreneurs
            et professionnels camerounais autour des opportunités, du partage et de l&apos;impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <Btn href="/#join" variant="primary">Rejoindre la communauté →</Btn>
            <Btn href="/#connect" variant="outline">Découvrir CTC</Btn>
          </motion.div>

          {/* Micro-stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            style={{ display: "flex", alignItems: "center", gap: 24, marginTop: "2.75rem" }}
          >
            {[
              { num: "350+", lbl: "Membres" },
              { num: "6",    lbl: "Workshops" },
              { num: "150+", lbl: "Participants" },
            ].map(item => (
              <div key={item.lbl}>
                <div style={{
                  fontFamily: "var(--font-bricolage,sans-serif)",
                  fontWeight: 800, fontSize: 22, color: "var(--green)",
                  letterSpacing: "-0.04em", lineHeight: 1,
                }}>{item.num}</div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 3 }}>{item.lbl}</div>
              </div>
            ))}
            <div style={{ width: 1, height: 30, background: "var(--border2)", margin: "0 4px" }} />
            <div style={{ fontSize: 12, color: "var(--muted)", maxWidth: 100, lineHeight: 1.4 }}>
              Paris · Europe · 2024
            </div>
          </motion.div>
        </div>

        {/* ══════ RIGHT — Visual ══════ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative" }}
        >
          {/* ── Main image container ── */}
          <div style={{
            borderRadius: 22, overflow: "hidden",
            border: "1px solid var(--border2)",
            boxShadow: "0 8px 60px rgba(0,0,0,0.14), 0 2px 12px rgba(0,0,0,0.08)",
            position: "relative",
            aspectRatio: "4/3",
            background: "var(--bg3)",
          }}>
            {HAS_HERO_IMAGE ? (
              <>
                {/* L'image est rendue visible dans les deux thèmes grâce
                    à object-fit:cover et une position absolue sur toute la zone */}
                <Image
                  src={HERO_IMAGE}
                  alt="CamerTech Europe — Communauté tech camerounaise en Europe"
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    // Pas de filtre, pas d'opacity — visible en light ET dark
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay très léger pour lisibilité — identique dans les deux thèmes */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.18) 100%)",
                }} />
              </>
            ) : (
              /* ── Placeholder (actif tant que l'image n'est pas ajoutée) ── */
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, var(--green-light) 0%, var(--bg2) 50%, var(--yellow-light) 100%)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 12, color: "var(--faint)", textAlign: "center",
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" style={{ opacity: 0.4 }}>
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <div style={{ fontSize: 13 }}>Photo principale — CTC / événement</div>
                <code style={{ fontSize: 10, opacity: 0.6 }}>{HERO_IMAGE}</code>
              </div>
            )}
          </div>

          {/* ── Float stat ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute", bottom: -20, left: -20,
              background: "var(--card)", border: "1px solid var(--border)",
              borderRadius: 16, padding: "0.9rem 1.3rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)", zIndex: 2,
            }}
          >
            <span style={{ fontFamily: "var(--font-bricolage,sans-serif)", fontSize: 24, fontWeight: 800, color: "var(--green)", letterSpacing: "-1px", display: "block", lineHeight: 1 }}>350+</span>
            <span style={{ fontSize: 12, color: "var(--muted)", marginTop: 3, display: "block" }}>membres actifs en Europe</span>
          </motion.div>

          {/* ── Float badge jaune ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute", top: -16, right: -16,
              background: "var(--yellow)", color: "#fff",
              borderRadius: 12, padding: "0.6rem 1rem",
              fontSize: 13, fontWeight: 600,
              boxShadow: "0 4px 20px rgba(200,154,42,0.4)", zIndex: 2,
            }}
          >CTC 2024 · Paris</motion.div>

          {/* ── Speaker stack ── */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{
              position: "absolute", top: "42%", right: -22,
              transform: "translateY(-50%)",
              background: "var(--card)", border: "1px solid var(--border)",
              borderRadius: 14, padding: "0.8rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)", zIndex: 2,
              display: "flex", flexDirection: "column", gap: 5, alignItems: "center",
            }}
          >
            {["WE", "SN", "CT"].map((ini, i) => (
              <div key={ini} style={{
                width: 30, height: 30, borderRadius: "50%",
                background: i === 1 ? "var(--yellow-light)" : "var(--green-light)",
                border: "2px solid var(--card)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-bricolage,sans-serif)", fontWeight: 800, fontSize: 9,
                color: i === 1 ? "var(--yellow)" : "var(--green)",
              }}>{ini}</div>
            ))}
            <div style={{ fontSize: 10, color: "var(--muted)", textAlign: "center", lineHeight: 1.3, marginTop: 2 }}>8+<br/>speakers</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
        style={{
          position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: "var(--faint)", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase",
        }}
      >
        <motion.div
          animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
          style={{ width: 1, height: 30, background: "linear-gradient(to bottom,var(--green),transparent)", transformOrigin: "top" }}
        />
        Scroll
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}