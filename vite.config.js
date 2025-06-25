import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      // Add crypto polyfill for build
      crypto: 'crypto-browserify',
    },
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        globals: {
          crypto: 'crypto'
        }
      }
    }
  },
  optimizeDeps: {
    include: ['crypto-browserify']
  }
})
