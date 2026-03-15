import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ShapePuzzleLogic } from './game.logic';
import { ShapePuzzleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ShapePuzzlePlugin: GamePlugin = {
  config,
  logic: ShapePuzzleLogic,
  component: ShapePuzzleGame,
};

// Auto-register
GameRegistry.register(ShapePuzzlePlugin);

export default ShapePuzzlePlugin;
