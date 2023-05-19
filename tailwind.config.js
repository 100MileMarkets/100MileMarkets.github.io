/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "honey": "#D3B05D",
        "honey-100": "#FFF7E4",
        "honey-200": "#FFF2CF",
        "honey-300": "#FFE8B0",
        "honey-400": "#FFDD8B",
        "honey-500": "#E3B64A",
        "honey-600": "#D2A73F",
        "honey-700": "#B08D3A",
        "honey-800": "#8C650B",
        "honey-900": "#544625",
        "beet": "#5E0936",
        "beet-light": "#A71B56",
        "ruffage": "#5E622A",
        "brand-green": "#2B980A"
      },
      fontFamily: {
        "sans": ["Open Sans", ...defaultTheme.fontFamily.sans],
        "serif": ["Bellota Text", ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [],
}
