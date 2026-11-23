import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Camer'Tech Europe",
    description: "La communauté des talents tech camerounais en Europe.",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-dark-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-theme="light" suppressHydrationWarning>
      <body className={`${bricolage.variable} ${dmSans.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('ct-theme');
                  var isDark = saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  var t = isDark ? 'dark' : 'light';
                  document.documentElement.setAttribute('data-theme', t);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}