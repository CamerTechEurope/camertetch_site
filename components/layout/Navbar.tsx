"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/layout/ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        style={{
          background: scrolled ? "var(--card)" : undefined,
          boxShadow: scrolled ? "var(--shadow)" : "none",
          transition: "background 0.3s, box-shadow 0.3s",
        }}
      >
        <div className="nav-inner">
          <Link href="/" className="logo" aria-label="Camer'Tech Europe Accueil">
            <div className="logo-mark">
              <Image
                src="/images/logo/favicon-light.png"
                alt="Logo Camer'Tech Europe"
                fill
                className="logo-img-light"
                style={{ objectFit: "contain" }}
                sizes="38px"
                priority
              />
              <Image
                src="/images/logo/favicon-dark.png"
                alt="Logo Camer'Tech Europe"
                fill
                className="logo-img-dark"
                style={{ objectFit: "contain" }}
                sizes="38px"
                priority
              />
            </div>
            <span className="logo-name">
              Camer&apos;<span className="g">Tech</span> Europe
            </span>
          </Link>

          <ul className="nav-links">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">À propos</Link></li>
            <li><Link href="/evenements">Événements</Link></li>
            <li><Link href="/communaute">Communauté</Link></li>
            <li><Link href="/partenaires">Partenaires</Link></li>
            <li><Link href="/media">Média</Link></li>
          </ul>

          <div className="nav-right">
            <button
              type="button"
              className="theme-toggle"
              id="themeBtn"
              onClick={toggle}
              aria-label={theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"}
              title={theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"}
            >
              {theme === "dark" ? (
                <Sun size={18} style={{ color: "var(--yellow)" }} />
              ) : (
                <Moon size={18} style={{ color: "var(--text)" }} />
              )}
            </button>

            <a
              href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
              target="_blank"
              rel="noreferrer"
              className="btn-nav"
            >
              Rejoindre
            </a>

            {/* Mobile menu hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="theme-toggle md:hidden"
              id="mobileMenuBtn"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-nav-menu">
          <div style={{ display: "flex", justifyContent: "center", paddingBottom: "0.5rem" }}>
            <button
              type="button"
              onClick={toggle}
              className="btn btn-o"
              style={{ width: "100%", justifyContent: "center", gap: 8 }}
            >
              {theme === "dark" ? (
                <>
                  <Sun size={16} style={{ color: "var(--yellow)" }} /> Passer au mode clair
                </>
              ) : (
                <>
                  <Moon size={16} style={{ color: "var(--text)" }} /> Passer au mode sombre
                </>
              )}
            </button>
          </div>
          <Link href="/" onClick={closeMobile}>Accueil</Link>
          <Link href="/about" onClick={closeMobile}>À propos (Notre Mission)</Link>
          <Link href="/evenements" onClick={closeMobile}>Événements (dont CTC)</Link>
          <Link href="/communaute" onClick={closeMobile}>Communauté des Talents</Link>
          <Link href="/partenaires" onClick={closeMobile}>Partenaires &amp; Écosystème</Link>
          <Link href="/media" onClick={closeMobile}>Médiathèque &amp; Actualités</Link>
          <a
            href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
            target="_blank"
            rel="noreferrer"
            onClick={closeMobile}
            style={{ color: "var(--green)", fontWeight: 700 }}
          >
            Rejoindre la communauté
          </a>
        </div>
      )}
    </>
  );
}
