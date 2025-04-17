/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navbarBackground:'#2C2C2C',
        textDefaultSecondary:'#757575',
      }
    },
  },
  plugins: [],
}