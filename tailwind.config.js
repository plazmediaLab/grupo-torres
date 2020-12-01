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
      fontSize: {
        body: [
          '0.8rem',
          {
            letterSpacing: '0.025em',
            lineHeight: '1.55'
          }
        ],
        'title-lg': [
          '2rem',
          {
            letterSpacing: '0.08rem',
            lineHeight: '2.25rem'
          }
        ],
        'title-card': [
          '1.15rem',
          {
            letterSpacing: '0.06rem',
            lineHeight: '1.35'
          }
        ],
        'title-sub': [
          '1rem',
          {
            letterSpacing: '0.05rem',
            lineHeight: '1.15'
          }
        ]
      },
      margin: {
        small: '0.15rem'
      },
      padding: {
        small: '0.15rem',
        button: '0.625rem'
      },
      colors: {
        'true-gray': colors.trueGray,
        'light-blue': colors.lightBlue,
        'blue-gray': colors.blueGray,
        rose: colors.rose,
        amber: colors.amber,
        primary: {
          lightest: '#D3E3EE',
          light: '#84B1CF',
          DEFAULT: '#4F90BB',
          darkest: '#4782A8',
          dark: '#DADCE7'
        },
        secondary: {
          lightest: '#B7BCC4',
          light: '#818A98',
          DEFAULT: '#4B586C',
          darkest: '#2D3541',
          dark: '#4F90BB'
        },
        background: {
          light: '#F6F9FC',
          DEFAULT: '#EDF4F8',
          dark: '#DDE0E3'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
