/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBackground:'#FAFAFA',
        primaryDefault:'#EC691A',
        secondary:'#F5F5F5',
        secondaryHover:'#E0E0E0',
        textDefault: '#1E1E1E',
        textDefaultSecondary:'#757575',
        borderDisabledDefault:'#B3B3B3',
        borderDefault:'#9CA3AF',
        positiveBackground:'#EBFFEE',
        positiveText:'#14AE5C',
        dangerBackground:'#FEE9E7',
        dangerText:'#EC221F',
        defaultIconBackground:'#975102bf',
        navbarBackground:'#2C2C2C',
        textNuetral:'#767676'
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