import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
    react()],
    server: {
      allowedHosts: [
        'c36d-2402-3a80-1f4f-bd0c-81db-60d5-8d46-8477.ngrok-free.app'
      ]
    }
})
