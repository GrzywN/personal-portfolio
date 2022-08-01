/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      rounded: ['"M PLUS Rounded 1c"', 'sans-serif'],
    },
    extend: {
      colors: {
        'light-grey': '#27272a',
        'dark-grey': '#18181b',
        'sky-blue': '#38bdf8',
        orange: '#f87238',
      },
      // width: {
      //   "full-container": "90rem",
      //   "padding-container": "69.375rem",
      // },
      maxWidth: {
        'full-container': '90rem',
        'padding-container': '69.375rem',
      },
      backgroundImage: {
        'yellow-circles': 'url("/backgrounds/circle-scatter-haikei.svg")',
        'bottom-blue-waves': 'url("/backgrounds/layered-waves-haikei.svg")',
        'upper-wave': 'url("/backgrounds/wave-haikei.svg")',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
