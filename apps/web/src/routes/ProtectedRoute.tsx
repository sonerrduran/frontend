/**
 * Protected Route Component
 * Korumalı route bileşeni - authentication kontrolü yapar
 */

import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'student' | 'teacher' | 'parent' | 'admin';
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  // TODO: Get auth state from store
  const isAuthenticated = false; // Placeholder
  const userRole = 'student'; // Placeholder

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}
