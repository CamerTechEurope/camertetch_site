"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

interface PartnerItem {
  name: string;
  category: string;
  renderLogo: () => React.ReactNode;
}

const PARTNER_LOGOS: PartnerItem[] = [
  {
    name: "Google for Startups",
    category: "Tech & Accélération",
    renderLogo: () => (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Image
          src="/images/logo/google.svg"
          alt="Google"
          width={76}
          height={26}
          style={{ objectFit: "contain", height: "auto" }}
        />
        <span style={{ fontFamily: "var(--display)", fontWeight: 500, fontSize: 12.5, color: "var(--muted)", letterSpacing: "-0.01em" }}>
          for Startups
        </span>
      </div>
    ),
  },
  {
    name: "Amazon Web Services",
    category: "Cloud Provider",
    renderLogo: () => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/images/logo/aws.svg"
          alt="Amazon Web Services"
          width={68}
          height={28}
          style={{ objectFit: "contain", height: "auto" }}
          className="partner-img-aws"
        />
      </div>
    ),
  },
  {
    name: "Station F",
    category: "Campus Mondial",
    renderLogo: () => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/images/logo/stationf.svg"
          alt="Station F"
          width={100}
          height={18}
          style={{ objectFit: "contain", height: "auto" }}
          className="partner-img-stationf"
        />
      </div>
    ),
  },
  {
    name: "Orange",
    category: "Télécom & Tech",
    renderLogo: () => (
      <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
        <Image
          src="/images/logo/orange.svg"
          alt="Orange"
          width={28}
          height={28}
          style={{ objectFit: "contain", borderRadius: 4 }}
        />
        <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 16, color: "var(--text)", letterSpacing: "-0.02em" }}>
          orange
        </span>
      </div>
    ),
  },
  {
    name: "Capgemini",
    category: "Conseil & ESN",
    renderLogo: () => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/images/logo/capgemini.svg"
          alt="Capgemini"
          width={100}
          height={24}
          style={{ objectFit: "contain", height: "auto" }}
        />
      </div>
    ),
  },
  {
    name: "Charis Data Consulting",
    category: "Conseil Data & Cloud",
    renderLogo: () => (
      <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 15, color: "var(--text)", letterSpacing: "-0.01em" }}>
        Charis Data Consulting
      </span>
    ),
  },
  {
    name: "Cam Wonders",
    category: "Média Tech Diaspora",
    renderLogo: () => (
      <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 15, color: "var(--text)", letterSpacing: "-0.01em" }}>
        Cam Wonders
      </span>
    ),
  },
  {
    name: "YMB Tech",
    category: "ESN & Ingénierie",
    renderLogo: () => (
      <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 15, color: "var(--text)", letterSpacing: "0.5px" }}>
        YMB Tech
      </span>
    ),
  },
];

export default function Partners({ isHomePreview = false }: { isHomePreview?: boolean }) {
  return (
    <section id="partners">
      <div className="ct">
        <div style={{ textAlign: "center" }} className="rev">
          <div className="label" style={{ justifyContent: "center" }}>Partenaires &amp; Écosystème</div>
          <h2 className="sec">Ils nous font <span className="g">confiance.</span></h2>
          <p className="desc" style={{ margin: "0.6rem auto 0", textAlign: "center", maxWidth: 620 }}>
            Les entreprises, accélérateurs et institutions qui soutiennent et collaborent avec les talents tech de la diaspora.
          </p>
        </div>

        {/* Carrousel de logos défilant en boucle continue infinie (Marquee) */}
        <div className="marquee-container rev" style={{ marginTop: "2.5rem" }}>
          <div className="marquee-track">
            {/* Premier set */}
            {PARTNER_LOGOS.map((p, i) => (
              <div key={`p1-${i}`} className="partner-logo-card" title={p.name}>
                {p.renderLogo()}
              </div>
            ))}
            {/* Duplication pour transition en boucle infinie fluide */}
            {PARTNER_LOGOS.map((p, i) => (
              <div key={`p2-${i}`} className="partner-logo-card" title={p.name}>
                {p.renderLogo()}
              </div>
            ))}
          </div>
        </div>

        {/* CTA partenaire existant fonctionnel */}
        <div className="partner-cta rev">
          <h3>Votre entreprise croit au potentiel de la diaspora tech africaine ?</h3>
          <p>Rejoignez nos partenaires et participez à la construction d&apos;un écosystème durable entre l&apos;Europe et le Cameroun.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: "1.25rem" }}>
            <a
              href="mailto:camertech.europe@gmail.com?subject=Demande%20de%20Partenariat%20-%20Camer'Tech%20Europe"
              className="btn btn-p"
            >
              <Mail size={16} /> Devenir entreprise partenaire
            </a>
            {isHomePreview ? (
              <Link href="/partenaires" className="btn btn-o">
                En savoir plus sur nos partenaires <ArrowRight size={15} />
              </Link>
            ) : (
              <a
                href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
                target="_blank"
                rel="noreferrer"
                className="btn btn-o"
              >
                <MessageCircle size={16} /> Échanger sur WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
