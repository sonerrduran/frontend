import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { LongestLineLogic } from './game.logic';
import { LongestLineGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const LongestLinePlugin: GamePlugin = {
  config,
  logic: LongestLineLogic,
  component: LongestLineGame,
};

// Auto-register
GameRegistry.register(LongestLinePlugin);

export default LongestLinePlugin;
