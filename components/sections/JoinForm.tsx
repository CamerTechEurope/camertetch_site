"use client";
import { useState } from "react";

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    country: "",
    linkedin: "",
    motivation: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      // Ouvre directement le groupe de la communauté WhatsApp
      window.open(
        "https://wa.me/33758000000?text=" +
          encodeURIComponent(
            `Bonjour Camer'Tech Europe, je m'appelle ${formData.name} (${formData.email}) et je souhaite rejoindre la communauté WhatsApp.`
          ),
        "_blank"
      );
      setTimeout(() => {
        setStatus("idle");
        setFormData({
          name: "",
          email: "",
          domain: "",
          country: "",
          linkedin: "",
          motivation: "",
        });
      }, 4000);
    }, 1000);
  };

  return (
    <section id="join" style={{ background: "var(--bg2)" }}>
      <div className="ct">
        <div className="join-grid">
          <div className="rev">
            <div className="label">Rejoindre</div>
            <h2 className="sec">Intégrez la <span className="g">communauté.</span></h2>
            <p className="desc" style={{ maxWidth: 400 }}>
              Remplissez ce formulaire pour rejoindre Camer&apos;Tech Europe et accéder au réseau, aux événements et aux opportunités.
            </p>
            <div className="join-perks">
              <div className="perk">
                <div className="perk-dot">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="3" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="perk-text">Accès au groupe communautaire privé WhatsApp</span>
              </div>
              <div className="perk">
                <div className="perk-dot">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="3" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="perk-text">Invitations aux événements en avant-première</span>
              </div>
              <div className="perk">
                <div className="perk-dot">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="3" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="perk-text">Partage d&apos;opportunités emploi et freelance</span>
              </div>
              <div className="perk">
                <div className="perk-dot">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="3" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="perk-text">Mentorat et networking ciblé</span>
              </div>
            </div>
          </div>

          <div className="form-box rev d1">
            <form onSubmit={handleSubmit}>
              <div className="f-row">
                <label className="f-label">Nom complet</label>
                <input
                  type="text"
                  className="f-input"
                  placeholder="Jean Kamga"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="f-row">
                <label className="f-label">Email</label>
                <input
                  type="email"
                  className="f-input"
                  placeholder="jean@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="f-row">
                <label className="f-label">Domaine tech</label>
                <select
                  className="f-input"
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                  required
                >
                  <option value="">Choisir un domaine</option>
                  <option>Développement web / mobile</option>
                  <option>Data Engineering / Science</option>
                  <option>Cybersécurité</option>
                  <option>DevOps / Cloud</option>
                  <option>Design UI/UX</option>
                  <option>Intelligence Artificielle</option>
                  <option>Entrepreneuriat tech</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="f-row">
                <label className="f-label">Pays de résidence</label>
                <select
                  className="f-input"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  required
                >
                  <option value="">Choisir un pays</option>
                  <option>France</option>
                  <option>Allemagne</option>
                  <option>Belgique</option>
                  <option>Suisse</option>
                  <option>Pays-Bas</option>
                  <option>Royaume-Uni</option>
                  <option>Espagne</option>
                  <option>Italie</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="f-row">
                <label className="f-label">Profil LinkedIn</label>
                <input
                  type="url"
                  className="f-input"
                  placeholder="https://linkedin.com/in/votre-profil"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                />
              </div>

              <div className="f-row">
                <label className="f-label">Pourquoi rejoindre Camer&apos;Tech ?</label>
                <textarea
                  className="f-input"
                  rows={3}
                  placeholder="Décrivez votre motivation…"
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn btn-p"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  background: status === "success" ? "#0d7a4e" : undefined,
                }}
                disabled={status === "loading"}
              >
                {status === "loading" && "Envoi en cours…"}
                {status === "success" && "Candidature validée ! Redirection WhatsApp..."}
                {status === "idle" && "Envoyer ma candidature"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
