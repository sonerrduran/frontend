import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Root vite config - monorepo için
// Her workspace kendi vite.config.ts'ye sahip
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@egitim-galaksisi/ui': path.resolve(__dirname, './packages/ui/src'),
      '@egitim-galaksisi/game-engine': path.resolve(__dirname, './packages/game-engine/src'),
      '@egitim-galaksisi/shared': path.resolve(__dirname, './packages/shared/src'),
      '@egitim-galaksisi/mock-data': path.resolve(__dirname, './packages/mock-data/src'),
    },
  },
});
