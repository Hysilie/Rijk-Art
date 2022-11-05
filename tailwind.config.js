/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        italiana: ['"Italiana"', "sans-serif"],
      },
      height: {
        100: "60rem",
      },
    },
  },
  plugins: [],
};
