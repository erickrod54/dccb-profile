import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** DCCB-rebrand - Portfolio version 1.03 - vite.config - 
 * Features: 
 * 
 *      --> Adding 'tailwind'.
 * 
 * Note: This is the first component in the re brand
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,    // This exposes the server to your local network
    port: 5173,
    strictPort: true,
  }
})
