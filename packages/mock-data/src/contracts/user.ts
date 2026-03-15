/**
 * User API Contracts
 * Kullanıcı ile ilgili API interface'leri
 */

export type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say';

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  avatar?: string;
  role: UserRole;
  gender?: Gender;
  birthDate?: Date;
  gradeLevel?: number;
  schoolId?: string;
  classroomId?: string;
  parentId?: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}

export interface Student extends User {
  role: 'student';
  gradeLevel: number;
  classroomId: string;
  parentId?: string;
  teacherIds: string[];
  totalScore: number;
  totalStars: number;
  gamesPlayed: number;
  achievements: string[];
  favoriteGames: string[];
}

export interface Teacher extends User {
  role: 'teacher';
  schoolId: string;
  classroomIds: string[];
  studentIds: string[];
  subjects: string[];
  bio?: string;
}

export interface Parent extends User {
  role: 'parent';
  childrenIds: string[];
  phone?: string;
}

export interface Admin extends User {
  role: 'admin';
  schoolId?: string;
  permissions: string[];
}

export interface UserProfile {
  userId: string;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  preferences: UserPreferences;
  statistics: UserStatistics;
}

export interface UserPreferences {
  language: string;
  theme: 'light' | 'dark' | 'auto';
  soundEnabled: boolean;
  musicEnabled: boolean;
  notificationsEnabled: boolean;
  emailNotifications: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface UserStatistics {
  totalGamesPlayed: number;
  totalScore: number;
  totalStars: number;
  totalPlayTime: number; // dakika
  averageAccuracy: number;
  currentStreak: number;
  longestStreak: number;
  achievementsUnlocked: number;
  favoriteCategory?: string;
  rank?: number;
}

export interface UserSession {
  userId: string;
  token: string;
  refreshToken: string;
  expiresAt: Date;
  createdAt: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  user: User;
  session: UserSession;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  gradeLevel?: number;
  birthDate?: Date;
}

export interface RegisterResponse {
  user: User;
  session: UserSession;
}

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  bio?: string;
  preferences?: Partial<UserPreferences>;
}
