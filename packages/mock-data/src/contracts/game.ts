/**
 * Game API Contracts
 * Oyun ile ilgili API interface'leri
 */

export type GameCategoryType =
  | 'math'
  | 'logic'
  | 'language'
  | 'memory'
  | 'speed'
  | 'puzzle'
  | 'strategy'
  | 'educational';

export type GameDifficulty = 'easy' | 'medium' | 'hard' | 'expert';

export type GradeLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface GameCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  type: GameCategoryType;
  order: number;
}

export interface Game {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  category: GameCategoryType;
  icon: string;
  thumbnail?: string;
  difficulty: GameDifficulty;
  gradeLevel?: GradeLevel;
  tags: string[];
  hasLevels: boolean;
  hasTimer: boolean;
  hasLives: boolean;
  maxLevel?: number;
  estimatedDuration: number; // dakika
  playCount: number;
  averageRating: number;
  isPopular: boolean;
  isFeatured: boolean;
  isNew: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface GameContent {
  gameId: string;
  level: number;
  questions: GameQuestion[];
  timeLimit?: number;
  targetScore: number;
  livesCount?: number;
}

export interface GameQuestion {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[];
  correctAnswer: string | number | boolean;
  explanation?: string;
  difficulty: GameDifficulty;
  points: number;
  timeLimit?: number;
  hints?: string[];
}

export type QuestionType =
  | 'multiple-choice'
  | 'true-false'
  | 'fill-in-blank'
  | 'matching'
  | 'ordering'
  | 'numeric'
  | 'text';

export interface GameSession {
  id: string;
  userId: string;
  gameId: string;
  level: number;
  score: number;
  stars: number;
  accuracy: number;
  timeSpent: number;
  correctAnswers: number;
  incorrectAnswers: number;
  isCompleted: boolean;
  isPerfect: boolean;
  startedAt: Date;
  completedAt?: Date;
}

export interface GameProgress {
  userId: string;
  gameId: string;
  currentLevel: number;
  highestLevel: number;
  totalScore: number;
  totalStars: number;
  totalPlayTime: number;
  completedLevels: number[];
  achievements: string[];
  lastPlayedAt: Date;
}
