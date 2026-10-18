import type { Metadata } from "next";
import Link from "next/link";
import Community from "@/components/sections/Community";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "La Communauté des Talents — Camer'Tech Europe",
  description:
    "Rejoignez un réseau solidaire de plus de 350 ingénieurs logiciels, data engineers, chercheurs en IA et fondateurs camerounais en Europe.",
  openGraph: {
    title: "La Communauté des Talents — Camer'Tech Europe",
    description:
      "Des talents qui s'entraident, partagent leurs expériences et construisent des projets tech durables.",
    url: "https://camertech-europe.com/communaute",
  },
};

export default function CommunautePage() {
  return (
    <div style={{ paddingTop: "5.5rem" }}>
      <Breadcrumbs current="La Communauté des Talents" />

      {/* Section autonome complète */}
      <Community />

      {/* Bandeau d'action dédié */}
      <section style={{ padding: "3rem 2rem 6rem", background: "var(--bg)" }}>
        <div className="ct" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--display)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Prêt à intégrer le <span className="g">réseau ?</span>
          </h3>
          <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto 1.75rem", fontSize: 15 }}>
            L&apos;adhésion est ouverte à tous les passionnés et professionnels tech de la diaspora camerounaise en Europe.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
              target="_blank"
              rel="noreferrer"
              className="btn btn-p"
            >
              <MessageCircle size={16} /> Rejoindre le groupe WhatsApp
            </a>
            <Link href="/partenaires" className="btn btn-o">
              Découvrir nos entreprises partenaires
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
