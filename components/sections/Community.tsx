"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeUp, stagger, fadeItem, SecLabel, SecTitle, Hl, Btn } from "@/components/ui/primitives";

/* ─── TÉMOIGNAGES ─── */
const TESTIMONIALS = [
  {
    quote:
      "Grâce à Camer'Tech Europe, j'ai trouvé mon premier CDI à Paris en moins de 3 semaines. Le réseau est d'une densité rare — les membres se soutiennent vraiment.",
    name: "Aristide M.",
    role: "Développeur Full Stack",
    company: "Paris",
    initials: "AM",
    src: null as string | null,
    path: "/images/community/aristide-m.jpg",
  },
  {
    quote:
      "Le workshop sur les entretiens m'a transformée. J'ai décroché deux offres d'alternance dans des entreprises tech de premier plan en moins d'un mois.",
    name: "Sandra N.",
    role: "Data Engineer",
    company: "Lyon",
    initials: "SN",
    src: null as string | null,
    path: "/images/community/sandra-n.jpg",
  },
  {
    quote:
      "CamerTech Connect a été un tournant. Un collaborateur, des early adopters et un premier client — tout ça le même jour. Aucune autre communauté n'offre ça.",
    name: "Kevin F.",
    role: "Entrepreneur Tech",
    company: "Berlin",
    initials: "KF",
    src: null as string | null,
    path: "/images/community/kevin-f.jpg",
  },
];

/* ─── MEMBRES EN VEDETTE ─── */
const MEMBERS = [
  {
    name: "Edson K.",
    role: "DataOps Engineer",
    loc: "Paris",
    initials: "EK",
    src: "/images/community/member-1.jpg",
    path: "/images/community/member-1.jpg",
  },
  {
    name: "Paul A.",
    role: "DevOps · AWS",
    loc: "Amsterdam",
    initials: "PA",
    src: null as string | null,
    path: "/images/community/member-2.jpg",
  },
  {
    name: "Inès K.",
    role: "Data Scientist",
    loc: "Paris",
    initials: "IK",
    src: null as string | null,
    path: "/images/community/member-3.jpg",
  },
  {
    name: "Boris N.",
    role: "Cybersécurité",
    loc: "Bruxelles",
    initials: "BN",
    src: null as string | null,
    path: "/images/community/member-4.jpg",
  },
  {
    name: "Claire M.",
    role: "Product Manager",
    loc: "Londres",
    initials: "CM",
    src: null as string | null,
    path: "/images/community/member-5.jpg",
  },
  {
    name: "Jules B.",
    role: "Backend Freelance",
    loc: "Zurich",
    initials: "JB",
    src: null as string | null,
    path: "/images/community/member-6.jpg",
  },
  {
    name: "Diane E.",
    role: "ML Engineer",
    loc: "Paris",
    initials: "DE",
    src: null as string | null,
    path: "/images/community/member-7.jpg",
  },
  {
    name: "Marc O.",
    role: "Mobile Developer",
    loc: "Lyon",
    initials: "MO",
    src: null as string | null,
    path: "/images/community/member-8.jpg",
  },
];

/* ─── PHOTO GROUPE ─── */
const GROUP_PHOTO: string | null = "/images/community/photo-groupe.jpg"; // "/images/community/photo-groupe.jpg"

export default function Community() {
  return (
    <section
      id="community"
      style={{
        background: "var(--bg)",
        padding: "7rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: -100,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(15,143,91,0.04), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 1.75rem" }}>
        {/* ── HEADER ── */}
        <FadeUp>
          <SecLabel>Communauté</SecLabel>
          <SecTitle>
            Des talents qui <Hl>inspirent.</Hl>
          </SecTitle>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 16,
              lineHeight: 1.72,
              maxWidth: 520,
              marginTop: "0.85rem",
            }}
          >
            Étudiants, ingénieurs, entrepreneurs, designers — une communauté unie autour d&apos;une
            même ambition : construire l&apos;impact.
          </p>
        </FadeUp>

        {/* ── PHOTO DE GROUPE ── */}
        <FadeUp style={{ marginTop: "3.5rem", marginBottom: "3.5rem" }}>
          <div
            style={{
              width: "100%",
              borderRadius: 22,
              overflow: "hidden",
              border: "1px solid var(--border2)",
              position: "relative",
              aspectRatio: "21/8",
              background: "var(--bg2)",
            }}
          >
            {GROUP_PHOTO ? (
              <>
                <Image
                  src={GROUP_PHOTO}
                  alt="Communauté Camer'Tech Europe"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="100vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, rgba(15,143,91,0.15), transparent 40%)",
                  }}
                />
              </>
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  color: "var(--faint)",
                  fontSize: 13,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "repeating-linear-gradient(-45deg,transparent,transparent 12px,rgba(15,143,91,0.025) 12px,rgba(15,143,91,0.025) 13px)",
                  }}
                />
                <svg
                  width="36"
                  height="36"
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
                <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  Photo de groupe CamerTech Europe
                  <br />
                  <code style={{ fontSize: 10 }}>/images/community/photo-groupe.jpg</code>
                </div>
              </div>
            )}

            {/* Floating badge sur la photo */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 24,
                background: "rgba(8,12,9,0.75)",
                backdropFilter: "blur(12px)",
                borderRadius: 12,
                padding: "0.75rem 1.1rem",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-bricolage,sans-serif)",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "#fff",
                  letterSpacing: "-0.04em",
                }}
              >
                350+
              </span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginLeft: 8 }}>
                membres actifs
              </span>
            </div>
          </div>
        </FadeUp>

        {/* ── TÉMOIGNAGES ── */}
        <FadeUp style={{ marginBottom: "1.5rem" }}>
          <SecLabel>Témoignages</SecLabel>
          <SecTitle md>
            Ce qu&apos;ils <Hl>en disent.</Hl>
          </SecTitle>
        </FadeUp>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="testi-g"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 18,
            marginBottom: "5rem",
          }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={fadeItem}>
              <TestiCard {...t} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── MEMBRES ── */}
        <FadeUp style={{ marginBottom: "1.75rem" }}>
          <SecLabel>Portraits</SecLabel>
          <SecTitle md>
            Quelques <Hl>visages.</Hl>
          </SecTitle>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 15,
              lineHeight: 1.7,
              maxWidth: 480,
              marginTop: "0.75rem",
            }}
          >
            Des profils variés, une ambition commune.
          </p>
        </FadeUp>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="members-g"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8,1fr)",
            gap: 14,
            marginBottom: "4rem",
          }}
        >
          {MEMBERS.map((m) => (
            <motion.div key={m.name} variants={fadeItem}>
              <MemberCard {...m} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA STRIP ── */}
        <FadeUp>
          <div
            style={{
              borderRadius: 22,
              background: "var(--green)",
              padding: "3rem 3.5rem",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: "2.5rem",
              position: "relative",
              overflow: "hidden",
            }}
            className="cta-strip-g"
          >
            {/* Decorative circles */}
            <div
              style={{
                position: "absolute",
                right: -60,
                top: -60,
                width: 260,
                height: 260,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 80,
                bottom: -80,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.03)",
                pointerEvents: "none",
              }}
            />
            {/* Yellow dot accent */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--yellow)",
                opacity: 0.7,
              }}
            />

            <div style={{ position: "relative" }}>
              <div
                style={{
                  fontFamily: "var(--font-bricolage,sans-serif)",
                  fontSize: "clamp(1.3rem,2.5vw,1.9rem)",
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  marginBottom: "0.6rem",
                }}
              >
                Rejoignez 350+ membres actifs.
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.6,
                  maxWidth: 460,
                }}
              >
                Étudiants, développeurs, freelances, entrepreneurs — la communauté vous attend.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Btn href="/#join" variant="white">
                Rejoindre la communauté
              </Btn>
              <Btn href="/#events" variant="ghost" size="sm">
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>
                  Voir les événements →
                </span>
              </Btn>
            </div>
          </div>
        </FadeUp>
      </div>

      <style>{`
        .testi-g { grid-template-columns: repeat(3,1fr) !important; }
        .members-g { grid-template-columns: repeat(8,1fr) !important; }
        .cta-strip-g { grid-template-columns: 1fr auto !important; }
        @media(max-width:1000px){ .members-g { grid-template-columns: repeat(4,1fr) !important; } }
        @media(max-width:768px){ .testi-g { grid-template-columns: 1fr !important; } .members-g { grid-template-columns: repeat(4,1fr) !important; } .cta-strip-g { grid-template-columns: 1fr !important; } }
        @media(max-width:560px){ .members-g { grid-template-columns: repeat(3,1fr) !important; } }
        .testi-card-quote { opacity: 0.2; }
        .member-card-img { transition: transform .3s ease; }
        .member-card:hover .member-card-img { transform: scale(1.06); }
      `}</style>
    </section>
  );
}

/* ── Testimonial card ── */
function TestiCard({ quote, name, role, company, initials, src, path }: (typeof TESTIMONIALS)[0]) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border2)",
        borderRadius: 20,
        padding: "1.9rem",
        display: "flex",
        flexDirection: "column",
        transition: "all .3s",
        cursor: "default",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "var(--sh-lg)";
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "none";
        el.style.borderColor = "var(--border2)";
        el.style.transform = "";
      }}
    >
      {/* Quote icon */}
      <svg
        className="testi-card-quote"
        width="32"
        height="24"
        viewBox="0 0 32 24"
        fill="var(--green)"
        style={{ marginBottom: "1rem", flexShrink: 0 }}
      >
        <path d="M0 24V14.4C0 6.56 4.24 1.68 12.72 0L14.4 2.64C10.32 3.6 8.0 5.96 7.2 9.6H13.2V24H0ZM18.8 24V14.4C18.8 6.56 23.04 1.68 31.52 0L33.2 2.64C29.12 3.6 26.8 5.96 26 9.6H32V24H18.8Z" />
      </svg>

      <p
        style={{
          fontSize: 15,
          color: "var(--text)",
          lineHeight: 1.75,
          flex: 1,
          marginBottom: "1.5rem",
        }}
      >
        {quote}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          paddingTop: "1.25rem",
          borderTop: "1px solid var(--border2)",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
            border: "2px solid var(--border)",
            flexShrink: 0,
            background: "var(--green-light)",
          }}
        >
          {src ? (
            <Image src={src} alt={name} fill style={{ objectFit: "cover" }} sizes="46px" />
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
                fontSize: 15,
                color: "var(--green)",
              }}
            >
              {initials}
            </div>
          )}
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-bricolage,sans-serif)",
              fontSize: 14,
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.01em",
            }}
          >
            {name}
          </div>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>
            {role} · {company}
          </div>
        </div>
        {/* Stars */}
        <div style={{ marginLeft: "auto", display: "flex", gap: 2 }}>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="var(--yellow)"
              stroke="none"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Member card ── */
function MemberCard({ name, role, loc, initials, src, path }: (typeof MEMBERS)[0]) {
  return (
    <div
      className="member-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        cursor: "default",
        textAlign: "center",
      }}
    >
      {/* Photo */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1/1",
          borderRadius: 16,
          overflow: "hidden",
          position: "relative",
          background: "var(--green-light)",
          marginBottom: "0.75rem",
          border: "1.5px solid var(--border2)",
        }}
      >
        {src ? (
          <Image
            src={src}
            alt={name}
            fill
            className="member-card-img"
            style={{ objectFit: "cover" }}
            sizes="120px"
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
              fontSize: "clamp(14px,2vw,20px)",
              color: "var(--green)",
            }}
          >
            {initials}
          </div>
        )}
        {/* Hover overlay */}
        <div
          className="member-card-img"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(15,143,91,0.35), transparent 50%)",
            opacity: 0,
            transition: "opacity .3s",
          }}
        />
      </div>
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "var(--text)",
          letterSpacing: "-0.01em",
          lineHeight: 1.2,
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: 11.5, color: "var(--green)", marginTop: 2 }}>{role}</div>
      <div style={{ fontSize: 11, color: "var(--faint)", marginTop: 1 }}>{loc}</div>
    </div>
  );
}
