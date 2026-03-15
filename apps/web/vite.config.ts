import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: './',
    server: {
      port: 5173,
      host: '0.0.0.0',
    },
    plugins: [
      react()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@egitim-galaksisi/ui': path.resolve(__dirname, '../../packages/ui/src'),
        '@egitim-galaksisi/game-engine': path.resolve(__dirname, '../../packages/game-engine/src'),
        '@egitim-galaksisi/shared': path.resolve(__dirname, '../../packages/shared/src'),
        '@egitim-galaksisi/mock-data': path.resolve(__dirname, '../../packages/mock-data/src'),
      },
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Vendor chunks
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                return 'react-vendor';
              }
              if (id.includes('framer-motion') || id.includes('lucide-react')) {
                return 'ui-vendor';
              }
              return 'vendor';
            }
            
            // Game category chunks
            if (id.includes('/features/games/math-games/')) return 'math-games';
            if (id.includes('/features/games/logic-games/')) return 'logic-games';
            if (id.includes('/features/games/language-games/')) return 'language-games';
            if (id.includes('/features/life-skills/')) return 'life-skills';
            if (id.includes('/features/fast-reading/')) return 'fast-reading';
            if (id.includes('/features/focus/')) return 'focus-games';
            if (id.includes('/features/learning/')) return 'learning-tools';
            
            // Feature chunks
            if (id.includes('/features/dashboard/')) return 'dashboard';
            if (id.includes('/features/profile/')) return 'profile';
            if (id.includes('/features/leaderboard/')) return 'leaderboard';
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      sourcemap: mode === 'development',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production',
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  };
});
