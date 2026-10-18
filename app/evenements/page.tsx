import type { Metadata } from "next";
import Events from "@/components/sections/Events";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Événements & Formats d'Excellence — Camer'Tech Europe",
  description:
    "Participez aux masterclasses, panels de haut niveau et sessions de coaching carrière de Camer'Tech Europe à Paris et en ligne.",
  openGraph: {
    title: "Événements & Formats d'Excellence — Camer'Tech Europe",
    description:
      "Des formats pensés pour accélérer la trajectoire des talents tech de la diaspora.",
    url: "https://camertech-europe.com/evenements",
  },
};

export default function EvenementsPage() {
  return (
    <div style={{ paddingTop: "5.5rem" }}>
      <Breadcrumbs current="Événements & Formats" />

      {/* Section autonome complète */}
      <Events />

      {/* Bandeau d'action dédié */}
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
