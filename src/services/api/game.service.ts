import { apiClient } from './client';

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
  async getGames(filters?: GameFilters) {
    return apiClient.get('/games', filters);
  }

  async getGame(gameId: string) {
    return apiClient.get(`/games/${gameId}`);
  }

  async getGamesByCategory(category: string) {
    return apiClient.get(`/games/category/${category}`);
  }

  async createSession(data: CreateSessionDto) {
    return apiClient.post('/games/sessions', data);
  }

  async completeSession(data: CompleteSessionDto) {
    return apiClient.put(`/games/sessions/${data.sessionId}`, data);
  }

  async getGameHistory(userId?: string) {
    return apiClient.get('/games/history', { userId });
  }

  async getLeaderboard(gameId?: string, period: 'daily' | 'weekly' | 'all' = 'all') {
    return apiClient.get('/games/leaderboard', { gameId, period });
  }
}

export const gameService = new GameService();
