import apiClient from './apiClient';
import { GameConfig } from '@/modules/games/engine/types/game.types';

export interface GameFilters {
  category?: string;
  gradeLevel?: number;
  difficulty?: string;
  search?: string;
}

export interface GameSession {
  id: string;
  gameId: string;
  userId: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  duration: number;
  completedAt: Date;
}

export interface CreateSessionDto {
  gameId: string;
}

export interface CompleteSessionDto {
  sessionId: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  duration: number;
}

class GameService {
  /**
   * Get all games with optional filters
   */
  async getGames(filters?: GameFilters): Promise<GameConfig[]> {
    return apiClient.get('/games', filters);
  }

  /**
   * Get game by ID
   */
  async getGame(gameId: string): Promise<GameConfig> {
    return apiClient.get(`/games/${gameId}`);
  }

  /**
   * Get games by category
   */
  async getGamesByCategory(category: string): Promise<GameConfig[]> {
    return apiClient.get(`/games/category/${category}`);
  }

  /**
   * Create a new game session
   */
  async createSession(data: CreateSessionDto): Promise<GameSession> {
    return apiClient.post('/games/sessions', data);
  }

  /**
   * Complete a game session
   */
  async completeSession(data: CompleteSessionDto): Promise<GameSession> {
    return apiClient.put(`/games/sessions/${data.sessionId}`, data);
  }

  /**
   * Get user's game history
   */
  async getGameHistory(userId?: string): Promise<GameSession[]> {
    return apiClient.get('/games/history', { userId });
  }

  /**
   * Get leaderboard
   */
  async getLeaderboard(gameId?: string, period: 'daily' | 'weekly' | 'all' = 'all') {
    return apiClient.get('/games/leaderboard', { gameId, period });
  }
}

export const gameService = new GameService();
export default gameService;
