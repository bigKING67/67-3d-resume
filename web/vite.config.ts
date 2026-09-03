import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 打包后资源用相对路径（dist/index.html 引用 ./assets/...，可放任意子目录/直接打开）
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/three/')) return 'three-core'
          if (id.includes('/node_modules/@react-three/fiber/')) return 'react-three-fiber'
          if (
            id.includes('/node_modules/@react-three/postprocessing/') ||
            id.includes('/node_modules/postprocessing/')
          ) return 'three-postprocessing'
        },
      },
    },
    // three.module.js is an indivisible async vendor module (~732 kB minified
    // with the currently locked Three release).
    // Keep the warning calibrated just above that audited boundary; the initial
    // application and the remaining 3D integration layers stay independently split.
    chunkSizeWarningLimit: 750,
  },
  server: { host: true, port: 5173 },
})
