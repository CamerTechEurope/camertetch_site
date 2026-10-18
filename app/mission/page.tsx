import type { Metadata } from "next";
import Link from "next/link";
import Mission from "@/components/sections/Mission";
import { ArrowLeft, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre Mission & Nos Piliers — Camer'Tech Europe",
  description:
    "Découvrez les 6 piliers d'excellence de Camer'Tech Europe : entraide professionnelle, mentorat, collaborations, masterclasses et pont économique avec le Cameroun.",
  openGraph: {
    title: "Notre Mission & Nos Piliers — Camer'Tech Europe",
    description:
      "Connecter les talents tech de la diaspora camerounaise en Europe et bâtir un impact durable.",
    url: "https://camertech-europe.com/mission",
  },
};

export default function MissionPage() {
  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* En-tête de navigation autonome */}
      <div className="ct" style={{ padding: "1.5rem 2rem 0" }}>
        <Link
          href="/"
          className="btn btn-o"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "0.45rem 0.9rem" }}
        >
          <ArrowLeft size={15} /> Retour à l&apos;accueil
        </Link>
      </div>

      {/* Section autonome complète */}
      <Mission />

      {/* Bandeau d'action dédié */}
      <section style={{ padding: "3rem 2rem 6rem", background: "var(--bg2)" }}>
        <div className="ct" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--display)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Partagez-vous cette <span className="g">vision d&apos;impact ?</span>
          </h3>
          <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto 1.75rem", fontSize: 15 }}>
            Rejoignez notre réseau de plus de 350 ingénieurs, chercheurs et entrepreneurs pour bâtir l&apos;écosystème ensemble.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
              target="_blank"
              rel="noreferrer"
              className="btn btn-p"
            >
              <MessageCircle size={16} /> Rejoindre la communauté sur WhatsApp
            </a>
            <Link href="/evenements" className="btn btn-o">
              Découvrir nos prochains événements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
