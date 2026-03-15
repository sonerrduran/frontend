import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { DecimalSortLogic } from './game.logic';
import { DecimalSortGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const DecimalSortPlugin: GamePlugin = {
  config,
  logic: DecimalSortLogic,
  component: DecimalSortGame,
};

// Auto-register
GameRegistry.register(DecimalSortPlugin);

export default DecimalSortPlugin;
