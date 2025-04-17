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
        mainBackground:'#FAFAFA',
        primaryDefault:'#EC691A',
        secondary:'#F5F5F5',
        secondaryHover:'#E0E0E0',
        positiveBackground:'#EBFFEE',
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
}