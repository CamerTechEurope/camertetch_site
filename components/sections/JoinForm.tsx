"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, SecLabel, SecTitle, Hl } from "@/components/ui/primitives";

type Status = "idle" | "loading" | "success" | "error";

const DOMAINS = [
  "Développement web / mobile",
  "Data Engineering / Science",
  "Cybersécurité",
  "DevOps / Cloud",
  "Design UI/UX",
  "Intelligence Artificielle",
  "Entrepreneuriat tech",
  "Gestion de projet",
  "Autre",
];
const COUNTRIES = [
  "France",
  "Allemagne",
  "Belgique",
  "Suisse",
  "Pays-Bas",
  "Royaume-Uni",
  "Espagne",
  "Italie",
  "Suède",
  "Danemark",
  "Portugal",
  "Autre pays EU",
];

const PERKS = [
  {
    icon: <NetworkIcon />,
    label: "Accès au réseau privé",
    desc: "Groupe communautaire réservé aux membres.",
  },
  {
    icon: <CalendarIcon />,
    label: "Événements en avant-première",
    desc: "Accès prioritaire à tous nos événements.",
  },
  {
    icon: <BriefIcon />,
    label: "Opportunités emploi & freelance",
    desc: "Offres partagées en exclusivité communauté.",
  },
  {
    icon: <StarIcon />,
    label: "Mentorat & networking",
    desc: "Connexion avec des profils seniors confirmés.",
  },
];

export default function JoinForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    domain: "",
    country: "",
    linkedin: "",
    motivation: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      setErrors((err) => ({ ...err, [k]: undefined }));
    };

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Requis";
    if (!form.email.trim()) e.email = "Requis";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Email invalide";
    if (!form.domain) e.domain = "Choisir un domaine";
    if (!form.country) e.country = "Choisir un pays";
    if (!form.motivation.trim()) e.motivation = "Quelques mots suffisent";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("loading");
    try {
      /*
        ── OPTION A — AIRTABLE ──────────────────────
        await fetch("https://api.airtable.com/v0/BASE_ID/Membres", {
          method: "POST",
          headers: { "Authorization": "Bearer VOTRE_CLE", "Content-Type": "application/json" },
          body: JSON.stringify({ fields: { Nom: form.name, Email: form.email, Domaine: form.domain, Pays: form.country, LinkedIn: form.linkedin, Motivation: form.motivation } }),
        });

        ── OPTION B — WEBHOOK Make/Zapier ──────────
        await fetch("https://hook.eu1.make.com/VOTRE_WEBHOOK", {
          method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
        });

        ── OPTION C — API ROUTE NEXT.JS ────────────
        await fetch("/api/join", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      */
      await new Promise((r) => setTimeout(r, 1500)); // Simulation
      setStatus("success");
      setForm({ name: "", email: "", domain: "", country: "", linkedin: "", motivation: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="join"
      style={{
        background: "var(--bg)",
        padding: "7rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          bottom: -150,
          right: -100,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(15,143,91,0.05), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 1.75rem" }}>
        {/* ── HEADER centré ── */}
        <FadeUp style={{ textAlign: "center", marginBottom: "4rem" }}>
          <SecLabel center>Rejoindre</SecLabel>
          <SecTitle center>
            Intégrez la <Hl>communauté.</Hl>
          </SecTitle>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 16,
              lineHeight: 1.72,
              maxWidth: 480,
              margin: "0.9rem auto 0",
            }}
          >
            Remplissez ce formulaire pour rejoindre Camer&apos;Tech Europe et accéder au réseau, aux
            événements et aux opportunités exclusives.
          </p>
        </FadeUp>

        {/* ── LAYOUT ── */}
        <div
          className="join-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* ─── GAUCHE — Avantages ─── */}
          <FadeUp>
            <div style={{ position: "sticky", top: "5rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-bricolage,sans-serif)",
                  fontSize: "clamp(1.2rem,2vw,1.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: "0.5rem",
                }}
              >
                Ce que vous obtenez
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--muted)",
                  marginBottom: "2rem",
                  lineHeight: 1.6,
                }}
              >
                En rejoignant Camer&apos;Tech Europe, vous accédez à :
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  marginBottom: "2.5rem",
                }}
              >
                {PERKS.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      padding: "1rem 1.15rem",
                      background: "var(--card)",
                      border: "1px solid var(--border2)",
                      borderRadius: 14,
                      transition: "border-color .2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border2)")}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: "var(--green-light)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--green)",
                        flexShrink: 0,
                      }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "var(--text)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {p.label}
                      </div>
                      <div
                        style={{
                          fontSize: 12.5,
                          color: "var(--muted)",
                          marginTop: 2,
                          lineHeight: 1.5,
                        }}
                      >
                        {p.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social proof */}
              <div
                style={{
                  background: "var(--green-dim)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "1.2rem 1.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div style={{ display: "flex" }}>
                  {["AM", "SN", "KF", "MT"].map((ini, i) => (
                    <div
                      key={ini}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "var(--green-light)",
                        border: "2.5px solid var(--card)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-bricolage,sans-serif)",
                        fontWeight: 800,
                        fontSize: 10,
                        color: "var(--green)",
                        marginLeft: i > 0 ? -10 : 0,
                        zIndex: 4 - i,
                        position: "relative",
                      }}
                    >
                      {ini}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
                    350+ membres nous ont rejoints
                  </div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 1 }}>
                    Paris, Lyon, Berlin, Amsterdam…
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* ─── DROITE — Formulaire ─── */}
          <FadeUp delay={0.1}>
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border2)",
                borderRadius: 22,
                padding: "2.5rem",
                boxShadow: "var(--sh-md)",
              }}
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "2.5rem 1rem" }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "var(--green)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1.5rem",
                        boxShadow: "0 4px 20px rgba(15,143,91,0.35)",
                      }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-bricolage,sans-serif)",
                        fontSize: "1.6rem",
                        fontWeight: 800,
                        color: "var(--text)",
                        marginBottom: "0.6rem",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      Candidature envoyée.
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        color: "var(--muted)",
                        marginBottom: "1.75rem",
                        lineHeight: 1.65,
                      }}
                    >
                      On revient vers toi rapidement. En attendant, rejoins-nous sur LinkedIn pour
                      ne rien rater.
                    </p>
                    <a
                      href="https://www.linkedin.com/company/camertecheurope"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "var(--green)",
                        color: "#fff",
                        padding: "0.8rem 1.6rem",
                        borderRadius: 10,
                        fontSize: 15,
                        fontWeight: 500,
                        textDecoration: "none",
                        boxShadow: "0 2px 12px rgba(15,143,91,0.3)",
                      }}
                    >
                      Suivre sur LinkedIn →
                    </a>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {/* Titre formulaire */}
                    <div
                      style={{
                        marginBottom: "2rem",
                        paddingBottom: "1.5rem",
                        borderBottom: "1px solid var(--border2)",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--font-bricolage,sans-serif)",
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "var(--text)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        Votre profil
                      </h3>
                      <p style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 4 }}>
                        Tous les champs marqués * sont requis.
                      </p>
                    </div>

                    {/* LIGNE 2 cols */}
                    <div
                      className="form-row-2"
                      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
                    >
                      <Field label="Nom complet *" error={errors.name}>
                        <Input
                          type="text"
                          value={form.name}
                          onChange={set("name")}
                          placeholder="Jean Kamga"
                        />
                      </Field>
                      <Field label="Email *" error={errors.email}>
                        <Input
                          type="email"
                          value={form.email}
                          onChange={set("email")}
                          placeholder="jean@email.com"
                        />
                      </Field>
                    </div>

                    <div
                      className="form-row-2"
                      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
                    >
                      <Field label="Domaine tech *" error={errors.domain}>
                        <Select value={form.domain} onChange={set("domain")}>
                          <option value="">Choisir…</option>
                          {DOMAINS.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </Select>
                      </Field>
                      <Field label="Pays de résidence *" error={errors.country}>
                        <Select value={form.country} onChange={set("country")}>
                          <option value="">Choisir…</option>
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </Select>
                      </Field>
                    </div>

                    <Field label="Profil LinkedIn" error={errors.linkedin}>
                      <Input
                        type="url"
                        value={form.linkedin}
                        onChange={set("linkedin")}
                        placeholder="linkedin.com/in/votre-profil"
                        icon={<LinkedInIcon />}
                      />
                    </Field>

                    <Field label="Pourquoi rejoindre Camer'Tech ? *" error={errors.motivation}>
                      <Textarea
                        value={form.motivation}
                        onChange={set("motivation")}
                        placeholder="Décrivez votre motivation, vos attentes, ce que vous apportez à la communauté…"
                        rows={4}
                      />
                    </Field>

                    {/* Error global */}
                    {status === "error" && (
                      <div
                        style={{
                          background: "var(--red-dim)",
                          color: "var(--red)",
                          borderRadius: 10,
                          padding: "0.75rem 1rem",
                          fontSize: 14,
                          marginBottom: "1rem",
                        }}
                      >
                        Une erreur est survenue. Réessaie ou contacte-nous directement.
                      </div>
                    )}

                    {/* SUBMIT */}
                    <button
                      onClick={handleSubmit}
                      disabled={status === "loading"}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        background: status === "loading" ? "var(--green-h)" : "var(--green)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 11,
                        padding: "0.92rem",
                        fontSize: 15.5,
                        fontWeight: 600,
                        cursor: status === "loading" ? "not-allowed" : "pointer",
                        boxShadow: "0 3px 16px rgba(15,143,91,0.32)",
                        transition: "background .2s, transform .15s, box-shadow .2s",
                        letterSpacing: "-0.01em",
                        fontFamily: "inherit",
                        marginTop: "0.5rem",
                      }}
                      onMouseEnter={(e) => {
                        if (status !== "loading") {
                          e.currentTarget.style.background = "var(--green-h)";
                          e.currentTarget.style.transform = "translateY(-1px)";
                          e.currentTarget.style.boxShadow = "0 5px 22px rgba(15,143,91,0.42)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          status === "loading" ? "var(--green-h)" : "var(--green)";
                        e.currentTarget.style.transform = "";
                        e.currentTarget.style.boxShadow = "0 3px 16px rgba(15,143,91,0.32)";
                      }}
                    >
                      {status === "loading" ? (
                        <>
                          <SpinIcon /> Envoi en cours…
                        </>
                      ) : (
                        <>
                          Envoyer ma candidature <ArrowIcon />
                        </>
                      )}
                    </button>

                    <p
                      style={{
                        fontSize: 12,
                        color: "var(--faint)",
                        textAlign: "center",
                        marginTop: "1rem",
                      }}
                    >
                      Vos données sont traitées avec soin et ne seront jamais partagées sans votre
                      accord.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeUp>
        </div>
      </div>

      <style>{`
        .join-layout { grid-template-columns: 1fr 1.15fr !important; }
        .form-row-2  { grid-template-columns: 1fr 1fr !important; }
        @media(max-width:880px){ .join-layout { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
        @media(max-width:560px){ .form-row-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

/* ── Field ── */
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "1.15rem" }}>
      <label
        style={{
          display: "block",
          fontSize: 13,
          fontWeight: 500,
          color: "var(--text2)",
          marginBottom: 6,
          letterSpacing: "-0.01em",
        }}
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            style={{ fontSize: 12, color: "var(--red)", display: "block", marginTop: 5 }}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Input ── */
function Input({
  type,
  value,
  onChange,
  placeholder,
  icon,
}: React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      {icon && (
        <div
          style={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            color: "var(--muted)",
            pointerEvents: "none",
            display: "flex",
          }}
        >
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          background: "var(--bg2)",
          border: `1.5px solid ${focused ? "var(--green)" : "var(--border2)"}`,
          borderRadius: 10,
          padding: icon ? "0.72rem 1rem 0.72rem 2.5rem" : "0.72rem 1rem",
          color: "var(--text)",
          fontSize: 14.5,
          fontFamily: "inherit",
          outline: "none",
          transition: "border-color .2s, background .2s",
          boxShadow: focused ? "0 0 0 3px var(--green-dim)" : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

/* ── Select ── */
function Select({ value, onChange, children }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <select
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          background: "var(--bg2)",
          border: `1.5px solid ${focused ? "var(--green)" : "var(--border2)"}`,
          borderRadius: 10,
          padding: "0.72rem 2.25rem 0.72rem 1rem",
          color: value ? "var(--text)" : "var(--faint)",
          fontSize: 14.5,
          fontFamily: "inherit",
          outline: "none",
          cursor: "pointer",
          appearance: "none",
          WebkitAppearance: "none",
          transition: "border-color .2s",
          boxShadow: focused ? "0 0 0 3px var(--green-dim)" : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {children}
      </select>
      {/* Chevron */}
      <div
        style={{
          position: "absolute",
          right: 12,
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          color: "var(--muted)",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}

/* ── Textarea ── */
function Textarea({
  value,
  onChange,
  placeholder,
  rows,
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={{
        width: "100%",
        background: "var(--bg2)",
        border: `1.5px solid ${focused ? "var(--green)" : "var(--border2)"}`,
        borderRadius: 10,
        padding: "0.72rem 1rem",
        color: "var(--text)",
        fontSize: 14.5,
        fontFamily: "inherit",
        outline: "none",
        resize: "vertical",
        minHeight: 100,
        transition: "border-color .2s",
        boxShadow: focused ? "0 0 0 3px var(--green-dim)" : "none",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

/* ── Icons ── */
function NetworkIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function BriefIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ color: "var(--muted)" }}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function SpinIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      style={{ animation: "spin .8s linear infinite" }}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </svg>
  );
}
