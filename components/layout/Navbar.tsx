"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/layout/ThemeProvider";
import { Sun, Moon, Menu, X, ChevronDown, Calendar, Sparkles, Users, Building2, Film, Compass, Target, Zap, GraduationCap } from "lucide-react";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le dropdown si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
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

          {/* 4 Onglets Principaux Structurés */}
          <ul className="nav-links">
            {/* 1. Accueil */}
            <li>
              <Link href="/" onClick={closeAll}>
                Accueil
              </Link>
            </li>

            {/* 2. À propos (avec sous-menu) */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "about" ? null : "about")}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-sm rounded-md transition-colors"
                style={{
                  color: activeDropdown === "about" ? "var(--green)" : "var(--muted)",
                  background: activeDropdown === "about" ? "var(--green-dim)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                <span>À propos</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: activeDropdown === "about" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>

              {activeDropdown === "about" && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 p-2 rounded-xl border shadow-xl z-50 flex flex-col gap-1"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    boxShadow: "var(--shadow-lg)",
                  }}
                >
                  <Link
                    href="/about"
                    onClick={closeAll}
                    className="flex items-start gap-2.5 p-2 rounded-lg transition-colors hover:bg-[var(--bg2)] text-left"
                  >
                    <Compass size={17} style={{ color: "var(--green)", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div className="text-[13px] font-bold text-[var(--text)]">Notre Histoire &amp; Vision</div>
                      <div className="text-[11.5px] text-[var(--muted)]">Genèse et ambition européenne</div>
                    </div>
                  </Link>

                  <Link
                    href="/about#mission"
                    onClick={closeAll}
                    className="flex items-start gap-2.5 p-2 rounded-lg transition-colors hover:bg-[var(--bg2)] text-left"
                  >
                    <Target size={17} style={{ color: "var(--yellow)", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div className="text-[13px] font-bold text-[var(--text)]">Les 6 Piliers d&apos;Impact</div>
                      <div className="text-[11.5px] text-[var(--muted)]">Entraide, mentorat &amp; carrières</div>
                    </div>
                  </Link>

                  <Link
                    href="/about#modele"
                    onClick={closeAll}
                    className="flex items-start gap-2.5 p-2 rounded-lg transition-colors hover:bg-[var(--bg2)] text-left"
                  >
                    <Zap size={17} style={{ color: "var(--green)", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div className="text-[13px] font-bold text-[var(--text)]">Modèle Opérationnel</div>
                      <div className="text-[11.5px] text-[var(--muted)]">Comment nous passons à l&apos;action</div>
                    </div>
                  </Link>
                </div>
              )}
            </li>

            {/* 3. Événements (avec sélecteur d'événements) */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown("events")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "events" ? null : "events")}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-sm rounded-md transition-colors"
                style={{
                  color: activeDropdown === "events" ? "var(--green)" : "var(--muted)",
                  background: activeDropdown === "events" ? "var(--green-dim)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                <span>Événements</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: activeDropdown === "events" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>

              {activeDropdown === "events" && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 p-2 rounded-xl border shadow-xl z-50 flex flex-col gap-1"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    boxShadow: "var(--shadow-lg)",
                  }}
                >
                  <Link
                    href="/evenements"
                    onClick={closeAll}
                    className="flex items-start gap-2.5 p-2 rounded-lg transition-colors hover:bg-[var(--bg2)] text-left"
                  >
                    <Calendar size={17} style={{ color: "var(--green)", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div className="text-[13px] font-bold text-[var(--text)]">Tous les Événements</div>
                      <div className="text-[11.5px] text-[var(--muted)]">Calendrier complet &amp; formats</div>
                    </div>
                  </Link>

                  <Link
                    href="/evenements/back-to-school"
                    onClick={closeAll}
                    className="flex items-start gap-2.5 p-2 rounded-lg transition-colors hover:bg-[var(--bg2)] text-left"
                    style={{ borderLeft: "2px solid var(--yellow)", background: "rgba(245, 166, 35, 0.05)" }}
                  >
                    <GraduationCap size={17} style={{ color: "var(--yellow)", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div className="text-[13px] font-bold text-[var(--text)] flex items-center gap-1.5">
                        Back to School 2026
                        <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-[rgba(245,166,35,0.18)] text-[var(--yellow)]">
                          24 Oct.
                        </span>
                      </div>
                      <div className="text-[11.5px] text-[var(--muted)]">Paris &amp; Lyon · Intégration &amp; Réseau</div>
                    </div>
                  </Link>

                  <Link
                    href="/camertech-connect"
                    onClick={closeAll}
                    className="flex items-start gap-2.5 p-2 rounded-lg transition-colors hover:bg-[var(--bg2)] text-left"
                    style={{ borderLeft: "2px solid var(--green)", background: "rgba(10, 155, 94, 0.05)" }}
                  >
                    <Sparkles size={17} style={{ color: "var(--green)", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div className="text-[13px] font-bold text-[var(--text)] flex items-center gap-1.5">
                        CamerTech Connect (CTC)
                        <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-[rgba(10,155,94,0.15)] text-[var(--green)]">
                          Phare
                        </span>
                      </div>
                      <div className="text-[11.5px] text-[var(--muted)]">Le grand sommet annuel à Paris</div>
                    </div>
                  </Link>
                </div>
              )}
            </li>

            {/* 4. Communauté & Écosystème (avec sous-menu) */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown("community")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "community" ? null : "community")}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-sm rounded-md transition-colors"
                style={{
                  color: activeDropdown === "community" ? "var(--green)" : "var(--muted)",
                  background: activeDropdown === "community" ? "var(--green-dim)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                <span>Communauté</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: activeDropdown === "community" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>

              {activeDropdown === "community" && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 p-2 rounded-xl border shadow-xl z-50 flex flex-col gap-1"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    boxShadow: "var(--shadow-lg)",
                  }}
                >
                  <Link
                    href="/communaute"
                    onClick={closeAll}
                    className="flex items-start gap-2.5 p-2 rounded-lg transition-colors hover:bg-[var(--bg2)] text-left"
                  >
                    <Users size={17} style={{ color: "var(--green)", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div className="text-[13px] font-bold text-[var(--text)]">Réseau des Talents</div>
                      <div className="text-[11.5px] text-[var(--muted)]">350+ membres en Europe</div>
                    </div>
                  </Link>

                  <Link
                    href="/partenaires"
                    onClick={closeAll}
                    className="flex items-start gap-2.5 p-2 rounded-lg transition-colors hover:bg-[var(--bg2)] text-left"
                  >
                    <Building2 size={17} style={{ color: "var(--yellow)", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div className="text-[13px] font-bold text-[var(--text)]">Partenaires &amp; Sponsors</div>
                      <div className="text-[11.5px] text-[var(--muted)]">Grandes entreprises &amp; écoles</div>
                    </div>
                  </Link>

                  <Link
                    href="/media"
                    onClick={closeAll}
                    className="flex items-start gap-2.5 p-2 rounded-lg transition-colors hover:bg-[var(--bg2)] text-left"
                  >
                    <Film size={17} style={{ color: "var(--green)", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div className="text-[13px] font-bold text-[var(--text)]">Médiathèque &amp; Affiches</div>
                      <div className="text-[11.5px] text-[var(--muted)]">Replays, photos &amp; actualités</div>
                    </div>
                  </Link>
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

      {/* Menu mobile structuré en 4 blocs clairs */}
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

          <Link href="/" onClick={closeAll} style={{ fontWeight: 700 }}>
            Accueil
          </Link>

          <div style={{ padding: "6px 0", borderTop: "1px solid var(--border2)", borderBottom: "1px solid var(--border2)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px", padding: "4px 8px" }}>
              À propos
            </div>
            <Link href="/about" onClick={closeAll} style={{ paddingLeft: 16 }}>
              Histoire, Mission &amp; Modèle
            </Link>
          </div>

          <div style={{ padding: "6px 0", borderBottom: "1px solid var(--border2)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px", padding: "4px 8px" }}>
              Événements
            </div>
            <Link href="/evenements" onClick={closeAll} style={{ paddingLeft: 16 }}>
              Tous les événements
            </Link>
            <Link href="/evenements/back-to-school" onClick={closeAll} style={{ paddingLeft: 16, color: "var(--yellow)", fontWeight: 600 }}>
              Back to School 2026 (Paris &amp; Lyon)
            </Link>
            <Link href="/camertech-connect" onClick={closeAll} style={{ paddingLeft: 16, color: "var(--green)", fontWeight: 600 }}>
              CamerTech Connect (CTC)
            </Link>
          </div>

          <div style={{ padding: "6px 0", borderBottom: "1px solid var(--border2)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px", padding: "4px 8px" }}>
              Communauté
            </div>
            <Link href="/communaute" onClick={closeAll} style={{ paddingLeft: 16 }}>
              Réseau des membres
            </Link>
            <Link href="/partenaires" onClick={closeAll} style={{ paddingLeft: 16 }}>
              Partenaires &amp; Écosystème
            </Link>
            <Link href="/media" onClick={closeAll} style={{ paddingLeft: 16 }}>
              Médiathèque &amp; Affiches
            </Link>
          </div>

          <a
            href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
            target="_blank"
            rel="noreferrer"
            onClick={closeAll}
            style={{ color: "var(--green)", fontWeight: 700, paddingTop: 8 }}
          >
            Rejoindre la communauté WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
