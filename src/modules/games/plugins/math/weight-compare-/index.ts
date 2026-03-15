import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { WeightCompareLogic } from './game.logic';
import { WeightCompareGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const WeightComparePlugin: GamePlugin = {
  config,
  logic: WeightCompareLogic,
  component: WeightCompareGame,
};

// Auto-register
GameRegistry.register(WeightComparePlugin);

export default WeightComparePlugin;
