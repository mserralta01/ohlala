/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f5a8b9',
          400: '#f07594',
          500: '#e54a6f',
          600: '#d42a5b',
          700: '#b21e47',
          800: '#951b3f',
          900: '#801a39',
        },
        accent: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b1bbcc',
          400: '#8695b1',
          500: '#667799',
          600: '#526080',
          700: '#434d68',
          800: '#3a4257',
          900: '#343a4b',
        },
      },
      fontFamily: {
        sans: ['Cormorant Garamond', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};