"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FadeUp,
  stagger,
  fadeItem,
  SecLabel,
  SecTitle,
  Hl,
  Btn,
  Card,
} from "@/components/ui/primitives";

const SPEAKERS = [
  {
    initials: "AA",
    name: "Armand Claude Abanda",
    role: "Titulaire de la chaire UNESCO accés TIC",
    co: "Representant Résident IAI-Cameroun ",
    bio: "",
    c: "green",
    src: "/images/speakers/rep.jpg",
    path: "/images/speakers/rep.jpg",
  },
  {
    initials: "WE",
    name: "William Elong",
    role: "Forbes Top 30 Africa",
    co: "Entrepreneur · IA & Cybersécurité",
    bio: "Créateur du premier drone civil camerounais.",
    c: "green",
    src: "/images/speakers/william-elong.jpg",
    path: "/images/speakers/william-elong.jpg",
  },
  {
    initials: "RE",
    name: "SRichard-Nadine Etoundi",
    role: "Directrice",
    co: "programme talents",
    bio: "Groupe Orange",
    c: "yellow",
    src: "/images/speakers/nadine.jpg",
    path: "/images/speakers/nadine.jpg",
  },
  {
    initials: "SN",
    name: "Steve Nouyep",
    role: "Expert Data",
    co: "Cybersécurité",
    bio: "Spécialiste détection de menaces par la data.",
    c: "green",
    src: "/images/speakers/steve-nouyep.jpg" as string | null,
    path: "/images/speakers/steve-nouyep.jpg",
  },
  {
    initials: "SE",
    name: "Steve Elanga",
    role: "Data Engineer",
    co: "Senior",
    bio: "Lead",
    c: "yellow",
    src: "/images/speakers/elanga.jpg",
    path: "/images/speakers/elanga.jpg",
  },
];

// Gallery — set src when images are available
const GALLERY: { src: string | null; path: string; alt: string }[] = [
  { src: "/images/connect/01.jpg", path: "/images/connect/01.jpg", alt: "Conférence CTC" },
  { src: "/images/connect/02.jpg", path: "/images/connect/02.jpg", alt: "Networking" },
  { src: "/images/connect/03.jpg", path: "/images/connect/03.jpg", alt: "Speakers" },
  { src: "/images/connect/04.jpg", path: "/images/connect/04.jpg", alt: "Salle" },
  { src: "/images/connect/05.jpg", path: "/images/connect/05.jpg", alt: "Participants" },
  { src: "/images/connect/06.jpg", path: "/images/connect/06.jpg", alt: "Afterwork" },
];
const HERO_GAL: string | null = "/images/connect/hero-galerie.jpg"; // "/images/connect/hero-galerie.jpg"

const PROG = [
  { time: "09h00", title: "Accueil & Networking", type: "Networking", c: "muted" },
  {
    time: "10h00",
    title: "Ouverture officielle — La diaspora tech aujourd'hui",
    type: "Conférence",
    c: "green",
  },
  {
    time: "11h00",
    title: "William Elong — IA, Innovation & Entrepreneuriat",
    type: "Keynote",
    c: "green",
  },
  { time: "12h30", title: "Déjeuner networking", type: "Pause", c: "muted" },
  {
    time: "14h00",
    title: "Steve Nouyep — La data au cœur de la cybersécurité",
    type: "Masterclass",
    c: "yellow",
  },
  {
    time: "15h30",
    title: "Table ronde — Opportunités & Carrières tech en EU",
    type: "Panel",
    c: "green",
  },
  {
    time: "17h00",
    title: "CV Review & Mentorat — Sessions individuelles",
    type: "Atelier",
    c: "yellow",
  },
  { time: "18h30", title: "Présentation de projets communautaires", type: "Pitch", c: "red" },
  { time: "19h30", title: "Afterwork & Networking libre", type: "Networking", c: "muted" },
];

const PTAG: Record<string, React.CSSProperties> = {
  green: { color: "var(--green)", background: "var(--green-light)" },
  yellow: { color: "var(--yellow)", background: "var(--yellow-light)" },
  red: { color: "var(--red)", background: "var(--red-dim)" },
  muted: { color: "var(--muted)", background: "var(--bg3)" },
};

const FEATS = [
  { label: "Conférences", c: "var(--green)", Icon: <MicI /> },
  { label: "Networking", c: "var(--yellow)", Icon: <NetI /> },
  { label: "CV Review", c: "var(--green)", Icon: <DocI /> },
  { label: "Mentorat", c: "var(--yellow)", Icon: <StarI /> },
  { label: "Pitches", c: "var(--red)", Icon: <LightI /> },
  { label: "Aftermovie", c: "var(--green)", Icon: <VideoI /> },
];

export default function CamertechConnect() {
  return (
    <section
      id="connect"
      style={{
        background: "var(--bg)",
        padding: "7rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -280,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 700,
          background: "radial-gradient(circle,rgba(15,143,91,0.05),transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          right: -80,
          width: 500,
          height: 500,
          background: "radial-gradient(circle,rgba(200,154,42,0.04),transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 1.75rem", position: "relative" }}>
        {/* ── HERO ── */}
        <FadeUp style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--green-light)",
              border: "1px solid var(--border)",
              borderRadius: 100,
              padding: "6px 18px",
              fontSize: 13,
              color: "var(--green)",
              fontWeight: 500,
              marginBottom: "1.75rem",
            }}
          >
            Événement principal de la communauté
          </div>
          <h2
            style={{
              fontFamily: "var(--font-bricolage,sans-serif)",
              fontSize: "clamp(2.5rem,6vw,5rem)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.04,
              color: "var(--text)",
              marginBottom: "1rem",
            }}
          >
            Camer<span style={{ color: "var(--green)" }}>Tech</span> Connect
          </h2>
          <p
            style={{
              fontSize: "clamp(15px,1.5vw,17px)",
              color: "var(--muted)",
              fontStyle: "italic",
              maxWidth: 560,
              margin: "0 auto 0.75rem",
              lineHeight: 1.65,
            }}
          >
            &ldquo;La diaspora camerounaise dans la tech : opportunités, parcours et impact.&rdquo;
          </p>
          <p style={{ fontSize: 13.5, color: "var(--faint)", marginBottom: "2rem" }}>
            Paris · Édition annuelle
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Btn href="/#join" variant="primary">
              S&apos;inscrire à la prochaine édition
            </Btn>
            <Btn href="#galerie-ctc" variant="outline">
              Voir la galerie
            </Btn>
          </div>
        </FadeUp>

        {/* ── CHIFFRES CLÉS ── */}
        <FadeUp>
          <div
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border2)",
              borderRadius: 22,
              padding: "2.75rem 3rem",
              marginBottom: "5rem",
              display: "flex",
              justifyContent: "center",
              gap: "5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { n: "150", l: "Participants" },
              { n: "8+", l: "Speakers" },
              { n: "6", l: "Contrats signés" },
              { n: "Paris", l: "Lieu" },
            ].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-bricolage,sans-serif)",
                    fontSize: "clamp(2rem,4vw,3rem)",
                    fontWeight: 800,
                    color: "var(--green)",
                    letterSpacing: "-0.04em",
                    display: "block",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </span>
                <span
                  style={{ fontSize: 13, color: "var(--muted)", marginTop: 7, display: "block" }}
                >
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* ── GALERIE ── */}
        <div id="galerie-ctc" style={{ marginBottom: "5rem" }}>
          <FadeUp style={{ marginBottom: "1.75rem" }}>
            <SecLabel>Galerie</SecLabel>
            <SecTitle md>
              Une journée <Hl>qui marque.</Hl>
            </SecTitle>
          </FadeUp>

          {/* Grande image d'ambiance */}
          <FadeUp style={{ marginBottom: 14 }}>
            <div
              style={{
                borderRadius: 22,
                overflow: "hidden",
                border: "1px solid var(--border2)",
                position: "relative",
                aspectRatio: "21/8",
                background: "var(--bg2)",
              }}
            >
              {HERO_GAL ? (
                <Image
                  src={HERO_GAL}
                  alt="CamerTech Connect"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="100vw"
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    color: "var(--faint)",
                    fontSize: 12,
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
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    style={{ position: "relative", zIndex: 1, opacity: 0.4 }}
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                    Grande photo d&apos;ambiance
                    <br />
                    <code style={{ fontSize: 10 }}>/images/connect/hero-galerie.jpg</code>
                  </span>
                </div>
              )}
            </div>
          </FadeUp>

          {/* Grille 6 photos */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="gal-g"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}
          >
            {GALLERY.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeItem}
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  position: "relative",
                  background: "var(--bg3)",
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
              >
                {img.src ? (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width:768px) 100vw, 360px"
                  />
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      color: "var(--faint)",
                      fontSize: 11,
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
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      style={{ position: "relative", zIndex: 1, opacity: 0.4 }}
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <code style={{ position: "relative", zIndex: 1, fontSize: 9 }}>{img.path}</code>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── SPEAKERS ── */}
        <div style={{ marginBottom: "5rem" }}>
          <FadeUp style={{ marginBottom: "1.75rem" }}>
            <SecLabel>Speakers</SecLabel>
            <SecTitle md>
              Des voix <Hl>qui inspirent.</Hl>
            </SecTitle>
          </FadeUp>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="sp-g"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}
          >
            {SPEAKERS.map((s) => (
              <motion.div key={s.name} variants={fadeItem}>
                <Card padding="1.75rem" style={{ textAlign: "center", height: "100%" }}>
                  {/* Photo 1:1 */}
                  <div
                    style={{
                      width: 88,
                      height: 88,
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: `2.5px solid var(--border)`,
                      position: "relative",
                      margin: "0 auto 1rem",
                      background: s.c === "yellow" ? "var(--yellow-light)" : "var(--green-light)",
                    }}
                  >
                    {s.src ? (
                      <Image
                        src={s.src}
                        alt={s.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="88px"
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-bricolage,sans-serif)",
                          fontWeight: 800,
                          fontSize: 24,
                          color: s.c === "yellow" ? "var(--yellow)" : "var(--green)",
                        }}
                      >
                        {s.initials}
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-bricolage,sans-serif)",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--text)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: s.c === "yellow" ? "var(--yellow)" : "var(--green)",
                      margin: "4px 0 2px",
                      fontWeight: 500,
                    }}
                  >
                    {s.role}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 10 }}>
                    {s.co}
                  </div>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{s.bio}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── PROGRAMME ── */}
        <div style={{ marginBottom: "5rem" }}>
          <FadeUp style={{ marginBottom: "1.75rem" }}>
            <SecLabel>Programme</SecLabel>
            <SecTitle md>
              Une journée <Hl>dense.</Hl>
            </SecTitle>
          </FadeUp>
          <Card hover={false} padding="0" style={{ overflow: "hidden" }}>
            {PROG.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  gap: "1rem",
                  alignItems: "center",
                  padding: "1rem 1.4rem",
                  borderBottom: i < PROG.length - 1 ? "1px solid var(--border2)" : "none",
                  opacity: row.c === "muted" ? 0.65 : 1,
                  transition: "background .15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background = "var(--bg2)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background = "transparent")
                }
              >
                <span
                  style={{
                    fontFamily: "var(--font-bricolage,sans-serif)",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "var(--text)",
                  }}
                >
                  {row.time}
                </span>
                <span style={{ fontSize: 15, color: "var(--text)" }}>{row.title}</span>
                <span
                  style={{
                    fontSize: 11.5,
                    fontWeight: 600,
                    borderRadius: 100,
                    padding: "3px 11px",
                    whiteSpace: "nowrap",
                    ...PTAG[row.c],
                  }}
                >
                  {row.type}
                </span>
              </motion.div>
            ))}
          </Card>
        </div>

        {/* ── AFTERMOVIE ── */}
        <div style={{ marginBottom: "5rem" }}>
          <FadeUp style={{ marginBottom: "1.75rem" }}>
            <SecLabel>Aftermovie</SecLabel>
            <SecTitle md>
              Revivez <Hl>l&apos;événement.</Hl>
            </SecTitle>
          </FadeUp>
          <FadeUp>
            {/*
              Une fois la vidéo disponible, remplacer ce bloc par :
              <div style={{ position:"relative", paddingBottom:"56.25%", borderRadius:22, overflow:"hidden" }}>
                <iframe src="https://drive.google.com/file/d/1cOYKYoLrnt3jMIJRnp9V-vfQ8AuK3DKw/view?usp=sharing"
                  style={{ position:"absolute", inset:0, width:"100%", height:"100%", border:"none" }} allowFullScreen />
              </div>
            */}

            <div
              style={{
                borderRadius: 22,
                overflow: "hidden",
                border: "1px solid var(--border2)",
                background: "var(--bg2)",
                aspectRatio: "16/9",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                color: "var(--faint)",
                fontSize: 13,
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "var(--green-light)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--green)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div style={{ textAlign: "center" }}>
                Aftermovie CamerTech Connect
                <br />
                <code style={{ fontSize: 11 }}>iframe YouTube / Vimeo</code>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* ── FEATURES ── */}
        <FadeUp style={{ marginBottom: "1.75rem" }}>
          <SecLabel>Au programme</SecLabel>
          <SecTitle md>
            Bien plus qu&apos;<Hl>une conférence.</Hl>
          </SecTitle>
        </FadeUp>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="feat-g"
          style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 12 }}
        >
          {FEATS.map((f) => (
            <motion.div key={f.label} variants={fadeItem}>
              <div
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border2)",
                  borderRadius: 14,
                  padding: "1.35rem 1rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  transition: "all .3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "var(--sh-md)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--border2)";
                  el.style.transform = "";
                  el.style.boxShadow = "none";
                }}
              >
                <span style={{ color: f.c }}>{f.Icon}</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text)" }}>
                  {f.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .gal-g  { grid-template-columns: repeat(3,1fr) !important; }
        .sp-g   { grid-template-columns: repeat(4,1fr) !important; }
        .feat-g { grid-template-columns: repeat(6,1fr) !important; }
        @media(max-width:900px){ .gal-g{ grid-template-columns:repeat(2,1fr)!important; } .sp-g{ grid-template-columns:repeat(2,1fr)!important; } .feat-g{ grid-template-columns:repeat(3,1fr)!important; } }
        @media(max-width:560px){ .gal-g{ grid-template-columns:1fr!important; } .feat-g{ grid-template-columns:repeat(2,1fr)!important; } }
      `}</style>
    </section>
  );
}

function MicI() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}
function NetI() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function DocI() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
function StarI() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function LightI() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  );
}
function VideoI() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}
