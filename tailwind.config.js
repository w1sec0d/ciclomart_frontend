/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F86C5',
        primaryDark: '#3A5E8C',
        secondary: '#A2C634',
        tertiary: '#F28A19',
        black: '#000000',
        gray: '#212121',
        lgray: '#D9D9D9',
        dgray: '#C0C0C0',
        white: '#FBFBFB',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'], // Add Raleway as the default font family
      },
    },
    plugins: [],
  },
  plugins: [],
}
