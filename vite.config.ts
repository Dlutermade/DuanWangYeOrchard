import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import eslintPlugin from 'vite-plugin-eslint';
import viteCompression from 'vite-plugin-compression';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
    viteCompression(),
    legacy({
      targets: ['defaults', 'not IE 11', 'safari 11'],
    }),
  ],
  resolve: {
    alias: {
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@context': path.resolve(__dirname, './src/context'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
});
