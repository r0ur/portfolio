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
        primary: '#FF9EFF',
        secondary: '#FFA3D6',
        accent: '#E4007C',
        black: '#141517',
        white: '#F4ECEC',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        mono: ['Cascadia Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
