import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { DirectionLogic } from './game.logic';
import { DirectionGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const DirectionPlugin: GamePlugin = {
  config,
  logic: DirectionLogic,
  component: DirectionGame,
};

// Auto-register
GameRegistry.register(DirectionPlugin);

export default DirectionPlugin;
