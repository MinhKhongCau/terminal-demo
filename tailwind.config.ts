import type { Config } from "tailwindcss";

/**
 * Every color / font / radius below resolves to a CSS variable declared in
 * src/app/index.css. Components only ever reference these semantic or brand
 * utilities (bg-background, text-primary, text-brass, border-border, …),
 * which keeps theming (light/dark) and rebrands a single-file change.
 */
const withAlpha = (variable: string) => `hsl(var(${variable}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Semantic tokens (flip between light & dark) */
        background: withAlpha("--background"),
        "background-deep": withAlpha("--background-deep"),
        foreground: withAlpha("--foreground"),
        card: {
          DEFAULT: withAlpha("--card"),
          foreground: withAlpha("--card-foreground"),
        },
        muted: {
          DEFAULT: withAlpha("--muted"),
          foreground: withAlpha("--muted-foreground"),
        },
        primary: {
          DEFAULT: withAlpha("--primary"),
          foreground: withAlpha("--primary-foreground"),
        },
        accent: {
          DEFAULT: withAlpha("--accent"),
          foreground: withAlpha("--accent-foreground"),
        },
        border: withAlpha("--border"),
        input: withAlpha("--input"),
        ring: withAlpha("--ring"),

        /* Fixed brand palette */
        canvas: {
          DEFAULT: withAlpha("--canvas"),
          deep: withAlpha("--canvas-deep"),
        },
        iron: {
          DEFAULT: withAlpha("--iron"),
          2: withAlpha("--iron-2"),
        },
        rust: withAlpha("--rust"),
        brass: {
          DEFAULT: withAlpha("--brass"),
          light: withAlpha("--brass-light"),
          pale: withAlpha("--brass-pale"),
        },
        brick: withAlpha("--brick"),
        leather: withAlpha("--leather"),
        patina: withAlpha("--patina"),
        quartz: withAlpha("--quartz"),
        copper: withAlpha("--copper"),
      },
      fontFamily: {
        display: ["var(--font-oswald)", "Oswald", "system-ui", "sans-serif"],
        script: ["var(--font-pinyon)", "Pinyon Script", "cursive"],
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius)",
        lg: "var(--radius-lg)",
      },
      maxWidth: {
        "7xl": "80rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(25%)" },
        },
      },
      animation: {
        bounce: "bounce 1.4s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
