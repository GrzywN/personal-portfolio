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
        'darker-grey': '#0c0c0e',
        'almost-black': '#09090b', // Dodać zamiast czystego czarnego
        'sky-blue': '#38bdf8',
        orange: '#f87238',
      },
      maxWidth: {
        'full-container': '90rem',
        'padding-container': '69.375rem',
      },
      minHeight: {
        'padding-container': '50.625rem',
      },
      backgroundImage: {
        container: 'url("/backgrounds/blob-scatter.svg")',
        hero: 'url("/backgrounds/wave-hero.svg")',
        about: 'url("/backgrounds/circle-scatter.svg")',
      },
      backgroundSize: {
        container: 'contain',
        hero: 'cover',
        about: 'contain',
      },
      backgroundPosition: {
        hero: 'center',
      },
      transitionDuration: {
        400: '400ms',
      },
      borderRadius: {
        'blob-contact': '30% 70% 44% 56% / 30% 30% 70% 70%',
      },
    },
  },
  plugins: [],
};
