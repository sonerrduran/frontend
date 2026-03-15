import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ShapeBuilderLogic } from './game.logic';
import { ShapeBuilderGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ShapeBuilderPlugin: GamePlugin = {
  config,
  logic: ShapeBuilderLogic,
  component: ShapeBuilderGame,
};

// Auto-register
GameRegistry.register(ShapeBuilderPlugin);

export default ShapeBuilderPlugin;
