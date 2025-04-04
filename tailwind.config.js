/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat'",
      },
      colors: {
        "theme-black": "#434343",
        "theme-white": "#FFF",
        "theme-orange": "#F99544",
        "theme-red": "#0049ab",
      },
    },
  },
  plugins: [],
};
