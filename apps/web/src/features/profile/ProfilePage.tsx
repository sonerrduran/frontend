/**
 * Profile Page
 * Profil sayfası
 */

import React from 'react';

export function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src="/avatars/default.png" alt="Profile" />
          </div>
          <div className="profile-info">
            <h1>Kullanıcı Adı</h1>
            <p>email@example.com</p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-card">
            <h3>Toplam Skor</h3>
            <p className="stat-value">15,420</p>
          </div>
          <div className="stat-card">
            <h3>Yıldızlar</h3>
            <p className="stat-value">234</p>
          </div>
          <div className="stat-card">
            <h3>Oynanan Oyun</h3>
            <p className="stat-value">156</p>
          </div>
          <div className="stat-card">
            <h3>Başarılar</h3>
            <p className="stat-value">12</p>
          </div>
        </div>

        <div className="profile-sections">
          <section className="profile-section">
            <h2>Kişisel Bilgiler</h2>
            {/* Profile edit form will be here */}
          </section>

          <section className="profile-section">
            <h2>Başarılarım</h2>
            {/* Achievements list will be here */}
          </section>

          <section className="profile-section">
            <h2>Favori Oyunlarım</h2>
            {/* Favorite games list will be here */}
          </section>
        </div>
      </div>
    </div>
  );
}
