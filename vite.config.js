import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'frontend', // Set the root to the 'frontend' directory
  build: {
    outDir: '../dist', // Adjust the output directory if needed
  },
})