"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-pattern" />
      <div className="hero-glow" />
      <div className="ct">
        <div className="hero-inner">
          <div className="rev">
            <h1>
              La tech africaine<br />
              rayonne <span className="g">depuis l&apos;Europe.</span>
            </h1>

            <p className="hero-sub">
              Camer&apos;Tech Europe connecte étudiants, ingénieurs, chercheurs et entrepreneurs camerounais
              autour des opportunités de carrière, du partage d&apos;expertise et de l&apos;impact durable.
            </p>

            <div className="hero-ctas">
              <a href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0" target="_blank" rel="noreferrer" className="btn btn-p">Rejoindre la communauté</a>
              <Link href="/camertech-connect" className="btn btn-o">Découvrir CTC</Link>
            </div>

            {/* Social proof avatar stack */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", border: "2px solid var(--card)", position: "relative", overflow: "hidden", zIndex: 3 }}>
                  <Image src="/images/speakers/william-elong.jpg" alt="Membre" fill style={{ objectFit: "cover" }} sizes="34px" />
                </div>
                <div style={{ width: 34, height: 34, borderRadius: "50%", border: "2px solid var(--card)", position: "relative", overflow: "hidden", marginLeft: -10, zIndex: 2 }}>
                  <Image src="/images/speakers/steve-nouyep.jpg" alt="Membre" fill style={{ objectFit: "cover" }} sizes="34px" />
                </div>
                <div style={{ width: 34, height: 34, borderRadius: "50%", border: "2px solid var(--card)", position: "relative", overflow: "hidden", marginLeft: -10, zIndex: 1 }}>
                  <Image src="/images/community/member-1.jpg" alt="Membre" fill style={{ objectFit: "cover" }} sizes="34px" />
                </div>
                <div style={{ width: 34, height: 34, borderRadius: "50%", border: "2px solid var(--card)", background: "var(--green)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, marginLeft: -10, zIndex: 0 }}>
                  +350
                </div>
              </div>
              <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>
                Rejoignez des centaines de professionnels tech en Europe
              </span>
            </div>
          </div>

          <div className="hero-visual rev">
            <div className="hero-img-main">
              <Image
                src="/images/community/hero.jpg"
                alt="Communauté Camer'Tech Europe à Paris"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </div>

            <div className="hero-float-stat">
              <span className="float-num">350<span style={{ color: "var(--green)" }}>+</span></span>
              <span className="float-label">membres actifs en Europe</span>
            </div>

            <div className="hero-float-badge">
              CTC 2024 · Paris
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
