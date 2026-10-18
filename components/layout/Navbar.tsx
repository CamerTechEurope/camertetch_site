"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/layout/ThemeProvider";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le dropdown au clic extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 160);
  };

  const closeAll = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          background: scrolled ? "var(--card)" : undefined,
          boxShadow: scrolled ? "var(--shadow)" : "none",
          transition: "background 0.3s, box-shadow 0.3s",
        }}
      >
        <div className="nav-inner">
          <Link href="/" onClick={closeAll} className="logo" aria-label="Camer'Tech Europe Accueil">
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

          {/* 4 Onglets Principaux ultra-épurés, sobres et lisibles */}
          <ul className="nav-links" style={{ gap: "0.5rem" }}>
            {/* 1. Onglet Accueil */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link
                href="/"
                onClick={closeAll}
                className={openDropdown === "home" ? "active" : ""}
                style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "0.4rem 0.85rem" }}
              >
                <span>Accueil</span>
                <ChevronDown
                  size={12}
                  style={{
                    transform: openDropdown === "home" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    opacity: 0.6,
                  }}
                />
              </Link>

              {openDropdown === "home" && (
                <div
                  onMouseEnter={() => handleMouseEnter("home")}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    paddingTop: 6,
                    zIndex: 1000,
                  }}
                >
                  <div
                    style={{
                      minWidth: 150,
                      background: "var(--card)",
                      border: "1px solid var(--border2)",
                      borderRadius: 8,
                      boxShadow: "0 10px 24px rgba(0,0,0,0.1)",
                      padding: 5,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Link
                      href="/about"
                      onClick={closeAll}
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        fontSize: "13.5px",
                        fontWeight: 500,
                        color: "var(--text)",
                        textDecoration: "none",
                        borderRadius: 6,
                        whiteSpace: "nowrap",
                      }}
                      className="hover:bg-[var(--bg2)] hover:text-[var(--green)]"
                    >
                      À propos
                    </Link>
                    <Link
                      href="/about#mission"
                      onClick={closeAll}
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        fontSize: "13.5px",
                        fontWeight: 500,
                        color: "var(--text)",
                        textDecoration: "none",
                        borderRadius: 6,
                        whiteSpace: "nowrap",
                      }}
                      className="hover:bg-[var(--bg2)] hover:text-[var(--green)]"
                    >
                      Notre mission
                    </Link>
                  </div>
                </div>
              )}
            </li>

            {/* 2. Onglet Événements */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("events")}
              onMouseLeave={handleMouseLeave}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link
                href="/evenements"
                onClick={closeAll}
                className={openDropdown === "events" ? "active" : ""}
                style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "0.4rem 0.85rem" }}
              >
                <span>Événements</span>
                <ChevronDown
                  size={12}
                  style={{
                    transform: openDropdown === "events" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    opacity: 0.6,
                  }}
                />
              </Link>

              {openDropdown === "events" && (
                <div
                  onMouseEnter={() => handleMouseEnter("events")}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    paddingTop: 6,
                    zIndex: 1000,
                  }}
                >
                  <div
                    style={{
                      minWidth: 160,
                      background: "var(--card)",
                      border: "1px solid var(--border2)",
                      borderRadius: 8,
                      boxShadow: "0 10px 24px rgba(0,0,0,0.1)",
                      padding: 5,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Link
                      href="/evenements/back-to-school"
                      onClick={closeAll}
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        fontSize: "13.5px",
                        fontWeight: 500,
                        color: "var(--text)",
                        textDecoration: "none",
                        borderRadius: 6,
                        whiteSpace: "nowrap",
                      }}
                      className="hover:bg-[var(--bg2)] hover:text-[var(--green)]"
                    >
                      Back to school
                    </Link>
                    <Link
                      href="/camertech-connect"
                      onClick={closeAll}
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        fontSize: "13.5px",
                        fontWeight: 500,
                        color: "var(--text)",
                        textDecoration: "none",
                        borderRadius: 6,
                        whiteSpace: "nowrap",
                      }}
                      className="hover:bg-[var(--bg2)] hover:text-[var(--green)]"
                    >
                      CTC
                    </Link>
                    <Link
                      href="/evenements#formats"
                      onClick={closeAll}
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        fontSize: "13.5px",
                        fontWeight: 500,
                        color: "var(--text)",
                        textDecoration: "none",
                        borderRadius: 6,
                        whiteSpace: "nowrap",
                      }}
                      className="hover:bg-[var(--bg2)] hover:text-[var(--green)]"
                    >
                      En ligne
                    </Link>
                    <Link
                      href="/evenements"
                      onClick={closeAll}
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        fontSize: "13.5px",
                        fontWeight: 500,
                        color: "var(--text)",
                        textDecoration: "none",
                        borderRadius: 6,
                        whiteSpace: "nowrap",
                      }}
                      className="hover:bg-[var(--bg2)] hover:text-[var(--green)]"
                    >
                      Autres événements
                    </Link>
                  </div>
                </div>
              )}
            </li>

            {/* 3. Onglet Communauté */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("community")}
              onMouseLeave={handleMouseLeave}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link
                href="/communaute"
                onClick={closeAll}
                className={openDropdown === "community" ? "active" : ""}
                style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "0.4rem 0.85rem" }}
              >
                <span>Communauté</span>
                <ChevronDown
                  size={12}
                  style={{
                    transform: openDropdown === "community" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    opacity: 0.6,
                  }}
                />
              </Link>

              {openDropdown === "community" && (
                <div
                  onMouseEnter={() => handleMouseEnter("community")}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    paddingTop: 6,
                    zIndex: 1000,
                  }}
                >
                  <div
                    style={{
                      minWidth: 145,
                      background: "var(--card)",
                      border: "1px solid var(--border2)",
                      borderRadius: 8,
                      boxShadow: "0 10px 24px rgba(0,0,0,0.1)",
                      padding: 5,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Link
                      href="/communaute"
                      onClick={closeAll}
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        fontSize: "13.5px",
                        fontWeight: 500,
                        color: "var(--text)",
                        textDecoration: "none",
                        borderRadius: 6,
                        whiteSpace: "nowrap",
                      }}
                      className="hover:bg-[var(--bg2)] hover:text-[var(--green)]"
                    >
                      Membres
                    </Link>
                    <a
                      href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeAll}
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        fontSize: "13.5px",
                        fontWeight: 500,
                        color: "var(--text)",
                        textDecoration: "none",
                        borderRadius: 6,
                        whiteSpace: "nowrap",
                      }}
                      className="hover:bg-[var(--bg2)] hover:text-[var(--green)]"
                    >
                      Rejoindre
                    </a>
                  </div>
                </div>
              )}
            </li>

            {/* 4. Onglet Entreprise */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("entreprise")}
              onMouseLeave={handleMouseLeave}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link
                href="/partenaires"
                onClick={closeAll}
                className={openDropdown === "entreprise" ? "active" : ""}
                style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "0.4rem 0.85rem" }}
              >
                <span>Entreprise</span>
                <ChevronDown
                  size={12}
                  style={{
                    transform: openDropdown === "entreprise" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    opacity: 0.6,
                  }}
                />
              </Link>

              {openDropdown === "entreprise" && (
                <div
                  onMouseEnter={() => handleMouseEnter("entreprise")}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    paddingTop: 6,
                    zIndex: 1000,
                  }}
                >
                  <div
                    style={{
                      minWidth: 145,
                      background: "var(--card)",
                      border: "1px solid var(--border2)",
                      borderRadius: 8,
                      boxShadow: "0 10px 24px rgba(0,0,0,0.1)",
                      padding: 5,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Link
                      href="/partenaires"
                      onClick={closeAll}
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        fontSize: "13.5px",
                        fontWeight: 500,
                        color: "var(--text)",
                        textDecoration: "none",
                        borderRadius: 6,
                        whiteSpace: "nowrap",
                      }}
                      className="hover:bg-[var(--bg2)] hover:text-[var(--green)]"
                    >
                      Partenaires
                    </Link>
                    <Link
                      href="/media"
                      onClick={closeAll}
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        fontSize: "13.5px",
                        fontWeight: 500,
                        color: "var(--text)",
                        textDecoration: "none",
                        borderRadius: 6,
                        whiteSpace: "nowrap",
                      }}
                      className="hover:bg-[var(--bg2)] hover:text-[var(--green)]"
                    >
                      Médias
                    </Link>
                  </div>
                </div>
              )}
            </li>
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

            {/* Mobile menu hamburger button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="theme-toggle md:hidden"
              id="mobileMenuBtn"
              aria-label="Menu de navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile aéré, propre, structuré en 4 sections sans icônes superflues */}
      {mobileOpen && (
        <div className="mobile-nav-menu" style={{ padding: "1.5rem" }}>
          {/* Header Mobile : Thème switch */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "1rem", borderBottom: "1px solid var(--border2)", marginBottom: "1rem" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "1px" }}>
              Navigation
            </span>
            <button
              type="button"
              onClick={toggle}
              className="btn btn-o"
              style={{ fontSize: 12, padding: "0.4rem 0.8rem", gap: 6 }}
            >
              {theme === "dark" ? (
                <>
                  <Sun size={14} style={{ color: "var(--yellow)" }} /> Mode clair
                </>
              ) : (
                <>
                  <Moon size={14} style={{ color: "var(--text)" }} /> Mode sombre
                </>
              )}
            </button>
          </div>

          {/* Section 1 : Accueil */}
          <div style={{ marginBottom: "1.25rem" }}>
            <Link
              href="/"
              onClick={closeAll}
              style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", display: "block", marginBottom: 6 }}
            >
              Accueil
            </Link>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingLeft: 12 }}>
              <Link href="/about" onClick={closeAll} style={{ fontSize: 13.5, color: "var(--muted)" }}>
                À propos
              </Link>
              <Link href="/about#mission" onClick={closeAll} style={{ fontSize: 13.5, color: "var(--muted)" }}>
                Notre mission
              </Link>
            </div>
          </div>

          {/* Section 2 : Événements */}
          <div style={{ marginBottom: "1.25rem" }}>
            <Link
              href="/evenements"
              onClick={closeAll}
              style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", display: "block", marginBottom: 6 }}
            >
              Événements
            </Link>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingLeft: 12 }}>
              <Link href="/evenements/back-to-school" onClick={closeAll} style={{ fontSize: 13.5, color: "var(--muted)" }}>
                Back to school
              </Link>
              <Link href="/camertech-connect" onClick={closeAll} style={{ fontSize: 13.5, color: "var(--muted)" }}>
                CTC
              </Link>
              <Link href="/evenements#formats" onClick={closeAll} style={{ fontSize: 13.5, color: "var(--muted)" }}>
                En ligne
              </Link>
              <Link href="/evenements" onClick={closeAll} style={{ fontSize: 13.5, color: "var(--muted)" }}>
                Autres événements
              </Link>
            </div>
          </div>

          {/* Section 3 : Communauté */}
          <div style={{ marginBottom: "1.25rem" }}>
            <Link
              href="/communaute"
              onClick={closeAll}
              style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", display: "block", marginBottom: 6 }}
            >
              Communauté
            </Link>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingLeft: 12 }}>
              <Link href="/communaute" onClick={closeAll} style={{ fontSize: 13.5, color: "var(--muted)" }}>
                Membres
              </Link>
              <a
                href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
                target="_blank"
                rel="noreferrer"
                onClick={closeAll}
                style={{ fontSize: 13.5, color: "var(--muted)" }}
              >
                Rejoindre
              </a>
            </div>
          </div>

          {/* Section 4 : Entreprise */}
          <div style={{ marginBottom: "1.5rem" }}>
            <Link
              href="/partenaires"
              onClick={closeAll}
              style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", display: "block", marginBottom: 6 }}
            >
              Entreprise
            </Link>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingLeft: 12 }}>
              <Link href="/partenaires" onClick={closeAll} style={{ fontSize: 13.5, color: "var(--muted)" }}>
                Partenaires
              </Link>
              <Link href="/media" onClick={closeAll} style={{ fontSize: 13.5, color: "var(--muted)" }}>
                Médias
              </Link>
            </div>
          </div>

          {/* Bouton d'action WhatsApp Mobile */}
          <a
            href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
            target="_blank"
            rel="noreferrer"
            onClick={closeAll}
            className="btn btn-p"
            style={{ width: "100%", justifyContent: "center", padding: "0.75rem", fontSize: 14, fontWeight: 700 }}
          >
            Rejoindre la communauté WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
