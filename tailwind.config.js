const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        purple: {
          ...colors.purple,
          'custom-base': '#5E2F74',
          'custom-darker': '#432252',
        },
      },
    },
    
  },
  variants: {},
  plugins: [],
};




      