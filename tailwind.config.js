module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    screens: {
      lg: { max: '1366px' },
      md: { max: '768px' },
      sm: { max: '568px' },
    },
    spacing: {
      // unit 0.8 rem
      '0': '0px',
      '0.125': '0.1rem',
      '0.25': '0.2rem',
      '0.5': '0.4rem',
      '1': '0.8rem',
      '1.5': '1.2rem',
      '2': '1.6rem',
      '2.5': '2rem',
      '3': '2.4rem',
      '3.5': '2.8rem',
      '4': '3.2rem',
      '4.5': '3.6rem',
      '5': '4rem',
      '5.5': '4.4rem',
      '6': '4.8rem',
      '6.5': '5.2rem',
      '7': '5.6rem',
      '7.5': '6rem',
      '8': '6.4rem',
      '8.5': '6.8rem',
      '9': '7.2rem',
      '9.5': '7.6rem',
      '10': '8rem',
      '10.5': '8.4rem',
      '11': '8.8rem',
      '11.5': '9.2rem',
      '12': '9.6rem',
      '12.5': '10rem',
      '13': '10.4rem',
      '14': '11.2rem',
      '15': '12rem',
    },
    colors: {
      dark: '#333333',
      gray: '#828282',
      white: 'white',
      bgMain: '#f9f5f0',
      green: '#708a81',
      greenAction: '#4E5655',
      pink: '#dd8158',
      pinkAction: '#e1a988',
      brown: '#775b4c',
      brownLight: '#c2956e',
    },
    fontSize: {
      'tiny': '1.2rem',
      'base': '1.4rem',
      'lg': '1.6rem',
      'xl': '1.8rem',
      '2xl': '2rem',
      '3xl': '2.4rem',
      '4xl': '2.8rem',
      '5xl': '3rem',
      '6xl': '4rem',
      // '7xl': '5rem',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.4rem',
      'md': '0.8rem',
      'lg': '1.6rem',
      'full': '9999px',
    }
  },
  variants: {},
  plugins: [],
}
