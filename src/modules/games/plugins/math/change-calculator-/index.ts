import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ChangeCalculatorLogic } from './game.logic';
import { ChangeCalculatorGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ChangeCalculatorPlugin: GamePlugin = {
  config,
  logic: ChangeCalculatorLogic,
  component: ChangeCalculatorGame,
};

// Auto-register
GameRegistry.register(ChangeCalculatorPlugin);

export default ChangeCalculatorPlugin;
