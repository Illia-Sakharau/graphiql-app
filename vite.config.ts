import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    environment: 'jsdom',
    setupFiles: ['setupTests.ts'],
    include: ["src/**/*.{test,spec}.{js,mjs,ts,mts,cts,jsx,tsx}"],
    globals: true
  },
})
