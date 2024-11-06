/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4D5DFB',
        secondary: '#FFD900',
        letters: '#ccd6f6'
      }
    },
  },
  plugins: [],
}
