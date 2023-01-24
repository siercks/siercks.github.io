/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'},
    
    extend: {
      colors: {
        asuRed: '#8C1D40',
        asuYellow: '#FFC627',
        darkBackground: '#0f0e17',
        darkText: '#ff8906'
      }
    },
  },
  plugins: [],
}
