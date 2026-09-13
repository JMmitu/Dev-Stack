/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#ffffff",
          raised: "#f7f7fb",
          border: "#e7e7f0",
        },
        ink: {
          DEFAULT: "#15162b",
          muted: "#6b6d84",
        },
        brand: {
          orange: "#f97316",
          pink: "#ec4899",
          violet: "#8b5cf6",
        },
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(236, 72, 153, 0.15), 0 12px 40px -12px rgba(139, 92, 246, 0.35)",
      },
    },
  },
  plugins: [],
};
