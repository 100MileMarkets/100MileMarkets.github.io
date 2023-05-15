/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Open Sans", ...defaultTheme.fontFamily.sans],
        "serif": ["Bellota Text", ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
