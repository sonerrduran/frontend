import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { CrossSumsLogic } from './game.logic';
import { CrossSumsGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const CrossSumsPlugin: GamePlugin = {
  config,
  logic: CrossSumsLogic,
  component: CrossSumsGame,
};

// Auto-register
GameRegistry.register(CrossSumsPlugin);

export default CrossSumsPlugin;
