import type { Metadata } from "next";
import Link from "next/link";
import Media from "@/components/sections/Media";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Médiathèque & Affiches Officielles — Camer'Tech Europe",
  description:
    "Consultez les affiches officielles des événements, replays de masterclasses et rétrospectives de Camer'Tech Europe.",
  openGraph: {
    title: "Médiathèque & Affiches Officielles — Camer'Tech Europe",
    description:
      "Affiches, replays de conférences et documentation visuelle de la communauté tech camerounaise en Europe.",
    url: "https://camertech-europe.com/media",
  },
};

export default function MediaPage() {
  return (
    <div style={{ paddingTop: "5.5rem" }}>
      <Breadcrumbs current="Médiathèque & Affiches" />

      {/* Section autonome complète */}
      <Media />

      {/* Bandeau d'action dédié */}
      <section style={{ padding: "3rem 2rem 6rem", background: "var(--bg)" }}>
        <div className="ct" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--display)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Suivez tous nos contenus en <span className="g">temps réel.</span>
          </h3>
          <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto 1.75rem", fontSize: 15 }}>
            Rejoignez notre chaîne d&apos;information et notre communauté WhatsApp pour recevoir les annonces et supports avant tout le monde.
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
            <Link href="/linkedin" className="btn btn-o">
              Consulter nos posts LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
