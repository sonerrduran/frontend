import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MoneyCountLogic } from './game.logic';
import { MoneyCountGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MoneyCountPlugin: GamePlugin = {
  config,
  logic: MoneyCountLogic,
  component: MoneyCountGame,
};

// Auto-register
GameRegistry.register(MoneyCountPlugin);

export default MoneyCountPlugin;
