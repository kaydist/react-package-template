import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['my-react-package']
  },
  resolve: {
    alias: {
      'my-react-package': '../dist'
    }
  }
})
