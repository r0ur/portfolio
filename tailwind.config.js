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
        primary: '#E5E5E5',
        secondary: '#F6F6F6',
        tertiary: '#2C2C2E',
        accent: '#e4007c',
        black: '#000000',
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
  plugins: [require('@tailwindcss/typography')],
};
