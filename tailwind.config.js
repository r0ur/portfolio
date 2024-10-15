/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './assets/**/*.{html,js}',
    './css/**/*.{html,js}',
    './fonts/**/*.{html,js}',
    './js/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F9F1A5',
        secondary: '#1ADD13',
        accent: '#F9AAB0',
        black: '#0e0d0e',
        white: '#f2f2f2',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        mono: ['Cascadia Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
