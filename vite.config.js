import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

const __dirname = new URL('.', import.meta.url).pathname;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  // Extending Tailwind CSS configuration
  theme: {
    extend: {
      colors: {
        background: '#0f1418',
        foreground: '#f0f2f5',
        card: '#141a1f',
        primary: '#20b2a6',
        'primary-foreground': '#ffffff',
        secondary: '#1f2830',
        'secondary-foreground': '#20b2a6',
        muted: '#252e37',
        'muted-foreground': '#7a8491',
        border: '#242b32',
        highlight: '#f5a623',
        surface: '#222d35ff',
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
    },
  },
});