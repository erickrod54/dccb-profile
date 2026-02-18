import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import basicSsl from '@vitejs/plugin-basic-ssl';

/** DCCB-rebrand - Portfolio version 1.04 - vite.config - 
 * Features: 
 * 
 *      --> Setting and enabling 'basicSsl'.
 * 
 * Note: 'basicSsl' is for https protocol self signed certificate
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    basicSsl()//this generates the temporary self signed certificate
  ],
  server: {
    host: true,    // This exposes the server to your local network
    port: 5173,
    strictPort: true,
    https:true //Enables TLS/SSL protocol
  }
})
