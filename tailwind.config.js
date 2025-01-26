/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'mob-sm': { min: '320px', max: '425.8px' },
        'tablet': {min: '426px', max: '767.8px'},
      },
      fontFamily:{
        monte : ["Montserrat","serif"],
        jost : ["Jost","serif"]
      }
    },
  },
  plugins: [],
}

