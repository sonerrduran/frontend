import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ShapeHunterLogic } from './game.logic';
import { ShapeHunterGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ShapeHunterPlugin: GamePlugin = {
  config,
  logic: ShapeHunterLogic,
  component: ShapeHunterGame,
};

// Auto-register
GameRegistry.register(ShapeHunterPlugin);

export default ShapeHunterPlugin;
