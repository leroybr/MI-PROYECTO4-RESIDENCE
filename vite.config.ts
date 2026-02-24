import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@': '/',
    },
  },
  // Esto permite que VITE_GOOGLE_API_KEY funcione en Vercel
  envPrefix: 'VITE_',
  build: {
    // Ajusta el límite del tamaño de los chunks a 1000 KB (1 MB)
    chunkSizeWarningLimit: 1000, // puedes ajustar este valor según lo necesites
  },
});
