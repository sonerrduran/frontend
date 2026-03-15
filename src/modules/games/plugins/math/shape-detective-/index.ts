import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ShapeDetectiveLogic } from './game.logic';
import { ShapeDetectiveGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ShapeDetectivePlugin: GamePlugin = {
  config,
  logic: ShapeDetectiveLogic,
  component: ShapeDetectiveGame,
};

// Auto-register
GameRegistry.register(ShapeDetectivePlugin);

export default ShapeDetectivePlugin;
