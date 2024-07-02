import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { 
      '@resources': '/src/resources',
      '@components': '/src/components',
      '@services': '/src/services',
      '@shared': '/src/shared',
      '@entities': '/src/entities',
      '@widgets': '/src/widgets',
      '@pages': '/src/pages',
      "@features": '/src/features',
      '@app': '/src/app'
    }
  },
})
