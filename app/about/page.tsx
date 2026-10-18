import Link from "next/link";

export default function AboutPage() {
  return (
    <section style={{ padding: "8rem 2rem 6rem", minHeight: "80vh" }}>
      <div className="ct">
        <div className="rev">
          <div className="label">À propos</div>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginBottom: "1.5rem" }}>
            L&apos;histoire de <span className="g">Camer&apos;Tech Europe.</span>
          </h1>
          <p className="desc" style={{ maxWidth: 700, fontSize: 18, lineHeight: 1.8, marginBottom: "2rem" }}>
            Camer&apos;Tech Europe est née d&apos;un constat simple : la diaspora tech camerounaise en Europe est riche de compétences
            exceptionnelles mais trop souvent dispersée. Notre mission est de créer un pont solide entre les étudiants, ingénieurs,
            chercheurs et entrepreneurs pour favoriser l&apos;entraide, la croissance professionnelle et l&apos;impact en Afrique.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: "3rem", marginBottom: "3rem" }}>
            <div className="card" style={{ padding: "2rem" }}>
              <div className="pillar-icon icon-green" style={{ width: 44, height: 44, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                🤝
              </div>
              <h3 style={{ fontSize: 20, marginBottom: "0.5rem" }}>Communauté & Entraide</h3>
              <p style={{ color: "var(--muted)", fontSize: 15 }}>
                Un espace de partage d&apos;opportunités d&apos;emploi, de stages et de missions freelance entre pairs bienveillants.
              </p>
            </div>

            <div className="card" style={{ padding: "2rem" }}>
              <div className="pillar-icon icon-yellow" style={{ width: 44, height: 44, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                🚀
              </div>
              <h3 style={{ fontSize: 20, marginBottom: "0.5rem" }}>Excellence & Partage</h3>
              <p style={{ color: "var(--muted)", fontSize: 15 }}>
                Des masterclasses avec des pointures du secteur (IA, Cloud, Cyber, Data) pour élever le niveau technique collectif.
              </p>
            </div>

            <div className="card" style={{ padding: "2rem" }}>
              <div className="pillar-icon icon-green" style={{ width: 44, height: 44, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                🌍
              </div>
              <h3 style={{ fontSize: 20, marginBottom: "0.5rem" }}>Pont Europe - Cameroun</h3>
              <p style={{ color: "var(--muted)", fontSize: 15 }}>
                Contribuer au développement de l&apos;écosystème numérique en Afrique à travers des projets concrets et du mentorat.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/" className="btn btn-p">Retour à l&apos;accueil</Link>
            <Link href="/#join" className="btn btn-o">Rejoindre la communauté</Link>
            <a href="/document.html" target="_blank" className="btn btn-o">Consulter le document source (html.html)</a>
          </div>
        </div>
      </div>
    </section>
  );
}
