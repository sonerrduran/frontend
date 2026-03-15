/**
 * Register Page
 * Kayıt sayfası
 */

import React, { useState } from 'react';

export function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Register logic will be implemented
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Eğitim Galaksisi</h1>
        <h2>Kayıt Ol</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Ad</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Soyad</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Kayıt Ol</button>
        </form>
      </div>
    </div>
  );
}
