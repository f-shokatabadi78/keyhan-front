const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow:{
      my: '0 15px 45px 0px rgb(75 85 99 / 15%)',
      neon :'5px 5px 10px -5px rgba(0, 0, 0, 0.2) , -3px -2px 2px 2px #fff ,-4px -3px 4px 0px #fff',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    colors:{
      orange: colors.orange,
      cool: colors.coolGray,
      red: colors.red,
    },
    fontFamily: {
      'fd': ['Shabnam'],
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
    extend: {

    },
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