import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      fs: {
        strict: true,
      },
      proxy: {
        '/api': {
          target: 'http://eas.80boys.com/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/local': {
          target: 'http://localhost:8090/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/local/, '')
        }
      }
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/*.ts'],
        //include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConfig
);
