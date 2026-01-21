/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#0a0f0a",
        moss: "#1a2f1a",
        leaf: "#2d5016",
        gold: "#d4af37",
        goldSoft: "#c4a853",
        earth: "#3e2723"
      },
      boxShadow: {
        glow: "0 0 24px rgba(212, 175, 55, 0.12)"
      },
      backgroundImage: {
        "gold-particles": "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.18) 0, rgba(212,175,55,0) 30%), radial-gradient(circle at 80% 30%, rgba(212,175,55,0.12) 0, rgba(212,175,55,0) 35%), radial-gradient(circle at 50% 80%, rgba(212,175,55,0.1) 0, rgba(212,175,55,0) 40%)"
      }
    }
  },
  plugins: []
};
