/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue': 'linear-gradient(135deg, #5a86dc, #76d5be)',
        'yellow': 'linear-gradient(#7c2d12 35%, #f59e0b)',
        'grayscale': 'linear-gradient(#212a42, #212a42)',
        'lavender': 'linear-gradient(135deg, #b39ddb, #7e57c2);',
        'purple': 'linear-gradient(135deg, #7e57c2, #4a148c)',
        'green': 'linear-gradient(160deg, #d8ea7b, #4aae66)',
        'gold': 'linear-gradient(160deg, #fde68a, #f59e0b);'
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      colors: {
        'light-gray': '#515b744d',
      }
    },
  },
  plugins: [],
}