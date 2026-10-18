"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Mic, Briefcase, MapPin, X, ChevronLeft, ChevronRight, Tag, ArrowRight } from "lucide-react";

const SPEAKERS = [
  {
    name: "William Elong",
    role: "Entrepreneur · Forbes Top 30 Africa",
    bio: "Créateur du premier drone civil camerounais, expert IA & cybersécurité.",
    topic: "Keynote : IA & Innovation Africaine",
    avatar: "/images/speakers/william-elong.jpg",
    initials: "WE",
  },
  {
    name: "Steve Nouyep",
    role: "Expert Data · Cybersécurité",
    bio: "Spécialiste de la détection de menaces par l'analyse avancée de données.",
    topic: "Masterclass : Data au cœur de la Sécurité",
    avatar: "/images/speakers/steve-nouyep.jpg",
    initials: "SN",
  },
  {
    name: "Armand Claude Abanda",
    role: "UNESCO · IAI-Cameroun",
    bio: "Titulaire de la chaire UNESCO accès TIC, Représentant Résident IAI-Cameroun.",
    topic: "Panel : Formation & Diaspora Tech",
    avatar: "/images/speakers/rep.jpg",
    initials: "AA",
  },
  {
    name: "Richard-Nadine Etoundi",
    role: "Directrice Talents · Groupe Orange",
    bio: "Accompagnement des talents tech et inclusion dans les grands groupes européens.",
    topic: "Atelier : Carrières & Recrutement Corporate",
    avatar: "/images/speakers/nadine.jpg",
    initials: "RE",
  },
  {
    name: "Steve Elanga",
    role: "Lead Data Engineer",
    bio: "Expert architectures cloud et données massives pour entreprises européennes.",
    topic: "Panel : Architectures Cloud & Big Data",
    avatar: "/images/speakers/elanga.jpg",
    initials: "SE",
  },
];

const GALLERY_IMAGES = [
  { src: "/images/connect/hero-galerie.jpg", title: "Session plénière et accueil des talents" },
  { src: "/images/connect/01.jpg", title: "Échanges networking et opportunités" },
  { src: "/images/connect/02.jpg", title: "Masterclass technique en direct" },
  { src: "/images/connect/03.jpg", title: "Coaching carrière et revues de CV" },
  { src: "/images/connect/04.jpg", title: "Intervention des speakers d'honneur" },
  { src: "/images/connect/05.jpg", title: "Rencontres entre ingénieurs et recruteurs" },
  { src: "/images/connect/06.jpg", title: "Afterwork et clôture festive" },
];

export default function CamertechConnect({ isHomePreview = false }: { isHomePreview?: boolean }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const speakersTrackRef = useRef<HTMLDivElement>(null);
  const [canScrollSpeakersLeft, setCanScrollSpeakersLeft] = useState(false);
  const [canScrollSpeakersRight, setCanScrollSpeakersRight] = useState(true);

  const checkSpeakersScroll = () => {
    if (speakersTrackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = speakersTrackRef.current;
      setCanScrollSpeakersLeft(scrollLeft > 10);
      setCanScrollSpeakersRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollSpeakers = (direction: "left" | "right") => {
    if (speakersTrackRef.current) {
      const amount = 300;
      speakersTrackRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
      setTimeout(checkSpeakersScroll, 320);
    }
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
  };

  return (
    <section id="connect">
      <div className="connect-glow" />
      <div className="ct">
        <div className="connect-hero rev">
          <div className="label" style={{ justifyContent: "center" }}>
            Événement phare de la communauté
          </div>
          <h2 className="connect-title">Camer<span className="g">Tech</span> Connect</h2>
          <p className="connect-theme">&ldquo;La diaspora camerounaise dans la tech : opportunités, parcours et impact.&rdquo;</p>
          <p className="connect-loc">Paris · Édition annuelle</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
            <a
              href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
              target="_blank"
              rel="noreferrer"
              className="btn btn-p"
            >
              S&apos;inscrire à la prochaine édition
            </a>
            <a href="#galerie-ctc" className="btn btn-o">Explorer la galerie photo</a>
          </div>
        </div>

        {/* Chiffres clés épurés : sur une seule ligne (ou 2 max), sans gros conteneurs */}
        <div
          className="rev"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(1.5rem, 3.5vw, 3.5rem)",
            flexWrap: "wrap",
            margin: "2.5rem 0 3.5rem",
            padding: "1.25rem 1rem",
            borderTop: "1px solid var(--border2)",
            borderBottom: "1px solid var(--border2)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Users size={20} style={{ color: "var(--green)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 800, color: "var(--text)", lineHeight: 1 }}>150+</span>
            <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>Participants</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Mic size={20} style={{ color: "var(--yellow)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 800, color: "var(--text)", lineHeight: 1 }}>8+</span>
            <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>Speakers d&apos;élite</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Briefcase size={20} style={{ color: "var(--green)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 800, color: "var(--text)", lineHeight: 1 }}>6</span>
            <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>Accords &amp; Contrats</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <MapPin size={20} style={{ color: "var(--red)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 800, color: "var(--text)", lineHeight: 1 }}>Paris</span>
            <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>Hub européen</span>
          </div>
        </div>

        {/* Galerie interactive */}
        <div id="galerie-ctc" className="rev" style={{ marginBottom: "1.5rem" }}>
          <div className="label">Galerie Photos</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
            <h3 style={{ fontFamily: "var(--display)", fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)" }}>
              Une journée <span className="g">qui marque.</span>
            </h3>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>Cliquez sur une photo pour l&apos;agrandir</span>
          </div>
        </div>

        <div
          className="rev"
          onClick={() => setLightboxIndex(0)}
          style={{ width: "100%", aspectRatio: "21/9", borderRadius: "var(--rl)", marginBottom: 16, overflow: "hidden", position: "relative", cursor: "pointer" }}
        >
          <Image
            src={GALLERY_IMAGES[0].src}
            alt={GALLERY_IMAGES[0].title}
            fill
            style={{ objectFit: "cover", transition: "transform 0.4s" }}
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>{GALLERY_IMAGES[0].title}</span>
            <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 10px", borderRadius: 6, backdropFilter: "blur(4px)" }}>Plein écran ↗</span>
          </div>
        </div>

        {isHomePreview ? (
          <div className="rev" style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              href="/camertech-connect"
              className="btn btn-p"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.85rem 1.75rem", fontSize: 15 }}
            >
              Explorer toute l&apos;édition CTC, les intervenants &amp; la galerie photo <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <>
            <div className="gallery" style={{ marginBottom: "4.5rem" }}>
              {GALLERY_IMAGES.slice(1).map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxIndex(i + 1)}
                  className="gal-item rev"
                  style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
                >
              <Image
                src={img.src}
                alt={img.title}
                fill
                style={{ objectFit: "cover", transition: "transform 0.4s" }}
                sizes="(max-width: 768px) 50vw, 360px"
              />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.2s", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 600 }} className="hover:opacity-100">
                Agrandir ⤢
              </div>
            </div>
          ))}
        </div>

        {/* Speakers - Carrousel très discret, minimaliste et fin */}
        <div className="rev" style={{ marginBottom: "1.25rem" }}>
          <div className="label">Intervenants &amp; Invités</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14 }}>
            <h3 style={{ fontFamily: "var(--display)", fontSize: "clamp(1.5rem,2.8vw,2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)" }}>
              Des voix <span className="g">qui inspirent.</span>
            </h3>

            {/* Navigation minimale et discrète */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500, marginRight: 2 }}>
                Faire défiler
              </span>
              <button
                type="button"
                onClick={() => scrollSpeakers("left")}
                disabled={!canScrollSpeakersLeft}
                className="carousel-nav-btn"
                aria-label="Intervenant précédent"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollSpeakers("right")}
                disabled={!canScrollSpeakersRight}
                className="carousel-nav-btn"
                aria-label="Intervenant suivant"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={speakersTrackRef}
          onScroll={checkSpeakersScroll}
          className="speakers-carousel-track"
        >
          {SPEAKERS.map((sp, idx) => (
            <div key={idx} className="sp-slide">
              <div className="sp-card-fine">
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <div className="sp-avatar-fine">
                      {sp.avatar ? (
                        <Image
                          src={sp.avatar}
                          alt={sp.name}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="48px"
                        />
                      ) : (
                        sp.initials
                      )}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div className="sp-name-fine">{sp.name}</div>
                      <div className="sp-role-fine">{sp.role}</div>
                    </div>
                  </div>
                  <p className="sp-bio-fine">{sp.bio}</p>
                </div>

                <div className="sp-topic-fine">
                  <Tag size={12} style={{ color: "var(--green)", flexShrink: 0 }} />
                  <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {sp.topic}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Features tracks */}
        <div className="feats rev">
          <div className="feat">
            <div className="feat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
            </div>
            <div className="feat-name">Conférences</div>
          </div>
          <div className="feat">
            <div className="feat-icon" style={{ color: "var(--yellow)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="feat-name">Networking</div>
          </div>
          <div className="feat">
            <div className="feat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <div className="feat-name">CV Review</div>
          </div>
          <div className="feat">
            <div className="feat-icon" style={{ color: "var(--yellow)" }}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </div>
            <div className="feat-name">Mentorat</div>
          </div>
          <div className="feat">
            <div className="feat-icon" style={{ color: "var(--red)" }}>
              <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
            </div>
            <div className="feat-name">Pitch Projects</div>
          </div>
          <div className="feat">
            <div className="feat-icon">
              <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
            </div>
            <div className="feat-name">Aftermovie</div>
          </div>
        </div>
        </>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div style={{ position: "absolute", top: 20, right: 24, display: "flex", gap: 12, zIndex: 10 }}>
            <button
              onClick={() => setLightboxIndex(null)}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Fermer"
            >
              <X size={22} />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: 960, width: "100%", maxHeight: "80vh", aspectRatio: "16/9" }}
          >
            <Image
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].title}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 1000px) 100vw, 960px"
              priority
            />
          </div>

          <div style={{ marginTop: 18, color: "#fff", textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 600 }}>{GALLERY_IMAGES[lightboxIndex].title}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            style={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Photo précédente"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            style={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Photo suivante"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
