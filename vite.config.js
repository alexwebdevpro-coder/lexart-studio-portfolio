import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import purgecss from '@fullhuman/postcss-purgecss'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
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
