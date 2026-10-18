import type { Metadata } from "next";
import Link from "next/link";
import CamertechConnect from "@/components/sections/CamertechConnect";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "CamerTech Connect (CTC) — L'Événement Phare à Paris",
  description:
    "CamerTech Connect est la grande rencontre annuelle de la diaspora tech camerounaise à Paris. Plus de 150 participants, keynotes prestigieuses, ateliers et opportunités.",
  openGraph: {
    title: "CamerTech Connect (CTC) — Édition Annuelle à Paris",
    description:
      "La diaspora camerounaise dans la tech : opportunités, parcours et impact.",
    url: "https://camertech-europe.com/camertech-connect",
  },
};

export default function CamertechConnectPage() {
  return (
    <div style={{ paddingTop: "5.5rem" }}>
      <Breadcrumbs current="CamerTech Connect (CTC)" />

      {/* Section autonome complète */}
      <CamertechConnect />

      {/* Bandeau d'action dédié */}
      <section style={{ padding: "3rem 2rem 6rem", background: "var(--bg2)" }}>
        <div className="ct" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--display)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Ne manquez pas la prochaine <span className="g">édition de CTC.</span>
          </h3>
          <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto 1.75rem", fontSize: 15 }}>
            Les places pour CamerTech Connect sont limitées. Rejoignez le groupe pour recevoir les pré-inscriptions en avant-première.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
              target="_blank"
              rel="noreferrer"
              className="btn btn-p"
            >
              <MessageCircle size={16} /> Réserver ma place via WhatsApp
            </a>
            <Link href="/communaute" className="btn btn-o">
              Découvrir les membres de la communauté
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
