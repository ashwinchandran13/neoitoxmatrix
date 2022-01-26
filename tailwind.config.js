module.exports = {
  content: [
    './pages/**/*.tsx', './components/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        'matrixFont': ['Antimatrix', 'Open Sans']
      },
      colors: {
        matrix_green_btn: {
          DEFAULT: '#8be0ae'
        },
        matrix_green_header: {
          DEFAULT: '#39744d'
        },
        matrix_bg_color: {
          DEFAULT: '#1f452c'
        }
      }
    },
  },
  plugins: [],
}
