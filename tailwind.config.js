module.exports = {
  content: [
    './pages/**/*.tsx', './components/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        'matrixFont': ['Antimatrix', 'Open Sans'],
        'matrixCode': ['"Matrix Code NFI"', 'sans-serif']
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
        },
        radial_matrix_bg: {
          DEFAULT: 'radial-gradient(100% 185.14% at 100% 100%, rgb(36, 151, 93) 0%, rgb(101, 222, 138) 100%)'
        }
      },
      backgroundImage: {
        'matrix-circular': "radial-gradient(#39744d 10%, #000000 80%, #000000 100%)"
      },
    },
  },
  plugins: [],
}
