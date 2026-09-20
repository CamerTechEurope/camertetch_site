// components/sections/CtaFinal.tsx
// ============================================
// CTA FINAL — section de clôture forte
// ============================================

export default function CtaFinal() {
  return (
    <section style={{ background: "var(--bg)", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }} className="reveal">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            color: "var(--text)",
            marginBottom: "1.25rem",
          }}
        >
          Ensemble, on transforme les connexions en{" "}
          <span style={{ color: "var(--ct-green)" }}>opportunités.</span>
        </h2>

        <p
          style={{
            fontSize: "clamp(15px, 1.5vw, 18px)",
            color: "var(--text-muted)",
            lineHeight: 1.72,
            maxWidth: 520,
            margin: "0 auto 2.5rem",
          }}
        >
          Camer&apos;Tech Europe, c&apos;est le mouvement tech de la diaspora camerounaise.
          Ambitieux, structuré, humain.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#join" className="btn btn-primary">
            Rejoindre la communauté
          </a>
          <a href="#events" className="btn btn-outline">
            Voir les événements
          </a>
          <a href="#contact" className="btn btn-outline">
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================
// app/layout.tsx
// Coller dans ton fichier layout.tsx
// ============================================
/*
import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camer'Tech Europe — Connecter les talents. Construire l'impact.",
  description:
    "Communauté des talents tech camerounais en Europe. Étudiants, développeurs, data engineers, entrepreneurs connectés autour des opportunités.",
  keywords: [
    "diaspora tech camerounaise",
    "communauté tech africaine Europe",
    "tech cameroun France",
    "événements tech africains Paris",
    "networking tech camerounais",
    "développeurs camerounais Europe",
  ],
  openGraph: {
    title: "Camer'Tech Europe",
    description: "La communauté des talents tech camerounais en Europe.",
    url: "https://camertech-europe.com",
    siteName: "Camer'Tech Europe",
    locale: "fr_FR",
    type: "website",
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camer'Tech Europe",
    description: "La communauté des talents tech camerounais en Europe.",
    // images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-theme="dark">
      <body className={`${bricolage.variable} ${dmSans.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
*/

// ============================================
// useReveal.ts — hook scroll reveal
// Coller dans lib/useReveal.ts
// ============================================
/*
"use client";
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
*/

// ============================================
// NOTES D'INTÉGRATION
// ============================================
/*
1. RÉVEAL AU SCROLL
   Dans layout.tsx, ajouter un composant client :

   // components/RevealInit.tsx
   "use client";
   import { useReveal } from "@/lib/useReveal";
   export default function RevealInit() {
     useReveal();
     return null;
   }

   Puis dans layout.tsx :
   <body>
     <RevealInit />
     <Navbar />
     <main>{children}</main>
     <Footer />
   </body>

2. IMAGES next.config.js
   Si images externes, ajouter dans next.config.ts :
   const nextConfig = {
     images: {
       domains: ["votre-cdn.com"],
     },
   };

3. ORDRE DES FICHIERS À CRÉER
   ✅ globals.css
   ✅ layout.tsx
   ✅ Navbar.tsx
   ✅ Hero.tsx
   ✅ Stats.tsx
   ✅ Mission.tsx
   ✅ Events.tsx
   ✅ CamertechConnect.tsx
   ✅ Partners.tsx
   ✅ Community.tsx
   ✅ Media.tsx
   ✅ JoinForm.tsx
   ✅ CtaFinal.tsx
   ✅ Footer.tsx
   ✅ page.tsx
*/
