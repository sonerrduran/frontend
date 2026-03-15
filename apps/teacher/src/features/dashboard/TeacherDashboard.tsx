/**
 * Teacher Dashboard
 * Öğretmen kontrol paneli
 */

import React from 'react';

export function TeacherDashboard() {
  return (
    <div className="teacher-dashboard">
      <h1>Öğretmen Paneli</h1>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Öğrencilerim</h2>
          <p>Toplam: 45 öğrenci</p>
        </div>

        <div className="dashboard-card">
          <h2>Sınıflarım</h2>
          <p>3 aktif sınıf</p>
        </div>

        <div className="dashboard-card">
          <h2>Raporlar</h2>
          <p>Performans raporları</p>
        </div>

        <div className="dashboard-card">
          <h2>Araçlar</h2>
          <p>Öğretmen araçları</p>
        </div>
      </div>
    </div>
  );
}
