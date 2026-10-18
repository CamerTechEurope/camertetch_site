import type { Metadata } from "next";
import Link from "next/link";
import Events from "@/components/sections/Events";
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles, MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Événements & Formats d'Excellence — Camer'Tech Europe",
  description:
    "Participez aux masterclasses, panels de haut niveau, sessions de coaching carrière et au grand rendez-vous annuel CamerTech Connect (CTC) à Paris.",
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
      {/* En-tête de navigation & sous-onglets Événements */}
      <div className="ct" style={{ padding: "1.5rem 2rem 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: "1.5rem" }}>
          <Link
            href="/"
            className="btn btn-o"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "0.45rem 0.9rem" }}
          >
            <ArrowLeft size={15} /> Retour à l&apos;accueil
          </Link>

          {/* Sous-navigation interne Événements */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--bg2)", padding: "4px 8px", borderRadius: 100, border: "1px solid var(--border2)" }}>
            <span style={{ fontSize: 13, fontWeight: 700, padding: "6px 14px", borderRadius: 100, background: "var(--card)", color: "var(--green)", boxShadow: "var(--shadow)" }}>
              Formats réguliers
            </span>
            <Link
              href="/camertech-connect"
              style={{ fontSize: 13, fontWeight: 600, padding: "6px 14px", borderRadius: 100, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
              className="hover:text-green-600"
            >
              Événement phare CTC ↗
            </Link>
          </div>
        </div>

        {/* Focus Banner CamerTech Connect (CTC) intégré comme sous-page majeure */}
        <div
          className="card rev"
          style={{
            padding: "2rem 2.25rem",
            background: "linear-gradient(135deg, var(--card) 0%, rgba(10, 155, 94, 0.08) 100%)",
            border: "1px solid rgba(10, 155, 94, 0.25)",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--green)", background: "rgba(10, 155, 94, 0.12)", padding: "4px 10px", borderRadius: 6, marginBottom: 10 }}>
              <Sparkles size={14} /> Grand rendez-vous annuel
            </div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, margin: "0 0 8px", color: "var(--text)" }}>
              Camer<span className="g">Tech</span> Connect (CTC)
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              L&apos;événement phare rassemblant plus de 150 professionnels, speakers d&apos;élite, investisseurs et recruteurs pour célébrer l&apos;excellence tech camerounaise à Paris.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "1rem", fontSize: 13, color: "var(--text)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><MapPin size={15} style={{ color: "var(--red)" }} /> Paris · Hub d&apos;excellence</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Users size={15} style={{ color: "var(--green)" }} /> 150+ participants réunis</span>
            </div>
          </div>

          <div>
            <Link
              href="/camertech-connect"
              className="btn btn-p"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, padding: "0.75rem 1.4rem" }}
            >
              Explorer la page dédiée CTC <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Formats réguliers de masterclasses et workshops */}
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
