/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this line includes your file types
  ],
  theme: {
    extend: {
      // Optional: Define custom fonts or colors here if needed
      fontFamily: {
        sans: ['"Source Sans Pro"', 'sans-serif'], // Example: Add Source Sans Pro
        serif: ['"Playfair Display"', 'serif'], // Example: Add Playfair Display
      },
      colors: {
         // You can add the specific project colors here for easier use
         'coffee-brown': '#4A2C2A',
         'forest-green': '#3A5A40',
         'warm-beige': '#F5F5DC',
         'creamy-off-white': '#FAF0E6',
         'cherry-red': '#A42A28',
         'refined-gold': '#B08D57',
      }
    },
  },
  plugins: [],
}
