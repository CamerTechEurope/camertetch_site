"use client";

import { useState, useId } from "react";
import {
  ChevronDown,
  Search,
  HelpCircle,
  MessageCircle,
  Mail,
  Sparkles,
  Users,
  Calendar,
  Compass,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "all" | "adhesion" | "events" | "mentorat" | "partenariat";
  categoryLabel: string;
  question: string;
  answer: string;
  highlights?: string[];
  link?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "mission-valeurs",
    category: "adhesion",
    categoryLabel: "Adhésion & Profils",
    question: "Qu'est-ce que Camer'Tech Europe et quelle est sa mission ?",
    answer:
      "Camer'Tech Europe est le réseau professionnel de référence fédérant les talents de la diaspora camerounaise dans le secteur technologique à travers l'Europe. Notre mission est de rompre l'isolement, de catalyser l'entraide professionnelle et la cooptation, d'accélérer les carrières grâce au mentorat, et de bâtir des ponts d'innovation pérennes avec l'écosystème technologique au Cameroun et en Afrique.",
    highlights: [
      "Réseau bienveillant et structuré de professionnels tech",
      "Événements réguliers en présentiel (Station F) et en ligne",
      "Ponts d'investissement et de conseil vers l'Afrique",
    ],
  },
  {
    id: "qui-peut-rejoindre",
    category: "adhesion",
    categoryLabel: "Adhésion & Profils",
    question: "Qui peut rejoindre la communauté ? Est-ce réservé aux développeurs seniors ?",
    answer:
      "Absolument pas ! Notre communauté rassemble l'ensemble des métiers de l'écosystème tech : développeurs (frontend, backend, fullstack, mobile), data scientists, ingénieurs cloud / devops, chefs de produit (PM/PO), designers UI/UX, experts en cybersécurité, consultants, fondateurs de startups, ainsi que les étudiants en fin d'études et les professionnels en reconversion vers le numérique.",
    highlights: [
      "Ouvert aux débutants, étudiants et profils confirmés",
      "Tous métiers du numérique (produit, code, data, design, infra)",
      "Bienveillance et entraide mutuelle au cœur des échanges",
    ],
    link: {
      label: "Rejoindre le groupe WhatsApp",
      href: "https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0",
      isExternal: true,
    },
  },
  {
    id: "adhesion-gratuite",
    category: "adhesion",
    categoryLabel: "Adhésion & Profils",
    question: "L'adhésion est-elle gratuite ? Y a-t-il des cotisations obligatoires ?",
    answer:
      "L'adhésion à la communauté Camer'Tech Europe est 100% gratuite. L'accès à nos salons de discussion, à la veille d'opportunités, aux offres d'emploi exclusives partagées par les membres et aux webinaires communautaires ne requiert aucune cotisation. Vous pouvez nous rejoindre immédiatement via notre groupe WhatsApp officiel ou nous envoyer votre présentation via le formulaire.",
    highlights: [
      "Adhésion et accès aux canaux d'entraide 100% gratuits",
      "Accès immédiat aux offres d'emploi partagées en interne",
    ],
  },
  {
    id: "camertech-connect-ctc",
    category: "events",
    categoryLabel: "Événements & CTC",
    question: "Qu'est-ce que l'événement Camer'Tech Connect (CTC) et comment y participer ?",
    answer:
      "Camer'Tech Connect (CTC) est notre grand événement annuel et sommet de référence. Organisé dans des lieux prestigieux (comme Station F à Paris), il rassemble plus de 150 professionnels, investisseurs et recruteurs pour des tables rondes avec des figures emblématiques de géants technologiques (Amazon, Google, Orange, etc.), des pitchs de projets innovants et des ateliers de networking ciblés. Les inscriptions sont ouvertes avant chaque édition via la billetterie officielle.",
    highlights: [
      "Lieu d'exception : Station F, Paris",
      "Intervenants prestigieux et networking qualifié",
      "Opportunités d'embauche et de partenariats concrets",
    ],
    link: {
      label: "En savoir plus sur Camer'Tech Connect",
      href: "/camertech-connect",
      isExternal: false,
    },
  },
  {
    id: "mentorat-carriere",
    category: "mentorat",
    categoryLabel: "Mentorat & Carrière",
    question: "Comment fonctionne le programme de mentorat et l'accompagnement carrière ?",
    answer:
      "Nous facilitons la mise en relation entre profils juniors ou en transition et mentors chevronnés (Staff Engineers, Tech Leads, CTOs, Managers) en poste dans de grands groupes et scale-ups européennes. Les mentors vous aident à réviser votre CV pour le marché européen, à préparer des entretiens exigeants (leedcode, system design, fit culturel) et à négocier votre rémunération.",
    highlights: [
      "Coaching personnalisé par des seniors en poste",
      "Préparation aux entretiens techniques et managériaux",
      "Relecture de CV et stratégie de positionnement",
    ],
  },
  {
    id: "offres-emploi-cooptation",
    category: "mentorat",
    categoryLabel: "Mentorat & Carrière",
    question: "Partagez-vous des offres d'emploi ou des opportunités de cooptation ?",
    answer:
      "Oui, c'est l'un des piliers majeurs de la communauté ! Nos membres partagent très régulièrement des opportunités d'embauche (CDI, alternance, stage, freelance) directement depuis leurs entreprises. Cela permet de bénéficier de cooptations internes, augmentant considérablement les chances que votre candidature soit examinée en priorité par les équipes de recrutement.",
    highlights: [
      "Cooptation directe auprès des équipes tech",
      "Offres exclusives partagées avant leur diffusion publique",
      "Conseils pratiques sur les exigences des recruteurs en Europe",
    ],
  },
  {
    id: "hors-de-france",
    category: "adhesion",
    categoryLabel: "Adhésion & Profils",
    question: "Je ne réside pas à Paris ou en France. Puis-je quand même être membre actif ?",
    answer:
      "Tout à fait ! Camer'Tech Europe a une dimension paneuropéenne. Nous comptons des membres actifs dans plusieurs régions de France, mais aussi en Allemagne, au Royaume-Uni, en Belgique, en Suisse, au Luxembourg et dans d'autres pays européens. Une grande part de nos interactions, webinaires, partages d'expériences et groupes de travail thématiques se déroule en ligne.",
    highlights: [
      "Communauté paneuropéenne active (France, Allemagne, UK, Belgique, etc.)",
      "Sessions et webinaires accessibles 100% à distance",
      "Possibilité de lancer des antennes locales dans votre ville",
    ],
  },
  {
    id: "partenariats-entreprises",
    category: "partenariat",
    categoryLabel: "Partenariats & Soutien",
    question: "Comment les entreprises et institutions peuvent-elles devenir partenaires ?",
    answer:
      "Nous collaborons étroitement avec des entreprises technologiques, des écoles et des institutions souhaitant soutenir la diversité dans la tech ou recruter des profils hautement qualifiés. Les partenariats peuvent prendre la forme de sponsoring d'événements, d'animation d'ateliers techniques, ou de sourcing de talents via notre réseau.",
    highlights: [
      "Accès à un vivier exclusif de talents qualifiés et motivés",
      "Visibilité forte auprès de la diaspora tech africaine",
      "Impact RSE et engagement concret pour la mixité",
    ],
    link: {
      label: "Contacter le pôle partenariats",
      href: "mailto:camertech.europe@gmail.com?subject=Demande%20de%20partenariat%20Camer'Tech%20Europe",
      isExternal: true,
    },
  },
  {
    id: "contribuer-benevolat",
    category: "partenariat",
    categoryLabel: "Partenariats & Soutien",
    question: "Comment puis-je m'investir ou devenir bénévole au sein du collectif ?",
    answer:
      "Camer'Tech Europe est une initiative portée avec passion par ses membres ! Que vous ayez des compétences en organisation d'événements, en communication digitale, en gestion de communauté, en modération ou que vous souhaitiez intervenir comme speaker lors de nos rencontres, nous accueillons chaleureusement toute personne désireuse de contribuer.",
    highlights: [
      "Équipe bienveillante et projets d'envergure",
      "Développement de vos compétences en leadership associatif",
      "Visibilité accrue au sein de l'écosystème",
    ],
    link: {
      label: "Échanger avec les organisateurs",
      href: "https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0",
      isExternal: true,
    },
  },
];

const CATEGORIES = [
  { id: "all", label: "Toutes les questions", icon: HelpCircle },
  { id: "adhesion", label: "Adhésion & Profils", icon: Users },
  { id: "events", label: "Événements & CTC", icon: Calendar },
  { id: "mentorat", label: "Mentorat & Carrière", icon: Compass },
  { id: "partenariat", label: "Partenariats & Soutien", icon: Handshake },
] as const;

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "mission-valeurs": true,
    "qui-peut-rejoindre": true,
  });

  const searchInputId = useId();

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQ_ITEMS.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenIds(allOpen);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.categoryLabel.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="ct">
        {/* Section Header */}
        <div className="rev" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3rem" }}>
          <div className="label">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Sparkles size={14} style={{ color: "var(--yellow)" }} /> Foire aux questions
            </span>
          </div>
          <h2 id="faq-heading" className="sec">
            Tout ce que vous voulez savoir sur <span className="g">Camer&apos;Tech Europe.</span>
          </h2>
          <p className="desc" style={{ margin: "1rem auto 0", maxWidth: "600px" }}>
            Des réponses claires et transparentes pour vous accompagner avant de rejoindre la première
            communauté tech camerounaise en Europe.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="faq-controls-box rev">
          {/* Search Bar */}
          <div className="faq-search-wrapper">
            <label htmlFor={searchInputId} className="sr-only">
              Rechercher une question fréquente
            </label>
            <div className="faq-search-bar">
              <Search size={18} className="faq-search-icon" aria-hidden="true" />
              <input
                id={searchInputId}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher par mot-clé (ex: mentorat, adhésion, CTC, Paris...)"
                className="faq-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="faq-search-clear"
                  aria-label="Effacer la recherche"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Categories Pill Buttons */}
          <div className="faq-categories" role="tablist" aria-label="Catégories de questions">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`faq-cat-btn ${isActive ? "active" : ""}`}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Actions (Expand/Collapse count indicator) */}
          <div className="faq-actions-bar">
            <span className="faq-results-count">
              {filteredItems.length} question{filteredItems.length > 1 ? "s" : ""}{" "}
              trouvée{filteredItems.length > 1 ? "s" : ""}
            </span>
            <div className="faq-expand-btns">
              <button
                type="button"
                onClick={expandAll}
                className="faq-action-link"
              >
                Tout déplier
              </button>
              <span className="faq-action-sep">•</span>
              <button
                type="button"
                onClick={collapseAll}
                className="faq-action-link"
              >
                Tout replier
              </button>
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-container" role="region" aria-label="Liste de questions et réponses">
          {filteredItems.length === 0 ? (
            <div className="faq-empty-state card">
              <HelpCircle size={40} style={{ color: "var(--muted)", margin: "0 auto 12px" }} />
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
                Aucune question ne correspond à votre recherche
              </h3>
              <p style={{ color: "var(--muted)", fontSize: 14, maxWidth: 440, margin: "0 auto 1.5rem" }}>
                Vous n&apos;avez pas trouvé votre réponse ? Posez votre question directement à notre
                équipe sur WhatsApp ou par email.
              </p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="btn btn-o"
                >
                  Réinitialiser les filtres
                </button>
                <a
                  href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-p"
                >
                  <MessageCircle size={15} /> Poser sur WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div className="faq-accordion-list">
              {filteredItems.map((item, index) => {
                const isOpen = !!openIds[item.id];
                const contentId = `faq-answer-${item.id}`;
                const triggerId = `faq-trigger-${item.id}`;

                return (
                  <div
                    key={item.id}
                    className={`faq-item card ${isOpen ? "open" : ""}`}
                    style={{ animationDelay: `${index * 0.04}s` }}
                  >
                    <button
                      type="button"
                      id={triggerId}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => toggleItem(item.id)}
                      className="faq-trigger"
                    >
                      <div className="faq-trigger-content">
                        <span className="faq-badge">{item.categoryLabel}</span>
                        <h3 className="faq-question-text">{item.question}</h3>
                      </div>
                      <div className={`faq-chevron-circle ${isOpen ? "open" : ""}`}>
                        <ChevronDown size={18} />
                      </div>
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={triggerId}
                      className={`faq-content-wrapper ${isOpen ? "expanded" : "collapsed"}`}
                    >
                      <div className="faq-content-inner">
                        <p className="faq-answer-text">{item.answer}</p>

                        {/* Highlight key takeaways if present */}
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="faq-highlights-box">
                            <div className="faq-highlights-title">Points clés à retenir :</div>
                            <ul className="faq-highlights-list">
                              {item.highlights.map((point, pIdx) => (
                                <li key={pIdx} className="faq-highlight-item">
                                  <CheckCircle2
                                    size={15}
                                    style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }}
                                  />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Direct link if present */}
                        {item.link && (
                          <div className="faq-link-wrapper">
                            <a
                              href={item.link.href}
                              target={item.link.isExternal ? "_blank" : undefined}
                              rel={item.link.isExternal ? "noreferrer" : undefined}
                              className="faq-link-btn"
                            >
                              <span>{item.link.label}</span>
                              <ArrowRight size={14} />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Bottom Help Card */}
        <div className="faq-help-card card rev" style={{ marginTop: "3.5rem" }}>
          <div className="faq-help-content">
            <div className="faq-help-icon-box">
              <MessageCircle size={26} style={{ color: "#fff" }} />
            </div>
            <div>
              <h3 className="faq-help-title">Une autre question en tête ?</h3>
              <p className="faq-help-desc">
                Notre équipe d&apos;accueil et les modérateurs sont disponibles pour répondre à toutes vos interrogations en direct.
              </p>
            </div>
          </div>

          <div className="faq-help-actions">
            <a
              href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
              target="_blank"
              rel="noreferrer"
              className="btn btn-p"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <MessageCircle size={16} /> Échanger sur WhatsApp
            </a>
            <a
              href="mailto:camertech.europe@gmail.com?subject=Question%20Camer'Tech%20Europe"
              className="btn btn-o"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <Mail size={16} /> Nous écrire par email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
