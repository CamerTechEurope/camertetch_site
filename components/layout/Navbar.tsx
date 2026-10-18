"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/layout/ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/mission", label: "Mission" },
  { href: "/camertech-connect", label: "CamerTech Connect" },
  { href: "/evenements", label: "Événements" },
  { href: "/communaute", label: "Communauté" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/media", label: "Médiathèque" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={active ? "active" : ""}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="nav-right">
            {/* Unique toggle mode sombre/clair fiable et réactif */}
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
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              style={{
                color: pathname === item.href ? "var(--green)" : undefined,
                fontWeight: pathname === item.href ? 700 : 500,
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/linkedin"
            onClick={closeMobile}
            style={{
              color: pathname === "/linkedin" ? "var(--green)" : undefined,
            }}
          >
            Activité LinkedIn
          </Link>
          <a
            href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
            target="_blank"
            rel="noreferrer"
            onClick={closeMobile}
            style={{ color: "var(--green)", fontWeight: 700 }}
          >
            Rejoindre la communauté WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
