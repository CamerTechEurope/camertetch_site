"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setThemeMode: (mode: Theme) => void;
  toggle: () => void;
}

const ThemeCtx = createContext<ThemeContextType>({
  theme: "light",
  setThemeMode: () => {},
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeCtx);
}

function updateFavicon(mode: Theme) {
  if (typeof document === "undefined") return;
  const link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
  if (link) {
    link.href = mode === "dark" ? "/favicon-dark-32x32.png" : "/favicon-32x32.png";
  }
}

function applyThemeToDOM(mode: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", mode);
  if (document.body) {
    document.body.setAttribute("data-theme", mode);
  }
  if (mode === "dark") {
    document.documentElement.classList.add("dark");
    document.body?.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.body?.classList.remove("dark");
  }
  updateFavicon(mode);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let initial: Theme = "light";
    try {
      const saved = localStorage.getItem("ct-theme") as Theme | null;
      if (saved === "dark" || saved === "light") {
        initial = saved;
      } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        initial = "dark";
      }
    } catch {
      // ignore
    }
    setTheme(initial);
    applyThemeToDOM(initial);
  }, []);

  const setThemeMode = (mode: Theme) => {
    setTheme(mode);
    applyThemeToDOM(mode);
    try {
      localStorage.setItem("ct-theme", mode);
    } catch {
      // ignore
    }
  };

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyThemeToDOM(next);
      try {
        localStorage.setItem("ct-theme", next);
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <ThemeCtx.Provider value={{ theme: mounted ? theme : "light", setThemeMode, toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
}