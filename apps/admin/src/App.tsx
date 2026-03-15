/**
 * Admin App
 * Yönetici uygulaması
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary, Layout } from '@egitim-galaksisi/ui';
import { AdminDashboard } from './features/dashboard/AdminDashboard';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<div>404 - Sayfa bulunamadı</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
