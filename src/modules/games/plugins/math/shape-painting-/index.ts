import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ShapePaintingLogic } from './game.logic';
import { ShapePaintingGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ShapePaintingPlugin: GamePlugin = {
  config,
  logic: ShapePaintingLogic,
  component: ShapePaintingGame,
};

// Auto-register
GameRegistry.register(ShapePaintingPlugin);

export default ShapePaintingPlugin;
