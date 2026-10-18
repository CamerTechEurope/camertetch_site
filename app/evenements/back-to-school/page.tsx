import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Calendar, MapPin, Ticket, Phone, Sparkles } from "lucide-react";

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

export default function BackToSchoolPage() {
  return (
    <div style={{ paddingTop: "5.5rem" }}>
      {/* Fil d'Ariane & Retour */}
      <div className="ct" style={{ padding: "1.25rem 2rem 0", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <Link
          href="/evenements"
          className="btn btn-o"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "0.45rem 0.9rem" }}
        >
          <ArrowLeft size={15} /> Retour aux événements
        </Link>
        <span style={{ fontSize: 13, color: "var(--muted)" }}>/ Back to School 2026 (Paris &amp; Lyon)</span>
      </div>

      {/* Hero de l'événement */}
      <section style={{ padding: "2.5rem 2rem 3.5rem" }}>
        <div className="ct">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
            <div className="rev">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: 100, background: "rgba(10, 155, 94, 0.12)", color: "var(--green)", fontSize: 12.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "1rem" }}>
                <Sparkles size={14} /> Événement d&apos;intégration 2026
              </div>

              <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem", color: "var(--text)" }}>
                Back to School <span className="g">Camer&apos;Tech</span>
              </h1>

              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: 700, color: "var(--yellow)", marginBottom: "1.25rem" }}>
                Bienvenue en France ! 🇫🇷 Nouveau pays, nouvelle ville, nouveaux repères… et bientôt de nouvelles rencontres !
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", marginBottom: "2rem" }}>
                Tu viens d&apos;arriver en France pour tes études ou ton premier job ? Tu es déjà installé et tu souhaites élargir ton réseau professionnel et amical ? Rejoins la plus bienveillante des communautés tech le <strong>samedi 24 octobre 2026</strong> en simultané à <strong>Paris</strong> et à <strong>Lyon</strong> !
              </p>

              {/* Badges pratiques */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: "2.5rem" }}>
                <div className="card" style={{ padding: "10px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                  <Calendar size={18} style={{ color: "var(--green)" }} />
                  <div>
                    <div style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", fontWeight: 700 }}>Date</div>
                    <div style={{ fontSize: 13.5, fontWeight: 700 }}>Samedi 24 Octobre 2026</div>
                  </div>
                </div>

                <div className="card" style={{ padding: "10px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                  <MapPin size={18} style={{ color: "var(--red)" }} />
                  <div>
                    <div style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", fontWeight: 700 }}>Villes</div>
                    <div style={{ fontSize: 13.5, fontWeight: 700 }}>Paris &amp; Lyon</div>
                  </div>
                </div>

                <div className="card" style={{ padding: "10px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                  <Ticket size={18} style={{ color: "var(--yellow)" }} />
                  <div>
                    <div style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", fontWeight: 700 }}>Formule</div>
                    <div style={{ fontSize: 13.5, fontWeight: 700 }}>Balade gratuite · Bowling en option</div>
                  </div>
                </div>
              </div>

              {/* Bouton de réservation officiel */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="https://linktr.ee/CamerTechEurope"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-p"
                  style={{ fontSize: 15, padding: "0.85rem 1.6rem", display: "inline-flex", alignItems: "center", gap: 8 }}
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

            {/* Visuel & Affiche */}
            <div className="rev">
              <div
                className="card"
                style={{
                  position: "relative",
                  borderRadius: "var(--rl)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                  border: "1px solid var(--border)",
                  aspectRatio: "3/4",
                  maxHeight: "560px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src="/images/events/affiche-back-to-school.jpg"
                  alt="Affiche Officielle Back to School Camer'Tech Europe à Paris et Lyon"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1.75rem",
                    color: "#fff",
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--yellow)" }}>
                    Événement Diaspora Tech
                  </span>
                  <div style={{ fontSize: 20, fontWeight: 800, fontFamily: "var(--display)", marginTop: 4 }}>
                    Paris &amp; Lyon · 24 Octobre 2026
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", margin: "6px 0 14px", lineHeight: 1.4 }}>
                    Balade urbaine · Bons plans d&apos;intégration · Rencontres · Bowling
                  </p>
                  <a
                    href="https://linktr.ee/CamerTechEurope"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-p"
                    style={{ fontSize: 13, padding: "0.55rem 1rem", justifyContent: "center" }}
                  >
                    Réserver sur Linktree <ExternalLink size={14} style={{ marginLeft: 4 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme détaillé */}
      <section style={{ padding: "4rem 2rem", background: "var(--bg2)", borderTop: "1px solid var(--border2)", borderBottom: "1px solid var(--border2)" }}>
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
              <div style={{ fontSize: 32, marginBottom: "1rem" }}>🚶</div>
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
              <div style={{ fontSize: 32, marginBottom: "1rem" }}>💡</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: "0.5rem", color: "var(--text)" }}>
                2. Partage de bons plans
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                Conseils pratiques indispensables : transports, démarches administratives, recherche de logement, astuces étudiantes et pièges à éviter.
              </p>
              <div style={{ marginTop: "1rem", fontSize: 12.5, fontWeight: 700, color: "var(--yellow)" }}>
                Retours d&apos;expérience réels
              </div>
            </div>

            <div className="card rev" style={{ padding: "1.75rem" }}>
              <div style={{ fontSize: 32, marginBottom: "1rem" }}>🤝</div>
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
              <div style={{ fontSize: 32, marginBottom: "1rem" }}>🎳</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: "0.5rem", color: "var(--text)" }}>
                4. Soirée Bowling en option
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                Pour ceux qui souhaitent prolonger le plaisir, session de bowling festive avec musique et défis amicaux pour finir la journée en beauté.
              </p>
              <div style={{ marginTop: "1rem", fontSize: 12.5, fontWeight: 700, color: "var(--red)" }}>
                Option avec billet payant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques, Partenaires & Contact */}
      <section style={{ padding: "4rem 2rem 6rem" }}>
        <div className="ct">
          <div className="card rev" style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: 840, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <div>
                <span className="label" style={{ marginBottom: 4 }}>Informations &amp; Organisation</span>
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
                Viens seul ou avec des amis, l&apos;objectif est justement de faire de nouvelles rencontres ! 🤝
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
