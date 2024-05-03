/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
    colors: {
        BG_DEFAULT: '#0E0E0E',
        BG_CARD: '#171A22',

        WHITE_FULL: '#fff',
        WHITE: '#D2D7DC',
        GRAY: '#959592',
        laranja: '#FC5B1D',
        verde_claro: '#0B9E6A',
        azul_escuro: '#3C83F7',
        azul_claro: '#00939D',  

        PURPLE: '#7E3AF3',

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

