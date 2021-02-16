module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'diba': ['diba'],
      'kala': ['kala'],
     },
    extend: {
      gap: {
        '15': '15px',
        '30' : '30px',
       },
       colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ff: '#fff',
        dd: '#ddd',
      },
      screens:{
        xs: '639px',
        '2xl': '1550px'
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins:{
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
           marginLeft: 'auto',
           marginRight: 'auto',
           paddingLeft: '2rem',
           paddingRight: '2rem',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '992px',
          },
          '@screen xl': {
            maxWidth: '1254px',
         },
          '@screen 2xl': {
            maxWidth: '1470px',
          },
        }
      })
    }
  ],

}