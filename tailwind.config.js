/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yt: {
          red: '#FF0000',
          black: '#0F0F0F',
          dark: '#1F1F1F',
          gray: '#272727',
          light: '#F9F9F9',
          text: '#F1F1F1',
          textSecondary: '#AAAAAA',
          hover: '#3F3F3F'
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}