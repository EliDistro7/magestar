/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Magestar Brand Palette ──
        primary: "#1a3a5c",        // Deep steel blue (dominant)
        secondary: "#ffffff",      // White (clean contrast panels)
        accent: "#f5831f",         // Magestar orange (logo + highlights)
        dark: "#0d2236",           // Dark navy (deeper backgrounds / headers)
        muted: "#e8eef4",          // Light blue-grey (subtle section backgrounds)
        "text-body": "#1a3a5c",    // Body text — same navy for cohesion
        "text-light": "#6b8aa8",   // Subdued / secondary text
        "accent-hover": "#ff9f3f", // Lighter orange for hover states
      },

      // Keep existing breakpoints + standard Tailwind ones
      screens: {
        xs: "425px",
        sm: "375px",
      },

      // Blue-to-orange gradient (matches .main-title & brand split panels)
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1a3a5c 0%, #f5831f 100%)",
        "blue-panel": "linear-gradient(180deg, #1a3a5c 0%, #0d2236 100%)",
      },

      // Subtle box shadow in brand blue
      boxShadow: {
        brand: "0 4px 24px 0 rgba(26, 58, 92, 0.18)",
        "accent-glow": "0 2px 12px 0 rgba(245, 131, 31, 0.35)",
      },

      // Type scale — Poppins is set globally in CSS
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        display: "700",
        heading: "600",
        body: "400",
        light: "300",
      },
    },
  },
  plugins: [],
};