import type { Metadata } from "next";
import Link from "next/link";
import Events from "@/components/sections/Events";
import { ArrowLeft, MessageCircle } from "lucide-react";

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
      {/* Fil d'Ariane sobre & accès direct */}
      <div className="ct" style={{ padding: "1.5rem 2rem 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <Link
            href="/"
            className="btn btn-o"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "0.45rem 0.9rem" }}
          >
            <ArrowLeft size={15} /> Retour à l&apos;accueil
          </Link>

          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link
              href="/evenements/back-to-school"
              style={{ fontSize: 13.5, fontWeight: 500, color: "var(--muted)", textDecoration: "none" }}
              className="hover:text-[var(--green)]"
            >
              Back to school
            </Link>
            <Link
              href="/camertech-connect"
              style={{ fontSize: 13.5, fontWeight: 500, color: "var(--muted)", textDecoration: "none" }}
              className="hover:text-[var(--green)]"
            >
              CTC
            </Link>
            <Link
              href="/evenements#formats"
              style={{ fontSize: 13.5, fontWeight: 500, color: "var(--muted)", textDecoration: "none" }}
              className="hover:text-[var(--green)]"
            >
              En ligne
            </Link>
          </div>
        </div>
      </div>

      {/* Tous les formats d'événements */}
      <Events />

      {/* Appel pour proposer une intervention */}
      <section style={{ padding: "3rem 2rem 6rem", background: "var(--bg)" }}>
        <div className="ct" style={{ textAlign: "center" }}>
          <div className="label">Interventions &amp; Partage</div>
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
