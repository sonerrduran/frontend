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
          <p>Öğrenci listesi ve ilerlemeleri</p>
        </div>

        <div className="dashboard-card">
          <h2>Sınıflarım</h2>
          <p>Sınıf yönetimi</p>
        </div>

        <div className="dashboard-card">
          <h2>Raporlar</h2>
          <p>Öğrenci performans raporları</p>
        </div>

        <div className="dashboard-card">
          <h2>Öğretmen Araçları</h2>
          <p>Tahta, zamanlayıcı ve diğer araçlar</p>
        </div>
      </div>
    </div>
  );
}
