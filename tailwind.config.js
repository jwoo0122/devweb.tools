/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "site-title": ["Sedgwick Ave", "cursive"],
      paragraph: [
        "Dosis",
        "Inter",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {},
  },
  plugins: [],
};
