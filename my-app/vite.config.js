import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      clientPort: 5173,
      port: 5173,
      host: 'localhost',
      protocol: 'ws'
    },
    watch: {
      usePolling: true
    }
  }
});