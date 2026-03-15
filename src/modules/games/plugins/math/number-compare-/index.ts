import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NumberCompareLogic } from './game.logic';
import { NumberCompareGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NumberComparePlugin: GamePlugin = {
  config,
  logic: NumberCompareLogic,
  component: NumberCompareGame,
};

// Auto-register
GameRegistry.register(NumberComparePlugin);

export default NumberComparePlugin;
