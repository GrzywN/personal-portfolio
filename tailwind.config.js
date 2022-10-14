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
        'light-grey': 'hsl(240, 4%, 16%)', // #27272a
        'dark-grey': ' 	hsl(240, 6%, 10%)', // #18181b
        'darker-grey': 'hsl(240, 7%, 8%)', //	#131316
        'sky-blue': 'hsl(198, 93%, 60%)', // #3abff8
        orange: 'hsl(18, 93%, 60%)', // #f87238
      },
      maxWidth: {
        'full-container': '90rem',
        'padding-container': '69.375rem',
      },
      minHeight: {
        'padding-container': '50.625rem',
      },
      backgroundImage: {
        container:
          'linear-gradient(45deg, hsla(198, 93%, 60%, 0), hsla(198, 93%, 60%, 0.2)), url("/backgrounds/blob-scatter.svg")',
        about:
          'url("/backgrounds/sprinkle.svg"), linear-gradient(to bottom, hsla(240, 7%, 8%, 0.75), hsla(240, 7%, 8%, 1))',
        skills: 'url("/backgrounds/blob-scatter-2.svg")',
        blog: 'url("/backgrounds/sprinkle.svg")',
      },
      backgroundSize: {
        container: 'contain',
        about: 'cover',
        skills: 'cover',
      },
      borderRadius: {
        'blob-contact': '30% 70% 44% 56% / 30% 30% 70% 70%',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
