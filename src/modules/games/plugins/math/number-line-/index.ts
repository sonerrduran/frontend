import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NumberLineLogic } from './game.logic';
import { NumberLineGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NumberLinePlugin: GamePlugin = {
  config,
  logic: NumberLineLogic,
  component: NumberLineGame,
};

// Auto-register
GameRegistry.register(NumberLinePlugin);

export default NumberLinePlugin;
