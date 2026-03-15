import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { gameService } from '@/services/api/game.service';
import type { GameFilters } from '@/types/game.types';

/**
 * Fetch all games with filters
 */
export function useGames(filters?: GameFilters) {
  return useQuery({
    queryKey: ['games', filters],
    queryFn: () => gameService.getGames(filters),
    staleTime: 10 * 60 * 1000, // 10 minutes (games don't change often)
  });
}

/**
 * Fetch single game by ID
 */
export function useGame(gameId: string) {
  return useQuery({
    queryKey: ['game', gameId],
    queryFn: () => gameService.getGame(gameId),
    enabled: !!gameId,
    staleTime: 10 * 60 * 1000,
  });
}

/**
 * Fetch games by category
 */
export function useGamesByCategory(category: string) {
  return useQuery({
    queryKey: ['games', 'category', category],
    queryFn: () => gameService.getGamesByCategory(category),
    enabled: !!category,
    staleTime: 10 * 60 * 1000,
  });
}

/**
 * Create game session
 */
export function useCreateSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (gameId: string) => gameService.createSession({ gameId }),
    onSuccess: () => {
      // Invalidate game history
      queryClient.invalidateQueries({ queryKey: ['gameHistory'] });
    },
  });
}

/**
 * Complete game session
 */
export function useCompleteSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: gameService.completeSession,
    onSuccess: () => {
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: ['gameHistory'] });
      queryClient.invalidateQueries({ queryKey: ['leaderboard'] });
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
}

/**
 * Fetch game history
 */
export function useGameHistory(userId?: string) {
  return useQuery({
    queryKey: ['gameHistory', userId],
    queryFn: () => gameService.getGameHistory(userId),
    staleTime: 1 * 60 * 1000, // 1 minute
  });
}
