"use client";
import { motion } from "framer-motion";
import { FadeUp, stagger, fadeItem, SecLabel, SecTitle, Hl } from "@/components/ui/primitives";

function PeopleIcon() {
  return (
    <svg
      width="20"
      height="20"
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
function GradIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
function BriefIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

const PILLARS = [
  {
    c: "green",
    title: "Entraide professionnelle",
    desc: "Un réseau de solidarité où chaque membre trouve aide, conseil et soutien dans ses démarches professionnelles en Europe.",
    Icon: PeopleIcon,
  },
  {
    c: "green",
    title: "Mentorat",
    desc: "Connexion avec des seniors confirmés pour guider les parcours et accélérer les progressions de carrière dans la tech.",
    Icon: GradIcon,
  },
  {
    c: "yellow",
    title: "Collaborations",
    desc: "Création de ponts entre talents complémentaires pour nourrir des projets ambitieux entre l'Europe et le Cameroun.",
    Icon: LinkIcon,
  },
  {
    c: "yellow",
    title: "Événements exclusifs",
    desc: "Conférences, workshops et rencontres de haut niveau pensés pour et par la communauté tech africaine en Europe.",
    Icon: BoltIcon,
  },
  {
    c: "green",
    title: "Ressources utiles",
    desc: "Partage d'offres, de ressources et de connaissances pour faciliter l'insertion et la montée en compétences.",
    Icon: BookIcon,
  },
  {
    c: "red",
    title: "Business & Talents",
    desc: "Valorisation des freelances, entrepreneurs et projets camerounais pour créer une économie communautaire forte.",
    Icon: BriefIcon,
  },
];

const IC: Record<string, { bg: string; color: string }> = {
  green: { bg: "var(--green-light)", color: "var(--green)" },
  yellow: { bg: "var(--yellow-light)", color: "var(--yellow)" },
  red: { bg: "var(--red-dim)", color: "var(--red)" },
};

export default function Mission() {
  return (
    <section id="mission" style={{ background: "var(--bg)", padding: "7rem 0" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 1.75rem" }}>
        <FadeUp>
          <SecLabel>Notre mission</SecLabel>
          <SecTitle>
            Six piliers pour <Hl>construire l&apos;impact.</Hl>
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
            Une communauté structurée autour des besoins réels des professionnels tech de la
            diaspora camerounaise.
          </p>
        </FadeUp>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="pillars-g"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 18,
            marginTop: "3rem",
          }}
        >
          {PILLARS.map((p) => {
            const ic = IC[p.c];
            return (
              <motion.div key={p.title} variants={fadeItem}>
                <div
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border2)",
                    borderRadius: 20,
                    boxShadow: "var(--sh)",
                    padding: "1.9rem",
                    position: "relative",
                    overflow: "hidden",
                    transition: "box-shadow .3s, border-color .3s, transform .25s",
                    height: "100%",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "var(--sh-lg)";
                    el.style.borderColor = "var(--border)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "var(--sh)";
                    el.style.borderColor = "var(--border2)";
                    el.style.transform = "";
                  }}
                >
                  {/* Hover glow overlay */}
                  <div
                    className="p-glow"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 20,
                      background: "linear-gradient(135deg, var(--green-dim), transparent 60%)",
                      opacity: 0,
                      transition: "opacity .3s",
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: ic.bg,
                      color: ic.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.1rem",
                    }}
                  >
                    <p.Icon />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-bricolage,sans-serif)",
                      fontSize: 17,
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: "0.6rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <style>{`
        .pillars-g { grid-template-columns: repeat(3,1fr) !important; }
        @media(max-width:900px){ .pillars-g { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:560px){ .pillars-g { grid-template-columns: 1fr !important; } }
        div:hover .p-glow { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
