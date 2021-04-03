module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'feature': '20vw'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'white': 'rgba(247, 247, 247, 1)'
        
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
