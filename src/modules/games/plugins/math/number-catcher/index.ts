import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NumberCatcherLogic } from './game.logic';
import { NumberCatcherGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NumberCatcherPlugin: GamePlugin = {
  config,
  logic: NumberCatcherLogic,
  component: NumberCatcherGame,
};

// Auto-register
GameRegistry.register(NumberCatcherPlugin);

export default NumberCatcherPlugin;
