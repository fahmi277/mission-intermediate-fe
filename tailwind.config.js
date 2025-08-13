/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // 3s instead of 1s
      },



    },
  },
  plugins: [],
}
