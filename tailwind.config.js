/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        veryDarkGrey: '#18171F',
        neonGreen: '#A4FFAF',
        almostWhite: '#E6E5EA',
        darkGrey: '#24232C',
        grey: '#817D92',
        red: '#F64A4A',
        orange: '#FB7C58',
        yellow: '#F8CD65'

      },
      fontFamily: {
        JetBrainsMono: ['JetBrainsMono', 'monospace']
      }
    }
  },
  plugins: [],
}


