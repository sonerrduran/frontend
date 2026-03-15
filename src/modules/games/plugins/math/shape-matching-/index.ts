import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ShapeMatchingLogic } from './game.logic';
import { ShapeMatchingGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ShapeMatchingPlugin: GamePlugin = {
  config,
  logic: ShapeMatchingLogic,
  component: ShapeMatchingGame,
};

// Auto-register
GameRegistry.register(ShapeMatchingPlugin);

export default ShapeMatchingPlugin;
