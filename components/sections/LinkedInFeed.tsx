"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Category = "all" | "events" | "jobs" | "tech";

interface Comment {
  author: string;
  role: string;
  avatarInitials: string;
  text: string;
  time: string;
}

interface Post {
  id: string;
  category: Category;
  author: string;
  authorHandle: string;
  timeAgo: string;
  content: string;
  tags: string[];
  image?: string;
  aspectRatio?: string;
  initialLikes: number;
  initialComments: number;
  shares: number;
  featuredComment?: Comment;
}

const POSTS: Post[] = [
  {
    id: "ctc-paris",
    category: "events",
    author: "Camer'Tech Europe",
    authorHandle: "@camertecheurope",
    timeAgo: "Il y a 3 jours",
    content:
      "🔥 Les préparatifs de la prochaine édition de CamerTech Connect (CTC) avancent à grand pas ! Rejoignez plus de 150 professionnels, entrepreneurs et ingénieurs à Paris. Au programme : panels exclusifs sur l'intelligence artificielle, la cybersécurité, retours d'expérience et sessions de mentorat individuel.",
    tags: ["#CamerTechConnect", "#TechDiaspora", "#NetworkingParis", "#TechAfricaine"],
    image: "/images/connect/hero-galerie.jpg",
    aspectRatio: "16/9",
    initialLikes: 142,
    initialComments: 28,
    shares: 19,
    featuredComment: {
      author: "Aristide Kamga",
      role: "Lead FullStack · Paris",
      avatarInitials: "AK",
      text: "L'édition précédente a été un vrai accélérateur pour mon réseau. Hâte d'y être !",
      time: "Il y a 2 jours",
    },
  },
  {
    id: "william-elong-replay",
    category: "tech",
    author: "Camer'Tech Europe",
    authorHandle: "@camertecheurope",
    timeAgo: "Il y a 1 semaine",
    content:
      "💡 Replay de la masterclass exceptionnelle avec William Elong (Forbes Top 30 Africa) ! 'Entreprendre dans la tech de pointe, lever des fonds et bâtir des projets panafricains à fort impact'. Un échange sans filtre et riche en enseignements concrets pour toute la diaspora.",
    tags: ["#InnovationTech", "#StartupAfrica", "#Forbes30", "#MasterclassTech"],
    image: "/images/events/affiche-william-elong.jpg",
    aspectRatio: "1/1",
    initialLikes: 118,
    initialComments: 19,
    shares: 24,
    featuredComment: {
      author: "Sandra Nguemo",
      role: "Data Engineer · Lyon",
      avatarInitials: "SN",
      text: "Excellente session, les retours sur la levée de fonds étaient particulièrement éclairants.",
      time: "Il y a 5 jours",
    },
  },
  {
    id: "job-opportunities",
    category: "jobs",
    author: "Camer'Tech Europe",
    authorHandle: "@camertecheurope",
    timeAgo: "Il y a 2 semaines",
    content:
      "🚀 Nouvelles opportunités partagées au sein du réseau Camer'Tech Europe ! Trois entreprises partenaires recrutent activement ce mois-ci : Lead DataOps (Paris/Hybride), DevOps Cloud AWS (Bruxelles/Remote), et Ingénieur Cybersécurité (Île-de-France). Membres de la communauté, consultez les offres en avant-première.",
    tags: ["#RecrutementTech", "#OpportunitésEmploi", "#DataOps", "#CloudAWS", "#Cyber"],
    image: "/images/events/camertech.jpg",
    aspectRatio: "16/9",
    initialLikes: 95,
    initialComments: 34,
    shares: 31,
    featuredComment: {
      author: "Paul Atangana",
      role: "Cloud Architect · Amsterdam",
      avatarInitials: "PA",
      text: "Offres transmises également à mon équipe. Superbe initiative pour la visibilité des talents !",
      time: "Il y a 1 semaine",
    },
  },
  {
    id: "steve-nouyep-cyber",
    category: "tech",
    author: "Camer'Tech Europe",
    authorHandle: "@camertecheurope",
    timeAgo: "Il y a 3 semaines",
    content:
      "🛡️ 'La Data au service de la Cybersécurité' : retour sur l'intervention de Steve Nouyep. Analyse des menaces complexes, détection d'anomalies à grande échelle et cas pratiques d'entreprises du CAC 40. Merci aux 90 participants connectés en direct !",
    tags: ["#Cyberdefense", "#BigData", "#ThreatDetection", "#SecOps"],
    image: "/images/events/affiche-steve-nouyep.jpg",
    aspectRatio: "1/1",
    initialLikes: 135,
    initialComments: 22,
    shares: 16,
    featuredComment: {
      author: "Kevin Fotso",
      role: "Fondateur Tech · Berlin",
      avatarInitials: "KF",
      text: "La démo sur les règles de corrélation de logs était limpide.",
      time: "Il y a 2 semaines",
    },
  },
];

export default function LinkedInFeed() {
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [likesCount, setLikesCount] = useState<Record<string, number>>(() =>
    POSTS.reduce((acc, p) => ({ ...acc, [p.id]: p.initialLikes }), {})
  );
  const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({});
  const [userComments, setUserComments] = useState<Record<string, string[]>>({});
  const [newCommentText, setNewCommentText] = useState<Record<string, string>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const feedTrackRef = useRef<HTMLDivElement>(null);
  const [canScrollFeedLeft, setCanScrollFeedLeft] = useState(false);
  const [canScrollFeedRight, setCanScrollFeedRight] = useState(true);

  const checkFeedScroll = () => {
    if (feedTrackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = feedTrackRef.current;
      setCanScrollFeedLeft(scrollLeft > 10);
      setCanScrollFeedRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollFeed = (direction: "left" | "right") => {
    if (feedTrackRef.current) {
      const amount = 420;
      feedTrackRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
      setTimeout(checkFeedScroll, 320);
    }
  };

  const toggleLike = (postId: string) => {
    const isLiked = likedPosts[postId];
    setLikedPosts((prev) => ({ ...prev, [postId]: !isLiked }));
    setLikesCount((prev) => ({
      ...prev,
      [postId]: (prev[postId] || 0) + (isLiked ? -1 : 1),
    }));
  };

  const toggleCommentSection = (postId: string) => {
    setExpandedComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handleAddComment = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    const text = newCommentText[postId]?.trim();
    if (!text) return;

    setUserComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), text],
    }));
    setNewCommentText((prev) => ({ ...prev, [postId]: "" }));
    showToast("Votre commentaire a été publié !");
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleShare = () => {
    const url = `https://www.linkedin.com/company/camertecheurope/`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      showToast("Lien de la page LinkedIn copié !");
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <section id="linkedin" style={{ background: "var(--bg)", position: "relative" }}>
      {/* Toast notification */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 9999,
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-lg)",
            color: "var(--text)",
            padding: "12px 20px",
            borderRadius: 10,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span style={{ color: "var(--green)" }}>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="ct">
        {/* Section Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div className="rev">
            <div className="label">Activité LinkedIn</div>
            <h2 className="sec">
              Le fil <span className="g">professionnel.</span>
            </h2>
            <p className="desc">
              Restez connecté aux dernières actualités, analyses et opportunités publiées sur notre page LinkedIn officielle.
            </p>
          </div>

          {/* Official badge & LinkedIn CTA */}
          <div className="rev" style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--bg2)",
                border: "1px solid var(--border2)",
                padding: "6px 14px",
                borderRadius: 100,
                fontSize: 13,
                color: "var(--text)",
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0A66C2" }} />
              <strong>+1 450</strong> abonnés
            </div>

            <a
              href="https://www.linkedin.com/company/camertecheurope/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-p"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "0.55rem 1.2rem",
                fontSize: 14,
                background: "#0A66C2",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              Suivre sur LinkedIn
            </a>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginLeft: 4 }}>
              <button
                type="button"
                onClick={() => scrollFeed("left")}
                disabled={!canScrollFeedLeft}
                className="carousel-nav-btn"
                aria-label="Post précédent"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollFeed("right")}
                disabled={!canScrollFeedRight}
                className="carousel-nav-btn"
                aria-label="Post suivant"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel horizontal des publications LinkedIn */}
        <div
          ref={feedTrackRef}
          onScroll={checkFeedScroll}
          className="linkedin-feed-track"
        >
          {POSTS.map((post) => {
            const isLiked = likedPosts[post.id];
            const currentLikes = likesCount[post.id] || post.initialLikes;
            const commentsOpen = expandedComments[post.id];
            const extraComments = userComments[post.id] || [];
            const totalComments = post.initialComments + extraComments.length;

            return (
              <div key={post.id} className="linkedin-post-slide">
                <div
                  className="card rev"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "1.5rem",
                    position: "relative",
                    borderRadius: "var(--rl)",
                    height: "100%",
                  }}
                >
                {/* Header of post */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/images/logo/favicon-light.png"
                      alt="Camer'Tech Europe"
                      fill
                      className="logo-img-light"
                      style={{ objectFit: "contain", padding: 4 }}
                      sizes="44px"
                    />
                    <Image
                      src="/images/logo/favicon-dark.png"
                      alt="Camer'Tech Europe"
                      fill
                      className="logo-img-dark"
                      style={{ objectFit: "contain", padding: 4 }}
                      sizes="44px"
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span
                        style={{
                          fontFamily: "var(--display)",
                          fontWeight: 700,
                          fontSize: 15,
                          color: "var(--text)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {post.author}
                      </span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <div style={{ fontSize: 12, color: "var(--muted)", display: "flex", alignItems: "center", gap: 6 }}>
                      <span>{post.authorHandle}</span>
                      <span>·</span>
                      <span>{post.timeAgo}</span>
                      <span>·</span>
                      <span>🌐</span>
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/company/camertecheurope/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#0A66C2",
                      fontSize: 13,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      textDecoration: "none",
                      padding: "4px 8px",
                      borderRadius: 6,
                    }}
                    title="Voir le profil"
                  >
                    + Suivre
                  </a>
                </div>

                {/* Content text */}
                <p style={{ fontSize: 14.5, lineHeight: 1.68, color: "var(--text)", marginBottom: "0.85rem" }}>
                  {post.content}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1rem" }}>
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: 12,
                        color: "#0A66C2",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Optional Media Image */}
                {post.image && (
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: post.aspectRatio || "16/9",
                      position: "relative",
                      borderRadius: "var(--r)",
                      overflow: "hidden",
                      marginBottom: "1rem",
                      border: "1px solid var(--border2)",
                    }}
                  >
                    <Image
                      src={post.image}
                      alt={post.content.slice(0, 40)}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                )}

                {/* Reactions stats summary */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 12,
                    color: "var(--muted)",
                    paddingBottom: "0.75rem",
                    borderBottom: "1px solid var(--border2)",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ fontSize: 14 }}>👍💡👏</span>
                    <span>{currentLikes} réactions</span>
                  </div>
                  <div>
                    <span>{totalComments} commentaires</span>
                    <span style={{ margin: "0 6px" }}>·</span>
                    <span>{post.shares} partages</span>
                  </div>
                </div>

                {/* Interactive Action Bar */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginTop: "auto" }}>
                  <button
                    onClick={() => toggleLike(post.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      padding: "8px 0",
                      borderRadius: 6,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 500,
                      color: isLiked ? "#0A66C2" : "var(--muted)",
                      transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "var(--bg2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={isLiked ? "#0A66C2" : "none"}
                      stroke={isLiked ? "#0A66C2" : "currentColor"}
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    <span>{isLiked ? "J'aime" : "J'aime"}</span>
                  </button>

                  <button
                    onClick={() => toggleCommentSection(post.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      padding: "8px 0",
                      borderRadius: 6,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 500,
                      color: commentsOpen ? "var(--green)" : "var(--muted)",
                      transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "var(--bg2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>Commenter</span>
                  </button>

                  <button
                    onClick={handleShare}
                    style={{
                      background: "transparent",
                      border: "none",
                      padding: "8px 0",
                      borderRadius: 6,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--muted)",
                      transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "var(--bg2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                    <span>Partager</span>
                  </button>
                </div>

                {/* Expandable Comments Drawer */}
                {commentsOpen && (
                  <div
                    style={{
                      marginTop: "1rem",
                      paddingTop: "1rem",
                      borderTop: "1px solid var(--border2)",
                    }}
                  >
                    {/* Existing featured comment */}
                    {post.featuredComment && (
                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                          background: "var(--bg2)",
                          borderRadius: 10,
                          padding: "10px 12px",
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            background: "var(--green-light)",
                            color: "var(--green)",
                            fontWeight: 700,
                            fontSize: 12,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {post.featuredComment.avatarInitials}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                              {post.featuredComment.author}
                            </span>
                            <span style={{ fontSize: 11, color: "var(--faint)" }}>
                              {post.featuredComment.time}
                            </span>
                          </div>
                          <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 4 }}>
                            {post.featuredComment.role}
                          </div>
                          <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.45 }}>
                            {post.featuredComment.text}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* New comments posted by user */}
                    {extraComments.map((commentText, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          gap: 10,
                          background: "var(--bg2)",
                          borderRadius: 10,
                          padding: "10px 12px",
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            background: "var(--green)",
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: 12,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          Moi
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                            Membre de la communauté
                          </div>
                          <p style={{ fontSize: 13, color: "var(--text2)", marginTop: 2 }}>{commentText}</p>
                        </div>
                      </div>
                    ))}

                    {/* Comment input form */}
                    <form
                      onSubmit={(e) => handleAddComment(post.id, e)}
                      style={{ display: "flex", gap: 8, marginTop: 8 }}
                    >
                      <input
                        type="text"
                        placeholder="Ajouter un commentaire…"
                        value={newCommentText[post.id] || ""}
                        onChange={(e) =>
                          setNewCommentText((prev) => ({
                            ...prev,
                            [post.id]: e.target.value,
                          }))
                        }
                        style={{
                          flex: 1,
                          background: "var(--bg)",
                          border: "1px solid var(--border2)",
                          borderRadius: 8,
                          padding: "6px 12px",
                          fontSize: 13,
                          color: "var(--text)",
                          outline: "none",
                        }}
                      />
                      <button
                        type="submit"
                        className="btn btn-p"
                        style={{ padding: "6px 14px", fontSize: 12, borderRadius: 8 }}
                      >
                        Envoyer
                      </button>
                    </form>
                  </div>
                )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner for engagement */}
        <div
          className="rev"
          style={{
            background: "linear-gradient(135deg, var(--green-light), var(--card))",
            border: "1px solid var(--border)",
            borderRadius: "var(--rl)",
            padding: "2.5rem 3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                fontWeight: 800,
                color: "var(--text)",
                marginBottom: 6,
              }}
            >
              Vous souhaitez partager une opportunité ou valoriser votre parcours ?
            </h3>
            <p style={{ color: "var(--muted)", fontSize: 15, maxWidth: 620 }}>
              Rejoignez les discussions actives sur LinkedIn et participez au rayonnement de la diaspora tech camerounaise en Europe.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://www.linkedin.com/company/camertecheurope/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-p"
              style={{ background: "#0A66C2" }}
            >
              Rejoindre notre page LinkedIn
            </a>
            <a href="#join" className="btn btn-o">
              Devenir membre actif
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
