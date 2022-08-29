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
        hero: 'url("/backgrounds/wave-hero.svg"),url("/backgrounds/blob-hero.svg")',
        'hero-lg':
          'url("/backgrounds/wave-hero.svg"),url("/backgrounds/blob-hero.svg")',
        about: 'url("/backgrounds/blob-about.svg")',
        'about-lg': 'url("/backgrounds/blob-about.svg")',
        portfolio: 'url("/backgrounds/wave-portfolio.svg")',
      },
      backgroundSize: {
        hero: 'cover, 69.375rem',
        'hero-lg': 'cover, 69.375rem',
        about: 'cover',
        'about-lg': '69.375rem',
        portfolio: 'cover',
      },
      backgroundPosition: {
        hero: 'center, center',
        'hero-lg': 'center, right',
        about: 'center',
        'about-lg': 'left',
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
