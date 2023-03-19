/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palatte-bg': '#FFF1DC',
        'palatte-bg-secondary': '#E8D5C4',
        'palette-not-bg': '#3A98B9'
      },
      animation: {
        'pulse-slow': 'pulse 3s linear infinite',
      },
      letterSpacing: {
        'widest-xl': '.25em',
        'widest-2xl': '.5em',
      }
    },
  },
  plugins: [],
}