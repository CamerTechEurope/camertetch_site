"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const LINKS = [
  { href: "/#mission",   label: "Mission" },
  { href: "/#events",    label: "Événements" },
  { href: "/#connect",   label: "CTC" },
  { href: "/#community", label: "Communauté" },
  { href: "/#media",     label: "Média" },
];

// ─── Whether the logo file exists ───
// Set USE_LOGO_IMAGE = true once you've placed /public/images/logo/logo.png
const USE_LOGO_IMAGE = true;
const LOGO_PATH = "/images/logo/logo.png";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ════════ BAR ════════ */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
        height: 66,
        background: scrolled ? "var(--card)" : "rgba(250,250,248,0)",
        borderBottom: `1px solid ${scrolled ? "var(--border2)" : "transparent"}`,
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
        backdropFilter: scrolled ? "blur(20px) saturate(1.6)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.6)" : "none",
        transition: "background .35s, border-color .35s, box-shadow .35s",
      }}>
        <div style={{
          maxWidth: 1120, margin: "0 auto", height: "100%",
          padding: "0 1.75rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "1.5rem",
        }}>

          {/* ── LOGO ── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", flexShrink: 0 }}>
            {USE_LOGO_IMAGE ? (
              /* ── LOGO IMAGE (activer quand le fichier est ajouté) ── */
              <div style={{ position: "relative", width: 40, height: 40, flexShrink: 0 }}>
                <Image
                  src={LOGO_PATH}
                  alt="Camer'Tech Europe"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            ) : (
              /* ── LOGO MARK de substitution ── */
              <div style={{
                width: 40, height: 40, borderRadius: 11,
                background: "var(--green)",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden", flexShrink: 0,
                boxShadow: "0 2px 10px rgba(15,143,91,0.3)",
              }}>
                <span style={{
                  fontFamily: "var(--font-bricolage, sans-serif)",
                  fontWeight: 900, fontSize: 14, color: "#fff",
                  letterSpacing: "-0.5px", position: "relative", zIndex: 1,
                }}>CT</span>
                {/* Barre jaune en bas — couleurs CamerTech */}
                <span style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: 4, background: "var(--yellow)", opacity: 0.88,
                }} />
              </div>
            )}

            <span style={{
              fontFamily: "var(--font-bricolage, sans-serif)",
              fontWeight: 700, fontSize: 17, color: "var(--text)",
              letterSpacing: "-0.3px", lineHeight: 1.1,
            }}>
              Camer&apos;<span style={{ color: "var(--green)" }}>Tech</span>
              <span style={{ color: "var(--muted)", fontWeight: 400, fontSize: 15 }}> Europe</span>
            </span>
          </Link>

          {/* ── NAV LINKS — desktop ── */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }} className="nav-desktop">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} style={{
                display: "block", padding: "0.42rem 0.95rem",
                color: "var(--muted)", fontSize: 14, fontWeight: 400,
                borderRadius: 8, transition: "color .2s, background .2s",
                textDecoration: "none",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.background = "var(--green-dim)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "transparent"; }}
              >{l.label}</Link>
            ))}
          </nav>

          {/* ── RIGHT ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>

            {/* Theme toggle */}
            <button onClick={toggle} aria-label="Changer le thème" style={{
              width: 40, height: 40, borderRadius: 10,
              border: "1.5px solid var(--border2)",
              background: "var(--card)",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--muted)", transition: "border-color .2s, color .2s, background .2s",
              flexShrink: 0, padding: 0, outline: "none",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.background = "var(--bg2)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "var(--card)"; }}
            >
              <AnimatePresence mode="wait">
                {theme === "light"
                  ? <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} style={{ display: "flex" }}><SunIcon /></motion.span>
                  : <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} style={{ display: "flex" }}><MoonIcon /></motion.span>
                }
              </AnimatePresence>
            </button>

            {/* CTA — desktop */}
            <Link href="/#join" className="nav-desktop" style={{
              background: "var(--green)", color: "#fff",
              padding: "0.52rem 1.25rem", borderRadius: 10,
              fontSize: 14, fontWeight: 500, textDecoration: "none",
              boxShadow: "0 2px 10px rgba(15,143,91,0.3)",
              transition: "background .2s, transform .15s, box-shadow .2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--green-h)"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(15,143,91,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--green)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 10px rgba(15,143,91,0.3)"; }}
            >Rejoindre</Link>

            {/* Hamburger — mobile */}
            <button onClick={() => setOpen(!open)} className="nav-mobile" aria-label="Menu" style={{
              display: "none", width: 40, height: 40,
              background: "none", border: "none", cursor: "pointer",
              flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 5, padding: 4,
            }}>
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}   style={{ display: "block", width: 20, height: 1.5, background: "var(--text2)", borderRadius: 2 }} />
              <motion.span animate={{ opacity: open ? 0 : 1 }}                    style={{ display: "block", width: 20, height: 1.5, background: "var(--text2)", borderRadius: 2 }} />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} style={{ display: "block", width: 14, height: 1.5, background: "var(--text2)", borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </header>

      {/* ════════ MOBILE MENU ════════ */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed", top: 66, left: 0, right: 0, zIndex: 299,
              background: "var(--card)", borderBottom: "1px solid var(--border2)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.12)", padding: "0.5rem 1.75rem 1.75rem",
            }}
          >
            {LINKS.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                <Link href={l.href} onClick={() => setOpen(false)} style={{
                  display: "block", padding: "0.9rem 0", fontSize: 16, fontWeight: 400,
                  color: "var(--muted)", borderBottom: "1px solid var(--border2)",
                  textDecoration: "none", transition: "color .2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                >{l.label}</Link>
              </motion.div>
            ))}
            <Link href="/#join" onClick={() => setOpen(false)} style={{
              display: "block", marginTop: "1.25rem", textAlign: "center",
              background: "var(--green)", color: "#fff",
              padding: "0.9rem", borderRadius: 10,
              fontSize: 15, fontWeight: 500, textDecoration: "none",
              boxShadow: "0 2px 10px rgba(15,143,91,0.3)",
            }}>Rejoindre la communauté</Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
      `}</style>
    </>
  );
}

const SunIcon = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const MoonIcon = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;