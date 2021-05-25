module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.ts',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'feature': 'clamp(4rem, 20vw, 20rem)'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'white': 'rgba(247, 247, 247, 1)'
        
      }),
      maxWidth: {
        '1.5xl': '39rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
