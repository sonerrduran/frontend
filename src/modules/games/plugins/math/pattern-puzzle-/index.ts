import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { PatternPuzzleLogic } from './game.logic';
import { PatternPuzzleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const PatternPuzzlePlugin: GamePlugin = {
  config,
  logic: PatternPuzzleLogic,
  component: PatternPuzzleGame,
};

// Auto-register
GameRegistry.register(PatternPuzzlePlugin);

export default PatternPuzzlePlugin;
