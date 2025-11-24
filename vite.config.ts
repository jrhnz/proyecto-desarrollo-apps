import { defineConfig } from 'vite'

// Some plugins are ESM-only and may cause "ESM file cannot be loaded by `require`"
// when the config is loaded in a CommonJS context. Use a dynamic import inside
// an async config factory to ensure the plugin is imported as ESM.
export default async () => {
  const react = (await import('@vitejs/plugin-react')).default

  return defineConfig({
    plugins: [react()],
    server: {
      // bind to all interfaces (IPv4 + IPv6). This avoids cases where the dev
      // server only listens on ::1 and 127.0.0.1 refuses connection.
      host: true,
      port: 5173
    }
  })
}
