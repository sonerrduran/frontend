import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ExponentPuzzleLogic } from './game.logic';
import { ExponentPuzzleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ExponentPuzzlePlugin: GamePlugin = {
  config,
  logic: ExponentPuzzleLogic,
  component: ExponentPuzzleGame,
};

// Auto-register
GameRegistry.register(ExponentPuzzlePlugin);

export default ExponentPuzzlePlugin;
