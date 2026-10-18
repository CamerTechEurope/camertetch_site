import type { Metadata } from "next";
import Link from "next/link";
import Partners from "@/components/sections/Partners";
import { ArrowLeft, Mail, MessageCircle, ShieldCheck, Rocket, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Partenaires & Écosystème — Camer'Tech Europe",
  description:
    "Les entreprises, campus et institutions partenaires qui font confiance et soutiennent les talents tech de la diaspora : AWS, Google for Startups, Orange, Station F, Capgemini.",
  openGraph: {
    title: "Partenaires & Écosystème — Camer'Tech Europe",
    description:
      "Soutenez l'excellence tech de la diaspora africaine et recrutez des ingénieurs d'élite.",
    url: "https://camertech-europe.com/partenaires",
  },
};

export default function PartenairesPage() {
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
      <Partners />

      {/* Détails sur les modalités de partenariat */}
      <section style={{ padding: "4rem 2rem 6rem", background: "var(--bg)" }}>
        <div className="ct">
          <div className="rev" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="label" style={{ justifyContent: "center" }}>Pourquoi devenir partenaire</div>
            <h3 style={{ fontFamily: "var(--display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800 }}>
              Trois piliers pour une <span className="g">collaboration à fort impact.</span>
            </h3>
            <p className="desc" style={{ margin: "0.6rem auto 0", textAlign: "center" }}>
              Nous construisons des ponts concrets entre les entreprises engagées et les meilleurs profils tech camerounais en Europe.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            <div className="card" style={{ padding: "2rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--green-light)", color: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <Rocket size={22} />
              </div>
              <h4 style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                Recrutement &amp; Sourcing de Talents
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>
                Accédez directement à un vivier d&apos;ingénieurs logiciels, data engineers, spécialistes cybersécurité et architectes cloud formés dans les meilleures universités et écoles d&apos;ingénieurs européennes.
              </p>
            </div>

            <div className="card" style={{ padding: "2rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--yellow-light)", color: "var(--yellow)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <Handshake size={22} />
              </div>
              <h4 style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                Visibilité Marque Employeur
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>
                Associez votre entreprise aux valeurs d&apos;excellence, d&apos;inclusion et d&apos;innovation portées par la diaspora africaine lors de nos événements exclusifs et sur nos canaux numériques.
              </p>
            </div>

            <div className="card" style={{ padding: "2rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--green-light)", color: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <ShieldCheck size={22} />
              </div>
              <h4 style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                Co-création &amp; Innovation Sud-Nord
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>
                Participez au développement de solutions technologiques concrètes créant de la valeur à la fois sur les marchés européens et au Cameroun.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="mailto:camertech.europe@gmail.com?subject=Dossier%20Partenariat%20-%20Camer'Tech%20Europe"
                className="btn btn-p"
              >
                <Mail size={16} /> Demander une plaquette partenariat
              </a>
              <a
                href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
                target="_blank"
                rel="noreferrer"
                className="btn btn-o"
              >
                <MessageCircle size={16} /> Échanger avec l&apos;équipe
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
