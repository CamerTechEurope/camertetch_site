"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, Target, Calendar, Users, Film } from "lucide-react";

export default function EcosystemHub() {
  return (
    <section className="ecosystem-hub" id="ecosysteme">
      <div className="ct">
        <div className="rev" style={{ textAlign: "center", maxWidth: 740, margin: "0 auto" }}>
          <div className="label" style={{ justifyContent: "center" }}>
            L&apos;Écosystème Camer&apos;Tech
          </div>
          <h2 className="sec">
            Une architecture pensée pour <span className="g">votre impact.</span>
          </h2>
          <p className="desc" style={{ margin: "0.75rem auto 0" }}>
            Découvrez nos espaces autonomes dédiés, conçus pour vous orienter directement vers ce qui compte pour vous :
          </p>
        </div>

        <div className="ecosystem-grid">
          {/* Card 1 : Highlight - CamerTech Connect */}
          <div className="ecosystem-card ecosystem-card-highlight rev">
            <div>
              <div className="ecosystem-card-badge" style={{ background: "rgba(10, 155, 94, 0.12)", color: "var(--green)" }}>
                <Sparkles size={13} /> Événement Phare · Paris
              </div>
              <h3 className="ecosystem-card-title" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}>
                Camer<span className="g">Tech</span> Connect (CTC)
              </h3>
              <p className="ecosystem-card-desc" style={{ maxWidth: 720, fontSize: 15 }}>
                Le plus grand rassemblement de la diaspora camerounaise dans la tech en Europe. Des keynotes animées par des figures de premier plan, des panels stratégiques, un espace networking privilégié et la signature d&apos;accords concrets.
              </p>
            </div>

            <div className="ecosystem-card-footer" style={{ flexWrap: "wrap" }}>
              <div className="ecosystem-card-meta">
                150+ participants · 8+ speakers d&apos;élite · Galerie photos HD
              </div>
              <Link
                href="/camertech-connect"
                className="btn btn-p"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.65rem 1.35rem" }}
              >
                Explorer CamerTech Connect <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Card 2 : Mission & Piliers */}
          <div className="ecosystem-card ecosystem-card-half rev">
            <div>
              <div className="ecosystem-card-badge" style={{ background: "rgba(224, 90, 71, 0.12)", color: "var(--red)" }}>
                <Target size={13} /> Vision &amp; 6 Piliers
              </div>
              <h3 className="ecosystem-card-title">Notre Mission &amp; Nos Piliers</h3>
              <p className="ecosystem-card-desc">
                Découvrez la feuille de route stratégique de Camer&apos;Tech Europe : entraide professionnelle, mentorat intergénérationnel, collaborations d&apos;affaires et pont technologique durable avec le Cameroun.
              </p>
            </div>

            <div className="ecosystem-card-footer">
              <span className="ecosystem-card-meta">6 piliers fondateurs</span>
              <Link
                href="/mission"
                className="btn btn-o"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "0.55rem 1.1rem" }}
              >
                Découvrir la mission <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 3 : Événements */}
          <div className="ecosystem-card ecosystem-card-half rev">
            <div>
              <div className="ecosystem-card-badge" style={{ background: "rgba(235, 168, 32, 0.14)", color: "var(--yellow)" }}>
                <Calendar size={13} /> Rencontres &amp; Ateliers
              </div>
              <h3 className="ecosystem-card-title">Événements &amp; Formats</h3>
              <p className="ecosystem-card-desc">
                Des masterclasses mensuelles, panels interactifs et ateliers intensifs de coaching pour maîtriser les technologies d&apos;avenir et accélérer votre progression professionnelle en Europe.
              </p>
            </div>

            <div className="ecosystem-card-footer">
              <span className="ecosystem-card-meta">3 formats complémentaires</span>
              <Link
                href="/evenements"
                className="btn btn-o"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "0.55rem 1.1rem" }}
              >
                Voir les événements <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 4 : Communauté */}
          <div className="ecosystem-card ecosystem-card-half rev">
            <div>
              <div className="ecosystem-card-badge" style={{ background: "rgba(10, 155, 94, 0.12)", color: "var(--green)" }}>
                <Users size={13} /> 350+ Membres Actifs
              </div>
              <h3 className="ecosystem-card-title">La Communauté des Talents</h3>
              <p className="ecosystem-card-desc">
                Étudiants en grandes écoles, ingénieurs logiciels, data scientists, lead techs et fondateurs unis au sein d&apos;un réseau de solidarité et de partage d&apos;opportunités professionnelles.
              </p>
            </div>

            <div className="ecosystem-card-footer">
              <span className="ecosystem-card-meta">France · Suisse · Allemagne · UK</span>
              <Link
                href="/communaute"
                className="btn btn-o"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "0.55rem 1.1rem" }}
              >
                Explorer la communauté <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 5 : Médiathèque & Ressources */}
          <div className="ecosystem-card ecosystem-card-half rev">
            <div>
              <div className="ecosystem-card-badge" style={{ background: "rgba(100, 116, 139, 0.14)", color: "var(--muted)" }}>
                <Film size={13} /> Archives &amp; Affiches
              </div>
              <h3 className="ecosystem-card-title">Médiathèque Officielle</h3>
              <p className="ecosystem-card-desc">
                Explorez la collection des affiches officielles de nos éditions, les retours en images, capsules vidéo et les articles de presse consacrés aux talents de notre écosystème.
              </p>
            </div>

            <div className="ecosystem-card-footer">
              <span className="ecosystem-card-meta">Affiches HD &amp; Replays vidéo</span>
              <Link
                href="/media"
                className="btn btn-o"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "0.55rem 1.1rem" }}
              >
                Accéder à la médiathèque <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
