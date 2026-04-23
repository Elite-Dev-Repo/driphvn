/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        heading: ["'Cormorant Garamond'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      colors: {
        charcoal: "#0a0a0a",
        offwhite: "#f5f5f0",
        white: "#c9a84c",
        "white-light": "#e8d5a3",
        cream: "#f0ede8",
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.45em",
      },
    },
  },
  plugins: [],
};
