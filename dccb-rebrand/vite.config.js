import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,    // This exposes the server to your local network
    port: 5173,
    strictPort: true,
  }
})
