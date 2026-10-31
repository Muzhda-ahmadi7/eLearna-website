import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repository under /eLearna-website/; dev keeps `/`
// so local URLs stay unchanged.
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/eLearna-website/' : '/',
  plugins: [react()],
  server: {
    port: 5174,
    open: false,
  },
}))
