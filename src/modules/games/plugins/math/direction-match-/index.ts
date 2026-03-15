import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { DirectionMatchLogic } from './game.logic';
import { DirectionMatchGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const DirectionMatchPlugin: GamePlugin = {
  config,
  logic: DirectionMatchLogic,
  component: DirectionMatchGame,
};

// Auto-register
GameRegistry.register(DirectionMatchPlugin);

export default DirectionMatchPlugin;
