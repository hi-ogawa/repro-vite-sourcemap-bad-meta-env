import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false, // "minify" doesn't matter but for the ease of debug
    sourcemap: true,
  },
});
