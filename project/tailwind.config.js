/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF7',
          100: '#FFF9E9',
          200: '#FFF3D6',
          300: '#FFE9B3',
          400: '#FFDB8A',
          500: '#FFCD61',
          600: '#DBA43D',
          700: '#B77D24',
          800: '#935913',
          900: '#7A4009'
        },
        futuristic: {
          50: '#F4F6F8',
          100: '#E9ECF1',
          200: '#D3DAE3',
          300: '#B3BFD1',
          400: '#8A9BB7',
          500: '#667A9D',
          600: '#4C5F84',
          700: '#37476B',
          800: '#253353',
          900: '#1A2442'
        }
      }
    },
  },
  plugins: [],
};