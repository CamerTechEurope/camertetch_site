"use client";
import { useTheme } from "@/components/layout/ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
}

export default function ThemeToggle({ className = "", showLabels = true }: ThemeToggleProps) {
  const { theme, setThemeMode } = useTheme();

  return (
    <div
      className={`theme-switcher ${className}`}
      role="group"
      aria-label="Choisir l'apparence"
    >
      <button
        type="button"
        id="themeBtnLight"
        data-set-theme="light"
        onClick={() => setThemeMode("light")}
        className={`theme-btn ${theme === "light" ? "active" : ""}`}
        aria-pressed={theme === "light"}
        aria-label="Mode clair"
        title="Activer le mode clair"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        {showLabels && <span className="theme-btn-label">Clair</span>}
      </button>

      <button
        type="button"
        id="themeBtnDark"
        data-set-theme="dark"
        onClick={() => setThemeMode("dark")}
        className={`theme-btn ${theme === "dark" ? "active" : ""}`}
        aria-pressed={theme === "dark"}
        aria-label="Mode sombre"
        title="Activer le mode sombre"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
        {showLabels && <span className="theme-btn-label">Sombre</span>}
      </button>
    </div>
  );
}
