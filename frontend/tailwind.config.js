/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    fontFamily: {
      // Array format:
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
