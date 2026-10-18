"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PILLARS = [
  {
    title: "Entraide professionnelle",
    desc: "Un réseau de solidarité où chaque membre trouve aide, conseil et soutien dans ses démarches professionnelles en Europe.",
    iconClass: "icon-green",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Mentorat",
    desc: "Connexion avec des seniors confirmés pour guider les parcours et accélérer les progressions de carrière dans la tech.",
    iconClass: "icon-green",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Collaborations",
    desc: "Création de ponts entre talents complémentaires pour nourrir des projets ambitieux en Europe et au Cameroun.",
    iconClass: "icon-yellow",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Événements exclusifs",
    desc: "Des conférences, workshops et rencontres de haut niveau pensés pour et par la communauté tech africaine en Europe.",
    iconClass: "icon-yellow",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Ressources utiles",
    desc: "Partage d'offres d'emploi, de ressources et de connaissances pour faciliter l'insertion et la montée en compétences.",
    iconClass: "icon-green",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: "Business & Talents",
    desc: "Valorisation des freelances, entrepreneurs et projets camerounais pour créer une économie communautaire forte.",
    iconClass: "icon-red",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

interface MissionProps {
  isHomePreview?: boolean;
}

export default function Mission({ isHomePreview = false }: MissionProps) {
  const items = isHomePreview ? PILLARS.slice(0, 3) : PILLARS;

  return (
    <section id="mission">
      <div className="ct">
        <div className="rev">
          <div className="label">Notre mission</div>
          <h2 className="sec">Six piliers pour <span className="g">construire l&apos;impact.</span></h2>
          <p className="desc">
            Une communauté structurée autour des besoins réels des professionnels tech de la diaspora camerounaise.
          </p>
        </div>

        <div className="pillars" style={{ marginTop: "3rem" }}>
          {items.map((p, i) => (
            <div key={i} className="card pillar rev">
              <div className={`pillar-icon ${p.iconClass}`}>
                {p.icon}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        {isHomePreview && (
          <div style={{ textAlign: "center", marginTop: "2.75rem" }} className="rev">
            <Link
              href="/mission"
              className="btn btn-o"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              Découvrir les 6 piliers et notre vision complète <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
