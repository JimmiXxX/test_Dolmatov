/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'gray-light': 'rgba(209, 213, 219, 1)',
        'gray-default': 'rgba(107, 114, 128, 1)',
      },
      borderColor: {
        'br-gray': 'rgba(229, 231, 235, 1)'
      },
      textColor: {
        'text-blue': 'rgba(31, 41, 55, 1)',
        'text-gray': 'rgba(107, 114, 128, 1)',
      },
      boxShadow: {
        'shadow': '0px 1px 2px 0px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}