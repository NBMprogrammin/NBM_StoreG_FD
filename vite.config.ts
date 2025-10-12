import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NBM_StoreG_FD/', // ✅ أضف هذا السطر
  server: {
    port: 5173
  }
})