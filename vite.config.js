import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@asset': resolve(__dirname, 'src/assets'),
      '@component': resolve(__dirname, 'src/components'),
      '@page': resolve(__dirname, 'src/pages'),
    }
  },
  define: {
    'process.env': {}
  }
})
