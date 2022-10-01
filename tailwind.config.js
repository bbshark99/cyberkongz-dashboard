/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#5041BC',
      }),
      backgroundImage: (theme) => ({
        ...theme('colors'),
        secondary: 'linear-gradient(229.42deg, #3D29D0 26.93%, #C25FFF 98.11%)',
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        primary: '#0D0D0D',
        secondary: '#04103B',
        success: '#43BE83',
        warning: '#FF8057',
        white: '#FFFFFF',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        primary: '#D3CBFB',
      }),
      fontWeight: () => ({
        bold: 700,
        semibold: 600,
        regular: 400,
      }),
      fontSize: () => ({
        h1: '120px',
        h2: '100px',
        h3: '52px',
      }),
      lineHeight: () => ({
        h1: '130px',
        h2: '110px',
        h3: '70px',
      }),
    },
  },
  plugins: [],
}
