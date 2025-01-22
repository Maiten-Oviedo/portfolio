import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import staticCopy from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    staticCopy({
      targets: [
        { src: 'src/posts/*.md', dest: 'posts' }, // Ajusta las rutas según tu estructura
      ],
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  base: '/',
})
