import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#0F8F5B",
          hover:   "#0d7a4e",
          light:   "#e8f5ee",
          mid:     "#c8e8d8",
          dim:     "rgba(15,143,91,0.08)",
        },
        yellow: {
          DEFAULT: "#C89A2A",
          light:   "#fdf6e3",
        },
        red: {
          ct: "#B03325",
        },
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        body:    ["var(--font-dm)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;