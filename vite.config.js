import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure the root is set to the current directory
  build: {
    outDir: 'dist', // Adjust the output directory if needed
  },
})