/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'accent-light': '#e2e8f0',
        'accent-dark': '#cbd4e0',
        'dark-blue': '#0e162a',
        'accent': '#ff5d4d'
      },
      fontFamily :{
        'wix': 'Wix Madefor Display, sans-serif'
      }
    },
  },
  plugins: [],
}

