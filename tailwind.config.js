/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js,jsx,ts,tsx}',
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './design-systems/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#5041BC',
        button: {
          primary: {
            default: '#5041BC',
            hover: '#8f84e1',
          },
        },
        input: {
          primary: {
            default: '#F5F3FF',
          },
        },
      }),
      backgroundImage: (theme) => ({
        ...theme('colors'),
        secondary: 'linear-gradient(229.42deg, #3D29D0 26.93%, #C25FFF 98.11%)',
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        primary: '#5041BC',
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
        light: 300,
      }),
      fontSize: () => ({
        h1: '120px',
        h2: '100px',
        h3: '52px',
        h4: '32px',
        h5: '24px',
        p: '16px',
      }),
      lineHeight: () => ({
        h1: '130px',
        h2: '110px',
        h3: '70px',
        h4: '44px',
        h5: '32px',
        p: '20px',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        card: {
          default: '#EBE8FF',
        },
      }),
    },
  },
  plugins: [],
}
