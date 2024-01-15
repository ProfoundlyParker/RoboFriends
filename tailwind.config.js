/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'card-bg': '#78cdfe',
        'search-bg': '#cdecff',
        'search-border': '#96ccff',
      },
      height: {
        'scroll-h': '500px',
      }
    },
  },
  plugins: [],
}

