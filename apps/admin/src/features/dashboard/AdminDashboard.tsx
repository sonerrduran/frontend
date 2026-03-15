/**
 * Admin Dashboard
 * Yönetici kontrol paneli
 */

import React from 'react';

export function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Yönetici Paneli</h1>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Kullanıcılar</h2>
          <p>Toplam: 1,250 kullanıcı</p>
        </div>

        <div className="dashboard-card">
          <h2>Okullar</h2>
          <p>15 aktif okul</p>
        </div>

        <div className="dashboard-card">
          <h2>İstatistikler</h2>
          <p>Sistem istatistikleri</p>
        </div>

        <div className="dashboard-card">
          <h2>Ayarlar</h2>
          <p>Sistem ayarları</p>
        </div>
      </div>
    </div>
  );
}
