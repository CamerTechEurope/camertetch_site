"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeUp, stagger, fadeItem, SecLabel, SecTitle, Hl } from "@/components/ui/primitives";

const EVENTS = [
  {
    num: "01", tag: "Carrière", tagColor: "green",
    title: "Réussir ses entretiens",
    points: ["Simulations d'entretiens RH et techniques","Conseils spécifiques aux ESN","Stratégies de préparation carrière","Feedback personnalisé par des experts"],
    speaker: { initials: "CT", name: "Workshop collectif", role: "Simulation · Feedback · Coaching" },
    posterSrc: "/images/events/affiche-entretiens.jpg",   // ← /images/events/affiche-entretiens.jpg
    speakerSrc: null as string | null,  // ← /images/speakers/coach.jpg
    posterPath: "/images/events/affiche-entretiens.jpg",
    speakerPath: "/images/speakers/coach.jpg",
    tagStyle: { bg: "var(--green-light)", color: "var(--green)", border: "1px solid var(--border)" },
  },
  {
    num: "02", tag: "Inspiration", tagColor: "yellow",
    title: "William Elong Live",
    points: ["Freelancing & levée de fonds tech","Contrats et projets d'envergure","IA, cybersécurité et innovation africaine","Forbes Top 30 Africa · créateur de drone"],
    speaker: { initials: "WE", name: "William Elong", role: "Entrepreneur · Forbes Top 30 Africa" },
    posterSrc: "/images/events/affiche-william-elong.jpg",
    speakerSrc: null as string | null,
    posterPath: "/images/events/affiche-william-elong.jpg",
    speakerPath: "/images/speakers/william-elong.jpg",
    tagStyle: { bg: "var(--yellow-light)", color: "var(--yellow)", border: "1px solid rgba(200,154,42,0.22)" },
  },
  {
    num: "03", tag: "Masterclass", tagColor: "green",
    title: "Steve Nouyep — Data & Cybersécurité",
    points: ["La data au cœur de la cybersécurité","Détection de menaces par l'analyse","Anomalies et systèmes de sécurité","Cas pratiques et retours terrain"],
    speaker: { initials: "SN", name: "Steve Nouyep", role: "Expert Data · Cybersécurité" },
    posterSrc: "/images/events/affiche-steve-nouyep.jpg",
    speakerSrc: null as string | null,
    posterPath: "/images/events/affiche-steve-nouyep.jpg",
    speakerPath: "/images/speakers/steve-nouyep.jpg",
    tagStyle: { bg: "var(--green-light)", color: "var(--green)", border: "1px solid var(--border)" },
  },
];

export default function Events() {
  return (
    <section id="events" style={{ background: "var(--bg2)", padding: "7rem 0" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 1.75rem" }}>
        <FadeUp>
          <SecLabel>Nos initiatives</SecLabel>
          <SecTitle>Des événements <Hl>qui transforment.</Hl></SecTitle>
          <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.72, maxWidth: 520, marginTop: "0.85rem" }}>
            Trois formats d&apos;événements impactants au service de la croissance professionnelle et du networking.
          </p>
        </FadeUp>

        <motion.div
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
          className="ev-g"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: "3.5rem" }}
        >
          {EVENTS.map(evt => (
            <motion.div key={evt.num} variants={fadeItem} style={{ display: "flex" }}>
              <div style={{
                background: "var(--card)", border: "1px solid var(--border2)",
                borderRadius: 22, boxShadow: "var(--sh)",
                overflow: "hidden", display: "flex", flexDirection: "column", width: "100%",
                transition: "box-shadow .3s, border-color .3s, transform .25s",
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = "var(--sh-lg)"; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = "var(--sh)"; el.style.borderColor = "var(--border2)"; el.style.transform = ""; }}
              >

                {/* ── AFFICHE — zone carrée (affiches 2560×2560) ── */}
                <div style={{ width: "100%", aspectRatio: "1/1", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                  {evt.posterSrc ? (
                    <Image src={evt.posterSrc} alt={`Affiche ${evt.title}`} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 380px" />
                  ) : (
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(145deg, var(--bg2), var(--bg3))",
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      gap: 12, color: "var(--faint)", textAlign: "center", fontSize: 12,
                    }}>
                      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(-45deg,transparent,transparent 12px,rgba(15,143,91,0.025) 12px,rgba(15,143,91,0.025) 13px)" }} />
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" style={{ position: "relative", zIndex: 1, opacity: 0.4 }}>
                        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                      </svg>
                      <div style={{ position: "relative", zIndex: 1 }}>
                        Affiche (2560×2560)<br />
                        <code style={{ fontSize: 10, opacity: 0.6 }}>{evt.posterPath}</code>
                      </div>
                    </div>
                  )}

                  {/* Tag overlaid on poster */}
                  <div style={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}>
                    <span style={{
                      ...evt.tagStyle, borderRadius: 100, padding: "3px 12px",
                      fontSize: 11.5, fontWeight: 600,
                      backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                    }}>{evt.tag}</span>
                  </div>

                  {/* Big number watermark */}
                  <div style={{ position: "absolute", bottom: 10, right: 14, fontFamily: "var(--font-bricolage,sans-serif)", fontSize: 52, fontWeight: 900, color: "#fff", opacity: 0.13, lineHeight: 1, letterSpacing: "-4px", userSelect: "none" }}>
                    {evt.num}
                  </div>
                </div>

                {/* ── BODY ── */}
                <div style={{ padding: "1.6rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "var(--font-bricolage,sans-serif)", fontSize: 18, fontWeight: 700, color: "var(--text)", lineHeight: 1.25, marginBottom: "1.1rem", letterSpacing: "-0.02em" }}>
                    {evt.title}
                  </h3>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9, marginBottom: "1.4rem", flex: 1 }}>
                    {evt.points.map(p => (
                      <li key={p} style={{ fontSize: 13.5, color: "var(--muted)", paddingLeft: 18, position: "relative", lineHeight: 1.55 }}>
                        <span style={{ position: "absolute", left: 0, color: "var(--green)", fontWeight: 600, fontSize: 12 }}>→</span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  {/* ── SPEAKER ── */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: "1.1rem", borderTop: "1px solid var(--border2)", marginTop: "auto" }}>
                    {/* Speaker photo */}
                    <div style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", border: "2px solid var(--border)", position: "relative", flexShrink: 0, background: "var(--green-light)" }}>
                      {evt.speakerSrc ? (
                        <Image src={evt.speakerSrc} alt={evt.speaker.name} fill style={{ objectFit: "cover" }} sizes="44px" />
                      ) : (
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-bricolage,sans-serif)", fontWeight: 800, fontSize: 14, color: "var(--green)" }}>
                          {evt.speaker.initials}
                        </div>
                      )}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", lineHeight: 1.2 }}>{evt.speaker.name}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{evt.speaker.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        .ev-g { grid-template-columns: repeat(3,1fr) !important; }
        @media(max-width:900px){ .ev-g { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}