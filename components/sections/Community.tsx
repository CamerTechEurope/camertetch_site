"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, X, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Grâce à Camer'Tech Europe, j'ai trouvé mon premier CDI à Paris en moins de 3 semaines. Le réseau est dense et les membres se soutiennent vraiment.",
    name: "Aristide M.",
    role: "Développeur Full Stack · Paris",
    initials: "AM",
    company: "Société Générale",
  },
  {
    quote: "Le workshop sur les entretiens m'a totalement préparée. J'ai décroché deux offres en alternance dans des entreprises tech de premier plan.",
    name: "Sandra N.",
    role: "Data Engineer · Lyon",
    initials: "SN",
    company: "Capgemini",
  },
  {
    quote: "CamerTech Connect a été un tournant. J'ai trouvé des collaborateurs, des early adopters et un premier client le même jour.",
    name: "Kevin F.",
    role: "Entrepreneur Tech · Berlin",
    initials: "KF",
    company: "Fondateur SaaS",
  },
  {
    quote: "La force du réseau, c'est l'accès direct aux décideurs, les partages d'expérience sans langue de bois et la bienveillance des membres confirmés.",
    name: "Carine E.",
    role: "Lead Cloud Architect · Bruxelles",
    initials: "CE",
    company: "AWS Partner",
  },
  {
    quote: "Un cadre exceptionnel pour échanger sans filtre sur nos défis en entreprise européenne et bâtir des projets d'envergure internationale.",
    name: "Marc T.",
    role: "Consultant Cyber · Francfort",
    initials: "MT",
    company: "CyberSec Europe",
  },
];

const MEMBERS = [
  { name: "Edson K.", role: "DataOps Engineer", domain: "Data & Cloud", loc: "Paris", initials: "EK", avatar: "/images/community/member-1.jpg" },
  { name: "Paul A.", role: "DevOps · AWS", domain: "Infrastructure", loc: "Amsterdam", initials: "PA", avatar: null },
  { name: "Inès K.", role: "Data Scientist", domain: "IA & Analytics", loc: "Paris", initials: "IK", avatar: null },
  { name: "Boris N.", role: "Cybersécurité", domain: "SecOps", loc: "Bruxelles", initials: "BN", avatar: null },
  { name: "Claire M.", role: "Product Manager", domain: "Product & UX", loc: "Londres", initials: "CM", avatar: null },
  { name: "Jules B.", role: "Freelance Backend", domain: "Software", loc: "Zurich", initials: "JB", avatar: null },
];

export default function Community({ isHomePreview = false }: { isHomePreview?: boolean }) {
  const [photoOpen, setPhotoOpen] = useState(false);

  const testiTrackRef = useRef<HTMLDivElement>(null);
  const [canScrollTestiLeft, setCanScrollTestiLeft] = useState(false);
  const [canScrollTestiRight, setCanScrollTestiRight] = useState(true);

  const checkTestiScroll = () => {
    if (testiTrackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = testiTrackRef.current;
      setCanScrollTestiLeft(scrollLeft > 10);
      setCanScrollTestiRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollTesti = (direction: "left" | "right") => {
    if (testiTrackRef.current) {
      const amount = 380;
      testiTrackRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
      setTimeout(checkTestiScroll, 320);
    }
  };

  const membersTrackRef = useRef<HTMLDivElement>(null);
  const [canScrollMembersLeft, setCanScrollMembersLeft] = useState(false);
  const [canScrollMembersRight, setCanScrollMembersRight] = useState(true);

  const checkMembersScroll = () => {
    if (membersTrackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = membersTrackRef.current;
      setCanScrollMembersLeft(scrollLeft > 10);
      setCanScrollMembersRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollMembers = (direction: "left" | "right") => {
    if (membersTrackRef.current) {
      const amount = 200;
      membersTrackRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
      setTimeout(checkMembersScroll, 320);
    }
  };

  return (
    <section id="community">
      <div className="ct">
        <div className="rev">
          <div className="label">Communauté des Talents</div>
          <h2 className="sec">Des talents qui <span className="g">inspirent.</span></h2>
          <p className="desc">
            La force de Camer&apos;Tech Europe, ce sont ses membres — étudiants, ingénieurs, chercheurs et entrepreneurs unis autour d&apos;une même ambition d&apos;excellence.
          </p>
        </div>

        {!isHomePreview && (
          <div
            className="rev"
            onClick={() => setPhotoOpen(true)}
            style={{ width: "100%", aspectRatio: "21/8", borderRadius: "var(--rl)", margin: "3rem 0", position: "relative", overflow: "hidden", cursor: "pointer" }}
          >
            <Image
              src="/images/community/photo-groupe.jpg"
              alt="Membres réunis de Camer'Tech Europe"
              fill
              style={{ objectFit: "cover", transition: "transform 0.4s" }}
              className="hover:scale-105"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem 1.75rem", background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Rassemblement annuel des membres · Promotion 2024</span>
              <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 10px", borderRadius: 6, backdropFilter: "blur(4px)" }}>Agrandir la photo ↗</span>
            </div>
          </div>
        )}

        {/* Testimonials / Retours d'expérience en carrousel horizontal */}
        <div className="rev" style={{ marginTop: "2rem", marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14 }}>
            <div>
              <div className="label">Retours d&apos;expérience</div>
              <h3 style={{ fontFamily: "var(--display)", fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)" }}>
                Ce que disent <span className="g">nos membres.</span>
              </h3>
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500, marginRight: 2 }}>
                Faire défiler
              </span>
              <button
                type="button"
                onClick={() => scrollTesti("left")}
                disabled={!canScrollTestiLeft}
                className="carousel-nav-btn"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollTesti("right")}
                disabled={!canScrollTestiRight}
                className="carousel-nav-btn"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={testiTrackRef}
          onScroll={checkTestiScroll}
          className="testi-carousel-track"
        >
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi-slide">
              <div className="card testi rev" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <div style={{ display: "flex", gap: 3, color: "var(--yellow)" }}>
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--green)", display: "flex", alignItems: "center", gap: 4 }}>
                      <ShieldCheck size={13} /> {t.company}
                    </span>
                  </div>
                  <p className="testi-q">&ldquo;{t.quote}&rdquo;</p>
                </div>

                <div className="testi-author" style={{ marginTop: 18 }}>
                  <div className="t-avatar">{t.initials}</div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portraits membres en rail horizontal */}
        <div className="rev" style={{ marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14 }}>
            <div>
              <div className="label">Trombinoscope</div>
              <h3 style={{ fontFamily: "var(--display)", fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)" }}>
                Quelques <span className="g">visages de la communauté.</span>
              </h3>
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500, marginRight: 2 }}>
                Faire défiler
              </span>
              <button
                type="button"
                onClick={() => scrollMembers("left")}
                disabled={!canScrollMembersLeft}
                className="carousel-nav-btn"
                aria-label="Membres précédents"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollMembers("right")}
                disabled={!canScrollMembersRight}
                className="carousel-nav-btn"
                aria-label="Membres suivants"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={membersTrackRef}
          onScroll={checkMembersScroll}
          className="members-carousel-track"
        >
          {MEMBERS.map((m, idx) => (
            <div key={idx} className="member-slide">
              <div className="card m-card rev" style={{ height: "100%", transition: "transform 0.2s" }}>
                <div className="m-av">
                  {m.avatar ? (
                    <Image
                      src={m.avatar}
                      alt={m.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="56px"
                    />
                  ) : (
                    m.initials
                  )}
                </div>
                <div className="m-name">{m.name}</div>
                <div className="m-role">{m.role}</div>
                <div className="m-loc" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3, marginTop: 4 }}>
                  <MapPin size={11} /> {m.loc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="cta-strip rev">
          <div>
            <h3>Rejoignez plus de 350 membres actifs en Europe.</h3>
            <p>Étudiants, développeurs, freelances, lead techs et fondateurs — la communauté vous attend.</p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
              target="_blank"
              rel="noreferrer"
              className="btn btn-white"
            >
              Rejoindre la communauté <ArrowRight size={15} style={{ marginLeft: 4 }} />
            </a>
            {isHomePreview && (
              <Link
                href="/communaute"
                className="btn btn-o"
                style={{ background: "rgba(255,255,255,0.12)", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}
              >
                Explorer toute la communauté <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox photo groupe */}
      {photoOpen && (
        <div
          onClick={() => setPhotoOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <button
            onClick={() => setPhotoOpen(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 24,
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
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: 1100, width: "100%", maxHeight: "85vh", aspectRatio: "21/8" }}
          >
            <Image
              src="/images/community/photo-groupe.jpg"
              alt="Photo de groupe Camer'Tech Europe"
              fill
              style={{ objectFit: "contain" }}
              sizes="1100px"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
