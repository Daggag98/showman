import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/showman/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        waha: resolve(__dirname, 'waha.html'),
      },
    },
  },
})
