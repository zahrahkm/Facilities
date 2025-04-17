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
        borderDisabledDefault:'#B3B3B3',
        borderDefault:'#9CA3AF',
        dangerText:'#EC221F',
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
    container: {
      center: true, 
      padding: '1rem', 
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1240px',
      },
    }
  },
  plugins: [],
}