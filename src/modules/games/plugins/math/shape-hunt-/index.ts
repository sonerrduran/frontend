import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ShapeHuntLogic } from './game.logic';
import { ShapeHuntGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ShapeHuntPlugin: GamePlugin = {
  config,
  logic: ShapeHuntLogic,
  component: ShapeHuntGame,
};

// Auto-register
GameRegistry.register(ShapeHuntPlugin);

export default ShapeHuntPlugin;
