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
      backgroundImage: {
        'dashboard': "url('/image_bg_footer.jpg')", // ← nama bebas
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite', // 3s instead of 1s
      },



    },
  },
  plugins: [],
}
