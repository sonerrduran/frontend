/**
 * Login Page
 * Giriş sayfası
 */

import React, { useState } from 'react';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic will be implemented
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Eğitim Galaksisi</h1>
        <h2>Giriş Yap</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Giriş Yap</button>
        </form>
      </div>
    </div>
  );
}
