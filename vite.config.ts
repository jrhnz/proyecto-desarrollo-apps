import { defineConfig } from 'vite'

// Some plugins are ESM-only and may cause "ESM file cannot be loaded by `require`"
// when the config is loaded in a CommonJS context. Use a dynamic import inside
// an async config factory to ensure the plugin is imported as ESM.
export default async () => {
  const react = (await import('@vitejs/plugin-react')).default

  return defineConfig({
    plugins: [react()],
    server: {
      port: 5173
    }
  })
}
