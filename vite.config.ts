import { defineConfig } from 'vite';
import {peerDependencies} from './package.json';
import react from '@vitejs/plugin-react';
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({exclude: ["**/*.stories.ts", "**/*.test.tsx"]})],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "@plsoft/ui-kit",
      fileName: (format) => `ui-kit.${format}.js`,
      formats: ["es", "cjs", "umd"]
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  },
})
