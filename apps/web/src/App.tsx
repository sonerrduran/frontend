/**
 * App Component
 * Ana uygulama bileşeni - Minimal routing yapısı
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { ErrorBoundary } from '@egitim-galaksisi/ui';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
