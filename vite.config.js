import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {

      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      // // 'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
      // // 'Cross-Origin-Embedder-Policy': 'credentialless',
      // 'Cross-Origin-Resource-Policy': 'cross-origin' 
    },
    watch: {
      usePolling: true
    }
    
  }
})
