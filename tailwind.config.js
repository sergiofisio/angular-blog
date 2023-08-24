/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        md: { max: "920px" },
      },
      fontFamily: {
        main: "Segoe UI",
      },
    },
  },
  plugins: [],
};
