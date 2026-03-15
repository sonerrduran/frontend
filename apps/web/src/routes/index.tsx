/**
 * App Routes
 * Ana routing yapılandırması
 */

import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

// Lazy load pages
const LoginPage = lazy(() => import('../features/auth').then(m => ({ default: m.LoginPage })));
const RegisterPage = lazy(() => import('../features/auth').then(m => ({ default: m.RegisterPage })));
const StudentDashboard = lazy(() => import('../features/dashboard').then(m => ({ default: m.StudentDashboard })));
const TeacherDashboard = lazy(() => import('../features/dashboard').then(m => ({ default: m.TeacherDashboard })));
const ProfilePage = lazy(() => import('../features/profile').then(m => ({ default: m.ProfilePage })));
const LeaderboardPage = lazy(() => import('../features/leaderboard').then(m => ({ default: m.LeaderboardPage })));

// Loading component
function LoadingFallback() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">Yükleniyor...</div>
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teacher"
          element={
            <ProtectedRoute requiredRole="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <LeaderboardPage />
            </ProtectedRoute>
          }
        />

        {/* Games routes will be added */}
        {/* Lessons routes will be added */}
        {/* Other feature routes will be added */}

        {/* 404 */}
        <Route path="*" element={<div>404 - Sayfa bulunamadı</div>} />
      </Routes>
    </Suspense>
  );
}
