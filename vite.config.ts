import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Vercel serves from domain root; GitHub Pages serves under /supply-demand-proto/
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/supply-demand-proto/',
  plugins: [react()],
})
