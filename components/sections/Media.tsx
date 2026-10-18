"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, X, ExternalLink, Share2, Film, Image as ImageIcon, ChevronLeft, ChevronRight, Eye, ArrowRight } from "lucide-react";

interface MediaItem {
  id: string;
  type: "affiche" | "video" | "presse";
  label: string;
  labelColor: string;
  title: string;
  description: string;
  image: string;
  isVideo: boolean;
  link?: string;
  duration?: string;
}

const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "back-to-school-affiche",
    type: "affiche",
    label: "Affiche Officielle",
    labelColor: "var(--yellow)",
    title: "Back to School 2026 — Paris & Lyon (24 Octobre)",
    description: "Affiche officielle de la journée d'accueil et d'intégration pour les nouveaux arrivants en France. Balade urbaine, rencontres, bons plans et bowling en option.",
    image: "/images/events/affiche-back-to-school.jpg",
    isVideo: false,
    link: "https://linktr.ee/CamerTechEurope",
  },
  {
    id: "ctc-affiche",
    type: "affiche",
    label: "Affiche Officielle",
    labelColor: "var(--green)",
    title: "CamerTech Connect 2024 — Affiche Officielle de Paris",
    description: "Identité visuelle de l'édition parisienne rassemblant plus de 150 professionnels tech, ingénieurs et fondateurs de la diaspora camerounaise.",
    image: "/images/events/connect.jpg",
    isVideo: false,
    link: "https://www.linkedin.com/company/camertecheurope/",
  },
  {
    id: "elong-affiche",
    type: "affiche",
    label: "Affiche Masterclass",
    labelColor: "#5e9eff",
    title: "William Elong Live — Affiche & Masterclass exclusive",
    description: "Affiche officielle de la session exceptionnelle consacrée à l'intelligence artificielle, au freelancing d'élite et à la levée de fonds tech.",
    image: "/images/events/affiche-william-elong.jpg",
    isVideo: false,
    link: "https://www.linkedin.com/company/camertecheurope/",
  },
  {
    id: "nouyep-affiche",
    type: "affiche",
    label: "Affiche Masterclass",
    labelColor: "var(--yellow)",
    title: "Steve Nouyep — Data & Cybersécurité moderne",
    description: "Affiche de la masterclass dédiée à la data science appliquée à la détection de menaces cyber et à l'architecture de sécurité.",
    image: "/images/events/affiche-steve-nouyep.jpg",
    isVideo: false,
    link: "https://www.linkedin.com/company/camertecheurope/",
  },
  {
    id: "entretiens-affiche",
    type: "affiche",
    label: "Affiche Recrutement",
    labelColor: "var(--green)",
    title: "Simulations d'Entretiens & Stratégie Carrière Tech",
    description: "Affiche du programme d'entraînement intensif aux entretiens d'embauche et négociation salariale pour cadres et ingénieurs tech.",
    image: "/images/events/affiche-entretiens.jpg",
    isVideo: false,
    link: "https://www.linkedin.com/company/camertecheurope/",
  },
  {
    id: "ctc-aftermovie",
    type: "video",
    label: "Aftermovie Officiel",
    labelColor: "var(--green)",
    title: "CamerTech Connect — L'Aftermovie officiel de Paris",
    description: "Revivez les temps forts, les panels, les moments d'émotion et les 150 participants rassemblés au cœur de Paris.",
    image: "/images/connect/hero-galerie.jpg",
    isVideo: true,
    duration: "4m 12s",
    link: "https://www.linkedin.com/company/camertecheurope/",
  },
  {
    id: "camertech-affiche",
    type: "affiche",
    label: "Affiche Communauté",
    labelColor: "#5e9eff",
    title: "Camer'Tech Europe — Le Mouvement Tech Diaspora",
    description: "Visuel officiel présentant la mission, les valeurs d'entraide et le réseau d'accélération des compétences tech en Europe.",
    image: "/images/events/camertech.jpg",
    isVideo: false,
    link: "https://www.linkedin.com/company/camertecheurope/",
  },
  {
    id: "presse-diaspora",
    type: "presse",
    label: "Article & Média",
    labelColor: "var(--muted)",
    title: "La diaspora tech camerounaise s'organise et pèse en Europe",
    description: "Focus média sur l'émergence d'un réseau solidaire et hautement qualifié qui structure le pont économique entre Paris et Yaoundé.",
    image: "/images/media/article-1.jpg",
    isVideo: false,
    link: "https://www.linkedin.com/company/camertecheurope/",
  },
];

export default function Media({ isHomePreview = false }: { isHomePreview?: boolean }) {
  const displayedItems = isHomePreview ? MEDIA_ITEMS.slice(0, 4) : MEDIA_ITEMS;
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
  };

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const offset = direction === "left" ? -370 : 370;
    trackRef.current.scrollBy({ left: offset, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  };

  const handleOpenMedia = (item: MediaItem) => {
    setSelectedMedia(item);
    setIsPlaying(false);
  };

  return (
    <section id="media">
      <div className="ct">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div className="rev">
            <div className="label">Médiathèque &amp; Affiches</div>
            <h2 className="sec">Suivez <span className="g">l&apos;écosystème.</span></h2>
            <p className="desc">Affiches officielles des événements, replays de masterclasses et rétrospectives.</p>
          </div>

          {/* Navigation carrousel discret et efficace */}
          <div className="rev" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="carousel-nav-btn"
                aria-label="Affiche précédente"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="carousel-nav-btn"
                aria-label="Affiche suivante"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Carrousel horizontal fluide des affiches et médias */}
        <div
          ref={trackRef}
          onScroll={checkScroll}
          className="media-carousel-track rev"
        >
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenMedia(item)}
              className="card media-card media-carousel-slide"
              style={{
                cursor: "pointer",
                transition: "transform 0.25s, box-shadow 0.25s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  className="media-thumb"
                  style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.4s" }}
                    className="hover:scale-105"
                    sizes="350px"
                  />

                  {item.isVideo ? (
                    <div className="play-btn">
                      <div className="play-circle">
                        <Play size={16} fill="white" stroke="none" style={{ marginLeft: 2 }} />
                      </div>
                    </div>
                  ) : (
                    <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)", padding: "4px 8px", borderRadius: 6, color: "#fff", fontSize: 11, fontWeight: 600 }}>
                      Affiche
                    </div>
                  )}

                  {item.duration && (
                    <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(0,0,0,0.75)", color: "#fff", fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4 }}>
                      {item.duration}
                    </div>
                  )}
                </div>

                <div className="media-info" style={{ padding: "1.1rem 1.25rem 0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <div className="media-type" style={{ color: item.labelColor, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      {item.label}
                    </div>
                    <span style={{ fontSize: 11.5, color: "var(--muted)", display: "flex", alignItems: "center", gap: 3 }}>
                      <Eye size={12} /> Cliquer pour voir
                    </span>
                  </div>
                  <div className="media-title" style={{ fontSize: 14.5, fontWeight: 700, lineHeight: 1.35, color: "var(--text)" }}>
                    {item.title}
                  </div>
                </div>
              </div>

              <div style={{ padding: "0 1.25rem 1.1rem" }}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenMedia(item);
                  }}
                  className="btn btn-o"
                  style={{ width: "100%", justifyContent: "center", fontSize: 12, padding: "0.45rem 0.8rem" }}
                >
                  {item.isVideo ? "Regarder la vidéo" : "Agrandir l'affiche"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {isHomePreview && (
          <div className="rev" style={{ textAlign: "center", marginTop: "2.75rem" }}>
            <Link
              href="/media"
              className="btn btn-o"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              Consulter toute la médiathèque &amp; les affiches officielles <ArrowRight size={15} />
            </Link>
          </div>
        )}

        {/* Modal / Vue agrandie simple qui se réduit et se ferme facilement */}
        {selectedMedia && (
          <div
            onClick={() => setSelectedMedia(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.88)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="card"
              style={{
                maxWidth: 780,
                width: "100%",
                background: "var(--card)",
                overflow: "hidden",
                position: "relative",
                maxHeight: "92vh",
                display: "flex",
                flexDirection: "column",
                boxShadow: "var(--shadow-lg)",
                borderRadius: "var(--rl)",
              }}
            >
              {/* Entête avec bouton de réduction clair */}
              <div style={{ padding: "1rem 1.5rem", borderBottom: "1px solid var(--border2)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {selectedMedia.isVideo ? <Film size={18} style={{ color: "var(--green)" }} /> : <ImageIcon size={18} style={{ color: "var(--yellow)" }} />}
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {selectedMedia.label}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedMedia(null)}
                  style={{
                    background: "var(--bg2)",
                    border: "1px solid var(--border2)",
                    borderRadius: 8,
                    padding: "4px 10px",
                    color: "var(--text)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12.5,
                    fontWeight: 600,
                  }}
                  aria-label="Réduire et fermer"
                >
                  <X size={16} /> Réduire / Fermer
                </button>
              </div>

              {/* Aperçu grand format */}
              <div style={{ position: "relative", width: "100%", maxHeight: "56vh", minHeight: "300px", background: "#0a0a0a" }}>
                <Image
                  src={selectedMedia.image}
                  alt={selectedMedia.title}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="780px"
                  priority
                />

                {selectedMedia.isVideo && !isPlaying && (
                  <div
                    onClick={() => setIsPlaying(true)}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.45)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--green)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(15,143,91,0.5)" }}>
                      <Play size={28} fill="white" stroke="none" style={{ marginLeft: 3 }} />
                    </div>
                    <span style={{ color: "#fff", fontWeight: 600, marginTop: 12, fontSize: 14 }}>
                      Lancer la lecture {selectedMedia.duration && `(${selectedMedia.duration})`}
                    </span>
                  </div>
                )}

                {selectedMedia.isVideo && isPlaying && (
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 16, background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 13 }}>Lecture active</span>
                    <a
                      href={selectedMedia.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-p"
                      style={{ padding: "0.4rem 0.9rem", fontSize: 12 }}
                    >
                      Ouvrir sur LinkedIn <ExternalLink size={12} style={{ marginLeft: 4 }} />
                    </a>
                  </div>
                )}
              </div>

              {/* Détails */}
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <h3 style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>
                  {selectedMedia.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.55, marginBottom: 16 }}>
                  {selectedMedia.description}
                </p>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <a
                      href={selectedMedia.link || "https://www.linkedin.com/company/camertecheurope/"}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-p"
                      style={{ fontSize: 12.5, padding: "0.5rem 1rem" }}
                    >
                      Consulter sur les réseaux <ExternalLink size={13} style={{ marginLeft: 4 }} />
                    </a>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({ title: selectedMedia.title, url: window.location.href });
                        }
                      }}
                      className="btn btn-o"
                      style={{ fontSize: 12.5, padding: "0.5rem 0.9rem" }}
                    >
                      <Share2 size={13} /> Partager
                    </button>
                  </div>

                  <button
                    onClick={() => setSelectedMedia(null)}
                    className="btn btn-o"
                    style={{ fontSize: 12.5, padding: "0.5rem 1rem" }}
                  >
                    Réduire
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
