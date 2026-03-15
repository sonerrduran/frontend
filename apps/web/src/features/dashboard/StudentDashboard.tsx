/**
 * Student Dashboard
 * Öğrenci kontrol paneli
 */

import React from 'react';

export function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <h1>Öğrenci Paneli</h1>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Oyunlarım</h2>
          <p>Son oynanan oyunlar ve ilerleme</p>
        </div>

        <div className="dashboard-card">
          <h2>İstatistiklerim</h2>
          <p>Toplam skor, yıldızlar ve başarılar</p>
        </div>

        <div className="dashboard-card">
          <h2>Liderlik Tablosu</h2>
          <p>Sıralamamı gör</p>
        </div>

        <div className="dashboard-card">
          <h2>Derslerim</h2>
          <p>Ders içerikleri ve ödevler</p>
        </div>
      </div>
    </div>
  );
}
