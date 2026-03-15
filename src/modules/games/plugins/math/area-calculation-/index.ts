import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { AreaCalculationLogic } from './game.logic';
import { AreaCalculationGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const AreaCalculationPlugin: GamePlugin = {
  config,
  logic: AreaCalculationLogic,
  component: AreaCalculationGame,
};

// Auto-register
GameRegistry.register(AreaCalculationPlugin);

export default AreaCalculationPlugin;
