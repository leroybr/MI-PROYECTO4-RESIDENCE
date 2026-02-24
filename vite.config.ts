import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Esto obliga a Vite a usar rutas que Vercel entiende siempre
  base: '/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
