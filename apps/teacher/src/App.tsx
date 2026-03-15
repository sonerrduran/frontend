/**
 * Teacher App
 * Öğretmen uygulaması
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary, Layout } from '@egitim-galaksisi/ui';
import { TeacherDashboard } from './features/dashboard/TeacherDashboard';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<TeacherDashboard />} />
            <Route path="/dashboard" element={<TeacherDashboard />} />
            <Route path="*" element={<div>404 - Sayfa bulunamadı</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
