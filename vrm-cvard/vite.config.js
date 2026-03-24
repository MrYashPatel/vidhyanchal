import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Bind IPv4 explicitly so the dev URL matches what the browser opens; avoids
    // macOS cases where "localhost" resolves to ::1 but nothing is listening there.
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
})



