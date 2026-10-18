import type { Metadata } from "next";
import LinkedInFeed from "@/components/sections/LinkedInFeed";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Fil d'Activité LinkedIn — Camer'Tech Europe",
  description:
    "Suivez les publications, actualités professionnelles et opportunités de carrière partagées par Camer'Tech Europe sur LinkedIn.",
  openGraph: {
    title: "Fil d'Activité LinkedIn — Camer'Tech Europe",
    description:
      "Toute l'actualité de la tech africaine et de la diaspora réunie au même endroit.",
    url: "https://camertech-europe.com/linkedin",
  },
};

export default function LinkedInPage() {
  return (
    <div style={{ paddingTop: "5.5rem" }}>
      <Breadcrumbs current="Activité LinkedIn" />

      {/* Section autonome complète */}
      <LinkedInFeed />

      {/* Bandeau d'action dédié */}
      <section style={{ padding: "3rem 2rem 6rem", background: "var(--bg2)" }}>
        <div className="ct" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--display)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Connectez-vous avec les <span className="g">professionnels du réseau.</span>
          </h3>
          <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto 1.75rem", fontSize: 15 }}>
            Partagez vos succès, découvrez les parcours inspirants et rejoignez nos discussions sur WhatsApp.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
              target="_blank"
              rel="noreferrer"
              className="btn btn-p"
            >
              <MessageCircle size={16} /> Rejoindre la communauté WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/company/camertecheurope/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-o"
            >
              Suivre la page LinkedIn officielle
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
