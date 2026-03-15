import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { FindDifferenceLogic } from './game.logic';
import { FindDifferenceGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const FindDifferencePlugin: GamePlugin = {
  config,
  logic: FindDifferenceLogic,
  component: FindDifferenceGame,
};

// Auto-register
GameRegistry.register(FindDifferencePlugin);

export default FindDifferencePlugin;
