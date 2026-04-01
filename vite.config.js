import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import purgecss from '@fullhuman/postcss-purgecss'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
            return 'vendor'
          }
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        mode === 'production' && purgecss({
          content: ['./index.html', './src/**/*.{js,jsx}'],
          safelist: ['open', 'flipped', 'visible', 'sent', 'error', 'active'],
        }),
      ].filter(Boolean),
    },
  },
}))
