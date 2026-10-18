"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer id="contact">
      <div className="ct">
        <div className="footer-grid">
          <div>
            <a href="#" className="logo" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              <div className="logo-mark">
                <Image
                  src="/images/logo/favicon-light.png"
                  alt="Logo Camer'Tech Europe"
                  fill
                  className="logo-img-light"
                  style={{ objectFit: "contain" }}
                  sizes="38px"
                />
                <Image
                  src="/images/logo/favicon-dark.png"
                  alt="Logo Camer'Tech Europe"
                  fill
                  className="logo-img-dark"
                  style={{ objectFit: "contain" }}
                  sizes="38px"
                />
              </div>
              <span className="logo-name" style={{ fontSize: 16 }}>
                Camer&apos;<span className="g">Tech</span> Europe
              </span>
            </a>
            <p className="f-brand-desc">
              Connecter les talents camerounais de la tech en Europe. Construire un impact durable.
            </p>
            <div className="f-socs">
              <a
                href="https://www.linkedin.com/company/camertecheurope/"
                target="_blank"
                rel="noreferrer"
                className="f-soc"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/camertecheurope?stkn=MXJ2eGg1M3Znd3BvZg=="
                target="_blank"
                rel="noreferrer"
                className="f-soc"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@camertech_europe1?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noreferrer"
                className="f-soc"
                aria-label="TikTok"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.82a8.21 8.21 0 0 0 4.83 1.56V6.95a4.86 4.86 0 0 1-1.06-.26z"/>
                </svg>
              </a>
              <a
                href="https://x.com/camertech-europe"
                target="_blank"
                rel="noreferrer"
                className="f-soc"
                aria-label="Twitter / X"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            <div style={{ marginTop: "0.25rem" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", marginBottom: 8 }}>Newsletter</div>
              <form onSubmit={handleNewsletter} className="nl-row">
                <input
                  type="email"
                  className="nl-input"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="nl-btn"
                  style={subscribed ? { background: "#0d7a4e" } : {}}
                >
                  {subscribed ? "Inscrit" : "S'abonner"}
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="f-col-title">Navigation</div>
            <ul className="f-links">
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/mission">Mission &amp; Vision</Link></li>
              <li><Link href="/evenements">Événements &amp; Formats</Link></li>
              <li><Link href="/camertech-connect">CamerTech Connect (CTC)</Link></li>
              <li><Link href="/media">Médiathèque &amp; Affiches</Link></li>
              <li><Link href="/linkedin">Activité LinkedIn</Link></li>
            </ul>
          </div>

          <div>
            <div className="f-col-title">Communauté</div>
            <ul className="f-links">
              <li><Link href="/communaute">Membres &amp; Réseau</Link></li>
              <li><Link href="/partenaires">Partenaires &amp; Écosystème</Link></li>
              <li><a href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0" target="_blank" rel="noreferrer">Rejoindre la communauté</a></li>
              <li><a href="/document.html" target="_blank">Document HTML</a></li>
            </ul>
          </div>

          <div>
            <div className="f-col-title">Contact &amp; Échange</div>
            <ul className="f-links">
              <li><a href="mailto:camertech.europe@gmail.com">camertech.europe@gmail.com</a></li>
              <li><a href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0" target="_blank" rel="noreferrer" style={{ color: "#25D366" }}>Groupe WhatsApp</a></li>
              <li><a href="https://www.linkedin.com/company/camertecheurope/" target="_blank" rel="noreferrer">LinkedIn officiel</a></li>
              <li><a href="https://www.instagram.com/camertecheurope?stkn=MXJ2eGg1M3Znd3BvZg==" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@camertech_europe1?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer">TikTok</a></li>
              <li><a href="https://x.com/camertech-europe" target="_blank" rel="noreferrer">X (Twitter)</a></li>
            </ul>
          </div>
        </div>

        <div className="f-bottom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span className="f-copy">© 2025 <span className="g">Camer&apos;Tech Europe</span>. Tous droits réservés.</span>
            <span className="f-copy" style={{ fontStyle: "italic", marginLeft: "1rem" }}>Connecter les talents. Construire l&apos;impact.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
