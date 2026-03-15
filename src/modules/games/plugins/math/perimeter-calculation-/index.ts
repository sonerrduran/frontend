import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { PerimeterCalculationLogic } from './game.logic';
import { PerimeterCalculationGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const PerimeterCalculationPlugin: GamePlugin = {
  config,
  logic: PerimeterCalculationLogic,
  component: PerimeterCalculationGame,
};

// Auto-register
GameRegistry.register(PerimeterCalculationPlugin);

export default PerimeterCalculationPlugin;
