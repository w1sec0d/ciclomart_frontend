/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F86C5',
        secondary: '#A2C634',
        tertiary: '#F28A19',
        black: '#000000',
        gray: '#212121',
        white: '#FBFBFB',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'], // Add Raleway as the default font family
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.image-blur': {
            boxShadow: '0 0 8px 8px #ebf9f6 inset',
          },
        })
      },
    ],
  },
  plugins: [],
}
