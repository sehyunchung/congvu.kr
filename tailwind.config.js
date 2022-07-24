/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Libre Caslon Display", "serif"],
        comic: ["Comic Sans MS", "sans-serif"],
      },
    },
  },
  plugins: [],
};
