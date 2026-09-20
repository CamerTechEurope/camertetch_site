"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Accueil" },
      { href: "/#mission", label: "Mission" },
      { href: "/#events", label: "Événements" },
      { href: "/#connect", label: "CamerTech Connect" },
      { href: "/#media", label: "Média" },
    ],
  },
  {
    title: "Communauté",
    links: [
      { href: "/#community", label: "Membres" },
      { href: "/#partners", label: "Partenaires" },
      { href: "/#join", label: "Rejoindre" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "mailto:contact@camertech-europe.com", label: "contact@camertech-europe.com" },
      { href: "https://linkedin.com/company/camertech-europe", label: "LinkedIn" },
      { href: "https://instagram.com/camertech-europe", label: "Instagram" },
      { href: "https://x.com/camertech-europe", label: "X (Twitter)" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSub = () => {
    if (!email || !email.includes("@")) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <footer
      id="contact"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--border2)" }}
    >
      <div className="ct px-6 pt-14 pb-8 mx-auto">
        <div className="grid gap-10" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div
                className="relative w-9 h-9 rounded-[9px] overflow-hidden flex items-center justify-center"
                style={{ background: "var(--green)" }}
              >
                <span className="font-display font-black text-white text-sm relative z-10">CT</span>
                <span
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: "var(--yellow)", opacity: 0.9 }}
                />
              </div>
              <span
                className="font-display font-bold text-base tracking-tight"
                style={{ color: "var(--text)" }}
              >
                Camer&apos;<span style={{ color: "var(--green)" }}>Tech</span> Europe
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-5 max-w-[270px]"
              style={{ color: "var(--muted)" }}
            >
              Connecter les talents camerounais de la tech en Europe. Construire un impact durable.
            </p>

            {/* Socials */}
            <div className="flex gap-2 mb-6">
              {[
                { href: "https://linkedin.com/company/camertech-europe", icon: <LiIcon /> },
                { href: "https://instagram.com/camertech-europe", icon: <IgIcon /> },
                { href: "https://tiktok.com/@camertech-europe", icon: <TtIcon /> },
                { href: "https://x.com/camertech-europe", icon: <XIcon /> },
              ].map(({ href, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-[9px] border transition-all duration-200"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border2)",
                    color: "var(--muted)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border2)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <p className="text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
              Newsletter
            </p>
            {done ? (
              <p className="text-sm" style={{ color: "var(--green)" }}>
                Inscription confirmée. À bientôt.
              </p>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSub()}
                  className="flex-1 min-w-0 text-sm px-3 py-2 rounded-lg border outline-none transition-colors duration-200"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border2)",
                    color: "var(--text)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border2)")}
                />
                <button
                  onClick={handleSub}
                  className="text-sm font-medium text-white px-3 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap"
                  style={{ background: "var(--green)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--green-h)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--green)")}
                >
                  S&apos;abonner
                </button>
              </div>
            )}
          </div>

          {/* Colonnes nav */}
          {nav.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold mb-4" style={{ color: "var(--text)" }}>
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--muted)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-10 pt-6 flex justify-between items-center flex-wrap gap-4 border-t"
          style={{ borderColor: "var(--border2)" }}
        >
          <span className="text-xs" style={{ color: "var(--faint)" }}>
            © 2025 <span style={{ color: "var(--green)" }}>Camer&apos;Tech Europe</span>. Tous
            droits réservés.
          </span>
          <span className="text-xs italic" style={{ color: "var(--faint)" }}>
            Connecter les talents. Construire l&apos;impact.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { footer .grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { footer .grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

const LiIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IgIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TtIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 6.3 6.34 6.34 0 0 0 12.67 0V8.82a8.21 8.21 0 0 0 4.83 1.56V6.95a4.86 4.86 0 0 1-1.06-.26z" />
  </svg>
);
const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
