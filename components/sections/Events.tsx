"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, Check, ChevronLeft, ChevronRight } from "lucide-react";

interface EventItem {
  num: string;
  tag: string;
  tagClass: string;
  title: string;
  subtitle: string;
  poster: string;
  points: string[];
  speakerName: string;
  speakerRole: string;
  speakerAvatar: string | null;
  speakerInitials: string;
  format: string;
  detailUrl?: string;
  reserveUrl?: string;
}

const EVENTS: EventItem[] = [
  {
    num: "01",
    tag: "Intégration",
    tagClass: "event-tag",
    title: "Back to School 2026 — Paris & Lyon",
    subtitle: "Bienvenue en France ! Balade urbaine, rencontres, bons plans & bowling",
    poster: "/images/events/affiche-back-to-school.jpg",
    format: "Balade découverte gratuite · Bowling convivial en option",
    points: [
      "Samedi 24 Octobre 2026 en simultané à Paris et à Lyon",
      "Balade pour découvrir la ville et repérer ses repères d'installation",
      "Échanges avec la communauté tech et partage de bons plans pratiques",
      "Session bowling en option pour prolonger le moment en toute convivialité",
    ],
    speakerName: "Camer'Tech Europe & Cam Wonders",
    speakerRole: "Accueil · Réseau · Intégration Paris & Lyon",
    speakerAvatar: null,
    speakerInitials: "BTS",
    detailUrl: "/evenements/back-to-school",
    reserveUrl: "https://linktr.ee/CamerTechEurope",
  },
  {
    num: "02",
    tag: "Carrière",
    tagClass: "event-tag",
    title: "Réussir ses entretiens en ESN & Grands Groupes",
    subtitle: "Workshop immersif de simulation et préparation aux recrutements tech",
    poster: "/images/events/affiche-entretiens.jpg",
    format: "Workshop interactif & Coaching individuel",
    points: [
      "Simulations d'entretiens RH et techniques en conditions réelles",
      "Conseils spécifiques aux ESN et grilles de salaires en Europe",
      "Stratégies de négociation et valorisation des expériences",
      "Feedback personnalisé et revues de CV par des experts seniors",
    ],
    speakerName: "Workshop Collectif",
    speakerRole: "Simulation · Feedback · Coaching RH",
    speakerAvatar: null,
    speakerInitials: "CT",
  },
  {
    num: "03",
    tag: "Inspiration",
    tagClass: "event-tag y",
    title: "William Elong Live — De Yaoundé à Forbes Top 30",
    subtitle: "Rencontre d'exception avec un pionnier des technologies émergentes",
    poster: "/images/events/affiche-william-elong.jpg",
    format: "Conférence Keynote & Session Q&A",
    points: [
      "Freelancing d'élite & structuration de levées de fonds tech",
      "Signature de contrats et projets d'envergure internationale",
      "Intelligence artificielle, drones civils et souveraineté africaine",
      "Parcours entrepreneurial, échecs surmontés et vision stratégique",
    ],
    speakerName: "William Elong",
    speakerRole: "Entrepreneur · Forbes Top 30 Africa",
    speakerAvatar: "/images/speakers/william-elong.jpg",
    speakerInitials: "WE",
  },
  {
    num: "04",
    tag: "Masterclass",
    tagClass: "event-tag",
    title: "Steve Nouyep — Data Science & Cybersécurité",
    subtitle: "Démonstrations avancées sur la détection des menaces par la data",
    poster: "/images/events/affiche-steve-nouyep.jpg",
    format: "Masterclass Technique & Démo Live",
    points: [
      "La data au cœur de la détection d'intrusions et des SOC modernes",
      "Modélisation statistique et détection d'anomalies en temps réel",
      "Sécurisation des architectures cloud et conformité réglementaire",
      "Cas pratiques réels et retours d'expérience sur incidents majeurs",
    ],
    speakerName: "Steve Nouyep",
    speakerRole: "Lead Data Analyst · Expert Cybersécurité",
    speakerAvatar: "/images/speakers/steve-nouyep.jpg",
    speakerInitials: "SN",
  },
];

export default function Events({ isHomePreview = false }: { isHomePreview?: boolean }) {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollByAmount = (direction: "left" | "right") => {
    if (trackRef.current) {
      const amount = 380;
      trackRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 320);
    }
  };

  return (
    <section id="events">
      <div className="ct">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: "1.5rem" }}>
          <div className="rev">
            <div className="label">Nos initiatives</div>
            <h2 className="sec">Des événements <span className="g">qui transforment.</span></h2>
            <p className="desc">Trois formats complémentaires au service de l&apos;accélération professionnelle, du réseau et de l&apos;impact.</p>
          </div>

          {/* Controls */}
          <div className="rev" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="carousel-counter-tag">03 FORMATS D&apos;EXCELLENCE</span>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <button
                type="button"
                onClick={() => scrollByAmount("left")}
                disabled={!canScrollLeft}
                className="carousel-nav-btn"
                aria-label="Format précédent"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount("right")}
                disabled={!canScrollRight}
                className="carousel-nav-btn"
                aria-label="Format suivant"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel horizontal pour éviter la superposition excessive */}
        <div
          ref={trackRef}
          onScroll={checkScroll}
          className="events-carousel-track"
        >
          {EVENTS.map((e, idx) => (
            <div key={idx} className="event-slide">
              <div className="card event-card rev" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div className="event-thumb" style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                    <Image
                      src={e.poster}
                      alt={e.title}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.4s" }}
                      className="hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                    <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)", padding: "4px 8px", borderRadius: 6, color: "#fff", fontSize: 11, fontWeight: 700 }}>
                      Format {e.num}
                    </div>
                  </div>

                  <div className="event-body" style={{ position: "relative" }}>
                    <span className="event-num-bg">{e.num}</span>
                    <span className={e.tagClass}>{e.tag}</span>
                    <h3 className="event-title" style={{ fontSize: 17, fontWeight: 700, marginBottom: 12 }}>
                      {e.title}
                    </h3>

                    <ul className="event-list">
                      {e.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>

                    <div className="speaker-row" style={{ marginTop: 16 }}>
                      <div className="s-avatar">
                        {e.speakerAvatar ? (
                          <Image
                            src={e.speakerAvatar}
                            alt={e.speakerName}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="36px"
                          />
                        ) : (
                          e.speakerInitials
                        )}
                      </div>
                      <div>
                        <div className="s-name">{e.speakerName}</div>
                        <div className="s-role">{e.speakerRole}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bouton d'action interactif */}
                <div style={{ padding: "0 1.5rem 1.5rem" }}>
                  <button
                    onClick={() => setSelectedEvent(e)}
                    className="btn btn-o"
                    style={{ width: "100%", justifyContent: "center", fontSize: 13, padding: "0.55rem 1rem" }}
                  >
                    Découvrir les détails &amp; S&apos;inscrire <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isHomePreview && (
          <div className="rev" style={{ textAlign: "center", marginTop: "2.75rem" }}>
            <Link
              href="/evenements"
              className="btn btn-o"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              Voir le détail complet des événements &amp; s&apos;inscrire <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>

      {/* Modal interactif détails événement */}
      {selectedEvent && (
        <div
          onClick={() => setSelectedEvent(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="card"
            style={{
              maxWidth: 720,
              width: "100%",
              background: "var(--card)",
              overflow: "hidden",
              position: "relative",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border2)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className={selectedEvent.tagClass} style={{ margin: 0 }}>
                  {selectedEvent.tag}
                </span>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>· Format officiel</span>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                style={{ background: "transparent", border: "none", color: "var(--muted)", cursor: "pointer", display: "flex", alignItems: "center" }}
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ overflowY: "auto", padding: "1.5rem" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
                <Image
                  src={selectedEvent.poster}
                  alt={selectedEvent.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="700px"
                />
              </div>

              <h3 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 6 }}>
                {selectedEvent.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--green)", fontWeight: 600, marginBottom: 16 }}>
                {selectedEvent.subtitle}
              </p>

              <div style={{ background: "var(--bg2)", padding: "1rem 1.25rem", borderRadius: 8, marginBottom: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "var(--muted)", letterSpacing: "0.5px", marginBottom: 4 }}>
                  Format de la session
                </div>
                <div style={{ fontSize: 14, color: "var(--text)", fontWeight: 500 }}>
                  {selectedEvent.format}
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "var(--text)", letterSpacing: "0.5px", marginBottom: 10 }}>
                  Programme &amp; Enseignements clés
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {selectedEvent.points.map((pt, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, color: "var(--muted)" }}>
                      <Check size={16} style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intervenant */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "1rem", background: "var(--bg2)", borderRadius: 10 }}>
                <div className="s-avatar" style={{ width: 44, height: 44 }}>
                  {selectedEvent.speakerAvatar ? (
                    <Image src={selectedEvent.speakerAvatar} alt={selectedEvent.speakerName} fill style={{ objectFit: "cover" }} sizes="44px" />
                  ) : (
                    selectedEvent.speakerInitials
                  )}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{selectedEvent.speakerName}</div>
                  <div style={{ fontSize: 12.5, color: "var(--muted)" }}>{selectedEvent.speakerRole}</div>
                </div>
              </div>
            </div>

            <div style={{ padding: "1.25rem 1.5rem", borderTop: "1px solid var(--border2)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <button onClick={() => setSelectedEvent(null)} className="btn btn-o" style={{ fontSize: 13 }}>
                  Fermer
                </button>
                {selectedEvent.detailUrl && (
                  <Link
                    href={selectedEvent.detailUrl}
                    onClick={() => setSelectedEvent(null)}
                    className="btn btn-o"
                    style={{ fontSize: 13 }}
                  >
                    Voir la page détaillée
                  </Link>
                )}
              </div>
              <a
                href={selectedEvent.reserveUrl || "https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"}
                target="_blank"
                rel="noreferrer"
                onClick={() => setSelectedEvent(null)}
                className="btn btn-p"
                style={{ fontSize: 13 }}
              >
                {selectedEvent.reserveUrl ? "Réserver sur Linktree" : "Participer à la prochaine édition"} <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
