/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        coral: {
          50: '#FFF5F3',
          100: '#FFE8E3',
          200: '#FFD0C7',
          300: '#FFB0A0',
          400: '#F27B7B',
          500: '#E0605E',
          600: '#C44D4B',
          700: '#A33B3A',
        },
        cream: '#FFF9F5',
        'baby-pink': '#FFF0ED',
      },
    },
  },
  plugins: [],
}
