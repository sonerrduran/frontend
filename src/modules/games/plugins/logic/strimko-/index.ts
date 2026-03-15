import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { StrimkoLogic } from './game.logic';
import { StrimkoGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const StrimkoPlugin: GamePlugin = {
  config,
  logic: StrimkoLogic,
  component: StrimkoGame,
};

// Auto-register
GameRegistry.register(StrimkoPlugin);

export default StrimkoPlugin;
