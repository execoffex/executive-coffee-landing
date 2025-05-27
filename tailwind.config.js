/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This line ensures Tailwind scans your React components
  ],
  theme: {
    extend: {
       fontFamily: { // Add this if you want to ensure Noto Sans SC is available via Tailwind
       'sans': ['Inter', 'sans-serif'],
       'chinese': ['Noto Sans SC', 'Inter', 'sans-serif'],
     },
   },
  },
  plugins: [],
}
