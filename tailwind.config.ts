import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#08090D",
        "base-2": "#0B0E14",
        surface: "#14171F",
        elevated: "#171A21",
        "elevated-2": "#1C202B",
        line: "rgba(255, 255, 255, 0.07)",
        "line-strong": "rgba(255, 255, 255, 0.12)",
        ink: {
          DEFAULT: "#E7EAF0",
          dim: "#9AA3B5",
          faint: "#5C6478",
        },
        primary: {
          DEFAULT: "#7C3AED",
          dim: "#6D28D9",
          soft: "#8B5CF6",
        },
        violet: "#A855F7",
        sky: "#38BDF8",
        blue: "#2563EB",
        emerald: "#10B981",
        amber: "#F59E0B",
        // Kept for any component still referencing the previous token name.
        purple: "#A855F7",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      fontSize: {
        "display-1": ["clamp(2.75rem, 3.2vw + 1.5rem, 5.25rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(2rem, 1.8vw + 1.2rem, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        h3: ["clamp(1.375rem, 0.6vw + 1.1rem, 1.75rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        body: ["1rem", { lineHeight: "1.7" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        label: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
        micro: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "10px",
        xl: "14px",
        "2xl": "18px",
        "3xl": "24px",
      },
      maxWidth: {
        editorial: "1200px",
      },
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
      transitionTimingFunction: {
        system: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
