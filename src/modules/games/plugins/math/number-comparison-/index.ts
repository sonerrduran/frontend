import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NumberComparisonLogic } from './game.logic';
import { NumberComparisonGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NumberComparisonPlugin: GamePlugin = {
  config,
  logic: NumberComparisonLogic,
  component: NumberComparisonGame,
};

// Auto-register
GameRegistry.register(NumberComparisonPlugin);

export default NumberComparisonPlugin;
