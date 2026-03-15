import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ShapeLabyrinthLogic } from './game.logic';
import { ShapeLabyrinthGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ShapeLabyrinthPlugin: GamePlugin = {
  config,
  logic: ShapeLabyrinthLogic,
  component: ShapeLabyrinthGame,
};

// Auto-register
GameRegistry.register(ShapeLabyrinthPlugin);

export default ShapeLabyrinthPlugin;
