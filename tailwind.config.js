/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#426A56",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#4a7d66",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#64ffda",
          foreground: "#1f2937",
        },
        slate: {
          DEFAULT: "#64748b",
          dark: "#334155",
          darker: "#1f2937",
        },
      },
      backgroundImage: {
        "gradient-main": `linear-gradient(to bottom right, rgb(31 41 55 / 0.95), rgb(55 65 81 / 0.95))`,
        "gradient-section": `linear-gradient(to bottom right, rgb(31 41 55 / 0.98), rgb(55 65 81 / 0.98))`,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

