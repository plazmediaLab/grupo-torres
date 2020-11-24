const colors = require('tailwindcss/colors');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'true-gray': colors.trueGray,
        'light-blue': colors.lightBlue,
        'blue-gray': colors.blueGray,
        amber: colors.amber
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
