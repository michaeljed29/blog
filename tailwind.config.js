import colors from "./src/styles/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        sen: ["Sen"],
        inter: ["Inter"],
      },
      backgroundImage: {
        hero: "url(/src/assets/images/hero.png)",
      },
    },
  },
  plugins: [],
};
