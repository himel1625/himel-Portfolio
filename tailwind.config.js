/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'serif'],
      },
      colors: {
        NavyBlue: '#1A2A4B',
        navColor: '#0dccf2',
      },
    },
  },
  plugins: [],
};
