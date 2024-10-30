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
        primary: '#E6E6E6',
        secondary: '#2C2C2E',
        accent: '#e4007c',
        darker: '#89004a',
        black: '#141517',
        white: '#ffffff',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['Cascadia Mono', 'monospace'],
        serif: ['Lora', 'serif'],
      },
      screens: {
        mxl: '400px',
      },
    },
  },
};
