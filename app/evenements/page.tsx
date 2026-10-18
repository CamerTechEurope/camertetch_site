import type { Metadata } from "next";
import Link from "next/link";
import Events from "@/components/sections/Events";
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles, MapPin, Users, Calendar, ExternalLink, Ticket } from "lucide-react";

export const metadata: Metadata = {
  title: "Événements & Formats d'Excellence — Camer'Tech Europe",
  description:
    "Découvrez les événements de Camer'Tech Europe : Back to School 2026 à Paris et Lyon, CamerTech Connect (CTC) et nos masterclasses d'élite.",
  openGraph: {
    title: "Événements & Formats d'Excellence — Camer'Tech Europe",
    description:
      "Des formats pensés pour accélérer la trajectoire des talents tech de la diaspora.",
    url: "https://camertech-europe.com/evenements",
  },
};

export default function EvenementsPage() {
  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* En-tête de navigation & sous-navigation rapide */}
      <div className="ct" style={{ padding: "1.5rem 2rem 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: "1.5rem" }}>
          <Link
            href="/"
            className="btn btn-o"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "0.45rem 0.9rem" }}
          >
            <ArrowLeft size={15} /> Retour à l&apos;accueil
          </Link>

          {/* Sélecteur de sous-pages d'événements */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--bg2)", padding: "4px 8px", borderRadius: 100, border: "1px solid var(--border2)", flexWrap: "wrap" }}>
            <Link
              href="/evenements/back-to-school"
              style={{ fontSize: 12.5, fontWeight: 700, padding: "6px 14px", borderRadius: 100, background: "var(--card)", color: "var(--green)", textDecoration: "none", boxShadow: "var(--shadow)" }}
            >
              🎒 Back to School 2026
            </Link>
            <Link
              href="/camertech-connect"
              style={{ fontSize: 12.5, fontWeight: 600, padding: "6px 14px", borderRadius: 100, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
              className="hover:text-green-600"
            >
              🌟 CamerTech Connect (CTC)
            </Link>
          </div>
        </div>

        {/* Grille des 2 événements phares : Back to School & CTC */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginBottom: "2.5rem" }}>
          {/* Carte 1 : Back to School 2026 */}
          <div
            className="card rev"
            style={{
              padding: "1.75rem 2rem",
              background: "linear-gradient(135deg, var(--card) 0%, rgba(245, 166, 35, 0.08) 100%)",
              border: "1px solid rgba(245, 166, 35, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--yellow)", background: "rgba(245, 166, 35, 0.12)", padding: "3px 8px", borderRadius: 6, marginBottom: 10 }}>
                <Calendar size={13} /> Prochain événement · 24 Octobre 2026
              </div>
              <h2 style={{ fontFamily: "var(--display)", fontSize: "1.5rem", fontWeight: 800, margin: "0 0 6px", color: "var(--text)" }}>
                Back to School <span style={{ color: "var(--yellow)" }}>2026</span>
              </h2>
              <p style={{ color: "var(--muted)", fontSize: 13.5, lineHeight: 1.55, margin: "0 0 14px" }}>
                Bienvenue en France ! Balade urbaine découverte, partage de bons plans, networking et soirée bowling conviviale en simultané à <strong>Paris</strong> et à <strong>Lyon</strong>.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 12, color: "var(--text)", marginBottom: 16 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><MapPin size={13} style={{ color: "var(--red)" }} /> Paris &amp; Lyon</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Ticket size={13} style={{ color: "var(--green)" }} /> Balade gratuite · Bowling option</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Link
                href="/evenements/back-to-school"
                className="btn btn-p"
                style={{ fontSize: 12.5, padding: "0.5rem 1rem" }}
              >
                Détails du programme <ArrowRight size={13} />
              </Link>
              <a
                href="https://linktr.ee/CamerTechEurope"
                target="_blank"
                rel="noreferrer"
                className="btn btn-o"
                style={{ fontSize: 12.5, padding: "0.5rem 1rem" }}
              >
                Réserver ma place <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Carte 2 : CamerTech Connect */}
          <div
            className="card rev"
            style={{
              padding: "1.75rem 2rem",
              background: "linear-gradient(135deg, var(--card) 0%, rgba(10, 155, 94, 0.08) 100%)",
              border: "1px solid rgba(10, 155, 94, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--green)", background: "rgba(10, 155, 94, 0.12)", padding: "3px 8px", borderRadius: 6, marginBottom: 10 }}>
                <Sparkles size={13} /> Sommet Annuel de Référence
              </div>
              <h2 style={{ fontFamily: "var(--display)", fontSize: "1.5rem", fontWeight: 800, margin: "0 0 6px", color: "var(--text)" }}>
                Camer<span className="g">Tech</span> Connect (CTC)
              </h2>
              <p style={{ color: "var(--muted)", fontSize: 13.5, lineHeight: 1.55, margin: "0 0 14px" }}>
                La grande convention annuelle de la diaspora tech camerounaise à Paris. Plus de 150 participants, keynotes prestigieuses, ateliers carrière et accords stratégiques.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 12, color: "var(--text)", marginBottom: 16 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><MapPin size={13} style={{ color: "var(--red)" }} /> Paris · Hub d&apos;excellence</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Users size={13} style={{ color: "var(--green)" }} /> 150+ participants</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Link
                href="/camertech-connect"
                className="btn btn-p"
                style={{ fontSize: 12.5, padding: "0.5rem 1rem" }}
              >
                Explorer l&apos;édition CTC &amp; Galerie <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tous les formats d'événements */}
      <Events />

      {/* Appel pour proposer une intervention */}
      <section style={{ padding: "3rem 2rem 6rem", background: "var(--bg)" }}>
        <div className="ct" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--display)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Envie d&apos;intervenir ou de <span className="g">proposer un sujet ?</span>
          </h3>
          <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto 1.75rem", fontSize: 15 }}>
            Partagez votre expertise en IA, Cloud, Cybersécurité ou entrepreneuriat avec toute la communauté.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:camertech.europe@gmail.com?subject=Proposition%20Intervention%20-%20Camer'Tech%20Europe"
              className="btn btn-p"
            >
              Proposer un sujet ou intervenir
            </a>
            <a
              href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
              target="_blank"
              rel="noreferrer"
              className="btn btn-o"
            >
              <MessageCircle size={16} /> Rejoindre le groupe WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
