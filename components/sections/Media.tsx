"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FadeUp, stagger, fadeItem, SecLabel, SecTitle, Hl } from "@/components/ui/primitives";

/* ─────────────────────────────────────────────
   DONNÉES MÉDIA
   replays → liens cliquables vers YouTube/etc.
   articles presse → format 877×1240 (portrait)
───────────────────────────────────────────── */
type MediaItem = {
  id: string;
  type: "replay" | "aftermovie" | "presse" | "affiche";
  label: string;
  labelColor: string;
  title: string;
  desc?: string;
  date?: string;
  href: string;          // lien de destination
  thumbSrc: string | null;
  thumbPath: string;
  isPortrait?: boolean;  // true pour les articles presse 877×1240
  hasPlay?: boolean;
};

const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "replay-william",
    type: "replay",
    label: "Replay",
    labelColor: "var(--green)",
    title: "William Elong Live — Replay complet",
    desc: "IA, freelancing, levée de fonds et innovation africaine.",
    date: "Nov 2024",
    href: "https://drive.google.com/file/d/1QrhARE_leFstYDO-f45iyxFPx-ZpKHtc/view?usp=drive_link",
    thumbSrc: "/images/events/affiche-william-elong.jpg",
    thumbPath: "/images/events/affiche-william-elong.jpg",
    hasPlay: true,
  },
  {
    id: "aftermovie-ctc",
    type: "aftermovie",
    label: "Aftermovie",
    labelColor: "var(--green)",
    title: "CamerTech Connect 2024 — Aftermovie",
    desc: "Le film de l'événement. 150 participants, Paris.",
    date: "Oct 2024",
    href: "https://drive.google.com/file/d/1cOYKYoLrnt3jMIJRnp9V-vfQ8AuK3DKw/view?usp=sharing",
    thumbSrc: "/images/events/connect.jpg",
    thumbPath: "/images/events/connect.jpg",
    hasPlay: true,
  },
  {
    id: "replay-steve",
    type: "replay",
    label: "Replay",
    labelColor: "var(--green)",
    title: "Steve Nouyep — Data & Cybersécurité",
    desc: "Masterclass : la data au cœur de la détection des menaces.",
    date: "Sep 2024",
    href: "https://drive.google.com/file/d/1Rhdg1SWS9CAzgDZo5GgWRvjDxv_RpBGY/view?usp=drive_link",
    thumbSrc: "/images/events/affiche-steve-nouyep.jpg",
    thumbPath: "/images/events/affiche-steve-nouyep.jpg",
    hasPlay: true,
  },
  {
    id: "article-1",
    type: "presse",
    label: "Article",
    labelColor: "var(--yellow)",
    title: "La diaspora tech camerounaise s'organise en Europe",
    desc: "Comment Camer'Tech Europe connecte les talents africains.",
    date: "Oct 2024",
    href: "https://medium.com/votre-article-1",
    thumbSrc: "/images/media/article-1.jpg",
    thumbPath: "/images/media/article-1.jpg",
    isPortrait: true,
    hasPlay: false,
  },
  {
    id: "article-2",
    type: "presse",
    label: "Article",
    labelColor: "var(--yellow)",
    title: "CamerTech, la communauté qui connecte les talents africains",
    desc: "Reportage sur l'événement CamerTech Connect à Paris.",
    date: "Nov 2024",
    href: "#",
    thumbSrc: "/images/media/article-2.jpg",
    thumbPath: "/images/media/article-2.jpg",
    isPortrait: true,
    hasPlay: false,
  },
  {
    id: "replay-entretiens",
    type: "replay",
    label: "Workshop",
    labelColor: "var(--green)",
    title: "Réussir ses entretiens — Replay",
    desc: "Simulations, conseils ESN et préparation carrière.",
    date: "Juil 2024",
    href: "https://drive.google.com/file/d/1mApsMS3Uy5fiUgZ3vdLnQkQfa9TLzsko/view?usp=drive_link",
    thumbSrc: "/images/events/affiche-entretiens.jpg",
    thumbPath: "/images/events/affiche-entretiens.jpg",
    hasPlay: true,
  },
];

type Filter = "all" | "replay" | "presse" | "aftermovie";
const FILTERS: { key: Filter; label: string }[] = [
  { key: "all",       label: "Tout" },
  { key: "replay",    label: "Vidéos" },
  { key: "presse",    label: "Presse" },
  { key: "aftermovie",label: "Aftermovie" },
];

const SOCIALS = [
  { platform: "LinkedIn",    handle: "@CamerTechEurope", desc: "Actualités professionnelles",   href: "https://www.linkedin.com/company/camertecheurope",  Icon: LiIcon },
  { platform: "Instagram",   handle: "@CamerTechEurope", desc: "Photos & coulisses",             href: "https://instagram.com/camertech-europe",         Icon: IgIcon },
  { platform: "TikTok",      handle: "@CamerTechEurope", desc: "Shorts & replays",               href: "https://tiktok.com/@camertech-europe",           Icon: TtIcon },
  { platform: "X (Twitter)", handle: "@CamerTechEurope", desc: "Veille tech & live",             href: "https://x.com/camertech-europe",                 Icon: XIcon },
];

export default function Media() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = active === "all"
    ? MEDIA_ITEMS
    : MEDIA_ITEMS.filter(m => m.type === active || (active === "replay" && m.type === "replay") || m.type === active);

  /* Split portraits (presse) et paysages */
  const portraits  = filtered.filter(m => m.isPortrait);
  const landscapes = filtered.filter(m => !m.isPortrait);

  return (
    <section id="media" style={{ background: "var(--bg2)", padding: "7rem 0" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 1.75rem" }}>

        {/* ── HEADER ── */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "3rem" }}>
          <FadeUp>
            <SecLabel>Média</SecLabel>
            <SecTitle>Suivez <Hl>l&apos;écosystème.</Hl></SecTitle>
            <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7, maxWidth: 440, marginTop: "0.8rem" }}>
              Replays, aftermovies et articles presse — tout l&apos;univers Camer&apos;Tech en un endroit.
            </p>
          </FadeUp>

          {/* Filtres */}
          <FadeUp>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {FILTERS.map(f => (
                <button key={f.key} onClick={() => setActive(f.key)} style={{
                  background: active === f.key ? "var(--green-light)" : "var(--card)",
                  border: `1px solid ${active === f.key ? "var(--border)" : "var(--border2)"}`,
                  color: active === f.key ? "var(--green)" : "var(--muted)",
                  borderRadius: 100, padding: "6px 18px", fontSize: 13,
                  cursor: "pointer", fontFamily: "inherit", fontWeight: 500,
                  transition: "all .2s",
                }}>
                  {f.label}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* ── VIDÉOS (landscape 16/9) ── */}
        <AnimatePresence mode="wait">
          {landscapes.length > 0 && (
            <motion.div key={`land-${active}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
              <motion.div
                variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="media-land-g"
                style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: portraits.length > 0 ? "3rem" : 0 }}
              >
                {landscapes.map(item => (
                  <motion.div key={item.id} variants={fadeItem}>
                    <MediaCardLandscape item={item} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── ARTICLES PRESSE (portrait 877×1240) ── */}
        <AnimatePresence mode="wait">
          {portraits.length > 0 && (
            <motion.div key={`port-${active}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
              {active !== "all" && landscapes.length > 0 && <div style={{ height: "2rem" }} />}
              {/* Section label pour les articles */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--yellow)", letterSpacing: "2px", textTransform: "uppercase" }}>Presse & Médias</span>
                <div style={{ flex: 1, height: 1, background: "var(--border2)" }} />
              </div>
              <motion.div
                variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="media-port-g"
                style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}
              >
                {portraits.map(item => (
                  <motion.div key={item.id} variants={fadeItem}>
                    <MediaCardPortrait item={item} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── RÉSEAUX SOCIAUX ── */}
        <div style={{ marginTop: "5rem" }}>
          <FadeUp style={{ marginBottom: "1.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 18, height: 1.5, background: "var(--green)" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "var(--green)", letterSpacing: "2px", textTransform: "uppercase" }}>Réseaux sociaux</span>
            </div>
            <SecTitle md>Suivez-nous <Hl>partout.</Hl></SecTitle>
          </FadeUp>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="soc-g"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}
          >
            {SOCIALS.map(s => (
              <motion.div key={s.platform} variants={fadeItem}>
                <SocialCard {...s} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .media-land-g { grid-template-columns: repeat(3,1fr) !important; }
        .media-port-g { grid-template-columns: repeat(4,1fr) !important; }
        .soc-g        { grid-template-columns: repeat(4,1fr) !important; }
        @media(max-width:1000px){ .media-port-g { grid-template-columns: repeat(3,1fr) !important; } }
        @media(max-width:768px){ .media-land-g { grid-template-columns: 1fr !important; } .media-port-g { grid-template-columns: repeat(2,1fr) !important; } .soc-g { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:500px){ .media-port-g { grid-template-columns: 1fr !important; } .soc-g { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

/* ── Card vidéo (16:9) ── */
function MediaCardLandscape({ item }: { item: MediaItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "block", textDecoration: "none", borderRadius: 18, overflow: "hidden", background: "var(--card)", border: "1px solid var(--border2)", transition: "all .3s", boxShadow: "var(--sh)" }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = "var(--sh-lg)"; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = "var(--sh)"; el.style.borderColor = "var(--border2)"; el.style.transform = ""; }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--bg3)", overflow: "hidden" }}>
        {item.thumbSrc ? (
          <Image src={item.thumbSrc} alt={item.title} fill style={{ objectFit: "cover", transition: "transform .4s" }} sizes="(max-width:768px) 100vw, 360px" />
        ) : (
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, var(--bg3), var(--bg2))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, color: "var(--faint)", fontSize: 11 }}>
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(-45deg,transparent,transparent 10px,rgba(15,143,91,0.02) 10px,rgba(15,143,91,0.02) 11px)" }} />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" style={{ position: "relative", zIndex: 1, opacity: 0.4 }}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <code style={{ position: "relative", zIndex: 1, fontSize: 9 }}>{item.thumbPath}</code>
          </div>
        )}

        {/* Play button */}
        {item.hasPlay && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.18)", transition: "background .2s" }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.25)", transition: "transform .2s" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--green)" stroke="none">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
          </div>
        )}

        {/* External link icon */}
        <div style={{ position: "absolute", top: 10, right: 10 }}>
          <div style={{ background: "rgba(0,0,0,0.5)", borderRadius: 6, padding: "4px 6px", display: "flex", alignItems: "center", gap: 4 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "1.1rem 1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 7 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: item.labelColor, letterSpacing: "1.2px", textTransform: "uppercase" }}>{item.label}</span>
          {item.date && <span style={{ fontSize: 11, color: "var(--faint)" }}>{item.date}</span>}
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", lineHeight: 1.4, marginBottom: 5, letterSpacing: "-0.01em" }}>{item.title}</div>
        {item.desc && <div style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.5 }}>{item.desc}</div>}
      </div>
    </a>
  );
}

/* ── Card presse portrait (877×1240) ── */
function MediaCardPortrait({ item }: { item: MediaItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "block", textDecoration: "none", borderRadius: 16, overflow: "hidden", background: "var(--card)", border: "1px solid var(--border2)", transition: "all .3s", boxShadow: "var(--sh)" }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = "var(--sh-lg)"; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = "var(--sh)"; el.style.borderColor = "var(--border2)"; el.style.transform = ""; }}
    >
      {/* Image portrait — ratio 877/1240 ≈ 0.71 → aspect-ratio 5/7 */}
      <div style={{ position: "relative", aspectRatio: "5/7", background: "var(--bg3)", overflow: "hidden" }}>
        {item.thumbSrc ? (
          <Image src={item.thumbSrc} alt={item.title} fill style={{ objectFit: "cover", objectPosition: "top", transition: "transform .4s" }} sizes="(max-width:768px) 50vw, 260px" />
        ) : (
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, var(--yellow-light), var(--bg2))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, color: "var(--faint)", textAlign: "center", padding: "1rem" }}>
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(-45deg,transparent,transparent 10px,rgba(200,154,42,0.03) 10px,rgba(200,154,42,0.03) 11px)" }} />
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="1.2" strokeLinecap="round" style={{ position: "relative", zIndex: 1, opacity: 0.5 }}>
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
              <path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>
            </svg>
            <div style={{ position: "relative", zIndex: 1 }}>
              Article · 877×1240<br />
              <code style={{ fontSize: 9, opacity: 0.65 }}>{item.thumbPath}</code>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)", opacity: 0, transition: "opacity .3s" }} className="port-overlay" />

        {/* Tag */}
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <span style={{ background: "rgba(200,154,42,0.9)", backdropFilter: "blur(8px)", color: "#fff", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>
            {item.label}
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "1rem 1.1rem" }}>
        <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--text)", lineHeight: 1.4, marginBottom: 4, letterSpacing: "-0.01em" }}>{item.title}</div>
        {item.date && <div style={{ fontSize: 11.5, color: "var(--faint)", display: "flex", alignItems: "center", gap: 6 }}>
          <span>{item.date}</span>
          <span>·</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          <span>Lire l&apos;article</span>
        </div>}
      </div>
    </a>
  );
}

/* ── Social card ── */
function SocialCard({ platform, handle, desc, href, Icon }: { platform: string; handle: string; desc: string; href: string; Icon: React.FC }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, padding: "1.1rem 1.2rem", background: "var(--card)", border: "1px solid var(--border2)", borderRadius: 14, textDecoration: "none", transition: "all .3s", boxShadow: "var(--sh)" }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = "var(--sh-lg)"; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = "var(--sh)"; el.style.borderColor = "var(--border2)"; el.style.transform = ""; }}
    >
      <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--green-light)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green)", flexShrink: 0 }}>
        <Icon />
      </div>
      <div style={{ overflow: "hidden" }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em" }}>{platform}</div>
        <div style={{ fontSize: 12, color: "var(--green)", marginTop: 1 }}>{handle}</div>
        <div style={{ fontSize: 11.5, color: "var(--faint)", marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{desc}</div>
      </div>
    </a>
  );
}

function LiIcon() { return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>; }
function IgIcon() { return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>; }
function TtIcon() { return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 6.3 6.34 6.34 0 0 0 12.67 0V8.82a8.21 8.21 0 0 0 4.83 1.56V6.95a4.86 4.86 0 0 1-1.06-.26z"/></svg>; }
function XIcon()  { return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>; }