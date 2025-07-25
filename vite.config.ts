import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
