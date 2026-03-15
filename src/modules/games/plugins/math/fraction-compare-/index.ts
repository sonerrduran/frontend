import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { FractionCompareLogic } from './game.logic';
import { FractionCompareGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const FractionComparePlugin: GamePlugin = {
  config,
  logic: FractionCompareLogic,
  component: FractionCompareGame,
};

// Auto-register
GameRegistry.register(FractionComparePlugin);

export default FractionComparePlugin;
