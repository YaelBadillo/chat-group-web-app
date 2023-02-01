/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#252329',
        secondary: '#120F13',
        tertiary: '#3C393F',
        'gray-light': '#E0E0E0',
        'gray-dark': '#828282',
        'button-primary': '#2F80ED',
        'search-input': '#3C393F',
        'group-image': '#252329',
        'group-name': '#BDBDBD',
      },
    },
  },
  plugins: [],
}
