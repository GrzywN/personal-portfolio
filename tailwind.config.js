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
      maxWidth: {
        'full-container': '90rem',
        'padding-container': '69.375rem',
      },
      minHeight: {
        'padding-container': '50.625rem',
      },
      backgroundImage: {
        hero: 'url("/backgrounds/wave-hero.svg")',
      },
      backgroundSize: {
        hero: 'cover',
      },
      backgroundPosition: {
        hero: 'center',
      },
      transitionDuration: {
        400: '400ms',
      },
      borderRadius: {
        'blob-hero': '43% 57% 46% 54% / 38% 50% 50% 62% ',
        'blob-about': '30% 70% 74% 26% / 18% 50% 50% 82% ',
        'blob-contact': '30% 70% 44% 56% / 30% 30% 70% 70%',
      },
    },
  },
  plugins: [],
};
