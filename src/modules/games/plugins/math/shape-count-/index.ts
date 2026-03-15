import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ShapeCountLogic } from './game.logic';
import { ShapeCountGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ShapeCountPlugin: GamePlugin = {
  config,
  logic: ShapeCountLogic,
  component: ShapeCountGame,
};

// Auto-register
GameRegistry.register(ShapeCountPlugin);

export default ShapeCountPlugin;
