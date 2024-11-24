import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
import eslint from 'vite-plugin-eslint'
export default defineConfig({
  plugins: [react(),eslint()],
})
