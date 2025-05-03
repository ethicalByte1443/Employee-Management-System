import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    allowedHosts: [
      'e347-2405-201-6014-108b-dc1-b33a-8488-f5d4.ngrok-free.app'
    ]
  }
})
