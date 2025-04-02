import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this base property:
  base: '/executive-coffee-landing/', // Make sure this matches your repo name!
})