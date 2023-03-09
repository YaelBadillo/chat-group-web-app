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

      animation: {
        'loading-400': 'loading 1s ease-in-out 0.4s infinite both',
        'loading-200': 'loading 1s ease-in-out 0.2s infinite both',
        'loading-000': 'loading 1s ease-in-out 0s infinite both',
        'skeleton-loading': 'skeleton-loading 1s linear infinite alternate',
      },

      keyframes: {
        loading: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-300%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'skeleton-loading': {
          '0%': {
            'background-color': '#3C393F',
          },

          '100%': {
            'background-color': '#454249',
          },
        },
      },
    },
  },
  plugins: [],
}
