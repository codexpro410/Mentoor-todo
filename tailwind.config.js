/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'main':"url('/src/assets/bg.jpg')",
      },
      colors: {
        'blue-500-50': 'rgba(59, 130, 246, 0.5)', // 50% opacity
        'green-500-50': 'rgba(16, 185, 129, 0.5)', // 50% opacity
      },
    },
  },
  plugins: [],
}