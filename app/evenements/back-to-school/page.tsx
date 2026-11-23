import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, MapPin, Ticket, Phone, Compass, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Back to School 2026 (Paris & Lyon) — Camer'Tech Europe",
  description:
    "Nouveau en France ? Rejoins le Back to School de Camer'Tech Europe le samedi 24 octobre 2026 à Paris et Lyon. Balade urbaine, rencontres, bons plans et bowling en option.",
  openGraph: {
    title: "Back to School 2026 — Paris & Lyon | Camer'Tech Europe",
    description:
      "Bienvenue en France ! Balade, rencontres, partage de bons plans et bowling pour étudiants et jeunes professionnels.",
    url: "https://camertech-europe.com/evenements/back-to-school",
  },
};

const BTS_POSTERS = [
  {
    src: "/images/events/bts-affiche-1.svg",
    title: "Affiche Principale — Bienvenue en France !",
    subtitle: "Paris & Lyon · Samedi 24 Octobre 2026",
  },
  {
    src: "/images/events/bts-affiche-2.svg",
    title: "Nouveau en France ? Rejoins la communauté",
    subtitle: "Checklist d'intégration & parrainage",
  },
  {
    src: "/images/events/bts-affiche-3.svg",
    title: "Au Programme : Balade, Bons plans & Bowling",
    subtitle: "Déroulement complet de la journée",
  },
  {
    src: "/images/events/affiche-back-to-school.jpg",
    title: "La Communauté Camer'Tech Réunie",
    subtitle: "Moments d'échanges et convivialité",
  },
];

export default function BackToSchoolPage() {
  return (
    <div style={{ paddingTop: "5.5rem" }}>
      {/* Fil d'Ariane sobre */}
      <div className="ct" style={{ padding: "1.25rem 2rem 0", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        <Link
          href="/evenements"
          className="btn btn-o"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "0.45rem 0.9rem" }}
        >
          <ArrowLeft size={15} /> Retour aux événements
        </Link>
        <span style={{ fontSize: 13, color: "var(--muted)" }}>/ Back to School 2026</span>
      </div>

      {/* Hero de l'événement */}
      <section style={{ padding: "2.5rem 2rem 4rem" }}>
        <div className="ct">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div className="rev">
              <div className="label">Accueil &amp; Intégration 2026</div>

              <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem", color: "var(--text)" }}>
                Back to School <span className="g">Camer&apos;Tech</span>
              </h1>

              <p style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)", fontWeight: 700, color: "var(--yellow)", marginBottom: "1.25rem", lineHeight: 1.4 }}>
                Bienvenue en France ! Nouveau pays, nouvelle ville, nouveaux repères… et bientôt de nouvelles rencontres !
              </p>

              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--muted)", marginBottom: "2rem" }}>
                Tu viens d&apos;arriver en France pour tes études ou ton premier job ? Tu es déjà installé et tu souhaites élargir ton réseau professionnel et amical ? Rejoins la communauté Camer&apos;Tech Europe le <strong>samedi 24 octobre 2026</strong> en simultané à <strong>Paris</strong> et à <strong>Lyon</strong>.
              </p>

              {/* Repères pratiques sobres */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2rem", fontSize: 14.5, color: "var(--muted)" }}>
                <span><strong style={{ color: "var(--text)" }}>Date :</strong> Samedi 24 Octobre 2026</span>
                <span><strong style={{ color: "var(--text)" }}>Villes :</strong> Paris &amp; Lyon</span>
                <span><strong style={{ color: "var(--text)" }}>Formule :</strong> Balade gratuite · Bowling en option</span>
              </div>

              {/* Bouton de réservation officiel */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="https://linktr.ee/CamerTechEurope"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-p"
                  style={{ fontSize: 14.5, padding: "0.85rem 1.6rem", display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                  Choisir ma ville et réserver ma place <ExternalLink size={16} />
                </a>
                <a
                  href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-o"
                  style={{ fontSize: 14, padding: "0.85rem 1.4rem" }}
                >
                  Poser une question sur WhatsApp
                </a>
              </div>
            </div>

            {/* Affiche principale */}
            <div className="rev">
              <div
                className="card"
                style={{
                  position: "relative",
                  borderRadius: "var(--rl)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                  aspectRatio: "4/5",
                  maxHeight: "540px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src="/images/events/bts-affiche-1.svg"
                  alt="Affiche Officielle Back to School Camer'Tech Europe à Paris et Lyon"
                  fill
                  style={{ objectFit: "contain", background: "#0a5234" }}
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie des Affiches et Visuels Officiels */}
      <section style={{ padding: "4rem 2rem", background: "var(--bg2)", borderTop: "1px solid var(--border2)", borderBottom: "1px solid var(--border2)" }}>
        <div className="ct">
          <div className="rev" style={{ maxWidth: 640, marginBottom: "2.5rem" }}>
            <div className="label">Supports officiels</div>
            <h2 className="sec">Les visuels de <span className="g">l&apos;édition 2026.</span></h2>
            <p className="desc">
              Retrouvez l&apos;ensemble des affiches et supports partagés pour l&apos;accueil des nouveaux arrivants à Paris et Lyon.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {BTS_POSTERS.map((poster, i) => (
              <div key={i} className="card rev" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", background: "var(--bg)" }}>
                  <Image
                    src={poster.src}
                    alt={poster.title}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>
                    {poster.title}
                  </div>
                  <div style={{ fontSize: 12.5, color: "var(--muted)" }}>
                    {poster.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme détaillé */}
      <section style={{ padding: "4rem 2rem" }}>
        <div className="ct">
          <div className="rev" style={{ maxWidth: 700, marginBottom: "2.5rem" }}>
            <div className="label">Au programme</div>
            <h2 className="sec">Tout pour réussir votre <span className="g">installation en France.</span></h2>
            <p className="desc">
              Une journée pensée pour briser l&apos;isolement, obtenir les bonnes clés et tisser des liens durables avec des pairs bienveillants.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <div className="card rev" style={{ padding: "1.75rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(10, 155, 94, 0.12)", color: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                <MapPin size={22} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: "0.5rem", color: "var(--text)" }}>
                1. Balade urbaine découverte
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                Promenade guidée et conviviale au cœur de Paris et de Lyon pour apprécier les quartiers emblématiques et faire connaissance pas à pas.
              </p>
              <div style={{ marginTop: "1rem", fontSize: 12.5, fontWeight: 700, color: "var(--green)" }}>
                Gratuit sur inscription
              </div>
            </div>

            <div className="card rev" style={{ padding: "1.75rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(245, 166, 35, 0.12)", color: "var(--yellow)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                <Compass size={22} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: "0.5rem", color: "var(--text)" }}>
                2. Partage de bons plans
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                Conseils pratiques indispensables : transports, démarches administratives, recherche de logement, astuces étudiantes et repères essentiels.
              </p>
              <div style={{ marginTop: "1rem", fontSize: 12.5, fontWeight: 700, color: "var(--yellow)" }}>
                Retours d&apos;expérience réels
              </div>
            </div>

            <div className="card rev" style={{ padding: "1.75rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(10, 155, 94, 0.12)", color: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                <Users size={22} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: "0.5rem", color: "var(--text)" }}>
                3. Networking &amp; Parrainage
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                Échanges directs avec des ingénieurs, consultants et développeurs de la communauté pour amorcer son réseau et poser toutes ses questions.
              </p>
              <div style={{ marginTop: "1rem", fontSize: 12.5, fontWeight: 700, color: "var(--green)" }}>
                Connexion communauté
              </div>
            </div>

            <div className="card rev" style={{ padding: "1.75rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(224, 43, 32, 0.12)", color: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                <Ticket size={22} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: "0.5rem", color: "var(--text)" }}>
                4. Soirée Bowling en option
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                Pour ceux qui souhaitent prolonger le moment, session de bowling festive avec musique et défis amicaux pour finir la journée en beauté.
              </p>
              <div style={{ marginTop: "1rem", fontSize: 12.5, fontWeight: 700, color: "var(--red)" }}>
                Option avec billet payant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques, Partenaires & Contact */}
      <section style={{ padding: "2rem 2rem 6rem" }}>
        <div className="ct">
          <div className="card rev" style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: 840, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <div>
                <div className="label" style={{ marginBottom: 4 }}>Informations &amp; Organisation</div>
                <h3 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 800, margin: 0, color: "var(--text)" }}>
                  Infoline &amp; Partenaires de l&apos;événement
                </h3>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "var(--muted)" }}>En partenariat avec :</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: "var(--green)" }}>CAM WONDERS</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "var(--bg2)", borderRadius: 8 }}>
                <Phone size={18} style={{ color: "var(--green)" }} />
                <div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Contact Paris &amp; Infoline</div>
                  <a href="tel:+33667788286" style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", textDecoration: "none" }}>+33 6 67 78 82 86</a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "var(--bg2)", borderRadius: 8 }}>
                <Phone size={18} style={{ color: "var(--yellow)" }} />
                <div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Contact Lyon &amp; Infoline</div>
                  <a href="tel:+33624478680" style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", textDecoration: "none" }}>+33 6 24 47 86 80</a>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--border2)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>
                Viens seul ou avec des amis : l&apos;objectif est d&apos;accueillir et d&apos;élargir le cercle professionnel et amical !
              </p>
              <a
                href="https://linktr.ee/CamerTechEurope"
                target="_blank"
                rel="noreferrer"
                className="btn btn-p"
                style={{ fontSize: 14, padding: "0.65rem 1.3rem" }}
              >
                Réserver ma place sur Linktree <ExternalLink size={14} style={{ marginLeft: 4 }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
