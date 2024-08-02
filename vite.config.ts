import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from "vite-tsconfig-paths";
import { resolve } from 'path'
import dts  from 'vite-plugin-dts'
// import preserveDirectives from 'rollup-plugin-preserve-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'design-system',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        // preserveModules: true,
      },
      plugins: [
        // preserveDirectives()
      ]
    },
  }
})
