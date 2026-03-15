import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { LoopPuzzleLogic } from './game.logic';
import { LoopPuzzleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const LoopPuzzlePlugin: GamePlugin = {
  config,
  logic: LoopPuzzleLogic,
  component: LoopPuzzleGame,
};

// Auto-register
GameRegistry.register(LoopPuzzlePlugin);

export default LoopPuzzlePlugin;
