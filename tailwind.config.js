/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      rose: "#BE123C",
      deepRose: "#B91C1C",
      lightGray: "#9CA3AF",
      midGray: "#666666",
      deepGray: "#111827",
      white: "#fff",
      offWhite: "#F8E7EB",
      black: "#000",
      offBlack: "#333333",
      dustBlack: "#404040",
    },
    fontFamily: {
      raleway: ["Raleway", "sans"],
      poppins: ["Poppins", "sans"],
    },
  },
  plugins: [],
};
