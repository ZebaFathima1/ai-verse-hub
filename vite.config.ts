import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      // Proxy API calls to Django backend
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
      },
      // Proxy admin (Django admin UI) to backend so /admin opens backend admin
      '/admin': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
      },
      // Ensure Django static and media files are proxied so admin CSS/JS/images load
        '/static': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
          rewrite: (path) => path.replace(/^\/static/, '/static'),
      },
        '/media': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
          rewrite: (path) => path.replace(/^\/media/, '/media'),
        },
        // Proxy static/media so Django admin assets load through the frontend origin
        '^/static': {
          target: 'http://127.0.0.1:8000',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/static/, '/static')
        },
        '^/media': {
          target: 'http://127.0.0.1:8000',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/media/, '/media')
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
