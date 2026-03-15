import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { LongestObjectLogic } from './game.logic';
import { LongestObjectGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const LongestObjectPlugin: GamePlugin = {
  config,
  logic: LongestObjectLogic,
  component: LongestObjectGame,
};

// Auto-register
GameRegistry.register(LongestObjectPlugin);

export default LongestObjectPlugin;
