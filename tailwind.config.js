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
        primary: '#ADADAD',
        secondary: '#D0D0D0',
        tertiary: '#16161F',
        accent: '#0001F7',
        black: '#0E0E0E',
        white: '#FAF8F3',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['Cascadia Mono', 'monospace'],
        serif: ['Lora', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      screens: {
        mxl: '400px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
