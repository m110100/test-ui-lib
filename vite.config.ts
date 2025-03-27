import { defineConfig } from 'vite';
import {peerDependencies} from './package.json';
import react from '@vitejs/plugin-react';
import dts from "vite-plugin-dts";
import path from 'path';
import {libInjectCss} from "vite-plugin-lib-inject-css";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      }
    },
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    }
  },
  plugins: [react(), dts({exclude: ["**/*.stories.ts", "**/*.test.tsx"]}), libInjectCss()],
  build: {
    lib: {
      entry: {
        components: "./src/index.ts",
        theme: './src/styles/_index.scss',
      },
      name: "@plsoft/ui-kit",
      fileName: (format) => `ui-kit.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      },
    }
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles')
    }
  }
})
