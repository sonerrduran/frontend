/**
 * Game Engine Type Definitions
 * Oyun motoru için tip tanımları
 */

// ============================================================================
// Game State Types
// ============================================================================

export interface GameState {
  score: number;
  level: number;
  lives: number;
  isPlaying: boolean;
  isPaused: boolean;
  isGameOver: boolean;
  timeRemaining?: number;
  correctAnswers: number;
  incorrectAnswers: number;
  streak: number;
  highScore: number;
}

export interface GameProgress {
  currentLevel: number;
  completedLevels: number[];
  totalScore: number;
  totalStars: number;
  achievements: string[];
  lastPlayedAt?: Date;
}

// ============================================================================
// Game Configuration Types
// ============================================================================

export interface GameConfig {
  id: string;
  name: string;
  category: GameCategory;
  difficulty: GameDifficulty;
  hasLevels: boolean;
  hasTimer: boolean;
  hasLives: boolean;
  maxLevel?: number;
  timeLimit?: number;
  initialLives?: number;
  targetScore?: number;
  minAccuracy?: number;
}

export interface LevelConfig {
  level: number;
  difficulty: number;
  timeLimit?: number;
  targetScore: number;
  questionsCount?: number;
  livesCount?: number;
}

// ============================================================================
// Game Result Types
// ============================================================================

export interface GameResult {
  score: number;
  level: number;
  stars: number;
  accuracy: number;
  timeSpent: number;
  correctAnswers: number;
  incorrectAnswers: number;
  totalQuestions: number;
  isCompleted: boolean;
  isPerfect: boolean;
  achievements?: string[];
}

export interface GameStats {
  gamesPlayed: number;
  totalScore: number;
  averageScore: number;
  highScore: number;
  totalTime: number;
  averageAccuracy: number;
  favoriteCategory?: GameCategory;
}

// ============================================================================
// Game Category & Difficulty Types
// ============================================================================

export type GameCategory =
  | 'math'
  | 'logic'
  | 'language'
  | 'memory'
  | 'speed'
  | 'puzzle'
  | 'strategy'
  | 'educational'
  | 'other';

export type GameDifficulty = 'easy' | 'medium' | 'hard' | 'expert';

export interface GameCategoryInfo {
  id: GameCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}

// ============================================================================
// Question & Answer Types
// ============================================================================

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[];
  correctAnswer: string | number | boolean;
  explanation?: string;
  difficulty?: GameDifficulty;
  points?: number;
  timeLimit?: number;
}

export type QuestionType =
  | 'multiple-choice'
  | 'true-false'
  | 'fill-in-blank'
  | 'matching'
  | 'ordering'
  | 'numeric'
  | 'text';

export interface Answer {
  questionId: string;
  userAnswer: string | number | boolean;
  isCorrect: boolean;
  timeSpent: number;
  pointsEarned: number;
}

// ============================================================================
// Timer Types
// ============================================================================

export interface TimerState {
  remainingSeconds: number;
  formattedTime: string;
  isRunning: boolean;
  isCompleted: boolean;
  progress: number;
}

export interface TimerConfig {
  duration: number;
  autoStart?: boolean;
  warningThreshold?: number;
}

// ============================================================================
// Scoring Types
// ============================================================================

export interface ScoreConfig {
  basePoints: number;
  timeBonus?: boolean;
  streakBonus?: boolean;
  difficultyMultiplier?: boolean;
  perfectBonus?: number;
}

export interface ScoreCalculation {
  baseScore: number;
  timeBonus: number;
  streakBonus: number;
  difficultyBonus: number;
  perfectBonus: number;
  totalScore: number;
}

// ============================================================================
// Achievement Types
// ============================================================================

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: AchievementCondition;
  unlockedAt?: Date;
}

export interface AchievementCondition {
  type: 'score' | 'level' | 'streak' | 'accuracy' | 'time' | 'games-played';
  value: number;
  operator: 'gte' | 'lte' | 'eq';
}

// ============================================================================
// Leaderboard Types
// ============================================================================

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  avatar?: string;
  score: number;
  level: number;
  accuracy: number;
  gamesPlayed: number;
  lastPlayedAt: Date;
}

export interface LeaderboardFilter {
  category?: GameCategory;
  difficulty?: GameDifficulty;
  timeRange?: 'daily' | 'weekly' | 'monthly' | 'all-time';
  scope?: 'global' | 'school' | 'classroom';
}

// ============================================================================
// Power-up Types
// ============================================================================

export interface PowerUp {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: PowerUpType;
  duration?: number;
  effect: PowerUpEffect;
}

export type PowerUpType =
  | 'time-freeze'
  | 'extra-life'
  | 'double-points'
  | 'hint'
  | 'skip-question'
  | 'slow-motion';

export interface PowerUpEffect {
  type: PowerUpType;
  value?: number;
  duration?: number;
}

// ============================================================================
// Game Event Types
// ============================================================================

export type GameEvent =
  | 'game-start'
  | 'game-pause'
  | 'game-resume'
  | 'game-over'
  | 'level-complete'
  | 'level-up'
  | 'answer-correct'
  | 'answer-incorrect'
  | 'time-warning'
  | 'time-up'
  | 'life-lost'
  | 'achievement-unlocked'
  | 'powerup-activated';

export interface GameEventData {
  event: GameEvent;
  timestamp: number;
  data?: any;
}

// ============================================================================
// Game Settings Types
// ============================================================================

export interface GameSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  volume: number;
  difficulty: GameDifficulty;
  showHints: boolean;
  showTimer: boolean;
  vibrationEnabled: boolean;
}

// ============================================================================
// Animation Types
// ============================================================================

export type AnimationType =
  | 'fadeIn'
  | 'fadeOut'
  | 'slideIn'
  | 'slideOut'
  | 'bounce'
  | 'shake'
  | 'pulse'
  | 'flip'
  | 'zoom'
  | 'rotate';

export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  iterations?: number | 'infinite';
  direction?: AnimationDirection;
}

// ============================================================================
// Sound Types
// ============================================================================

export type SoundType =
  | 'correct'
  | 'incorrect'
  | 'click'
  | 'success'
  | 'fail'
  | 'levelUp'
  | 'gameOver'
  | 'warning'
  | 'coin'
  | 'powerup';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
}

// ============================================================================
// Utility Types
// ============================================================================

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Rect extends Point, Size {}

export interface Color {
  r: number;
  g: number;
  b: number;
  a?: number;
}

// ============================================================================
// Hook Return Types
// ============================================================================

export interface UseGameStateReturn {
  state: GameState;
  incrementScore: (points: number) => void;
  decrementScore: (points: number) => void;
  nextLevel: () => void;
  loseLife: () => void;
  gainLife: () => void;
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  endGame: () => void;
  resetGame: () => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  setTimeRemaining: (seconds: number) => void;
}

export interface UseTimerReturn {
  remainingSeconds: number;
  formattedTime: string;
  isRunning: boolean;
  isCompleted: boolean;
  progress: number;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  addTime: (seconds: number) => void;
}
