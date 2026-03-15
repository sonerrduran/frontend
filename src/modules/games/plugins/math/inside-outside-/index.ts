import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { InsideOutsideLogic } from './game.logic';
import { InsideOutsideGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const InsideOutsidePlugin: GamePlugin = {
  config,
  logic: InsideOutsideLogic,
  component: InsideOutsideGame,
};

// Auto-register
GameRegistry.register(InsideOutsidePlugin);

export default InsideOutsidePlugin;
