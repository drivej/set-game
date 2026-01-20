import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    lib: {
      entry: './src/index.ts',
      name: 'SetGame',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', '@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled', 'classnames', 'bootstrap'],
      output: {
        preserveModules: false,
        assetFileNames: 'assets/[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
});

