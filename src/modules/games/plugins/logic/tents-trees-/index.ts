import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TentsTreesLogic } from './game.logic';
import { TentsTreesGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TentsTreesPlugin: GamePlugin = {
  config,
  logic: TentsTreesLogic,
  component: TentsTreesGame,
};

// Auto-register
GameRegistry.register(TentsTreesPlugin);

export default TentsTreesPlugin;
