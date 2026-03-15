/**
 * Game Navigation Hook
 * Oyun navigasyonu için hook
 */

import { useState, useCallback } from 'react';
import type { GameNavigationState, GameCategory } from '../types';

export function useGameNavigation() {
  const [state, setState] = useState<GameNavigationState>({
    currentGame: null,
    previousGame: null,
    category: null,
  });

  const navigateToGame = useCallback((gameId: string, category: GameCategory) => {
    setState((prev) => ({
      currentGame: gameId,
      previousGame: prev.currentGame,
      category,
    }));
  }, []);

  const navigateBack = useCallback(() => {
    setState((prev) => ({
      currentGame: prev.previousGame,
      previousGame: null,
      category: prev.category,
    }));
  }, []);

  const navigateToCategory = useCallback((category: GameCategory) => {
    setState({
      currentGame: null,
      previousGame: null,
      category,
    });
  }, []);

  const reset = useCallback(() => {
    setState({
      currentGame: null,
      previousGame: null,
      category: null,
    });
  }, []);

  return {
    ...state,
    navigateToGame,
    navigateBack,
    navigateToCategory,
    reset,
  };
}
