import type { Metadata } from "next";
import Link from "next/link";
import Mission from "@/components/sections/Mission";
import { ArrowLeft, ArrowRight, MessageCircle, Target, Compass, Zap, Building2, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos — Notre Mission, Vision & Modèle — Camer'Tech Europe",
  description:
    "Découvrez l'histoire de Camer'Tech Europe, notre mission pour la diaspora tech camerounaise en Europe, nos 6 piliers d'excellence et notre modèle d'impact.",
  openGraph: {
    title: "À propos — Camer'Tech Europe",
    description:
      "Connecter les talents tech, accélérer les carrières et bâtir un pont solide avec le Cameroun.",
    url: "https://camertech-europe.com/about",
  },
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "5.5rem" }}>
      {/* Fil d'ariane & Navigation de retour */}
      <div className="ct" style={{ padding: "1.25rem 2rem 0" }}>
        <Link
          href="/"
          className="btn btn-o"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "0.45rem 0.9rem" }}
        >
          <ArrowLeft size={15} /> Retour à l&apos;accueil
        </Link>
      </div>

      {/* Hero section À Propos */}
      <section style={{ padding: "2.5rem 2rem 4rem" }}>
        <div className="ct">
          <div className="rev" style={{ maxWidth: 840 }}>
            <div className="label">À propos de nous</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.5rem" }}>
              L&apos;histoire et la vision de <span className="g">Camer&apos;Tech Europe.</span>
            </h1>
            <p className="desc" style={{ fontSize: 18, lineHeight: 1.75, color: "var(--muted)", marginBottom: "2rem" }}>
              Camer&apos;Tech Europe est née d&apos;une conviction forte : la diaspora tech camerounaise en Europe regorge de talents d&apos;exception — ingénieurs, chercheurs, architectes cloud, experts data et fondateurs. Pourtant, ces énergies restaient trop souvent isolées. Notre vocation est d&apos;unir ces forces pour créer une communauté solidaire, influente et actrice du changement technologique.
            </p>
          </div>

          {/* 3 Cartes fondamentales : Genèse, Vision, Objectif */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: "1rem" }}>
            <div className="card rev" style={{ padding: "1.75rem" }}>
              <div style={{ color: "var(--green)", marginBottom: "0.75rem" }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: "0.5rem", color: "var(--text)" }}>Notre Genèse</h3>
              <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.6 }}>
                Créé par des professionnels de la tech en Europe, Camer&apos;Tech Europe répond au besoin concret de disposer d&apos;un espace d&apos;échange bienveillant, de partage de repères professionnels et d&apos;opportunités d&apos;embauche.
              </p>
            </div>

            <div className="card rev" style={{ padding: "1.75rem" }}>
              <div style={{ color: "var(--yellow)", marginBottom: "0.75rem" }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: "0.5rem", color: "var(--text)" }}>Notre Vision</h3>
              <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.6 }}>
                Bâtir le hub de référence des professionnels tech africains en Europe, capable d&apos;inspirer les futures générations, de peser dans les grands groupes et d&apos;investir durablement sur le continent.
              </p>
            </div>

            <div className="card rev" style={{ padding: "1.75rem" }}>
              <div style={{ color: "var(--red)", marginBottom: "0.75rem" }}>
                <Globe2 size={24} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: "0.5rem", color: "var(--text)" }}>Le Pont Afrique - Europe</h3>
              <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.6 }}>
                Mettre nos compétences au service de l&apos;écosystème numérique camerounais et panafricain par le transfert technologique, le mentorat et l&apos;accompagnement de startups locales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section complète : Les 6 Piliers d'Excellence */}
      <Mission />

      {/* Modèle Opérationnel & Actions Concrètes */}
      <section style={{ padding: "5rem 2rem", background: "var(--bg2)", borderTop: "1px solid var(--border2)", borderBottom: "1px solid var(--border2)" }}>
        <div className="ct">
          <div className="rev" style={{ maxWidth: 760, marginBottom: "3rem" }}>
            <div className="label">Modèle opérationnel</div>
            <h2 className="sec">Comment nous transformons <span className="g">l&apos;intention en action.</span></h2>
            <p className="desc">
              Un dispositif structuré pour accompagner chaque membre, de l&apos;étudiant en master jusqu&apos;au Chief Technology Officer.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            <div className="card rev" style={{ padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                <Zap size={22} style={{ color: "var(--green)" }} />
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>1. Accélération de carrières</h3>
              </div>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                Ateliers de préparation aux entretiens d&apos;embauche en ESN et cabinets de conseil, transparence salariale, revues de CV techniques et recommandations directes de nos membres au sein de leurs entreprises.
              </p>
              <Link href="/evenements" className="btn btn-o" style={{ fontSize: 12.5, padding: "0.45rem 0.85rem" }}>
                Voir nos formats d&apos;événements <ArrowRight size={13} />
              </Link>
            </div>

            <div className="card rev" style={{ padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                <Building2 size={22} style={{ color: "var(--yellow)" }} />
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>2. Grandes rencontres &amp; CTC</h3>
              </div>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                Organisation de notre événement annuel d&apos;envergure <strong>CamerTech Connect</strong> à Paris, réunissant intervenants de renom, tables rondes stratégiques, investisseurs et recruteurs partenaires.
              </p>
              <Link href="/camertech-connect" className="btn btn-o" style={{ fontSize: 12.5, padding: "0.45rem 0.85rem" }}>
                Découvrir l&apos;édition CTC <ArrowRight size={13} />
              </Link>
            </div>

            <div className="card rev" style={{ padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                <Globe2 size={22} style={{ color: "var(--green)" }} />
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>3. Synergies avec l&apos;écosystème</h3>
              </div>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                Partenariats avec les acteurs institutionnels, écoles d&apos;ingénieurs et géants du numérique (AWS, Capgemini, Orange, Google) pour valoriser la diversité des talents et créer des opportunités concrètes.
              </p>
              <Link href="/partenaires" className="btn btn-o" style={{ fontSize: 12.5, padding: "0.45rem 0.85rem" }}>
                Consulter nos partenaires <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l'action final */}
      <section style={{ padding: "4rem 2rem 6rem", textAlign: "center" }}>
        <div className="ct">
          <div className="rev" style={{ maxWidth: 640, margin: "0 auto" }}>
            <h3 style={{ fontFamily: "var(--display)", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
              Envie de faire partie de <span className="g">l&apos;aventure ?</span>
            </h3>
            <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.6, marginBottom: "2rem" }}>
              Rejoignez dès maintenant plus de 350 professionnels, étudiants et entrepreneurs sur notre communauté WhatsApp active.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
                target="_blank"
                rel="noreferrer"
                className="btn btn-p"
              >
                <MessageCircle size={16} /> Rejoindre la communauté
              </a>
              <Link href="/communaute" className="btn btn-o">
                Explorer l&apos;annuaire des profils
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
