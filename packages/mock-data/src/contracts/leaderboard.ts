/**
 * Leaderboard API Contracts
 * Liderlik tablosu ile ilgili API interface'leri
 */

export type LeaderboardScope = 'global' | 'school' | 'classroom' | 'friends';

export type LeaderboardTimeRange = 'daily' | 'weekly' | 'monthly' | 'all-time';

export type LeaderboardCategory = 'overall' | 'math' | 'logic' | 'language' | 'memory' | 'speed';

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  fullName: string;
  avatar?: string;
  score: number;
  level: number;
  gamesPlayed: number;
  accuracy: number;
  stars: number;
  achievements: number;
  streak: number;
  schoolId?: string;
  schoolName?: string;
  classroomId?: string;
  classroomName?: string;
  gradeLevel?: number;
  lastPlayedAt: Date;
  isCurrentUser?: boolean;
}

export interface LeaderboardFilter {
  scope: LeaderboardScope;
  timeRange: LeaderboardTimeRange;
  category?: LeaderboardCategory;
  gradeLevel?: number;
  schoolId?: string;
  classroomId?: string;
  limit?: number;
  offset?: number;
}

export interface LeaderboardResponse {
  entries: LeaderboardEntry[];
  currentUserEntry?: LeaderboardEntry;
  totalEntries: number;
  filter: LeaderboardFilter;
  updatedAt: Date;
}

export interface LeaderboardStats {
  totalPlayers: number;
  averageScore: number;
  highestScore: number;
  mostPlayedGame: string;
  topSchool?: string;
  topClassroom?: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  points: number;
  condition: AchievementCondition;
  unlockedBy: number; // kaç kişi unlock etti
  unlockedAt?: Date;
}

export interface AchievementCondition {
  type: 'score' | 'level' | 'streak' | 'accuracy' | 'time' | 'games-played' | 'perfect-games';
  value: number;
  operator: 'gte' | 'lte' | 'eq';
  gameId?: string;
  categoryId?: string;
}

export interface UserAchievement {
  userId: string;
  achievementId: string;
  achievement: Achievement;
  unlockedAt: Date;
  progress?: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  level: number;
  requirement: string;
}

export interface UserBadge {
  userId: string;
  badgeId: string;
  badge: Badge;
  earnedAt: Date;
}

export interface Streak {
  userId: string;
  currentStreak: number;
  longestStreak: number;
  lastPlayedDate: Date;
  streakStartDate: Date;
}

export interface RankInfo {
  userId: string;
  globalRank: number;
  schoolRank?: number;
  classroomRank?: number;
  gradeRank?: number;
  percentile: number;
  nextRankScore: number;
  previousRankScore: number;
}
