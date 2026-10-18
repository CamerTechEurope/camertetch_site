"use client";
import { useState } from "react";
import { MessageCircle, FileText, Calendar, X, CheckCircle2, ArrowRight } from "lucide-react";

export default function CtaFinal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Ingénieur / Développeur",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", role: "Ingénieur / Développeur", message: "" });
    setModalOpen(false);
  };

  return (
    <section id="final">
      <div className="ct">
        <div className="final-inner rev">
          <div className="final-title">
            Ensemble, on transforme les connexions en <span className="g">opportunités.</span>
          </div>
          <p className="final-desc">
            Camer&apos;Tech Europe, c&apos;est le mouvement tech de la diaspora camerounaise. Ambitieux, structuré, humain.
          </p>
          <div className="final-btns">
            <a
              href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
              target="_blank"
              rel="noreferrer"
              className="btn btn-p"
            >
              <MessageCircle size={16} /> Rejoindre la communauté
            </a>
            <a href="#events" className="btn btn-o">
              <Calendar size={16} /> Voir les événements
            </a>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn btn-o"
            >
              <FileText size={16} /> Via formulaire
            </button>
          </div>
        </div>
      </div>

      {/* Modal interactif du formulaire d'adhésion sans saturer la page */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
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
              maxWidth: 520,
              width: "100%",
              background: "var(--card)",
              borderRadius: "var(--rl)",
              padding: "2rem",
              position: "relative",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
              <div>
                <span className="label" style={{ marginBottom: 4 }}>Adhésion &amp; Contact</span>
                <h3 style={{ fontFamily: "var(--display)", fontSize: 20, fontWeight: 700, color: "var(--text)" }}>
                  Rejoindre Camer&apos;<span className="g">Tech</span> Europe
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--border2)",
                  borderRadius: 8,
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--text)",
                }}
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <CheckCircle2 size={48} style={{ color: "var(--green)", margin: "0 auto 1rem" }} />
                <h4 style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
                  Demande bien transmise !
                </h4>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  Merci {formData.name || "cher membre"}. Notre équipe vous recontactera très prochainement.
                  Vous pouvez également intégrer directement notre groupe WhatsApp pour échanger dès aujourd&apos;hui.
                </p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                  <a
                    href="https://chat.whatsapp.com/JMfCwBhvTElKcznb1qyH6S?s=cl&p=i&ilr=4&iam=0"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-p"
                    style={{ fontSize: 13 }}
                  >
                    <MessageCircle size={15} /> Ouvrir WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-o"
                    style={{ fontSize: 13 }}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>
                    Nom &amp; Prénom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ex. Jean Dupont"
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      borderRadius: 8,
                      border: "1px solid var(--border2)",
                      background: "var(--bg2)",
                      color: "var(--text)",
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre.email@domaine.com"
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      borderRadius: 8,
                      border: "1px solid var(--border2)",
                      background: "var(--bg2)",
                      color: "var(--text)",
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>
                    Profil / Spécialité
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      borderRadius: 8,
                      border: "1px solid var(--border2)",
                      background: "var(--bg2)",
                      color: "var(--text)",
                      fontSize: 14,
                      outline: "none",
                    }}
                  >
                    <option value="Ingénieur / Développeur">Ingénieur / Développeur</option>
                    <option value="Data & IA Engineer">Data &amp; IA Engineer</option>
                    <option value="Cybersécurité & Réseaux">Cybersécurité &amp; Réseaux</option>
                    <option value="DevOps & Cloud">DevOps &amp; Cloud</option>
                    <option value="Entrepreneur / Fondateur">Entrepreneur / Fondateur</option>
                    <option value="Étudiant en formation tech">Étudiant en formation tech</option>
                    <option value="Autre profil tech">Autre profil tech</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>
                    Votre message ou attente (optionnel)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Parlez-nous de vos projets ou de votre parcours..."
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      borderRadius: 8,
                      border: "1px solid var(--border2)",
                      background: "var(--bg2)",
                      color: "var(--text)",
                      fontSize: 14,
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                  <button type="submit" className="btn btn-p" style={{ flex: 1, justifyContent: "center" }}>
                    Envoyer ma demande <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="btn btn-o"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
