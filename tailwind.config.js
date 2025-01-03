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
        SilverGray: '#B0B0B0',
        'custom-blue': '#2F4F6F',
      },
    },
  },
  plugins: [],
};
