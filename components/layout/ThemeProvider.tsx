"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";

export type Theme = "light" | "dark";

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

export function applyThemeToDOM(mode: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const body = document.body;

  root.setAttribute("data-theme", mode);
  root.style.colorScheme = mode;
  if (body) {
    body.setAttribute("data-theme", mode);
    body.style.colorScheme = mode;
  }

  if (mode === "dark") {
    root.classList.add("dark");
    root.classList.remove("light");
    if (body) {
      body.classList.add("dark");
      body.classList.remove("light");
    }
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
    if (body) {
      body.classList.remove("dark");
      body.classList.add("light");
    }
  }

  updateFavicon(mode);

  try {
    localStorage.setItem("ct-theme", mode);
  } catch {
    // ignore
  }

  try {
    window.dispatchEvent(new CustomEvent("ct-theme-change", { detail: { theme: mode } }));
  } catch {
    // ignore
  }
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

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      try {
        const saved = localStorage.getItem("ct-theme");
        if (!saved) {
          const sysTheme: Theme = e.matches ? "dark" : "light";
          setTheme(sysTheme);
          applyThemeToDOM(sysTheme);
        }
      } catch {
        // ignore
      }
    };
    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const setThemeMode = useCallback((mode: Theme) => {
    setTheme(mode);
    applyThemeToDOM(mode);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      let current = prev;
      if (typeof document !== "undefined") {
        const domAttr = document.documentElement.getAttribute("data-theme");
        if (domAttr === "dark" || domAttr === "light") {
          current = domAttr;
        }
      }
      const next: Theme = current === "dark" ? "light" : "dark";
      applyThemeToDOM(next);
      return next;
    });
  }, []);

  return (
    <ThemeCtx.Provider value={{ theme: mounted ? theme : "light", setThemeMode, toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
}